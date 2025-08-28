import React from 'react';

interface PricingHeroSectionProps {
  language?: 'en' | 'no';
}

export const PricingHeroSection: React.FC<PricingHeroSectionProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      badge: 'Transparent Pricing',
      headline: 'Enterprise Security Culture Measurement',
      subheadline: 'From €0.80 per employee per month',
      description:
        'Simple, transparent pricing for organizations of all sizes. Start your 30-day free trial on Azure Marketplace with no commitment required.',
      features: [
        'No setup fees or hidden costs',
        '30-day free trial available',
        'Azure Marketplace integration',
        'Annual contracts for best rates',
      ],
      ctaTrialText: 'Start Free Trial',
      ctaDemoText: 'Request Demo',
    },
    no: {
      badge: 'Transparente Priser',
      headline: 'Måling av Virksomhetens Sikkerhetskultur',
      subheadline: 'Fra €0,80 per ansatt per måned',
      description:
        'Enkle, transparente priser for organisasjoner av alle størrelser. Start din 30-dagers gratis prøveversjon på Azure Marketplace uten forpliktelser.',
      features: [
        'Ingen oppstartsgebyrer eller skjulte kostnader',
        '30-dagers gratis prøveversjon tilgjengelig',
        'Azure Marketplace integrasjon',
        'Årlige kontrakter for beste priser',
      ],
      ctaTrialText: 'Start Gratis Prøveversjon',
      ctaDemoText: 'Be om Demo',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-praxis-dark-blue to-praxis-dark-blue-600 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-praxis-gold bg-opacity-10 border border-praxis-gold rounded-full mb-6">
              <span className="text-praxis-gold text-sm font-heading font-semibold uppercase tracking-brand-wide">
                {t.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-praxis-white mb-4">
              {t.headline}
            </h1>

            {/* Price */}
            <p className="text-2xl md:text-3xl text-praxis-gold font-heading font-semibold mb-6">
              {t.subheadline}
            </p>

            {/* Description */}
            <p className="text-lg text-praxis-blue-100 mb-8 max-w-2xl">
              {t.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-10">
              {t.features.map((feature, index) => (
                <li key={index} className="flex items-center text-praxis-white">
                  <svg
                    className="h-5 w-5 text-praxis-gold mr-3 flex-shrink-0"
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
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/trial-explainer"
                className="btn-accent btn-lg inline-flex items-center justify-center"
                aria-label={
                  language === 'no'
                    ? 'Start gratis prøveversjon'
                    : 'Start free trial'
                }
              >
                {t.ctaTrialText}
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
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
          </div>

          {/* Visual - Pricing Preview */}
          <div className="relative">
            <div className="bg-praxis-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <h3 className="text-xl font-heading font-semibold text-praxis-dark-blue mb-4">
                  {language === 'no'
                    ? 'Priser starter fra'
                    : 'Pricing starts at'}
                </h3>
                <div className="text-5xl font-heading font-bold text-praxis-gold mb-2">
                  €0.80
                </div>
                <div className="text-praxis-dark-blue-600 mb-6">
                  {language === 'no'
                    ? 'per ansatt per måned'
                    : 'per employee per month'}
                </div>
                <div className="border-t border-praxis-blue-200 pt-6">
                  <div className="text-sm text-praxis-dark-blue-600 space-y-2">
                    <div className="flex justify-between">
                      <span>
                        {language === 'no'
                          ? 'Liten virksomhet'
                          : 'Small Enterprise'}
                      </span>
                      <span className="font-semibold">€199/mnd</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {language === 'no'
                          ? 'Medium virksomhet'
                          : 'Medium Enterprise'}
                      </span>
                      <span className="font-semibold">€249+/mnd</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {language === 'no'
                          ? 'Stor virksomhet'
                          : 'Large Enterprise'}
                      </span>
                      <span className="font-semibold">
                        {language === 'no' ? 'Tilbud' : 'Quote'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-praxis-accent text-praxis-white px-4 py-2 rounded-full text-sm font-heading font-semibold shadow-lg transform rotate-12">
              {language === 'no' ? '30 dager gratis' : '30 days free'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
