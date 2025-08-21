import React from 'react';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`relative min-h-screen bg-gradient-to-b from-praxis-dark-blue to-praxis-blue flex items-center ${className}`}
      role="banner"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6 py-20 text-center">
        {/* Main Headline */}
        <h1
          id="hero-heading"
          className="h1 text-praxis-white mb-6 max-w-4xl mx-auto leading-tight"
        >
          Measure What Matters: Actual Security Behaviors
        </h1>

        {/* Authority Subheadline */}
        <h2 className="h3 text-praxis-gold mb-8 max-w-3xl mx-auto">
          By Kai Roer, Creator of the Security Culture Framework adopted by
          ENISA
        </h2>

        {/* Problem Statement */}
        <p className="body-large text-praxis-white mb-12 max-w-4xl mx-auto opacity-90">
          Organizations invest heavily in Security Awareness Training but
          can&apos;t measure behavioral changes. Stop guessing. Start measuring.
          Get evidence-based insights into your security culture with Microsoft
          Graph API behavioral monitoring.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-lg mx-auto">
          <a
            href="/demo"
            className="btn-accent btn-lg hover-lift active-scale focus-ring-gold flex-1"
            aria-label="Schedule a demo to see how Praxis Navigator works"
          >
            Schedule Demo
          </a>
          <a
            href="/trial"
            className="btn-primary btn-lg hover-lift active-scale focus-ring flex-1"
            aria-label="Start your free trial of Praxis Navigator"
          >
            Start Free Trial
          </a>
        </div>

        {/* Product Preview Section */}
        <div className="bg-praxis-white rounded-xl p-8 shadow-2xl max-w-5xl mx-auto">
          <h3 className="h4 text-praxis-dark-blue mb-6">
            Transform Security Training Into Measurable Business Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Highlight 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-praxis-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-praxis-blue rounded-full"></div>
              </div>
              <h4 className="h6 text-praxis-dark-blue mb-2">
                Behavioral Analytics
              </h4>
              <p className="body-small text-praxis-brown">
                Real-time monitoring of actual security behaviors through
                Microsoft Graph API
              </p>
            </div>

            {/* Feature Highlight 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-praxis-gold rounded-full"></div>
              </div>
              <h4 className="h6 text-praxis-dark-blue mb-2">Risk Scoring</h4>
              <p className="body-small text-praxis-brown">
                Dynamic risk calculations based on actual behaviors, not
                assumptions
              </p>
            </div>

            {/* Feature Highlight 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-praxis-tan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-praxis-brown rounded-full"></div>
              </div>
              <h4 className="h6 text-praxis-dark-blue mb-2">
                Compliance Tracking
              </h4>
              <p className="body-small text-praxis-brown">
                Evidence-based documentation for audits and regulatory
                requirements
              </p>
            </div>

            {/* Feature Highlight 4 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-praxis-pine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-praxis-pine rounded-full"></div>
              </div>
              <h4 className="h6 text-praxis-dark-blue mb-2">
                Executive Reporting
              </h4>
              <p className="body-small text-praxis-brown">
                Board-ready summaries showing security program ROI and business
                impact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-praxis-gold opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-praxis-sky opacity-10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
