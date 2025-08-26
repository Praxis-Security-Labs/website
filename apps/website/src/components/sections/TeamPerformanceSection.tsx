import { useState } from 'react';
import type { FC } from 'react';

export const TeamPerformanceSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedMetric, setSelectedMetric] =
    useState<string>('risk-awareness');

  const content = {
    en: {
      sectionTitle: 'Team Security Performance Analytics',
      sectionDescription:
        'Gain unprecedented visibility into your team security behavior with actionable insights that drive measurable improvement.',
      performanceMetrics: [
        {
          id: 'risk-awareness',
          title: 'Risk Awareness',
          icon: '🎯',
          description:
            'Measure and track your team ability to identify and respond to security threats',
          kpis: [
            {
              metric: 'Phishing Detection Rate',
              value: '87%',
              benchmark: '72%',
              trend: '+15%',
            },
            {
              metric: 'Suspicious Activity Reports',
              value: '24/month',
              benchmark: '18/month',
              trend: '+8',
            },
            {
              metric: 'Security Policy Knowledge',
              value: '91%',
              benchmark: '76%',
              trend: '+12%',
            },
            {
              metric: 'Incident Response Time',
              value: '2.3 hrs',
              benchmark: '4.1 hrs',
              trend: '-44%',
            },
          ],
          insights: [
            'Top performers consistently report suspicious activities 3x more than baseline',
            'Teams with high risk awareness show 67% fewer security incidents',
            'Regular security briefings increase detection rates by 34%',
          ],
        },
        {
          id: 'compliance-behavior',
          title: 'Compliance Behavior',
          icon: '✅',
          description:
            'Track adherence to security policies and regulatory requirements across your team',
          kpis: [
            {
              metric: 'Policy Compliance Score',
              value: '94%',
              benchmark: '81%',
              trend: '+8%',
            },
            {
              metric: 'Access Control Violations',
              value: '2/month',
              benchmark: '7/month',
              trend: '-5',
            },
            {
              metric: 'Data Classification Accuracy',
              value: '96%',
              benchmark: '83%',
              trend: '+13%',
            },
            {
              metric: 'Training Completion Rate',
              value: '98%',
              benchmark: '89%',
              trend: '+9%',
            },
          ],
          insights: [
            'Consistent policy followers show 78% lower violation rates',
            'Teams with regular compliance reviews maintain 95%+ adherence',
            'Automated reminders improve completion rates by 42%',
          ],
        },
      ],
      ctaSection: {
        title: 'Transform Your Team Security Performance',
        description:
          'Get detailed analytics and personalized improvement plans for your team.',
        primaryText: 'Request Team Assessment',
        secondaryText: 'Download Performance Template',
      },
    },
    no: {
      sectionTitle: 'Team Sikkerhetsytelse Analytikk',
      sectionDescription:
        'Få enestående synlighet i teamets sikkerhetsadferd med handlekraftige innsikter som driver målbar forbedring.',
      performanceMetrics: [
        {
          id: 'risk-awareness',
          title: 'Risiko Bevissthet',
          icon: '🎯',
          description:
            'Mål og spor teamets evne til å identifisere og reagere på sikkerhetstrusler',
          kpis: [
            {
              metric: 'Phishing Deteksjon Rate',
              value: '87%',
              benchmark: '72%',
              trend: '+15%',
            },
            {
              metric: 'Mistenkelige Aktivitet Rapporter',
              value: '24/måned',
              benchmark: '18/måned',
              trend: '+8',
            },
            {
              metric: 'Sikkerhetspolicy Kunnskap',
              value: '91%',
              benchmark: '76%',
              trend: '+12%',
            },
            {
              metric: 'Hendelse Respons Tid',
              value: '2.3 timer',
              benchmark: '4.1 timer',
              trend: '-44%',
            },
          ],
          insights: [
            'Toppytere rapporterer konsekvent mistenkelige aktiviteter 3x mer enn baseline',
            'Team med høy risiko bevissthet viser 67% færre sikkerhetshendelser',
            'Regelmessige sikkerhetsbriefinger øker deteksjonsrater med 34%',
          ],
        },
        {
          id: 'compliance-behavior',
          title: 'Compliance Adferd',
          icon: '✅',
          description:
            'Spor overholdelse av sikkerhetspolicyer og regulatoriske krav på tvers av teamet',
          kpis: [
            {
              metric: 'Policy Compliance Score',
              value: '94%',
              benchmark: '81%',
              trend: '+8%',
            },
            {
              metric: 'Tilgangskontroll Brudd',
              value: '2/måned',
              benchmark: '7/måned',
              trend: '-5',
            },
            {
              metric: 'Data Klassifisering Nøyaktighet',
              value: '96%',
              benchmark: '83%',
              trend: '+13%',
            },
            {
              metric: 'Opplæring Fullføring Rate',
              value: '98%',
              benchmark: '89%',
              trend: '+9%',
            },
          ],
          insights: [
            'Konsistente policy følgere viser 78% lavere bruddrates',
            'Team med regelmessige compliance gjennomganger opprettholder 95%+ overholdelse',
            'Automatiserte påminnelser forbedrer fullføring rater med 42%',
          ],
        },
      ],
      ctaSection: {
        title: 'Transformer Teamets Sikkerhetsytelse',
        description:
          'Få detaljert analytikk og personaliserte forbedring planer for teamet.',
        primaryText: 'Be om Team Vurdering',
        secondaryText: 'Last ned Ytelse Mal',
      },
    },
  };

  const t = content[language];
  const activeMetric =
    t.performanceMetrics.find(metric => metric.id === selectedMetric) ||
    t.performanceMetrics[0];

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

        {/* Performance Metrics Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.performanceMetrics.map(metric => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedMetric === metric.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-light-gray text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{metric.icon}</span>
                {metric.title}
              </button>
            ))}
          </div>

          {/* Active Metric Details */}
          <div className="bg-praxis-light-gray rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* KPI Dashboard */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{activeMetric.icon}</span>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                      {activeMetric.title}
                    </h3>
                    <p className="text-praxis-dark-blue-600">
                      {activeMetric.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeMetric.kpis.map((kpi, index) => (
                    <div key={index} className="bg-praxis-white rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-heading font-semibold text-praxis-dark-blue">
                          {kpi.metric}
                        </span>
                        <span
                          className={`text-xl font-heading font-bold ${
                            kpi.trend.startsWith('+')
                              ? 'text-praxis-accent'
                              : kpi.trend.startsWith('-')
                                ? 'text-praxis-gold'
                                : 'text-praxis-dark-blue'
                          }`}
                        >
                          {kpi.trend}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-heading font-bold text-praxis-dark-blue">
                            {kpi.value}
                          </div>
                          <div className="text-sm text-praxis-dark-blue-600">
                            {language === 'no' ? 'Benchmark:' : 'Benchmark:'}{' '}
                            {kpi.benchmark}
                          </div>
                        </div>
                        <div className="w-20 h-2 bg-praxis-blue-50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-praxis-accent rounded-full"
                            style={{ width: '78%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div>
                <h4 className="text-xl font-heading font-bold text-praxis-dark-blue mb-6">
                  {language === 'no' ? 'Nøkkel Innsikter:' : 'Key Insights:'}
                </h4>

                <div className="space-y-4">
                  {activeMetric.insights.map((insight, index) => (
                    <div
                      key={index}
                      className="bg-praxis-white rounded-xl p-4 border-l-4 border-praxis-accent"
                    >
                      <div className="flex items-start">
                        <span className="text-praxis-accent mr-3 mt-1">💡</span>
                        <p className="text-praxis-dark-blue">{insight}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h5 className="font-heading font-bold text-praxis-dark-blue mb-4">
                    {language === 'no'
                      ? 'Anbefalte Handlinger:'
                      : 'Recommended Actions:'}
                  </h5>
                  <button className="btn-primary w-full">
                    {language === 'no'
                      ? 'Generer Handling Plan'
                      : 'Generate Action Plan'}
                  </button>
                </div>
              </div>
            </div>
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
