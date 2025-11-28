/* eslint-env worker */
/* global KVNamespace */
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
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 5, // max 5 requests per window
};

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

// Rate limiting check
async function checkRateLimit(env: Env, clientIP: string): Promise<boolean> {
  const key = `rate_limit:${clientIP}`;
  const now = Date.now();
  const windowStart = now - RATE_LIMIT.windowMs;

  // Get existing requests
  const existing = await env.RATE_LIMIT_KV.get(key);
  let requests: number[] = existing ? JSON.parse(existing) : [];

  // Filter out old requests
  requests = requests.filter(timestamp => timestamp > windowStart);

  // Check if limit exceeded
  if (requests.length >= RATE_LIMIT.maxRequests) {
    return false;
  }

  // Add current request
  requests.push(now);

  // Store updated requests with TTL
  await env.RATE_LIMIT_KV.put(key, JSON.stringify(requests), {
    expirationTtl: Math.ceil(RATE_LIMIT.windowMs / 1000),
  });

  return true;
}

// Log consumer email
async function logConsumerEmail(env: Env, email: string): Promise<void> {
  const key = `consumer:${email}`;
  const timestamp = new Date().toISOString();

  await env.CONSUMER_EMAIL_KV.put(key, timestamp, {
    expirationTtl: 30 * 24 * 60 * 60, // 30 days
  });
}

// Validate form data
function validateContactForm(data: any): ContactFormData {
  const { firstName, lastName, name, email, subject, message, company } = data;

  // Use combined name or build from firstName/lastName
  const fullName = name || `${firstName || ''} ${lastName || ''}`.trim();

  if (!fullName || fullName.length < 2) {
    throw new Error('Name is required and must be at least 2 characters');
  }

  if (
    !email ||
    typeof email !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    throw new Error('Valid email is required');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    throw new Error('Message is required and must be at least 10 characters');
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
  try {
    // Get client IP for rate limiting
    const clientIP =
      request.headers.get('CF-Connecting-IP') ||
      request.headers.get('X-Forwarded-For') ||
      'unknown';

    // Check rate limit
    const rateLimitOk = await checkRateLimit(env, clientIP);
    if (!rateLimitOk) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Rate limit exceeded. Please try again later.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Parse and validate form data
    const formData = await request.json();
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
    console.error('Contact form error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error:
          error instanceof Error
            ? error.message
            : 'An error occurred while processing your request',
      }),
      {
        status: 500,
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

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    // Route to contact endpoint
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContactRequest(request, env);
    }

    // Return 404 for unknown routes
    return new Response('Not Found', {
      status: 404,
      headers: corsHeaders,
    });
  },
};
