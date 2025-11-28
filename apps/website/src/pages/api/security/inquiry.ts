import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const {
      name,
      email,
      company,
      role,
      securityQuestion,
      complianceFramework,
      urgency = 'medium',
      language = 'en',
    } = body;

    // Validate required fields
    if (!name || !email || !company || !securityQuestion) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            language === 'no'
              ? 'Påkrevde felt mangler'
              : 'Required fields missing',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error:
            language === 'no'
              ? 'Ugyldig e-postadresse'
              : 'Invalid email address',
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Prepare inquiry data
    const inquiryData = {
      timestamp: new Date().toISOString(),
      contact: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company.trim(),
        role: role?.trim() || '',
      },
      inquiry: {
        question: securityQuestion.trim(),
        complianceFramework: complianceFramework?.trim() || '',
        urgency,
        language,
      },
      metadata: {
        userAgent: request.headers.get('user-agent') || '',
        referer: request.headers.get('referer') || '',
        ip:
          request.headers.get('x-forwarded-for') ||
          request.headers.get('x-real-ip') ||
          'unknown',
      },
    };

    // Send to Worker function for email processing
    const workerResponse = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inquiryData),
    });

    const workerResult = await workerResponse.json();

    if (!workerResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: workerResult.error,
        }),
        {
          status: workerResponse.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Generate inquiry ID for tracking
    const inquiryId = `SEC-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        inquiryId,
        message:
          workerResult.message ||
          (language === 'no'
            ? 'Takk for din forespørsel. Vårt sikkerhetsteam vil kontakte deg innen 24 timer.'
            : 'Thank you for your inquiry. Our security team will contact you within 24 hours.'),
        estimatedResponse: urgency === 'high' ? '4 hours' : '24 hours',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Security inquiry submission error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: 'Server error. Please try again later.',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

// Handle OPTIONS request for CORS
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
