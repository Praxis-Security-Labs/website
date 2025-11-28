/**
 * Contact form data types
 */

export interface ContactFormData {
  firstName: string;
  lastName: string;
  name?: string; // Combined name field for compatibility
  email: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  message: string;
  subject?: string; // Email subject
  honeypot?: string;
  source?: string;
  timestamp?: string;
  formType?: string; // Form type identifier
  language?: 'en' | 'no'; // Language preference (typed)
  urgency?: string; // Support urgency
  requestType?: string; // Support request type
  segment?: string; // Business segment
  employeeCount?: string; // Company size
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
  validationErrors?: {
    email?: string;
    [key: string]: string | undefined;
  };
}

export interface ContactFormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  emailError: string;
  formError: string;
}
