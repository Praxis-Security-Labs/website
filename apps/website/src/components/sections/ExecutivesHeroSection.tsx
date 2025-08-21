import React from 'react';

interface ExecutivesHeroSectionProps {
  language?: 'en' | 'no';
}

export const ExecutivesHeroSection: React.FC<ExecutivesHeroSectionProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      badge: 'For Board & Executives',
      headline: 'Security Risk in Business Language',
      subheadline:
        'Transform technical security reports into strategic business insights',
      description:
        'Make informed security investment decisions with clear regulatory compliance status and measurable business impact. Praxis Navigator translates complex security data into board-ready presentations that demonstrate value and regulatory readiness.',
      keyBenefits: [
        'Regulatory compliance transparency (NIS2, SOX)',
        'Business risk mitigation with ROI metrics',
        'Investment justification with clear outcomes',
        'Board-ready governance reporting',
      ],
      executiveChallenges: {
        title: 'Executive Challenges We Address:',
        items: [
          'Understanding actual vs. theoretical security posture',
          'Justifying security investments to stakeholders',
          'Meeting regulatory compliance requirements',
          'Translating technical risks into business impact',
          'Demonstrating security program effectiveness',
        ],
      },
      ctaPrimaryText: 'Request Executive Demo',
      ctaSecondaryText: 'View Sample Board Report',
    },
    no: {
      badge: 'For Styre & Ledere',
      headline: 'Sikkerhetsrisiko i Forretningsspråk',
      subheadline:
        'Transformer tekniske sikkerhetsrapporter til strategiske forretningsinnsikter',
      description:
        'Ta informerte sikkerhetsinvesteringsbeslutninger med klar regulatorisk compliance status og målbar forretningspåvirkning. Praxis Navigator oversetter komplekse sikkerhetsdata til styreklar presentasjoner som demonstrerer verdi og regulatorisk beredskap.',
      keyBenefits: [
        'Regulatorisk compliance transparens (NIS2, SOX)',
        'Forretningsrisiko mitigering med ROI metrikker',
        'Investering rettferdiggjørelse med klare utfall',
        'Styreklar styring rapportering',
      ],
      executiveChallenges: {
        title: 'Lederskap Utfordringer Vi Adresserer:',
        items: [
          'Forstå faktisk vs. teoretisk sikkerhetsposisjon',
          'Rettferdiggjøre sikkerhetsinvesteringer til interessenter',
          'Møte regulatoriske compliance krav',
          'Oversette tekniske risikoer til forretningspåvirkning',
          'Demonstrere sikkerhetsprogram effektivitet',
        ],
      },
      ctaPrimaryText: 'Be om Lederskap Demo',
      ctaSecondaryText: 'Se Eksempel Styrerapporten',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-praxis-dark-blue via-praxis-blue to-praxis-blue-600 py-16 md:py-24">
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
              {t.keyBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-praxis-white">
                  <svg
                    className="h-6 w-6 text-praxis-gold mr-3 flex-shrink-0"
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

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`/${language === 'no' ? 'no/' : ''}contact?segment=executives`}
                className="btn-accent btn-lg inline-flex items-center justify-center group"
              >
                {t.ctaPrimaryText}
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <a
                href={`/${language === 'no' ? 'no/' : ''}resources/board-reports`}
                className="btn-secondary btn-lg"
              >
                {t.ctaSecondaryText}
              </a>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Executive Challenges Card */}
            <div className="bg-praxis-white rounded-2xl shadow-2xl p-8 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-xl font-heading font-bold text-praxis-dark-blue mb-6">
                {t.executiveChallenges.title}
              </h3>

              <ul className="space-y-4">
                {t.executiveChallenges.items.map((item, index) => (
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
            <div className="absolute -top-4 -left-4 bg-praxis-gold text-praxis-dark-blue p-3 rounded-full shadow-lg">
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

            <div className="absolute -bottom-4 -right-4 bg-praxis-accent text-praxis-white px-6 py-3 rounded-full text-sm font-heading font-bold shadow-lg transform rotate-12">
              {language === 'no' ? 'Styre-Klar' : 'Board-Ready'}
            </div>
          </div>
        </div>

        {/* Regulatory Stats Section */}
        <div className="mt-16 pt-16 border-t border-praxis-blue-400">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                98%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Regulatorisk compliance beredskap'
                  : 'Regulatory compliance readiness'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                75%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Reduksjon i styre rapportering tid'
                  : 'Reduction in board reporting time'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                96%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Lederskap tilfredshet score'
                  : 'Executive satisfaction score'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
