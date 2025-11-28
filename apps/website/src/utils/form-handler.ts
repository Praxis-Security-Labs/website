import type { ContactFormData } from '../types/contact';

// Form submission handler
export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    let result;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      result = await response.json();
    } else {
      // Handle non-JSON responses (e.g., HTML error pages)
      const text = await response.text();
      throw new Error(`Server error: ${response.status} - ${text.substring(0, 100)}...`);
    }
    
    if (!response.ok) {
      throw new Error(result.error || `HTTP error! status: ${response.status}`);
    }
    
    // Track successful submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Success',
      });
    }
    
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    
    // Track failed submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Error',
      });
    }
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}
