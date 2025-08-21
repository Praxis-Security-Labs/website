import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface EnterpriseContactSectionProps {
  language?: 'en' | 'no';
}

const enterpriseContactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  employeeCount: z.string().min(1, 'Please select employee count'),
  phone: z.string().optional(),
  message: z.string().optional(),
  segment: z.literal('enterprise'),
});

type EnterpriseContactFormData = z.infer<typeof enterpriseContactSchema>;

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
        validation: {
          firstName: 'First name is required',
          lastName: 'Last name is required',
          email: 'Please enter a valid email address',
          company: 'Company name is required',
          jobTitle: 'Job title is required',
          employeeCount: 'Please select employee count',
        },
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
          'Takk! Vi tar kontakt innen 24 timer for å planlegge din demo.',
        validation: {
          firstName: 'Fornavn er påkrevd',
          lastName: 'Etternavn er påkrevd',
          email: 'Vennligst skriv inn en gyldig e-postadresse',
          company: 'Bedriftsnavn er påkrevd',
          jobTitle: 'Stillingstittel er påkrevd',
          employeeCount: 'Vennligst velg antall ansatte',
        },
      },
    },
  };

  const t = content[language];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EnterpriseContactFormData>({
    resolver: zodResolver(
      enterpriseContactSchema.extend({
        firstName: z.string().min(2, t.form.validation.firstName),
        lastName: z.string().min(2, t.form.validation.lastName),
        email: z.string().email(t.form.validation.email),
        company: z.string().min(2, t.form.validation.company),
        jobTitle: z.string().min(2, t.form.validation.jobTitle),
        employeeCount: z.string().min(1, t.form.validation.employeeCount),
      })
    ),
    defaultValues: {
      segment: 'enterprise',
    },
  });

  const onSubmit = async (data: EnterpriseContactFormData) => {
    setIsSubmitting(true);

    try {
      // Submit to HubSpot or backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'enterprise-contact',
          language,
          utmSource: new URLSearchParams(window.location.search).get(
            'utm_source'
          ),
          utmMedium: new URLSearchParams(window.location.search).get(
            'utm_medium'
          ),
          utmCampaign: new URLSearchParams(window.location.search).get(
            'utm_campaign'
          ),
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();

        // Analytics tracking
        if (
          typeof window !== 'undefined' &&
          (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
        ) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
            'event',
            'form_submit',
            {
              form_name: 'enterprise_contact',
              segment: 'enterprise',
              employee_count: data.employeeCount,
            }
          );
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Form submission error:', error);
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-praxis-blue-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-praxis-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-praxis-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {language === 'no'
                ? 'Takk for din forespørsel!'
                : 'Thank you for your inquiry!'}
            </h3>
            <p className="text-lg text-praxis-dark-blue-600">
              {t.form.successMessage}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-praxis-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-3xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {t.leftContent.headline}
            </h3>

            <p className="text-lg text-praxis-dark-blue-600 mb-8">
              {t.leftContent.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-12">
              {t.leftContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-praxis-accent mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-praxis-dark-blue">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="bg-praxis-white rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-heading font-semibold text-praxis-dark-blue mb-4">
                {t.leftContent.contactInfo.title}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-praxis-blue mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${t.leftContent.contactInfo.email}`}
                    className="text-praxis-dark-blue hover:text-praxis-blue transition-colors"
                  >
                    {t.leftContent.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-praxis-blue mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                    className="text-praxis-dark-blue hover:text-praxis-blue transition-colors"
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

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    {...register('firstName')}
                    type="text"
                    id="firstName"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                      errors.firstName
                        ? 'border-red-500'
                        : 'border-praxis-blue-300'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.lastName} *
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    id="lastName"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                      errors.lastName
                        ? 'border-red-500'
                        : 'border-praxis-blue-300'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
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
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-praxis-blue-300'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Company and Job Title */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.company} *
                  </label>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                      errors.company
                        ? 'border-red-500'
                        : 'border-praxis-blue-300'
                    }`}
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.company.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.jobTitle} *
                  </label>
                  <input
                    {...register('jobTitle')}
                    type="text"
                    id="jobTitle"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                      errors.jobTitle
                        ? 'border-red-500'
                        : 'border-praxis-blue-300'
                    }`}
                  />
                  {errors.jobTitle && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.jobTitle.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Employee Count and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="employeeCount"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.employeeCount} *
                  </label>
                  <select
                    {...register('employeeCount')}
                    id="employeeCount"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                      errors.employeeCount
                        ? 'border-red-500'
                        : 'border-praxis-blue-300'
                    }`}
                  >
                    {t.form.employeeOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.employeeCount && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.employeeCount.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-praxis-dark-blue mb-2"
                  >
                    {t.form.phone}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors"
                  />
                </div>
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
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors resize-vertical"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-heading font-semibold text-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-praxis-blue-300 text-praxis-white cursor-not-allowed'
                    : 'bg-praxis-accent text-praxis-white hover:bg-praxis-accent-600 shadow-lg hover:shadow-xl'
                }`}
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
