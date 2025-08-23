import React from 'react';
import { ComplianceBadge } from '../ui/ComplianceBadge';
import { DataFlowDiagram } from '../ui/DataFlowDiagram';
import { SecurityTestimonials } from './SecurityTestimonials';

interface TrustOverviewProps {
  language?: 'en' | 'no';
  className?: string;
}

export const TrustOverview: React.FC<TrustOverviewProps> = ({
  language = 'en',
  className = '',
}) => {
  const content = {
    en: {
      title: 'Enterprise-Grade Security & Compliance',
      subtitle:
        'Built for security-conscious organizations who need to maintain the highest standards of data protection and compliance.',

      // Key Security Points
      securityPoints: {
        title: 'Zero-Trust Security Architecture',
        items: [
          {
            icon: '🛡️',
            title: 'Microsoft 365 Native',
            description:
              'Direct integration with Microsoft Graph API. No third-party data intermediaries.',
          },
          {
            icon: '🔐',
            title: 'Read-Only Access',
            description:
              'Never accesses email content, documents, or sensitive communications. Security metadata only.',
          },
          {
            icon: '🏢',
            title: 'Enterprise Infrastructure',
            description:
              'SOC 2 Type II certified infrastructure with 99.9% uptime SLA and geographic data residency.',
          },
          {
            icon: '📋',
            title: 'Compliance Ready',
            description:
              'GDPR, CCPA, SOX, and industry-specific compliance frameworks supported out of the box.',
          },
        ],
      },

      // Certifications Section
      certifications: {
        title: 'Security Certifications & Compliance',
        subtitle:
          'Independently audited and certified by leading security organizations',
        cta: 'Request Audit Documentation',
      },

      // Progressive Disclosure Section
      dataFlow: {
        title: 'Transparent Data Handling',
        subtitle:
          'Complete visibility into how your data flows through our platform',
      },

      // Security Testimonials
      testimonials: {
        title: 'Trusted by Security Teams',
        subtitle:
          'See how other security-conscious organizations have deployed Praxis Navigator',
      },

      // CTA Section
      cta: {
        title: 'Ready to Evaluate Our Security?',
        subtitle:
          'Get detailed security documentation and schedule a compliance review with our team.',
        primaryButton: 'Request Security Review',
        secondaryButton: 'Download Security Whitepaper',
      },
    },
    no: {
      title: 'Sikkerhet & Compliance på Enterprise-nivå',
      subtitle:
        'Bygget for sikkerhetsbevisste organisasjoner som må opprettholde de høyeste standardene for databeskyttelse og compliance.',

      // Key Security Points
      securityPoints: {
        title: 'Zero-Trust Sikkerhetsarkitektur',
        items: [
          {
            icon: '🛡️',
            title: 'Microsoft 365 Native',
            description:
              'Direkte integrasjon med Microsoft Graph API. Ingen tredjeparter for data.',
          },
          {
            icon: '🔐',
            title: 'Skrivebeskyttet Tilgang',
            description:
              'Får aldri tilgang til e-postinnhold, dokumenter eller sensitiv kommunikasjon. Kun sikkerhetsmetadata.',
          },
          {
            icon: '🏢',
            title: 'Enterprise Infrastruktur',
            description:
              'SOC 2 Type II sertifisert infrastruktur med 99.9% oppetid SLA og geografisk data residens.',
          },
          {
            icon: '📋',
            title: 'Compliance Klar',
            description:
              'GDPR, CCPA, SOX, og bransje-spesifikke compliance rammeverk støttet ut av boksen.',
          },
        ],
      },

      // Certifications Section
      certifications: {
        title: 'Sikkerhetssertifiseringer & Compliance',
        subtitle:
          'Uavhengig auditert og sertifisert av ledende sikkerhetsorganisasjoner',
        cta: 'Be om Audit Dokumentasjon',
      },

      // Progressive Disclosure Section
      dataFlow: {
        title: 'Transparent Datahåndtering',
        subtitle:
          'Komplett synlighet i hvordan dine data flyter gjennom vår plattform',
      },

      // Security Testimonials
      testimonials: {
        title: 'Betrodd av Sikkerhetsteam',
        subtitle:
          'Se hvordan andre sikkerhetsbevisste organisasjoner har distribuert Praxis Navigator',
      },

      // CTA Section
      cta: {
        title: 'Klar til å Evaluere Vår Sikkerhet?',
        subtitle:
          'Få detaljert sikkerhetsdokumentasjon og planlegg en compliance gjennomgang med vårt team.',
        primaryButton: 'Be om Sikkerhetsgjennomgang',
        secondaryButton: 'Last ned Sikkerhet Whitepaper',
      },
    },
  };

  const t = content[language];

  // Certification data
  const certifications = [
    {
      id: 'soc2',
      name: 'SOC2',
      displayName: 'SOC 2 Type II',
      badgeIcon: '🛡️',
      certificationDate: new Date('2024-01-15'),
      scope: 'Security, Availability, Processing Integrity',
      documentationUrl: '/compliance/soc2',
      isActive: true,
      description:
        language === 'en'
          ? 'Independent audit of security controls and data protection practices'
          : 'Uavhengig revisjon av sikkerhetskontroller og databeskyttelsespraksis',
    },
    {
      id: 'iso27001',
      name: 'ISO27001',
      displayName: 'ISO 27001',
      badgeIcon: '🔐',
      certificationDate: new Date('2024-02-01'),
      scope: 'Information Security Management System',
      documentationUrl: '/compliance/iso27001',
      isActive: true,
      description:
        language === 'en'
          ? 'International standard for information security management systems'
          : 'Internasjonal standard for informasjonssikkerhetsstyringssystemer',
    },
    {
      id: 'gdpr',
      name: 'GDPR',
      displayName: 'GDPR Compliant',
      badgeIcon: '🇪🇺',
      certificationDate: new Date('2024-01-01'),
      scope: 'Data Protection and Privacy',
      documentationUrl: '/compliance/gdpr',
      isActive: true,
      description:
        language === 'en'
          ? 'Full compliance with European Union General Data Protection Regulation'
          : 'Full etterlevelse av EU General Data Protection Regulation',
    },
    {
      id: 'fedramp',
      name: 'FedRAMP',
      displayName: 'FedRAMP Ready',
      badgeIcon: '🏛️',
      certificationDate: new Date('2024-03-01'),
      scope: 'Federal Government Cloud Security',
      documentationUrl: '/compliance/fedramp',
      isActive: true,
      description:
        language === 'en'
          ? 'Federal Risk and Authorization Management Program certification'
          : 'Federal Risk and Authorization Management Program sertifisering',
    },
  ];

  // Track section analytics
  const handleSectionView = (sectionName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'trust_section_view', {
        section_name: sectionName,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  const handleCTAClick = (buttonType: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'trust_cta_click', {
        button_type: buttonType,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  return (
    <div className={`space-y-16 lg:space-y-24 ${className}`}>
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-praxis-dark-blue mb-6">
          {t.title}
        </h1>
        <p className="text-xl text-praxis-blue-700 leading-relaxed">
          {t.subtitle}
        </p>
      </section>

      {/* Key Security Points */}
      <section
        className="bg-gradient-to-br from-praxis-blue-50 to-white rounded-2xl p-8 lg:p-12"
        onMouseEnter={() => handleSectionView('security_points')}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-praxis-dark-blue mb-4">
            {t.securityPoints.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.securityPoints.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-praxis-blue-200 hover:border-praxis-accent transition-colors duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-praxis-dark-blue mb-2">
                    {item.title}
                  </h3>
                  <p className="text-praxis-blue-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Certifications */}
      <section
        className="text-center"
        onMouseEnter={() => handleSectionView('certifications')}
      >
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-praxis-dark-blue mb-4">
            {t.certifications.title}
          </h2>
          <p className="text-xl text-praxis-blue-700 max-w-3xl mx-auto">
            {t.certifications.subtitle}
          </p>
        </div>

        {/* Compliance Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
          {certifications.map(cert => (
            <ComplianceBadge
              key={cert.id}
              certification={cert}
              language={language}
              className="w-full"
            />
          ))}
        </div>

        <button
          onClick={() => handleCTAClick('audit_documentation')}
          className="btn-secondary btn-md"
        >
          {t.certifications.cta}
        </button>
      </section>

      {/* Data Flow Diagram */}
      <section onMouseEnter={() => handleSectionView('data_flow')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-praxis-dark-blue mb-4">
            {t.dataFlow.title}
          </h2>
          <p className="text-xl text-praxis-blue-700 max-w-3xl mx-auto">
            {t.dataFlow.subtitle}
          </p>
        </div>

        <DataFlowDiagram language={language} />
      </section>

      {/* Security Testimonials */}
      <section
        className="bg-praxis-dark-blue rounded-2xl p-8 lg:p-12 text-white"
        onMouseEnter={() => handleSectionView('testimonials')}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-praxis-blue-100 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <SecurityTestimonials language={language} />
      </section>

      {/* Final CTA Section */}
      <section
        className="bg-gradient-to-r from-praxis-accent to-praxis-accent-dark rounded-2xl p-8 lg:p-12 text-white text-center"
        onMouseEnter={() => handleSectionView('final_cta')}
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          {t.cta.title}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={
              language === 'no' ? '/no/security-review' : '/security-review'
            }
            onClick={() => handleCTAClick('security_review')}
            className="btn-white btn-lg"
          >
            {t.cta.primaryButton}
          </a>
          <a
            href={language === 'no' ? '/no/whitepaper' : '/whitepaper'}
            onClick={() => handleCTAClick('whitepaper')}
            className="btn-white-outline btn-lg"
          >
            {t.cta.secondaryButton}
          </a>
        </div>
      </section>
    </div>
  );
};

export default TrustOverview;
