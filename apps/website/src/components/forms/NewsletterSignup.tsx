import React from 'react';
import { useFormState } from '../../hooks/useFormState';

interface NewsletterSignupProps {
  language?: 'en' | 'no';
  title?: string;
  description?: string;
  variant?: 'default' | 'research' | 'resources';
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  language = 'en',
  title,
  description,
  variant = 'default',
}) => {
  const {
    formData,
    formState,
    handleInputChange,
    handleEmailBlur,
    handleSubmit,
  } = useFormState({
    formType: 'newsletter',
    language,
    requestType: 'newsletter-signup',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    console.log('🔴 [DEBUG] Newsletter signup form submit clicked');
    console.log('🔴 [DEBUG] Form language:', language);
    console.log('🔴 [DEBUG] Form variant:', variant);
    console.log('🔴 [DEBUG] Form data:', JSON.stringify(formData, null, 2));

    const additionalContext = {
      pageContext: 'newsletter-signup',
      variant: variant,
      utm: {
        source: 'website',
        medium: 'newsletter_signup',
        campaign: 'newsletter_subscription',
        content: language,
      },
    };

    console.log('🔴 [DEBUG] Additional context:', JSON.stringify(additionalContext, null, 2));
    handleSubmit(e, additionalContext);
  };

  const content = {
    en: {
      defaultTitle: 'Subscribe to Updates',
      defaultDescription: 'Get the latest insights and updates delivered to your inbox.',
      researchTitle: 'Research Updates & Insights',
      researchDescription: 'Subscribe to receive latest research findings, industry insights, and platform updates.',
      resourcesTitle: 'Stay Updated',
      resourcesDescription: 'Get notified about new resources, research, and security insights.',
      placeholder: 'Enter your email',
      buttonText: 'Subscribe',
      submitting: 'Subscribing...',
      successTitle: 'Successfully Subscribed!',
      successMessage: 'Thank you for subscribing. You will receive updates in your inbox.',
    },
    no: {
      defaultTitle: 'Abonner på Oppdateringer',
      defaultDescription: 'Få de siste innsiktene og oppdateringene levert til din innboks.',
      researchTitle: 'Forskningsoppdateringer & Innsikt',
      researchDescription: 'Abonner for å motta siste forskningsfunn, bransje-innsikt og plattformoppdateringer.',
      resourcesTitle: 'Hold deg Oppdatert',
      resourcesDescription: 'Få beskjed om nye ressurser, forskning og sikkerhetsinnsikt.',
      placeholder: 'Skriv inn din e-post',
      buttonText: 'Abonner',
      submitting: 'Abonnerer...',
      successTitle: 'Vellykket Abonnement!',
      successMessage: 'Takk for at du abonnerer. Du vil motta oppdateringer i din innboks.',
    },
  };

  const t = content[language];

  // Determine title and description based on variant or props
  const getTitle = () => {
    if (title) return title;
    if (variant === 'research') return t.researchTitle;
    if (variant === 'resources') return t.resourcesTitle;
    return t.defaultTitle;
  };

  const getDescription = () => {
    if (description) return description;
    if (variant === 'research') return t.researchDescription;
    if (variant === 'resources') return t.resourcesDescription;
    return t.defaultDescription;
  };

  if (formState.isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-3xl mb-3">✅</div>
        <h4 className="text-lg font-semibold text-green-800 mb-2">
          {t.successTitle}
        </h4>
        <p className="text-green-700">{t.successMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-praxis-blue-50 rounded-xl p-8">
      <h3 className="h4 text-praxis-dark-blue mb-4">
        {getTitle()}
      </h3>
      <p className="body-base text-praxis-pine mb-6">
        {getDescription()}
      </p>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            placeholder={t.placeholder}
            className={`input flex-grow ${
              formState.emailError
                ? 'border-red-500'
                : ''
            }`}
            required
            aria-label="Email address for updates"
          />
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="btn-secondary hover-lift active-scale focus-ring disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Subscribe to updates"
          >
            {formState.isSubmitting ? t.submitting : t.buttonText}
          </button>
        </form>
        {formState.emailError && (
          <p className="mt-2 text-sm text-red-600">
            {formState.emailError}
          </p>
        )}
        {formState.formError && (
          <p className="mt-2 text-sm text-red-600">
            {formState.formError}
          </p>
        )}
      </div>
    </div>
  );
};