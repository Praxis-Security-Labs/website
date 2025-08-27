import { useState } from 'react';
import type { FC } from 'react';

export const BenchmarkingSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedBenchmark, setSelectedBenchmark] =
    useState<string>('industry');

  const content = {
    en: {
      sectionTitle: 'Industry Benchmarking & Comparison',
      sectionDescription:
        "Compare your team's security performance against industry standards and peer organizations to identify improvement opportunities.",
      benchmarkTypes: [
        {
          id: 'industry',
          title: 'Industry Standards',
          icon: '🏭',
          description: 'Compare against your industry sector benchmarks',
          metrics: [
            {
              label: 'Security Awareness Score',
              yourValue: '87%',
              benchmark: '73%',
              rank: 'Top 15%',
            },
            {
              label: 'Phishing Simulation Results',
              yourValue: '12% click rate',
              benchmark: '18% click rate',
              rank: 'Above Average',
            },
            {
              label: 'Policy Compliance Rate',
              yourValue: '94%',
              benchmark: '81%',
              rank: 'Top 20%',
            },
            {
              label: 'Incident Response Time',
              yourValue: '3.2 hours',
              benchmark: '6.8 hours',
              rank: 'Top 10%',
            },
          ],
        },
        {
          id: 'size',
          title: 'Organization Size',
          icon: '👥',
          description: 'Compare with organizations of similar size',
          metrics: [
            {
              label: 'Security Training Effectiveness',
              yourValue: '89%',
              benchmark: '76%',
              rank: 'Top 25%',
            },
            {
              label: 'Employee Security Behavior',
              yourValue: '8.4/10',
              benchmark: '7.1/10',
              rank: 'Above Average',
            },
            {
              label: 'Risk Management Maturity',
              yourValue: 'Advanced',
              benchmark: 'Intermediate',
              rank: 'Top 30%',
            },
            {
              label: 'Compliance Readiness',
              yourValue: '96%',
              benchmark: '82%',
              rank: 'Top 20%',
            },
          ],
        },
        {
          id: 'geographic',
          title: 'Geographic Region',
          icon: '🌍',
          description:
            'Regional comparison for regulatory and cultural context',
          metrics: [
            {
              label: 'GDPR Compliance Score',
              yourValue: '97%',
              benchmark: '85%',
              rank: 'Top 15%',
            },
            {
              label: 'Privacy Awareness',
              yourValue: '91%',
              benchmark: '78%',
              rank: 'Top 20%',
            },
            {
              label: 'Cross-border Data Handling',
              yourValue: '93%',
              benchmark: '79%',
              rank: 'Top 25%',
            },
            {
              label: 'Local Regulation Adherence',
              yourValue: '95%',
              benchmark: '83%',
              rank: 'Top 20%',
            },
          ],
        },
      ],
      improvementAreas: {
        title: 'Recommended Improvement Areas',
        description:
          'Based on benchmark analysis, focus on these areas for maximum impact',
        areas: [
          {
            title: 'Password Security Practices',
            currentScore: '78%',
            benchmarkTarget: '88%',
            impact: 'High',
            timeToImprove: '6-8 weeks',
            actions: [
              'Implement password manager training',
              'Enforce MFA policies',
              'Regular password strength audits',
            ],
          },
          {
            title: 'Social Engineering Awareness',
            currentScore: '82%',
            benchmarkTarget: '91%',
            impact: 'Medium',
            timeToImprove: '8-12 weeks',
            actions: [
              'Enhanced phishing simulations',
              'Social engineering workshops',
              'Incident reporting training',
            ],
          },
          {
            title: 'Mobile Device Security',
            currentScore: '74%',
            benchmarkTarget: '85%',
            impact: 'Medium',
            timeToImprove: '10-14 weeks',
            actions: [
              'Mobile security policy update',
              'BYOD training sessions',
              'Device encryption enforcement',
            ],
          },
        ],
      },
      ctaSection: {
        title: 'Get Your Detailed Benchmark Report',
        description:
          "Receive a comprehensive analysis of your team's security performance against industry standards.",
        primaryText: 'Request Benchmark Analysis',
        secondaryText: 'View Sample Report',
      },
    },
    no: {
      sectionTitle: 'Industri Benchmarking & Sammenligning',
      sectionDescription:
        'Sammenlign teamets sikkerhetsytelse mot industristandarder og peer organisasjoner for å identifisere forbedringsmuligheter.',
      benchmarkTypes: [
        {
          id: 'industry',
          title: 'Industri Standarder',
          icon: '🏭',
          description: 'Sammenlign mot din industrisektor benchmarks',
          metrics: [
            {
              label: 'Sikkerhetsbevissthet Score',
              yourValue: '87%',
              benchmark: '73%',
              rank: 'Topp 15%',
            },
            {
              label: 'Phishing Simulering Resultater',
              yourValue: '12% klikk rate',
              benchmark: '18% klikk rate',
              rank: 'Over Gjennomsnitt',
            },
            {
              label: 'Policy Compliance Rate',
              yourValue: '94%',
              benchmark: '81%',
              rank: 'Topp 20%',
            },
            {
              label: 'Hendelse Respons Tid',
              yourValue: '3.2 timer',
              benchmark: '6.8 timer',
              rank: 'Topp 10%',
            },
          ],
        },
        {
          id: 'size',
          title: 'Organisasjon Størrelse',
          icon: '👥',
          description: 'Sammenlign med organisasjoner av lignende størrelse',
          metrics: [
            {
              label: 'Sikkerhetsopplæring Effektivitet',
              yourValue: '89%',
              benchmark: '76%',
              rank: 'Topp 25%',
            },
            {
              label: 'Ansatt Sikkerhetsadferd',
              yourValue: '8.4/10',
              benchmark: '7.1/10',
              rank: 'Over Gjennomsnitt',
            },
            {
              label: 'Risikohåndtering Modenhet',
              yourValue: 'Avansert',
              benchmark: 'Mellom',
              rank: 'Topp 30%',
            },
            {
              label: 'Compliance Beredskap',
              yourValue: '96%',
              benchmark: '82%',
              rank: 'Topp 20%',
            },
          ],
        },
        {
          id: 'geographic',
          title: 'Geografisk Region',
          icon: '🌍',
          description:
            'Regional sammenligning for regulatorisk og kulturell kontekst',
          metrics: [
            {
              label: 'GDPR Compliance Score',
              yourValue: '97%',
              benchmark: '85%',
              rank: 'Topp 15%',
            },
            {
              label: 'Personvern Bevissthet',
              yourValue: '91%',
              benchmark: '78%',
              rank: 'Topp 20%',
            },
            {
              label: 'Grensekryssende Data Håndtering',
              yourValue: '93%',
              benchmark: '79%',
              rank: 'Topp 25%',
            },
            {
              label: 'Lokal Regulering Overholdelse',
              yourValue: '95%',
              benchmark: '83%',
              rank: 'Topp 20%',
            },
          ],
        },
      ],
      improvementAreas: {
        title: 'Anbefalte Forbedringsområder',
        description:
          'Basert på benchmark analyse, fokuser på disse områdene for maksimal påvirkning',
        areas: [
          {
            title: 'Passord Sikkerhetspraksis',
            currentScore: '78%',
            benchmarkTarget: '88%',
            impact: 'Høy',
            timeToImprove: '6-8 uker',
            actions: [
              'Implementer passordbehandler trening',
              'Håndhev MFA policyer',
              'Regelmessige passordstyrke revisjoner',
            ],
          },
          {
            title: 'Sosial Engineering Bevissthet',
            currentScore: '82%',
            benchmarkTarget: '91%',
            impact: 'Medium',
            timeToImprove: '8-12 uker',
            actions: [
              'Forbedrede phishing simuleringer',
              'Sosial engineering workshops',
              'Hendelse rapportering trening',
            ],
          },
          {
            title: 'Mobil Enhet Sikkerhet',
            currentScore: '74%',
            benchmarkTarget: '85%',
            impact: 'Medium',
            timeToImprove: '10-14 uker',
            actions: [
              'Mobil sikkerhetspolicy oppdatering',
              'BYOD treningsøkter',
              'Enhet kryptering håndhevelse',
            ],
          },
        ],
      },
      ctaSection: {
        title: 'Få Din Detaljerte Benchmark Rapport',
        description:
          'Motta en omfattende analyse av teamets sikkerhetsytelse mot industristandarder.',
        primaryText: 'Be om Benchmark Analyse',
        secondaryText: 'Vis Prøve Rapport',
      },
    },
  };

  const t = content[language];
  const activeBenchmarkData =
    t.benchmarkTypes.find(type => type.id === selectedBenchmark) ||
    t.benchmarkTypes[0];

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

        {/* Benchmark Type Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.benchmarkTypes.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedBenchmark(type.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedBenchmark === type.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-white text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{type.icon}</span>
                {type.title}
              </button>
            ))}
          </div>

          {/* Active Benchmark Details */}
          <div className="bg-praxis-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">
                  {activeBenchmarkData.icon}
                </span>
                <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                  {activeBenchmarkData.title}
                </h3>
              </div>
              <p className="text-praxis-dark-blue-600">
                {activeBenchmarkData.description}
              </p>
            </div>

            <div className="space-y-4">
              {activeBenchmarkData.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-praxis-light-gray rounded-xl p-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="md:col-span-1">
                      <h4 className="font-heading font-semibold text-praxis-dark-blue">
                        {metric.label}
                      </h4>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-praxis-accent">
                        {metric.yourValue}
                      </div>
                      <div className="text-sm text-praxis-dark-blue-600">
                        {language === 'no' ? 'Din Score' : 'Your Score'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-heading font-bold text-praxis-dark-blue-600">
                        {metric.benchmark}
                      </div>
                      <div className="text-sm text-praxis-dark-blue-600">
                        {language === 'no' ? 'Benchmark' : 'Benchmark'}
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="bg-praxis-gold text-praxis-dark-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {metric.rank}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Improvement Areas */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {t.improvementAreas.title}
            </h3>
            <p className="text-xl text-praxis-dark-blue-600">
              {t.improvementAreas.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {t.improvementAreas.areas.map((area, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-heading font-bold text-praxis-dark-blue">
                    {area.title}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      area.impact === 'High' || area.impact === 'Høy'
                        ? 'bg-praxis-brick text-praxis-white'
                        : 'bg-praxis-gold text-praxis-dark-blue'
                    }`}
                  >
                    {area.impact}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xl font-heading font-bold text-praxis-dark-blue">
                      {area.currentScore}
                    </div>
                    <div className="text-sm text-praxis-dark-blue-600">
                      {language === 'no' ? 'Nåværende' : 'Current'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-heading font-bold text-praxis-accent">
                      {area.benchmarkTarget}
                    </div>
                    <div className="text-sm text-praxis-dark-blue-600">
                      {language === 'no' ? 'Mål' : 'Target'}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-praxis-dark-blue-600 mb-2">
                    {language === 'no' ? 'Estimert tid:' : 'Estimated time:'}{' '}
                    {area.timeToImprove}
                  </div>
                </div>

                <div>
                  <h5 className="font-heading font-semibold text-praxis-dark-blue mb-2">
                    {language === 'no'
                      ? 'Anbefalte handlinger:'
                      : 'Recommended actions:'}
                  </h5>
                  <ul className="space-y-1">
                    {area.actions.map((action, actionIndex) => (
                      <li
                        key={actionIndex}
                        className="text-sm text-praxis-dark-blue-600 flex items-start"
                      >
                        <span className="text-praxis-accent mr-2">•</span>
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
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
