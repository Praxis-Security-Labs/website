/**
 * SEO utility functions for Praxis Navigator website
 * Provides consistent meta tag generation, structured data, and keyword optimization
 */

// Target keyword configuration for SEO optimization
export const SEO_KEYWORDS = {
  primary: [
    'security behavior monitoring',
    'behavioral security analytics',
    'Microsoft Graph security',
    'security culture assessment',
    'SAT effectiveness measurement',
  ],
  secondary: [
    'security training ROI',
    'cybersecurity awareness',
    'security metrics platform',
    'behavioral monitoring platform',
    'enterprise security culture',
    'continuous security assessment',
  ],
  longTail: [
    'how to measure security training effectiveness',
    'Microsoft Graph API security monitoring',
    'security awareness training ROI measurement',
    'behavioral security monitoring platform',
    'continuous security culture assessment',
  ],
};

// Meta tag generation utilities
export interface SEOMetaTags {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Generate optimized title tag with keyword inclusion
 * Formula: [Primary Keyword] | [Authority Indicator] | Praxis Navigator
 */
export function generateTitleTag(
  primaryKeyword: string,
  authorityIndicator?: string
): string {
  const baseTitle = 'Praxis Navigator';

  if (authorityIndicator) {
    const fullTitle = `${primaryKeyword} | ${authorityIndicator} | ${baseTitle}`;
    return fullTitle.length > 60
      ? `${primaryKeyword} | ${baseTitle}`
      : fullTitle;
  }

  return `${primaryKeyword} | ${baseTitle}`;
}

/**
 * Generate optimized meta description with keyword inclusion and CTA
 * Target: Under 160 characters with primary keyword and conversion focus
 */
export function generateMetaDescription(
  primaryKeyword: string,
  valueProposition: string,
  cta: string = 'Start free trial'
): string {
  const description = `${primaryKeyword}: ${valueProposition}. ${cta}.`;

  return description.length > 160
    ? `${primaryKeyword}: ${valueProposition}.`
    : description;
}

/**
 * Generate keyword-optimized alt text for images
 * Balances SEO keywords with accessibility requirements
 */
export function generateAltText(
  imageDescription: string,
  relevantKeyword?: string,
  context?: 'hero' | 'product' | 'team' | 'diagram'
): string {
  if (!relevantKeyword) {
    return imageDescription;
  }

  const contextualPhrases = {
    hero: 'illustrating',
    product: 'showing',
    team: 'featuring',
    diagram: 'explaining',
  };

  const contextPhrase = context ? contextualPhrases[context] : 'showing';

  return `${imageDescription} ${contextPhrase} ${relevantKeyword}`;
}

/**
 * Create comprehensive structured data for different page types
 */
export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Praxis Security Labs',
    url: 'https://praxisnavigator.io',
    logo: 'https://praxisnavigator.io/images/praxis-navigator-logo.png',
    description:
      'Enterprise behavioral security monitoring platform using Microsoft Graph API for continuous security culture assessment.',
    founder: {
      '@type': 'Person',
      name: 'Kai Roer',
      jobTitle: 'Security Culture Expert',
      url: 'https://praxisnavigator.io/about/kai-roer',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@praxisnavigator.io',
      availableLanguage: ['English', 'Norwegian'],
    },
    sameAs: [
      'https://www.linkedin.com/company/praxis-navigator',
      'https://twitter.com/praxisnavigator',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NO',
    },
  };
}

export function createPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Kai Roer',
    jobTitle: 'Security Culture Pioneer & Behavioral Monitoring Expert',
    description:
      'Creator of the Security Culture Framework adopted by ENISA, co-author of "The Security Culture Playbook", and pioneer in behavioral security monitoring.',
    url: 'https://praxisnavigator.io/about/kai-roer',
    image: 'https://praxisnavigator.io/images/team/kai-roer-headshot.jpg',
    sameAs: [
      'https://www.linkedin.com/in/kairoer',
      'https://twitter.com/kairoer',
      'https://www.securityculturebook.com',
    ],
    knowsAbout: [
      'Security Culture',
      'Behavioral Security Monitoring',
      'Cybersecurity Awareness',
      'Security Training Effectiveness',
      'Microsoft Graph Security',
    ],
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'University of Stavanger',
      },
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Praxis Security Labs',
    },
    author: [
      {
        '@type': 'Book',
        name: 'The Security Culture Playbook',
        isbn: '978-1119875085',
      },
      {
        '@type': 'Book',
        name: 'Build a Security Culture',
      },
    ],
  };
}

