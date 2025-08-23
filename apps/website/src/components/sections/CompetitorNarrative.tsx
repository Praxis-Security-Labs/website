import React, { useState } from 'react';

interface NarrativeSection {
  id: string;
  title: string;
  content: string;
  highlight?: 'advantage' | 'neutral' | 'consideration';
  expandable?: boolean;
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

interface CompetitorNarrativeProps {
  competitorName: string;
  competitorLogo: string;
  introduction: string;
  sections: NarrativeSection[];
  conclusion: string;
  language?: 'en' | 'no';
  className?: string;
}

export const CompetitorNarrative: React.FC<CompetitorNarrativeProps> = ({
  competitorName,
  competitorLogo,
  introduction,
  sections,
  conclusion,
  language = 'en',
  className = '',
}) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );

  const content = {
    en: {
      readMore: 'Read More',
      readLess: 'Read Less',
      keyDifferences: 'Key Differences',
      customerPerspective: 'Customer Perspective',
      lastUpdated: `Last updated: ${new Date().toLocaleDateString()}`,
      disclaimer: `This comparison is based on publicly available information. We strive for accuracy and fairness in our competitive analysis.`,
    },
    no: {
      readMore: 'Les Mer',
      readLess: 'Les Mindre',
      keyDifferences: 'Viktige Forskjeller',
      customerPerspective: 'Kundeperspektiv',
      lastUpdated: `Sist oppdatert: ${new Date().toLocaleDateString()}`,
      disclaimer: `Denne sammenligningen er basert på offentlig tilgjengelig informasjon. Vi streber etter nøyaktighet og rettferdighet i vår konkurranseanalyse.`,
    },
  };

  const t = content[language];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);

    // Track section expansion analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'competitor_narrative_expand', {
        section_id: sectionId,
        competitor: competitorName,
        expanded: !expandedSections.has(sectionId),
        language: language,
        page_location: window.location.href,
      });
    }
  };

  const getHighlightStyle = (highlight?: string) => {
    switch (highlight) {
      case 'advantage':
        return 'border-l-4 border-praxis-accent bg-praxis-accent bg-opacity-5';
      case 'consideration':
        return 'border-l-4 border-yellow-500 bg-yellow-50';
      case 'neutral':
      default:
        return 'border-l-4 border-praxis-blue-200 bg-praxis-blue-50';
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <img
            src="/images/praxis-logo.svg"
            alt="Praxis Navigator"
            className="h-8 w-auto"
          />
          <span className="text-2xl font-heading font-bold text-praxis-dark-blue">
            vs
          </span>
          <img
            src={competitorLogo}
            alt={`${competitorName} logo`}
            className="h-8 w-auto"
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-praxis-dark-blue">
          {t.keyDifferences}
        </h2>
      </div>

      {/* Introduction */}
      <div className="bg-white rounded-xl border border-praxis-blue-200 p-8">
        <p className="text-lg text-praxis-blue-700 leading-relaxed">
          {introduction}
        </p>
      </div>

      {/* Narrative Sections */}
      <div className="space-y-6">
        {sections.map(section => {
          const isExpanded = expandedSections.has(section.id);
          const shouldShowExpansion =
            section.expandable && section.content.length > 300;

          return (
            <div
              key={section.id}
              className={`rounded-xl p-6 ${getHighlightStyle(section.highlight)}`}
            >
              <h3 className="text-xl font-heading font-bold text-praxis-dark-blue mb-4">
                {section.title}
              </h3>

              <div className="prose prose-lg max-w-none">
                <p className="text-praxis-blue-700 leading-relaxed">
                  {shouldShowExpansion && !isExpanded
                    ? `${section.content.substring(0, 300)}...`
                    : section.content}
                </p>

                {shouldShowExpansion && (
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="mt-4 text-praxis-accent hover:text-praxis-accent-dark font-medium inline-flex items-center transition-colors"
                  >
                    {isExpanded ? t.readLess : t.readMore}
                    <svg
                      className={`ml-2 w-4 h-4 transform transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {/* Testimonial */}
              {section.testimonial && (isExpanded || !shouldShowExpansion) && (
                <div className="mt-6 p-4 bg-white bg-opacity-60 rounded-lg border border-praxis-blue-200">
                  <div className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-praxis-accent flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                    <div>
                      <p className="text-praxis-dark-blue font-medium italic leading-relaxed">
                        &ldquo;{section.testimonial.quote}&rdquo;
                      </p>
                      <div className="mt-2 text-sm text-praxis-blue-600">
                        <span className="font-semibold">
                          {section.testimonial.author}
                        </span>
                        <span className="mx-1">•</span>
                        <span>{section.testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Conclusion */}
      <div className="bg-gradient-to-r from-praxis-accent to-praxis-accent-dark rounded-xl p-8 text-white">
        <h3 className="text-2xl font-heading font-bold mb-4">
          {t.customerPerspective}
        </h3>
        <p className="text-lg leading-relaxed opacity-95">{conclusion}</p>
      </div>

      {/* Disclaimer */}
      <div className="bg-praxis-blue-50 rounded-lg p-4 border border-praxis-blue-200">
        <div className="text-center space-y-2">
          <p className="text-xs text-praxis-blue-600">{t.lastUpdated}</p>
          <p className="text-xs text-praxis-blue-600">{t.disclaimer}</p>
        </div>
      </div>
    </div>
  );
};

export default CompetitorNarrative;
