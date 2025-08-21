import React from 'react';

interface AboutHeroSectionProps {
  className?: string;
}

export const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({
  className = '',
}) => {
  return (
    <section
      className={`py-20 bg-gradient-to-b from-praxis-dark-blue to-praxis-blue ${className}`}
      aria-labelledby="about-hero-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 id="about-hero-heading" className="h1 text-praxis-white mb-8">
            About Kai Roer
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Large Professional Headshot */}
            <div className="lg:w-1/2 flex-shrink-0">
              <div className="relative">
                <img
                  src="/images/about/kai-roer-professional-large.jpg"
                  alt="Kai Roer, Security Culture Pioneer and Creator of the Security Culture Framework adopted by ENISA"
                  className="w-80 h-80 rounded-full mx-auto shadow-2xl object-cover border-4 border-praxis-gold"
                  width="320"
                  height="320"
                />
                {/* Authority Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-praxis-gold text-praxis-dark-blue px-6 py-3 rounded-full font-heading uppercase text-base tracking-brand-wide shadow-lg">
                  Security Culture Pioneer
                </div>
              </div>
            </div>

            {/* Authority Content */}
            <div className="lg:w-1/2 text-left text-praxis-white">
              <h2 className="h3 text-praxis-gold mb-6">
                Security Culture Pioneer &amp; Behavioral Monitoring Innovator
              </h2>

              <p className="body-large mb-6 opacity-90">
                With over 25 years of pioneering research in security culture
                and behavioral monitoring, Kai Roer is the world&apos;s leading
                authority on measuring and improving organizational security
                behaviors.
              </p>

              <p className="body-base mb-8 opacity-80">
                From creating the open-source Security Culture Framework adopted
                by ENISA for EU-wide guidelines to co-authoring &ldquo;The
                Security Culture Playbook&rdquo; (Wiley, 2022), Kai&apos;s work
                has fundamentally changed how organizations approach security
                culture measurement.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-praxis-dark-blue-700 p-4 rounded-lg">
                  <div className="text-2xl font-heading text-praxis-gold mb-1">
                    25+
                  </div>
                  <div className="text-sm text-praxis-white opacity-80">
                    Years Research
                  </div>
                </div>
                <div className="bg-praxis-dark-blue-700 p-4 rounded-lg">
                  <div className="text-2xl font-heading text-praxis-gold mb-1">
                    3
                  </div>
                  <div className="text-sm text-praxis-white opacity-80">
                    Published Books
                  </div>
                </div>
                <div className="bg-praxis-dark-blue-700 p-4 rounded-lg">
                  <div className="text-2xl font-heading text-praxis-gold mb-1">
                    ENISA
                  </div>
                  <div className="text-sm text-praxis-white opacity-80">
                    Framework Adopted
                  </div>
                </div>
                <div className="bg-praxis-dark-blue-700 p-4 rounded-lg">
                  <div className="text-2xl font-heading text-praxis-gold mb-1">
                    Global
                  </div>
                  <div className="text-sm text-praxis-white opacity-80">
                    Impact
                  </div>
                </div>
              </div>

              {/* Connection to Praxis Navigator */}
              <div className="bg-praxis-gold-50 p-4 rounded-lg mb-6">
                <p className="body-base text-praxis-dark-blue">
                  <strong>Research-to-Platform Evolution:</strong> Praxis
                  Navigator represents the culmination of Kai&apos;s decades of
                  research, translating theoretical frameworks into practical
                  measurement tools powered by Microsoft Graph API.
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
