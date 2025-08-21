import React from 'react';

interface ProblemSolutionSectionProps {
  className?: string;
  language?: 'en' | 'no';
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  className = '',
  language = 'en',
}) => {
  return (
    <section
      className={`py-20 bg-praxis-tan-50 ${className}`}
      aria-labelledby="problem-solution-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              id="problem-solution-heading"
              className="h2 text-praxis-dark-blue mb-6"
            >
              {language === 'no'
                ? 'Sikkerhetsopplæring Målegapet'
                : 'The Security Training Measurement Gap'}
            </h2>
            <p className="body-large text-praxis-brown max-w-3xl mx-auto">
              {language === 'no'
                ? 'Tradisjonelle sikkerhetsverktøy måler feil ting. Det er på tide å måle det som faktisk betyr noe.'
                : "Traditional security tools measure the wrong things. It's time to measure what actually matters."}
            </p>
          </div>

          {/* Current State vs Solution Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Current State - Problems */}
            <div className="bg-praxis-white rounded-xl p-8 shadow-lg border-l-4 border-praxis-brick">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-praxis-brick-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-praxis-brick rounded-full"></div>
                </div>
                <h3 className="h3 text-praxis-dark-blue">Current State</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-praxis-brick text-xl">❌</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Training Completion Focus
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Organizations measure who completed training, not if
                      behaviors changed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-praxis-brick text-xl">❌</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Periodic Assessments
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Annual phishing tests and surveys provide outdated
                      snapshots
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-praxis-brick text-xl">❌</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Simulated Scenarios
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Artificial testing doesn&apos;t reflect real-world
                      security behaviors
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-praxis-brick text-xl">❌</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      No ROI Evidence
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Cannot prove training investment reduces actual security
                      risks
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-praxis-brick-50 rounded-lg">
                <p className="body-small text-praxis-brick font-heading uppercase tracking-brand-wide">
                  Result: Blind spots in security posture and unproven training
                  ROI
                </p>
              </div>
            </div>

            {/* Solution State */}
            <div className="bg-praxis-white rounded-xl p-8 shadow-lg border-l-4 border-praxis-gold">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-praxis-gold-100 rounded-full flex items-center justify-center mr-4">
                  <div className="w-6 h-6 bg-praxis-gold rounded-full"></div>
                </div>
                <h3 className="h3 text-praxis-dark-blue">Praxis Navigator</h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <span className="text-praxis-gold text-xl">✓</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Behavioral Measurement
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Track actual security behaviors through Microsoft Graph
                      API
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-praxis-gold text-xl">✓</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Continuous Monitoring
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Real-time insights into security culture changes and
                      improvements
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-praxis-gold text-xl">✓</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Real-World Data
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Monitor authentic workplace behaviors without disrupting
                      workflows
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-praxis-gold text-xl">✓</span>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      Measurable ROI
                    </h4>
                    <p className="body-small text-praxis-brown">
                      Quantify training effectiveness and demonstrate business
                      impact
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-praxis-gold-50 rounded-lg">
                <p className="body-small text-praxis-brown font-heading uppercase tracking-brand-wide">
                  Result: Evidence-based security culture improvement and proven
                  ROI
                </p>
              </div>
            </div>
          </div>

          {/* Microsoft Graph API Differentiator */}
          <div className="bg-praxis-sky-50 rounded-xl p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="h3 text-praxis-dark-blue mb-6">
                The Microsoft Graph API Advantage
              </h3>

              <p className="body-large text-praxis-pine mb-8">
                Unlike traditional SAT platforms, Praxis Navigator integrates
                directly with your Microsoft 365 environment to monitor actual
                security behaviors without disrupting employee workflows.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-praxis-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-praxis-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-praxis-blue rounded-full"></div>
                  </div>
                  <h4 className="h6 text-praxis-dark-blue mb-3">
                    No Workflow Disruption
                  </h4>
                  <p className="body-small text-praxis-brown">
                    Passive monitoring means employees work normally while you
                    gain security insights
                  </p>
                </div>

                <div className="bg-praxis-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-praxis-gold rounded-full"></div>
                  </div>
                  <h4 className="h6 text-praxis-dark-blue mb-3">
                    Enterprise Integration
                  </h4>
                  <p className="body-small text-praxis-brown">
                    Seamless integration with existing Microsoft 365 security
                    and compliance tools
                  </p>
                </div>

                <div className="bg-praxis-white rounded-lg p-6">
                  <div className="w-16 h-16 bg-praxis-pine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-praxis-pine rounded-full"></div>
                  </div>
                  <h4 className="h6 text-praxis-dark-blue mb-3">
                    Privacy-First Design
                  </h4>
                  <p className="body-small text-praxis-brown">
                    No PII collection, GDPR compliant, SOC2 Type II certified
                    data handling
                  </p>
                </div>
              </div>

              <div className="bg-praxis-white rounded-lg p-6 inline-block">
                <p className="body-base text-praxis-brown mb-4">
                  <strong className="text-praxis-dark-blue">
                    Technical Benefit:
                  </strong>
                  15-minute setup with OAuth 2.0, read-only permissions, and
                  zero infrastructure requirements.
                </p>
                <a
                  href="/product"
                  className="btn-secondary hover-lift active-scale focus-ring"
                  aria-label="Learn more about technical implementation and Microsoft Graph API integration"
                >
                  Learn More About Implementation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
