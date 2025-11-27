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

    // Send to Worker function for email processing
    const workerResponse = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        formType: 'support',
        requestType: data.requestType,
        urgency: data.urgency,
      }),
    });

    const workerResult = await workerResponse.json();

    if (!workerResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: { message: workerResult.error },
        }),
        {
          status: workerResponse.status,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: { ticketId, message: workerResult.message },
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
