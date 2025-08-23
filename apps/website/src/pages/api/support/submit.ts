import type { APIRoute } from 'astro';

interface SupportRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  requestType: 'trial-help' | 'technical-question' | 'demo-request';
  message: string;
  urgency: 'low' | 'medium' | 'high';
  pageContext: string;
  utm?: {
    source: string;
    medium: string;
    campaign: string;
    content: string;
  };
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const data: SupportRequest = await request.json();

    // Basic validation
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Missing required fields' },
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: 'Invalid email format' },
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Generate ticket ID
    const ticketId = `TRIAL-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

    // For now, we'll log the request and simulate success
    // In production, this would integrate with HubSpot or other CRM
    console.log('Support Request Received:', {
      ticketId,
      timestamp: new Date().toISOString(),
      data: {
        ...data,
        // Don't log sensitive info in production
        email: data.email.replace(/(.{3}).*@/, '$1***@'),
      },
    });

    // Here you would typically:
    // 1. Save to database
    // 2. Send to CRM (HubSpot)
    // 3. Send confirmation email
    // 4. Create support ticket

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return new Response(
      JSON.stringify({
        success: true,
        data: { ticketId },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Support form submission error:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: { message: 'Internal server error' },
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
