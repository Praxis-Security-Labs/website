import React from 'react';

interface AuthoritySectionProps {
  className?: string;
  language?: 'en' | 'no';
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({
  className = '',
  language = 'en',
}) => {
  return (
    <section
      className={`py-20 bg-praxis-white ${className}`}
      aria-labelledby="authority-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Authority Headline */}
          <h2 id="authority-heading" className="h2 text-praxis-dark-blue mb-8">
            {language === 'no'
              ? 'Bygget på 25+ År med Sikkerhetskultur Forskning'
              : 'Built on 25+ Years of Security Culture Research'}
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Kai Roer Professional Headshot */}
            <div className="lg:w-1/3 flex-shrink-0">
              <div className="relative">
                <img
                  src="/images/kai-roer-professional.jpg"
                  alt="Kai Roer, Creator of the Security Culture Framework and Co-author of The Security Culture Playbook"
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-full mx-auto shadow-xl object-cover"
                  width="256"
                  height="256"
                />
                {/* Authority Badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-praxis-gold text-praxis-dark-blue px-4 py-2 rounded-full font-heading uppercase text-sm tracking-brand-wide">
                  Framework Creator
                </div>
              </div>
            </div>

            {/* Authority Content */}
            <div className="lg:w-2/3 text-left">
              <h3 className="h3 text-praxis-dark-blue mb-6">
                The Authority Behind the Innovation
              </h3>

              {/* Primary Authority Indicators */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-praxis-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue">
                      Security Culture Framework Creator
                    </h4>
                    <p className="body-base text-praxis-brown">
                      Adopted by ENISA for European Union-wide security culture
                      guidelines
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-praxis-blue rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue">
                      Co-author, &ldquo;The Security Culture Playbook&rdquo;
                    </h4>
                    <p className="body-base text-praxis-brown">
                      Published by Wiley (2022) - The definitive guide to
                      building security culture
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-praxis-pine rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue">
                      Former Chief Research Officer, KnowBe4
                    </h4>
                    <p className="body-base text-praxis-brown">
                      Led global research initiatives for the world&apos;s
                      largest security awareness platform
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-praxis-brick rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue">
                      Founder, CLTRe (Acquired by KnowBe4)
                    </h4>
                    <p className="body-base text-praxis-brown">
                      Created the world&apos;s first security culture
                      measurement platform
                    </p>
                  </div>
                </div>
              </div>

              {/* Authority Statement */}
              <div className="bg-praxis-sky-50 p-6 rounded-lg mb-8">
                <blockquote className="body-large text-praxis-pine italic">
                  &ldquo;After decades of research, I realized we&apos;ve been
                  measuring the wrong things. Training completion doesn&apos;t
                  equal behavior change. Praxis Navigator finally measures what
                  actually matters - how people behave when it comes to
                  security.&rdquo;
                </blockquote>
                <cite className="block mt-4 font-heading text-praxis-dark-blue uppercase text-sm tracking-brand-wide">
                  — Kai Roer
                </cite>
              </div>

              {/* Learn More CTA */}
              <div className="text-center lg:text-left">
                <a
                  href="/about/kai-roer"
                  className="btn-outline hover-lift active-scale focus-ring"
                  aria-label="Learn more about Kai Roer's research and background"
                >
                  Learn More About Kai&apos;s Research
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-praxis-gray">
            <h3 className="h4 text-praxis-dark-blue mb-8">
              Recognized Industry Authority
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              <div className="text-center">
                <div className="h-12 bg-praxis-gold-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                    ENISA
                  </span>
                </div>
                <p className="caption">Framework Adoption</p>
              </div>

              <div className="text-center">
                <div className="h-12 bg-praxis-blue-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                    WILEY
                  </span>
                </div>
                <p className="caption">Published Author</p>
              </div>

              <div className="text-center">
                <div className="h-12 bg-praxis-pine-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                    KNOWBE4
                  </span>
                </div>
                <p className="caption">Former CRO</p>
              </div>

              <div className="text-center">
                <div className="h-12 bg-praxis-tan-100 rounded-lg flex items-center justify-center mb-2">
                  <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                    CSA
                  </span>
                </div>
                <p className="caption">Award Recipient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
