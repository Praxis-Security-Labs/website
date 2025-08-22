/**
 * Content Optimization for Featured Snippets and Rich Results
 * Provides utilities for structuring content to win position zero in search results
 */

// Featured snippet patterns and optimization strategies
export const FEATURED_SNIPPET_PATTERNS = {
  paragraph: {
    wordCount: { min: 40, max: 60 },
    structure: 'definition',
    triggers: ['what is', 'how to define', 'meaning of'],
    format: 'Direct answer in first sentence, followed by supporting details',
  },
  list: {
    itemCount: { min: 3, max: 8 },
    structure: 'numbered or bulleted list',
    triggers: ['how to', 'steps to', 'ways to', 'list of', 'types of'],
    format: 'Clear list items with descriptive text',
  },
  table: {
    columnCount: { min: 2, max: 5 },
    rowCount: { min: 3, max: 10 },
    structure: 'data comparison',
    triggers: ['comparison', 'vs', 'differences', 'pricing', 'features'],
    format: 'Structured data with clear headers and comparable values',
  },
} as const;

// Security-specific featured snippet opportunities
export const SECURITY_SNIPPET_OPPORTUNITIES = [
  {
    query: 'what is security culture',
    type: 'paragraph',
    targetKeyword: 'security culture',
    currentOpportunity: 'high',
    optimizedContent:
      'Security culture refers to the set of shared beliefs, attitudes, and behaviors regarding cybersecurity within an organization. It encompasses how employees think about, prioritize, and act on security matters in their daily work.',
  },
  {
    query: 'how to improve security awareness training',
    type: 'list',
    targetKeyword: 'security awareness training',
    currentOpportunity: 'medium',
    optimizedContent: [
      'Measure baseline security behaviors before training',
      'Use real-world scenarios and simulations',
      'Implement continuous monitoring and feedback',
      'Personalize training based on role and risk level',
      'Track behavioral changes over time with analytics',
    ],
  },
  {
    query: 'security culture vs security awareness',
    type: 'table',
    targetKeyword: 'security culture vs security awareness',
    currentOpportunity: 'high',
    optimizedContent: {
      headers: ['Aspect', 'Security Culture', 'Security Awareness'],
      rows: [
        ['Focus', 'Behavioral change and habits', 'Knowledge and education'],
        ['Duration', 'Long-term organizational change', 'Event-based learning'],
        [
          'Measurement',
          'Behavioral analytics and metrics',
          'Test scores and completion rates',
        ],
        [
          'Impact',
          'Sustainable security behaviors',
          'Temporary knowledge increase',
        ],
      ],
    },
  },
  {
    query: 'what is behavioral security monitoring',
    type: 'paragraph',
    targetKeyword: 'behavioral security monitoring',
    currentOpportunity: 'high',
    optimizedContent:
      'Behavioral security monitoring is the continuous observation and analysis of user security behaviors within an organization to identify risks, measure security culture, and improve overall security posture through data-driven insights.',
  },
  {
    query: 'microsoft graph security api features',
    type: 'list',
    targetKeyword: 'Microsoft Graph security',
    currentOpportunity: 'medium',
    optimizedContent: [
      'Unified security alerts from multiple providers',
      'Security score and recommendations',
      'Advanced threat analytics and insights',
      'Identity and access management data',
      'Device compliance and health status',
      'Security incident investigation tools',
    ],
  },
] as const;

