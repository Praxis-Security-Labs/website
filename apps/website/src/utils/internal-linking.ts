/**
 * Advanced Internal Linking Architecture for SEO
 * Provides intelligent content clustering and link authority distribution
 */

// Content clusters for topical authority building
export const CONTENT_CLUSTERS = {
  'security-culture': {
    pillarPage: {
      url: '/',
      title: 'Security Culture Assessment & Behavioral Monitoring',
      keywords: [
        'security culture',
        'behavioral security',
        'security awareness',
      ],
    },
    supportingPages: [
      {
        url: '/about/kai-roer',
        title: 'Kai Roer - Security Culture Expert',
        keywords: ['kai roer', 'security culture expert', 'thought leader'],
      },
      {
        url: '/product',
        title: 'Praxis Navigator Platform',
        keywords: [
          'behavioral monitoring platform',
          'security culture assessment',
        ],
      },
      {
        url: '/resources/security-culture-framework',
        title: 'Security Culture Framework',
        keywords: ['security culture framework', 'culture assessment'],
      },
    ],
    internalLinks: [
      {
        from: '/',
        to: '/about/kai-roer',
        anchor: 'security culture expert Kai Roer',
        relevantKeyword: 'security culture expert',
      },
      {
        from: '/about/kai-roer',
        to: '/product',
        anchor: 'behavioral monitoring platform',
        relevantKeyword: 'behavioral security monitoring',
      },
      {
        from: '/product',
        to: '/',
        anchor: 'security culture challenges',
        relevantKeyword: 'security culture assessment',
      },
    ],
  },
  'behavioral-monitoring': {
    pillarPage: {
      url: '/product',
      title: 'Behavioral Security Monitoring Platform',
      keywords: [
        'behavioral monitoring',
        'Microsoft Graph security',
        'continuous assessment',
      ],
    },
    supportingPages: [
      {
        url: '/',
        title: 'Home - Security Behavior Monitoring',
        keywords: ['security behavior monitoring', 'behavioral analytics'],
      },
      {
        url: '/about/kai-roer',
        title: 'Kai Roer - Behavioral Security Pioneer',
        keywords: ['behavioral security pioneer', 'monitoring expert'],
      },
      {
        url: '/resources/microsoft-graph-integration',
        title: 'Microsoft Graph Integration Guide',
        keywords: ['Microsoft Graph security', 'graph api integration'],
      },
    ],
    internalLinks: [
      {
        from: '/product',
        to: '/',
        anchor: 'traditional security behavior challenges',
        relevantKeyword: 'security behavior monitoring',
      },
      {
        from: '/',
        to: '/product',
        anchor: 'advanced behavioral security monitoring',
        relevantKeyword: 'behavioral monitoring platform',
      },
    ],
  },
  'sat-effectiveness': {
    pillarPage: {
      url: '/',
      title: 'SAT Effectiveness Measurement',
      keywords: [
        'SAT effectiveness',
        'training measurement',
        'security training ROI',
      ],
    },
    supportingPages: [
      {
        url: '/product',
        title: 'Measure Training Effectiveness',
        keywords: [
          'training effectiveness measurement',
          'security training analytics',
        ],
      },
      {
        url: '/resources/training-roi-guide',
        title: 'Security Training ROI Guide',
        keywords: ['security training ROI', 'training measurement'],
      },
    ],
    internalLinks: [
      {
        from: '/',
        to: '/product',
        anchor: 'measure security training effectiveness',
        relevantKeyword: 'training effectiveness measurement',
      },
      {
        from: '/product',
        to: '/',
        anchor: 'SAT limitations and challenges',
        relevantKeyword: 'SAT effectiveness',
      },
    ],
  },
  'microsoft-graph': {
    pillarPage: {
      url: '/product',
      title: 'Microsoft Graph Security Integration',
      keywords: [
        'Microsoft Graph security',
        'graph api monitoring',
        'office 365 security',
      ],
    },
    supportingPages: [
      {
        url: '/resources/microsoft-graph-setup',
        title: 'Microsoft Graph Setup Guide',
        keywords: ['graph api setup', 'microsoft 365 integration'],
      },
      {
        url: '/resources/graph-security-data',
        title: 'Understanding Graph Security Data',
        keywords: ['graph security analytics', 'microsoft security data'],
      },
    ],
    internalLinks: [
      {
        from: '/product',
        to: '/resources/microsoft-graph-setup',
        anchor: 'Microsoft Graph API integration setup',
        relevantKeyword: 'Microsoft Graph integration',
      },
    ],
  },
} as const;

// Link priority weights for authority distribution
export const LINK_PRIORITY_WEIGHTS = {
  homepage: 1.0,
  product: 0.9,
  about: 0.8,
  resources: 0.7,
  blog: 0.6,
  segments: 0.5,
} as const;

// Contextual link opportunities based on content analysis
export interface LinkOpportunity {
  trigger: RegExp;
  anchor: string;
  url: string;
  relevantKeyword: string;
  priority: number;
  category: string;
}

