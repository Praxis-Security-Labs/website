import React, { useState } from 'react';

interface ROIDemonstrationSectionProps {
  language?: 'en' | 'no';
}

export const ROIDemonstrationSection: React.FC<
  ROIDemonstrationSectionProps
> = ({ language = 'en' }) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('behavior');

  const content = {
    en: {
      sectionTitle: 'Measure What Matters: Behavior Change ROI',
      sectionDescription:
        'Move beyond training completion rates. Demonstrate real security improvement with behavioral analytics that prove your programs work.',
      beforeAfter: {
        title: 'Traditional Security Training vs. Behavioral Measurement',
        before: {
          title: 'Without Behavioral Monitoring',
          items: [
            'Training completion = success metric',
            'Anecdotal evidence for board reports',
            'Manual data collection and analysis',
            'Reactive response to security incidents',
            'Difficulty proving training effectiveness',
          ],
        },
        after: {
          title: 'With Praxis Navigator',
          items: [
            'Behavioral change = success metric',
            'Data-driven board presentations',
            'Automated insights and reporting',
            'Proactive risk identification',
            'Clear ROI demonstration',
          ],
        },
      },
      metrics: {
        title: 'Key ROI Metrics We Track',
        items: [
          {
            id: 'behavior',
            name: 'Behavior Change',
            description:
              'Measure actual security behavior improvements over time',
            impact: '67% improvement in risky behaviors within 90 days',
            icon: 'chart-trending-up',
          },
          {
            id: 'incidents',
            name: 'Incident Reduction',
            description:
              'Track correlation between training and security incident reduction',
            impact: '45% decrease in human-error security incidents',
            icon: 'shield-check',
          },
          {
            id: 'compliance',
            name: 'Compliance Readiness',
            description:
              'Automated compliance reporting for audits and regulations',
            impact: '3x faster audit preparation and compliance verification',
            icon: 'document-check',
          },
          {
            id: 'efficiency',
            name: 'Resource Efficiency',
            description: 'Optimize training resources based on behavioral data',
            impact: '40% reduction in unnecessary training overhead',
            icon: 'clock',
          },
        ],
      },
      calculator: {
        title: 'ROI Calculator Preview',
        subtitle: 'See potential savings for your organization',
        employeeCountLabel: 'Number of Employees:',
        incidentCostLabel: 'Average Security Incident Cost:',
        calculateButton: 'Calculate ROI',
        results: {
          potentialSavings: 'Potential Annual Savings:',
          paybackPeriod: 'Payback Period:',
          roiPercentage: 'ROI Percentage:',
        },
      },
    },
    no: {
      sectionTitle: 'Mål Det Som Betyr Noe: Atferdsendring ROI',
      sectionDescription:
        'Gå utover opplæring fullførelse rater. Demonstrer ekte sikkerhetsforbedring med atferdsanalytikk som beviser at programmene dine fungerer.',
      beforeAfter: {
        title: 'Tradisjonell Sikkerhetsopplæring vs. Atferdsmåling',
        before: {
          title: 'Uten Atferdsovervåking',
          items: [
            'Opplæring fullførelse = suksessmetrikk',
            'Anekdotiske bevis for styrerapporer',
            'Manuell datainnsamling og analyse',
            'Reaktiv respons på sikkerhetshendelser',
            'Vanskelighet med å bevise opplæring effektivitet',
          ],
        },
        after: {
          title: 'Med Praxis Navigator',
          items: [
            'Atferdsendring = suksessmetrikk',
            'Datadrevne styrepresentasjoner',
            'Automatiserte innsikter og rapportering',
            'Proaktiv risikoidentifikasjon',
            'Klar ROI demonstrasjon',
          ],
        },
      },
      metrics: {
        title: 'Nøkkel ROI Metrikker Vi Sporer',
        items: [
          {
            id: 'behavior',
            name: 'Atferdsendring',
            description: 'Mål faktiske sikkerhetsetferdsendringer over tid',
            impact: '67% forbedring i risikofylt atferd innen 90 dager',
            icon: 'chart-trending-up',
          },
          {
            id: 'incidents',
            name: 'Hendelsesreduksjon',
            description:
              'Spor korrelasjon mellom opplæring og reduksjon av sikkerhetshendelser',
            impact: '45% nedgang i menneskellige feil sikkerhetshendelser',
            icon: 'shield-check',
          },
          {
            id: 'compliance',
            name: 'Compliance Beredskap',
            description:
              'Automatisert compliance rapportering for revisjoner og reguleringer',
            impact:
              '3x raskere revisjonsforberedelse og compliance verifisering',
            icon: 'document-check',
          },
          {
            id: 'efficiency',
            name: 'Ressurseffektivitet',
            description:
              'Optimaliser opplæringsressurser basert på atferdsdata',
            impact: '40% reduksjon i unødvendig opplæring overhead',
            icon: 'clock',
          },
        ],
      },
      calculator: {
        title: 'ROI Kalkulator Forhåndsvisning',
        subtitle: 'Se potensielle besparelser for din organisasjon',
        employeeCountLabel: 'Antall Ansatte:',
        incidentCostLabel: 'Gjennomsnittlig Sikkerhetshendelse Kostnad:',
        calculateButton: 'Beregn ROI',
        results: {
          potentialSavings: 'Potensielle Årlige Besparelser:',
          paybackPeriod: 'Tilbakebetalingsperiode:',
          roiPercentage: 'ROI Prosent:',
        },
      },
    },
  };

  const t = content[language];

  const getIcon = (iconName: string) => {
    const icons = {
      'chart-trending-up': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
      'document-check': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
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
    return icons[iconName as keyof typeof icons] || icons['chart-trending-up'];
  };

  return (
    <section className="bg-praxis-white py-16 md:py-24">
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

        {/* Before/After Comparison */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue text-center mb-12">
            {t.beforeAfter.title}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-heading font-bold text-red-800">
                  {t.beforeAfter.before.title}
                </h4>
              </div>

              <ul className="space-y-3">
                {t.beforeAfter.before.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-red-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-praxis-accent rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-heading font-bold text-green-800">
                  {t.beforeAfter.after.title}
                </h4>
              </div>

              <ul className="space-y-3">
                {t.beforeAfter.after.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-praxis-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-green-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue text-center mb-12">
            {t.metrics.title}
          </h3>

          {/* Metric Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {t.metrics.items.map(metric => (
              <button
                key={metric.id}
                onClick={() => setSelectedMetric(metric.id)}
                className={`px-6 py-3 text-sm font-heading font-semibold rounded-lg transition-all duration-200 ${
                  selectedMetric === metric.id
                    ? 'bg-praxis-gold text-praxis-dark-blue shadow-lg'
                    : 'bg-praxis-blue-50 text-praxis-dark-blue-600 hover:bg-praxis-blue-100'
                }`}
              >
                {metric.name}
              </button>
            ))}
          </div>

          {/* Selected Metric Details */}
          {t.metrics.items.map(
            metric =>
              selectedMetric === metric.id && (
                <div
                  key={metric.id}
                  className="bg-praxis-blue-50 rounded-2xl p-8 max-w-4xl mx-auto"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-praxis-accent rounded-lg flex items-center justify-center mr-6">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {getIcon(metric.icon)}
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-2">
                        {metric.name}
                      </h4>
                      <p className="text-praxis-dark-blue-600">
                        {metric.description}
                      </p>
                    </div>
                  </div>

                  <div className="bg-praxis-white rounded-lg p-6">
                    <div className="text-center">
                      <div className="text-3xl font-heading font-bold text-praxis-accent mb-2">
                        {metric.impact}
                      </div>
                      <div className="text-praxis-dark-blue-600">
                        {language === 'no'
                          ? 'Gjennomsnittlig kunderesultat'
                          : 'Average customer result'}
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-gradient-to-r from-praxis-dark-blue to-praxis-blue rounded-2xl p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-white mb-4">
            {t.calculator.title}
          </h3>
          <p className="text-praxis-blue-100 mb-8">{t.calculator.subtitle}</p>

          <div className="bg-praxis-white rounded-xl p-6 max-w-md mx-auto mb-8">
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-praxis-dark-blue mb-2">
                  {t.calculator.employeeCountLabel}
                </label>
                <input
                  type="number"
                  defaultValue="1000"
                  className="w-full px-4 py-2 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-praxis-dark-blue mb-2">
                  {t.calculator.incidentCostLabel}
                </label>
                <input
                  type="text"
                  defaultValue="€50,000"
                  className="w-full px-4 py-2 border border-praxis-blue-300 rounded-lg focus:ring-2 focus:ring-praxis-blue focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <a
            href={`/${language === 'no' ? 'no/' : ''}resources/roi-calculator`}
            className="btn-accent btn-lg inline-flex items-center justify-center group"
          >
            {t.calculator.calculateButton}
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
