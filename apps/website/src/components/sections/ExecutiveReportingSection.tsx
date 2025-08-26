import { useState } from 'react';
import type { FC } from 'react';

export const ExecutiveReportingSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedReport, setSelectedReport] =
    useState<string>('board-dashboard');

  const content = {
    en: {
      sectionTitle: 'Executive-Ready Security Reporting',
      sectionDescription:
        'Transform complex security metrics into actionable business intelligence for executive decision-making and board presentations.',
      reportTypes: [
        {
          id: 'board-dashboard',
          title: 'Board Dashboard',
          icon: '📊',
          description:
            'High-level security posture visualization for board meetings',
          features: [
            'Risk trend analysis with business impact context',
            'Regulatory compliance status at-a-glance',
            'Security investment ROI tracking',
            'Peer benchmarking against industry standards',
            'Executive summary with key action items',
          ],
          preview: {
            title: 'Q4 2024 Security Performance Dashboard',
            metrics: [
              {
                label: 'Overall Security Score',
                value: '87/100',
                trend: '+12%',
              },
              { label: 'Compliance Rating', value: '98%', trend: '+5%' },
              { label: 'Risk Reduction', value: '67%', trend: '+23%' },
            ],
          },
        },
        {
          id: 'quarterly-review',
          title: 'Quarterly Business Review',
          icon: '📈',
          description: 'Comprehensive quarterly security performance analysis',
          features: [
            'Detailed ROI analysis of security investments',
            'Risk register updates with mitigation strategies',
            'Training effectiveness and cultural metrics',
            'Incident response performance analytics',
            'Strategic recommendations for next quarter',
          ],
          preview: {
            title: 'Q4 2024 Security Business Review',
            metrics: [
              {
                label: 'Security Investment ROI',
                value: '340%',
                trend: '+28%',
              },
              {
                label: 'Incident Response Time',
                value: '4.2 hrs',
                trend: '-45%',
              },
              { label: 'Employee Risk Score', value: '2.1/10', trend: '-34%' },
            ],
          },
        },
        {
          id: 'governance-metrics',
          title: 'Governance Metrics',
          icon: '🏛️',
          description:
            'Security governance and oversight performance indicators',
          features: [
            'Policy compliance tracking across all departments',
            'Security awareness program effectiveness',
            'Third-party risk management status',
            'Audit findings resolution tracking',
            'Regulatory requirement compliance status',
          ],
          preview: {
            title: 'Security Governance Scorecard',
            metrics: [
              { label: 'Policy Compliance', value: '94%', trend: '+8%' },
              { label: 'Audit Findings Resolved', value: '89%', trend: '+15%' },
              {
                label: 'Third-party Risk Score',
                value: 'Low',
                trend: 'Stable',
              },
            ],
          },
        },
        {
          id: 'risk-appetite',
          title: 'Risk Appetite Alignment',
          icon: '⚖️',
          description:
            'Security risk posture aligned with business risk tolerance',
          features: [
            'Risk appetite vs. actual risk exposure analysis',
            'Business unit risk profile comparisons',
            'Strategic risk treatment recommendations',
            'Cost-benefit analysis of risk mitigation options',
            'Executive risk decision support framework',
          ],
          preview: {
            title: 'Risk Appetite Dashboard',
            metrics: [
              { label: 'Risk Appetite Alignment', value: '91%', trend: '+6%' },
              {
                label: 'Critical Risks Mitigated',
                value: '15/18',
                trend: '+3',
              },
              {
                label: 'Residual Risk Level',
                value: 'Acceptable',
                trend: 'Improving',
              },
            ],
          },
        },
      ],
      automationFeatures: {
        title: 'Automated Reporting Excellence',
        description:
          'Eliminate manual report preparation with intelligent automation',
        features: [
          {
            icon: '🤖',
            title: 'Smart Data Integration',
            description:
              'Automatically aggregates data from all security tools and platforms',
          },
          {
            icon: '📋',
            title: 'Template Customization',
            description:
              "Branded report templates tailored to your organization's style",
          },
          {
            icon: '⏰',
            title: 'Scheduled Delivery',
            description:
              'Automated distribution to stakeholders before meetings',
          },
          {
            icon: '🎯',
            title: 'Actionable Insights',
            description:
              'AI-powered recommendations based on security performance trends',
          },
        ],
      },
      ctaSection: {
        title: 'Transform Your Security Reporting',
        description:
          'Move from reactive reporting to proactive business intelligence that drives strategic security decisions.',
        primaryText: 'Schedule Executive Demo',
        secondaryText: 'Download Sample Reports',
      },
    },
    no: {
      sectionTitle: 'Lederskap-Klar Sikkerhetsrapportering',
      sectionDescription:
        'Transformer komplekse sikkerhetsmetrikker til handlekraftig forretningsintelligens for lederskap beslutningstaking og styrepresentasjoner.',
      reportTypes: [
        {
          id: 'board-dashboard',
          title: 'Styre Dashboard',
          icon: '📊',
          description:
            'Høynivå sikkerhetsposisjon visualisering for styremøter',
          features: [
            'Risiko trend analyse med forretningspåvirkning kontekst',
            'Regulatorisk compliance status oversikt',
            'Sikkerhetsinvestering ROI sporing',
            'Peer benchmarking mot industri standarder',
            'Lederskap sammendrag med nøkkel handlingsegenskaper',
          ],
          preview: {
            title: 'Q4 2024 Sikkerhetsytelse Dashboard',
            metrics: [
              {
                label: 'Samlet Sikkerhetsscore',
                value: '87/100',
                trend: '+12%',
              },
              { label: 'Compliance Vurdering', value: '98%', trend: '+5%' },
              { label: 'Risiko Reduksjon', value: '67%', trend: '+23%' },
            ],
          },
        },
        {
          id: 'quarterly-review',
          title: 'Kvartalsvis Forretningsgjennomgang',
          icon: '📈',
          description: 'Omfattende kvartalsvis sikkerhetsytelse analyse',
          features: [
            'Detaljert ROI analyse av sikkerhetsinvesteringer',
            'Risiko register oppdateringer med mitigering strategier',
            'Opplæring effektivitet og kulturelle metrikker',
            'Hendelse respons ytelse analytikk',
            'Strategiske anbefalinger for neste kvartal',
          ],
          preview: {
            title: 'Q4 2024 Sikkerhet Forretningsgjennomgang',
            metrics: [
              {
                label: 'Sikkerhetsinvestering ROI',
                value: '340%',
                trend: '+28%',
              },
              {
                label: 'Hendelse Respons Tid',
                value: '4.2 timer',
                trend: '-45%',
              },
              { label: 'Ansatt Risiko Score', value: '2.1/10', trend: '-34%' },
            ],
          },
        },
        {
          id: 'governance-metrics',
          title: 'Governance Metrikker',
          icon: '🏛️',
          description: 'Sikkerhet governance og tilsyn ytelse indikatorer',
          features: [
            'Policy compliance sporing på tvers av alle avdelinger',
            'Sikkerhetsbevissthet program effektivitet',
            'Tredjepart risikohåndtering status',
            'Revisjon funn løsning sporing',
            'Regulatorisk krav compliance status',
          ],
          preview: {
            title: 'Sikkerhet Governance Scorecard',
            metrics: [
              { label: 'Policy Compliance', value: '94%', trend: '+8%' },
              { label: 'Revisjon Funn Løst', value: '89%', trend: '+15%' },
              {
                label: 'Tredjepart Risiko Score',
                value: 'Lav',
                trend: 'Stabil',
              },
            ],
          },
        },
        {
          id: 'risk-appetite',
          title: 'Risiko Appetitt Tilpassning',
          icon: '⚖️',
          description:
            'Sikkerhetsrisiko posisjon tilpasset forretningsrisiko toleranse',
          features: [
            'Risiko appetitt vs. faktisk risiko eksponering analyse',
            'Forretningsenhet risiko profil sammenligninger',
            'Strategisk risiko behandling anbefalinger',
            'Kostnad-nytte analyse av risiko mitigering alternativer',
            'Lederskap risiko beslutning støtte ramme',
          ],
          preview: {
            title: 'Risiko Appetitt Dashboard',
            metrics: [
              {
                label: 'Risiko Appetitt Tilpassning',
                value: '91%',
                trend: '+6%',
              },
              {
                label: 'Kritiske Risikoer Mitigert',
                value: '15/18',
                trend: '+3',
              },
              {
                label: 'Gjenværende Risiko Nivå',
                value: 'Akseptabel',
                trend: 'Forbedring',
              },
            ],
          },
        },
      ],
      automationFeatures: {
        title: 'Automatisert Rapportering Excellens',
        description:
          'Eliminer manuell rapport forberedelse med intelligent automatisering',
        features: [
          {
            icon: '🤖',
            title: 'Smart Data Integrasjon',
            description:
              'Automatisk aggregerer data fra alle sikkerhetsverktøy og plattformer',
          },
          {
            icon: '📋',
            title: 'Mal Tilpasning',
            description:
              'Merkevare rapport maler tilpasset din organisasjons stil',
          },
          {
            icon: '⏰',
            title: 'Planlagt Levering',
            description:
              'Automatisert distribusjon til interessenter før møter',
          },
          {
            icon: '🎯',
            title: 'Handlekraftige Innsikter',
            description:
              'AI-drevet anbefalinger basert på sikkerhetsytelse trender',
          },
        ],
      },
      ctaSection: {
        title: 'Transformer Din Sikkerhetsrapportering',
        description:
          'Flytt fra reaktiv rapportering til proaktiv forretningsintelligens som driver strategiske sikkerhetsbeslutninger.',
        primaryText: 'Planlegg Lederskap Demo',
        secondaryText: 'Last ned Prøve Rapporter',
      },
    },
  };

  const t = content[language];
  const activeReportData =
    t.reportTypes.find(report => report.id === selectedReport) ||
    t.reportTypes[0];

  return (
    <section className="bg-praxis-light-gray py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-4xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        {/* Report Type Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.reportTypes.map(report => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedReport === report.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-white text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{report.icon}</span>
                {report.title}
              </button>
            ))}
          </div>

          {/* Active Report Details */}
          <div className="bg-praxis-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Report Features */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{activeReportData.icon}</span>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                      {activeReportData.title}
                    </h3>
                    <p className="text-praxis-dark-blue-600">
                      {activeReportData.description}
                    </p>
                  </div>
                </div>

                <h4 className="text-lg font-heading font-semibold text-praxis-dark-blue mb-4">
                  {language === 'no'
                    ? 'Inkluderte Funksjoner:'
                    : 'Included Features:'}
                </h4>
                <ul className="space-y-3">
                  {activeReportData.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-praxis-accent mr-3 mt-1">✓</span>
                      <span className="text-praxis-dark-blue">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Report Preview */}
              <div>
                <h4 className="text-lg font-heading font-semibold text-praxis-dark-blue mb-6">
                  {language === 'no'
                    ? 'Rapport Forhåndsvisning:'
                    : 'Report Preview:'}
                </h4>

                <div className="bg-praxis-light-gray rounded-xl p-6">
                  <div className="text-center mb-6">
                    <h5 className="text-xl font-heading font-bold text-praxis-dark-blue">
                      {activeReportData.preview.title}
                    </h5>
                  </div>

                  <div className="space-y-4">
                    {activeReportData.preview.metrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-praxis-white rounded-lg p-4"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-heading font-semibold text-praxis-dark-blue">
                            {metric.label}
                          </span>
                          <div className="text-right">
                            <div className="text-2xl font-heading font-bold text-praxis-dark-blue">
                              {metric.value}
                            </div>
                            <div
                              className={`text-sm font-semibold ${
                                metric.trend.startsWith('+')
                                  ? 'text-praxis-accent'
                                  : metric.trend.startsWith('-')
                                    ? 'text-praxis-gold'
                                    : 'text-praxis-dark-blue'
                              }`}
                            >
                              {metric.trend}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-praxis-accent hover:text-praxis-dark-blue font-semibold">
                      {language === 'no'
                        ? 'Se Full Rapport →'
                        : 'View Full Report →'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Automation Features */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {t.automationFeatures.title}
            </h3>
            <p className="text-xl text-praxis-dark-blue-600">
              {t.automationFeatures.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.automationFeatures.features.map((feature, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-2">
                  {feature.title}
                </h4>
                <p className="text-praxis-dark-blue-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-praxis-dark-blue rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-heading font-bold text-praxis-white mb-6">
            {t.ctaSection.title}
          </h3>
          <p className="text-xl text-praxis-blue-100 mb-8 max-w-3xl mx-auto">
            {t.ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-accent">{t.ctaSection.primaryText}</button>
            <button className="btn-outline-white">
              {t.ctaSection.secondaryText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
