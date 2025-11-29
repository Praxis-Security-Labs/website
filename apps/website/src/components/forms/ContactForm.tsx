import React from 'react';
import { useFormState } from '../../hooks/useFormState';

interface ContactFormProps {
  language?: 'en' | 'no';
  formType: 'general' | 'speaking';
  title: string;
  onSubmitSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  language = 'en',
  formType,
  title,
  onSubmitSuccess,
}) => {
  const {
    formData,
    formState,
    handleInputChange,
    handleEmailBlur,
    handleSubmit,
  } = useFormState({
    formType: formType === 'general' ? 'contact' : 'speaking',
    language,
    requestType:
      formType === 'general' ? 'general-inquiry' : 'speaking-request',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log('🔴 [DEBUG] Contact form submit clicked');
    console.log('🔴 [DEBUG] Form type:', formType);
    console.log('🔴 [DEBUG] Form language:', language);
    console.log('🔴 [DEBUG] Form data:', JSON.stringify(formData, null, 2));

    const additionalContext = {
      pageContext: 'contact',
      formVariant: formType,
      utm: {
        source: 'website',
        medium: 'contact_form',
        campaign: 'contact_page',
        content: language,
      },
    };

    console.log(
      '🔴 [DEBUG] Additional context:',
      JSON.stringify(additionalContext, null, 2)
    );

    handleSubmit(e, additionalContext);

    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  };

  const content = {
    en: {
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        company: 'Company',
        organization: 'Organization',
        role: 'Your Role',
        eventName: 'Event Name',
        eventDate: 'Event Date',
        sessionType: 'Session Type',
        message: 'Message',
        eventDetails: 'Event Details',
      },
      roles: {
        '': 'Select your role',
        ciso: 'CISO / Security Leader',
        executive: 'C-Level Executive',
        manager: 'Mid-Level Manager',
        'sat-team': 'SAT Team Member',
        other: 'Other',
      },
      sessionTypes: {
        '': 'Select session type',
        keynote: 'Keynote Presentation',
        workshop: 'Workshop',
        panel: 'Panel Discussion',
        training: 'Training Session',
        other: 'Other',
      },
      submitButton:
        formType === 'general' ? 'Send Message' : 'Submit Speaking Request',
      submitting: 'Sending...',
      placeholders: {
        message: 'Tell us about your security culture challenges and goals...',
        eventDetails:
          'Tell us about your event, audience, desired topics, and any specific requirements...',
      },
    },
    no: {
      fields: {
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'E-postadresse',
        phone: 'Telefonnummer',
        company: 'Bedrift',
        organization: 'Organisasjon',
        role: 'Din rolle',
        eventName: 'Arrangement navn',
        eventDate: 'Arrangement dato',
        sessionType: 'Økttype',
        message: 'Melding',
        eventDetails: 'Arrangement detaljer',
      },
      roles: {
        '': 'Velg din rolle',
        ciso: 'CISO / Sikkerhetsleder',
        executive: 'C-Level Executive',
        manager: 'Mellomleder',
        'sat-team': 'SAT Team Medlem',
        other: 'Annet',
      },
      sessionTypes: {
        '': 'Velg økttype',
        keynote: 'Hovedtale',
        workshop: 'Workshop',
        panel: 'Paneldiskusjon',
        training: 'Treningsøkt',
        other: 'Annet',
      },
      submitButton:
        formType === 'general' ? 'Send melding' : 'Send forespørsel om tale',
      submitting: 'Sender...',
      placeholders: {
        message: 'Fortell oss om dine sikkerhetskultur utfordringer og mål...',
        eventDetails:
          'Fortell oss om arrangementet ditt, publikum, ønskede emner og spesielle krav...',
      },
    },
  };

  const t = content[language];

  if (formState.isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h4 className="text-xl font-semibold text-green-800 mb-2">
          {language === 'no' ? 'Melding Sendt!' : 'Message Sent!'}
        </h4>
        <p className="text-green-700">
          {language === 'no'
            ? 'Vi kommer tilbake til deg innen 24 timer.'
            : "Thank you! We'll get back to you within 24 hours."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-praxis-light-gray p-8 rounded-lg">
      <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-6">
        {title}
      </h3>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor={`${formType}-firstName`}
              className="block text-sm font-semibold text-praxis-dark-blue mb-2"
            >
              {t.fields.firstName} *
            </label>
            <input
              type="text"
              id={`${formType}-firstName`}
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor={`${formType}-lastName`}
              className="block text-sm font-semibold text-praxis-dark-blue mb-2"
            >
              {t.fields.lastName} *
            </label>
            <input
              type="text"
              id={`${formType}-lastName`}
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor={`${formType}-email`}
            className="block text-sm font-semibold text-praxis-dark-blue mb-2"
          >
            {t.fields.email} *
          </label>
          <input
            type="email"
            id={`${formType}-email`}
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            required
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent ${
              formState.emailError ? 'border-red-500' : 'border-praxis-gray'
            }`}
          />
          {formState.emailError && (
            <p className="mt-1 text-sm text-red-600">{formState.emailError}</p>
          )}
        </div>

        {/* Form-specific fields */}
        {formType === 'general' && (
          <>
            <div>
              <label
                htmlFor="general-company"
                className="block text-sm font-semibold text-praxis-dark-blue mb-2"
              >
                {t.fields.company}
              </label>
              <input
                type="text"
                id="general-company"
                name="company"
                value={formData.company || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="general-role"
                className="block text-sm font-semibold text-praxis-dark-blue mb-2"
              >
                {t.fields.role}
              </label>
              <select
                id="general-role"
                name="jobTitle"
                value={formData.jobTitle || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
              >
                {Object.entries(t.roles).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="general-message"
                className="block text-sm font-semibold text-praxis-dark-blue mb-2"
              >
                {t.fields.message} *
              </label>
              <textarea
                id="general-message"
                name="message"
                value={formData.message || ''}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder={t.placeholders.message}
                className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
              />
            </div>
          </>
        )}

        {formType === 'speaking' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="speaking-eventName"
                  className="block text-sm font-semibold text-praxis-dark-blue mb-2"
                >
                  {t.fields.eventName} *
                </label>
                <input
                  type="text"
                  id="speaking-eventName"
                  name="subject"
                  value={formData.subject || ''}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="speaking-eventDate"
                  className="block text-sm font-semibold text-praxis-dark-blue mb-2"
                >
                  {t.fields.eventDate}
                </label>
                <input
                  type="date"
                  id="speaking-eventDate"
                  name="phone"
                  value={formData.phone || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="speaking-organization"
                className="block text-sm font-semibold text-praxis-dark-blue mb-2"
              >
                {t.fields.organization} *
              </label>
              <input
                type="text"
                id="speaking-organization"
                name="company"
                value={formData.company || ''}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="speaking-sessionType"
                className="block text-sm font-semibold text-praxis-dark-blue mb-2"
              >
                {t.fields.sessionType}
              </label>
              <select
                id="speaking-sessionType"
                name="jobTitle"
                value={formData.jobTitle || ''}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
              >
                {Object.entries(t.sessionTypes).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="speaking-eventDetails"
                className="block text-sm font-semibold text-praxis-dark-blue mb-2"
              >
                {t.fields.eventDetails} *
              </label>
              <textarea
                id="speaking-eventDetails"
                name="message"
                value={formData.message || ''}
                onChange={handleInputChange}
                required
                rows={4}
                placeholder={t.placeholders.eventDetails}
                className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-gold focus:border-transparent"
              />
            </div>
          </>
        )}

        {/* Error display */}
        {formState.formError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{formState.formError}</p>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.isSubmitting ? t.submitting : t.submitButton}
        </button>
      </form>
    </div>
  );
};
