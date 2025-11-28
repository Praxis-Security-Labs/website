/**
 * Unified Form Handler for Praxis Navigator Website
 *
 * Core form handling utilities for both React components and static forms.
 * Follows KISS, DRY, YAGNI, and SOLID principles.
 */

import { validateBusinessEmail } from './email-validation';

// Common form field types
export interface BaseFormData {
  email: string;
  message: string;
  language?: 'en' | 'no';
  formType:
    | 'contact'
    | 'support'
    | 'security'
    | 'enterprise'
    | 'compliance'
    | 'speaking';
}

// Extended form data with optional fields
export interface ExtendedFormData extends BaseFormData {
  firstName?: string;
  lastName?: string;
  name?: string;
  company?: string;
  phone?: string;
  jobTitle?: string;
  requestType?: string;
  urgency?: string;
  segment?: string;
  employeeCount?: string;
  [key: string]: any;
}

// Form submission result
export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
  validationErrors?: Record<string, string>;
}

// Validation rules
const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  message: {
    required: true,
    minLength: 10,
  },
  firstName: {
    minLength: 1,
  },
  lastName: {
    minLength: 1,
  },
  name: {
    minLength: 2,
  },
  company: {
    minLength: 2,
  },
};

/**
 * Validates form data and returns validation errors
 */
export function validateFormData(
  data: Partial<ExtendedFormData>,
  language: 'en' | 'no' = 'en'
): Record<string, string> {
  const errors: Record<string, string> = {};
  const messages = getValidationMessages(language);

  // Required fields validation
  if (!data.email?.trim()) {
    errors.email = messages.emailRequired;
  } else if (!VALIDATION_RULES.email.pattern.test(data.email)) {
    errors.email = messages.emailInvalid;
  } else {
    // Business email validation
    const businessValidation = validateBusinessEmail(data.email, language);
    if (!businessValidation.isValid) {
      errors.email = businessValidation.message || messages.emailInvalid;
    }
  }

  if (!data.message?.trim()) {
    errors.message = messages.messageRequired;
  } else if (data.message.length < VALIDATION_RULES.message.minLength) {
    errors.message = messages.messageTooShort;
  }

  // Optional fields validation
  if (
    data.firstName &&
    data.firstName.length < VALIDATION_RULES.firstName.minLength
  ) {
    errors.firstName = messages.firstNameInvalid;
  }

  if (
    data.lastName &&
    data.lastName.length < VALIDATION_RULES.lastName.minLength
  ) {
    errors.lastName = messages.lastNameInvalid;
  }

  if (data.name && data.name.length < VALIDATION_RULES.name.minLength) {
    errors.name = messages.nameInvalid;
  }

  if (
    data.company &&
    data.company.length < VALIDATION_RULES.company.minLength
  ) {
    errors.company = messages.companyInvalid;
  }

  return errors;
}

/**
 * Submits form data to the unified Cloudflare Worker endpoint
 */
export async function submitForm(
  data: ExtendedFormData,
  additionalContext?: Record<string, any>
): Promise<FormSubmissionResult> {
  try {
    // Pre-submission validation
    const validationErrors = validateFormData(data, data.language);
    if (Object.keys(validationErrors).length > 0) {
      return {
        success: false,
        validationErrors,
      };
    }

    // Prepare submission payload
    const payload = {
      ...data,
      ...additionalContext,
      timestamp: new Date().toISOString(),
    };

    // Track analytics
    trackFormSubmission(data.formType, data.language);

    // Submit to Cloudflare Worker
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        error: result.error || getErrorMessage('submitError', data.language),
      };
    }

    return {
      success: true,
      message: result.message || getSuccessMessage(data.language),
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: getErrorMessage('networkError', data.language),
    };
  }
}

/**
 * Simple submit function for static forms (Astro pages)
 */
