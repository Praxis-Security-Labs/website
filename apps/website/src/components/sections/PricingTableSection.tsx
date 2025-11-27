import React, { useState } from 'react';
import { pages } from '../../i18n/pages';

interface PricingTableSectionProps {
  language?: 'en' | 'no';
}

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
  ctaText: string;
  ctaUrl: string;
  supportLevel: string;
}

export const PricingTableSection: React.FC<PricingTableSectionProps> = ({
  language = 'en',
}) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>(
    'annual'
  );

  const t = pages[language].pricing.table;

  // Get pricing plans from translation system
  const pricingTiers: PricingTier[] = t.plans.map(plan => ({
    id: plan.id,
    name: plan.name,
    price: billingPeriod === 'annual' ? plan.priceAnnual : plan.priceMonthly,
    period: plan.period,
    description: plan.description,
    features: plan.features,
    highlighted: plan.highlighted,
    ctaText: plan.ctaText,
    ctaUrl:
      plan.id === 'large'
        ? language === 'no'
          ? '/no/contact'
          : '/contact'
        : '/start-now',
    supportLevel: plan.supportLevel,
  }));

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
                    {t.mostPopular}
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
                    {t.supportLevel}
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
