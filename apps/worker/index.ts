/* eslint-env worker */
/// <reference types="@cloudflare/workers-types" />

import type { EmailMessage } from './types/email';
import type { ContactFormData } from './types/contact';

// Microsoft Graph API configuration
const GRAPH_API_URL = 'https://graph.microsoft.com/v1.0';
const TOKEN_URL = 'https://login.microsoftonline.com';

interface Env {
  // KV namespaces
  RATE_LIMIT_KV: KVNamespace;
  CONSUMER_EMAIL_KV: KVNamespace;

  // Environment variables
  CF_M365_TENANT_ID: string;
  CF_M365_CLIENT_ID: string;
  CF_M365_CLIENT_SECRET: string;
  CF_M365_SENDER: string;
  RECIPIENT_EMAIL: string;
  
  // Turnstile (optional for gradual rollout)
  CF_TURNSTILE_SECRET?: string;
}

// Allowed origins for CORS
const ALLOWED_ORIGINS = [
  'https://praxisnavigator.io',
  'https://app.praxisnavigator.io',
  'https://test.app.praxisnavigator.io',
  'https://dev.app.praxisnavigator.io',
];

// Security headers
const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'none'; script-src 'none'; object-src 'none';",
};

// Get CORS headers based on origin
function getCorsHeaders(origin: string | null): Record<string, string> {
  const allowedOrigin = origin && ALLOWED_ORIGINS.includes(origin) ? origin : 'null';
  
  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    ...SECURITY_HEADERS,
  };
}

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 3, // max 3 requests per window (tightened)
  globalWindowMs: 60 * 60 * 1000, // 1 hour for global limits
  globalMaxRequests: 50, // max 50 requests globally per hour
  suspiciousCountries: ['CN', 'RU', 'KP', 'IR'], // High-risk countries
  maxRequestsRisky: 1, // Only 1 request per window for risky IPs
};

// Content filtering patterns
const CONTENT_FILTERS = {
  maliciousPatterns: [
    /<script[^>]*>/i,
    /javascript:/i,
    /on\w+=/i,
    /<iframe[^>]*>/i,
    /\bexec\s*\(/i,
    /\beval\s*\(/i,
    /\.(exe|bat|cmd|scr|vbs|js)$/i,
  ],
  spamPatterns: [
    /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
    /\$\d+.*million/i,
    /click here now/i,
    /(free|cheap).*(money|cash|prize)/i,
  ],
  suspiciousPatterns: [
    /\b(test|testing|asdf|qwerty|hello world)\b/i,
    /^[a-z]$/i,
    /(..)\1{10,}/i, // Repeated characters
  ],
};

// Progressive rate limiting configuration
interface ProgressiveRateLimit {
  attempts: number;
  lastAttempt: number;
  delays: number[]; // Progressive delay in seconds
}

const PROGRESSIVE_DELAYS = [0, 5, 15, 60, 300, 900]; // 0s, 5s, 15s, 1m, 5m, 15m

// Cloudflare Turnstile verification
async function verifyTurnstile(token: string, clientIP: string, env: Env): Promise<boolean> {
  if (!env.CF_TURNSTILE_SECRET || !token) {
    // If Turnstile not configured, skip verification (gradual rollout)
    return true;
  }

  const formData = new FormData();
  formData.append('secret', env.CF_TURNSTILE_SECRET);
  formData.append('response', token);
  formData.append('remoteip', clientIP);

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json() as { success: boolean; 'error-codes'?: string[] };
    return result.success;
  } catch (error) {
    // Fail open for availability
    console.error('Turnstile verification failed:', error);
    return true;
  }
}

// Progressive rate limiting
async function getProgressiveDelay(env: Env, clientIP: string): Promise<number> {
  const key = `progressive:${clientIP}`;
  const existing = await env.RATE_LIMIT_KV.get(key);
  
  let rateLimitData: ProgressiveRateLimit = existing 
    ? JSON.parse(existing)
    : { attempts: 0, lastAttempt: 0, delays: PROGRESSIVE_DELAYS };
  
  const now = Date.now();
  const timeSinceLastAttempt = (now - rateLimitData.lastAttempt) / 1000;
  
  // Reset if enough time has passed (1 hour)
  if (timeSinceLastAttempt > 3600) {
    rateLimitData.attempts = 0;
  }
  
  const delayIndex = Math.min(rateLimitData.attempts, rateLimitData.delays.length - 1);
  const requiredDelay = rateLimitData.delays[delayIndex];
  
  if (timeSinceLastAttempt < requiredDelay) {
    return requiredDelay - Math.floor(timeSinceLastAttempt);
  }
  
  // Update attempt count
  rateLimitData.attempts++;
  rateLimitData.lastAttempt = now;
  
  await env.RATE_LIMIT_KV.put(key, JSON.stringify(rateLimitData), {
    expirationTtl: 3600, // 1 hour
  });
  
  return 0; // No delay needed
}

// Get Microsoft Graph access token
async function getAccessToken(env: Env): Promise<string> {
  const tokenUrl = `${TOKEN_URL}/${env.CF_M365_TENANT_ID}/oauth2/v2.0/token`;

  const params = new URLSearchParams();
  params.append('client_id', env.CF_M365_CLIENT_ID);
  params.append('client_secret', env.CF_M365_CLIENT_SECRET);
  params.append('scope', 'https://graph.microsoft.com/.default');
  params.append('grant_type', 'client_credentials');

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error(`Failed to get access token: ${response.status}`);
  }

  const data = (await response.json()) as { access_token: string };
  return data.access_token;
}

