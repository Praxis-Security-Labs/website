import React from 'react';
import { PersonaCTA } from '../ui/PersonaCTA';

interface ManagersHeroSectionProps {
  language?: 'en' | 'no';
}

export const ManagersHeroSection: React.FC<ManagersHeroSectionProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      badge: 'For Department Managers',
      headline: "Visibility Into Your Team's Security Performance",
      subheadline:
        'Monitor, benchmark, and improve departmental security culture',
      description:
        "Get clear insights into your team's security behaviors with industry benchmarking. Demonstrate team improvement to leadership while identifying areas that need attention.",
      keyBenefits: [
        'Team performance visibility and tracking',
        'Industry and peer benchmarking',
        'Departmental security culture metrics',
        'Actionable improvement recommendations',
      ],
      ctaPrimaryText: 'Request Manager Demo',
      ctaSecondaryText: 'See Team Dashboard',
    },
    no: {
      badge: 'For Avdelingsledere',
      headline: 'Synlighet i Ditt Teams Sikkerhetsytelighet',
      subheadline: 'Overvåk, benchmark, og forbedre avdelings sikkerhetskultur',
      description:
        'Få klare innsikter i ditt teams sikkerhetsatferd med industri benchmarking. Demonstrer team forbedring til ledelse mens du identifiserer områder som trenger oppmerksomhet.',
      keyBenefits: [
        'Team ytelse synlighet og sporing',
        'Industri og peer benchmarking',
        'Avdelings sikkerhetskultur metrikker',
        'Handlingsrettede forbedring anbefalinger',
      ],
      ctaPrimaryText: 'Be om Leder Demo',
      ctaSecondaryText: 'Se Team Dashboard',
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-praxis-blue-600 to-praxis-dark-blue py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-praxis-gold bg-opacity-20 border border-praxis-gold rounded-full mb-6">
            <span className="text-praxis-gold text-sm font-heading font-bold uppercase tracking-brand-wide">
              {t.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-praxis-white mb-6 max-w-4xl mx-auto">
            {t.headline}
          </h1>

          <p className="text-xl md:text-2xl text-praxis-blue-100 font-heading mb-6 max-w-3xl mx-auto">
            {t.subheadline}
          </p>

          <p className="text-lg text-praxis-blue-200 mb-12 max-w-4xl mx-auto">
            {t.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {t.keyBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-praxis-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-praxis-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-praxis-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-praxis-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs - Using PersonaCTA component for persona-specific targeting */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PersonaCTA
              segment="managers"
              language={language}
              variant="primary"
              size="lg"
            />
            <PersonaCTA
              segment="managers"
              language={language}
              variant="secondary"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
