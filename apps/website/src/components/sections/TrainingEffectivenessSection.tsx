import { useState } from 'react';
import type { FC } from 'react';

export const TrainingEffectivenessSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedTab, setSelectedTab] = useState<string>('measurement');

  const content = {
    en: {
      sectionTitle: 'Training Effectiveness & Behavioral Analytics',
      sectionDescription:
        "Leverage Kai Roer's pioneering research to measure and optimize security awareness training impact with scientific precision.",
      tabs: [
        {
          id: 'measurement',
          title: 'Training Measurement',
          icon: '📊',
          description:
            'Scientific measurement framework for security awareness training effectiveness',
          framework: {
            title: 'The Security Culture Framework™',
            subtitle: 'By Kai Roer - Used by 500+ Organizations Worldwide',
            dimensions: [
              {
                name: 'Attitudes',
                score: '8.2/10',
                description: 'Employee perception and commitment to security',
                improvement: '+23% from last quarter',
                color: 'bg-praxis-accent',
              },
              {
                name: 'Behaviors',
                score: '7.8/10',
                description: 'Observable security actions and compliance',
                improvement: '+18% from last quarter',
                color: 'bg-praxis-gold',
              },
              {
                name: 'Cognition',
                score: '8.6/10',
                description:
                  'Knowledge and understanding of security principles',
                improvement: '+15% from last quarter',
                color: 'bg-praxis-dark-blue',
              },
            ],
            insights: [
              'Behavioral metrics predict actual security incidents 3.2x better than knowledge tests',
              'Cultural alignment reduces security violations by 67% within 6 months',
              'Continuous measurement increases training ROI by 245%',
            ],
          },
        },
        {
          id: 'research',
          title: 'Research Integration',
          icon: '🔬',
          description:
            'Evidence-based training optimization using latest security behavior research',
          researchTopics: [
            {
              title: 'Nudge Theory in Cybersecurity',
              author: 'Kai Roer et al.',
              impact: 'Behavioral change improvement: +156%',
              description:
                'Implementation of behavioral economics principles to enhance security decision-making',
              applicationAreas: [
                'Password behavior modification',
                'Phishing email recognition',
                'Social engineering resistance',
                'Incident reporting motivation',
              ],
            },
            {
              title: 'Security Culture Transformation',
              author: 'Kai Roer Research Team',
              impact: 'Cultural maturity acceleration: +89%',
              description:
                'Framework for sustainable organizational security culture development',
              applicationAreas: [
                'Leadership engagement strategies',
                'Cross-departmental collaboration',
                'Change management protocols',
                'Measurement and feedback loops',
              ],
            },
          ],
        },
      ],
      ctaSection: {
        title: 'Implement World-Class Training Effectiveness',
        description:
          "Join leading organizations using Kai Roer's research-backed methodologies for security awareness training.",
        primaryText: 'Schedule Research Consultation',
        secondaryText: 'Access Research Library',
      },
    },
    no: {
      sectionTitle: 'Opplæring Effektivitet & Atferd Analytikk',
      sectionDescription:
        'Utnytt Kai Roer sin banebrytende forskning for å måle og optimalisere sikkerhetsbevissthet opplæring påvirkning med vitenskapelig presisjon.',
      tabs: [
        {
          id: 'measurement',
          title: 'Opplæring Måling',
          icon: '📊',
          description:
            'Vitenskapelig måling ramme for sikkerhetsbevissthet opplæring effektivitet',
          framework: {
            title: 'The Security Culture Framework™',
            subtitle: 'Av Kai Roer - Brukt av 500+ Organisasjoner Verden Over',
            dimensions: [
              {
                name: 'Holdninger',
                score: '8.2/10',
                description:
                  'Ansattes oppfatning og forpliktelse til sikkerhet',
                improvement: '+23% fra forrige kvartal',
                color: 'bg-praxis-accent',
              },
              {
                name: 'Atferd',
                score: '7.8/10',
                description: 'Observerbare sikkerhetshandlinger og compliance',
                improvement: '+18% fra forrige kvartal',
                color: 'bg-praxis-gold',
              },
              {
                name: 'Kognisjon',
                score: '8.6/10',
                description: 'Kunnskap og forståelse av sikkerhetsprinsipper',
                improvement: '+15% fra forrige kvartal',
                color: 'bg-praxis-dark-blue',
              },
            ],
            insights: [
              'Atferd metrikker predikerer faktiske sikkerhetshendelser 3.2x bedre enn kunnskaps tester',
              'Kulturell tilpassing reduserer sikkerhetsbrudd med 67% innen 6 måneder',
              'Kontinuerlig måling øker opplæring ROI med 245%',
            ],
          },
        },
        {
          id: 'research',
          title: 'Forskning Integrasjon',
          icon: '🔬',
          description:
            'Evidens-basert opplæring optimalisering med siste sikkerhet atferd forskning',
          researchTopics: [
            {
              title: 'Nudge Teori i Cybersikkerhet',
              author: 'Kai Roer et al.',
              impact: 'Atferdsendring forbedring: +156%',
              description:
                'Implementering av atferdsøkonomi prinsipper for å forbedre sikkerhet beslutninger',
              applicationAreas: [
                'Passord atferd modifikasjon',
                'Phishing e-post gjenkjennelse',
                'Social engineering motstand',
                'Hendelse rapportering motivasjon',
              ],
            },
            {
              title: 'Sikkerhetskultur Transformasjon',
              author: 'Kai Roer Forskning Team',
              impact: 'Kulturell modenhet akselerasjon: +89%',
              description:
                'Ramme for bærekraftig organisatorisk sikkerhetskultur utvikling',
              applicationAreas: [
                'Lederskap engasjement strategier',
                'Tverrfaglig samarbeid',
                'Endring håndtering protokoller',
                'Måling og tilbakemelding loops',
              ],
            },
          ],
        },
      ],
      ctaSection: {
        title: 'Implementer Verdensklasse Opplæring Effektivitet',
        description:
          'Bli med ledende organisasjoner som bruker Kai Roer sin forskning-støttede metodikk for sikkerhetsbevissthet opplæring.',
        primaryText: 'Planlegg Forskning Konsultasjon',
        secondaryText: 'Tilgang Forskning Bibliotek',
      },
    },
  };

  const t = content[language];
  const activeTab = t.tabs.find(tab => tab.id === selectedTab) || t.tabs[0];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'measurement':
        if (!activeTab.framework) return null;
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-2">
                {activeTab.framework.title}
              </h3>
              <p className="text-lg text-praxis-gold font-semibold">
                {activeTab.framework.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {activeTab.framework.dimensions.map((dimension, index) => (
                <div
                  key={index}
                  className="bg-praxis-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div
                    className={`w-16 h-16 ${dimension.color} rounded-full mx-auto mb-4 flex items-center justify-center`}
                  >
                    <span className="text-white font-heading font-bold text-lg">
                      {dimension.score.split('/')[0]}
                    </span>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-2">
                    {dimension.name}
                  </h4>
                  <p className="text-sm text-praxis-dark-blue-600 mb-3">
                    {dimension.description}
                  </p>
                  <div className="text-praxis-accent font-semibold">
                    {dimension.improvement}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-praxis-blue-50 rounded-xl p-6">
              <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-4">
                {language === 'no'
                  ? 'Forskning Innsikter:'
                  : 'Research Insights:'}
              </h4>
              <ul className="space-y-3">
                {activeTab.framework.insights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-praxis-accent mr-3 mt-1">📊</span>
                    <span className="text-praxis-dark-blue">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'research':
        if (!activeTab.researchTopics) return null;
        return (
          <div className="space-y-8">
            {activeTab.researchTopics.map((topic, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-heading font-bold text-praxis-dark-blue mb-2">
                      {topic.title}
                    </h4>
                    <p className="text-praxis-dark-blue-600 mb-2">
                      {topic.author}
                    </p>
                    <div className="text-praxis-accent font-semibold">
                      {topic.impact}
                    </div>
                  </div>
                  <span className="text-4xl">🔬</span>
                </div>
                <p className="text-praxis-dark-blue mb-4">
                  {topic.description}
                </p>
                <div>
                  <h5 className="font-heading font-semibold text-praxis-dark-blue mb-2">
                    {language === 'no'
                      ? 'Anvendelse Områder:'
                      : 'Application Areas:'}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {topic.applicationAreas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center">
                        <span className="text-praxis-accent mr-2">•</span>
                        <span className="text-praxis-dark-blue text-sm">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

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

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedTab === tab.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-white text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-praxis-light-gray rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl mr-4">{activeTab.icon}</span>
                <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                  {activeTab.title}
                </h3>
              </div>
              <p className="text-xl text-praxis-dark-blue-600">
                {activeTab.description}
              </p>
            </div>

            {renderTabContent()}
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
