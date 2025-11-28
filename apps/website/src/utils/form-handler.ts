import type { ContactFormData, ContactFormResponse } from '../types/contact';

// Extended form data interface for form handling
export interface ExtendedFormData {
  // Core ContactFormData fields
  firstName: string;
  lastName: string;
  name?: string;
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  message: string;
  subject?: string;
  honeypot?: string;
  source?: string;
  timestamp?: string;
  formType?: string;
  language?: 'en' | 'no';
  urgency?: string;
  requestType?: string;
  segment?: string;
  employeeCount?: string;
}

// Form submission handler
export async function submitContactForm(
  formData: ContactFormData,
  _additionalContext?: Record<string, any>
): Promise<ContactFormResponse> {
  console.log(
    '🟠 [DEBUG] submitContactForm called with data:',
    JSON.stringify(formData, null, 2)
  );
  console.log(
    '🟠 [DEBUG] Additional context:',
    JSON.stringify(_additionalContext, null, 2)
  );

  try {
    const requestBody = JSON.stringify(formData);
    console.log('🟠 [DEBUG] Request body to be sent:', requestBody);
    console.log('🟠 [DEBUG] Making fetch request to /api/contact');

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    console.log('🟠 [DEBUG] Received response from /api/contact');
    console.log('🟠 [DEBUG] Response status:', response.status);
    console.log('🟠 [DEBUG] Response statusText:', response.statusText);
    console.log('🟠 [DEBUG] Response ok:', response.ok);
    console.log(
      '🟠 [DEBUG] Response headers:',
      Object.fromEntries(response.headers.entries())
    );

    let result: ContactFormResponse;
    const contentType = response.headers.get('content-type');
    console.log('🟠 [DEBUG] Response content-type:', contentType);

    if (contentType && contentType.includes('application/json')) {
      console.log('🟠 [DEBUG] Parsing response as JSON');
      result = (await response.json()) as ContactFormResponse;
      console.log(
        '🟠 [DEBUG] Parsed JSON result:',
        JSON.stringify(result, null, 2)
      );
    } else {
      console.log('🟠 [DEBUG] Response is not JSON, parsing as text');
      const text = await response.text();
      console.log('🟠 [DEBUG] Response text:', text.substring(0, 200) + '...');
      throw new Error(
        `Server error: ${response.status} - ${text.substring(0, 100)}...`
      );
    }

    if (!response.ok) {
      console.log('🔴 [DEBUG] Response not ok, throwing error');
      console.log('🔴 [DEBUG] Error details:', result.error);
      throw new Error(result.error || `HTTP error! status: ${response.status}`);
    }

    console.log('🟢 [DEBUG] Response is ok, submission successful');

    // Track successful submission
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('🟠 [DEBUG] Tracking successful submission with gtag');
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Success',
      });
    }

    console.log(
      '🟢 [DEBUG] Returning successful result:',
      JSON.stringify(result, null, 2)
    );
    return result;
  } catch (error) {
    console.log('🔴 [DEBUG] Exception caught in submitContactForm:', error);
    console.log('🔴 [DEBUG] Error type:', typeof error);
    console.log('🔴 [DEBUG] Error instanceof Error:', error instanceof Error);
    if (error instanceof Error) {
      console.log('🔴 [DEBUG] Error message:', error.message);
      console.log('🔴 [DEBUG] Error stack:', error.stack);
    }
    console.error('Form submission error:', error);

    // Track failed submission
    if (typeof window !== 'undefined' && window.gtag) {
      console.log('🟠 [DEBUG] Tracking failed submission with gtag');
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Error',
      });
    }

    const errorResult = {
      success: false,
      error:
        error instanceof Error ? error.message : 'An unexpected error occurred',
    };

    console.log(
      '🔴 [DEBUG] Returning error result:',
      JSON.stringify(errorResult, null, 2)
    );
    return errorResult;
  }
}

// Alternative form submission function (alias for backwards compatibility)
export const submitForm = submitContactForm;

// Error message extraction utility
export function getErrorMessage(error: unknown, _language?: string): string {
  // Handle language-specific error messages if needed
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  return 'An unexpected error occurred';
}