// FAQ optimization for "People Also Ask" targeting
export const OPTIMIZED_FAQS = [
  {
    question: 'How does behavioral security monitoring work?',
    answer:
      'Behavioral security monitoring works by analyzing user interactions with security-related systems and processes. It tracks patterns like email handling, password management, and response to security threats. The system uses Microsoft Graph API to collect data on user behaviors without disrupting workflows, then applies analytics to identify risk patterns and measure security culture maturity.',
    category: 'behavioral-monitoring',
    targetKeywords: ['behavioral security monitoring', 'how it works'],
    optimizedFor: 'people-also-ask',
  },
  {
    question: 'What is the difference between SAT and behavioral monitoring?',
    answer:
      'Security Awareness Training (SAT) focuses on educating users through courses and simulations, while behavioral monitoring continuously observes actual security behaviors. SAT measures knowledge retention, while behavioral monitoring measures real-world security practices. Behavioral monitoring provides ongoing insights into how employees actually behave with security, not just what they know.',
    category: 'training-effectiveness',
    targetKeywords: ['SAT vs behavioral monitoring', 'security training'],
    optimizedFor: 'featured-snippet',
  },
  {
    question: 'Why is security culture important for organizations?',
    answer:
      'Security culture is important because human error causes 95% of cybersecurity breaches. A strong security culture creates consistent security behaviors across the organization, reduces risk from insider threats, improves incident response times, and ensures security practices are embedded in daily operations rather than being an afterthought.',
    category: 'security-culture',
    targetKeywords: ['security culture importance', 'why security culture'],
    optimizedFor: 'featured-snippet',
  },
  {
    question: 'How do you measure security culture effectively?',
    answer:
      'Effective security culture measurement combines behavioral analytics, survey data, and incident metrics. Tools like Praxis Navigator use Microsoft Graph API to monitor actual security behaviors, while surveys capture attitudes and perceptions. Key metrics include phishing click rates, password hygiene, incident reporting frequency, and compliance with security policies.',
    category: 'measurement',
    targetKeywords: ['measure security culture', 'security culture metrics'],
    optimizedFor: 'people-also-ask',
  },
  {
    question: 'What are the benefits of continuous security monitoring?',
    answer:
      'Continuous security monitoring provides real-time visibility into security behaviors, enables proactive risk identification, improves incident response times, and demonstrates ROI of security investments. It helps organizations shift from reactive to predictive security management and provides evidence-based insights for security decision-making.',
    category: 'benefits',
    targetKeywords: [
      'continuous security monitoring benefits',
      'security monitoring',
    ],
    optimizedFor: 'featured-snippet',
  },
] as const;

/**
 * Generate optimized content structure for featured snippets
 */
export function generateFeaturedSnippetContent(
  query: string,
  targetKeyword: string,
  contentType: keyof typeof FEATURED_SNIPPET_PATTERNS
): {
  structure: string;
  optimizedContent: string | string[] | Record<string, unknown>;
  wordCount?: number;
  seoTips: string[];
} {
  const pattern = FEATURED_SNIPPET_PATTERNS[contentType];
  const opportunity = SECURITY_SNIPPET_OPPORTUNITIES.find(
    opp => opp.targetKeyword === targetKeyword
  );

  const seoTips = [
    `Target word count: ${'wordCount' in pattern ? `${pattern.wordCount.min}-${pattern.wordCount.max} words` : 'varies by type'}`,
    `Use question as H2 or H3 heading: "${query}"`,
    `Include target keyword "${targetKeyword}" in first sentence`,
    `Structure content as ${pattern.structure}`,
    `Optimize for triggers: ${pattern.triggers.join(', ')}`,
  ];

  const wordCount =
    typeof opportunity?.optimizedContent === 'string'
      ? opportunity.optimizedContent.split(' ').length
      : undefined;

  return {
    structure: pattern.format,
    optimizedContent: opportunity?.optimizedContent
      ? Array.isArray(opportunity.optimizedContent)
        ? [...opportunity.optimizedContent]
        : typeof opportunity.optimizedContent === 'object'
          ? (opportunity.optimizedContent as Record<string, unknown>)
          : opportunity.optimizedContent
      : `Optimized content for "${targetKeyword}" targeting "${query}"`,
    ...(wordCount !== undefined && { wordCount }),
    seoTips,
  };
}

/**
 * Generate HowTo structured data for step-by-step guides
 */
export function generateHowToStructuredData(guide: {
  name: string;
  description: string;
  estimatedTime?: string;
  estimatedCost?: string;
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
    name: guide.name,
    description: guide.description,
    totalTime: guide.estimatedTime,
    estimatedCost: guide.estimatedCost,
    tool: 'Praxis Navigator Platform',
    supply: 'Microsoft 365 Environment',
    step: guide.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url,
    })),
  };
}

/**
 * Optimize content for "People Also Ask" targeting
 */
export function optimizeForPeopleAlsoAsk(
  mainQuestion: string,
  relatedQuestions: string[],
  answers: string[]
): {
  optimizedFAQ: Array<{
    question: string;
    answer: string;
    schema: Record<string, unknown>;
  }>;
  contentStructure: string;
} {
  const optimizedFAQ = relatedQuestions.map((question, index) => ({
    question,
    answer: answers[index] || 'Answer not provided',
    schema: {
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answers[index] || 'Answer not provided',
      },
    },
  }));

  const contentStructure = `
## ${mainQuestion}

[Main content answering the primary question]

### Frequently Asked Questions

${relatedQuestions
  .map(
    (q, i) => `
#### ${q}