// Send email using Microsoft Graph API
async function sendEmail(env: Env, formData: ContactFormData): Promise<void> {
  const accessToken = await getAccessToken(env);

  const emailMessage: EmailMessage = {
    message: {
      subject: `Contact Form: ${formData.subject || 'Contact Request'}`,
      body: {
        contentType: 'text',
        content: `Name: ${formData.name || `${formData.firstName} ${formData.lastName}`}\nEmail: ${formData.email}\nCompany: ${formData.company || 'Not provided'}\nMessage: ${formData.message}`,
      },
      toRecipients: [
        {
          emailAddress: {
            address: env.RECIPIENT_EMAIL,
          },
        },
      ],
      from: {
        emailAddress: {
          address: env.CF_M365_SENDER,
        },
      },
    },
  };

  const response = await fetch(
    `${GRAPH_API_URL}/users/${env.CF_M365_SENDER}/sendMail`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailMessage),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send email: ${response.status} - ${errorText}`);
  }
}

// Validate origin
function validateOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin');
  const referer = request.headers.get('Referer');
  
  // Allow requests with valid origin
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    return true;
  }
  
  // Fallback: check referer if origin is missing (some browsers/tools)
  if (!origin && referer) {
    try {
      const refererUrl = new URL(referer);
      const refererOrigin = `${refererUrl.protocol}//${refererUrl.host}`;
      return ALLOWED_ORIGINS.includes(refererOrigin);
    } catch {
      return false;
    }
  }
  
  return false;
}

// Get country from CF headers
function getCountryCode(request: Request): string | null {
  return request.headers.get('CF-IPCountry');
}