export const CONTEXTUAL_LINK_OPPORTUNITIES: LinkOpportunity[] = [
  // Security Culture Links
  {
    trigger: /security culture|organizational security|culture assessment/i,
    anchor: 'comprehensive security culture assessment',
    url: '/product',
    relevantKeyword: 'security culture assessment',
    priority: 1.0,
    category: 'security-culture',
  },
  {
    trigger: /kai roer|security expert|thought leader|culture pioneer/i,
    anchor: 'security culture expert Kai Roer',
    url: '/about/kai-roer',
    relevantKeyword: 'security culture expert',
    priority: 0.9,
    category: 'authority',
  },
  {
    trigger: /security culture framework|culture framework|enisa framework/i,
    anchor: 'Security Culture Framework',
    url: '/resources/security-culture-framework',
    relevantKeyword: 'security culture framework',
    priority: 0.8,
    category: 'resources',
  },

  // Behavioral Monitoring Links
  {
    trigger: /behavioral monitoring|behavior monitoring|behavioral security/i,
    anchor: 'behavioral security monitoring platform',
    url: '/product',
    relevantKeyword: 'behavioral monitoring platform',
    priority: 1.0,
    category: 'behavioral-monitoring',
  },
  {
    trigger: /microsoft graph|graph api|office 365 api|m365 api/i,
    anchor: 'Microsoft Graph API integration',
    url: '/product#microsoft-graph-integration',
    relevantKeyword: 'Microsoft Graph integration',
    priority: 0.9,
    category: 'microsoft-graph',
  },
  {
    trigger: /continuous monitoring|real-time monitoring|ongoing assessment/i,
    anchor: 'continuous security behavior monitoring',
    url: '/product#continuous-monitoring',
    relevantKeyword: 'continuous security monitoring',
    priority: 0.8,
    category: 'behavioral-monitoring',
  },

  // SAT Effectiveness Links
  {
    trigger: /sat effectiveness|training effectiveness|security training/i,
    anchor: 'measure SAT effectiveness',
    url: '/',
    relevantKeyword: 'SAT effectiveness measurement',
    priority: 1.0,
    category: 'sat-effectiveness',
  },
  {
    trigger: /training roi|security training roi|training measurement/i,
    anchor: 'security training ROI measurement',
    url: '/resources/training-roi-guide',
    relevantKeyword: 'security training ROI',
    priority: 0.8,
    category: 'sat-effectiveness',
  },
  {
    trigger: /awareness training|security awareness|training programs/i,
    anchor: 'improve security awareness training',
    url: '/product#training-analytics',
    relevantKeyword: 'security awareness training',
    priority: 0.7,
    category: 'sat-effectiveness',
  },

  // Compliance & Risk Links
  {
    trigger: /compliance|regulatory|gdpr|sox|iso 27001/i,
    anchor: 'automated compliance reporting',
    url: '/product#compliance-reporting',
    relevantKeyword: 'compliance reporting',
    priority: 0.8,
    category: 'compliance',
  },
  {
    trigger: /risk management|security risk|risk assessment/i,
    anchor: 'comprehensive risk assessment',
    url: '/product#risk-assessment',
    relevantKeyword: 'security risk assessment',
    priority: 0.8,
    category: 'risk-management',
  },

  // Industry-Specific Links
  {
    trigger: /ciso|chief information security officer|security leadership/i,
    anchor: 'CISO dashboard and insights',
    url: '/segments/ciso',
    relevantKeyword: 'CISO tools',
    priority: 0.7,
    category: 'segments',
  },
  {
    trigger: /enterprise|large organization|corporate/i,
    anchor: 'enterprise security solutions',
    url: '/segments/enterprise',
    relevantKeyword: 'enterprise security',
    priority: 0.7,
    category: 'segments',
  },
];

/**
 * Generate contextual internal links based on content analysis
 */
export function generateContextualLinks(
  content: string,
  currentUrl: string,
  maxLinks: number = 5
): Array<{
  anchor: string;
  url: string;
  relevantKeyword: string;
  priority: number;
  category: string;
}> {
  const foundOpportunities = CONTEXTUAL_LINK_OPPORTUNITIES.filter(
    opportunity => {
      // Don't link to the current page
      if (opportunity.url === currentUrl) return false;

      // Check if content matches the trigger pattern
      return opportunity.trigger.test(content);
    }
  )
    .sort((a, b) => b.priority - a.priority)
    .slice(0, maxLinks);

  return foundOpportunities.map(opp => ({
    anchor: opp.anchor,
    url: opp.url,
    relevantKeyword: opp.relevantKeyword,
    priority: opp.priority,
    category: opp.category,
  }));
}

/**
 * Get strategic internal links for a specific page
 */
export function getStrategicLinksForPage(url: string): Array<{
  anchor: string;
  url: string;
  relevantKeyword: string;
  category: string;
}> {
  const strategicLinks: Array<{
    anchor: string;
    url: string;
    relevantKeyword: string;
    category: string;
  }> = [];

  // Find links from content clusters
  Object.values(CONTENT_CLUSTERS).forEach(cluster => {
    const relevantLinks = cluster.internalLinks.filter(
      link => link.from === url
    );
    strategicLinks.push(
      ...relevantLinks.map(link => ({
        anchor: link.anchor,
        url: link.to,
        relevantKeyword: link.relevantKeyword,
        category:
          cluster.pillarPage.url === url
            ? 'pillar-outbound'
            : 'supporting-outbound',
      }))
    );
  });

  return strategicLinks;
}

