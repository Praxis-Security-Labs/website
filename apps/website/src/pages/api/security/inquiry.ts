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

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email to security team
    // 3. Create ticket in support system
    // 4. Send confirmation email to requester

    // For now, we'll log the inquiry and simulate success
    console.log('Security Inquiry Received:', inquiryData);

    // Track analytics
    const trackingData = {
      event: 'security_inquiry_submitted',
      inquiry_type: 'security_compliance',
      urgency,
      compliance_framework: complianceFramework || 'none',
      language,
      company_name: company,
      timestamp: inquiryData.timestamp,
    };

    // In production, you'd send this to your analytics service
    console.log('Security Inquiry Analytics:', trackingData);

    // Simulate email notifications (replace with actual email service)
    const notifications = [
      {
        to: 'security@praxisnavigator.com',
        subject: `Security Inquiry - ${urgency.toUpperCase()} Priority`,
        template: 'security-team-notification',
        data: inquiryData,
      },
      {
        to: email,
        subject:
          language === 'no'
            ? 'Takk for din sikkerhetsforespørsel'
            : 'Thank you for your security inquiry',
        template: 'inquiry-confirmation',
        data: { ...inquiryData, language },
      },
    ];

    console.log('Email Notifications Queued:', notifications.length);

    // Generate inquiry ID for tracking
    const inquiryId = `SEC-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        inquiryId,
        message:
          language === 'no'
            ? 'Takk for din forespørsel. Vårt sikkerhetsteam vil kontakte deg innen 24 timer.'
            : 'Thank you for your inquiry. Our security team will contact you within 24 hours.',
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