export async function submitStaticForm(
  formElement: HTMLFormElement,
  formType: ExtendedFormData['formType'],
  language: 'en' | 'no' = 'en'
): Promise<void> {
  const formData = new FormData(formElement);
  const data: ExtendedFormData = {
    formType,
    language,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
    firstName:
      (formData.get('firstName') as string) ||
      (formData.get('first-name') as string),
    lastName:
      (formData.get('lastName') as string) ||
      (formData.get('last-name') as string),
    name: formData.get('name') as string,
    company: formData.get('company') as string,
    phone: formData.get('phone') as string,
  };

  // Add form-specific fields
  const entries = Array.from(formData.entries());
  entries.forEach(([key, value]) => {
    if (!(key in data) && value) {
      data[key] = value as string;
    }
  });

  const result = await submitForm(data);

  if (result.success) {
    showSuccessMessage(result.message || getSuccessMessage(language));
    formElement.reset();
  } else {
    showErrorMessage(result.error || getErrorMessage('submitError', language));
  }
}

// Helper functions
function getValidationMessages(language: 'en' | 'no') {
  return {
    emailRequired:
      language === 'no' ? 'E-post er påkrevd' : 'Email is required',
    emailInvalid:
      language === 'no' ? 'Ugyldig e-postformat' : 'Invalid email format',
    messageRequired:
      language === 'no' ? 'Melding er påkrevd' : 'Message is required',
    messageTooShort:
      language === 'no' ? 'Meldingen er for kort' : 'Message is too short',
    firstNameInvalid:
      language === 'no' ? 'Ugyldig fornavn' : 'Invalid first name',
    lastNameInvalid:
      language === 'no' ? 'Ugyldig etternavn' : 'Invalid last name',
    nameInvalid: language === 'no' ? 'Ugyldig navn' : 'Invalid name',
    companyInvalid:
      language === 'no' ? 'Ugyldig bedriftsnavn' : 'Invalid company name',
  };
}

function getSuccessMessage(language?: 'en' | 'no') {
  return language === 'no'
    ? 'Takk! Vi tar kontakt snart.'
    : "Thank you! We'll be in touch soon.";
}

export function getErrorMessage(type: string, language?: 'en' | 'no') {
  const messages = {
    submitError:
      language === 'no'
        ? 'Kunne ikke sende skjema. Prøv igjen.'
        : 'Could not submit form. Please try again.',
    networkError:
      language === 'no'
        ? 'Nettverksfeil. Sjekk tilkoblingen din.'
        : 'Network error. Check your connection.',
  };
  return messages[type as keyof typeof messages] || messages.submitError;
}

function trackFormSubmission(formType: string, language?: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'form_submit', {
      form_type: formType,
      language: language,
      page_location: window.location.href,
    });
  }
}

function showSuccessMessage(message: string) {
  // Simple success feedback - can be enhanced with toast library
  alert('✅ ' + message);
}

function showErrorMessage(message: string) {
  // Simple error feedback - can be enhanced with toast library
  alert('❌ ' + message);
}

// Global form event handler for static forms (Astro pages)
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    // Auto-attach handlers to forms with data-form-type attribute
    const forms = document.querySelectorAll('form[data-form-type]');
    forms.forEach(form => {
      const formElement = form as HTMLFormElement;
      const formType = formElement.dataset
        .formType as ExtendedFormData['formType'];
      const language = (formElement.dataset.language || 'en') as 'en' | 'no';

      // Add defensive checks for extension compatibility
      try {
        formElement.addEventListener('submit', async e => {
          e.preventDefault();

          // Prevent extension interference during submission
          if (e.isTrusted === false) {
            console.warn('Non-trusted form submission blocked');
            return;
          }

          // Show loading state
          const submitButton = formElement.querySelector(
            'button[type="submit"]'
          ) as HTMLButtonElement;

          if (!submitButton) {
            console.error('Submit button not found');
            return;
          }

          const originalText = submitButton.textContent;
          submitButton.disabled = true;
          submitButton.textContent =
            language === 'no' ? 'Sender...' : 'Sending...';

          try {
            await submitStaticForm(formElement, formType, language);
            showSuccessMessage(getSuccessMessage(language));
          } catch (error) {
            console.error('Form submission error:', error);
            showErrorMessage(getErrorMessage('submitError', language));
          } finally {
            // Restore button state
            if (submitButton && originalText) {
              submitButton.disabled = false;
              submitButton.textContent = originalText;
            }
          }
        });
      } catch (error) {
        console.error('Failed to attach form handler:', error);
      }
    });
  });
}