// Enhanced rate limiting check
async function checkRateLimit(env: Env, clientIP: string, country: string | null): Promise<{ allowed: boolean; reason?: string }> {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;
  const globalWindowStart = now - RATE_LIMIT.globalWindowMs;
  
  // Determine if this is a risky location
  const isRiskyLocation = country && RATE_LIMIT.suspiciousCountries.includes(country);
  const maxRequests = isRiskyLocation ? RATE_LIMIT.maxRequestsRisky : RATE_LIMIT.maxRequests;
  
  // Check IP-specific rate limit
  const ipKey = `rate_limit:${clientIP}`;
  const existing = await env.RATE_LIMIT_KV.get(ipKey);
  let requests: number[] = existing ? JSON.parse(existing) : [];
  
  // Filter out old requests
  requests = requests.filter(timestamp => timestamp > windowStart);
  
  if (requests.length >= maxRequests) {
    return { 
      allowed: false, 
      reason: isRiskyLocation ? 'Rate limit exceeded for your location' : 'Rate limit exceeded'
    };
  }
  
  // Check global rate limit
  const globalKey = 'rate_limit:global';
  const globalExisting = await env.RATE_LIMIT_KV.get(globalKey);
  let globalRequests: number[] = globalExisting ? JSON.parse(globalExisting) : [];
  
  globalRequests = globalRequests.filter(timestamp => timestamp > globalWindowStart);
  
  if (globalRequests.length >= RATE_LIMIT.globalMaxRequests) {
    return { allowed: false, reason: 'Service temporarily unavailable' };
  }
  
  // Update counters
  requests.push(now);
  globalRequests.push(now);
  
  await Promise.all([
    env.RATE_LIMIT_KV.put(ipKey, JSON.stringify(requests), {
      expirationTtl: Math.ceil(RATE_LIMIT.windowMs / 1000),
    }),
    env.RATE_LIMIT_KV.put(globalKey, JSON.stringify(globalRequests), {
      expirationTtl: Math.ceil(RATE_LIMIT.globalWindowMs / 1000),
    }),
  ]);
  
  return { allowed: true };
}

// Log consumer email
async function logConsumerEmail(env: Env, email: string): Promise<void> {
  const key = `consumer:${email}`;
  const timestamp = new Date().toISOString();

  await env.CONSUMER_EMAIL_KV.put(key, timestamp, {
    expirationTtl: 30 * 24 * 60 * 60, // 30 days
  });
}

// Content filtering
function analyzeContent(text: string): { 
  isMalicious: boolean; 
  isSpam: boolean; 
  isSuspicious: boolean; 
  issues: string[];
} {
  const issues: string[] = [];
  
  // Check for malicious content
  const isMalicious = CONTENT_FILTERS.maliciousPatterns.some(pattern => {
    if (pattern.test(text)) {
      issues.push('Contains potentially malicious content');
      return true;
    }
    return false;
  });
  
  // Check for spam
  const isSpam = CONTENT_FILTERS.spamPatterns.some(pattern => {
    if (pattern.test(text)) {
      issues.push('Contains spam-like content');
      return true;
    }
    return false;
  });
  
  // Check for suspicious content
  const isSuspicious = CONTENT_FILTERS.suspiciousPatterns.some(pattern => {
    if (pattern.test(text)) {
      issues.push('Contains suspicious patterns');
      return true;
    }
    return false;
  });
  
  return { isMalicious, isSpam, isSuspicious, issues };
}

// Honeypot detection
function detectHoneypot(data: any): boolean {
  // Check for common honeypot field names
  const honeypotFields = ['website', 'url', 'phone2', 'fax', 'address2', 'comment2'];
  
  for (const field of honeypotFields) {
    if (data[field] && data[field].toString().trim() !== '') {
      return true;
    }
  }
  
  // Check for hidden field patterns
  if (data.hidden || data.trap || data.bot_check) {
    return true;
  }
  
  return false;
}