export function createSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Praxis Navigator',
    applicationCategory: 'Security Software',
    applicationSubCategory: 'Behavioral Security Monitoring',
    operatingSystem: 'Microsoft 365',
    description:
      'Enterprise behavioral security monitoring platform that uses Microsoft Graph API to provide continuous assessment of security behaviors without disrupting workflows.',
    url: 'https://praxisnavigator.io/product',
    screenshot:
      'https://praxisnavigator.io/images/product/dashboard-screenshot.png',
    downloadUrl: 'https://azuremarketplace.microsoft.com/praxis-navigator',
    installUrl: 'https://azuremarketplace.microsoft.com/praxis-navigator',
    author: createPersonSchema(),
    publisher: createOrganizationSchema(),
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Free trial available through Azure Marketplace',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Microsoft Graph API Integration',
      'Behavioral Security Monitoring',
      'Risk Scoring Engine',
      'Compliance Reporting',
      'Executive Dashboards',
      'Trend Analysis & Forecasting',
    ],
    requirements: 'Microsoft 365 E3/E5 License, Azure AD Integration',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '127',
    },
  };
}

/**
 * Create breadcrumb structured data for navigation hierarchy
 */
export function createBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Validate and optimize keyword density in content
 * Target: 1-2% primary keywords, 0.5-1% secondary keywords
 */
export function analyzeKeywordDensity(
  content: string,
  keywords: string[]
): {
  keyword: string;
  count: number;
  density: number;
  recommendation: 'optimal' | 'increase' | 'decrease';
}[] {
  const words = content.toLowerCase().split(/\s+/).length;

  return keywords.map(keyword => {
    const keywordRegex = new RegExp(keyword.toLowerCase(), 'g');
    const matches = content.toLowerCase().match(keywordRegex) || [];
    const count = matches.length;
    const density = (count / words) * 100;

    let recommendation: 'optimal' | 'increase' | 'decrease';
    if (density < 0.5) {
      recommendation = 'increase';
    } else if (density > 2) {
      recommendation = 'decrease';
    } else {
      recommendation = 'optimal';
    }

    return {
      keyword,
      count,
      density: Math.round(density * 100) / 100,
      recommendation,
    };
  });
}

/**
 * Generate internal linking suggestions based on content topics
 */
export function generateInternalLinks(content: string): Array<{
  anchor: string;
  url: string;
  relevantKeyword: string;
}> {
  const linkingOpportunities = [
    {
      trigger: /security culture|behavioral security|security behavior/i,
      anchor: 'security culture assessment',
      url: '/product',
      relevantKeyword: 'behavioral security monitoring',
    },
    {
      trigger: /kai roer|security expert|authority/i,
      anchor: 'Kai Roer',
      url: '/about/kai-roer',
      relevantKeyword: 'security culture expert',
    },
    {
      trigger: /microsoft graph|graph api|office 365/i,
      anchor: 'Microsoft Graph integration',
      url: '/product#integration-details',
      relevantKeyword: 'Microsoft Graph security',
    },
    {
      trigger: /sat effectiveness|training measurement|security training/i,
      anchor: 'SAT effectiveness measurement',
      url: '/',
      relevantKeyword: 'SAT effectiveness measurement',
    },
  ];

  return linkingOpportunities
    .filter(opportunity => opportunity.trigger.test(content))
    .map(opportunity => ({
      anchor: opportunity.anchor,
      url: opportunity.url,
      relevantKeyword: opportunity.relevantKeyword,
    }));
}

/**
 * Content cluster mapping for topical authority
 */
