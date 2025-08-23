export const junglemapComparisonData = {
  competitorName: 'Junglemap/Nimblr',
  competitorLogo: '/images/competitors/junglemap-logo.svg',

  // Feature comparison data
  features: [
    // Core Platform Features
    {
      feature: 'Microsoft 365 Native Integration',
      category: 'Platform Integration',
      praxisSupport: 'full' as const,
      competitorSupport: 'none' as const,
      importance: 'high' as const,
      tooltip:
        'Junglemap focuses on general cybersecurity posture, not Microsoft 365 specifically',
    },
    {
      feature: 'Security Culture Analytics',
      category: 'Analytics & Insights',
      praxisSupport: 'unique' as const,
      competitorSupport: 'none' as const,
      importance: 'high' as const,
      tooltip:
        'Praxis specializes in measuring organizational security culture maturity',
    },
    {
      feature: 'Cybersecurity Posture Management',
      category: 'Security Management',
      praxisSupport: 'none' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
      tooltip:
        'Junglemap excels in overall cybersecurity posture assessment and management',
    },
    {
      feature: 'Risk Assessment & Scoring',
      category: 'Risk Management',
      praxisSupport: 'partial' as const,
      competitorSupport: 'full' as const,
      importance: 'high' as const,
      tooltip:
        'Both platforms offer risk scoring, but focus on different risk vectors',
    },
    {
      feature: 'Behavioral Risk Analytics',
      category: 'Analytics & Insights',
      praxisSupport: 'unique' as const,
      competitorSupport: 'partial' as const,
      importance: 'high' as const,
      tooltip:
        'Praxis focuses specifically on user behavior patterns within Microsoft 365',
    },

    // Data Sources & Integration
    {
      feature: 'Email Security Monitoring',
      category: 'Data Sources',
      praxisSupport: 'full' as const,
      competitorSupport: 'partial' as const,
      importance: 'medium' as const,
    },
    {
      feature: 'Endpoint Data Integration',
      category: 'Data Sources',
      praxisSupport: 'none' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
      tooltip: 'Junglemap integrates with various endpoint security solutions',
    },
    {
      feature: 'Network Security Integration',
      category: 'Data Sources',
      praxisSupport: 'none' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },

    // Analytics & Reporting
    {
      feature: 'Executive Dashboards',
      category: 'Reporting',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },
    {
      feature: 'Compliance Reporting',
      category: 'Reporting',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },
    {
      feature: 'Custom Report Builder',
      category: 'Reporting',
      praxisSupport: 'partial' as const,
      competitorSupport: 'full' as const,
      importance: 'low' as const,
    },

    // Implementation & Usability
    {
      feature: 'Implementation Complexity',
      category: 'Implementation',
      praxisSupport: 'full' as const,
      competitorSupport: 'partial' as const,
      importance: 'high' as const,
      tooltip:
        'Praxis: 1-2 hours | Junglemap: 1-2 weeks typical implementation',
    },
    {
      feature: 'Multi-tenant Support',
      category: 'Platform Features',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },
    {
      feature: 'API Integration',
      category: 'Integration',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },

    // Security & Compliance
    {
      feature: 'Zero Data Storage',
      category: 'Data Privacy',
      praxisSupport: 'unique' as const,
      competitorSupport: 'none' as const,
      importance: 'high' as const,
      tooltip: 'Praxis processes data in real-time without persistent storage',
    },
    {
      feature: 'SOC 2 Compliance',
      category: 'Data Privacy',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'high' as const,
    },
    {
      feature: 'GDPR Compliance',
      category: 'Data Privacy',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'high' as const,
    },
  ],

  // Narrative sections
  narrative: {
    introduction:
      "Praxis Navigator and Junglemap (formerly Nimblr) serve different but complementary roles in cybersecurity management. Junglemap excels as a comprehensive cybersecurity posture management platform, providing broad visibility across an organization's entire security infrastructure. Praxis Navigator specializes in security culture analytics and behavioral risk assessment specifically within Microsoft 365 environments. The choice between them depends on whether you need broad cybersecurity posture management or deep behavioral analytics.",

    sections: [
      {
        id: 'scope',
        title: 'Scope and Focus Differences',
        content:
          'Junglemap takes a holistic approach to cybersecurity posture management, providing visibility across networks, endpoints, cloud services, and security tools. Their platform excels at aggregating data from multiple security sources to provide a comprehensive security overview. Praxis Navigator takes a focused approach, specializing exclusively in Microsoft 365 security culture and behavioral analytics. This specialization allows for deeper insights into user behavior patterns, security culture maturity, and behavioral risk factors that broader platforms might miss.',
        highlight: 'neutral' as const,
        expandable: true,
      },
      {
        id: 'implementation',
        title: 'Implementation and Complexity',
        content:
          "This represents a significant differentiator between the platforms. Junglemap's comprehensive approach requires integration with multiple security tools, data sources, and systems, typically resulting in implementation timelines of 1-2 weeks and ongoing configuration management. Praxis Navigator's Microsoft 365-native architecture enables implementation in 1-2 hours with minimal configuration required. For organizations seeking quick time-to-value specifically for Microsoft 365 security culture insights, this implementation simplicity is a major advantage.",
        highlight: 'advantage' as const,
        expandable: true,
        testimonial: {
          quote:
            'We had Praxis Navigator running and providing insights within hours, not weeks. The immediate value was exactly what our security team needed.',
          author: 'Michael Rodriguez',
          company: 'FinanceSecure Corp',
        },
      },
      {
        id: 'data-approach',
        title: 'Data Philosophy and Privacy',
        content:
          "Junglemap operates as a traditional cybersecurity platform, collecting and storing data from various sources in their cloud infrastructure for analysis and reporting. This approach enables comprehensive historical analysis and correlation across multiple data sources. Praxis Navigator's zero-storage architecture processes Microsoft 365 metadata in real-time without persistent data storage. This fundamental difference in data handling has significant implications for privacy, compliance, and security posture.",
        highlight: 'advantage' as const,
        expandable: true,
      },
      {
        id: 'complementary',
        title: 'Complementary Capabilities',
        content:
          'Rather than being direct competitors, these platforms often complement each other in comprehensive security programs. Junglemap provides the broad cybersecurity posture visibility that security teams need for overall risk management, while Praxis Navigator provides the deep behavioral insights and security culture measurement that are crucial for human risk management. Organizations with mature security programs often benefit from both perspectives - the broad view from Junglemap and the behavioral depth from Praxis Navigator.',
        highlight: 'consideration' as const,
        expandable: true,
      },
    ],

    conclusion:
      'Choose Junglemap if you need comprehensive cybersecurity posture management across your entire technology stack, with broad integration capabilities and historical data analysis. Choose Praxis Navigator if you want specialized insights into Microsoft 365 security culture, need rapid implementation, prioritize data privacy, or want to focus specifically on behavioral risk analytics. Many organizations find value in using both platforms together for comprehensive security visibility and behavioral insights.',
  },

  // Pricing comparison
  pricing: {
    tiers: [
      {
        name: 'Starter',
        praxisPrice: '$3',
        competitorPrice: '$8',
        praxisFeatures: [
          'Microsoft 365 behavior analytics',
          'Security culture scoring',
          'Basic executive dashboard',
          'Monthly reports',
          'Email support',
        ],
        competitorFeatures: [
          'Basic posture assessment',
          'Limited integrations',
          'Standard reporting',
          'Email support',
        ],
        notes: 'Junglemap pricing based on typical small organization rates',
      },
      {
        name: 'Professional',
        praxisPrice: '$6',
        competitorPrice: '$15',
        praxisFeatures: [
          'Advanced behavioral analytics',
          'Risk scoring algorithms',
          'Custom reporting',
          'API access',
          'Priority support',
          'Compliance frameworks',
        ],
        competitorFeatures: [
          'Full posture management',
          'Multiple integrations',
          'Advanced analytics',
          'Custom dashboards',
          'Priority support',
        ],
        popular: true,
        praxisValue: 'Best Value',
      },
      {
        name: 'Enterprise',
        praxisPrice: 'Custom',
        competitorPrice: 'Custom',
        praxisFeatures: [
          'Full platform access',
          'Custom integrations',
          'Dedicated success manager',
          'Training & onboarding',
          'SLA guarantees',
          'Custom development',
        ],
        competitorFeatures: [
          'Enterprise platform access',
          'Unlimited integrations',
          'Dedicated support team',
          'Professional services',
          'Custom development',
          'Enterprise SLAs',
        ],
      },
    ],
    additionalComparisons: [
      {
        title: 'Implementation Time',
        praxisValue: '1-2 hours',
        competitorValue: '1-2 weeks',
      },
      {
        title: 'Primary Focus',
        praxisValue: 'Security culture & behavior',
        competitorValue: 'Cybersecurity posture',
      },
      {
        title: 'Microsoft 365 Specialization',
        praxisValue: 'Native integration',
        competitorValue: 'General cloud support',
      },
      {
        title: 'Data Storage',
        praxisValue: 'Zero storage',
        competitorValue: 'Cloud storage required',
      },
    ],
  },
};