${answers[i] || 'Answer not provided'}
`
  )
  .join('')}
  `;

  return {
    optimizedFAQ,
    contentStructure,
  };
}

/**
 * Generate definition lists for complex security concepts
 */
export function generateDefinitionList(
  concepts: Array<{
    term: string;
    definition: string;
    relatedTerms?: string[];
  }>
): {
  html: string;
  structuredData: Record<string, unknown>;
} {
  const html = `
<dl class="security-definitions">
${concepts
  .map(
    concept => `
  <dt class="definition-term">${concept.term}</dt>
  <dd class="definition-description">
    ${concept.definition}
    ${
      concept.relatedTerms
        ? `
    <p class="related-terms">
      <strong>Related terms:</strong> ${concept.relatedTerms.join(', ')}
    </p>
    `
        : ''
    }
  </dd>
`
  )
  .join('')}
</dl>
  `;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Security Culture Terminology',
    hasDefinedTerm: concepts.map(concept => ({
      '@type': 'DefinedTerm',
      name: concept.term,
      description: concept.definition,
      inDefinedTermSet: 'Security Culture Terminology',
    })),
  };

  return { html, structuredData };
}

/**
 * Audit content for featured snippet optimization
 */
export function auditFeaturedSnippetOptimization(content: string): {
  score: number;
  recommendations: Array<{
    type: 'heading' | 'structure' | 'length' | 'keywords';
    message: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  opportunities: Array<{
    query: string;
    type: keyof typeof FEATURED_SNIPPET_PATTERNS;
    confidence: number;
  }>;
} {
  const recommendations: Array<{
    type: 'heading' | 'structure' | 'length' | 'keywords';
    message: string;
    priority: 'high' | 'medium' | 'low';
  }> = [];

  let score = 0;

  // Check for question headings
  const questionHeadings = content.match(
    /^#{2,4}\s+(what|how|why|when|where)\s+/gim
  );
  if (questionHeadings && questionHeadings.length > 0) {
    score += 20;
  } else {
    recommendations.push({
      type: 'heading',
      message: 'Add question-based headings (H2-H4) that mirror search queries',
      priority: 'high',
    });
  }

  // Check for list structures
  const lists = content.match(/^[\d\-*+]\s+/gm);
  if (lists && lists.length >= 3) {
    score += 15;
  } else {
    recommendations.push({
      type: 'structure',
      message:
        'Include numbered or bulleted lists with 3+ items for list snippet targeting',
      priority: 'medium',
    });
  }

  // Check for definition patterns
  const definitions = content.match(
    /\b(is|are|refers to|means|defined as)\b/gi
  );
  if (definitions && definitions.length > 0) {
    score += 15;
  } else {
    recommendations.push({
      type: 'structure',
      message:
        'Add clear definitions using "is", "refers to", or "means" for paragraph snippets',
      priority: 'medium',
    });
  }

  // Check for target keywords
  const securityKeywords = [
    'security culture',
    'behavioral monitoring',
    'SAT effectiveness',
    'Microsoft Graph',
  ];
  const keywordMatches = securityKeywords.filter(keyword =>
    content.toLowerCase().includes(keyword.toLowerCase())
  );

  if (keywordMatches.length >= 2) {
    score += 25;
  } else {
    recommendations.push({
      type: 'keywords',
      message:
        'Include more target keywords: security culture, behavioral monitoring, SAT effectiveness',
      priority: 'high',
    });
  }

  // Check paragraph length for featured snippets
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0);
  const optimalParagraphs = paragraphs.filter(p => {
    const wordCount = p.split(' ').length;
    return wordCount >= 40 && wordCount <= 60;
  });

  if (optimalParagraphs.length > 0) {
    score += 25;
  } else {
    recommendations.push({
      type: 'length',
      message:
        'Include paragraphs of 40-60 words for optimal featured snippet length',
      priority: 'medium',
    });
  }

  // Identify snippet opportunities
  const opportunities = SECURITY_SNIPPET_OPPORTUNITIES.filter(opp => {
    return keywordMatches.some(keyword =>
      opp.targetKeyword.toLowerCase().includes(keyword.toLowerCase())
    );
  }).map(opp => ({
    query: opp.query,
    type: opp.type as keyof typeof FEATURED_SNIPPET_PATTERNS,
    confidence: opp.currentOpportunity === 'high' ? 0.8 : 0.6,
  }));

  return {
    score: Math.min(score, 100),
    recommendations,
    opportunities,
  };
}
