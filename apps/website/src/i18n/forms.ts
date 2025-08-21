export const forms = {
  en: {
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
    // Common form elements
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
          'Jeg samtykker til behandling av mine personopplysninger i henhold til Personvernerklæringen',
        newsletter: 'Jeg ønsker å motta oppdateringer om Praxis Navigator',
        required: 'Vennligst aksepter vår personvernerklæring for å fortsette',
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
