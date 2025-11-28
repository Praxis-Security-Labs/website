import React from 'react';
import { useFormState } from '../../hooks/useFormState';

interface SupportContactSectionProps {
  language?: 'en' | 'no';
  variant?: 'trial-support' | 'general-support';
}

export const SupportContactSection: React.FC<SupportContactSectionProps> = ({
  language = 'en',
  variant = 'trial-support',
}) => {
  // Use unified form handler
  const {
    formData,
    formState,
    handleInputChange,
    handleEmailBlur,
    handleSubmit,
  } = useFormState({
    formType: 'support',
    language,
    requestType: 'trial-help',
    urgency: 'medium',
  });

  const content = {
    en: {
      badge: variant === 'trial-support' ? 'Trial Support' : 'Get Help',
      headline:
        variant === 'trial-support'
          ? 'Need Help with Your Trial?'
          : 'Contact Our Support Team',
      description:
        variant === 'trial-support'
          ? 'Our expert team is here to ensure your trial setup goes smoothly. Get personalized assistance within hours.'
          : 'Get expert assistance with Praxis Navigator. Our team responds to all inquiries within 24 hours.',
      contactMethods: {
        title: 'Multiple Ways to Reach Us',
        methods: [
          {
            icon: '📧',
            title: 'Email Support',
            description: 'support@praxis-security.com',
            responseTime: 'Response within 4 hours',
          },
          {
            icon: '💬',
            title: 'Live Chat',
            description: 'Available 9 AM - 5 PM CET',
            responseTime: 'Immediate response',
          },
          {
            icon: '📞',
            title: 'Phone Support',
            description: '+47 123 45 678',
            responseTime: 'Business hours only',
          },
        ],
      },
      form: {
        title: 'Send Us a Message',
        fields: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email Address',
          phone: 'Phone Number (Optional)',
          requestType: 'Request Type',
          message: 'Your Message',
          urgency: 'Urgency Level',
        },
        requestTypes: {
          'trial-help': 'Trial Setup Help',
          'technical-question': 'Technical Question',
          'demo-request': 'Request Demo',
        },
        urgencyLevels: {
          low: 'Low - General inquiry',
          medium: 'Medium - Need help soon',
          high: 'High - Urgent assistance needed',
        },
        submitButton: 'Send Message',
        successMessage: "Thank you! We'll get back to you within 4 hours.",
      },
    },
    no: {
      badge: variant === 'trial-support' ? 'Prøveperiode Support' : 'Få Hjelp',
      headline:
        variant === 'trial-support'
          ? 'Trenger du hjelp med prøveperioden?'
          : 'Kontakt vårt supportteam',
      description:
        variant === 'trial-support'
          ? 'Vårt ekspertteam er her for å sikre at ditt prøveperiode oppsett går smidig. Få personlig hjelp innen timer.'
          : 'Få ekspert assistanse med Praxis Navigator. Vårt team svarer på alle henvendelser innen 24 timer.',
      contactMethods: {
        title: 'Flere måter å nå oss på',
        methods: [
          {
            icon: '📧',
            title: 'E-post Support',
            description: 'support@praxis-security.com',
            responseTime: 'Svar innen 4 timer',
          },
          {
            icon: '💬',
            title: 'Live Chat',
            description: 'Tilgjengelig 9-17 CET',
            responseTime: 'Umiddelbart svar',
          },
          {
            icon: '📞',
            title: 'Telefon Support',
            description: '+47 123 45 678',
            responseTime: 'Kun kontortid',
          },
        ],
      },
      form: {
        title: 'Send oss en melding',
        fields: {
          firstName: 'Fornavn',
          lastName: 'Etternavn',
          email: 'E-postadresse',
          phone: 'Telefonnummer (Valgfritt)',
          requestType: 'Forespørsel Type',
          message: 'Din Melding',
          urgency: 'Hastegrad',
        },
        requestTypes: {
          'trial-help': 'Prøveperiode Oppsett Hjelp',
          'technical-question': 'Teknisk Spørsmål',
          'demo-request': 'Be om Demo',
        },
        urgencyLevels: {
          low: 'Lav - Generell henvendelse',
          medium: 'Medium - Trenger hjelp snart',
          high: 'Høy - Haster med assistanse',
        },
        submitButton: 'Send Melding',
        successMessage: 'Takk! Vi kommer tilbake til deg innen 4 timer.',
      },
    },
  };

  const t = content[language];

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log('🔴 [DEBUG] Form submit button clicked on start-now page');
    console.log('🔴 [DEBUG] Form variant:', variant);
    console.log('🔴 [DEBUG] Form language:', language);
    console.log(
      '🔴 [DEBUG] Current form data before submission:',
      JSON.stringify(formData, null, 2)
    );

    const additionalContext = {
      pageContext: 'start-now',
      variant: variant,
      utm: {
        source: 'website',
        medium: 'trial_explainer',
        campaign: 'trial_signup',
        content: language,
      },
    };

    console.log(
      '🔴 [DEBUG] Additional context:',
      JSON.stringify(additionalContext, null, 2)
    );

    handleSubmit(e, additionalContext);
  };

  return (
    <section className="bg-praxis-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-praxis-blue bg-opacity-20 border border-praxis-blue rounded-full mb-6">
            <span className="text-praxis-blue text-sm font-heading font-bold uppercase tracking-brand-wide">
              {t.badge}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.headline}
          </h2>

          <p className="text-xl text-praxis-blue-700 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-8">
              {t.contactMethods.title}
            </h3>

            <div className="space-y-6">
              {t.contactMethods.methods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold text-praxis-dark-blue mb-2">
                        {method.title}
                      </h4>
                      <p className="text-praxis-blue-700 mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm text-praxis-blue-600">
                        {method.responseTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-8">
              {t.form.title}
            </h3>

            {formState.isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">
                  {language === 'no' ? 'Melding Sendt!' : 'Message Sent!'}
                </h4>
                <p className="text-green-700">{t.form.successMessage}</p>
              </div>
            ) : (
              <form
                onSubmit={handleFormSubmit}
                className="bg-white rounded-xl p-8 shadow-md space-y-6"
              >
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-praxis-dark-blue mb-2"
                    >
                      {t.form.fields.firstName} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName || ''}
                      onChange={handleInputChange}
                      required
                      autoComplete="given-name"
                      data-form-type="user-input"
                      className="w-full px-4 py-3 border border-praxis-blue-200 rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-praxis-dark-blue mb-2"
                    >
                      {t.form.fields.lastName} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName || ''}
                      onChange={handleInputChange}
                      required
                      autoComplete="family-name"
                      data-form-type="user-input"
                      className="w-full px-4 py-3 border border-praxis-blue-200 rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-praxis-dark-blue mb-2"
                    >
                      {t.form.fields.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email || ''}
                      onChange={handleInputChange}
                      onBlur={handleEmailBlur}
                      required
                      autoComplete="email"
                      data-form-type="user-input"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent ${
                        formState.emailError
                          ? 'border-red-500'
                          : 'border-praxis-blue-200'
                      }`}
                    />
                    {formState.emailError && (
                      <p className="mt-1 text-sm text-red-600">
                        {formState.emailError}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-praxis-dark-blue mb-2"
                    >
                      {t.form.fields.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone || ''}
                      onChange={handleInputChange}
                      autoComplete="tel"
                      data-form-type="user-input"
                      className="w-full px-4 py-3 border border-praxis-blue-200 rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Request Type and Urgency */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="requestType"
                      className="block text-sm font-medium text-praxis-dark-blue mb-2"
                    >
                      {t.form.fields.requestType} *
                    </label>
                    <select
                      id="requestType"
                      name="requestType"
                      value={formData.requestType || 'trial-help'}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-praxis-blue-200 rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent"
                    >
                      {Object.entries(t.form.requestTypes).map(
                        ([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="urgency"
                      className="block text-sm font-medium text-praxis-dark-blue mb-2"
                    >
                      {t.form.fields.urgency} *
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency || 'medium'}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-praxis-blue-200 rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent"
                    >
                      {Object.entries(t.form.urgencyLevels).map(
                        ([value, label]) => (
                          <option key={value} value={value}>
                            {label}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.fields.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message || ''}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    autoComplete="off"
                    data-form-type="user-input"
                    className="w-full px-4 py-3 border border-praxis-blue-200 rounded-lg focus:ring-2 focus:ring-praxis-accent focus:border-transparent"
                    placeholder={
                      language === 'no'
                        ? 'Beskriv hvordan vi kan hjelpe deg...'
                        : 'Describe how we can help you...'
                    }
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full btn-accent btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState.isSubmitting
                      ? language === 'no'
                        ? 'Sender...'
                        : 'Sending...'
                      : t.form.submitButton}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportContactSection;