/**
 * Calculate link equity distribution for SEO
 */
export function calculateLinkEquity(
  fromUrl: string,
  toUrl: string,
  anchor: string,
  relevantKeyword: string
): number {
  // Base equity from page type
  const fromPageType = getPageType(fromUrl);

  const baseEquity = LINK_PRIORITY_WEIGHTS[fromPageType] || 0.5;

  // Keyword relevance boost
  const keywordBoost = anchor
    .toLowerCase()
    .includes(relevantKeyword.toLowerCase())
    ? 1.2
    : 1.0;

  // Cross-cluster linking bonus
  const crossClusterBonus = isCrossClusterLink(fromUrl, toUrl) ? 1.1 : 1.0;

  return baseEquity * keywordBoost * crossClusterBonus;
}

/**
 * Get page type from URL for link equity calculation
 */
function getPageType(url: string): keyof typeof LINK_PRIORITY_WEIGHTS {
  if (url === '/') return 'homepage';
  if (url.startsWith('/product')) return 'product';
  if (url.startsWith('/about')) return 'about';
  if (url.startsWith('/resources')) return 'resources';
  if (url.startsWith('/blog')) return 'blog';
  if (url.startsWith('/segments')) return 'segments';
  return 'homepage';
}

/**
 * Check if link connects different content clusters
 */
function isCrossClusterLink(fromUrl: string, toUrl: string): boolean {
  let fromCluster: string | null = null;
  let toCluster: string | null = null;

  Object.entries(CONTENT_CLUSTERS).forEach(([clusterName, cluster]) => {
    if (
      cluster.pillarPage.url === fromUrl ||
      cluster.supportingPages.some(page => page.url === fromUrl)
    ) {
      fromCluster = clusterName;
    }
    if (
      cluster.pillarPage.url === toUrl ||
      cluster.supportingPages.some(page => page.url === toUrl)
    ) {
      toCluster = clusterName;
    }
  });

  return (
    fromCluster !== toCluster && fromCluster !== null && toCluster !== null
  );
}

/**
 * Generate topic hub page content suggestions
 */
export function generateTopicHubSuggestions(
  topic: keyof typeof CONTENT_CLUSTERS
) {
  const cluster = CONTENT_CLUSTERS[topic];

  return {
    pillarPage: cluster.pillarPage,
    supportingContent: cluster.supportingPages,
    recommendedLinks: cluster.internalLinks,
    keywords: cluster.pillarPage.keywords,
    contentStrategy: {
      pillarPageWordCount: '2000-3000 words',
      supportingPageWordCount: '800-1500 words',
      internalLinkDensity: '2-3 links per 100 words',
      keywordDensity: '1-2% for primary keywords',
    },
  };
}

/**
 * Audit existing internal linking structure
 */
export function auditInternalLinking(
  pages: Array<{
    url: string;
    content: string;
    outboundLinks: Array<{ url: string; anchor: string }>;
  }>
) {
  const audit = {
    totalPages: pages.length,
    totalInternalLinks: 0,
    orphanPages: [] as string[],
    overLinkedPages: [] as string[],
    underLinkedPages: [] as string[],
    missingStrategicLinks: [] as Array<{
      from: string;
      to: string;
      reason: string;
    }>,
    linkEquityFlow: {} as Record<string, number>,
  };

  pages.forEach(page => {
    const internalLinks = page.outboundLinks.filter(
      link => !link.url.startsWith('http') && !link.url.startsWith('mailto:')
    );

    audit.totalInternalLinks += internalLinks.length;

    // Check for orphan pages (no internal links)
    if (internalLinks.length === 0) {
      audit.orphanPages.push(page.url);
    }

    // Check for over-linked pages (>10 internal links)
    if (internalLinks.length > 10) {
      audit.overLinkedPages.push(page.url);
    }

    // Check for under-linked pages (<2 internal links for content pages)
    if (internalLinks.length < 2 && page.url !== '/') {
      audit.underLinkedPages.push(page.url);
    }

    // Calculate link equity
    audit.linkEquityFlow[page.url] = internalLinks.reduce((total, link) => {
      return total + calculateLinkEquity(page.url, link.url, link.anchor, '');
    }, 0);

    // Check for missing strategic links
    const strategicLinks = getStrategicLinksForPage(page.url);
    strategicLinks.forEach(strategicLink => {
      const hasLink = internalLinks.some(
        link => link.url === strategicLink.url
      );
      if (!hasLink) {
        audit.missingStrategicLinks.push({
          from: page.url,
          to: strategicLink.url,
          reason: `Missing strategic link for "${strategicLink.relevantKeyword}"`,
        });
      }
    });
  });

  return audit;
}
