import { useState } from 'react';
import type { FC } from 'react';

export const ManagerReportingSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedReport, setSelectedReport] =
    useState<string>('team-dashboard');

  const content = {
    en: {
      sectionTitle: 'Departmental Security Reporting',
      sectionDescription:
        'Keep leadership informed and your team motivated with clear, actionable security performance reports.',
      reportTypes: [
        {
          id: 'team-dashboard',
          title: 'Team Dashboard',
          icon: '📊',
          description: "Real-time view of your team's security performance",
          features: [
            'Individual and team security scores',
            'Training completion and effectiveness tracking',
            'Risk behavior identification and trending',
            'Incident response performance metrics',
            'Goal tracking and achievement status',
          ],
          sampleMetrics: [
            {
              label: 'Team Security Score',
              value: '87/100',
              trend: '+12 points',
            },
            {
              label: 'Training Completion',
              value: '94%',
              trend: '+8% this month',
            },
            {
              label: 'Phishing Resilience',
              value: '91%',
              trend: '+15% improvement',
            },
            { label: 'Policy Compliance', value: '96%', trend: 'Stable' },
          ],
        },
        {
          id: 'leadership-summary',
          title: 'Leadership Summary',
          icon: '📈',
          description: 'Executive-ready reports for your leadership chain',
          features: [
            'Departmental security culture maturity',
            'Comparison against organizational targets',
            'Risk exposure assessment and mitigation',
            'Budget impact and ROI demonstration',
            'Strategic recommendations for improvement',
          ],
          sampleMetrics: [
            {
              label: 'Culture Maturity Level',
              value: 'Advanced',
              trend: 'Progressed from Intermediate',
            },
            { label: 'Risk Exposure', value: 'Low', trend: 'Reduced by 34%' },
            {
              label: 'Training ROI',
              value: '340%',
              trend: '+45% this quarter',
            },
            {
              label: 'Leadership Confidence',
              value: 'High',
              trend: 'Increased',
            },
          ],
        },
        {
          id: 'individual-insights',
          title: 'Individual Insights',
          icon: '👤',
          description: 'Personalized reports for team member development',
          features: [
            'Individual security behavior assessment',
            'Personalized training recommendations',
            'Skill gap analysis and development plans',
            'Progress tracking and goal setting',
            'Recognition and improvement opportunities',
          ],
          sampleMetrics: [
            {
              label: 'Personal Security Score',
              value: '89/100',
              trend: '+7 points',
            },
            { label: 'Learning Progress', value: '78%', trend: 'On track' },
            { label: 'Risk Awareness', value: 'High', trend: 'Improved' },
            { label: 'Compliance Rate', value: '98%', trend: 'Excellent' },
          ],
        },
      ],
      reportingFeatures: {
        title: 'Smart Reporting Features',
        description: 'Automated insights that help you manage more effectively',
        features: [
          {
            icon: '🎯',
            title: 'Goal Tracking',
            description:
              'Set and monitor team security objectives with automated progress updates',
          },
          {
            icon: '⚠️',
            title: 'Risk Alerts',
            description:
              'Immediate notifications when team members need additional support',
          },
          {
            icon: '📅',
            title: 'Scheduled Reports',
            description:
              'Automated weekly and monthly reports delivered to your inbox',
          },
          {
            icon: '💡',
            title: 'Action Recommendations',
            description:
              'AI-powered suggestions for improving team security performance',
          },
          {
            icon: '🏆',
            title: 'Recognition Tools',
            description:
              'Identify high performers and celebrate security achievements',
          },
          {
            icon: '🔄',
            title: 'Continuous Improvement',
            description:
              'Trend analysis and improvement opportunity identification',
          },
        ],
      },
      ctaSection: {
        title: 'Streamline Your Team Management',
        description:
          "Get clear visibility into your team's security performance and take action to improve it.",
        primaryText: 'Request Manager Demo',
        secondaryText: 'View Sample Reports',
      },
    },
    no: {
      sectionTitle: 'Avdelingsmessig Sikkerhetsrapportering',
      sectionDescription:
        'Hold lederskapet informert og teamet motivert med klare, handlekraftige sikkerhetsytelse rapporter.',
      reportTypes: [
        {
          id: 'team-dashboard',
          title: 'Team Dashboard',
          icon: '📊',
          description: 'Sanntidsvisning av teamets sikkerhetsytelse',
          features: [
            'Individuelle og team sikkerhetsscore',
            'Opplæring fullførelse og effektivitet sporing',
            'Risikoadferd identifikasjon og trending',
            'Hendelse respons ytelse metrikker',
            'Mål sporing og prestasjon status',
          ],
          sampleMetrics: [
            {
              label: 'Team Sikkerhetsscore',
              value: '87/100',
              trend: '+12 poeng',
            },
            {
              label: 'Opplæring Fullførelse',
              value: '94%',
              trend: '+8% denne måneden',
            },
            {
              label: 'Phishing Motstandsdyktighet',
              value: '91%',
              trend: '+15% forbedring',
            },
            { label: 'Policy Compliance', value: '96%', trend: 'Stabil' },
          ],
        },
        {
          id: 'leadership-summary',
          title: 'Lederskap Sammendrag',
          icon: '📈',
          description: 'Lederskap-klare rapporter for din ledelseskjede',
          features: [
            'Avdelings sikkerhetskultur modenhet',
            'Sammenligning mot organisatoriske mål',
            'Risiko eksponering vurdering og mitigering',
            'Budsjett påvirkning og ROI demonstrasjon',
            'Strategiske anbefalinger for forbedring',
          ],
          sampleMetrics: [
            {
              label: 'Kultur Modenhet Nivå',
              value: 'Avansert',
              trend: 'Progresserte fra Mellom',
            },
            {
              label: 'Risiko Eksponering',
              value: 'Lav',
              trend: 'Redusert med 34%',
            },
            {
              label: 'Opplæring ROI',
              value: '340%',
              trend: '+45% dette kvartal',
            },
            { label: 'Lederskap Tillit', value: 'Høy', trend: 'Økt' },
          ],
        },
        {
          id: 'individual-insights',
          title: 'Individuelle Innsikter',
          icon: '👤',
          description: 'Personaliserte rapporter for teammedlem utvikling',
          features: [
            'Individuell sikkerhet adferds vurdering',
            'Personaliserte opplæring anbefalinger',
            'Ferdighet gap analyse og utviklingsplaner',
            'Fremgang sporing og mål setting',
            'Anerkjennelse og forbedringsmuligheter',
          ],
          sampleMetrics: [
            {
              label: 'Personlig Sikkerhetsscore',
              value: '89/100',
              trend: '+7 poeng',
            },
            { label: 'Læring Fremgang', value: '78%', trend: 'På rett spor' },
            { label: 'Risiko Bevissthet', value: 'Høy', trend: 'Forbedret' },
            { label: 'Compliance Rate', value: '98%', trend: 'Utmerket' },
          ],
        },
      ],
      reportingFeatures: {
        title: 'Smart Rapportering Funksjoner',
        description:
          'Automatiserte innsikter som hjelper deg å administrere mer effektivt',
        features: [
          {
            icon: '🎯',
            title: 'Mål Sporing',
            description:
              'Sett og overvåk team sikkerhetsmål med automatiserte fremgang oppdateringer',
          },
          {
            icon: '⚠️',
            title: 'Risiko Varsler',
            description:
              'Umiddelbare notifikasjoner når teammedlemmer trenger ekstra støtte',
          },
          {
            icon: '📅',
            title: 'Planlagte Rapporter',
            description:
              'Automatiserte ukentlige og månedlige rapporter levert til din innboks',
          },
          {
            icon: '💡',
            title: 'Handlings Anbefalinger',
            description:
              'AI-drevne forslag for å forbedre team sikkerhetsytelse',
          },
          {
            icon: '🏆',
            title: 'Anerkjennelse Verktøy',
            description: 'Identifiser høy ytere og feir sikkerhetsprestasjoner',
          },
          {
            icon: '🔄',
            title: 'Kontinuerlig Forbedring',
            description: 'Trend analyse og forbedringsmulighet identifikasjon',
          },
        ],
      },
      ctaSection: {
        title: 'Strømlinjefore Din Team Ledelse',
        description:
          'Få klar synlighet i teamets sikkerhetsytelse og ta handling for å forbedre den.',
        primaryText: 'Be om Manager Demo',
        secondaryText: 'Vis Prøve Rapporter',
      },
    },
  };

  const t = content[language];
  const activeReportData =
    t.reportTypes.find(type => type.id === selectedReport) || t.reportTypes[0];

  return (
    <section className="bg-praxis-white py-16 md:py-24">
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
            {t.reportTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedReport(type.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedReport === type.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-light-gray text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.title}
              </button>
            ))}
          </div>

          {/* Active Report Details */}
          <div className="bg-praxis-light-gray rounded-2xl shadow-xl p-8 md:p-12">
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
                    ? 'Inkludert i rapporten:'
                    : 'Included in report:'}
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

              {/* Sample Metrics */}
              <div>
                <h4 className="text-lg font-heading font-semibold text-praxis-dark-blue mb-6">
                  {language === 'no'
                    ? 'Eksempel metrikker:'
                    : 'Sample metrics:'}
                </h4>

                <div className="space-y-4">
                  {activeReportData.sampleMetrics.map((metric, index) => (
                    <div key={index} className="bg-praxis-white rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-heading font-semibold text-praxis-dark-blue">
                          {metric.label}
                        </span>
                        <span className="text-xl font-heading font-bold text-praxis-accent">
                          {metric.value}
                        </span>
                      </div>
                      <div className="text-sm text-praxis-dark-blue-600">
                        {metric.trend}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="btn-primary w-full">
                    {language === 'no'
                      ? 'Se Live Dashboard'
                      : 'View Live Dashboard'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reporting Features */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {t.reportingFeatures.title}
            </h3>
            <p className="text-xl text-praxis-dark-blue-600">
              {t.reportingFeatures.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reportingFeatures.features.map((feature, index) => (
              <div key={index} className="bg-praxis-light-gray rounded-xl p-6">
                <div className="text-3xl mb-4">{feature.icon}</div>
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
