import React from 'react';

interface SATTeamsHeroSectionProps {
  language?: 'en' | 'no';
}

export const SATTeamsHeroSection: React.FC<SATTeamsHeroSectionProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      badge: 'For SAT Teams',
      headline: 'Enhance Training Programs with Behavioral Measurement',
      subheadline:
        'Prove training effectiveness and optimize programs with data-driven insights',
      description:
        "Transform your security awareness training from completion metrics to behavioral change measurement. Access Kai Roer's research hub and demonstrate clear ROI to security leadership while enhancing rather than replacing your existing programs.",
      keyBenefits: [
        'Measure post-training behavioral change',
        "Access to Kai Roer's research library",
        'Training program ROI demonstration',
        'Integration with existing training tools',
      ],
      trainingChallenges: {
        title: 'Common Training Team Challenges:',
        items: [
          'Proving training effectiveness beyond completion rates',
          'Demonstrating program ROI to security leadership',
          'Identifying which training content resonates',
          'Optimizing training resources and budget allocation',
          'Measuring long-term behavioral impact',
        ],
      },
      ctaPrimaryText: 'Request Training Demo',
      ctaSecondaryText: 'Access Research Hub',
    },
    no: {
      badge: 'For SAT Team',
      headline: 'Forbedre Opplæringsprogrammer med Atferdsmåling',
      subheadline:
        'Bevis opplæring effektivitet og optimaliser programmer med datadrevne innsikter',
      description:
        "Transformer din sikkerhetsbevissthet opplæring fra fullførelse metrikker til atferdsendring måling. Tilgang til Kai Roer's forskningshub og demonstrer klar ROI til sikkerhetsledelse mens du forbedrer heller enn erstatter dine eksisterende programmer.",
      keyBenefits: [
        'Mål post-opplæring atferdsendring',
        "Tilgang til Kai Roer's forskningsbibliotek",
        'Opplæringsprogram ROI demonstrasjon',
        'Integrasjon med eksisterende opplæringsverktøy',
      ],
      trainingChallenges: {
        title: 'Vanlige Opplæringsteam Utfordringer:',
        items: [
          'Bevise opplæring effektivitet utover fullførelse rater',
          'Demonstrere program ROI til sikkerhetsledelse',
          'Identifisere hvilket opplæringsinnhold resonerer',
          'Optimalisere opplæringsressurser og budsjett allokering',
          'Måle langsiktig atferdspåvirkning',
        ],
      },
      ctaPrimaryText: 'Be om Opplæring Demo',
      ctaSecondaryText: 'Tilgang Forskningshub',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-praxis-accent via-praxis-blue to-praxis-dark-blue py-16 md:py-24">
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
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`/${language === 'no' ? 'no/' : ''}contact?segment=sat-teams`}
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
                href={`/${language === 'no' ? 'no/' : ''}resources/research-hub`}
                className="btn-secondary btn-lg"
              >
                {t.ctaSecondaryText}
              </a>
            </div>

            {/* Kai Roer Authority */}
            <div className="bg-praxis-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex items-center text-praxis-blue-100">
                <div className="w-12 h-12 bg-praxis-gold rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-praxis-dark-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-semibold">
                    {language === 'no'
                      ? "Tilgang til Kai Roer's Forskningsbibliotek"
                      : "Access to Kai Roer's Research Library"}
                  </div>
                  <div className="text-sm text-praxis-blue-200">
                    {language === 'no'
                      ? '25+ års sikkerhetskultur forskning og akademiske publikasjoner'
                      : '25+ years of security culture research and academic publications'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Training Challenges Card */}
            <div className="bg-praxis-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <h3 className="text-xl font-heading font-bold text-praxis-dark-blue mb-6">
                {t.trainingChallenges.title}
              </h3>

              <ul className="space-y-4">
                {t.trainingChallenges.items.map((item, index) => (
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
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-praxis-accent text-praxis-white px-6 py-3 rounded-full text-sm font-heading font-bold shadow-lg transform -rotate-12">
              {language === 'no' ? 'Forsknings-Basert' : 'Research-Based'}
            </div>
          </div>
        </div>

        {/* Training Effectiveness Stats */}
        <div className="mt-16 pt-16 border-t border-praxis-blue-400">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                78%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Forbedring i opplæring effektivitet'
                  : 'Improvement in training effectiveness'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                60%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Reduksjon i program planlegging tid'
                  : 'Reduction in program planning time'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                25+
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'År forskningserfaring'
                  : 'Years of research experience'}
              </div>
            </div>

            <div>
              <div className="text-4xl font-heading font-bold text-praxis-gold mb-2">
                94%
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'SAT team tilfredshet score'
                  : 'SAT team satisfaction score'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