// Validate form data with enhanced checks
function validateContactForm(data: any): ContactFormData {
  const { firstName, lastName, name, email, subject, message, company } = data;

  // Check for honeypot
  if (detectHoneypot(data)) {
    // Silent rejection - don't reveal it's a honeypot
    throw new Error('Please complete all required fields correctly');
  }

  // Use combined name or build from firstName/lastName
  const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

  if (!fullName || fullName.length < 2) {
    throw new Error('Please provide your full name (at least 2 characters)');
  }

  if (fullName.length > 100) {
    throw new Error('Name cannot exceed 100 characters');
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (
    !email ||
    typeof email !== 'string' ||
    !emailRegex.test(email.trim()) ||
    email.length > 254
  ) {
    throw new Error('Please provide a valid email address');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    throw new Error('Message must be at least 10 characters long');
  }

  if (message.length > 2000) {
    throw new Error('Message cannot exceed 2000 characters');
  }

  // Analyze content for security issues
  const combinedContent = `${fullName} ${email} ${subject || ''} ${message} ${company || ''}`;
  const contentAnalysis = analyzeContent(combinedContent);
  
  if (contentAnalysis.isMalicious) {
    throw new Error('Your message contains invalid content. Please review and try again.');
  }
  
  if (contentAnalysis.isSpam) {
    throw new Error('Your message appears to be spam. Please provide a genuine inquiry.');
  }

  return {
    firstName: firstName || fullName.split(' ')[0] || '',
    lastName: lastName || fullName.split(' ').slice(1).join(' ') || '',
    name: fullName,
    email: email.trim().toLowerCase(),
    subject: subject?.trim() || 'Contact Request',
    message: message.trim(),
    company:
      company && typeof company === 'string' ? company.trim() : undefined,
  } as ContactFormData;
}

// Handle contact form submission
async function handleContactRequest(
  request: Request,
  env: Env
): Promise<Response> {
  const origin = request.headers.get('Origin');
  const corsHeaders = getCorsHeaders(origin);
  
  try {
    // Validate origin
    if (!validateOrigin(request)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Invalid request origin',
        }),
        {
          status: 403,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Get client information
    const clientIP =
      request.headers.get('CF-Connecting-IP') ||
      request.headers.get('X-Forwarded-For') ||
      'unknown';
    
    const country = getCountryCode(request);

    // Check progressive delay first (before other validations)
    const delaySeconds = await getProgressiveDelay(env, clientIP);
    if (delaySeconds > 0) {
      return new Response(
        JSON.stringify({
          success: false,
          error: `Please wait ${delaySeconds} seconds before trying again.`,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': delaySeconds.toString(),
            ...corsHeaders,
          },
        }
      );
    }

    // Enhanced rate limiting
    const rateLimitResult = await checkRateLimit(env, clientIP, country);
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: rateLimitResult.reason || 'Request limit exceeded. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': '900', // 15 minutes
            ...corsHeaders,
          },
        }
      );
    }

    // Parse and validate form data
    const rawFormData = await request.json();
    const formData = rawFormData as any; // Type assertion for form data access
    
    // Verify Turnstile if configured and token provided
    if (formData.turnstileToken && !await verifyTurnstile(formData.turnstileToken, clientIP, env)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Security verification failed. Please try again.',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }
    
    const validatedData = validateContactForm(formData);

    // Send email
    await sendEmail(env, validatedData);

    // Log consumer email
    await logConsumerEmail(env, validatedData.email);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Message sent successfully!',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  } catch (error) {
    // Log security events silently (no console output)
    const errorMessage = error instanceof Error ? error.message : 'Processing error';
    
    // Store security incident for monitoring
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';
    const securityKey = `security:${Date.now()}:${clientIP}`;
    
    try {
      await env.RATE_LIMIT_KV.put(securityKey, JSON.stringify({
        timestamp: new Date().toISOString(),
        ip: clientIP,
        country: getCountryCode(request),
        userAgent: request.headers.get('User-Agent'),
        error: errorMessage,
      }), { expirationTtl: 7 * 24 * 60 * 60 }); // 7 days
    } catch {
      // Silent fail for security logging
    }

    // Determine appropriate status code
    const status = errorMessage.includes('Rate limit') || errorMessage.includes('Request limit') ? 429 :
                   errorMessage.includes('Invalid') || errorMessage.includes('malicious') || 
                   errorMessage.includes('spam') ? 400 : 500;

    return new Response(
      JSON.stringify({
        success: false,
        error: errorMessage,
      }),
      {
        status,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}

// Main fetch handler
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const origin = request.headers.get('Origin');
    const corsHeaders = getCorsHeaders(origin);

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      // Validate origin for preflight requests too
      if (!validateOrigin(request)) {
        return new Response(null, {
          status: 403,
          headers: {
            ...SECURITY_HEADERS,
          },
        });
      }
      
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // Route to contact endpoint
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContactRequest(request, env);
    }

    // Return 404 for unknown routes with security headers
    return new Response('Not Found', {
      status: 404,
      headers: corsHeaders,
    });
  },
};
