import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface SecurityLeadersContactSectionProps {
  language?: 'en' | 'no';
}

const securityLeadersContactSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  employeeCount: z.string().min(1, 'Please select employee count'),
  currentChallenges: z
    .array(z.string())
    .min(1, 'Please select at least one challenge'),
  interestArea: z.string().min(1, 'Please select area of interest'),
  message: z.string().optional(),
  segment: z.literal('security-leaders'),
});

type SecurityLeadersContactFormData = z.infer<
  typeof securityLeadersContactSchema
>;

export const SecurityLeadersContactSection: React.FC<
  SecurityLeadersContactSectionProps
> = ({ language = 'en' }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);

  const content = {
    en: {
      sectionTitle: 'Speak with Our Security Leadership Team',
      sectionDescription:
        'Get personalized guidance from CISOs and security experts who understand your challenges.',
      leftContent: {
        headline: 'Expert CISO Consultation',
        description:
          'Our team includes former CISOs and security leaders from Fortune 500 companies who understand the unique challenges of enterprise security leadership.',
        benefits: [
          'Strategic security culture assessment',
          'ROI calculation and business case development',
          'Board presentation template and guidance',
          'Regulatory compliance roadmap planning',
          'Technical architecture review',
          '30-day pilot program design',
        ],
        testimonial: {
          quote:
            'The consultation helped us build a compelling business case that secured board approval for our security culture initiative.',
          author: 'Sarah M., CISO at Global Manufacturing',
          company: '8,500 employees',
        },
      },
      form: {
        title: 'Request CISO Consultation',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Business Email',
        company: 'Company',
        jobTitle: 'Job Title',
        employeeCount: 'Organization Size',
        currentChallenges:
          'Current Security Leadership Challenges (select all that apply)',
        interestArea: 'Primary Area of Interest',
        message: 'Specific Questions or Requirements (Optional)',
        employeeOptions: [
          { value: '', label: 'Select organization size...' },
          { value: '500-999', label: '500-999 employees' },
          { value: '1000-2499', label: '1,000-2,499 employees' },
          { value: '2500-4999', label: '2,500-4,999 employees' },
          { value: '5000-9999', label: '5,000-9,999 employees' },
          { value: '10000+', label: '10,000+ employees' },
        ],
        challengeOptions: [
          {
            value: 'roi-measurement',
            label: 'Proving training ROI to leadership',
          },
          {
            value: 'board-reporting',
            label: 'Creating compelling board reports',
          },
          { value: 'compliance', label: 'Meeting regulatory requirements' },
          {
            value: 'budget-justification',
            label: 'Justifying security investments',
          },
          {
            value: 'culture-measurement',
            label: 'Measuring security culture maturity',
          },
          {
            value: 'incident-reduction',
            label: 'Reducing human-error incidents',
          },
        ],
        interestOptions: [
          { value: '', label: 'Select primary interest...' },
          {
            value: 'roi-demonstration',
            label: 'ROI Measurement & Business Case',
          },
          {
            value: 'board-communications',
            label: 'Board & Executive Reporting',
          },
          { value: 'compliance-automation', label: 'Regulatory Compliance' },
          {
            value: 'technical-integration',
            label: 'Technical Integration & Security',
          },
          { value: 'pilot-program', label: '30-Day Pilot Program' },
          { value: 'full-deployment', label: 'Enterprise Deployment Planning' },
        ],
        submitText: 'Request Consultation',
        submittingText: 'Submitting...',
        successMessage:
          'Thank you! A member of our security leadership team will contact you within 24 hours to schedule your consultation.',
      },
    },
    no: {
      sectionTitle: 'Snakk med Vårt Sikkerhetsledelse Team',
      sectionDescription:
        'Få personlig veiledning fra CISOs og sikkerhetseksperter som forstår dine utfordringer.',
      leftContent: {
        headline: 'Ekspert CISO Konsultasjon',
        description:
          'Vårt team inkluderer tidligere CISOs og sikkerhetsledere fra Fortune 500 bedrifter som forstår de unike utfordringene ved virksomhet sikkerhetsledelse.',
        benefits: [
          'Strategisk sikkerhetskultur vurdering',
          'ROI beregning og forretnings case utvikling',
          'Styre presentasjon mal og veiledning',
          'Regulatorisk compliance veikart planlegging',
          'Teknisk arkitektur gjennomgang',
          '30-dagers pilot program design',
        ],
        testimonial: {
          quote:
            'Konsultasjonen hjalp oss med å bygge en overbevisende forretnings case som sikret styre godkjenning for vårt sikkerhetskultur initiativ.',
          author: 'Sarah M., CISO ved Global Produksjon',
          company: '8,500 ansatte',
        },
      },
      form: {
        title: 'Be om CISO Konsultasjon',
        firstName: 'Fornavn',
        lastName: 'Etternavn',
        email: 'Arbeids-epost',
        company: 'Bedrift',
        jobTitle: 'Stillingstittel',
        employeeCount: 'Organisasjon Størrelse',
        currentChallenges:
          'Nåværende Sikkerhetsledelse Utfordringer (velg alle som gjelder)',
        interestArea: 'Primært Interesseområde',
        message: 'Spesifikke Spørsmål eller Krav (Valgfritt)',
        employeeOptions: [
          { value: '', label: 'Velg organisasjon størrelse...' },
          { value: '500-999', label: '500-999 ansatte' },
          { value: '1000-2499', label: '1,000-2,499 ansatte' },
          { value: '2500-4999', label: '2,500-4,999 ansatte' },
          { value: '5000-9999', label: '5,000-9,999 ansatte' },
          { value: '10000+', label: '10,000+ ansatte' },
        ],
        challengeOptions: [
          {
            value: 'roi-measurement',
            label: 'Bevise opplæring ROI til ledelse',
          },
          {
            value: 'board-reporting',
            label: 'Skape overbevisende styre rapporter',
          },
          { value: 'compliance', label: 'Møte regulatoriske krav' },
          {
            value: 'budget-justification',
            label: 'Rettferdiggjøre sikkerhetsinvesteringer',
          },
          {
            value: 'culture-measurement',
            label: 'Måle sikkerhetskultur modenhet',
          },
          {
            value: 'incident-reduction',
            label: 'Redusere menneskellige feil hendelser',
          },
        ],
        interestOptions: [
          { value: '', label: 'Velg primær interesse...' },
          {
            value: 'roi-demonstration',
            label: 'ROI Måling & Forretnings Case',
          },
          {
            value: 'board-communications',
            label: 'Styre & Lederskap Rapportering',
          },
          { value: 'compliance-automation', label: 'Regulatorisk Compliance' },
          {
            value: 'technical-integration',
            label: 'Teknisk Integrasjon & Sikkerhet',
          },
          { value: 'pilot-program', label: '30-Dagers Pilot Program' },
          {
            value: 'full-deployment',
            label: 'Virksomhet Implementering Planlegging',
          },
        ],
        submitText: 'Be om Konsultasjon',
        submittingText: 'Sender...',
        successMessage:
          'Takk! Et medlem av vårt sikkerhetsledelse team vil kontakte deg innen 24 timer for å planlegge din konsultasjon.',
      },
    },
  };

  const t = content[language];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<SecurityLeadersContactFormData>({
    resolver: zodResolver(securityLeadersContactSchema),
    defaultValues: {
      segment: 'security-leaders',
      currentChallenges: [],
    },
  });

  const handleChallengeChange = (challengeValue: string, checked: boolean) => {
    let updatedChallenges: string[];
    if (checked) {
      updatedChallenges = [...selectedChallenges, challengeValue];
    } else {
      updatedChallenges = selectedChallenges.filter(c => c !== challengeValue);
    }
    setSelectedChallenges(updatedChallenges);
    setValue('currentChallenges', updatedChallenges);
  };

  const onSubmit = async (data: SecurityLeadersContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'security-leaders-contact',
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

        if (
          typeof window !== 'undefined' &&
          (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
        ) {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
            'event',
            'form_submit',
            {
              form_name: 'security_leaders_contact',
              segment: 'security-leaders',
              employee_count: data.employeeCount,
              interest_area: data.interestArea,
            }
          );
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="bg-praxis-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-praxis-accent rounded-full flex items-center justify-center mx-auto mb-8">
              <svg
                className="w-10 h-10 text-praxis-white"
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
            <h3 className="text-3xl font-heading font-bold text-praxis-dark-blue mb-6">
              {language === 'no'
                ? 'Takk for din forespørsel!'
                : 'Thank you for your request!'}
            </h3>
            <p className="text-xl text-praxis-dark-blue-600 mb-8">
              {t.form.successMessage}
            </p>
            <a
              href={`/${language === 'no' ? 'no/' : ''}resources/security-leadership-guide`}
              className="btn-secondary btn-lg"
            >
              {language === 'no'
                ? 'Last ned Sikkerhetsledelse Guide i mellomtiden'
                : 'Download Security Leadership Guide in the meantime'}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-praxis-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-4xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-6">
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

            {/* Testimonial */}
            <div className="bg-praxis-blue-50 rounded-xl p-6">
              <blockquote className="text-praxis-dark-blue italic mb-4">
                &ldquo;{t.leftContent.testimonial.quote}&rdquo;
              </blockquote>
              <cite className="text-praxis-dark-blue-600 font-medium not-italic">
                — {t.leftContent.testimonial.author}
                <br />
                <span className="text-sm">
                  {t.leftContent.testimonial.company}
                </span>
              </cite>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-praxis-blue-50 rounded-2xl p-8">
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

              {/* Employee Count */}
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

              {/* Current Challenges */}
              <div>
                <label className="block text-sm font-medium text-praxis-dark-blue mb-3">
                  {t.form.currentChallenges} *
                </label>
                <div className="space-y-2">
                  {t.form.challengeOptions.map(challenge => (
                    <div key={challenge.value} className="flex items-start">
                      <input
                        type="checkbox"
                        id={challenge.value}
                        value={challenge.value}
                        onChange={e =>
                          handleChallengeChange(
                            challenge.value,
                            e.target.checked
                          )
                        }
                        className="mt-1 h-4 w-4 text-praxis-blue focus:ring-praxis-blue border-praxis-blue-300 rounded"
                      />
                      <label
                        htmlFor={challenge.value}
                        className="ml-3 text-sm text-praxis-dark-blue"
                      >
                        {challenge.label}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.currentChallenges && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.currentChallenges.message}
                  </p>
                )}
              </div>

              {/* Interest Area */}
              <div>
                <label
                  htmlFor="interestArea"
                  className="block text-sm font-medium text-praxis-dark-blue mb-2"
                >
                  {t.form.interestArea} *
                </label>
                <select
                  {...register('interestArea')}
                  id="interestArea"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent transition-colors ${
                    errors.interestArea
                      ? 'border-red-500'
                      : 'border-praxis-blue-300'
                  }`}
                >
                  {t.form.interestOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.interestArea && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.interestArea.message}
                  </p>
                )}
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
