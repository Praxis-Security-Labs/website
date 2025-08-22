import React, { useState } from 'react';

interface EnterpriseContactSectionProps {
  language?: 'en' | 'no';
}

export const EnterpriseContactSection: React.FC<
  EnterpriseContactSectionProps
> = ({ language = 'en' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const content = {
    en: {
      sectionTitle: 'Need a Custom Solution?',
      sectionDescription:
        'Get in touch for enterprise pricing, custom integrations, or to schedule a personalized demo.',
      leftContent: {
        headline: 'Enterprise Sales & Support',
        description:
          'Our team is ready to help you find the perfect security culture solution for your organization.',
        benefits: [
          'Custom pricing for large deployments',
          'Dedicated account management',
          'Bespoke integration services',
          'Priority implementation support',
          'Executive stakeholder presentations',
          'Proof of concept programs',
        ],
        contactInfo: {
          title: 'Direct Contact',
          email: 'sales@praxisnavigator.io',
          phone: '+47 900 12 345',
        },
      },
      form: {
        title: 'Request Enterprise Demo',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Business Email',
        company: 'Company',
        jobTitle: 'Job Title',
        employeeCount: 'Number of Employees',
        phone: 'Phone (Optional)',
        message: 'Additional Requirements (Optional)',
        employeeOptions: [
          { value: '', label: 'Select employee count...' },
          { value: '50-199', label: '50-199 employees' },
          { value: '200-499', label: '200-499 employees' },
          { value: '500-999', label: '500-999 employees' },
          { value: '1000-4999', label: '1,000-4,999 employees' },
          { value: '5000+', label: '5,000+ employees' },
        ],
        submitText: 'Request Demo',
        submittingText: 'Submitting...',
        successMessage:
          "Thank you! We'll be in touch within 24 hours to schedule your demo.",
      },
    },
    no: {
      sectionTitle: 'Trenger en Tilpasset Løsning?',
      sectionDescription:
        'Ta kontakt for virksomhetspriser, tilpassede integrasjoner, eller for å planlegge en personlig demo.',
      leftContent: {
        headline: 'Virksomhet Salg & Støtte',
        description:
          'Vårt team er klar til å hjelpe deg med å finne den perfekte sikkerhetskulturelle løsningen for din organisasjon.',
        benefits: [
          'Tilpassede priser for store implementeringer',
          'Dedikert kontoadministrasjon',
          'Skreddersydde integrasjonstjenester',
          'Prioritert implementeringsstøtte',
          'Presentasjoner for ledere',
          'Proof of concept programmer',
        ],
        contactInfo: {
          title: 'Direkte Kontakt',
          email: 'sales@praxisnavigator.io',
          phone: '+47 900 12 345',
        },
      },
      form: {
        title: 'Be om Virksomhet Demo',
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'Arbeids-epost',
        company: 'Bedrift',
        jobTitle: 'Stillingstittel',
        employeeCount: 'Antall Ansatte',
        phone: 'Telefon (Valgfritt)',
        message: 'Ytterligere Krav (Valgfritt)',
        employeeOptions: [
          { value: '', label: 'Velg antall ansatte...' },
          { value: '50-199', label: '50-199 ansatte' },
          { value: '200-499', label: '200-499 ansatte' },
          { value: '500-999', label: '500-999 ansatte' },
          { value: '1000-4999', label: '1,000-4,999 ansatte' },
          { value: '5000+', label: '5,000+ ansatte' },
        ],
        submitText: 'Be om Demo',
        submittingText: 'Sender...',
        successMessage:
          'Takk! Vi tar kontakt innen 24 timer for å planlegge demoen din.',
      },
    },
  };

  const t = content[language];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      company: formData.get('company'),
      jobTitle: formData.get('jobTitle'),
      employeeCount: formData.get('employeeCount'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      segment: 'enterprise',
      formType: 'enterprise-contact',
      language,
    };

    try {
      // Submit to HubSpot or backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        (event.target as HTMLFormElement).reset();
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-gradient-to-br from-praxis-charcoal to-praxis-charcoal/95 border-t border-praxis-pine">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full mb-6">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-heading font-bold text-white mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-praxis-blue-100 max-w-2xl mx-auto">
              {t.form.successMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-praxis-charcoal to-praxis-charcoal/95 border-t border-praxis-pine">
      <div className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-blue-100 max-w-3xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="text-white">
            <h3 className="text-3xl font-heading font-bold mb-6">
              {t.leftContent.headline}
            </h3>
            <p className="text-lg text-praxis-blue-100 mb-8">
              {t.leftContent.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-12">
              {t.leftContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-praxis-pine rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-praxis-blue-100">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Direct Contact Info */}
            <div className="bg-praxis-charcoal/50 backdrop-blur rounded-lg p-6 border border-praxis-pine">
              <h4 className="text-xl font-semibold mb-4">
                {t.leftContent.contactInfo.title}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-praxis-blue mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${t.leftContent.contactInfo.email}`}
                    className="text-praxis-blue-100 hover:text-white transition-colors"
                  >
                    {t.leftContent.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-praxis-blue mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${t.leftContent.contactInfo.phone}`}
                    className="text-praxis-blue-100 hover:text-white transition-colors"
                  >
                    {t.leftContent.contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-praxis-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-6">
              {t.form.title}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.firstName} *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required
                    className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.lastName} *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required
                    className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.email} *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.company} *
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  required
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                />
              </div>

              {/* Job Title */}
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.jobTitle} *
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  id="jobTitle"
                  required
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                />
              </div>

              {/* Employee Count */}
              <div>
                <label
                  htmlFor="employeeCount"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.employeeCount} *
                </label>
                <select
                  name="employeeCount"
                  id="employeeCount"
                  required
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                >
                  {t.form.employeeOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors resize-y"
                  placeholder="Tell us about your specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-praxis-blue hover:bg-praxis-blue-700 disabled:bg-praxis-blue-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-praxis-blue focus:ring-offset-2"
              >
                {isSubmitting ? t.form.submittingText : t.form.submitText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
