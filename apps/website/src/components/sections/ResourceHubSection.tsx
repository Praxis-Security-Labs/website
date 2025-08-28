import { useState } from 'react';
import type { FC } from 'react';

export const ResourceHubSection: FC<{ language?: 'en' | 'no' }> = ({
  language = 'en',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('research');

  const content = {
    en: {
      sectionTitle: 'Security Culture Research Hub',
      sectionDescription:
        "Access Kai Roer's 25+ years of security culture research and stay current with the latest behavioral security insights.",
      resourceCategories: [
        {
          id: 'research',
          title: 'Research Publications',
          icon: '📚',
          description: 'Academic papers and peer-reviewed research',
          resources: [
            {
              title: 'The Security Culture Framework',
              type: 'Research Paper',
              date: '2024',
              description:
                'Comprehensive framework for measuring and improving organizational security culture',
              downloadCount: '12,000+',
            },
            {
              title: 'Behavioral Security in the Digital Age',
              type: 'Academic Study',
              date: '2023',
              description:
                'Multi-year study on employee security behavior patterns and intervention effectiveness',
              downloadCount: '8,500+',
            },
            {
              title: 'Security Awareness Training Effectiveness',
              type: 'Meta-Analysis',
              date: '2023',
              description:
                'Analysis of 150+ studies on security training methodologies and outcomes',
              downloadCount: '15,000+',
            },
          ],
        },
        {
          id: 'whitepapers',
          title: 'Industry Whitepapers',
          icon: '📄',
          description: 'Practical guides and industry insights',
          resources: [
            {
              title: 'Building a Mature Security Culture',
              type: 'Whitepaper',
              date: '2024',
              description:
                'Step-by-step guide to developing organizational security culture maturity',
              downloadCount: '22,000+',
            },
            {
              title: 'Measuring Human Risk in Cybersecurity',
              type: 'Industry Guide',
              date: '2024',
              description:
                'Practical approach to quantifying and managing human-centered security risks',
              downloadCount: '18,000+',
            },
            {
              title: 'The ROI of Security Culture Investment',
              type: 'Business Case',
              date: '2023',
              description:
                'Data-driven analysis of security culture program returns and business benefits',
              downloadCount: '25,000+',
            },
          ],
        },
        {
          id: 'tools',
          title: 'Assessment Tools',
          icon: '🛠️',
          description: 'Practical tools for security culture measurement',
          resources: [
            {
              title: 'Security Culture Assessment Template',
              type: 'Excel Tool',
              date: '2024',
              description:
                'Ready-to-use template for conducting organizational security culture assessments',
              downloadCount: '35,000+',
            },
            {
              title: 'Phishing Simulation Analyzer',
              type: 'Analysis Tool',
              date: '2024',
              description:
                'Tool for analyzing and improving phishing simulation campaign effectiveness',
              downloadCount: '28,000+',
            },
            {
              title: 'Training Effectiveness Calculator',
              type: 'ROI Tool',
              date: '2023',
              description:
                'Calculate the ROI and effectiveness of your security awareness training programs',
              downloadCount: '31,000+',
            },
          ],
        },
        {
          id: 'webinars',
          title: 'Expert Webinars',
          icon: '🎥',
          description:
            'Live and recorded sessions with security culture experts',
          resources: [
            {
              title: 'Advanced Security Culture Metrics',
              type: 'Webinar',
              date: '2024',
              description:
                'Deep dive into sophisticated measurement techniques for security culture',
              downloadCount: '5,200+',
            },
            {
              title: 'Building Executive Buy-in for Security Culture',
              type: 'Executive Session',
              date: '2024',
              description:
                'Strategies for gaining leadership support and investment in culture programs',
              downloadCount: '4,800+',
            },
            {
              title: 'Behavioral Intervention Strategies',
              type: 'Training Session',
              date: '2023',
              description:
                'Evidence-based approaches to changing security behaviors in organizations',
              downloadCount: '6,100+',
            },
          ],
        },
      ],
      exclusiveAccess: {
        title: 'Exclusive Subscriber Benefits',
        description: 'Get early access to new research and exclusive content',
        benefits: [
          {
            icon: '🚀',
            title: 'Early Access',
            description: 'Get new research 30 days before public release',
          },
          {
            icon: '📧',
            title: 'Monthly Insights',
            description: 'Exclusive research summaries and trend analysis',
          },
          {
            icon: '🎓',
            title: 'Expert Consultations',
            description: 'Monthly Q&A sessions with Kai Roer and research team',
          },
          {
            icon: '🔧',
            title: 'Premium Tools',
            description: 'Access to advanced assessment and analysis tools',
          },
        ],
      },
      ctaSection: {
        title: 'Start Your Free Trial Today',
        description:
          'Get instant access to Praxis Navigator with a 30-day free trial. No credit card required.',
        primaryText: 'Start Free Trial',
        secondaryText: 'Watch Product Demo',
      },
    },
    no: {
      sectionTitle: 'Sikkerhetskultur Forskningshub',
      sectionDescription:
        'Få tilgang til Kai Roers 25+ år med sikkerhetskultur forskning og hold deg oppdatert med de nyeste adferds sikkerhet innsiktene.',
      resourceCategories: [
        {
          id: 'research',
          title: 'Forsknings Publikasjoner',
          icon: '📚',
          description: 'Akademiske artikler og fagfellevurdert forskning',
          resources: [
            {
              title: 'Sikkerhetskultur Rammeverket',
              type: 'Forskningsartikkel',
              date: '2024',
              description:
                'Omfattende rammeverk for måling og forbedring av organisatorisk sikkerhetskultur',
              downloadCount: '12,000+',
            },
            {
              title: 'Atferdssikkerhet i den Digitale Tidsalder',
              type: 'Akademisk Studie',
              date: '2023',
              description:
                'Flerårig studie av ansatt sikkerhet adferds mønstre og intervensjon effektivitet',
              downloadCount: '8,500+',
            },
            {
              title: 'Sikkerhetsbevissthet Opplæring Effektivitet',
              type: 'Meta-Analyse',
              date: '2023',
              description:
                'Analyse av 150+ studier på sikkerhet opplæring metodikker og resultater',
              downloadCount: '15,000+',
            },
          ],
        },
        {
          id: 'whitepapers',
          title: 'Industri Hvitbøker',
          icon: '📄',
          description: 'Praktiske guider og industri innsikter',
          resources: [
            {
              title: 'Bygge en Moden Sikkerhetskultur',
              type: 'Hvitbok',
              date: '2024',
              description:
                'Steg-for-steg guide til utvikling av organisatorisk sikkerhetskultur modenhet',
              downloadCount: '22,000+',
            },
            {
              title: 'Måling av Menneskelig Risiko i Cybersikkerhet',
              type: 'Industri Guide',
              date: '2024',
              description:
                'Praktisk tilnærming til kvantifisering og håndtering av menneske-sentrerte sikkerhetsrisikoer',
              downloadCount: '18,000+',
            },
            {
              title: 'ROI av Sikkerhetskultur Investering',
              type: 'Forretningscase',
              date: '2023',
              description:
                'Datadrevet analyse av sikkerhetskultur program avkastning og forretningsfordeler',
              downloadCount: '25,000+',
            },
          ],
        },
        {
          id: 'tools',
          title: 'Vurdering Verktøy',
          icon: '🛠️',
          description: 'Praktiske verktøy for sikkerhetskultur måling',
          resources: [
            {
              title: 'Sikkerhetskultur Vurdering Mal',
              type: 'Excel Verktøy',
              date: '2024',
              description:
                'Klar-til-bruk mal for gjennomføring av organisatoriske sikkerhetskultur vurderinger',
              downloadCount: '35,000+',
            },
            {
              title: 'Phishing Simulering Analysator',
              type: 'Analyse Verktøy',
              date: '2024',
              description:
                'Verktøy for analyse og forbedring av phishing simulering kampanje effektivitet',
              downloadCount: '28,000+',
            },
            {
              title: 'Opplæring Effektivitet Kalkulator',
              type: 'ROI Verktøy',
              date: '2023',
              description:
                'Beregn ROI og effektivitet av dine sikkerhetsbevissthet opplæring programmer',
              downloadCount: '31,000+',
            },
          ],
        },
        {
          id: 'webinars',
          title: 'Ekspert Webinarer',
          icon: '🎥',
          description:
            'Live og innspilte sesjoner med sikkerhetskultur eksperter',
          resources: [
            {
              title: 'Avanserte Sikkerhetskultur Metrikker',
              type: 'Webinar',
              date: '2024',
              description:
                'Dypdykk i sofistikerte måleteknikker for sikkerhetskultur',
              downloadCount: '5,200+',
            },
            {
              title: 'Bygge Lederskap Støtte for Sikkerhetskultur',
              type: 'Lederskap Sesjon',
              date: '2024',
              description:
                'Strategier for å få ledelsens støtte og investering i kultur programmer',
              downloadCount: '4,800+',
            },
            {
              title: 'Atferds Intervensjon Strategier',
              type: 'Opplæring Sesjon',
              date: '2023',
              description:
                'Evidensbaserte tilnærminger til endring av sikkerhetsadferd i organisasjoner',
              downloadCount: '6,100+',
            },
          ],
        },
      ],
      exclusiveAccess: {
        title: 'Eksklusive Abonnent Fordeler',
        description: 'Få tidlig tilgang til ny forskning og eksklusivt innhold',
        benefits: [
          {
            icon: '🚀',
            title: 'Tidlig Tilgang',
            description: 'Få ny forskning 30 dager før offentlig utgivelse',
          },
          {
            icon: '📧',
            title: 'Månedlige Innsikter',
            description: 'Eksklusive forsknings sammendrag og trend analyse',
          },
          {
            icon: '🎓',
            title: 'Ekspert Konsultasjoner',
            description:
              'Månedlige Q&A sesjoner med Kai Roer og forskningsteam',
          },
          {
            icon: '🔧',
            title: 'Premium Verktøy',
            description: 'Tilgang til avanserte vurdering og analyse verktøy',
          },
        ],
      },
      ctaSection: {
        title: 'Start Din Gratis Prøveperiode I Dag',
        description:
          'Få øyeblikkelig tilgang til Praxis Navigator med en 30-dagers gratis prøveperiode. Ingen kredittkort påkrevd.',
        primaryText: 'Start Gratis Prøveperiode',
        secondaryText: 'Se Produkt Demo',
      },
    },
  };

  const t = content[language];
  const activeCategoryData =
    t.resourceCategories.find(cat => cat.id === selectedCategory) ||
    t.resourceCategories[0];

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

        {/* Resource Category Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.resourceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-white text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Resources */}
          <div className="bg-praxis-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-4">{activeCategoryData.icon}</span>
                <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                  {activeCategoryData.title}
                </h3>
              </div>
              <p className="text-praxis-dark-blue-600">
                {activeCategoryData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCategoryData.resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-praxis-light-gray rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-praxis-accent text-praxis-white px-3 py-1 rounded-full text-xs font-semibold">
                      {resource.type}
                    </span>
                  </div>

                  <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-3">
                    {resource.title}
                  </h4>

                  <p className="text-praxis-dark-blue-600 text-sm mb-4">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-end">
                    <button className="text-praxis-accent hover:text-praxis-dark-blue font-semibold text-sm">
                      {language === 'no' ? 'Last ned →' : 'Download →'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exclusive Access Benefits */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {t.exclusiveAccess.title}
            </h3>
            <p className="text-xl text-praxis-dark-blue-600">
              {t.exclusiveAccess.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.exclusiveAccess.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-2">
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
        <div className="bg-praxis-dark-blue rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-heading font-bold text-praxis-white mb-6">
            {t.ctaSection.title}
          </h3>
          <p className="text-xl text-praxis-blue-100 mb-8 max-w-3xl mx-auto">
            {t.ctaSection.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/trial-explainer"
              className="btn-accent inline-flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.055 3.055A1 1 0 014 3h16a1 1 0 01.945.55l.78 2.337A1 1 0 0121 7H3a1 1 0 01-.945-1.113l.78-2.337A1 1 0 013.055 3.055zM3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
              {t.ctaSection.primaryText}
            </a>
            <button className="btn-outline-white">
              {t.ctaSection.secondaryText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
