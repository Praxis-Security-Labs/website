import React, { useState } from 'react';

interface RegulatoryComplianceSectionProps {
  language?: 'en' | 'no';
}

export const RegulatoryComplianceSection: React.FC<
  RegulatoryComplianceSectionProps
> = ({ language = 'en' }) => {
  const [activeFramework, setActiveFramework] = useState<string>('nis2');

  const content = {
    en: {
      sectionTitle: 'Regulatory Compliance Transparency',
      sectionDescription:
        "Clear visibility into your organization's compliance posture with automated reporting for all major regulatory frameworks.",
      frameworks: [
        {
          id: 'nis2',
          name: 'NIS2 Directive',
          icon: '🏛️',
          status: 'Ready',
          description:
            'EU Network and Information Security Directive compliance',
          requirements: [
            'Cybersecurity risk management measures',
            'Incident reporting within 24 hours',
            'Supply chain security controls',
            'Business continuity and disaster recovery',
            'Executive accountability and governance',
          ],
          businessValue: 'Avoid €10M+ fines and maintain EU market access',
          timeline: 'October 2024 deadline',
        },
        {
          id: 'sox',
          name: 'SOX Compliance',
          icon: '📊',
          status: 'Certified',
          description: 'Sarbanes-Oxley Act financial reporting controls',
          requirements: [
            'Internal controls over financial reporting',
            'IT general controls and access management',
            'Change management and authorization',
            'Security incident documentation',
            'Executive certification requirements',
          ],
          businessValue:
            'Maintain public company listing and investor confidence',
          timeline: 'Annual compliance cycles',
        },
        {
          id: 'gdpr',
          name: 'GDPR',
          icon: '🌍',
          status: 'Compliant',
          description: 'General Data Protection Regulation adherence',
          requirements: [
            'Data processing transparency and consent',
            'Individual rights (access, erasure, portability)',
            'Data protection impact assessments',
            'Breach notification within 72 hours',
            'Privacy by design implementation',
          ],
          businessValue:
            'Avoid 4% global revenue fines and maintain EU operations',
          timeline: 'Ongoing compliance monitoring',
        },
        {
          id: 'iso27001',
          name: 'ISO 27001',
          icon: '⚡',
          status: 'Certified',
          description: 'Information Security Management System standard',
          requirements: [
            'Risk management framework',
            'Security policy and procedures',
            'Asset management and protection',
            'Access control and identity management',
            'Incident response and business continuity',
          ],
          businessValue:
            'Demonstrate security maturity to customers and partners',
          timeline: 'Annual surveillance audits',
        },
      ],
      complianceMetrics: {
        title: 'Executive Compliance Dashboard',
        description: 'Real-time visibility into your compliance posture',
        metrics: [
          {
            title: 'Overall Compliance Score',
            value: '96%',
            trend: '+8% this quarter',
            status: 'excellent',
          },
          {
            title: 'Open Audit Findings',
            value: '3',
            trend: '-12 from last audit',
            status: 'good',
          },
          {
            title: 'Compliance Training',
            value: '94%',
            trend: '+15% completion',
            status: 'excellent',
          },
          {
            title: 'Incident Response Time',
            value: '18hrs',
            trend: '6hrs under requirement',
            status: 'good',
          },
        ],
      },
      ctaSection: {
        title: 'Get Your Compliance Assessment',
        description:
          'Understand your current compliance gaps and remediation roadmap',
        primaryText: 'Request Compliance Audit',
        secondaryText: 'Download Compliance Guide',
      },
    },
    no: {
      sectionTitle: 'Regulatorisk Compliance Transparens',
      sectionDescription:
        'Klar synlighet i organisasjonens compliance posisjon med automatisert rapportering for alle større regulatoriske rammeverk.',
      frameworks: [
        {
          id: 'nis2',
          name: 'NIS2 Direktiv',
          icon: '🏛️',
          status: 'Klar',
          description:
            'EU Nettverks- og Informasjonssikkerhet Direktiv compliance',
          requirements: [
            'Cybersikkerhet risikohåndtering tiltak',
            'Hendelse rapportering innen 24 timer',
            'Leverandørkjede sikkerhetskontroller',
            'Forretningskontinuitet og katastrofe gjenoppretting',
            'Lederskap ansvarlighet og styring',
          ],
          businessValue: 'Unngå €10M+ bøter og oppretthold EU markedstilgang',
          timeline: 'Oktober 2024 frist',
        },
        {
          id: 'sox',
          name: 'SOX Compliance',
          icon: '📊',
          status: 'Sertifisert',
          description: 'Sarbanes-Oxley Act finansiell rapportering kontroller',
          requirements: [
            'Interne kontroller over finansiell rapportering',
            'IT generelle kontroller og tilgangshåndtering',
            'Endringshåndtering og autorisasjon',
            'Sikkerhetshendelse dokumentasjon',
            'Lederskap sertifisering krav',
          ],
          businessValue:
            'Oppretthold offentlig selskap listing og investor tillit',
          timeline: 'Årlige compliance sykluser',
        },
        {
          id: 'gdpr',
          name: 'GDPR',
          icon: '🌍',
          status: 'Compliant',
          description: 'Generell Databeskyttelse Regulering overholdelse',
          requirements: [
            'Data behandling transparens og samtykke',
            'Individuelle rettigheter (tilgang, sletting, portabilitet)',
            'Data beskyttelse påvirkning vurderinger',
            'Brudd notifikasjon innen 72 timer',
            'Personvern by design implementering',
          ],
          businessValue:
            'Unngå 4% global omsetning bøter og oppretthold EU operasjoner',
          timeline: 'Pågående compliance overvåking',
        },
        {
          id: 'iso27001',
          name: 'ISO 27001',
          icon: '⚡',
          status: 'Sertifisert',
          description: 'Informasjonssikkerhet Ledelsessystem standard',
          requirements: [
            'Risikohåndtering rammeverk',
            'Sikkerhetspolicy og prosedyrer',
            'Asset håndtering og beskyttelse',
            'Tilgangskontroll og identitet håndtering',
            'Hendelse respons og forretningskontinuitet',
          ],
          businessValue: 'Demonstrer sikkerhet modenhet til kunder og partnere',
          timeline: 'Årlige overvåkning revisjoner',
        },
      ],
      complianceMetrics: {
        title: 'Lederskap Compliance Dashboard',
        description: 'Sanntid synlighet i din compliance posisjon',
        metrics: [
          {
            title: 'Samlet Compliance Score',
            value: '96%',
            trend: '+8% dette kvartal',
            status: 'excellent',
          },
          {
            title: 'Åpne Revisjon Funn',
            value: '3',
            trend: '-12 fra siste revisjon',
            status: 'good',
          },
          {
            title: 'Compliance Opplæring',
            value: '94%',
            trend: '+15% fullførelse',
            status: 'excellent',
          },
          {
            title: 'Hendelse Respons Tid',
            value: '18t',
            trend: '6t under krav',
            status: 'good',
          },
        ],
      },
      ctaSection: {
        title: 'Få Din Compliance Vurdering',
        description:
          'Forstå dine nåværende compliance gap og remediation roadmap',
        primaryText: 'Be om Compliance Revisjon',
        secondaryText: 'Last ned Compliance Guide',
      },
    },
  };

  const t = content[language];
  const activeFrameworkData =
    t.frameworks.find(f => f.id === activeFramework) || t.frameworks[0];

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

        {/* Compliance Framework Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {t.frameworks.map(framework => (
              <button
                key={framework.id}
                onClick={() => setActiveFramework(framework.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold transition-all duration-300 ${
                  activeFramework === framework.id
                    ? 'bg-praxis-dark-blue text-praxis-white shadow-lg'
                    : 'bg-praxis-white text-praxis-dark-blue hover:bg-praxis-blue-50'
                }`}
              >
                <span className="mr-2">{framework.icon}</span>
                {framework.name}
              </button>
            ))}
          </div>

          {/* Active Framework Details */}
          <div className="bg-praxis-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Framework Info */}
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">
                    {activeFrameworkData.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue">
                      {activeFrameworkData.name}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        activeFrameworkData.status === 'Ready' ||
                        activeFrameworkData.status === 'Klar'
                          ? 'bg-praxis-accent text-praxis-white'
                          : 'bg-praxis-gold text-praxis-dark-blue'
                      }`}
                    >
                      {activeFrameworkData.status}
                    </span>
                  </div>
                </div>

                <p className="text-praxis-dark-blue-600 mb-6">
                  {activeFrameworkData.description}
                </p>

                <div className="bg-praxis-blue-50 rounded-xl p-6 mb-6">
                  <h4 className="font-heading font-bold text-praxis-dark-blue mb-3">
                    {language === 'no'
                      ? 'Forretningsverdi:'
                      : 'Business Value:'}
                  </h4>
                  <p className="text-praxis-dark-blue-600">
                    {activeFrameworkData.businessValue}
                  </p>
                </div>

                <div className="bg-praxis-gold bg-opacity-10 rounded-xl p-6">
                  <h4 className="font-heading font-bold text-praxis-dark-blue mb-3">
                    {language === 'no' ? 'Tidslinje:' : 'Timeline:'}
                  </h4>
                  <p className="text-praxis-dark-blue-600">
                    {activeFrameworkData.timeline}
                  </p>
                </div>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xl font-heading font-bold text-praxis-dark-blue mb-6">
                  {language === 'no' ? 'Sentrale Krav:' : 'Key Requirements:'}
                </h4>
                <ul className="space-y-4">
                  {activeFrameworkData.requirements.map(
                    (requirement, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="h-6 w-6 text-praxis-accent mr-3 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-praxis-dark-blue-600">
                          {requirement}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Metrics Dashboard */}
        <div className="bg-praxis-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
              {t.complianceMetrics.title}
            </h3>
            <p className="text-praxis-dark-blue-600">
              {t.complianceMetrics.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.complianceMetrics.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-praxis-light-gray rounded-xl p-6 text-center"
              >
                <div
                  className={`text-3xl font-heading font-bold mb-2 ${
                    metric.status === 'excellent'
                      ? 'text-praxis-accent'
                      : 'text-praxis-gold'
                  }`}
                >
                  {metric.value}
                </div>
                <div className="font-heading font-semibold text-praxis-dark-blue mb-2">
                  {metric.title}
                </div>
                <div className="text-sm text-praxis-dark-blue-600">
                  {metric.trend}
                </div>
              </div>
            ))}
          </div>
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
