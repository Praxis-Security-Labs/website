export const pages = {
  en: {
    // About page
    about: {
      title: 'About Praxis Navigator | Security Culture Experts',
      description:
        "Learn about Praxis Navigator's mission to revolutionize security culture measurement through evidence-based behavioral analytics.",
      headline: 'Revolutionizing Security Culture Measurement',
      subheadline:
        'Evidence-based behavioral analytics for enterprise security',
      mission:
        'Our mission is to transform how organizations measure and improve security culture by providing objective, actionable insights into actual security behaviors.',

      kaiRoer: {
        title: 'About Kai Roer | Security Culture Framework Creator',
        description:
          'Meet Kai Roer, creator of the Security Culture Framework adopted by ENISA and co-author of The Security Culture Playbook.',
        headline: 'Meet Kai Roer',
        subheadline: 'Security Culture Expert & Framework Creator',
        bio: "Kai Roer is the world's leading authority on security culture measurement and behavioral change in cybersecurity.",
        background:
          'With over 25 years of experience in cybersecurity research and practice, Kai has dedicated his career to understanding and improving human factors in information security.',
        achievements: [
          'Creator of the Security Culture Framework adopted by ENISA',
          'Co-author of "The Security Culture Playbook" (Wiley, 2022)',
          'Former Chief Research Officer at KnowBe4',
          'Founder of CLTRe (acquired by KnowBe4)',
          'International keynote speaker at 100+ conferences',
          'Published 50+ academic papers on security culture',
        ],
      },
    },

    // Product page
    product: {
      title: 'Product Overview | Praxis Navigator Security Culture Platform',
      description:
        'Comprehensive security culture measurement platform with Microsoft Graph API integration for real-time behavioral monitoring.',
      headline: 'The Complete Security Culture Measurement Platform',
      subheadline:
        'Evidence-based behavioral monitoring with Microsoft Graph API integration',
    },

    // Pricing page
    pricing: {
      title: 'Pricing | Praxis Navigator Security Culture Platform',
      description:
        'Flexible pricing plans for security culture measurement and behavioral monitoring. Start with a free trial.',
      headline: 'Choose Your Security Culture Measurement Plan',
      subheadline: 'Flexible options for organizations of all sizes',

      // Pricing Table Section Content
      table: {
        sectionTitle: 'Choose Your Plan',
        sectionDescription:
          'Transparent pricing designed for organizations of every size. All plans include our core security culture measurement features.',
        billingToggle: {
          monthly: 'Monthly',
          annual: 'Annual',
        },
        saveBadge: 'Save 20%',
        allPlansInclude: 'All plans include:',
        supportLevel: 'Support Level',
        mostPopular: 'Most Popular',
        commonFeatures: [
          'Microsoft 365 integration',
          'Automated reporting',
          'AI-driven analytics',
          'Real-time risk tracking',
          'GDPR compliant',
          'Hosted in Europe',
          'Data encryption',
        ],
        plans: [
          {
            id: 'small',
            name: 'Small Enterprise',
            priceAnnual: '€199',
            priceMonthly: '€249',
            period: 'per month',
            description: 'Perfect for organizations up to 199 employees',
            features: [
              'Up to 199 employees',
              'Basic email support',
              'Standard reporting dashboard',
              'Monthly security insights',
              'Core behavioral analytics',
              'Microsoft Graph integration',
            ],
            ctaText: 'Start Free Trial',
            supportLevel: 'Email support',
            highlighted: false,
          },
          {
            id: 'medium',
            name: 'Medium Enterprise',
            priceAnnual: '€249',
            priceMonthly: '€299',
            period: 'per month (starting at)',
            description: 'Ideal for growing companies with 200+ employees',
            features: [
              '200+ employees',
              'Priority email support',
              'Advanced reporting suite',
              'Weekly security insights',
              'Enhanced behavioral analytics',
              'Custom integrations',
              'Benchmark comparisons',
              'Executive dashboards',
            ],
            ctaText: 'Start Free Trial',
            supportLevel: 'Priority email support',
            highlighted: true,
          },
          {
            id: 'large',
            name: 'Large Enterprise',
            priceAnnual: 'Custom',
            priceMonthly: 'Custom',
            period: 'pricing',
            description: 'Tailored solutions for large organizations',
            features: [
              'Unlimited employees',
              'Phone & email support',
              'White-label reporting',
              'Real-time insights',
              'Advanced AI analytics',
              'Custom API access',
              'Dedicated account manager',
              'SLA guarantee',
              'Bespoke onboarding',
            ],
            ctaText: 'Contact Sales',
            supportLevel: 'Priority phone & email support with SLA',
            highlighted: false,
          },
        ],
      },

      plans: {
        starter: {
          name: 'Starter',
          description:
            'Perfect for small teams getting started with security culture measurement',
          price: '$49',
          period: 'per user/month',
          features: [
            'Basic behavioral monitoring',
            'Monthly culture reports',
            'Email support',
            'Up to 50 users',
          ],
        },
        professional: {
          name: 'Professional',
          description: 'Advanced features for growing security teams',
          price: '$99',
          period: 'per user/month',
          features: [
            'Advanced behavioral analytics',
            'Real-time monitoring',
            'Custom dashboards',
            'Priority support',
            'Up to 500 users',
          ],
        },
        enterprise: {
          name: 'Enterprise',
          description: 'Complete solution for large organizations',
          price: 'Custom',
          period: 'contact us',
          features: [
            'Full platform access',
            'White-label options',
            'Dedicated success manager',
            '24/7 support',
            'Unlimited users',
          ],
        },
      },
    },

    // Contact page
    contact: {
      title: 'Contact Us | Get in Touch with Praxis Navigator',
      description:
        'Contact Praxis Navigator for demos, support, or questions about security culture measurement.',
      headline: 'Get in Touch',
      subheadline: 'Ready to start measuring your security culture?',
      info: {
        email: 'contact@praxisnavigator.io',
        phone: '+1 (555) 123-4567',
        address: '123 Security Street, Cyber City, CC 12345',
        hours: 'Monday - Friday: 9:00 AM - 6:00 PM (UTC)',
      },
    },

    // Resources page
    resources: {
      title: 'Resources | Security Culture Research & Insights',
      description:
        'Access whitepapers, case studies, and research on security culture measurement and behavioral analytics.',
      headline: 'Security Culture Resources',
      subheadline:
        'Research, insights, and best practices for security leaders',

      // Resource Hub Section
      hub: {
        title: 'Resource Hub',
        subtitle: 'Knowledge center for security culture professionals',
      },

      categories: {
        whitepapers: 'Whitepapers',
        caseStudies: 'Case Studies',
        research: 'Research Papers',
        guides: 'Implementation Guides',
        webinars: 'Webinars',
      },
    },

    // Segments index
    segments: {
      title:
        'Solutions by Role | Praxis Navigator for Every Security Professional',
      description:
        'Tailored security culture solutions for security leaders, executives, managers, and SAT teams.',
      headline: 'Solutions Tailored to Your Role',
      subheadline:
        'Praxis Navigator adapts to your specific needs and responsibilities',

      roles: [
        {
          title: 'Security Leaders',
          description:
            'Strategic insights and executive reporting for CISOs and security directors',
          href: '/segments/security-leaders',
        },
        {
          title: 'Executives',
          description: 'Board-ready business cases and ROI demonstration',
          href: '/segments/executives',
        },
        {
          title: 'Managers',
          description: 'Team performance analytics and culture building tools',
          href: '/segments/managers',
        },
        {
          title: 'SAT Teams',
          description:
            'Training effectiveness measurement and program optimization',
          href: '/segments/sat-teams',
        },
      ],
    },

    // Legal pages
    legal: {
      privacy: {
        title: 'Privacy Policy | Praxis Navigator Data Protection',
        headline: 'Privacy Policy',
        lastUpdated: 'Last updated: December 2024',
      },
      terms: {
        title: 'Terms of Service | Praxis Navigator User Agreement',
        headline: 'Terms of Service',
        lastUpdated: 'Last updated: December 2024',
      },
      cookies: {
        title: 'Cookie Policy | Praxis Navigator Cookie Usage',
        headline: 'Cookie Policy',
        lastUpdated: 'Last updated: December 2024',
      },
    },

    // Common page elements
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      getStarted: 'Get Started',
      contactUs: 'Contact Us',
      scheduleDemo: 'Schedule Demo',
      startTrial: 'Start Free Trial',
      downloadPdf: 'Download PDF',
      watchVideo: 'Watch Video',
      viewCase: 'View Case Study',
      requestInfo: 'Request Information',
    },
  },

  no: {
    // About page
    about: {
      title: 'Om Praxis Navigator | Sikkerhetskultur Eksperter',
      description:
        'Lær om Praxis Navigator sitt oppdrag å revolusjonere sikkerhetskultur måling gjennom evidensbasert adferdsanalyse.',
      headline: 'Revolusjonerer Sikkerhetskultur Måling',
      subheadline: 'Evidensbasert adferdsanalyse for bedriftssikkerhet',
      mission:
        'Vårt oppdrag er å transformere hvordan organisasjoner måler og forbedrer sikkerhetskultur ved å tilby objektive, handlingsrettede innsikter i faktisk sikkerhetsadferd.',

      kaiRoer: {
        title: 'Om Kai Roer | Sikkerhetskultur Rammeverk Skaper',
        description:
          'Møt Kai Roer, skaper av Sikkerhetskultur Rammeverket adoptert av ENISA og medforfatter av The Security Culture Playbook.',
        headline: 'Møt Kai Roer',
        subheadline: 'Sikkerhetskultur Ekspert & Rammeverk Skaper',
        bio: 'Kai Roer er verdens ledende autoritet på sikkerhetskultur måling og adferdsendring i cybersikkerhet.',
        background:
          'Med over 25 års erfaring innen cybersikkerhet forskning og praksis, har Kai viet sin karriere til å forstå og forbedre menneskelige faktorer i informasjonssikkerhet.',
        achievements: [
          'Skaper av Sikkerhetskultur Rammeverket adoptert av ENISA',
          'Medforfatter av "The Security Culture Playbook" (Wiley, 2022)',
          'Tidligere Chief Research Officer hos KnowBe4',
          'Grunnlegger av CLTRe (oppkjøpt av KnowBe4)',
          'Internasjonal hovedtaler på 100+ konferanser',
          'Publisert 50+ akademiske artikler om sikkerhetskultur',
        ],
      },
    },

    // Product page
    product: {
      title: 'Produkt Oversikt | Praxis Navigator Sikkerhetskultur Plattform',
      description:
        'Omfattende sikkerhetskultur måleplattform med Microsoft Graph API integrasjon for sanntids adferdsovervåking.',
      headline: 'Den Komplette Sikkerhetskultur Måleplattformen',
      subheadline:
        'Evidensbasert adferdsovervåking med Microsoft Graph API integrasjon',
    },

    // Pricing page
    pricing: {
      title: 'Priser | Praxis Navigator Sikkerhetskultur Plattform',
      description:
        'Fleksible prisplaner for sikkerhetskultur måling og adferdsovervåking. Start med gratis prøveversjon.',
      headline: 'Velg Din Sikkerhetskultur Måleplan',
      subheadline:
        'Fleksible alternativer for organisasjoner av alle størrelser',

      // Pricing Table Section Content
      table: {
        sectionTitle: 'Velg Din Plan',
        sectionDescription:
          'Transparente priser designet for organisasjoner av alle størrelser. Alle planer inkluderer våre kjernefunksjoner for måling av sikkerhetskultur.',
        billingToggle: {
          monthly: 'Månedlig',
          annual: 'Årlig',
        },
        saveBadge: 'Spar 20%',
        allPlansInclude: 'Alle planer inkluderer:',
        supportLevel: 'Støttenivå',
        mostPopular: 'Mest Populær',
        commonFeatures: [
          'Microsoft 365 integrasjon',
          'Automatisert rapportering',
          'AI-drevne analytikk',
          'Sanntids risikoovervåking',
          'GDPR kompatibel',
          'Hostet i Europa',
          'Datakryptering',
        ],
        plans: [
          {
            id: 'small',
            name: 'Liten Virksomhet',
            priceAnnual: '€199',
            priceMonthly: '€249',
            period: 'per måned',
            description: 'Perfekt for organisasjoner opptil 199 ansatte',
            features: [
              'Opptil 199 ansatte',
              'Grunnleggende e-poststøtte',
              'Standard rapporteringsdashboard',
              'Månedlige sikkerhetsinnsikter',
              'Kjerne atferdsanalytikk',
              'Microsoft Graph integrasjon',
            ],
            ctaText: 'Start Gratis Prøveversjon',
            supportLevel: 'E-poststøtte',
            highlighted: false,
          },
          {
            id: 'medium',
            name: 'Medium Virksomhet',
            priceAnnual: '€249',
            priceMonthly: '€299',
            period: 'per måned (starter på)',
            description: 'Ideell for voksende bedrifter med 200+ ansatte',
            features: [
              '200+ ansatte',
              'Prioritert e-poststøtte',
              'Avansert rapporteringssuite',
              'Ukentlige sikkerhetsinnsikter',
              'Forbedret atferdsanalytikk',
              'Tilpassede integrasjoner',
              'Benchmark sammenligninger',
              'Lederskap dashboards',
            ],
            ctaText: 'Start Gratis Prøveversjon',
            supportLevel: 'Prioritert e-poststøtte',
            highlighted: true,
          },
          {
            id: 'large',
            name: 'Stor Virksomhet',
            priceAnnual: 'Tilpasset',
            priceMonthly: 'Tilpasset',
            period: 'prising',
            description: 'Skreddersydde løsninger for store organisasjoner',
            features: [
              'Ubegrenset ansatte',
              'Telefon & e-poststøtte',
              'White-label rapportering',
              'Sanntids innsikter',
              'Avansert AI analytikk',
              'Tilpasset API tilgang',
              'Dedikert kontoansvarlig',
              'SLA garanti',
              'Skreddersydd onboarding',
            ],
            ctaText: 'Kontakt Salg',
            supportLevel: 'Prioritert telefon & e-poststøtte med SLA',
            highlighted: false,
          },
        ],
      },

      plans: {
        starter: {
          name: 'Starter',
          description:
            'Perfekt for små team som kommer i gang med sikkerhetskultur måling',
          price: '549 kr',
          period: 'per bruker/måned',
          features: [
            'Grunnleggende adferdsovervåking',
            'Månedlige kultur rapporter',
            'E-post support',
            'Opptil 50 brukere',
          ],
        },
        professional: {
          name: 'Profesjonell',
          description: 'Avanserte funksjoner for voksende sikkerhetsteam',
          price: '1099 kr',
          period: 'per bruker/måned',
          features: [
            'Avansert adferdsanalyse',
            'Sanntids overvåking',
            'Tilpassede dashboards',
            'Prioritet support',
            'Opptil 500 brukere',
          ],
        },
        enterprise: {
          name: 'Bedrift',
          description: 'Komplett løsning for store organisasjoner',
          price: 'Tilpasset',
          period: 'kontakt oss',
          features: [
            'Full plattform tilgang',
            'White-label alternativer',
            'Dedikert suksess manager',
            '24/7 support',
            'Ubegrenset brukere',
          ],
        },
      },
    },

    // Contact page
    contact: {
      title: 'Kontakt Oss | Ta Kontakt med Praxis Navigator',
      description:
        'Kontakt Praxis Navigator for demoer, support, eller spørsmål om sikkerhetskultur måling.',
      headline: 'Ta Kontakt',
      subheadline: 'Klar til å begynne å måle din sikkerhetskultur?',
      info: {
        email: 'kontakt@praxisnavigator.no',
        phone: '+47 12 34 56 78',
        address: 'Sikkerhetsgate 123, Cyber By, CB 12345',
        hours: 'Mandag - Fredag: 09:00 - 18:00 (CET)',
      },
    },

    // Resources page
    resources: {
      title: 'Ressurser | Sikkerhetskultur Forskning & Innsikter',
      description:
        'Tilgang til hvitbøker, casestudier, og forskning på sikkerhetskultur måling og adferdsanalyse.',
      headline: 'Sikkerhetskultur Ressurser',
      subheadline:
        'Forskning, innsikter, og beste praksis for sikkerhetsledere',

      // Resource Hub Section
      hub: {
        title: 'Ressurs Hub',
        subtitle: 'Kunnskapssenter for sikkerhetskultur eksperter',
      },

      categories: {
        whitepapers: 'Hvitbøker',
        caseStudies: 'Casestudier',
        research: 'Forskningsartikler',
        guides: 'Implementeringsguider',
        webinars: 'Webinarer',
      },
    },

    // Segments index
    segments: {
      title:
        'Løsninger etter Rolle | Praxis Navigator for Hver Sikkerhetsekspert',
      description:
        'Skreddersydde sikkerhetskultur løsninger for sikkerhetsledere, ledere, managere, og SAT team.',
      headline: 'Løsninger Tilpasset Din Rolle',
      subheadline:
        'Praxis Navigator tilpasser seg dine spesifikke behov og ansvar',

      roles: [
        {
          title: 'Sikkerhetsledere',
          description:
            'Strategiske innsikter og leder rapportering for CISOs og sikkerhetsdirektører',
          href: '/no/segments/security-leaders',
        },
        {
          title: 'Ledere',
          description: 'Styreklar forretningscase og ROI demonstrasjon',
          href: '/no/segments/executives',
        },
        {
          title: 'Managere',
          description: 'Team ytelse analytikk og kultur byggingsverktøy',
          href: '/no/segments/managers',
        },
        {
          title: 'SAT Team',
          description: 'Treningseffektivitet måling og program optimalisering',
          href: '/no/segments/sat-teams',
        },
      ],
    },

    // Legal pages
    legal: {
      privacy: {
        title: 'Personvernerklæring | Praxis Navigator Databeskyttelse',
        headline: 'Personvernerklæring',
        lastUpdated: 'Sist oppdatert: Desember 2024',
      },
      terms: {
        title: 'Vilkår for Bruk | Praxis Navigator Brukeravtale',
        headline: 'Vilkår for Bruk',
        lastUpdated: 'Sist oppdatert: Desember 2024',
      },
      cookies: {
        title: 'Cookie Policy | Praxis Navigator Cookie Bruk',
        headline: 'Cookie Policy',
        lastUpdated: 'Sist oppdatert: Desember 2024',
      },
    },

    // Common page elements
    common: {
      readMore: 'Les Mer',
      learnMore: 'Lær Mer',
      getStarted: 'Kom I Gang',
      contactUs: 'Kontakt Oss',
      scheduleDemo: 'Bestill Demo',
      startTrial: 'Start Gratis Prøveversjon',
      downloadPdf: 'Last Ned PDF',
      watchVideo: 'Se Video',
      viewCase: 'Se Casestudie',
      requestInfo: 'Be Om Informasjon',
    },
  },
} as const;
