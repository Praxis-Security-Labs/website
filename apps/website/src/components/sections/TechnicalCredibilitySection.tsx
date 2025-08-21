import React from 'react';

interface TechnicalCredibilitySectionProps {
  language?: 'en' | 'no';
}

export const TechnicalCredibilitySection: React.FC<
  TechnicalCredibilitySectionProps
> = ({ language = 'en' }) => {
  const content = {
    en: {
      sectionTitle: 'Enterprise-Grade Technical Foundation',
      sectionDescription:
        'Built for security leaders who demand robust, secure, and compliant technology architecture.',
      integrations: {
        title: 'Microsoft Graph API Expertise',
        description:
          'Deep integration with your existing Microsoft 365 security infrastructure',
        features: [
          'Native Azure AD authentication and SSO',
          'Microsoft Graph API for behavioral data collection',
          'Office 365 security events correlation',
          'Azure Security Center integration points',
          'Microsoft Sentinel compatibility',
        ],
      },
      security: {
        title: 'Enterprise Security Standards',
        items: [
          {
            icon: 'lock-closed',
            title: 'Zero-Trust Architecture',
            description:
              'Built on zero-trust principles with end-to-end encryption and least-privilege access controls.',
          },
          {
            icon: 'shield-check',
            title: 'SOC 2 Type II Certified',
            description:
              'Audited security controls meeting the highest enterprise compliance standards.',
          },
          {
            icon: 'globe-alt',
            title: 'EU Data Residency',
            description:
              'Data hosted exclusively in EU data centers with GDPR-compliant processing.',
          },
          {
            icon: 'key',
            title: 'Advanced Encryption',
            description:
              'AES-256 encryption at rest and TLS 1.3 for data in transit with key rotation.',
          },
        ],
      },
      compliance: {
        title: 'Regulatory Compliance Built-In',
        frameworks: [
          {
            name: 'ISO 27001',
            description: 'Information security management system certification',
            status: 'Certified',
          },
          {
            name: 'GDPR',
            description: 'EU General Data Protection Regulation compliance',
            status: 'Compliant',
          },
          {
            name: 'NIS2',
            description: 'EU Network and Information Security Directive',
            status: 'Ready',
          },
          {
            name: 'SOX',
            description: 'Sarbanes-Oxley Act compliance controls',
            status: 'Compliant',
          },
        ],
      },
    },
    no: {
      sectionTitle: 'Virksomhetsgrad Teknisk Grunnlag',
      sectionDescription:
        'Bygget for sikkerhetsledere som krever robust, sikker og kompatibel teknologi arkitektur.',
      integrations: {
        title: 'Microsoft Graph API Ekspertise',
        description:
          'Dyp integrasjon med din eksisterende Microsoft 365 sikkerhetsinfrastruktur',
        features: [
          'Native Azure AD autentisering og SSO',
          'Microsoft Graph API for atferdsdata innsamling',
          'Office 365 sikkerhetshendelser korrelasjon',
          'Azure Security Center integrasjonspunkter',
          'Microsoft Sentinel kompatibilitet',
        ],
      },
      security: {
        title: 'Virksomhet Sikkerhetsstandarder',
        items: [
          {
            icon: 'lock-closed',
            title: 'Zero-Trust Arkitektur',
            description:
              'Bygget på zero-trust prinsipper med ende-til-ende kryptering og minste-privilegium tilgangskontroller.',
          },
          {
            icon: 'shield-check',
            title: 'SOC 2 Type II Sertifisert',
            description:
              'Reviderte sikkerhetskontroller som møter høyeste virksomhet compliance standarder.',
          },
          {
            icon: 'globe-alt',
            title: 'EU Data Bosted',
            description:
              'Data hostet utelukkende i EU datasentre med GDPR-kompatibel behandling.',
          },
          {
            icon: 'key',
            title: 'Avansert Kryptering',
            description:
              'AES-256 kryptering i hvile og TLS 1.3 for data i transit med nøkkelrotasjon.',
          },
        ],
      },
      compliance: {
        title: 'Regulatorisk Compliance Bygget Inn',
        frameworks: [
          {
            name: 'ISO 27001',
            description: 'Informasjonssikkerhet styringssystem sertifisering',
            status: 'Sertifisert',
          },
          {
            name: 'GDPR',
            description: 'EU Generell Databeskyttelse Regulering compliance',
            status: 'Kompatibel',
          },
          {
            name: 'NIS2',
            description: 'EU Nettverks og Informasjonssikkerhet Direktiv',
            status: 'Klar',
          },
          {
            name: 'SOX',
            description: 'Sarbanes-Oxley Act compliance kontroller',
            status: 'Kompatibel',
          },
        ],
      },
    },
  };

  const t = content[language];

  const getIcon = (iconName: string) => {
    const icons = {
      'lock-closed': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
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
      'globe-alt': (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      ),
      key: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      ),
    };
    return icons[iconName as keyof typeof icons] || icons['shield-check'];
  };

  const getStatusColor = (status: string) => {
    const statusMap: { [key: string]: string } = {
      Certified: 'bg-green-100 text-green-800',
      Compliant: 'bg-green-100 text-green-800',
      Ready: 'bg-blue-100 text-blue-800',
      Sertifisert: 'bg-green-100 text-green-800',
      Kompatibel: 'bg-green-100 text-green-800',
      Klar: 'bg-blue-100 text-blue-800',
    };
    return statusMap[status] || 'bg-gray-100 text-gray-800';
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

        {/* Microsoft Integration */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue mb-6">
                {t.integrations.title}
              </h3>
              <p className="text-lg text-praxis-dark-blue-600 mb-8">
                {t.integrations.description}
              </p>

              <ul className="space-y-4">
                {t.integrations.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-praxis-blue mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-praxis-dark-blue">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Microsoft Integration Visual */}
            <div className="relative">
              <div className="bg-praxis-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-praxis-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-praxis-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-heading font-bold text-praxis-dark-blue">
                    Microsoft 365 Integration
                  </h4>
                </div>

                <div className="space-y-3">
                  <div className="bg-praxis-white rounded-lg p-3 flex items-center">
                    <div className="w-3 h-3 bg-praxis-accent rounded-full mr-3"></div>
                    <span className="text-sm text-praxis-dark-blue">
                      Azure AD Authentication
                    </span>
                  </div>
                  <div className="bg-praxis-white rounded-lg p-3 flex items-center">
                    <div className="w-3 h-3 bg-praxis-accent rounded-full mr-3"></div>
                    <span className="text-sm text-praxis-dark-blue">
                      Graph API Data Collection
                    </span>
                  </div>
                  <div className="bg-praxis-white rounded-lg p-3 flex items-center">
                    <div className="w-3 h-3 bg-praxis-accent rounded-full mr-3"></div>
                    <span className="text-sm text-praxis-dark-blue">
                      Security Center Events
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-praxis-gold text-praxis-dark-blue px-4 py-2 rounded-full text-sm font-heading font-bold shadow-lg">
                {language === 'no'
                  ? 'Sertifisert Partner'
                  : 'Certified Partner'}
              </div>
            </div>
          </div>
        </div>

        {/* Security Standards */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue text-center mb-12">
            {t.security.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.security.items.map((item, index) => (
              <div
                key={index}
                className="bg-praxis-blue-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-praxis-dark-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-praxis-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {getIcon(item.icon)}
                  </svg>
                </div>

                <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-3">
                  {item.title}
                </h4>

                <p className="text-praxis-dark-blue-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-praxis-dark-blue text-center mb-12">
            {t.compliance.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.compliance.frameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-praxis-white border border-praxis-blue-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-heading font-bold text-praxis-dark-blue">
                    {framework.name}
                  </h4>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(framework.status)}`}
                  >
                    {framework.status}
                  </span>
                </div>

                <p className="text-praxis-dark-blue-600 text-sm">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-praxis-dark-blue rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-heading font-bold text-praxis-white mb-4">
            {language === 'no'
              ? 'Diskuter Tekniske Krav med Vårt Team'
              : 'Discuss Technical Requirements with Our Team'}
          </h3>

          <p className="text-praxis-blue-100 mb-8 max-w-2xl mx-auto">
            {language === 'no'
              ? 'Få en teknisk gjennomgang med våre sikkerhetseksperter og arkitekter.'
              : 'Get a technical walkthrough with our security experts and architects.'}
          </p>

          <a
            href={`/${language === 'no' ? 'no/' : ''}contact?segment=security-leaders&interest=technical-review`}
            className="btn-accent btn-lg inline-flex items-center justify-center group"
          >
            {language === 'no'
              ? 'Be om Teknisk Gjennomgang'
              : 'Request Technical Review'}
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
