import React from 'react';

interface FeaturesCapabilitiesSectionProps {
  className?: string;
}

export const FeaturesCapabilitiesSection: React.FC<
  FeaturesCapabilitiesSectionProps
> = ({ className = '' }) => {
  const features = [
    {
      title: 'Behavioral Monitoring',
      description: 'Real-time tracking of security behaviors',
      details:
        'Continuous assessment of how employees actually behave when it comes to security, providing insights beyond traditional training metrics.',
      capabilities: [
        'Email security practices monitoring',
        'File sharing behavior analysis',
        'Authentication pattern tracking',
        'Policy compliance measurement',
      ],
      icon: 'monitor',
      color: 'praxis-blue',
    },
    {
      title: 'Risk Scoring Engine',
      description: 'Dynamic calculations based on actual behaviors',
      details:
        'Predictive analytics that calculate risk scores based on real-world security behaviors, not simulated scenarios or survey responses.',
      capabilities: [
        'Individual and organizational risk scores',
        'Trend analysis and forecasting',
        'Risk factor identification',
        'Predictive modeling for security incidents',
      ],
      icon: 'scoring',
      color: 'praxis-gold',
    },
    {
      title: 'Compliance Reporting',
      description: 'Automated documentation and reporting',
      details:
        'Evidence-based behavioral proof for audits, compliance requirements, and regulatory frameworks with automated report generation.',
      capabilities: [
        'Automated compliance documentation',
        'Evidence-based behavioral proof',
        'Regulatory framework alignment',
        'Audit-ready reports and dashboards',
      ],
      icon: 'compliance',
      color: 'praxis-pine',
    },
    {
      title: 'Executive Dashboards',
      description: 'Board-ready summaries and KPI tracking',
      details:
        'High-level executive dashboards that translate security behaviors into business impact metrics and ROI calculations.',
      capabilities: [
        'Board-ready executive summaries',
        'ROI and business impact metrics',
        'KPI tracking and benchmarking',
        'Strategic security insights',
      ],
      icon: 'dashboard',
      color: 'praxis-brick',
    },
    {
      title: 'Trend Analysis',
      description: 'Predictive analytics for future risk assessment',
      details:
        'Advanced analytics that identify trends, predict future security culture changes, and recommend proactive interventions.',
      capabilities: [
        'Historical trend analysis',
        'Predictive risk modeling',
        'Security culture forecasting',
        'Intervention recommendations',
      ],
      icon: 'trends',
      color: 'praxis-sky',
    },
    {
      title: 'Alert System',
      description: 'Intelligent alerting with automated workflows',
      details:
        'Smart alerting system that identifies significant behavioral changes and triggers automated workflows for security teams.',
      capabilities: [
        'Intelligent behavioral alerts',
        'Automated workflow triggers',
        'Escalation procedures',
        'Integration with security tools',
      ],
      icon: 'alerts',
      color: 'praxis-tan',
    },
  ];

  return (
    <section
      className={`py-20 bg-praxis-white ${className}`}
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id="features-heading" className="h2 text-praxis-dark-blue mb-6">
              Platform Features &amp; Capabilities
            </h2>
            <p className="body-large text-praxis-brown max-w-4xl mx-auto">
              Comprehensive behavioral security monitoring platform designed for
              enterprise environments and regulatory compliance requirements
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-xl p-8 shadow-lg border border-praxis-gray hover:shadow-xl transition-all group"
              >
                {/* Feature Icon */}
                <div className="mb-6">
                  <div
                    className={`
                    w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform
                    ${feature.color === 'praxis-blue' ? 'bg-praxis-blue-100' : ''}
                    ${feature.color === 'praxis-gold' ? 'bg-praxis-gold-100' : ''}
                    ${feature.color === 'praxis-pine' ? 'bg-praxis-pine-100' : ''}
                    ${feature.color === 'praxis-brick' ? 'bg-praxis-brick-100' : ''}
                    ${feature.color === 'praxis-sky' ? 'bg-praxis-sky-100' : ''}
                    ${feature.color === 'praxis-tan' ? 'bg-praxis-tan-100' : ''}
                  `}
                  >
                    <div
                      className={`
                      w-10 h-10 rounded-full
                      ${feature.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                      ${feature.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                      ${feature.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                      ${feature.color === 'praxis-brick' ? 'bg-praxis-brick' : ''}
                      ${feature.color === 'praxis-sky' ? 'bg-praxis-sky' : ''}
                      ${feature.color === 'praxis-tan' ? 'bg-praxis-tan' : ''}
                    `}
                    ></div>
                  </div>
                </div>

                {/* Feature Title */}
                <h3 className="h4 text-praxis-dark-blue mb-3 text-center">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="body-base text-praxis-brown mb-4 text-center">
                  {feature.description}
                </p>

                {/* Feature Details */}
                <p className="body-small text-praxis-black mb-6 text-center">
                  {feature.details}
                </p>

                {/* Feature Capabilities */}
                <div className="space-y-3">
                  <h4 className="h6 text-praxis-dark-blue mb-3">
                    Key Capabilities:
                  </h4>
                  {feature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start gap-3">
                      <div
                        className={`
                        w-2 h-2 rounded-full mt-2 flex-shrink-0
                        ${feature.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                        ${feature.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                        ${feature.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                        ${feature.color === 'praxis-brick' ? 'bg-praxis-brick' : ''}
                        ${feature.color === 'praxis-sky' ? 'bg-praxis-sky' : ''}
                        ${feature.color === 'praxis-tan' ? 'bg-praxis-tan' : ''}
                      `}
                      ></div>
                      <p className="body-small text-praxis-black">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Platform Integration */}
          <div className="bg-praxis-tan-50 rounded-xl p-8 text-center">
            <h3 className="h3 text-praxis-dark-blue mb-6">
              Seamless Enterprise Integration
            </h3>

            <p className="body-large text-praxis-brown mb-8 max-w-3xl mx-auto">
              Praxis Navigator integrates with your existing security stack and
              enterprise tools to provide a unified view of your security
              culture and behavioral risk posture.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-blue mb-2">
                  API
                </div>
                <p className="body-small text-praxis-brown">
                  REST API Integration
                </p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-gold mb-2">
                  SSO
                </div>
                <p className="body-small text-praxis-brown">
                  Single Sign-On Ready
                </p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-pine mb-2">
                  SIEM
                </div>
                <p className="body-small text-praxis-brown">
                  Security Tool Integration
                </p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-brick mb-2">
                  BI
                </div>
                <p className="body-small text-praxis-brown">
                  Business Intelligence
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/integrations"
                className="btn-outline hover-lift active-scale focus-ring"
                aria-label="Learn more about platform integrations and API documentation"
              >
                View Integrations
              </a>
              <a
                href="/demo"
                className="btn-primary hover-lift active-scale focus-ring"
                aria-label="Request a demo to see platform features in action"
              >
                See Features Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
