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
    firstName: '',
    lastName: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: '',
    subject: '',
    formType: 'contact',
    language: 'en',
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
      setFormData((prev: ExtendedFormData) => ({ ...prev, [name]: value }));

      // Clear any previous errors for this field
      if (formState.emailError && name === 'email') {
        setFormState((prev: FormState) => ({ ...prev, emailError: '' }));
      }
      if (formState.formError) {
        setFormState((prev: FormState) => ({ ...prev, formError: '' }));
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
    console.log('🟡 [DEBUG] handleSubmit called in useFormState hook');
    console.log(
      '🟡 [DEBUG] Form data to be submitted:',
      JSON.stringify(formData, null, 2)
    );
    console.log(
      '🟡 [DEBUG] Additional context received:',
      JSON.stringify(additionalContext, null, 2)
    );

    e.preventDefault();
    console.log(
      '🟡 [DEBUG] Form submission prevented default, setting isSubmitting to true'
    );
    setFormState(prev => ({ ...prev, isSubmitting: true, formError: '' }));

    try {
      console.log(
        '🟡 [DEBUG] Calling submitForm with data:',
        JSON.stringify(formData, null, 2)
      );
      const result = await submitForm(formData, additionalContext);

      console.log(
        '🟡 [DEBUG] Received response from submitForm:',
        JSON.stringify(result, null, 2)
      );

      if (result.success) {
        console.log('🟢 [DEBUG] Form submission successful!');
        console.log(
          '🟢 [DEBUG] Setting form state to submitted and resetting form data'
        );
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          isSubmitted: true,
        }));
        // Reset form on successful submission
        setFormData((prev: ExtendedFormData) => ({
          ...prev,
          email: '',
          message: '',
          firstName: '',
          lastName: '',
          phone: '',
        }));
        console.log('🟢 [DEBUG] Form reset completed');
      } else {
        console.log(
          '🔴 [DEBUG] Form submission failed with result:',
          JSON.stringify(result, null, 2)
        );
        setFormState(prev => ({
          ...prev,
          isSubmitting: false,
          formError: result.error || 'Submission failed',
          emailError: result.validationErrors?.email || '',
        }));
        console.log('🔴 [DEBUG] Form state updated with error information');
      }
    } catch (error) {
      console.log('🔴 [DEBUG] Exception caught during form submission:', error);
      console.log(
        '🔴 [DEBUG] Error details:',
        JSON.stringify(error, Object.getOwnPropertyNames(error), 2)
      );
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        formError: getErrorMessage('networkError', formData.language),
      }));
      console.log('🔴 [DEBUG] Form state updated with network error');
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
