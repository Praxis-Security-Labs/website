/**
 * React hooks for unified form handling
 */

import React, { useState } from 'react';
import type { ExtendedFormData } from '../utils/form-handler';
import { submitForm, getErrorMessage } from '../utils/form-handler';
import { validateBusinessEmail } from '../utils/email-validation';

// Form state management
export interface FormState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  emailError: string;
  formError: string;
}

/**
 * React hook for form state management
 */
export function useFormState(initialData: Partial<ExtendedFormData> = {}) {
  // Ensure all form fields have default string values to avoid controlled/uncontrolled warnings
  const defaultFormData: ExtendedFormData = {
    email: '',
    message: '',
    formType: 'contact',
    language: 'en',
    firstName: '',
    lastName: '',
    name: '',
    company: '',
    phone: '',
    jobTitle: '',
    requestType: 'trial-help',
    urgency: 'medium',
    segment: '',
    employeeCount: '',
  };

  const [formData, setFormData] = useState<ExtendedFormData>({
    ...defaultFormData,
    ...initialData,
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSubmitted: false,
    emailError: '',
    formError: '',
  });

  // Input change handler with defensive programming
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // Defensive check for extension interference
    if (!e.target || !e.target.name) {
      console.warn('Invalid form event detected');
      return;
    }

    const { name, value } = e.target;

    try {
      setFormData(prev => ({ ...prev, [name]: value }));

      // Clear any previous errors for this field
      if (formState.emailError && name === 'email') {
        setFormState(prev => ({ ...prev, emailError: '' }));
      }
      if (formState.formError) {
        setFormState(prev => ({ ...prev, formError: '' }));
      }
    } catch (error) {
      console.error('Error handling input change:', error);
    }
  };

  // Email validation on blur
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const email = e.target.value;
    if (email) {
      const validation = validateBusinessEmail(email, formData.language);
      setFormState(prev => ({
        ...prev,
        emailError: validation.isValid ? '' : validation.message || '',
      }));
    }
  };

  // Form submission
  const handleSubmit = async (
    e: React.FormEvent,
    additionalContext?: Record<string, any>
  ) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true, formError: '' }));

    try {
      const result = await submitForm(formData, additionalContext);

      if (result.success) {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          isSubmitted: true,
        }));
        // Reset form on successful submission
        setFormData(prev => ({
          ...prev,
          email: '',
          message: '',
          firstName: '',
          lastName: '',
          phone: '',
        }));
      } else {
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          formError: result.error || 'Submission failed',
          emailError: result.validationErrors?.email || '',
        }));
      }
    } catch {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        formError: getErrorMessage('networkError', formData.language),
      }));
    }
  };

  return {
    formData,
    formState,
    setFormData,
    handleInputChange,
    handleEmailBlur,
    handleSubmit,
  };
}
