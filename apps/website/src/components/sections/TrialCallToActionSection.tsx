import React from 'react';
import { forms } from '../../i18n/forms';

interface TrialCallToActionSectionProps {
  language?: 'en' | 'no';
}

export const TrialCallToActionSection: React.FC<
  TrialCallToActionSectionProps
> = ({ language = 'en' }) => {
  const t = forms[language].trialCta;

  const marketplaceUrl =
    typeof window !== 'undefined'
      ? window.location.host.includes('localhost')
        ? 'https://azuremarketplace.microsoft.com'
        : import.meta.env.ASTRO_PUBLIC_MARKETPLACE_URL ||
          'https://azuremarketplace.microsoft.com'
      : 'https://azuremarketplace.microsoft.com';

  return (
    <section className="bg-gradient-to-br from-praxis-dark-blue via-praxis-dark-blue-600 to-praxis-blue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-praxis-accent bg-opacity-20 border border-praxis-accent rounded-full mb-6">
              <span className="text-praxis-accent text-sm font-heading font-bold uppercase tracking-brand-wide">
                {t.badge}
              </span>
            </div>

            {/* Headlines */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-white mb-4">
              {t.headline}
            </h2>

            <p className="text-xl text-praxis-blue-100 mb-6">{t.subheadline}</p>

            <p className="text-lg text-praxis-blue-200 mb-8">{t.description}</p>

            {/* Benefits */}
            <ul className="space-y-3 mb-10">
              {t.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-praxis-white">
                  <svg
                    className="h-5 w-5 text-praxis-accent mr-3 flex-shrink-0"
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
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href={marketplaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-lg inline-flex items-center justify-center group"
                aria-label={
                  language === 'no'
                    ? 'Start gratis prøveversjon på Azure Marketplace'
                    : 'Start free trial on Azure Marketplace'
                }
              >
                {t.ctaTrialText}
                <svg
                  className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href={`/${language === 'no' ? 'no/' : ''}contact`}
                className="btn-secondary btn-lg"
              >
                {t.ctaDemoText}
              </a>
            </div>

            {/* Trust Signals */}
            <div>
              <h3 className="text-lg font-heading font-semibold text-praxis-gold mb-4">
                {t.trustSignals.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.trustSignals.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center text-praxis-blue-100"
                  >
                    <svg
                      className="h-4 w-4 text-praxis-gold mr-2 flex-shrink-0"
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
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual - Azure Marketplace Integration */}
          <div className="relative">
            <div className="bg-praxis-white rounded-2xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Azure Marketplace Logo/Mockup */}
              <div className="text-center">
                <div className="w-16 h-16 bg-praxis-blue rounded-xl flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-praxis-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M13.5 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V8.5L13.5 3z" />
                    <path d="M13 3v6h6" />
                  </svg>
                </div>

                <h3 className="text-xl font-heading font-bold text-praxis-dark-blue mb-2">
                  {t.quickStart.title}
                </h3>

                <p className="text-praxis-dark-blue-600 mb-6">
                  Azure Marketplace Integration
                </p>

                <div className="space-y-4">
                  {t.quickStart.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-praxis-blue-50 rounded-lg"
                    >
                      <span className="text-sm font-medium text-praxis-dark-blue">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-praxis-accent">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-praxis-accent text-praxis-white p-3 rounded-full shadow-lg">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-praxis-gold text-praxis-dark-blue px-4 py-2 rounded-full text-sm font-heading font-bold shadow-lg transform rotate-12">
              {language === 'no' ? 'Ingen oppsett' : 'No setup'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
