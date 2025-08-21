import React from 'react';
import { homepage } from '../../i18n/homepage';

interface HeroSectionProps {
  className?: string;
  language?: 'en' | 'no';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  className = '',
  language = 'en',
}) => {
  const content = homepage[language];

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
          {content.hero.headline}
        </h1>

        {/* Authority Subheadline */}
        <h2 className="h3 text-praxis-gold mb-8 max-w-3xl mx-auto">
          {content.hero.authority}
        </h2>

        {/* Problem Statement */}
        <p className="body-large text-praxis-white mb-12 max-w-4xl mx-auto opacity-90">
          {content.hero.problem}
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 max-w-lg mx-auto">
          <a
            href={`/${language === 'no' ? 'no/' : ''}demo`}
            className="btn-accent btn-lg hover-lift active-scale focus-ring-gold flex-1"
            aria-label={
              language === 'no'
                ? 'Bestill en demo for å se hvordan Praxis Navigator fungerer'
                : 'Schedule a demo to see how Praxis Navigator works'
            }
          >
            {content.hero.ctaPrimary}
          </a>
          <a
            href={`/${language === 'no' ? 'no/' : ''}trial`}
            className="btn-primary btn-lg hover-lift active-scale focus-ring flex-1"
            aria-label={
              language === 'no'
                ? 'Start din gratis prøveversjon av Praxis Navigator'
                : 'Start your free trial of Praxis Navigator'
            }
          >
            {content.hero.ctaSecondary}
          </a>
        </div>

        {/* Product Preview Section */}
        <div className="bg-praxis-white rounded-xl p-8 shadow-2xl max-w-5xl mx-auto">
          <h3 className="h4 text-praxis-dark-blue mb-6">
            {content.hero.features.title}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.hero.features.items.map((feature, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 ${
                    index === 0
                      ? 'bg-praxis-sky-100'
                      : index === 1
                        ? 'bg-praxis-gold-100'
                        : index === 2
                          ? 'bg-praxis-tan-100'
                          : 'bg-praxis-pine-100'
                  } rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <div
                    className={`w-8 h-8 ${
                      index === 0
                        ? 'bg-praxis-blue'
                        : index === 1
                          ? 'bg-praxis-gold'
                          : index === 2
                            ? 'bg-praxis-brown'
                            : 'bg-praxis-pine'
                    } rounded-full`}
                  ></div>
                </div>
                <h4 className="h6 text-praxis-dark-blue mb-2">
                  {feature.title}
                </h4>
                <p className="body-small text-praxis-brown">
                  {feature.description}
                </p>
              </div>
            ))}
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
