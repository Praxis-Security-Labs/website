import React from 'react';
import { sections } from '../../i18n/sections';

interface AuthoritySectionProps {
  className?: string;
  language?: 'en' | 'no';
}

export const AuthoritySection: React.FC<AuthoritySectionProps> = ({
  className = '',
  language = 'en',
}) => {
  const content = sections[language].authority;

  return (
    <section
      className={`py-20 bg-praxis-white ${className}`}
      aria-labelledby="authority-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Authority Headline */}
          <h2 id="authority-heading" className="h2 text-praxis-dark-blue mb-8">
            {content.headline}
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
                  {content.badge}
                </div>
              </div>
            </div>

            {/* Authority Content */}
            <div className="lg:w-2/3 text-left">
              <h3 className="h3 text-praxis-dark-blue mb-6">
                {content.subheadline}
              </h3>

              {/* Primary Authority Indicators */}
              <div className="space-y-4 mb-8">
                {content.credentials.map((credential, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 ${
                        index === 0
                          ? 'bg-praxis-gold'
                          : index === 1
                            ? 'bg-praxis-blue'
                            : index === 2
                              ? 'bg-praxis-pine'
                              : 'bg-praxis-brick'
                      } rounded-full flex-shrink-0 mt-1`}
                    ></div>
                    <div>
                      <h4 className="h6 text-praxis-dark-blue">
                        {credential.title}
                      </h4>
                      <p className="body-base text-praxis-brown">
                        {credential.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Authority Statement */}
              <div className="bg-praxis-sky-50 p-6 rounded-lg mb-8">
                <blockquote className="body-large text-praxis-pine italic">
                  &ldquo;{content.quote}&rdquo;
                </blockquote>
                <cite className="block mt-4 font-heading text-praxis-dark-blue uppercase text-sm tracking-brand-wide">
                  {content.quoteCitation}
                </cite>
              </div>

              {/* Learn More CTA */}
              <div className="text-center lg:text-left">
                <a
                  href={`/${language === 'no' ? 'no/' : ''}about/kai-roer`}
                  className="btn-outline hover-lift active-scale focus-ring"
                  aria-label="Learn more about Kai Roer's research and background"
                >
                  {content.ctaLearnMore}
                </a>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-praxis-gray">
            <h3 className="h4 text-praxis-dark-blue mb-8">
              {content.trustIndicatorsHeadline}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
              {content.trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`h-12 ${
                      index === 0
                        ? 'bg-praxis-gold-100'
                        : index === 1
                          ? 'bg-praxis-blue-100'
                          : index === 2
                            ? 'bg-praxis-pine-100'
                            : 'bg-praxis-tan-100'
                    } rounded-lg flex items-center justify-center mb-2`}
                  >
                    <span className="font-heading text-praxis-dark-blue text-sm tracking-brand-wide">
                      {indicator.name}
                    </span>
                  </div>
                  <p className="caption">{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
