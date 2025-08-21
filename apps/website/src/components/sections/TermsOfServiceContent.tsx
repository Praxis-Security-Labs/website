import React from 'react';

interface TermsOfServiceContentProps {
  currentLanguage?: string;
}

export const TermsOfServiceContent: React.FC<TermsOfServiceContentProps> = ({
  currentLanguage = 'en',
}) => {
  const isNorwegian = currentLanguage === 'no';

  const lastUpdated = new Date().toLocaleDateString(
    isNorwegian ? 'no-NO' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated',
      introduction: {
        title: 'Agreement Overview',
        content: `These Terms of Service ("Terms") govern your use of the Praxis Navigator website and security training platform ("Service") operated by Praxis Navigator ("Company", "we", "us", or "our"). By accessing or using our Service, you ("Customer", "you", or "your") agree to be bound by these Terms. If you do not agree to these Terms, do not use our Service.`,
      },
      serviceDescription: {
        title: 'Service Description',
        content: `Praxis Navigator provides enterprise security culture measurement and behavioral monitoring services through:`,
        services: [
          'Continuous behavioral security monitoring and analytics',
          'Executive dashboards and compliance reporting',
          'Security training effectiveness measurement',
          'Microsoft Graph API integration for organizational insights',
          'Personalized security culture improvement recommendations',
          'Enterprise-grade data security and GDPR compliance',
        ],
      },
      accountManagement: {
        title: 'Account Management and User Access',
        content: `Enterprise accounts are managed through designated administrators with the following provisions:`,
        provisions: [
          'Account administrators must be authorized representatives of the subscribing organization',
          'User access permissions are controlled by enterprise administrators',
          'Individual user accounts require valid organizational email addresses',
          'Multi-factor authentication is required for all administrative functions',
          'Account security and access control are shared responsibilities',
          'Organizations are responsible for managing user lifecycle and permissions',
        ],
      },
      dataSecurityObligations: {
        title: 'Data Security and Protection Obligations',
        company: {
          title: 'Our Obligations',
          items: [
            'Maintain SOC2 Type II compliance and enterprise security standards',
            'Implement end-to-end encryption for all data transmission and storage',
            'Provide 99.9% service availability with appropriate backup systems',
            'Conduct regular security audits and vulnerability assessments',
            'Maintain GDPR compliance and data processing agreements',
            'Provide incident response and breach notification within 72 hours',
            'Ensure secure data centers with physical and logical access controls',
          ],
        },
        customer: {
          title: 'Your Obligations',
          items: [
            'Maintain confidentiality of account credentials and access keys',
            'Ensure authorized user access and appropriate permission management',
            'Comply with data protection laws applicable to your jurisdiction',
            'Promptly report suspected security incidents or unauthorized access',
            'Maintain current contact information for security notifications',
            'Use the Service only for legitimate business and security purposes',
            'Ensure organizational consent for behavioral monitoring where required',
          ],
        },
      },
      intellectualProperty: {
        title: 'Intellectual Property Rights',
        content: `Intellectual property rights are clearly defined as follows:`,
        rights: [
          {
            category: 'Praxis Navigator IP',
            description:
              'All software, algorithms, dashboards, reports, and analytical frameworks remain our exclusive intellectual property',
          },
          {
            category: 'Customer Data',
            description:
              'You retain all rights to your organizational data, behavioral metrics, and training information',
          },
          {
            category: 'Derived Insights',
            description:
              'Aggregated and anonymized insights may be used for service improvement and research purposes',
          },
          {
            category: 'Confidential Information',
            description:
              'Both parties agree to protect confidential information disclosed during the service relationship',
          },
        ],
      },
      serviceAvailability: {
        title: 'Service Level Agreement and Availability',
        sla: {
          availability: '99.9% monthly uptime excluding scheduled maintenance',
          maintenance:
            'Planned maintenance windows communicated 48 hours in advance',
          support: '24/7 technical support for enterprise customers',
          response:
            'Critical issue response within 2 hours during business hours',
          escalation:
            'Executive escalation process for service-impacting incidents',
        },
      },
      limitationOfLiability: {
        title: 'Limitation of Liability and Indemnification',
        content: `Liability limitations are structured to provide appropriate protection for enterprise relationships:`,
        limitations: [
          'Total liability limited to 12 months of fees paid for the affected service',
          'No liability for indirect, consequential, or punitive damages',
          'Customer indemnifies Company for unauthorized use or data breaches caused by Customer',
          'Company indemnifies Customer for third-party IP claims related to the Service',
          'Force majeure events exclude both parties from performance obligations',
          'Insurance requirements: Company maintains appropriate professional liability coverage',
        ],
      },
      terminationProcedures: {
        title: 'Termination and Data Export Procedures',
        termination: {
          title: 'Termination Rights',
          items: [
            'Either party may terminate with 30 days written notice',
            'Immediate termination for material breach after 15-day cure period',
            'Automatic renewal unless either party provides termination notice',
            'Enterprise customers have termination rights for service level failures',
          ],
        },
        dataExport: {
          title: 'Data Export and Deletion',
          items: [
            'Full data export available in standard formats (JSON, CSV) within 30 days',
            'Customer data deleted from production systems within 90 days of termination',
            'Backup retention for 12 months for recovery purposes only',
            'Certification of data deletion provided upon request',
            'Emergency data recovery available during transition period',
          ],
        },
      },
      disputeResolution: {
        title: 'Dispute Resolution and Governing Law',
        content: `Dispute resolution procedures are designed for efficient business resolution:`,
        process: [
          'Initial disputes addressed through direct negotiation between designated representatives',
          'Mediation through mutually agreed mediator if negotiation fails',
          'Binding arbitration under applicable commercial arbitration rules',
          'Governing law: Laws of Norway for EU customers, applicable local law for other jurisdictions',
          'Jurisdiction: Courts of Oslo, Norway for legal proceedings',
          'Emergency injunctive relief available through appropriate courts',
        ],
      },
      complianceAndRegulatory: {
        title: 'Compliance and Regulatory Framework',
        frameworks: [
          {
            framework: 'GDPR (EU General Data Protection Regulation)',
            description:
              'Full compliance including data subject rights, processing transparency, and cross-border transfer protections',
          },
          {
            framework: 'SOC2 Type II',
            description:
              'Annual security audit compliance for service organization controls related to security and availability',
          },
          {
            framework: 'ISO 27001',
            description:
              'Information security management system certification and continuous compliance monitoring',
          },
          {
            framework: 'NIS2 Directive (EU)',
            description:
              'Network and information security compliance for essential and important entities',
          },
        ],
      },
      modifications: {
        title: 'Modifications to Terms',
        content: `These Terms may be updated to reflect changes in our service, legal requirements, or business practices. We will provide notice of material changes through email notification to account administrators and prominent website posting at least 30 days before changes take effect. Continued use of the Service after changes constitute acceptance of updated Terms.`,
      },
    },
    no: {
      title: 'Bruksvilkår',
      lastUpdated: 'Sist oppdatert',
      introduction: {
        title: 'Avtaleoversikt',
        content: `Disse bruksvilkårene ("Vilkår") regulerer din bruk av Praxis Navigator-nettstedet og sikkerhetstreningsplattformen ("Tjeneste") som drives av Praxis Navigator ("Selskap", "vi", "oss" eller "vårt"). Ved å få tilgang til eller bruke vår tjeneste, godtar du ("Kunde", "du" eller "din") å være bundet av disse vilkårene. Hvis du ikke godtar disse vilkårene, ikke bruk vår tjeneste.`,
      },
      serviceDescription: {
        title: 'Tjenestebeskrivelse',
        content: `Praxis Navigator tilbyr bedriftsmåling av sikkerhetskultur og atferdsovervåkingstjenester gjennom:`,
        services: [
          'Kontinuerlig atferdssikkerhetsovervåking og analyser',
          'Ledelsesdashbord og samsvarrapportering',
          'Måling av sikkerhetstreningseffektivitet',
          'Microsoft Graph API-integrasjon for organisatoriske innsikter',
          'Personaliserte anbefalinger for forbedring av sikkerhetskultur',
          'Bedriftsnivå datasikkerhet og GDPR-samsvar',
        ],
      },
      accountManagement: {
        title: 'Kontoadministrasjon og Brukertilgang',
        content: `Bedriftskontoer administreres gjennom utpekte administratorer med følgende bestemmelser:`,
        provisions: [
          'Kontoadministratorer må være autoriserte representanter for den abonnerende organisasjonen',
          'Brukertilgangstillatelser kontrolleres av bedriftsadministratorer',
          'Individuelle brukerkontoer krever gyldige organisatoriske e-postadresser',
          'Multifaktor-autentisering kreves for alle administrative funksjoner',
          'Kontosikkerhet og tilgangskontroll er delt ansvar',
          'Organisasjoner er ansvarlige for å administrere brukernes livssyklus og tillatelser',
        ],
      },
      dataSecurityObligations: {
        title: 'Datasikkerhet og Beskyttelsesforpliktelser',
        company: {
          title: 'Våre Forpliktelser',
          items: [
            'Opprettholde SOC2 Type II-samsvar og bedriftssikkerhetsstandarder',
            'Implementere ende-til-ende kryptering for all dataoverføring og lagring',
            'Tilby 99,9% tjenestetilgjengelighet med passende sikkerhetskopisystemer',
            'Gjennomføre regelmessige sikkerhetsrevisjoner og sårbarhetsanalyser',
            'Opprettholde GDPR-samsvar og databehandlingsavtaler',
            'Tilby hendelsesrespons og bruddvarsling innen 72 timer',
            'Sikre sikre datasentre med fysiske og logiske tilgangskontroller',
          ],
        },
        customer: {
          title: 'Dine Forpliktelser',
          items: [
            'Opprettholde konfidensialitet av kontolegitimasjon og tilgangsnøkler',
            'Sikre autorisert brukertilgang og passende tillatelsesadministrasjon',
            'Overholde databeskyttelseslover som gjelder for din jurisdiksjon',
            'Raskt rapportere mistenkte sikkerhetshendelser eller uautorisert tilgang',
            'Opprettholde oppdatert kontaktinformasjon for sikkerhetsvarsler',
            'Bruke tjenesten kun for legitime forretnings- og sikkerhetsformål',
            'Sikre organisatorisk samtykke for atferdsovervåking der nødvendig',
          ],
        },
      },
      intellectualProperty: {
        title: 'Immaterielle Rettigheter',
        content: `Immaterielle rettigheter er tydelig definert som følger:`,
        rights: [
          {
            category: 'Praxis Navigator IP',
            description:
              'All programvare, algoritmer, dashbord, rapporter og analytiske rammeverk forblir vår eksklusive immaterielle eiendom',
          },
          {
            category: 'Kundedata',
            description:
              'Du beholder alle rettigheter til dine organisatoriske data, atferdsmålinger og treningsinformasjon',
          },
          {
            category: 'Avledede Innsikter',
            description:
              'Aggregerte og anonymiserte innsikter kan brukes til tjenesteforbedring og forskningsformål',
          },
          {
            category: 'Konfidensiell Informasjon',
            description:
              'Begge parter godtar å beskytte konfidensiell informasjon avslørt under tjenesteforholdet',
          },
        ],
      },
      serviceAvailability: {
        title: 'Tjenestenivåavtale og Tilgjengelighet',
        sla: {
          availability:
            '99,9% månedlig oppetid ekskludert planlagt vedlikehold',
          maintenance:
            'Planlagte vedlikeholdsvindu kommunisert 48 timer i forveien',
          support: '24/7 teknisk støtte for bedriftskunder',
          response: 'Kritisk problemrespons innen 2 timer i kontortiden',
          escalation:
            'Ledelseseskaleringsprosess for tjenestepåvirkende hendelser',
        },
      },
      limitationOfLiability: {
        title: 'Ansvarsbegrensning og Skadesløsholdelse',
        content: `Ansvarsbegrensninger er strukturert for å gi passende beskyttelse for bedriftsforhold:`,
        limitations: [
          'Totalt ansvar begrenset til 12 måneders avgifter betalt for den berørte tjenesten',
          'Intet ansvar for indirekte, følgeskader eller straffeskader',
          'Kunde holder selskapet skadesløs for uautorisert bruk eller databrudd forårsaket av kunde',
          'Selskapet holder kunde skadesløs for tredjepartskrav på immaterielle rettigheter relatert til tjenesten',
          'Force majeure-hendelser fritar begge parter fra ytelsesforpliktelser',
          'Forsikringskrav: Selskapet opprettholder passende profesjonell ansvarsdekning',
        ],
      },
      terminationProcedures: {
        title: 'Oppsigelse og Dataeksportprosedyrer',
        termination: {
          title: 'Oppsigelsesrettigheter',
          items: [
            'Begge parter kan si opp med 30 dagers skriftlig varsel',
            'Umiddelbar oppsigelse for vesentlig mislighold etter 15-dagers rettetid',
            'Automatisk fornyelse med mindre begge parter gir oppsigelsesvarsel',
            'Bedriftskunder har oppsigelsesrettigheter for tjenestenivåfeil',
          ],
        },
        dataExport: {
          title: 'Dataeksport og Sletting',
          items: [
            'Full dataeksport tilgjengelig i standardformater (JSON, CSV) innen 30 dager',
            'Kundedata slettet fra produksjonssystemer innen 90 dager etter oppsigelse',
            'Sikkerhetskopi oppbevaring i 12 måneder kun for gjenopprettingsformål',
            'Sertifisering av datasletting gitt på forespørsel',
            'Nødgjenoppretting av data tilgjengelig i overgangsperioden',
          ],
        },
      },
      disputeResolution: {
        title: 'Konfliktløsning og Gjeldende Lov',
        content: `Konfliktløsningsprosedyrer er designet for effektiv forretningsløsning:`,
        process: [
          'Innledende konflikter adressert gjennom direkte forhandling mellom utpekte representanter',
          'Mekling gjennom gjensidig avtalt megler hvis forhandling mislykkes',
          'Bindende voldgift under gjeldende kommersielle voldgiftsregler',
          'Gjeldende lov: Norges lover for EU-kunder, gjeldende lokal lov for andre jurisdiksjoner',
          'Jurisdiksjon: Domstoler i Oslo, Norge for juridiske prosedyrer',
          'Nødrettslig påbud tilgjengelig gjennom passende domstoler',
        ],
      },
      complianceAndRegulatory: {
        title: 'Samsvar og Regulatorisk Rammeverk',
        frameworks: [
          {
            framework: 'GDPR (EU Generell Databeskyttelsesforordning)',
            description:
              'Full samsvar inkludert datasubjektrettigheter, behandlingsåpenhet og grenseoverskridende overføringsbeskyttelse',
          },
          {
            framework: 'SOC2 Type II',
            description:
              'Årlig sikkerheitsrevisjon samsvar for tjenesteorganisasjonskontroller relatert til sikkerhet og tilgjengelighet',
          },
          {
            framework: 'ISO 27001',
            description:
              'Informasjonssikkerhetsstyringssystem sertifisering og kontinuerlig samsvarsovervåking',
          },
          {
            framework: 'NIS2-direktivet (EU)',
            description:
              'Nettverks- og informasjonssikkerhetssamsvar for essensielle og viktige enheter',
          },
        ],
      },
      modifications: {
        title: 'Endringer i Vilkår',
        content: `Disse vilkårene kan oppdateres for å reflektere endringer i vår tjeneste, juridiske krav eller forretningspraksis. Vi vil gi varsling om vesentlige endringer gjennom e-postnotifikasjon til kontoadministratorer og fremtredende nettstedpostingsminst 30 dager før endringene trer i kraft. Fortsatt bruk av tjenesten etter endringer utgjør aksept av oppdaterte vilkår.`,
      },
    },
  };

  const t = content[isNorwegian ? 'no' : 'en'];

  return (
    <div className="min-h-screen bg-praxis-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-praxis-off-white py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-praxis-gray-600">
              <li>
                <a
                  href={isNorwegian ? '/no' : '/'}
                  className="hover:text-praxis-dark-blue focus-ring rounded"
                >
                  {isNorwegian ? 'Hjem' : 'Home'}
                </a>
              </li>
              <li className="text-praxis-gray-400">/</li>
              <li>
                <span className="text-praxis-black font-medium">
                  {isNorwegian ? 'Juridisk' : 'Legal'}
                </span>
              </li>
              <li className="text-praxis-gray-400">/</li>
              <li>
                <span
                  className="text-praxis-black font-medium"
                  aria-current="page"
                >
                  {t.title}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="h1 text-praxis-dark-blue mb-4">{t.title}</h1>
            <p className="body-base text-praxis-gray-600">
              {t.lastUpdated}: {lastUpdated}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-praxis-off-white rounded-lg p-6 mb-8">
            <h2 className="h6 text-praxis-dark-blue mb-4">
              {isNorwegian ? 'Innholdsfortegnelse' : 'Table of Contents'}
            </h2>
            <nav>
              <ol className="space-y-2 list-decimal list-inside text-praxis-dark-blue">
                <li>
                  <a
                    href="#introduction"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.introduction.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#service-description"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.serviceDescription.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#account-management"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.accountManagement.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#data-security"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataSecurityObligations.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#intellectual-property"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.intellectualProperty.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#service-availability"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.serviceAvailability.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#liability"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.limitationOfLiability.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#termination"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.terminationProcedures.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#dispute-resolution"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.disputeResolution.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#compliance"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.complianceAndRegulatory.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#modifications"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.modifications.title}
                  </a>
                </li>
              </ol>
            </nav>
          </div>

          {/* Legal Content */}
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section id="introduction" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.introduction.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed">
                {t.introduction.content}
              </p>
            </section>

            {/* Service Description */}
            <section id="service-description" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.serviceDescription.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.serviceDescription.content}
              </p>
              <ul className="space-y-2">
                {t.serviceDescription.services.map((service, index) => (
                  <li
                    key={index}
                    className="body-base text-praxis-black flex items-start"
                  >
                    <span className="text-praxis-gold mr-2">•</span>
                    {service}
                  </li>
                ))}
              </ul>
            </section>

            {/* Account Management */}
            <section id="account-management" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.accountManagement.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.accountManagement.content}
              </p>
              <ul className="space-y-2">
                {t.accountManagement.provisions.map((provision, index) => (
                  <li
                    key={index}
                    className="body-base text-praxis-black flex items-start"
                  >
                    <span className="text-praxis-gold mr-2">•</span>
                    {provision}
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Security Obligations */}
            <section id="data-security" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataSecurityObligations.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.dataSecurityObligations.company.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.dataSecurityObligations.company.items.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.dataSecurityObligations.customer.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.dataSecurityObligations.customer.items.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section id="intellectual-property" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.intellectualProperty.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.intellectualProperty.content}
              </p>
              <div className="space-y-4">
                {t.intellectualProperty.rights.map((right, index) => (
                  <div
                    key={index}
                    className="bg-praxis-off-white rounded-lg p-4"
                  >
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {right.category}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {right.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Availability */}
            <section id="service-availability" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.serviceAvailability.title}
              </h2>
              <div className="bg-praxis-off-white rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {isNorwegian ? 'Tilgjengelighet' : 'Availability'}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {t.serviceAvailability.sla.availability}
                    </p>
                  </div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {isNorwegian ? 'Vedlikehold' : 'Maintenance'}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {t.serviceAvailability.sla.maintenance}
                    </p>
                  </div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {isNorwegian ? 'Støtte' : 'Support'}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {t.serviceAvailability.sla.support}
                    </p>
                  </div>
                  <div>
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {isNorwegian ? 'Responstid' : 'Response'}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {t.serviceAvailability.sla.response}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section id="liability" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.limitationOfLiability.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.limitationOfLiability.content}
              </p>
              <ul className="space-y-2">
                {t.limitationOfLiability.limitations.map(
                  (limitation, index) => (
                    <li
                      key={index}
                      className="body-base text-praxis-black flex items-start"
                    >
                      <span className="text-praxis-gold mr-2">•</span>
                      {limitation}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* Termination Procedures */}
            <section id="termination" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.terminationProcedures.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.terminationProcedures.termination.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.terminationProcedures.termination.items.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.terminationProcedures.dataExport.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.terminationProcedures.dataExport.items.map(
                      (item, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section id="dispute-resolution" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.disputeResolution.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.disputeResolution.content}
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                {t.disputeResolution.process.map((process, index) => (
                  <li key={index} className="body-base text-praxis-black">
                    {process}
                  </li>
                ))}
              </ol>
            </section>

            {/* Compliance and Regulatory */}
            <section id="compliance" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.complianceAndRegulatory.title}
              </h2>
              <div className="space-y-4">
                {t.complianceAndRegulatory.frameworks.map(
                  (framework, index) => (
                    <div
                      key={index}
                      className="bg-praxis-off-white rounded-lg p-4"
                    >
                      <h4 className="h6 text-praxis-dark-blue mb-2">
                        {framework.framework}
                      </h4>
                      <p className="body-base text-praxis-black">
                        {framework.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Modifications */}
            <section id="modifications" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.modifications.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed">
                {t.modifications.content}
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-praxis-dark-blue rounded-lg p-8 text-center">
            <h3 className="h3 text-praxis-white mb-4">
              {isNorwegian
                ? 'Spørsmål om vilkårene?'
                : 'Questions About Terms?'}
            </h3>
            <p className="body-base text-praxis-tan mb-6">
              {isNorwegian
                ? 'Kontakt oss for ytterligere avklaring om våre bruksvilkår og juridiske forpliktelser.'
                : 'Contact us for further clarification about our terms of service and legal obligations.'}
            </p>
            <a
              href="mailto:legal@praxisnavigator.io"
              className="inline-flex items-center px-6 py-3 bg-praxis-gold text-praxis-black rounded-lg font-heading uppercase tracking-brand-wide hover:bg-praxis-gold-light transition-brand focus-ring"
            >
              {isNorwegian ? 'Kontakt Juridisk Avdeling' : 'Contact Legal Team'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
