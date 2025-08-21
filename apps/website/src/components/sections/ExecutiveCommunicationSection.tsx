import React, { useState } from 'react';

interface ExecutiveCommunicationSectionProps {
  language?: 'en' | 'no';
}

export const ExecutiveCommunicationSection: React.FC<
  ExecutiveCommunicationSectionProps
> = ({ language = 'en' }) => {
  const [activeReport, setActiveReport] = useState<string>('board');

  const content = {
    en: {
      sectionTitle: 'Board-Ready Security Governance Reports',
      sectionDescription:
        'Transform complex security data into executive-level insights that drive informed decision-making and demonstrate program value.',
      reportTypes: [
        {
          id: 'board',
          name: 'Board Reports',
          description:
            'Executive summaries for board meetings and governance committees',
          features: [
            'Security culture maturity scoring',
            'Risk trend analysis with business impact',
            'Regulatory compliance status updates',
            'Investment ROI and budget justification',
            'Peer benchmarking against industry standards',
          ],
        },
        {
          id: 'compliance',
          name: 'Compliance Reports',
          description:
            'Automated reports for regulatory requirements and audits',
          features: [
            'NIS2 directive compliance mapping',
            'ISO 27001 security awareness evidence',
            'SOX compliance behavioral controls',
            'GDPR privacy awareness tracking',
            'Audit trail documentation',
          ],
        },
        {
          id: 'executive',
          name: 'Executive Dashboards',
          description:
            'Real-time security culture visibility for C-suite leaders',
          features: [
            'Security culture health score',
            'Department-level risk comparisons',
            'Training effectiveness metrics',
            'Incident correlation analysis',
            'Budget optimization recommendations',
          ],
        },
      ],
      communicationBenefits: {
        title: 'Executive Communication Benefits',
        items: [
          {
            icon: 'presentation-chart-line',
            title: 'Data-Driven Narratives',
            description:
              'Replace anecdotal reports with compelling behavioral data stories that resonate with executive audiences.',
          },
          {
            icon: 'shield-check',
            title: 'Risk Visualization',
            description:
              'Transform complex security metrics into clear risk indicators that executives can understand and act upon.',
          },
          {
            icon: 'currency-dollar',
            title: 'Business Impact Translation',
            description:
              'Connect security culture improvements directly to business outcomes and financial performance.',
          },
          {
            icon: 'clock',
            title: 'Automated Reporting',
            description:
              'Generate professional reports instantly, saving 15+ hours per month on manual report preparation.',
          },
        ],
      },
    },
    no: {
      sectionTitle: 'Styreklar Sikkerhetsstyring Rapporter',
      sectionDescription:
        'Transformer komplekse sikkerhetsdata til lederskap-nivå innsikter som driver informert beslutningstaking og demonstrerer programverdi.',
      reportTypes: [
        {
          id: 'board',
          name: 'Styrerapporter',
          description: 'Lederskap sammendrag for styremøter og styringkomiteer',
          features: [
            'Sikkerhetskultur modenhet scoring',
            'Risiko trend analyse med forretningspåvirkning',
            'Regulatorisk compliance status oppdateringer',
            'Investering ROI og budsjett justifikasjon',
            'Peer benchmarking mot industristandarder',
          ],
        },
        {
          id: 'compliance',
          name: 'Compliance Rapporter',
          description:
            'Automatiserte rapporter for regulatoriske krav og revisjoner',
          features: [
            'NIS2 direktiv compliance mapping',
            'ISO 27001 sikkerhetsbevissthet bevis',
            'SOX compliance atferdskontroller',
            'GDPR personvern bevissthet sporing',
            'Revisjonsspor dokumentasjon',
          ],
        },
        {
          id: 'executive',
          name: 'Lederskap Dashboards',
          description: 'Sanntids sikkerhetskultur synlighet for C-suite ledere',
          features: [
            'Sikkerhetskultur helse score',
            'Avdelingsnivå risikosammenligninger',
            'Opplæring effektivitet metrikker',
            'Hendelse korrelasjon analyse',
            'Budsjett optimalisering anbefalinger',
          ],
        },
      ],
      communicationBenefits: {
        title: 'Lederskap Kommunikasjon Fordeler',
        items: [
          {
            icon: 'presentation-chart-line',
            title: 'Datadrevne Narrativer',
            description:
              'Erstatt anekdotiske rapporter med overbevisende atferdsdata historier som resonerer med lederskap publikum.',
          },
          {
            icon: 'shield-check',
            title: 'Risiko Visualisering',
            description:
              'Transformer komplekse sikkerhetsmetrikker til klare risikoindikatorer som ledere kan forstå og handle på.',
          },
          {
            icon: 'currency-dollar',
            title: 'Forretningspåvirkning Oversettelse',
            description:
              'Koble sikkerhetskulturforbedringer direkte til forretningsresultater og finansiell ytelse.',
          },
          {
            icon: 'clock',
            title: 'Automatisert Rapportering',
            description:
              'Generer profesjonelle rapporter øyeblikkelig, spar 15+ timer per måned på manuell rapportforberedelse.',
          },
        ],
      },
    },
  };

  const t = content[language];

  const getIcon = (iconName: string) => {
    const icons = {
      'presentation-chart-line': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      ),
      'shield-check': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      'currency-dollar': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      ),
      clock: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
    };
    return (
      icons[iconName as keyof typeof icons] || icons['presentation-chart-line']
    );
  };

  return (
    <section className="bg-praxis-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-4xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        {/* Report Types Section */}
        <div className="mb-20">
          {/* Report Type Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {t.reportTypes.map(report => (
              <button
                key={report.id}
                onClick={() => setActiveReport(report.id)}
                className={`px-6 py-3 text-sm font-heading font-semibold rounded-lg transition-all duration-200 ${
                  activeReport === report.id
                    ? 'bg-praxis-gold text-praxis-dark-blue shadow-lg'
                    : 'bg-praxis-white text-praxis-dark-blue-600 hover:bg-praxis-blue-100 shadow-sm'
                }`}
              >
                {report.name}
              </button>
            ))}
          </div>

          {/* Selected Report Content */}
          {t.reportTypes.map(
            report =>
              activeReport === report.id && (
                <div
                  key={report.id}
                  className="bg-praxis-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
                        {report.name}
                      </h3>
                      <p className="text-praxis-dark-blue-600 mb-6">
                        {report.description}
                      </p>

                      <ul className="space-y-3">
                        {report.features.map((feature, index) => (
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
                            <span className="text-praxis-dark-blue">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual Mockup */}
                    <div className="relative">
                      <div className="bg-praxis-dark-blue rounded-lg p-6 shadow-xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                        {/* Mock Report Header */}
                        <div className="bg-praxis-gold rounded-md p-4 mb-4">
                          <div className="flex items-center justify-between">
                            <div className="text-praxis-dark-blue font-heading font-bold text-sm">
                              {report.name} - {new Date().getFullYear()}
                            </div>
                            <div className="text-praxis-dark-blue text-xs">
                              {language === 'no'
                                ? 'Konfidensielt'
                                : 'Confidential'}
                            </div>
                          </div>
                        </div>

                        {/* Mock Chart */}
                        <div className="bg-praxis-white rounded-md p-4 mb-4">
                          <div className="h-24 bg-gradient-to-r from-praxis-blue to-praxis-accent rounded opacity-20"></div>
                          <div className="mt-2 text-xs text-praxis-dark-blue-600 text-center">
                            {language === 'no'
                              ? 'Sikkerhetskultur Forbedring Trend'
                              : 'Security Culture Improvement Trend'}
                          </div>
                        </div>

                        {/* Mock KPIs */}
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-praxis-white rounded-md p-3 text-center">
                            <div className="text-lg font-heading font-bold text-praxis-accent">
                              85%
                            </div>
                            <div className="text-xs text-praxis-dark-blue-600">
                              {language === 'no' ? 'Forbedring' : 'Improvement'}
                            </div>
                          </div>
                          <div className="bg-praxis-white rounded-md p-3 text-center">
                            <div className="text-lg font-heading font-bold text-praxis-gold">
                              92%
                            </div>
                            <div className="text-xs text-praxis-dark-blue-600">
                              {language === 'no' ? 'Compliance' : 'Compliance'}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="absolute -top-2 -right-2 bg-praxis-accent text-praxis-white px-3 py-1 rounded-full text-xs font-heading font-bold shadow-lg">
                        {language === 'no' ? 'Live Data' : 'Live Data'}
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        {/* Communication Benefits */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue text-center mb-12">
            {t.communicationBenefits.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.communicationBenefits.items.map((benefit, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-praxis-accent rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {getIcon(benefit.icon)}
                  </svg>
                </div>

                <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-3">
                  {benefit.title}
                </h4>

                <p className="text-praxis-dark-blue-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-praxis-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
            {language === 'no'
              ? 'Se Hvordan Ledere Kommuniserer Sikkerhetsverdi'
              : 'See How Leaders Communicate Security Value'}
          </h3>

          <p className="text-praxis-dark-blue-600 mb-8 max-w-2xl mx-auto">
            {language === 'no'
              ? 'Få en personlig demo som viser hvordan Praxis Navigator hjelper CISOs med å lage overbevisende board presentasjoner.'
              : 'Get a personalized demo showing how Praxis Navigator helps CISOs create compelling board presentations.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${language === 'no' ? 'no/' : ''}contact?segment=security-leaders&interest=executive-reporting`}
              className="btn-accent btn-lg inline-flex items-center justify-center group"
            >
              {language === 'no'
                ? 'Be om Rapportering Demo'
                : 'Request Reporting Demo'}
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
              href={`/${language === 'no' ? 'no/' : ''}resources/sample-reports`}
              className="btn-secondary btn-lg"
            >
              {language === 'no'
                ? 'Se Eksempel Rapporter'
                : 'View Sample Reports'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
