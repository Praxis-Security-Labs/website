interface FormSubmission {
  firstName?: string;
  lastName?: string;
  name?: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  formType: 'contact' | 'support' | 'security';
  language?: 'en' | 'no';
  [key: string]: any;
}

interface EmailResponse {
  success: boolean;
  message?: string;
  error?: string;
}

interface GraphTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

// Consumer email domains - complete server-side list
const CONSUMER_EMAIL_DOMAINS = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'live.com',
  'msn.com',
  'yahoo.co.uk',
  'gmail.co.uk',
  'hotmail.co.uk',
  'mail.ru',
  'yandex.com',
  'yandex.ru',
  'online.no',
  'hotmail.fr',
  'yahoo.fr',
  'yahoo.de',
  'gmx.com',
  'gmx.de',
  't-online.de',
  'web.de',
  'freenet.de',
  'yahoo.it',
  'libero.it',
  'yahoo.es',
  'icloud.com',
  'me.com',
  'mac.com',
  'protonmail.com',
  'proton.me',
  'tutanota.com',
  'tutamail.com',
  'rediffmail.com',
  '163.com',
  '126.com',
  'qq.com',
  'sina.com',
  'naver.com',
  'daum.net',
  'hanmail.net',
  'yahoo.com.au',
  'bigpond.com',
  'optusnet.com.au',
  'telstra.com',
  'tpg.com.au',
];

export async function onRequest(context: any): Promise<Response> {
  const { request, env } = context;

  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const formData: FormSubmission = await request.json();
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    // Basic validation
    if (!formData.email || !formData.message) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            formData.language === 'no'
              ? 'Påkrevde felt mangler'
              : 'Missing required fields',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            formData.language === 'no'
              ? 'Ugyldig e-postformat'
              : 'Invalid email format',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Consumer email validation
    const domain = formData.email.toLowerCase().split('@')[1];
    if (CONSUMER_EMAIL_DOMAINS.includes(domain)) {
      // Log rejected domain
      if (env.CONSUMER_EMAIL_LOG_KV) {
        const logKey = `rejected_${domain}_${Date.now()}`;
        await env.CONSUMER_EMAIL_LOG_KV.put(
          logKey,
          JSON.stringify({
            domain,
            email: formData.email,
            timestamp: new Date().toISOString(),
            ip: clientIP,
            formType: formData.formType,
          }),
          { expirationTtl: 86400 * 30 }
        ); // 30 days
      }

      return new Response(
        JSON.stringify({
          success: false,
          error:
            formData.language === 'no'
              ? 'Vennligst bruk din bedrifts e-postadresse'
              : 'Please use your company email address',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Rate limiting check
    const rateLimitKey = `rate_limit_${clientIP}_${formData.email}`;
    if (env.RATE_LIMIT_KV) {
      const existing = await env.RATE_LIMIT_KV.get(rateLimitKey);
      if (existing) {
        return new Response(
          JSON.stringify({
            success: false,
            error:
              formData.language === 'no'
                ? 'For mange forespørsler. Prøv igjen senere.'
                : 'Too many requests. Please try again later.',
          }),
          {
            status: 429,
            headers: { 'Content-Type': 'application/json' },
          }
        );
      }
    }

    // Send email via Microsoft Graph
    const emailResult = await sendEmailViaGraph(formData, env);

    if (!emailResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            formData.language === 'no'
              ? 'Kunne ikke sende e-post. Prøv igjen senere.'
              : 'Failed to send email. Please try again later.',
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Set rate limit after successful submission
    if (env.RATE_LIMIT_KV) {
      await env.RATE_LIMIT_KV.put(rateLimitKey, 'submitted', {
        expirationTtl: 86400 * 7, // 7 days
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message:
          formData.language === 'no'
            ? 'Takk! Vi tar kontakt snart.'
            : "Thank you! We'll be in touch soon.",
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

async function getGraphAccessToken(env: any): Promise<string | null> {
  const tokenUrl = `https://login.microsoftonline.com/${env.CF_M365_TENANT_ID}/oauth2/v2.0/token`;

  const params = new URLSearchParams({
    client_id: env.CF_M365_CLIENT_ID,
    client_secret: env.CF_M365_CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      console.error('Token request failed:', await response.text());
      return null;
    }

    const tokenData: GraphTokenResponse = await response.json();
    return tokenData.access_token;
  } catch (error) {
    console.error('Token request error:', error);
    return null;
  }
}

async function sendEmailViaGraph(
  formData: FormSubmission,
  env: any
): Promise<EmailResponse> {
  // Get OAuth2 access token
  const accessToken = await getGraphAccessToken(env);
  if (!accessToken) {
    return {
      success: false,
      error: 'Failed to authenticate with Microsoft Graph',
    };
  }

  // Form type mapping
  const formTypeLabels = {
    contact: 'Contact',
    support: 'Support',
    security: 'Security',
  };

  const formLabel = formTypeLabels[formData.formType] || 'Contact';
  const subject = `[${formLabel}] Contact Request`;

  // Build email body
  const displayName =
    formData.firstName && formData.lastName
      ? `${formData.firstName} ${formData.lastName}`
      : formData.name || 'Unknown';

  const emailBody = buildEmailBody(formData, displayName);

  // Microsoft Graph sendMail API payload
  const emailPayload = {
    message: {
      subject: subject,
      body: {
        contentType: 'Text',
        content: emailBody,
      },
      toRecipients: [
        {
          emailAddress: {
            address: env.RECIPIENT_EMAIL,
          },
        },
      ],
      replyTo: [
        {
          emailAddress: {
            address: formData.email,
            name: displayName,
          },
        },
      ],
    },
    saveToSentItems: false,
  };

  try {
    const graphUrl = `https://graph.microsoft.com/v1.0/users/${env.CF_M365_SENDER}/sendMail`;

    const response = await fetch(graphUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailPayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Graph API error:', response.status, errorText);
      return { success: false, error: `Graph API failed: ${response.status}` };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: 'Email send failed' };
  }
}

function buildEmailBody(formData: FormSubmission, displayName: string): string {
  const message = formData.message || 'No message provided';

  // Build field listing
  const fields = Object.entries(formData)
    .filter(([key, value]) => value && key !== 'message')
    .map(([key, value]) => `- ${key}: ${value}`)
    .join('\n');

  // JSON payload
  const jsonPayload = JSON.stringify(formData, null, 2);

  return `Hello,

You received a new contact form submission:

${message}

${'='.repeat(37)}

Contact Details:
- Name: ${displayName}
- Email: ${formData.email}
${fields}

Raw Form Data (JSON):
${jsonPayload}`;
}
