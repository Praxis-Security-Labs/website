import React from 'react';

interface GraphIntegrationSectionProps {
  className?: string;
}

export const GraphIntegrationSection: React.FC<
  GraphIntegrationSectionProps
> = ({ className = '' }) => {
  const dataSources = [
    {
      name: 'Exchange Online',
      description: 'Email security practices and threat response patterns',
      metrics: [
        'Phishing email handling and reporting',
        'External sender interaction patterns',
        'Attachment and link security behaviors',
        'Email encryption and protection usage',
      ],
      icon: 'email',
      color: 'praxis-blue',
    },
    {
      name: 'SharePoint Online',
      description: 'File sharing behaviors and collaboration security',
      metrics: [
        'External sharing permissions and practices',
        'Sensitive document access patterns',
        'Version control and backup behaviors',
        'Guest user collaboration security',
      ],
      icon: 'sharepoint',
      color: 'praxis-gold',
    },
    {
      name: 'OneDrive for Business',
      description: 'Personal file security and access control behaviors',
      metrics: [
        'File synchronization security practices',
        'Personal data backup and protection',
        'Mobile device access patterns',
        'Offline file security behaviors',
      ],
      icon: 'onedrive',
      color: 'praxis-pine',
    },
    {
      name: 'Microsoft Teams',
      description: 'Communication security and collaboration patterns',
      metrics: [
        'Meeting security and access controls',
        'Chat and file sharing behaviors',
        'External guest interaction patterns',
        'App and integration security practices',
      ],
      icon: 'teams',
      color: 'praxis-brick',
    },
    {
      name: 'Azure AD Logs',
      description: 'Authentication patterns and identity security',
      metrics: [
        'Multi-factor authentication adoption',
        'Sign-in risk and location patterns',
        'Device compliance and security status',
        'Privileged access usage patterns',
      ],
      icon: 'azure',
      color: 'praxis-sky',
    },
  ];

  const complianceFeatures = [
    {
      title: 'SOC2 Type II Certified',
      description: 'Comprehensive security controls and audit compliance',
      icon: 'security',
    },
    {
      title: 'GDPR Aligned',
      description: 'Privacy-first design with no PII collection',
      icon: 'privacy',
    },
    {
      title: 'ISO 27001 Standards',
      description: 'Information security management system compliance',
      icon: 'iso',
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Designed for modern enterprise security frameworks',
      icon: 'zerotrust',
    },
  ];

  return (
    <section
      id="integration-details"
      className={`py-20 bg-praxis-tan-50 ${className}`}
      aria-labelledby="integration-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="integration-heading"
              className="h2 text-praxis-dark-blue mb-6"
            >
              Microsoft Graph API Integration Deep Dive
            </h2>
            <p className="body-large text-praxis-brown max-w-4xl mx-auto">
              Comprehensive behavioral data collection across your Microsoft 365
              environment with enterprise-grade privacy and security controls
            </p>
          </div>

          {/* Data Sources Grid */}
          <div className="mb-16">
            <h3 className="h3 text-praxis-dark-blue text-center mb-12">
              Supported Data Sources
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {dataSources.map((source, index) => (
                <div
                  key={index}
                  className="bg-praxis-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Source Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`
                      w-16 h-16 rounded-full flex items-center justify-center
                      ${source.color === 'praxis-blue' ? 'bg-praxis-blue-100' : ''}
                      ${source.color === 'praxis-gold' ? 'bg-praxis-gold-100' : ''}
                      ${source.color === 'praxis-pine' ? 'bg-praxis-pine-100' : ''}
                      ${source.color === 'praxis-brick' ? 'bg-praxis-brick-100' : ''}
                      ${source.color === 'praxis-sky' ? 'bg-praxis-sky-100' : ''}
                    `}
                    >
                      <div
                        className={`
                        w-8 h-8 rounded-full
                        ${source.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                        ${source.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                        ${source.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                        ${source.color === 'praxis-brick' ? 'bg-praxis-brick' : ''}
                        ${source.color === 'praxis-sky' ? 'bg-praxis-sky' : ''}
                      `}
                      ></div>
                    </div>
                    <div>
                      <h4 className="h5 text-praxis-dark-blue">
                        {source.name}
                      </h4>
                      <p className="body-small text-praxis-brown">
                        {source.description}
                      </p>
                    </div>
                  </div>

                  {/* Behavioral Metrics */}
                  <div className="space-y-3">
                    <h5 className="h6 text-praxis-dark-blue mb-4">
                      Behavioral Data Points:
                    </h5>
                    {source.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-start gap-3">
                        <div
                          className={`
                          w-2 h-2 rounded-full mt-2 flex-shrink-0
                          ${source.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                          ${source.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                          ${source.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                          ${source.color === 'praxis-brick' ? 'bg-praxis-brick' : ''}
                          ${source.color === 'praxis-sky' ? 'bg-praxis-sky' : ''}
                        `}
                        ></div>
                        <p className="body-small text-praxis-black">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy-First Approach */}
          <div className="bg-praxis-white rounded-xl p-8 shadow-lg mb-16">
            <h3 className="h3 text-praxis-dark-blue text-center mb-8">
              Privacy-First Data Collection
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* What We Don&apos;t Collect */}
              <div>
                <h4 className="h5 text-praxis-brick mb-6">
                  What We DON&apos;T Collect
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-brick text-xl">❌</span>
                    <p className="body-base text-praxis-black">
                      <strong>No PII:</strong> No names, email addresses, or
                      personal identifiers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-brick text-xl">❌</span>
                    <p className="body-base text-praxis-black">
                      <strong>No Content:</strong> No email content, file
                      contents, or message data
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-brick text-xl">❌</span>
                    <p className="body-base text-praxis-black">
                      <strong>No Tracking:</strong> No individual user tracking
                      or surveillance
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-brick text-xl">❌</span>
                    <p className="body-base text-praxis-black">
                      <strong>No Storage:</strong> No persistent storage of
                      sensitive information
                    </p>
                  </div>
                </div>
              </div>

              {/* What We Do Collect */}
              <div>
                <h4 className="h5 text-praxis-gold mb-6">What We DO Monitor</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-gold text-xl">✓</span>
                    <p className="body-base text-praxis-black">
                      <strong>Behavioral Patterns:</strong> Aggregated security
                      behavior trends and patterns
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-gold text-xl">✓</span>
                    <p className="body-base text-praxis-black">
                      <strong>Security Events:</strong> Security-relevant
                      actions and responses (anonymized)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-gold text-xl">✓</span>
                    <p className="body-base text-praxis-black">
                      <strong>Risk Indicators:</strong> Security posture metrics
                      and risk scores
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-praxis-gold text-xl">✓</span>
                    <p className="body-base text-praxis-black">
                      <strong>Compliance Data:</strong> Policy adherence and
                      security control effectiveness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Compliance */}
          <div className="bg-praxis-sky-50 rounded-xl p-8 text-center">
            <h3 className="h3 text-praxis-dark-blue mb-8">
              Enterprise-Grade Security &amp; Compliance
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {complianceFeatures.map((feature, index) => (
                <div key={index} className="bg-praxis-white rounded-lg p-6">
                  <div className="w-12 h-12 bg-praxis-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-praxis-blue rounded-full"></div>
                  </div>
                  <h4 className="h6 text-praxis-dark-blue mb-3">
                    {feature.title}
                  </h4>
                  <p className="body-small text-praxis-brown">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-praxis-white rounded-lg p-6 max-w-4xl mx-auto">
              <h4 className="h5 text-praxis-dark-blue mb-4">
                Enterprise Assurance
              </h4>
              <p className="body-base text-praxis-brown mb-6">
                Praxis Navigator is built for enterprise environments with the
                highest security and compliance standards. Our architecture is
                designed to meet the needs of Fortune 500 companies, government
                agencies, and regulated industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/product/security"
                  className="btn-outline hover-lift active-scale focus-ring"
                  aria-label="Learn more about security and compliance details"
                >
                  Security Documentation
                </a>
                <a
                  href="/product/demo"
                  className="btn-secondary hover-lift active-scale focus-ring"
                  aria-label="Request a demo to see compliance features"
                >
                  Request Enterprise Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
