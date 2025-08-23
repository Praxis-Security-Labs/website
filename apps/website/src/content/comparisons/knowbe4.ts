export const knowbe4ComparisonData = {
  competitorName: 'KnowBe4',
  competitorLogo: '/images/competitors/knowbe4-logo.svg',

  // Feature comparison data
  features: [
    // Core Platform Features
    {
      feature: 'Microsoft 365 Native Integration',
      category: 'Platform Integration',
      praxisSupport: 'full' as const,
      competitorSupport: 'partial' as const,
      importance: 'high' as const,
      tooltip:
        'Native integration means no third-party data processing or additional security risks',
    },
    {
      feature: 'Real-time Security Behavior Analytics',
      category: 'Analytics & Insights',
      praxisSupport: 'full' as const,
      competitorSupport: 'none' as const,
      importance: 'high' as const,
      tooltip:
        'Continuous monitoring of user security behaviors beyond just training completion',
    },
    {
      feature: 'Security Culture Measurement',
      category: 'Analytics & Insights',
      praxisSupport: 'unique' as const,
      competitorSupport: 'none' as const,
      importance: 'high' as const,
      tooltip:
        'Proprietary algorithms to measure and track organizational security culture maturity',
    },
    {
      feature: 'Phishing Simulation',
      category: 'Training & Testing',
      praxisSupport: 'partial' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
      tooltip:
        'KnowBe4 specializes in phishing simulations, while Praxis focuses on behavior analytics',
    },
    {
      feature: 'Security Awareness Training Library',
      category: 'Training & Testing',
      praxisSupport: 'none' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
      tooltip: 'KnowBe4 offers extensive training content library',
    },

    // Data & Privacy
    {
      feature: 'Zero Data Storage (Read-only)',
      category: 'Data Privacy & Security',
      praxisSupport: 'unique' as const,
      competitorSupport: 'none' as const,
      importance: 'high' as const,
      tooltip:
        'Praxis processes data in real-time without storing sensitive information',
    },
    {
      feature: 'GDPR Compliant by Design',
      category: 'Data Privacy & Security',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'high' as const,
    },
    {
      feature: 'SOC 2 Type II Certification',
      category: 'Data Privacy & Security',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'high' as const,
    },

    // Reporting & Analytics
    {
      feature: 'Executive Dashboard',
      category: 'Reporting & Analytics',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },
    {
      feature: 'Behavioral Risk Scoring',
      category: 'Reporting & Analytics',
      praxisSupport: 'unique' as const,
      competitorSupport: 'partial' as const,
      importance: 'high' as const,
      tooltip:
        'Advanced AI-driven risk assessment based on actual user behaviors',
    },
    {
      feature: 'Regulatory Compliance Reporting',
      category: 'Reporting & Analytics',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },

    // User Experience
    {
      feature: 'Single Sign-On (SSO)',
      category: 'User Experience',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },
    {
      feature: 'Mobile App',
      category: 'User Experience',
      praxisSupport: 'none' as const,
      competitorSupport: 'full' as const,
      importance: 'low' as const,
    },
    {
      feature: 'API Access',
      category: 'Integration',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },

    // Support & Implementation
    {
      feature: 'Implementation Time',
      category: 'Implementation',
      praxisSupport: 'full' as const,
      competitorSupport: 'partial' as const,
      importance: 'high' as const,
      tooltip: 'Praxis: 1-2 hours | KnowBe4: 2-4 weeks typical implementation',
    },
    {
      feature: '24/7 Technical Support',
      category: 'Support',
      praxisSupport: 'full' as const,
      competitorSupport: 'full' as const,
      importance: 'medium' as const,
    },
  ],

  // Narrative sections for storytelling
  narrative: {
    introduction:
      'Both Praxis Navigator and KnowBe4 are leaders in cybersecurity human risk management, but they take fundamentally different approaches. While KnowBe4 excels in security awareness training and phishing simulations, Praxis Navigator focuses on real-time behavioral analytics and security culture measurement. Understanding these differences is crucial for choosing the right solution for your organization.',

    sections: [
      {
        id: 'approach',
        title: 'Fundamental Approach Differences',
        content:
          'KnowBe4 takes a training-first approach, focusing on educating users through simulated phishing attacks and comprehensive training modules. Their strength lies in creating awareness through structured learning programs. Praxis Navigator, conversely, takes an analytics-first approach, focusing on understanding and measuring actual security behaviors in real-time. Rather than just training users, Praxis helps organizations understand their current security culture and track behavioral changes over time.',
        highlight: 'neutral' as const,
        expandable: true,
        testimonial: {
          quote:
            'We needed more than just training metrics. Praxis Navigator gave us insights into our actual security culture, not just training completion rates.',
          author: 'Sarah Chen',
          company: 'TechForward Inc',
        },
      },
      {
        id: 'integration',
        title: 'Microsoft 365 Integration',
        content:
          'This is where Praxis Navigator has a significant advantage. Our platform is built natively for Microsoft 365, requiring no additional data processing or third-party integrations. KnowBe4, while offering Microsoft integrations, requires data export and processing through their systems. For organizations prioritizing data security and wanting to maintain full control over their Microsoft 365 environment, this native approach offers substantial benefits in terms of security, compliance, and implementation speed.',
        highlight: 'advantage' as const,
        expandable: true,
      },
      {
        id: 'data-philosophy',
        title: 'Data Handling Philosophy',
        content:
          'The two platforms have fundamentally different approaches to data handling. KnowBe4 stores user data, training records, and simulation results in their cloud infrastructure. Praxis Navigator operates on a zero-storage principle, processing Microsoft 365 security metadata in real-time without storing any sensitive information. This approach reduces compliance burden, eliminates data residency concerns, and provides inherent privacy protection that many organizations find compelling.',
        highlight: 'advantage' as const,
        expandable: true,
      },
      {
        id: 'training-vs-culture',
        title: 'Training Focus vs. Culture Measurement',
        content:
          "KnowBe4 excels in structured security training programs with an extensive library of content, simulated phishing campaigns, and training management tools. If your primary need is comprehensive security awareness training, KnowBe4 offers unmatched depth. However, if you want to understand and measure your organization's security culture, track behavioral changes, and get insights into security readiness beyond training completion, Praxis Navigator provides unique capabilities that KnowBe4 doesn't offer.",
        highlight: 'consideration' as const,
        expandable: true,
      },
    ],

    conclusion:
      'Choose KnowBe4 if you primarily need comprehensive security awareness training with extensive content libraries and proven phishing simulation capabilities. Choose Praxis Navigator if you want to measure and understand your security culture, need native Microsoft 365 integration, prioritize data privacy, or want real-time behavioral analytics beyond training metrics. Many organizations find value in using both platforms together - KnowBe4 for training and Praxis Navigator for culture measurement and behavioral analytics.',
  },

  // Pricing comparison
  pricing: {
    tiers: [
      {
        name: 'Starter',
        praxisPrice: '$3',
        competitorPrice: '$4.50',
        praxisFeatures: [
          'Basic behavior analytics',
          'Executive dashboard',
          'Microsoft 365 integration',
          'Monthly culture reports',
          'Email support',
        ],
        competitorFeatures: [
          'Basic phishing simulations',
          'Core training library',
          'Basic reporting',
          'Email support',
        ],
        notes:
          'KnowBe4 pricing based on published rates for small organizations',
      },
      {
        name: 'Professional',
        praxisPrice: '$6',
        competitorPrice: '$8',
        praxisFeatures: [
          'Advanced behavior analytics',
          'Risk scoring algorithms',
          'Custom reporting',
          'API access',
          'Priority support',
          'Compliance reporting',
        ],
        competitorFeatures: [
          'Advanced phishing simulations',
          'Full training library',
          'Advanced reporting',
          'Basic API access',
          'Phone support',
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
          'Dedicated support',
          'Training & onboarding',
          'Custom reporting',
          'SLA guarantees',
        ],
        competitorFeatures: [
          'Full platform access',
          'Custom content',
          'Dedicated support',
          'Professional services',
          'Custom integrations',
          'SLA options',
        ],
      },
    ],
    additionalComparisons: [
      {
        title: 'Implementation Time',
        praxisValue: '1-2 hours',
        competitorValue: '2-4 weeks',
      },
      {
        title: 'Data Storage',
        praxisValue: 'Zero storage',
        competitorValue: 'Cloud storage required',
      },
      {
        title: 'Training Content',
        praxisValue: 'Partner integrations',
        competitorValue: 'Extensive library included',
      },
    ],
  },
};
