export const forms = {
  en: {
    // Trial Call to Action Section
    trialCta: {
      badge: '30-Day Free Trial',
      headline: 'Ready to Transform Your Security Culture?',
      subheadline:
        "Start measuring and improving your organization's security behavior today.",
      description:
        'Get full access to all Praxis Navigator features for 30 days. No credit card required, no commitment. Deploy in minutes through Azure Marketplace with familiar enterprise procurement.',
      benefits: [
        'Full feature access for 30 days',
        'No credit card or payment required',
        'Deploy directly from Azure Marketplace',
        'Enterprise-grade security from day one',
        'Dedicated onboarding support',
        'Cancel anytime during trial',
      ],
      ctaTrialText: 'Start Free Trial on Azure',
      ctaDemoText: 'Schedule a Demo',
      trustSignals: {
        title: 'Trusted by Enterprise Organizations',
        items: [
          'Microsoft Graph API Integration',
          'GDPR Compliant & EU Hosted',
          'Enterprise SSO Support',
          'SOC 2 Type II Certified',
        ],
      },
      quickStart: {
        title: 'Quick Start Guide',
        items: [
          {
            label: 'Deployment',
            value: '< 5 minutes',
          },
          {
            label: 'Billing',
            value: 'Zero until trial ends',
          },
          {
            label: 'Support',
            value: 'Dedicated onboarding specialist',
          },
        ],
      },
    },

    // Common form elements
    form: {
      name: 'Full Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      company: 'Company',
      title: 'Job Title',
      phone: 'Phone Number',
      message: 'Message',
      submit: 'Submit',
      submitting: 'Submitting...',
      required: 'Required field',
      optional: 'Optional',

      // Validation messages
      validation: {
        email: 'Please enter a valid email address',
        required: 'This field is required',
        minLength: 'This field is too short',
        maxLength: 'This field is too long',
        phoneNumber: 'Please enter a valid phone number',
      },

      // Status messages
      success: "Thank you! We'll be in touch soon.",
      error: 'Something went wrong. Please try again.',
      sending: 'Sending your message...',

      // GDPR and compliance
      gdpr: {
        consent:
          'I consent to processing of my personal data according to the Privacy Policy',
        newsletter: 'I would like to receive updates about Praxis Navigator',
        required: 'Please accept our privacy policy to continue',
      },
    },

    // Contact forms by segment
    contact: {
      // Enterprise/General contact
      enterprise: {
        headline: 'Ready to Transform Your Security Culture?',
        subtext: 'Book a demo with our security culture experts',
        ctaButton: 'Schedule Demo',
        benefits: [
          'Live product demonstration',
          'Custom implementation planning',
          'ROI analysis for your organization',
          'Expert security culture consultation',
        ],
      },

      // Security Leaders
      securityLeaders: {
        headline: 'See Praxis Navigator in Action',
        subtext: 'Get a personalized demo tailored for security leadership',
        ctaButton: 'Request Executive Demo',
        benefits: [
          'Executive-level product walkthrough',
          'Risk reduction case studies',
          'Board reporting examples',
          'Implementation roadmap',
        ],
      },

      // Executives
      executives: {
        headline: 'Executive Security Culture Consultation',
        subtext: 'Strategic guidance for enterprise security transformation',
        ctaButton: 'Schedule Executive Consultation',
        benefits: [
          'Strategic security culture assessment',
          'Board-ready business case development',
          'Executive peer network access',
          'Implementation success planning',
        ],
      },

      // Managers
      managers: {
        headline: "Transform Your Team's Security Awareness",
        subtext:
          'See how Praxis Navigator helps managers build security culture',
        ctaButton: 'Book Manager Demo',
        benefits: [
          'Team performance analytics',
          'Manager dashboard walkthrough',
          'Training effectiveness measurement',
          'Team engagement strategies',
        ],
      },

      // SAT Teams
      satTeams: {
        headline: 'Prove Your Training Effectiveness',
        subtext: 'Demonstrate real behavioral impact of your security programs',
        ctaButton: 'Schedule SAT Demo',
        benefits: [
          'Training ROI measurement',
          'Behavioral analytics demo',
          'Program effectiveness tracking',
          'Compliance reporting tools',
        ],
      },

      // Compliance
      compliance: {
        headline: 'Streamline Security Compliance Reporting',
        subtext: 'Automated compliance documentation and audit trails',
        ctaButton: 'Request Compliance Demo',
        benefits: [
          'Automated compliance reporting',
          'Audit trail documentation',
          'Regulatory framework mapping',
          'Risk assessment tools',
        ],
      },
    },
  },

  no: {
    // Trial Call to Action Section
    trialCta: {
      badge: '30-Dagers Gratis Prøveversjon',
      headline: 'Klar til å Transformere Din Sikkerhetskultur?',
      subheadline:
        'Start med å måle og forbedre din organisasjons sikkerhetsatferd i dag.',
      description:
        'Få full tilgang til alle Praxis Navigator-funksjoner i 30 dager. Ingen kredittkort nødvendig, ingen forpliktelse. Implementer på minutter gjennom Azure Marketplace med kjent virksomhetsanskaffelse.',
      benefits: [
        'Full funksjonstilgang i 30 dager',
        'Ingen kredittkort eller betaling påkrevd',
        'Implementer direkte fra Azure Marketplace',
        'Virksomhetsgrad sikkerhet fra dag én',
        'Dedikert onboarding støtte',
        'Avbryt når som helst under prøveperioden',
      ],
      ctaTrialText: 'Start Gratis Prøveversjon på Azure',
      ctaDemoText: 'Bestill Demo',
      trustSignals: {
        title: 'Godkjent av Norske Virksomheter',
        items: [
          'Microsoft Graph API Integrasjon',
          'GDPR og Personopplysningsloven kompatibel',
          'Virksomhet SSO støtte',
          'SOC 2 Type II sertifisert',
          'Hostet i EU/EØS',
          'NS-ISO 27001 kompatibel',
        ],
      },
      quickStart: {
        title: 'Hurtigstart Guide',
        items: [
          {
            label: 'Implementering',
            value: '< 5 minutter',
          },
          {
            label: 'Fakturering',
            value: 'Null til prøveperiode slutter',
          },
          {
            label: 'Support',
            value: 'Dedikert onboarding spesialist',
          },
        ],
      },
    },

    // Vanlige form elementer
    form: {
      name: 'Fullt Navn',
      firstName: 'Fornavn',
      lastName: 'Etternavn',
      email: 'E-postadresse',
      company: 'Selskap',
      title: 'Jobbtittel',
      phone: 'Telefonnummer',
      message: 'Melding',
      submit: 'Send Inn',
      submitting: 'Sender...',
      required: 'Obligatorisk felt',
      optional: 'Valgfritt',

      // Validation messages
      validation: {
        email: 'Vennligst skriv inn en gyldig e-postadresse',
        required: 'Dette feltet er obligatorisk',
        minLength: 'Dette feltet er for kort',
        maxLength: 'Dette feltet er for langt',
        phoneNumber: 'Vennligst skriv inn et gyldig telefonnummer',
      },

      // Status messages
      success: 'Takk! Vi tar kontakt snart.',
      error: 'Noe gikk galt. Vennligst prøv igjen.',
      sending: 'Sender meldingen din...',

      // GDPR and compliance
      gdpr: {
        consent:
          'Jeg samtykker til behandling av mine personopplysninger i henhold til Personvernerklæringen og Personopplysningsloven',
        newsletter:
          'Jeg ønsker å motta nyttig informasjon om Praxis Navigator (valgfritt)',
        required: 'Du må akseptere vår personvernerklæring for å fortsette',
        dataController:
          'Praxis Navigator er behandlingsansvarlig for dine personopplysninger',
        rights:
          'Du har rett til innsyn, retting, sletting og portabilitet av dine data',
        retention:
          'Vi oppbevarer dine data kun så lenge som nødvendig for formålet',
        thirdParty:
          'Vi deler ikke dine data med tredjeparter uten ditt samtykke',
      },
    },

    // Contact forms by segment
    contact: {
      // Enterprise/General contact
      enterprise: {
        headline: 'Klar til å Transformere Din Sikkerhetskultur?',
        subtext: 'Bestill en demo med våre sikkerhetskultur eksperter',
        ctaButton: 'Bestill Demo',
        benefits: [
          'Live produktdemonstrasjon',
          'Tilpasset implementeringsplanlegging',
          'ROI analyse for din organisasjon',
          'Ekspert sikkerhetskultur konsultasjon',
        ],
      },

      // Security Leaders
      securityLeaders: {
        headline: 'Se Praxis Navigator i Aksjon',
        subtext: 'Få en personalisert demo tilpasset sikkerhetsledelse',
        ctaButton: 'Be om Leder Demo',
        benefits: [
          'Leder-nivå produktgjennomgang',
          'Risikoreduksjon casestudier',
          'Styrerapportering eksempler',
          'Implementering roadmap',
        ],
      },

      // Executives
      executives: {
        headline: 'Leder Sikkerhetskultur Konsultasjon',
        subtext: 'Strategisk veiledning for bedrift sikkerhetstransformasjon',
        ctaButton: 'Bestill Leder Konsultasjon',
        benefits: [
          'Strategisk sikkerhetskultur vurdering',
          'Styreklar forretningscase utvikling',
          'Leder peer nettverk tilgang',
          'Implementering suksess planlegging',
        ],
      },

      // Managers
      managers: {
        headline: 'Transformer Ditt Teams Sikkerhetsbevissthet',
        subtext:
          'Se hvordan Praxis Navigator hjelper ledere bygge sikkerhetskultur',
        ctaButton: 'Bestill Leder Demo',
        benefits: [
          'Team ytelse analytikk',
          'Leder dashboard gjennomgang',
          'Treningseffektivitet måling',
          'Team engasjement strategier',
        ],
      },

      // SAT Teams
      satTeams: {
        headline: 'Bevis Din Treningseffektivitet',
        subtext: 'Demonstrer ekte adferdsverdi av dine sikkerhetsprogrammer',
        ctaButton: 'Bestill SAT Demo',
        benefits: [
          'Trening ROI måling',
          'Adferdsanalyse demo',
          'Program effektivitet sporing',
          'Etterlevelse rapporterings verktøy',
        ],
      },

      // Compliance
      compliance: {
        headline: 'Strømline Sikkerhetsetterlevelse Rapportering',
        subtext: 'Automatisert etterlevelse dokumentasjon og revisjonsspor',
        ctaButton: 'Be om Etterlevelse Demo',
        benefits: [
          'Automatisert etterlevelse rapportering',
          'Revisjonsspor dokumentasjon',
          'Regulatorisk rammeverk kartlegging',
          'Risikovurdering verktøy',
        ],
      },
    },
  },
} as const;
