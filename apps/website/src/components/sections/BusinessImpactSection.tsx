import { useState } from 'react';
import type { FC } from 'react';

export const BusinessImpactSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedImpact, setSelectedImpact] =
    useState<string>('cost-reduction');

  const content = {
    en: {
      sectionTitle: 'Quantifiable Business Impact',
      sectionDescription:
        'Transform security investments into measurable business outcomes with clear ROI metrics and risk reduction indicators.',
      impactAreas: [
        {
          id: 'cost-reduction',
          title: 'Cost Reduction',
          icon: '💰',
          description: 'Measurable cost savings from improved security culture',
          metrics: [
            {
              label: 'Incident Response Costs',
              value: '-73%',
              description: 'Reduced security incident handling costs',
            },
            {
              label: 'Compliance Audit Fees',
              value: '-45%',
              description: 'Streamlined compliance processes',
            },
            {
              label: 'Training Administration',
              value: '-60%',
              description: 'Automated reporting and tracking',
            },
            {
              label: 'Breach Remediation',
              value: '-85%',
              description: 'Proactive risk prevention',
            },
          ],
          caseStudy: {
            company: 'Global Financial Services',
            employees: '12,000',
            savings: '€2.3M annually',
            timeframe: '18 months',
            quote:
              'Praxis Navigator helped us move from reactive incident response to proactive risk prevention, saving millions in potential breach costs.',
          },
        },
        {
          id: 'risk-mitigation',
          title: 'Risk Mitigation',
          icon: '🛡️',
          description:
            'Quantified risk reduction through behavioral improvement',
          metrics: [
            {
              label: 'Phishing Susceptibility',
              value: '-67%',
              description: 'Employees clicking malicious links',
            },
            {
              label: 'Policy Violations',
              value: '-54%',
              description: 'Security policy compliance failures',
            },
            {
              label: 'Data Exposure Risk',
              value: '-78%',
              description: 'Accidental data sharing incidents',
            },
            {
              label: 'Credential Compromise',
              value: '-43%',
              description: 'Password-related security incidents',
            },
          ],
          caseStudy: {
            company: 'Healthcare Network',
            employees: '8,500',
            savings: '€1.8M risk avoided',
            timeframe: '12 months',
            quote:
              'The behavioral insights transformed our understanding of real security risk versus perceived threats.',
          },
        },
        {
          id: 'operational-efficiency',
          title: 'Operational Efficiency',
          icon: '⚡',
          description:
            'Streamlined security operations and improved productivity',
          metrics: [
            {
              label: 'Security Team Productivity',
              value: '+65%',
              description: 'More time for strategic initiatives',
            },
            {
              label: 'Incident Resolution Time',
              value: '-50%',
              description: 'Faster response to security events',
            },
            {
              label: 'Compliance Reporting',
              value: '-80%',
              description: 'Automated audit preparation',
            },
            {
              label: 'Training Effectiveness',
              value: '+120%',
              description: 'Behavioral change measurement',
            },
          ],
          caseStudy: {
            company: 'Technology Corporation',
            employees: '15,000',
            savings: '€3.1M productivity gains',
            timeframe: '24 months',
            quote:
              'Our security team now focuses on innovation instead of firefighting thanks to measurable culture improvement.',
          },
        },
        {
          id: 'revenue-protection',
          title: 'Revenue Protection',
          icon: '📈',
          description:
            'Safeguarding business revenue through security excellence',
          metrics: [
            {
              label: 'Customer Trust Score',
              value: '+34%',
              description: 'Improved customer confidence',
            },
            {
              label: 'Contract Win Rate',
              value: '+28%',
              description: 'Security as competitive advantage',
            },
            {
              label: 'Regulatory Penalties',
              value: '€0',
              description: 'Zero compliance-related fines',
            },
            {
              label: 'Business Continuity',
              value: '99.9%',
              description: 'Uptime protected by security culture',
            },
          ],
          caseStudy: {
            company: 'Manufacturing Group',
            employees: '22,000',
            savings: '€5.2M revenue protected',
            timeframe: '30 months',
            quote:
              'Security culture became our competitive differentiator, helping win enterprise contracts.',
          },
        },
      ],
      roiCalculator: {
        title: 'Calculate Your Potential ROI',
        description: 'See estimated business impact for your organization',
        inputs: [
          {
            label: 'Number of Employees',
            placeholder: '1000',
            id: 'employees',
          },
          {
            label: 'Average Security Incident Cost',
            placeholder: '€50,000',
            id: 'incident-cost',
          },
          {
            label: 'Annual Compliance Budget',
            placeholder: '€200,000',
            id: 'compliance-budget',
          },
        ],
        results: {
          annualSavings: '€850,000',
          roiPercentage: '340%',
          paybackPeriod: '4.2 months',
        },
      },
      ctaSection: {
        title: "See Your Organization's Potential Impact",
        description:
          'Get a personalized business impact assessment based on your specific industry and organization size.',
        primaryText: 'Request Impact Assessment',
        secondaryText: 'Download ROI Template',
      },
    },
    no: {
      sectionTitle: 'Kvantifiserbar Forretningspåvirkning',
      sectionDescription:
        'Transformer sikkerhetsinvesteringer til målbare forretningsresultater med klare ROI metrikker og risiko reduksjon indikatorer.',
      impactAreas: [
        {
          id: 'cost-reduction',
          title: 'Kostnad Reduksjon',
          icon: '💰',
          description: 'Målbare kostnadssparing fra forbedret sikkerhetskultur',
          metrics: [
            {
              label: 'Hendelse Respons Kostnader',
              value: '-73%',
              description: 'Reduserte sikkerhetshendelse håndtering kostnader',
            },
            {
              label: 'Compliance Revisjon Avgifter',
              value: '-45%',
              description: 'Strømlinjeformede compliance prosesser',
            },
            {
              label: 'Opplæring Administrasjon',
              value: '-60%',
              description: 'Automatisert rapportering og sporing',
            },
            {
              label: 'Brudd Remediation',
              value: '-85%',
              description: 'Proaktiv risiko forebygging',
            },
          ],
          caseStudy: {
            company: 'Global Finansielle Tjenester',
            employees: '12,000',
            savings: '€2.3M årlig',
            timeframe: '18 måneder',
            quote:
              'Praxis Navigator hjalp oss flytte fra reaktiv hendelse respons til proaktiv risiko forebygging, sparer millioner i potensielle brudd kostnader.',
          },
        },
        {
          id: 'risk-mitigation',
          title: 'Risiko Mitigering',
          icon: '🛡️',
          description:
            'Kvantifisert risiko reduksjon gjennom atferdsforbedring',
          metrics: [
            {
              label: 'Phishing Mottagelighet',
              value: '-67%',
              description: 'Ansatte som klikker ondsinnede lenker',
            },
            {
              label: 'Policy Brudd',
              value: '-54%',
              description: 'Sikkerhetspolicy compliance feil',
            },
            {
              label: 'Data Eksponering Risiko',
              value: '-78%',
              description: 'Utilsiktet data deling hendelser',
            },
            {
              label: 'Legitimasjon Kompromiss',
              value: '-43%',
              description: 'Passord-relaterte sikkerhetshendelser',
            },
          ],
          caseStudy: {
            company: 'Helsevesen Nettverk',
            employees: '8,500',
            savings: '€1.8M risiko unngått',
            timeframe: '12 måneder',
            quote:
              'Atferds innsiktene transformerte vår forståelse av ekte sikkerhetsrisiko versus oppfattede trusler.',
          },
        },
        {
          id: 'operational-efficiency',
          title: 'Operasjonell Effektivitet',
          icon: '⚡',
          description:
            'Strømlinjeformede sikkerhetsoperasjoner og forbedret produktivitet',
          metrics: [
            {
              label: 'Sikkerhetsteam Produktivitet',
              value: '+65%',
              description: 'Mer tid til strategiske initiativer',
            },
            {
              label: 'Hendelse Løsning Tid',
              value: '-50%',
              description: 'Raskere respons til sikkerhetshendelser',
            },
            {
              label: 'Compliance Rapportering',
              value: '-80%',
              description: 'Automatisert revisjon forberedelse',
            },
            {
              label: 'Opplæring Effektivitet',
              value: '+120%',
              description: 'Atferdsendring måling',
            },
          ],
          caseStudy: {
            company: 'Teknologi Korporasjon',
            employees: '15,000',
            savings: '€3.1M produktivitet gevinster',
            timeframe: '24 måneder',
            quote:
              'Vårt sikkerhetsteam fokuserer nå på innovasjon i stedet for brannslukking takket være målbar kultur forbedring.',
          },
        },
        {
          id: 'revenue-protection',
          title: 'Inntekt Beskyttelse',
          icon: '📈',
          description:
            'Beskyttelse av forretningsinntekter gjennom sikkerhets excellens',
          metrics: [
            {
              label: 'Kunde Tillit Score',
              value: '+34%',
              description: 'Forbedret kunde tillit',
            },
            {
              label: 'Kontrakt Vinn Rate',
              value: '+28%',
              description: 'Sikkerhet som konkurransefortrinn',
            },
            {
              label: 'Regulatoriske Straffer',
              value: '€0',
              description: 'Null compliance-relaterte bøter',
            },
            {
              label: 'Forretningskontinuitet',
              value: '99.9%',
              description: 'Oppetid beskyttet av sikkerhetskultur',
            },
          ],
          caseStudy: {
            company: 'Produksjon Gruppe',
            employees: '22,000',
            savings: '€5.2M inntekt beskyttet',
            timeframe: '30 måneder',
            quote:
              'Sikkerhetskultur ble vår konkurransedifferensiator, hjelpe vinn enterprise kontrakter.',
          },
        },
      ],
      roiCalculator: {
        title: 'Beregn Din Potensielle ROI',
        description: 'Se estimert forretningspåvirkning for din organisasjon',
        inputs: [
          { label: 'Antall Ansatte', placeholder: '1000', id: 'employees' },
          {
            label: 'Gjennomsnittlig Sikkerhetshendelse Kostnad',
            placeholder: '€50,000',
            id: 'incident-cost',
          },
          {
            label: 'Årlig Compliance Budsjett',
            placeholder: '€200,000',
            id: 'compliance-budget',
          },
        ],
        results: {
          annualSavings: '€850,000',
          roiPercentage: '340%',
          paybackPeriod: '4.2 måneder',
        },
      },
      ctaSection: {
        title: 'Se Din Organisasjons Potensielle Påvirkning',
        description:
          'Få en personalisert forretningspåvirkning vurdering basert på din spesifikke industri og organisasjon størrelse.',
        primaryText: 'Be om Påvirkning Vurdering',
        secondaryText: 'Last ned ROI Mal',
      },
    },
  };

  const t = content[language];
  const activeImpactData =
    t.impactAreas.find(area => area.id === selectedImpact) || t.impactAreas[0];

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

        {/* Impact Area Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.impactAreas.map(area => (
              <button
                key={area.id}
                onClick={() => setSelectedImpact(area.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedImpact === area.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-light-gray text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{area.icon}</span>
                {area.title}
              </button>
            ))}
          </div>

          {/* Active Impact Area Details */}
          <div className="bg-praxis-light-gray rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Impact Metrics */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{activeImpactData.icon}</span>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                      {activeImpactData.title}
                    </h3>
                    <p className="text-praxis-dark-blue-600">
                      {activeImpactData.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {activeImpactData.metrics.map((metric, index) => (
                    <div key={index} className="bg-praxis-white rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-heading font-semibold text-praxis-dark-blue">
                          {metric.label}
                        </span>
                        <span
                          className={`text-2xl font-heading font-bold ${
                            metric.value.startsWith('+')
                              ? 'text-praxis-accent'
                              : metric.value.startsWith('-')
                                ? 'text-praxis-gold'
                                : 'text-praxis-dark-blue'
                          }`}
                        >
                          {metric.value}
                        </span>
                      </div>
                      <p className="text-sm text-praxis-dark-blue-600">
                        {metric.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div>
                <h4 className="text-xl font-heading font-bold text-praxis-dark-blue mb-6">
                  {language === 'no' ? 'Kundehistorie:' : 'Customer Success:'}
                </h4>

                <div className="bg-praxis-white rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-praxis-dark-blue">
                        {activeImpactData.caseStudy.employees}
                      </div>
                      <div className="text-sm text-praxis-dark-blue-600">
                        {language === 'no' ? 'Ansatte' : 'Employees'}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-heading font-bold text-praxis-accent">
                        {activeImpactData.caseStudy.timeframe}
                      </div>
                      <div className="text-sm text-praxis-dark-blue-600">
                        {language === 'no' ? 'Tidsramme' : 'Timeframe'}
                      </div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-heading font-bold text-praxis-gold mb-2">
                      {activeImpactData.caseStudy.savings}
                    </div>
                    <div className="text-sm text-praxis-dark-blue-600">
                      {language === 'no'
                        ? 'Årlig Besparelse'
                        : 'Annual Savings'}
                    </div>
                  </div>

                  <blockquote className="text-praxis-dark-blue italic text-center">
                    &ldquo;{activeImpactData.caseStudy.quote}&rdquo;
                  </blockquote>
                  <cite className="block text-center text-sm text-praxis-dark-blue-600 mt-4">
                    — {activeImpactData.caseStudy.company}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Calculator Preview */}
        <div className="bg-praxis-dark-blue rounded-2xl shadow-xl p-8 md:p-12 text-center mb-12">
          <h3 className="text-2xl font-heading font-bold text-praxis-white mb-6">
            {t.roiCalculator.title}
          </h3>
          <p className="text-praxis-blue-100 mb-8">
            {t.roiCalculator.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-heading font-bold text-praxis-gold mb-2">
                {t.roiCalculator.results.annualSavings}
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no' ? 'Årlig Besparelse' : 'Annual Savings'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-praxis-accent mb-2">
                {t.roiCalculator.results.roiPercentage}
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no' ? 'ROI Prosent' : 'ROI Percentage'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-heading font-bold text-praxis-gold mb-2">
                {t.roiCalculator.results.paybackPeriod}
              </div>
              <div className="text-praxis-blue-100">
                {language === 'no'
                  ? 'Tilbakebetalingsperiode'
                  : 'Payback Period'}
              </div>
            </div>
          </div>

          <button className="btn-accent">
            {language === 'no'
              ? 'Få Detaljert ROI Analyse'
              : 'Get Detailed ROI Analysis'}
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.ctaSection.title}
          </h3>
          <p className="text-xl text-praxis-dark-blue-600 mb-8 max-w-3xl mx-auto">
            {t.ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">{t.ctaSection.primaryText}</button>
            <button className="btn-outline">
              {t.ctaSection.secondaryText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
