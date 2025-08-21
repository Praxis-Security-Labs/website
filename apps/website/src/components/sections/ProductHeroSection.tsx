import React from 'react';

interface ProductHeroSectionProps {
  className?: string;
}

export const ProductHeroSection: React.FC<ProductHeroSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      className={`py-20 bg-gradient-to-b from-praxis-blue to-praxis-sky ${className}`}
      aria-labelledby="product-hero-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 id="product-hero-heading" className="h1 text-praxis-white mb-8">
            Microsoft Graph API Behavioral Security Monitoring
          </h1>

          {/* Subheadline */}
          <h2 className="h3 text-praxis-gold mb-8">
            Continuous measurement of actual security behaviors without
            disrupting employee workflows
          </h2>

          {/* Key Value Proposition */}
          <p className="body-large text-praxis-white mb-12 max-w-3xl mx-auto opacity-90">
            Praxis Navigator integrates directly with your Microsoft 365
            environment to provide passive, continuous monitoring of security
            behaviors. No simulations, no disruptions—just real-world data that
            shows how your organization actually behaves when it comes to
            security.
          </p>

          {/* Primary CTA */}
          <div className="mb-16">
            <a
              href="#process-flow"
              className="btn-accent btn-lg hover-lift active-scale focus-ring-gold"
              aria-label="Learn how Microsoft Graph API behavioral monitoring works"
            >
              See How It Works
            </a>
          </div>

          {/* Key Benefits Preview */}
          <div className="bg-praxis-white rounded-xl p-8 shadow-2xl">
            <h3 className="h4 text-praxis-dark-blue mb-8">
              Why Microsoft Graph API Changes Everything
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-praxis-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-praxis-blue rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  Real-World Data
                </h4>
                <p className="body-base text-praxis-brown">
                  Monitor actual workplace behaviors from your existing
                  Microsoft 365 environment
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-praxis-gold rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  Zero Disruption
                </h4>
                <p className="body-base text-praxis-brown">
                  Passive monitoring means employees work normally while you
                  gain security insights
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="w-16 h-16 bg-praxis-pine-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-praxis-pine rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-3">
                  Enterprise Ready
                </h4>
                <p className="body-base text-praxis-brown">
                  SOC2 Type II, GDPR compliant with enterprise-grade security
                  architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-40 h-40 bg-praxis-gold opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-praxis-sky opacity-10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};
