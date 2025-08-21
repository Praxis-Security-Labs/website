import React, { useState } from 'react';

interface FeatureComparisonSectionProps {
  language?: 'en' | 'no';
}

// interface FeatureCategory {
//   id: string;
//   name: string;
//   features: Feature[];
// }

// interface Feature {
//   name: string;
//   description: string;
//   small: boolean | string;
//   medium: boolean | string;
//   large: boolean | string;
// }

export const FeatureComparisonSection: React.FC<
  FeatureComparisonSectionProps
> = ({ language = 'en' }) => {
  const [activeCategory, setActiveCategory] = useState<string>('core');

  const content = {
    en: {
      sectionTitle: 'Feature Comparison',
      sectionDescription:
        'Compare features across all plans to find the perfect fit for your organization.',
      plans: {
        small: 'Small Enterprise',
        medium: 'Medium Enterprise',
        large: 'Large Enterprise',
      },
      categories: [
        {
          id: 'core',
          name: 'Core Features',
          features: [
            {
              name: 'Employee Limit',
              description: 'Maximum number of employees covered',
              small: 'Up to 199',
              medium: '200+',
              large: 'Unlimited',
            },
            {
              name: 'Microsoft 365 Integration',
              description: 'Full integration with Microsoft Graph API',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Behavioral Monitoring',
              description: 'Real-time security behavior tracking',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Risk Assessment',
              description: 'Automated security risk evaluation',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'GDPR Compliance',
              description: 'Full GDPR compliance and data protection',
              small: true,
              medium: true,
              large: true,
            },
          ],
        },
        {
          id: 'analytics',
          name: 'Analytics & Reporting',
          features: [
            {
              name: 'Standard Dashboard',
              description: 'Basic security culture metrics dashboard',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Advanced Analytics',
              description: 'AI-powered behavioral insights and predictions',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'Custom Reports',
              description: 'Customizable reporting templates',
              small: 'Basic',
              medium: 'Advanced',
              large: 'Full Custom',
            },
            {
              name: 'Executive Dashboards',
              description: 'C-suite ready security governance reports',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'Benchmark Comparisons',
              description: 'Industry and peer comparison analytics',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'White-label Reporting',
              description: 'Branded reports with your organization logo',
              small: false,
              medium: false,
              large: true,
            },
          ],
        },
        {
          id: 'integration',
          name: 'Integration & API',
          features: [
            {
              name: 'Microsoft Graph API',
              description: 'Standard Microsoft 365 data integration',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Custom Integrations',
              description: 'Additional third-party system integrations',
              small: false,
              medium: 'Limited',
              large: 'Unlimited',
            },
            {
              name: 'REST API Access',
              description: 'Direct API access for custom development',
              small: false,
              medium: 'Read-only',
              large: 'Full Access',
            },
            {
              name: 'Webhook Support',
              description: 'Real-time data webhooks',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'Single Sign-On (SSO)',
              description: 'Azure AD and other SSO providers',
              small: true,
              medium: true,
              large: true,
            },
          ],
        },
        {
          id: 'support',
          name: 'Support & Services',
          features: [
            {
              name: 'Email Support',
              description: 'Standard email support during business hours',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Priority Support',
              description: 'Faster response times and priority handling',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'Phone Support',
              description: 'Direct phone support line',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'Dedicated Account Manager',
              description: 'Personal account management and strategy support',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'SLA Guarantee',
              description: 'Uptime and response time guarantees',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'Bespoke Onboarding',
              description: 'Custom onboarding and training programs',
              small: false,
              medium: false,
              large: true,
            },
          ],
        },
      ],
    },
    no: {
      sectionTitle: 'Funksjonssammenligning',
      sectionDescription:
        'Sammenlign funksjoner på tvers av alle planer for å finne den perfekte løsningen for din organisasjon.',
      plans: {
        small: 'Liten Virksomhet',
        medium: 'Medium Virksomhet',
        large: 'Stor Virksomhet',
      },
      categories: [
        {
          id: 'core',
          name: 'Kjernefunksjoner',
          features: [
            {
              name: 'Ansattgrense',
              description: 'Maksimalt antall ansatte som dekkes',
              small: 'Opptil 199',
              medium: '200+',
              large: 'Ubegrenset',
            },
            {
              name: 'Microsoft 365 Integrasjon',
              description: 'Full integrasjon med Microsoft Graph API',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Atferdsovervåking',
              description: 'Sanntids sikkerhetsatferdsovervåking',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Risikovurdering',
              description: 'Automatisert sikkerhetrisikovurdering',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'GDPR Samsvar',
              description: 'Full GDPR-samsvar og databeskyttelse',
              small: true,
              medium: true,
              large: true,
            },
          ],
        },
        {
          id: 'analytics',
          name: 'Analytikk & Rapportering',
          features: [
            {
              name: 'Standard Dashboard',
              description: 'Grunnleggende sikkerhetskulturemetrikkdashboard',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Avansert Analytikk',
              description: 'AI-drevne atferdsinnsikter og prediksjoner',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'Tilpassede Rapporter',
              description: 'Tilpassbare rapporteringsmaler',
              small: 'Grunnleggende',
              medium: 'Avansert',
              large: 'Fullt Tilpasset',
            },
            {
              name: 'Lederskap Dashboards',
              description: 'Lederskap-klare sikkerhetsgoverns rapporter',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'Benchmark Sammenligninger',
              description: 'Industri- og peer-sammenligningsanalytikk',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'White-label Rapportering',
              description:
                'Merkevarebaserte rapporter med din organisasjons logo',
              small: false,
              medium: false,
              large: true,
            },
          ],
        },
        {
          id: 'integration',
          name: 'Integrasjon & API',
          features: [
            {
              name: 'Microsoft Graph API',
              description: 'Standard Microsoft 365 dataintegrasjon',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Tilpassede Integrasjoner',
              description: 'Ytterligere tredjepartssystemintegrasjoner',
              small: false,
              medium: 'Begrenset',
              large: 'Ubegrenset',
            },
            {
              name: 'REST API Tilgang',
              description: 'Direkte API-tilgang for tilpasset utvikling',
              small: false,
              medium: 'Kun Lesing',
              large: 'Full Tilgang',
            },
            {
              name: 'Webhook Støtte',
              description: 'Sanntids data webhooks',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'Single Sign-On (SSO)',
              description: 'Azure AD og andre SSO-leverandører',
              small: true,
              medium: true,
              large: true,
            },
          ],
        },
        {
          id: 'support',
          name: 'Støtte & Tjenester',
          features: [
            {
              name: 'E-poststøtte',
              description: 'Standard e-poststøtte i arbeidstiden',
              small: true,
              medium: true,
              large: true,
            },
            {
              name: 'Prioritert Støtte',
              description: 'Raskere responstider og prioritert behandling',
              small: false,
              medium: true,
              large: true,
            },
            {
              name: 'Telefonstøtte',
              description: 'Direkte telefonstøttelinje',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'Dedikert Kontoansvarlig',
              description: 'Personlig kontoadministrasjon og strategistøtte',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'SLA Garanti',
              description: 'Oppetid og responstidsgarantier',
              small: false,
              medium: false,
              large: true,
            },
            {
              name: 'Skreddersydd Onboarding',
              description: 'Tilpassede onboarding- og treningsprogrammer',
              small: false,
              medium: false,
              large: true,
            },
          ],
        },
      ],
    },
  };

  const t = content[language];

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <svg
          className="h-5 w-5 text-praxis-accent mx-auto"
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
      );
    } else if (value === false) {
      return (
        <svg
          className="h-5 w-5 text-praxis-blue-300 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      );
    } else {
      return (
        <span className="text-sm font-medium text-praxis-dark-blue text-center">
          {value}
        </span>
      );
    }
  };

  return (
    <section className="bg-praxis-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-3xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {t.categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 text-sm font-heading font-semibold rounded-lg transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-praxis-gold text-praxis-dark-blue shadow-lg'
                  : 'bg-praxis-blue-50 text-praxis-dark-blue-600 hover:bg-praxis-blue-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-praxis-blue-50 rounded-2xl p-6 md:p-8 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Table Header */}
              <thead>
                <tr>
                  <th className="text-left py-4 px-6">
                    <span className="text-lg font-heading font-bold text-praxis-dark-blue">
                      {t.categories.find(c => c.id === activeCategory)?.name}
                    </span>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="bg-praxis-white rounded-lg p-4 shadow-sm">
                      <span className="text-lg font-heading font-bold text-praxis-dark-blue">
                        {t.plans.small}
                      </span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="bg-praxis-gold rounded-lg p-4 shadow-lg transform scale-105">
                      <span className="text-lg font-heading font-bold text-praxis-dark-blue">
                        {t.plans.medium}
                      </span>
                      <div className="text-xs font-semibold mt-1 opacity-75">
                        {language === 'no' ? 'Mest Populær' : 'Most Popular'}
                      </div>
                    </div>
                  </th>
                  <th className="text-center py-4 px-6">
                    <div className="bg-praxis-white rounded-lg p-4 shadow-sm">
                      <span className="text-lg font-heading font-bold text-praxis-dark-blue">
                        {t.plans.large}
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {t.categories
                  .find(c => c.id === activeCategory)
                  ?.features.map((feature, index) => (
                    <tr
                      key={index}
                      className="border-b border-praxis-blue-200 last:border-b-0"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <div className="font-heading font-semibold text-praxis-dark-blue mb-1">
                            {feature.name}
                          </div>
                          <div className="text-sm text-praxis-dark-blue-600">
                            {feature.description}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderFeatureValue(feature.small)}
                      </td>
                      <td className="py-4 px-6 text-center bg-praxis-gold bg-opacity-10">
                        {renderFeatureValue(feature.medium)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {renderFeatureValue(feature.large)}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile-friendly feature list */}
        <div className="lg:hidden mt-8">
          <div className="space-y-6">
            {t.categories
              .find(c => c.id === activeCategory)
              ?.features.map((feature, index) => (
                <div key={index} className="bg-praxis-blue-50 rounded-lg p-6">
                  <div className="mb-4">
                    <h4 className="font-heading font-semibold text-praxis-dark-blue mb-2">
                      {feature.name}
                    </h4>
                    <p className="text-sm text-praxis-dark-blue-600">
                      {feature.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xs font-heading font-semibold text-praxis-dark-blue-600 mb-2">
                        {t.plans.small}
                      </div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.small)}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-xs font-heading font-semibold text-praxis-dark-blue-600 mb-2">
                        {t.plans.medium}
                      </div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.medium)}
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="text-xs font-heading font-semibold text-praxis-dark-blue-600 mb-2">
                        {t.plans.large}
                      </div>
                      <div className="flex justify-center">
                        {renderFeatureValue(feature.large)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
