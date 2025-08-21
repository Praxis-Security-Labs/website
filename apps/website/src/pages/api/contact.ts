import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();

    // Basic validation
    if (
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.company
    ) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // In a real implementation, you would:
    // 1. Send to HubSpot CRM
    // 2. Send notification emails
    // 3. Store in database
    // 4. Trigger marketing automation

    // For now, we'll just log the submission
    // eslint-disable-next-line no-console
    console.log('Form submission received:', {
      formType: formData.formType,
      segment: formData.segment,
      email: formData.email,
      company: formData.company,
      employeeCount: formData.employeeCount,
      language: formData.language,
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        id: `contact_${Date.now()}`,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Contact form submission error:', error);

    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