export const CONTENT_CLUSTERS = {
  'security-culture': {
    pillarPage: '/',
    supportingPages: ['/about/kai-roer', '/product'],
    keywords: ['security culture', 'behavioral security', 'security awareness'],
    internalLinks: [
      { from: '/', to: '/about/kai-roer', anchor: 'security culture expert' },
      {
        from: '/about/kai-roer',
        to: '/product',
        anchor: 'behavioral monitoring platform',
      },
    ],
  },
  'behavioral-monitoring': {
    pillarPage: '/product',
    supportingPages: ['/', '/about/kai-roer'],
    keywords: [
      'behavioral monitoring',
      'Microsoft Graph security',
      'continuous assessment',
    ],
    internalLinks: [
      { from: '/product', to: '/', anchor: 'security behavior challenges' },
      { from: '/', to: '/product', anchor: 'behavioral security monitoring' },
    ],
  },
  'sat-effectiveness': {
    pillarPage: '/',
    supportingPages: ['/product'],
    keywords: [
      'SAT effectiveness',
      'training measurement',
      'security training ROI',
    ],
    internalLinks: [
      { from: '/', to: '/product', anchor: 'measure training effectiveness' },
      { from: '/product', to: '/', anchor: 'traditional SAT limitations' },
    ],
  },
};

/**
 * Generate FAQ structured data for rich snippets
 */
export function createFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Create Article structured data for blog posts and resources
 */
export function createArticleSchema(article: {
  title: string;
  description: string;
  author?: string;
  publishedDate: string;
  modifiedDate?: string;
  image?: string;
  url: string;
  category?: string;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image:
      article.image ||
      'https://praxisnavigator.io/images/og-praxis-navigator-default.png',
    author: {
      '@type': 'Person',
      name: article.author || 'Kai Roer',
      url: 'https://praxisnavigator.io/about/kai-roer',
    },
    publisher: createOrganizationSchema(),
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    url: article.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    articleSection: article.category || 'Security Culture',
    keywords:
      article.keywords?.join(', ') || 'security culture, behavioral monitoring',
  };
}

/**
 * Create LocalBusiness structured data for location-based SEO
 */
export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://praxisnavigator.io/#business',
    name: 'Praxis Security Labs',
    description:
      'Leading provider of behavioral security monitoring solutions using Microsoft Graph API for enterprise security culture assessment.',
    url: 'https://praxisnavigator.io',
    logo: 'https://praxisnavigator.io/images/praxis-navigator-logo.png',
    image: 'https://praxisnavigator.io/images/praxis-labs-office.jpg',
    founder: createPersonSchema(),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NO',
      addressRegion: 'Rogaland',
      addressLocality: 'Stavanger',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contact@praxisnavigator.io',
        availableLanguage: ['English', 'Norwegian'],
        areaServed: ['Global', 'Europe', 'North America'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'sales@praxisnavigator.io',
        availableLanguage: ['English', 'Norwegian'],
        areaServed: ['Global'],
      },
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '58.9700',
        longitude: '5.7331',
      },
      geoRadius: '20000000', // Global service area
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Security Solutions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Behavioral Security Monitoring',
            description:
              'Continuous monitoring of security behaviors using Microsoft Graph API',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Security Culture Assessment',
            description:
              'Comprehensive evaluation of organizational security culture maturity',
          },
        },
      ],
    },
    sameAs: [
      'https://www.linkedin.com/company/praxis-navigator',
      'https://twitter.com/praxisnavigator',
    ],
    openingHours: 'Mo-Fr 09:00-17:00',
    priceRange: '$$',
  };
}

/**
 * Create WebSite structured data with search action
 */
export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://praxisnavigator.io/#website',
    name: 'Praxis Navigator',
    description:
      'Enterprise behavioral security monitoring platform using Microsoft Graph API for continuous security culture assessment.',
    url: 'https://praxisnavigator.io',
    publisher: createOrganizationSchema(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://praxisnavigator.io/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en-US', 'nb-NO'],
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: createOrganizationSchema(),
  };
}

/**
 * Create HowTo structured data for step-by-step guides
 */
export function createHowToSchema(howTo: {
  name: string;
  description: string;
  image?: string;
  estimatedCost?: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
    url?: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    image: howTo.image,
    estimatedCost: howTo.estimatedCost,
    totalTime: howTo.totalTime,
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };
}
