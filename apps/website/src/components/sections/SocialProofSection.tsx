import React from 'react';
import { sections } from '../../i18n/sections';

interface SocialProofSectionProps {
  className?: string;
  language?: 'en' | 'no';
}

export const SocialProofSection: React.FC<SocialProofSectionProps> = ({
  className = '',
  language = 'en',
}) => {
  const content = sections[language].socialProof;
  return (
    <section
      className={`py-20 bg-praxis-white ${className}`}
      aria-labelledby="social-proof-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Header */}
          <h2
            id="social-proof-heading"
            className="h2 text-praxis-dark-blue mb-6"
          >
            {content.headline}
          </h2>
          <p className="body-large text-praxis-brown mb-16 max-w-3xl mx-auto">
            {content.subtitle}
          </p>

          {/* Industry Recognition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Research Validation */}
            <div className="bg-praxis-sky-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-praxis-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-praxis-blue rounded-full"></div>
              </div>
              <h3 className="h3 text-praxis-dark-blue mb-4">
                Research Validation
              </h3>
              <p className="body-base text-praxis-pine mb-6">
                Security Culture Framework adopted by ENISA for EU-wide
                guidelines, validating the methodology behind Praxis
                Navigator&apos;s behavioral monitoring approach.
              </p>
              <div className="flex justify-center items-center space-x-4">
                <div className="bg-praxis-white px-4 py-2 rounded-lg">
                  <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                    ENISA APPROVED
                  </span>
                </div>
                <div className="bg-praxis-white px-4 py-2 rounded-lg">
                  <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                    EU GUIDELINES
                  </span>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-praxis-gold-50 rounded-xl p-8">
              <div className="w-16 h-16 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-praxis-gold rounded-full"></div>
              </div>
              <h3 className="h3 text-praxis-dark-blue mb-4">
                Industry Recognition
              </h3>
              <div className="space-y-4 mb-6">
                <div className="bg-praxis-white rounded-lg p-4">
                  <h4 className="h6 text-praxis-dark-blue mb-2">
                    Ron Knode Service Award
                  </h4>
                  <p className="body-small text-praxis-brown">
                    Cloud Security Alliance - Outstanding Contribution
                  </p>
                </div>
                <div className="bg-praxis-white rounded-lg p-4">
                  <h4 className="h6 text-praxis-dark-blue mb-2">
                    NCI Fellowship
                  </h4>
                  <p className="body-small text-praxis-brown">
                    National Cybersecurity Institute Recognition
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-praxis-tan-50 rounded-xl p-8 mb-16">
            <h3 className="h3 text-praxis-dark-blue mb-8">
              Enterprise Security Standards
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-praxis-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-praxis-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-praxis-blue rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-2">SOC2 Type II</h4>
                <p className="caption text-praxis-brown">Certified Compliant</p>
              </div>

              <div className="bg-praxis-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-praxis-gold rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-2">GDPR Ready</h4>
                <p className="caption text-praxis-brown">Privacy Compliant</p>
              </div>

              <div className="bg-praxis-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-praxis-pine-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-praxis-pine rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-2">ISO 27001</h4>
                <p className="caption text-praxis-brown">Security Standards</p>
              </div>

              <div className="bg-praxis-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-praxis-brick-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-praxis-brick rounded-full"></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-2">Zero Trust</h4>
                <p className="caption text-praxis-brown">Architecture Ready</p>
              </div>
            </div>
          </div>

          {/* Case Study Preview */}
          <div className="bg-praxis-white rounded-xl p-8 border-l-4 border-praxis-blue shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 text-left">
                <h3 className="h3 text-praxis-dark-blue mb-4">
                  Proven Results
                </h3>
                <blockquote className="body-large text-praxis-brown italic mb-6">
                  &ldquo;After implementing Praxis Navigator, we finally had
                  evidence-based data showing our security training
                  effectiveness. We reduced behavioral risk indicators by 47% in
                  six months and could prove ROI to the board.&rdquo;
                </blockquote>
                <cite className="body-base text-praxis-pine">
                  — Fortune 500 CISO (Case Study Available)
                </cite>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-praxis-blue-50 rounded-lg p-6 text-center">
                  <div className="text-4xl font-heading text-praxis-dark-blue mb-2">
                    47%
                  </div>
                  <p className="body-small text-praxis-pine">Risk Reduction</p>
                  <p className="caption text-praxis-brown">In 6 Months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-16 text-center">
            <h3 className="h4 text-praxis-dark-blue mb-6">
              Join Industry Leaders Measuring What Matters
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <a
                href="/product/demo"
                className="btn-accent btn-lg hover-lift active-scale focus-ring-gold flex-1"
                aria-label="Request a personalized demo to see proven results"
              >
                Request Demo
              </a>
              <a
                href="/trial-explainer"
                className="btn-secondary btn-lg hover-lift active-scale focus-ring flex-1"
                aria-label="Start your free trial"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
