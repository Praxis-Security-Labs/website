import React from 'react';

interface ProcessFlowSectionProps {
  className?: string;
}

export const ProcessFlowSection: React.FC<ProcessFlowSectionProps> = ({
  className = '',
}) => {
  const processSteps = [
    {
      number: '1',
      title: 'Connect to Microsoft Graph',
      description:
        'Secure OAuth 2.0 integration with read-only permissions to your Microsoft 365 environment',
      details: [
        'OAuth 2.0 authentication with Microsoft Azure AD',
        'Read-only API permissions for security and compliance',
        'Zero infrastructure requirements on your end',
        '15-minute setup with IT admin approval',
      ],
      icon: 'connection',
      color: 'praxis-blue',
    },
    {
      number: '2',
      title: 'Analyze Behaviors',
      description:
        'Continuous analysis of security-relevant behaviors across your Microsoft 365 ecosystem',
      details: [
        'Email security practices and threat response patterns',
        'File sharing behaviors and access control compliance',
        'Authentication patterns and multi-factor adoption',
        'Device compliance and security policy adherence',
      ],
      icon: 'analysis',
      color: 'praxis-gold',
    },
    {
      number: '3',
      title: 'Generate Insights',
      description:
        'Transform behavioral data into actionable security intelligence and executive reporting',
      details: [
        'Risk scoring based on actual behaviors vs. assumptions',
        'Trend analysis showing security culture improvements',
        'Compliance reporting with evidence-based documentation',
        'Executive dashboards with board-ready summaries',
      ],
      icon: 'insights',
      color: 'praxis-pine',
    },
  ];

  return (
    <section
      id="process-flow"
      className={`py-20 bg-praxis-white ${className}`}
      aria-labelledby="process-flow-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="process-flow-heading"
              className="h2 text-praxis-dark-blue mb-6"
            >
              How Microsoft Graph API Behavioral Monitoring Works
            </h2>
            <p className="body-large text-praxis-brown max-w-4xl mx-auto">
              Three simple steps to transform your Microsoft 365 environment
              into a comprehensive security behavior monitoring system
            </p>
          </div>

          {/* Process Flow Steps */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-praxis-gray-200"></div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div className="bg-praxis-white rounded-xl p-8 shadow-lg border border-praxis-gray hover:shadow-xl transition-all">
                    {/* Step Number Badge */}
                    <div
                      className={`
                      absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center text-white font-heading text-xl z-10
                      ${step.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                      ${step.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                      ${step.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                    `}
                    >
                      {step.number}
                    </div>

                    {/* Step Icon */}
                    <div className="mb-6 mt-4">
                      <div
                        className={`
                        w-20 h-20 rounded-full flex items-center justify-center mx-auto
                        ${step.color === 'praxis-blue' ? 'bg-praxis-blue-100' : ''}
                        ${step.color === 'praxis-gold' ? 'bg-praxis-gold-100' : ''}
                        ${step.color === 'praxis-pine' ? 'bg-praxis-pine-100' : ''}
                      `}
                      >
                        <div
                          className={`
                          w-10 h-10 rounded-full
                          ${step.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                          ${step.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                          ${step.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                        `}
                        ></div>
                      </div>
                    </div>

                    {/* Step Title */}
                    <h3 className="h4 text-praxis-dark-blue mb-4 text-center">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="body-base text-praxis-brown mb-6 text-center">
                      {step.description}
                    </p>

                    {/* Technical Details */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`
                            w-2 h-2 rounded-full mt-2 flex-shrink-0
                            ${step.color === 'praxis-blue' ? 'bg-praxis-blue' : ''}
                            ${step.color === 'praxis-gold' ? 'bg-praxis-gold' : ''}
                            ${step.color === 'praxis-pine' ? 'bg-praxis-pine' : ''}
                          `}
                          ></div>
                          <p className="body-small text-praxis-black">
                            {detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Benefits Summary */}
          <div className="mt-16 bg-praxis-sky-50 rounded-xl p-8 text-center">
            <h3 className="h3 text-praxis-dark-blue mb-6">
              Technical Advantages Over Traditional Security Tools
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-blue mb-2">
                  15min
                </div>
                <p className="body-small text-praxis-brown">Setup Time</p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-gold mb-2">
                  0
                </div>
                <p className="body-small text-praxis-brown">Infrastructure</p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-pine mb-2">
                  24/7
                </div>
                <p className="body-small text-praxis-brown">Monitoring</p>
              </div>
              <div className="bg-praxis-white rounded-lg p-6">
                <div className="text-2xl font-heading text-praxis-brick mb-2">
                  SOC2
                </div>
                <p className="body-small text-praxis-brown">Compliant</p>
              </div>
            </div>

            <p className="body-base text-praxis-pine mb-6">
              Unlike traditional security tools that require complex
              infrastructure, disruptive testing, or periodic assessments,
              Praxis Navigator leverages your existing Microsoft 365 investment
              to provide continuous, real-world security behavior insights.
            </p>

            <a
              href="#integration-details"
              className="btn-secondary hover-lift active-scale focus-ring"
              aria-label="Learn more about Microsoft Graph API integration details"
            >
              Explore Integration Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
