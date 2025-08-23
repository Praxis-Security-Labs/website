import React from 'react';
import { PersonaCTA } from '../ui/PersonaCTA';

interface SecurityLeadersHeroSectionProps {
  language?: 'en' | 'no';
}

export const SecurityLeadersHeroSection: React.FC<
  SecurityLeadersHeroSectionProps
> = ({ language = 'en' }) => {
  const content = {
    en: {
      badge: 'For Security Leaders',
      headline: 'Prove Your Security Training ROI',
      subheadline:
        'Transform security awareness from cost center to measurable business value',
      description:
        'Stop defending training budgets with anecdotal evidence. Praxis Navigator provides CISOs with behavioral data and board-ready reports that demonstrate real security culture improvement and regulatory compliance.',
      painPoints: {
        title: 'Security Leader Challenges We Solve:',
        items: [
          'Inability to measure security training effectiveness',
          'Lack of data for board and compliance reporting',
          'Pressure to prove security investment ROI',
          'Resource constraints and budget justification',
          'Gap between training completion and behavior change',
          'Manual reporting processes that consume valuable time',
        ],
      },
      benefits: [
        'Quantify security behavior change over time',
        'Generate executive-ready compliance reports',
        'Integrate with existing security infrastructure',
        'Demonstrate training program effectiveness',
      ],
      ctaPrimaryText: 'Request CISO Demo',
      ctaSecondaryText: 'View ROI Calculator',
      socialProof: 'Trusted by CISOs at 500-10,000+ employee organizations',
    },
    no: {
      badge: 'For Sikkerhetsledere',
      headline: 'Bevis Din Sikkerhetsopplæring ROI',
      subheadline:
        'Transformer sikkerhetsbevissthet fra kostnadssenter til målbar forretningsverdi',
      description:
        'Slutt å forsvare opplæringsbudsjetter med anekdotiske bevis. Praxis Navigator gir CISOs atferdsdata og styreklar rapporter som demonstrerer reell sikkerhetskulturell forbedring og regulatorisk compliance.',
      painPoints: {
        title: 'Sikkerhetsleder Utfordringer Vi Løser:',
        items: [
          'Manglende evne til å måle sikkerhetsopplæring effektivitet',
          'Mangel på data for styre- og compliance-rapportering',
          'Press for å bevise sikkerhetsinvestering ROI',
          'Ressursbegrensninger og budsjettjustifikasjon',
          'Gap mellom opplæring fullføring og atferdsendring',
          'Manuelle rapporteringsprosesser som bruker verdifull tid',
        ],
      },
      benefits: [
        'Kvantifiser sikkerhetsatferdsendring over tid',
        'Generer lederskap-klare compliance rapporter',
        'Integrer med eksisterende sikkerhetsinfrastruktur',
        'Demonstrer opplæringsprogram effektivitet',
      ],
      ctaPrimaryText: 'Be om CISO Demo',
      ctaSecondaryText: 'Se ROI Kalkulator',
      socialProof: 'Stolt på av CISOs ved 500-10,000+ ansatte organisasjoner',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-praxis-dark-blue via-praxis-dark-blue-600 to-praxis-blue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-praxis-gold bg-opacity-20 border border-praxis-gold rounded-full mb-6">
              <span className="text-praxis-gold text-sm font-heading font-bold uppercase tracking-brand-wide">
                {t.badge}
              </span>
            </div>

            {/* Headlines */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-praxis-white mb-6">
              {t.headline}
            </h1>

            <p className="text-xl md:text-2xl text-praxis-blue-100 font-heading mb-6">
              {t.subheadline}
            </p>

            <p className="text-lg text-praxis-blue-200 mb-8">{t.description}</p>

            {/* Key Benefits */}
            <ul className="space-y-3 mb-10">
              {t.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-praxis-white">
                  <svg
                    className="h-6 w-6 text-praxis-accent mr-3 flex-shrink-0"
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
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs - Using PersonaCTA component for persona-specific targeting */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <PersonaCTA
                segment="security-leaders"
                language={language}
                variant="primary"
                size="lg"
              />
              <PersonaCTA
                segment="security-leaders"
                language={language}
                variant="secondary"
                size="lg"
              />
            </div>

            {/* Social Proof */}
            <p className="text-praxis-blue-100 text-sm">{t.socialProof}</p>
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Pain Points Card */}
            <div className="bg-praxis-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-xl font-heading font-bold text-praxis-dark-blue mb-6">
                {t.painPoints.title}
              </h3>

              <ul className="space-y-4">
                {t.painPoints.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-praxis-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-praxis-dark-blue text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 bg-praxis-accent text-praxis-white p-3 rounded-full shadow-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-praxis-gold text-praxis-dark-blue px-6 py-3 rounded-full text-sm font-heading font-bold shadow-lg transform -rotate-12">
              {language === 'no' ? 'ROI-Drevet' : 'ROI-Driven'}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-16 border-t border-praxis-blue-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                85%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Reduksjon i sikkerhetsrapportering tid'
                  : 'Reduction in security reporting time'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                3x
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Raskere compliance godkjenning'
                  : 'Faster compliance approval'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                92%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'CISO tilfredshet score'
                  : 'CISO satisfaction score'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
