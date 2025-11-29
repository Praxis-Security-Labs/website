import React from 'react';
import { useFormState } from '../../hooks/useFormState';

interface SupportFormProps {
  language?: 'en' | 'no';
}

export const SupportForm: React.FC<SupportFormProps> = ({
  language = 'en',
}) => {
  const {
    formData,
    formState,
    handleInputChange,
    handleEmailBlur,
    handleSubmit,
  } = useFormState({
    formType: 'support',
    language,
    requestType: 'support-request',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log('🔴 [DEBUG] Support form submit clicked');
    console.log('🔴 [DEBUG] Form language:', language);
    console.log('🔴 [DEBUG] Form data:', JSON.stringify(formData, null, 2));

    const additionalContext = {
      pageContext: 'support',
      variant: 'support',
      utm: {
        source: 'website',
        medium: 'support_page',
        campaign: 'support_contact',
        content: language,
      },
    };

    console.log('🔴 [DEBUG] Additional context:', JSON.stringify(additionalContext, null, 2));
    handleSubmit(e, additionalContext);
  };

  const content = {
    en: {
      title: 'How Can We Help You?',
      description: 'Fill out the form below and our support team will get back to you as soon as possible',
      fields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        company: 'Company/Organization',
        supportType: 'Support Type',
        priority: 'Priority Level',
        subject: 'Subject',
        message: 'Detailed Description',
      },
      supportTypes: {
        '': 'Select support type',
        technical: 'Technical Support',
        billing: 'Billing & Account',
        integration: 'Integration Help',
        training: 'Training & Consultation',
        feature: 'Feature Request',
        bug: 'Bug Report',
        other: 'Other',
      },
      priorities: {
        '': 'Select priority',
        low: 'Low - General question',
        normal: 'Normal - Standard support',
        high: 'High - Urgent issue',
        critical: 'Critical - System down',
      },
      placeholders: {
        firstName: 'Your first name',
        lastName: 'Your last name',
        email: 'your.email@company.com',
        company: 'Your company name',
        subject: 'Brief description of your issue',
        message: 'Please provide detailed information about your issue, including any error messages, steps to reproduce, and relevant context...',
      },
      submitButton: 'Submit Support Request',
      submitting: 'Submitting...',
      successTitle: 'Support Request Submitted',
      successMessage: 'Thank you for contacting our support team. We will review your request and get back to you as soon as possible.',
    },
    no: {
      title: 'Hvordan Kan Vi Hjelpe Deg?',
      description: 'Fyll ut skjemaet nedenfor og vårt supportteam vil komme tilbake til deg så snart som mulig',
      fields: {
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'E-postadresse',
        company: 'Bedrift/Organisasjon',
        supportType: 'Support Type',
        priority: 'Prioritetsnivå',
        subject: 'Emne',
        message: 'Detaljert Beskrivelse',
      },
      supportTypes: {
        '': 'Velg support type',
        technical: 'Teknisk Support',
        billing: 'Fakturering & Konto',
        integration: 'Integrasjonshjelp',
        training: 'Opplæring & Konsultasjon',
        feature: 'Funksjonsforespørsel',
        bug: 'Feilrapport',
        other: 'Annet',
      },
      priorities: {
        '': 'Velg prioritet',
        low: 'Lav - Generelt spørsmål',
        normal: 'Normal - Standard support',
        high: 'Høy - Hastesak',
        critical: 'Kritisk - System nede',
      },
      placeholders: {
        firstName: 'Ditt fornavn',
        lastName: 'Ditt etternavn',
        email: 'din.epost@bedrift.com',
        company: 'Ditt firmanavn',
        subject: 'Kort beskrivelse av problemet ditt',
        message: 'Vennligst gi detaljert informasjon om problemet ditt, inkludert eventuelle feilmeldinger, trinn for å reprodusere, og relevant kontekst...',
      },
      submitButton: 'Send Supportforespørsel',
      submitting: 'Sender...',
      successTitle: 'Supportforespørsel Sendt',
      successMessage: 'Takk for at du kontaktet vårt supportteam. Vi vil gjennomgå forespørselen din og komme tilbake til deg så snart som mulig.',
    },
  };

  const t = content[language];

  if (formState.isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          {t.successTitle}
        </h3>
        <p className="text-green-700">{t.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-praxis-tan-50 rounded-xl p-8 lg:p-12">
      <div className="text-center mb-16">
        <h2 className="h2 text-praxis-dark-blue mb-6">{t.title}</h2>
        <p className="body-large text-praxis-black max-w-3xl mx-auto">
          {t.description}
        </p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-praxis-dark-blue mb-2"
            >
              {t.fields.firstName} *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors"
              placeholder={t.placeholders.firstName}
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-praxis-dark-blue mb-2"
            >
              {t.fields.lastName} *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors"
              placeholder={t.placeholders.lastName}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-praxis-dark-blue mb-2"
            >
              {t.fields.email} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email || ''}
              onChange={handleInputChange}
              onBlur={handleEmailBlur}
              required
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors ${
                formState.emailError
                  ? 'border-red-500'
                  : 'border-praxis-gray'
              }`}
              placeholder={t.placeholders.email}
            />
            {formState.emailError && (
              <p className="mt-1 text-sm text-red-600">
                {formState.emailError}
              </p>
            )}
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-praxis-dark-blue mb-2"
            >
              {t.fields.company}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors"
              placeholder={t.placeholders.company}
            />
          </div>
        </div>

        {/* Support Type */}
        <div>
          <label
            htmlFor="requestType"
            className="block text-sm font-medium text-praxis-dark-blue mb-2"
          >
            {t.fields.supportType} *
          </label>
          <select
            id="requestType"
            name="requestType"
            value={formData.requestType || ''}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors"
          >
            {Object.entries(t.supportTypes).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Priority */}
        <div>
          <label
            htmlFor="urgency"
            className="block text-sm font-medium text-praxis-dark-blue mb-2"
          >
            {t.fields.priority} *
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency || ''}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors"
          >
            {Object.entries(t.priorities).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-praxis-dark-blue mb-2"
          >
            {t.fields.subject} *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject || ''}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors"
            placeholder={t.placeholders.subject}
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-praxis-dark-blue mb-2"
          >
            {t.fields.message} *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message || ''}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-praxis-gray rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-praxis-blue transition-colors resize-vertical"
            placeholder={t.placeholders.message}
          />
        </div>

        {/* Error display */}
        {formState.formError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{formState.formError}</p>
          </div>
        )}

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="btn-accent btn-lg hover-lift active-scale focus-ring px-12 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {formState.isSubmitting ? t.submitting : t.submitButton}
          </button>
        </div>
      </form>
    </div>
  );
};