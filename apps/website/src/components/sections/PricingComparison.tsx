import React, { useState } from 'react';

interface PricingTier {
  name: string;
  praxisPrice?: string;
  competitorPrice?: string;
  praxisFeatures: string[];
  competitorFeatures: string[];
  notes?: string;
  popular?: boolean;
  praxisValue?: string; // e.g., "Best Value"
}

interface PricingComparisonProps {
  competitorName: string;
  competitorLogo: string;
  tiers: PricingTier[];
  additionalComparisons?: {
    title: string;
    praxisValue: string;
    competitorValue: string;
  }[];
  language?: 'en' | 'no';
  className?: string;
}

export const PricingComparison: React.FC<PricingComparisonProps> = ({
  competitorName,
  competitorLogo,
  tiers,
  additionalComparisons = [],
  language = 'en',
  className = '',
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<
    'USD' | 'EUR' | 'NOK'
  >('USD');

  const content = {
    en: {
      title: 'Pricing Comparison',
      subtitle: `Compare pricing and value between Praxis Navigator and ${competitorName}`,
      praxisName: 'Praxis Navigator',
      currency: 'Currency:',
      perUser: 'per user/month',
      popular: 'Most Popular',
      bestValue: 'Best Value',
      getStarted: 'Get Started',
      contactSales: 'Contact Sales',
      features: 'Features Included',
      additionalValue: 'Additional Value Comparison',
      disclaimer: `Pricing information based on publicly available data as of ${new Date().toLocaleDateString()}. Actual pricing may vary. Contact ${competitorName} directly for current rates.`,
      valueProposition: 'Why Choose Praxis Navigator?',
      trialCTA: 'Start Free Trial',
      demoCTA: 'Schedule Demo',
    },
    no: {
      title: 'Prissammenligning',
      subtitle: `Sammenlign priser og verdi mellom Praxis Navigator og ${competitorName}`,
      praxisName: 'Praxis Navigator',
      currency: 'Valuta:',
      perUser: 'per bruker/måned',
      popular: 'Mest Populære',
      bestValue: 'Beste Verdi',
      getStarted: 'Kom i Gang',
      contactSales: 'Kontakt Salg',
      features: 'Inkluderte Funksjoner',
      additionalValue: 'Ytterligere Verdisammenligning',
      disclaimer: `Prisinformasjon basert på offentlig tilgjengelige data per ${new Date().toLocaleDateString()}. Faktiske priser kan variere. Kontakt ${competitorName} direkte for gjeldende priser.`,
      valueProposition: 'Hvorfor Velge Praxis Navigator?',
      trialCTA: 'Start Gratis Prøveperiode',
      demoCTA: 'Planlegg Demo',
    },
  };

  const t = content[language];

  // Currency conversion rates (simplified - in production, use real-time rates)
  const currencyRates = {
    USD: 1,
    EUR: 0.85,
    NOK: 10.5,
  };

  const convertPrice = (priceString?: string): string => {
    if (
      !priceString ||
      priceString === 'Custom' ||
      priceString.includes('Contact')
    ) {
      return priceString || 'N/A';
    }

    // Extract number from price string
    const match = priceString.match(/\d+/);
    if (!match) return priceString;

    const basePrice = parseInt(match[0]);
    const convertedPrice = Math.round(
      basePrice * currencyRates[selectedCurrency]
    );

    const currencySymbols = {
      USD: '$',
      EUR: '€',
      NOK: 'kr',
    };

    return `${currencySymbols[selectedCurrency]}${convertedPrice}`;
  };

  // Track pricing interactions
  const handleCurrencyChange = (currency: 'USD' | 'EUR' | 'NOK') => {
    setSelectedCurrency(currency);

    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pricing_currency_change', {
        currency: currency,
        competitor: competitorName,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  const handleCTAClick = (ctaType: string, tier: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'pricing_cta_click', {
        cta_type: ctaType,
        pricing_tier: tier,
        competitor: competitorName,
        currency: selectedCurrency,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-heading font-bold text-praxis-dark-blue mb-4">
          {t.title}
        </h3>
        <p className="text-xl text-praxis-blue-700 max-w-3xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Currency Selector */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-3 bg-white rounded-lg border border-praxis-blue-200 p-2">
          <label className="text-sm font-medium text-praxis-dark-blue">
            {t.currency}
          </label>
          {(['USD', 'EUR', 'NOK'] as const).map(currency => (
            <button
              key={currency}
              onClick={() => handleCurrencyChange(currency)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                selectedCurrency === currency
                  ? 'bg-praxis-accent text-white'
                  : 'text-praxis-blue-600 hover:bg-praxis-blue-50'
              }`}
            >
              {currency}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="grid lg:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl border-2 overflow-hidden transition-all duration-200 hover:shadow-lg ${
              tier.popular
                ? 'border-praxis-accent shadow-lg scale-105'
                : 'border-praxis-blue-200'
            }`}
          >
            {/* Popular Badge */}
            {tier.popular && (
              <div className="absolute top-0 left-0 right-0 bg-praxis-accent text-white text-center py-2 text-sm font-medium">
                {t.popular}
              </div>
            )}

            {/* Best Value Badge */}
            {tier.praxisValue && (
              <div className="absolute top-0 right-0 bg-praxis-accent text-white px-4 py-1 text-xs font-medium rounded-bl-lg">
                {tier.praxisValue}
              </div>
            )}

            <div className={`p-6 ${tier.popular ? 'pt-12' : ''}`}>
              {/* Tier Name */}
              <h4 className="text-xl font-heading font-bold text-praxis-dark-blue text-center mb-6">
                {tier.name}
              </h4>

              {/* Pricing Comparison */}
              <div className="space-y-4 mb-8">
                {/* Praxis Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img
                      src="/images/praxis-logo.svg"
                      alt="Praxis Navigator"
                      className="h-5 w-auto"
                    />
                    <span className="text-sm font-medium text-praxis-dark-blue">
                      {t.praxisName}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-praxis-accent">
                    {convertPrice(tier.praxisPrice)}
                  </div>
                  {tier.praxisPrice &&
                    !tier.praxisPrice.includes('Contact') && (
                      <div className="text-sm text-praxis-blue-600">
                        {t.perUser}
                      </div>
                    )}
                </div>

                {/* VS Divider */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 bg-praxis-blue-100 text-praxis-blue-700 text-sm font-medium rounded-full">
                    vs
                  </span>
                </div>

                {/* Competitor Pricing */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <img
                      src={competitorLogo}
                      alt={`${competitorName} logo`}
                      className="h-5 w-auto"
                    />
                    <span className="text-sm font-medium text-praxis-dark-blue">
                      {competitorName}
                    </span>
                  </div>
                  <div className="text-3xl font-bold text-praxis-blue-600">
                    {convertPrice(tier.competitorPrice)}
                  </div>
                  {tier.competitorPrice &&
                    !tier.competitorPrice.includes('Contact') && (
                      <div className="text-sm text-praxis-blue-600">
                        {t.perUser}
                      </div>
                    )}
                </div>
              </div>

              {/* Features Comparison */}
              <div className="space-y-6 mb-8">
                {/* Praxis Features */}
                <div>
                  <h5 className="text-sm font-semibold text-praxis-dark-blue mb-3">
                    {t.praxisName} {t.features}:
                  </h5>
                  <ul className="space-y-2">
                    {tier.praxisFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <svg
                          className="w-4 h-4 text-praxis-accent mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-praxis-dark-blue">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Competitor Features */}
                <div>
                  <h5 className="text-sm font-semibold text-praxis-dark-blue mb-3">
                    {competitorName} {t.features}:
                  </h5>
                  <ul className="space-y-2">
                    {tier.competitorFeatures.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <svg
                          className="w-4 h-4 text-praxis-blue-400 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-praxis-blue-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Notes */}
              {tier.notes && (
                <div className="mb-6 p-3 bg-praxis-blue-50 rounded-lg">
                  <p className="text-xs text-praxis-blue-600">{tier.notes}</p>
                </div>
              )}

              {/* CTAs */}
              <div className="space-y-3">
                <button
                  onClick={() => handleCTAClick('trial', tier.name)}
                  className="w-full btn-primary btn-md"
                >
                  {t.trialCTA}
                </button>
                <button
                  onClick={() => handleCTAClick('demo', tier.name)}
                  className="w-full btn-secondary btn-md"
                >
                  {t.demoCTA}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Value Comparisons */}
      {additionalComparisons.length > 0 && (
        <div className="bg-praxis-blue-50 rounded-2xl p-8">
          <h4 className="text-2xl font-heading font-bold text-praxis-dark-blue text-center mb-8">
            {t.additionalValue}
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalComparisons.map((comparison, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-praxis-blue-200"
              >
                <h5 className="font-semibold text-praxis-dark-blue mb-4">
                  {comparison.title}
                </h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-praxis-blue-600">
                      {t.praxisName}:
                    </span>
                    <span className="text-sm font-medium text-praxis-accent">
                      {comparison.praxisValue}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-praxis-blue-600">
                      {competitorName}:
                    </span>
                    <span className="text-sm font-medium text-praxis-blue-600">
                      {comparison.competitorValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disclaimer */}
      <div className="bg-praxis-blue-50 rounded-lg p-4 border border-praxis-blue-200">
        <p className="text-xs text-praxis-blue-600 text-center">
          {t.disclaimer}
        </p>
      </div>
    </div>
  );
};

export default PricingComparison;
