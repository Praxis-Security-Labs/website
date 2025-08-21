export const compliance = {
  en: {
    // Regulatory frameworks
    frameworks: {
      gdpr: 'GDPR (General Data Protection Regulation)',
      iso27001: 'ISO 27001 Information Security Management',
      soc2: 'SOC 2 Type II Security Controls',
      nist: 'NIST Cybersecurity Framework',
    },

    // Compliance statements
    statements: {
      dataLocation: 'All data processed and stored within EU/EEA',
      encryption: 'End-to-end encryption for all data transmission',
      access: 'Role-based access controls and audit logging',
      retention: 'Configurable data retention policies',
      privacy: 'Privacy by design and by default',
    },

    // Legal compliance
    legal: {
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      dpa: 'Data Processing Agreement',
      cookies: 'Cookie Policy',
      subprocessors: 'List of Sub-processors',
    },
  },

  no: {
    // Regulatory frameworks
    frameworks: {
      gdpr: 'GDPR (Personvernforordningen)',
      personalDataAct: 'Personopplysningsloven',
      iso27001: 'NS-ISO 27001 Informasjonssikkerhetsledelse',
      soc2: 'SOC 2 Type II Sikkerhetskontroller',
      nist: 'NIST Cybersikkerhet Rammeverk',
      datatilsynet: 'Datatilsynet godkjente prosedyrer',
    },

    // Norwegian-specific compliance
    norwegian: {
      personalDataAct: {
        name: 'Personopplysningsloven (LOV-2018-06-15-38)',
        description: 'Norsk implementering av GDPR',
        authority: 'Datatilsynet',
        website: 'https://www.datatilsynet.no/',
      },
      dataLocation: {
        requirement: 'Data må lagres innenfor EU/EØS',
        implementation: 'Alle data lagres i EU/EØS datasentre',
        verification: 'Årlig sertifisering av datalokalisering',
      },
      rights: {
        access: 'Rett til innsyn (art. 15)',
        rectification: 'Rett til retting (art. 16)',
        erasure: 'Rett til sletting (art. 17)',
        portability: 'Rett til dataportabilitet (art. 20)',
        objection: 'Rett til å protestere (art. 21)',
      },
    },

    // Compliance statements
    statements: {
      dataLocation: 'Alle data behandles og lagres innenfor EU/EØS',
      encryption: 'Ende-til-ende kryptering for all dataoverføring',
      access: 'Rollebasert tilgangskontroll og revisjonslogging',
      retention: 'Konfigurerbare datalagringsretningslinjer',
      privacy: 'Personvern by design og by default',
      norwegian: 'Overholder Personopplysningsloven og Datatilsynets krav',
    },

    // Legal compliance
    legal: {
      privacy: 'Personvernerklæring',
      terms: 'Vilkår for Bruk',
      dpa: 'Databehandleravtale',
      cookies: 'Cookie Policy',
      subprocessors: 'Liste over Underdatabehandlere',
      datatilsynet: 'Datatilsynet Registrering',
    },

    // Cultural considerations for business communication
    cultural: {
      communication: {
        style: 'Direkte, faktabasert kommunikasjon',
        formality: 'Profesjonell men ikke overformal',
        hierarchy: 'Flate organisasjonsstrukturer',
        consensus: 'Konsensus-orientert beslutningstaking',
      },
      business: {
        transparency: 'Åpenhet om priser og vilkår',
        trust: 'Byggel langsiktige relasjoner',
        quality: 'Fokus på kvalitet fremfor kvantitet',
        sustainability: 'Miljø- og bærekraftshensyn',
      },
      timing: {
        response: 'Respekter norske arbeidstider',
        vacation: 'Hensyn til norske ferieperioder (juli)',
        meetings: 'Punktlighet er viktig',
        planning: 'Langsiktig planlegging prefereres',
      },
    },
  },
} as const;

export type ComplianceTranslations = typeof compliance;
