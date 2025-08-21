import React, { useState } from 'react';

interface PricingTableSectionProps {
  language?: 'en' | 'no';
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaUrl: string;
  supportLevel: string;
}

export const PricingTableSection: React.FC<PricingTableSectionProps> = ({
  language = 'en' as 'en' | 'no',
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual'
  );

  const content = {
    en: {
      sectionTitle: 'Choose Your Plan',
      sectionDescription:
        'Transparent pricing designed for organizations of every size. All plans include our core security culture measurement features.',
      billingToggle: {
        monthly: 'Monthly',
        annual: 'Annual',
      },
      saveBadge: 'Save 20%',
      allPlansInclude: 'All plans include:',
      commonFeatures: [
        'Microsoft 365 integration',
        'Automated reporting',
        'AI-driven analytics',
        'Real-time risk tracking',
        'GDPR compliant',
        'Hosted in Europe',
        'Data encryption',
      ],
    },
    no: {
      sectionTitle: 'Velg Din Plan',
      sectionDescription:
        'Transparente priser designet for organisasjoner av alle størrelser. Alle planer inkluderer våre kjernefunksjoner for måling av sikkerhetskultur.',
      billingToggle: {
        monthly: 'Månedlig',
        annual: 'Årlig',
      },
      saveBadge: 'Spar 20%',
      allPlansInclude: 'Alle planer inkluderer:',
      commonFeatures: [
        'Microsoft 365 integrasjon',
        'Automatisert rapportering',
        'AI-drevne analytikk',
        'Sanntids risikoovervåking',
        'GDPR kompatibel',
        'Hostet i Europa',
        'Datakryptering',
      ],
    },
  };

  const t = content[language];
  const marketplaceUrl =
    typeof window !== 'undefined'
      ? window.location.host.includes('localhost')
        ? 'https://azuremarketplace.microsoft.com'
        : import.meta.env.ASTRO_PUBLIC_MARKETPLACE_URL ||
          'https://azuremarketplace.microsoft.com'
      : 'https://azuremarketplace.microsoft.com';

  const pricingTiers: PricingTier[] =
    language === 'en'
      ? [
          {
            id: 'small',
            name: 'Small Enterprise',
            price: billingPeriod === 'annual' ? '€199' : '€249',
            period: 'per month',
            description: 'Perfect for organizations up to 199 employees',
            features: [
              'Up to 199 employees',
              'Basic email support',
              'Standard reporting dashboard',
              'Monthly security insights',
              'Core behavioral analytics',
              'Microsoft Graph integration',
            ],
            ctaText: 'Start Free Trial',
            ctaUrl: marketplaceUrl,
            supportLevel: 'Email support',
          },
          {
            id: 'medium',
            name: 'Medium Enterprise',
            price: billingPeriod === 'annual' ? '€249' : '€299',
            period: 'per month (starting at)',
            description: 'Ideal for growing companies with 200+ employees',
            features: [
              '200+ employees',
              'Priority email support',
              'Advanced reporting suite',
              'Weekly security insights',
              'Enhanced behavioral analytics',
              'Custom integrations',
              'Benchmark comparisons',
              'Executive dashboards',
            ],
            highlighted: true,
            ctaText: 'Start Free Trial',
            ctaUrl: marketplaceUrl,
            supportLevel: 'Priority email support',
          },
          {
            id: 'large',
            name: 'Large Enterprise',
            price: 'Custom',
            period: 'pricing',
            description: 'Tailored solutions for large organizations',
            features: [
              'Unlimited employees',
              'Phone & email support',
              'White-label reporting',
              'Real-time insights',
              'Advanced AI analytics',
              'Custom API access',
              'Dedicated account manager',
              'SLA guarantee',
              'Bespoke onboarding',
            ],
            ctaText: 'Contact Sales',
            ctaUrl: language === 'no' ? '/no/contact' : '/contact',
            supportLevel: 'Priority phone & email support with SLA',
          },
        ]
      : [
          {
            id: 'small',
            name: 'Liten Virksomhet',
            price: billingPeriod === 'annual' ? '€199' : '€249',
            period: 'per måned',
            description: 'Perfekt for organisasjoner opptil 199 ansatte',
            features: [
              'Opptil 199 ansatte',
              'Grunnleggende e-poststøtte',
              'Standard rapporteringsdashboard',
              'Månedlige sikkerhetsinnsikter',
              'Kjerne atferdsanalytikk',
              'Microsoft Graph integrasjon',
            ],
            ctaText: 'Start Gratis Prøveversjon',
            ctaUrl: marketplaceUrl,
            supportLevel: 'E-poststøtte',
          },
          {
            id: 'medium',
            name: 'Medium Virksomhet',
            price: billingPeriod === 'annual' ? '€249' : '€299',
            period: 'per måned (starter på)',
            description: 'Ideell for voksende bedrifter med 200+ ansatte',
            features: [
              '200+ ansatte',
              'Prioritert e-poststøtte',
              'Avansert rapporteringssuite',
              'Ukentlige sikkerhetsinnsikter',
              'Forbedret atferdsanalytikk',
              'Tilpassede integrasjoner',
              'Benchmark sammenligninger',
              'Lederskap dashboards',
            ],
            highlighted: true,
            ctaText: 'Start Gratis Prøveversjon',
            ctaUrl: marketplaceUrl,
            supportLevel: 'Prioritert e-poststøtte',
          },
          {
            id: 'large',
            name: 'Stor Virksomhet',
            price: 'Tilpasset',
            period: 'prising',
            description: 'Skreddersydde løsninger for store organisasjoner',
            features: [
              'Ubegrenset ansatte',
              'Telefon & e-poststøtte',
              'White-label rapportering',
              'Sanntids innsikter',
              'Avansert AI analytikk',
              'Tilpasset API tilgang',
              'Dedikert kontoansvarlig',
              'SLA garanti',
              'Skreddersydd onboarding',
            ],
            ctaText: 'Kontakt Salg',
            ctaUrl: language === 'no' ? '/no/contact' : '/contact',
            supportLevel: 'Prioritert telefon & e-poststøtte med SLA',
          },
        ];

  return (
    <section className="bg-praxis-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-3xl mx-auto mb-8">
            {t.sectionDescription}
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-praxis-white border border-praxis-blue-200 rounded-full p-1">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 text-sm font-heading font-semibold rounded-full transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-praxis-dark-blue text-praxis-white shadow-md'
                  : 'text-praxis-dark-blue-600 hover:text-praxis-dark-blue'
              }`}
            >
              {t.billingToggle.monthly}
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-6 py-2 text-sm font-heading font-semibold rounded-full transition-all duration-200 relative ${
                billingPeriod === 'annual'
                  ? 'bg-praxis-dark-blue text-praxis-white shadow-md'
                  : 'text-praxis-dark-blue-600 hover:text-praxis-dark-blue'
              }`}
            >
              {t.billingToggle.annual}
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-praxis-accent text-praxis-white px-2 py-1 rounded text-xs font-semibold">
                {t.saveBadge}
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map(tier => (
            <div
              key={tier.id}
              className={`relative bg-praxis-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                tier.highlighted
                  ? 'border-2 border-praxis-gold ring-4 ring-praxis-gold ring-opacity-20 transform scale-105'
                  : 'border border-praxis-blue-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-praxis-gold text-praxis-dark-blue px-6 py-2 rounded-full text-sm font-heading font-bold uppercase tracking-brand-wide">
                    {language === 'no' ? 'Mest Populær' : 'Most Popular'}
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Tier Header */}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-heading font-bold text-praxis-dark-blue mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-praxis-dark-blue-600 text-sm mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-4xl font-heading font-bold text-praxis-dark-blue">
                      {tier.price}
                    </span>
                    {tier.price !== 'Custom' && tier.price !== 'Tilpasset' && (
                      <span className="text-praxis-dark-blue-600 ml-2">
                        {tier.period}
                      </span>
                    )}
                    {(tier.price === 'Custom' ||
                      tier.price === 'Tilpasset') && (
                      <span className="text-praxis-dark-blue-600 ml-2">
                        {tier.period}
                      </span>
                    )}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={tier.ctaUrl}
                    target={tier.ctaUrl.includes('http') ? '_blank' : '_self'}
                    rel={
                      tier.ctaUrl.includes('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className={`block w-full py-3 px-6 rounded-lg font-heading font-semibold text-center transition-all duration-200 ${
                      tier.highlighted
                        ? 'bg-praxis-gold text-praxis-dark-blue hover:bg-praxis-gold-600 shadow-lg hover:shadow-xl'
                        : 'bg-praxis-dark-blue text-praxis-white hover:bg-praxis-dark-blue-600'
                    }`}
                  >
                    {tier.ctaText}
                  </a>
                </div>

                {/* Features List */}
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-praxis-accent mr-3 mt-0.5 flex-shrink-0"
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
                      <span className="text-praxis-dark-blue-700 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Support Level */}
                <div className="mt-8 pt-6 border-t border-praxis-blue-200">
                  <div className="text-xs text-praxis-dark-blue-600 uppercase tracking-brand-wide font-heading font-semibold mb-2">
                    {language === 'no' ? 'Støttenivå' : 'Support Level'}
                  </div>
                  <div className="text-sm text-praxis-dark-blue">
                    {tier.supportLevel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Features */}
        <div className="bg-praxis-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-heading font-bold text-praxis-dark-blue text-center mb-8">
            {t.allPlansInclude}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.commonFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
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
                <span className="text-praxis-dark-blue text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
