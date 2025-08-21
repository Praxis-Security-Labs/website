import React from 'react';

interface PrivacyPolicyContentProps {
  currentLanguage?: string;
}

export const PrivacyPolicyContent: React.FC<PrivacyPolicyContentProps> = ({
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
      title: 'Privacy Policy',
      lastUpdated: 'Last updated',
      introduction: {
        title: 'Introduction',
        content: `This Privacy Policy describes how Praxis Navigator ("we", "our", or "us") collects, uses, and protects your personal information when you visit our website or use our services. We are committed to protecting your privacy and ensuring transparency in our data processing activities in accordance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.`,
      },
      dataController: {
        title: 'Data Controller',
        content: `Praxis Navigator is the data controller responsible for your personal data. You can contact us at:`,
        contact: {
          email: 'privacy@praxisnavigator.io',
          dpo: 'Data Protection Officer: privacy@praxisnavigator.io',
        },
      },
      dataCollection: {
        title: 'Information We Collect',
        websiteVisitors: {
          title: 'Website Visitors',
          items: [
            'IP address (anonymized through Cloudflare Web Analytics)',
            'Browser type and version',
            'Device information and screen resolution',
            'Pages visited and time spent on our website',
            'Referral source (how you found our website)',
            'General location information (country/region only)',
          ],
        },
        formSubmissions: {
          title: 'Contact and Demo Forms',
          items: [
            'Name and professional title',
            'Email address and phone number',
            'Company name and organization size',
            'Industry and role information',
            'Security training challenges and requirements',
            'Communication preferences and demo scheduling',
          ],
        },
        serviceUsers: {
          title: 'Platform Users (Future Service)',
          items: [
            'Account registration information',
            'Organizational behavioral security data',
            'Training completion and effectiveness metrics',
            'Usage analytics and performance data',
            'Integration configuration settings',
          ],
        },
      },
      legalBasis: {
        title: 'Legal Basis for Processing',
        items: [
          {
            basis: 'Legitimate Interest',
            description:
              'Website analytics to improve user experience and security',
          },
          {
            basis: 'Consent',
            description: 'Marketing communications and demo requests',
          },
          {
            basis: 'Contract Performance',
            description: 'Service delivery and customer support',
          },
          {
            basis: 'Legal Obligation',
            description: 'Compliance with security and regulatory requirements',
          },
        ],
      },
      dataUse: {
        title: 'How We Use Your Information',
        purposes: [
          'Provide and improve our website and services',
          'Respond to inquiries and schedule product demonstrations',
          'Send relevant security culture content and product updates',
          'Analyze website performance and user behavior',
          'Ensure security and prevent fraud',
          'Comply with legal obligations and regulatory requirements',
          'Develop new features and improve existing functionality',
        ],
      },
      dataSharing: {
        title: 'Data Sharing and Third Parties',
        hubspot: {
          title: 'HubSpot CRM',
          description:
            'Contact form submissions are processed through HubSpot for customer relationship management. HubSpot is GDPR-compliant and processes data under Data Processing Agreements.',
        },
        cloudflare: {
          title: 'Cloudflare Web Analytics',
          description:
            'We use privacy-first Cloudflare Web Analytics that does not use cookies or collect personal identifiable information. Data is aggregated and anonymized.',
        },
        azure: {
          title: 'Microsoft Azure',
          description:
            'Authentication and platform services are provided through Microsoft Azure with enterprise-grade security and GDPR compliance.',
        },
        noSale:
          'We do not sell, rent, or trade your personal information to third parties for marketing purposes.',
      },
      dataRetention: {
        title: 'Data Retention',
        website:
          'Website analytics data: 24 months (aggregated and anonymized)',
        marketing:
          'Marketing contacts: Until consent is withdrawn or 3 years of inactivity',
        customer:
          'Customer data: Duration of service relationship plus 7 years for legal compliance',
        support:
          'Support communications: 3 years for service improvement purposes',
      },
      userRights: {
        title: 'Your Rights Under GDPR',
        rights: [
          {
            right: 'Right of Access',
            description: 'Request copies of your personal data we hold',
          },
          {
            right: 'Right to Rectification',
            description: 'Request correction of inaccurate or incomplete data',
          },
          {
            right: 'Right to Erasure',
            description:
              'Request deletion of your personal data ("right to be forgotten")',
          },
          {
            right: 'Right to Restrict Processing',
            description: 'Request limitation of how we process your data',
          },
          {
            right: 'Right to Data Portability',
            description:
              'Receive your data in a structured, machine-readable format',
          },
          {
            right: 'Right to Object',
            description:
              'Object to processing based on legitimate interest or direct marketing',
          },
          {
            right: 'Right to Withdraw Consent',
            description: 'Withdraw consent for data processing at any time',
          },
        ],
        contact:
          'To exercise these rights, contact us at privacy@praxisnavigator.io',
      },
      internationalTransfers: {
        title: 'International Data Transfers',
        content:
          'Your data may be transferred to and processed in countries outside the European Economic Area (EEA). We ensure adequate protection through:',
        safeguards: [
          'Standard Contractual Clauses approved by the European Commission',
          'Adequacy decisions for countries with equivalent data protection',
          'Binding Corporate Rules for multinational service providers',
          'Certification schemes and codes of conduct where applicable',
        ],
      },
      security: {
        title: 'Data Security',
        measures: [
          'End-to-end encryption for data transmission',
          'AES-256 encryption for data storage',
          'Multi-factor authentication for admin access',
          'Regular security audits and penetration testing',
          'SOC2 Type II compliance for service providers',
          'Network monitoring and intrusion detection',
          'Secure backup and disaster recovery procedures',
        ],
      },
      changes: {
        title: 'Changes to This Privacy Policy',
        content:
          'We may update this Privacy Policy to reflect changes in our practices or legal requirements. We will notify you of significant changes through email or prominent website notice. The "Last Updated" date indicates when changes were made.',
      },
      complaints: {
        title: 'Complaints and Supervisory Authority',
        content:
          'If you have concerns about our data processing, you have the right to lodge a complaint with your local data protection supervisory authority. In Norway, this is Datatilsynet. In the EU, contact your national data protection authority.',
      },
    },
    no: {
      title: 'Personvernpolicy',
      lastUpdated: 'Sist oppdatert',
      introduction: {
        title: 'Innledning',
        content: `Denne personvernpolicyen beskriver hvordan Praxis Navigator ("vi", "vårt", eller "oss") samler inn, bruker og beskytter dine personlige opplysninger når du besøker vårt nettsted eller bruker våre tjenester. Vi forplikter oss til å beskytte ditt personvern og sikre åpenhet i våre databehandlingsaktiviteter i samsvar med Generell forordning om databeskyttelse (GDPR) og andre gjeldende databeskyttelseslover.`,
      },
      dataController: {
        title: 'Behandlingsansvarlig',
        content: `Praxis Navigator er den behandlingsansvarlige for dine personopplysninger. Du kan kontakte oss på:`,
        contact: {
          email: 'privacy@praxisnavigator.io',
          dpo: 'Personvernombud: privacy@praxisnavigator.io',
        },
      },
      dataCollection: {
        title: 'Informasjon Vi Samler Inn',
        websiteVisitors: {
          title: 'Nettstedsbesøkende',
          items: [
            'IP-adresse (anonymisert gjennom Cloudflare Web Analytics)',
            'Nettlesertype og versjon',
            'Enhetsinformasjon og skjermoppløsning',
            'Besøkte sider og tid tilbrakt på vårt nettsted',
            'Referansekilde (hvordan du fant vårt nettsted)',
            'Generell lokasjonsinformasjon (kun land/region)',
          ],
        },
        formSubmissions: {
          title: 'Kontakt- og Demoskjemaer',
          items: [
            'Navn og yrkestitle',
            'E-postadresse og telefonnummer',
            'Bedriftsnavn og organisasjonsstørrelse',
            'Industri og rolleinformasjon',
            'Sikkerhetstreningsutfordringer og krav',
            'Kommunikasjonspreferanser og demoplanlegging',
          ],
        },
        serviceUsers: {
          title: 'Plattformbrukere (Fremtidig Tjeneste)',
          items: [
            'Kontoregistreringsinformasjon',
            'Organisatoriske atferdssikkerhetsdata',
            'Treningsgjennomføring og effektivitetsmålinger',
            'Bruksanalyse og ytelsesdata',
            'Integrasjonskonfigurasjonsinnstillinger',
          ],
        },
      },
      legalBasis: {
        title: 'Rettslig Grunnlag for Behandling',
        items: [
          {
            basis: 'Berettiget Interesse',
            description:
              'Nettstedsanalyse for å forbedre brukeropplevelse og sikkerhet',
          },
          {
            basis: 'Samtykke',
            description: 'Markedskommunikasjon og demoforespørsler',
          },
          {
            basis: 'Kontraktsoppfyllelse',
            description: 'Tjenestelevering og kundestøtte',
          },
          {
            basis: 'Juridisk Forpliktelse',
            description: 'Overholdelse av sikkerhets- og regulatoriske krav',
          },
        ],
      },
      dataUse: {
        title: 'Hvordan Vi Bruker Din Informasjon',
        purposes: [
          'Tilby og forbedre vårt nettsted og tjenester',
          'Svare på henvendelser og planlegge produktdemonstrasjoner',
          'Sende relevant sikkerhetskulturelt innhold og produktoppdateringer',
          'Analysere nettstedsytelse og brukeratferd',
          'Sikre sikkerhet og forhindre svindel',
          'Overholde juridiske forpliktelser og regulatoriske krav',
          'Utvikle nye funksjoner og forbedre eksisterende funksjonalitet',
        ],
      },
      dataSharing: {
        title: 'Datadeling og Tredjeparter',
        hubspot: {
          title: 'HubSpot CRM',
          description:
            'Kontaktskjemainnsendinger behandles gjennom HubSpot for kundeforholdsadministrasjon. HubSpot er GDPR-kompatibel og behandler data under databehandlingsavtaler.',
        },
        cloudflare: {
          title: 'Cloudflare Web Analytics',
          description:
            'Vi bruker personvernfokuserte Cloudflare Web Analytics som ikke bruker informasjonskapsler eller samler personlig identifiserbar informasjon. Data aggregeres og anonymiseres.',
        },
        azure: {
          title: 'Microsoft Azure',
          description:
            'Autentisering og plattformtjenester leveres gjennom Microsoft Azure med bedriftsnivåsikkerhet og GDPR-samsvar.',
        },
        noSale:
          'Vi selger, leier eller handler ikke dine personlige opplysninger til tredjeparter for markedsføringsformål.',
      },
      dataRetention: {
        title: 'Dataoppbevaring',
        website: 'Nettstedsanalysedata: 24 måneder (aggregert og anonymisert)',
        marketing:
          'Markedsføringskontakter: Til samtykke trekkes tilbake eller 3 års inaktivitet',
        customer:
          'Kundedata: Varigheten av tjenesteforholdet pluss 7 år for juridisk samsvar',
        support: 'Støttekommunikasjon: 3 år for tjenesteforbedring',
      },
      userRights: {
        title: 'Dine Rettigheter Under GDPR',
        rights: [
          {
            right: 'Rett til Innsyn',
            description: 'Be om kopier av dine personopplysninger vi har',
          },
          {
            right: 'Rett til Retting',
            description:
              'Be om korreksjon av unøyaktige eller ufullstendige data',
          },
          {
            right: 'Rett til Sletting',
            description:
              'Be om sletting av dine personopplysninger ("retten til å bli glemt")',
          },
          {
            right: 'Rett til Begrensning av Behandling',
            description: 'Be om begrensning av hvordan vi behandler dine data',
          },
          {
            right: 'Rett til Dataportabilitet',
            description:
              'Motta dine data i et strukturert, maskinlesbart format',
          },
          {
            right: 'Rett til Innsigelse',
            description:
              'Protestere mot behandling basert på berettiget interesse eller direktemarkedsføring',
          },
          {
            right: 'Rett til å Trekke Tilbake Samtykke',
            description:
              'Trekke tilbake samtykke for databehandling når som helst',
          },
        ],
        contact:
          'For å utøve disse rettighetene, kontakt oss på privacy@praxisnavigator.io',
      },
      internationalTransfers: {
        title: 'Internasjonale Dataoverføringer',
        content:
          'Dine data kan overføres til og behandles i land utenfor Det europeiske økonomiske området (EØS). Vi sikrer tilstrekkelig beskyttelse gjennom:',
        safeguards: [
          'Standard kontraktsklausuler godkjent av Europakommisjonen',
          'Tilstrekkelighetsavgjørelser for land med tilsvarende databeskyttelse',
          'Bindende bedriftsregler for multinasjonale tjenesteleverandører',
          'Sertifiseringsordninger og atferdskoder der aktuelt',
        ],
      },
      security: {
        title: 'Datasikkerhet',
        measures: [
          'Ende-til-ende kryptering for dataoverføring',
          'AES-256 kryptering for datalagring',
          'Multifaktorautentisering for administratortilgang',
          'Regelmessige sikkerhetsrevisjoner og penetrasjonstesting',
          'SOC2 Type II samsvar for tjenesteleverandører',
          'Nettverksovervåking og inntrengingsdeteksjon',
          'Sikre backup- og katastrofegjenopprettingsprosedyrer',
        ],
      },
      changes: {
        title: 'Endringer i Denne Personvernpolicyen',
        content:
          'Vi kan oppdatere denne personvernpolicyen for å reflektere endringer i våre praksiser eller juridiske krav. Vi vil varsle deg om betydelige endringer gjennom e-post eller fremtredende nettstednotis. "Sist oppdatert"-datoen indikerer når endringer ble gjort.',
      },
      complaints: {
        title: 'Klager og Tilsynsmyndighet',
        content:
          'Hvis du har bekymringer om vår databehandling, har du rett til å sende en klage til din lokale databeskyttelsesmyndighet. I Norge er dette Datatilsynet. I EU, kontakt din nasjonale databeskyttelsesmyndighet.',
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
                    href="#data-controller"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataController.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#data-collection"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataCollection.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#legal-basis"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.legalBasis.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#data-use"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataUse.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#data-sharing"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataSharing.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#data-retention"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataRetention.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#user-rights"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.userRights.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#international-transfers"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.internationalTransfers.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#security"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.security.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#changes"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.changes.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#complaints"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.complaints.title}
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

            {/* Data Controller */}
            <section id="data-controller" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataController.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.dataController.content}
              </p>
              <div className="bg-praxis-off-white rounded-lg p-4">
                <p className="body-base text-praxis-black mb-2">
                  <strong>{isNorwegian ? 'E-post' : 'Email'}:</strong>{' '}
                  <a
                    href="mailto:privacy@praxisnavigator.io"
                    className="text-praxis-dark-blue hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataController.contact.email}
                  </a>
                </p>
                <p className="body-base text-praxis-black">
                  <strong>{t.dataController.contact.dpo}</strong>
                </p>
              </div>
            </section>

            {/* Data Collection */}
            <section id="data-collection" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataCollection.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.dataCollection.websiteVisitors.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.dataCollection.websiteVisitors.items.map(
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
                    {t.dataCollection.formSubmissions.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.dataCollection.formSubmissions.items.map(
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
                    {t.dataCollection.serviceUsers.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.dataCollection.serviceUsers.items.map((item, index) => (
                      <li
                        key={index}
                        className="body-base text-praxis-black flex items-start"
                      >
                        <span className="text-praxis-gold mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Legal Basis */}
            <section id="legal-basis" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.legalBasis.title}
              </h2>
              <div className="space-y-4">
                {t.legalBasis.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-praxis-off-white rounded-lg p-4"
                  >
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {item.basis}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Data Use */}
            <section id="data-use" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataUse.title}
              </h2>
              <ul className="space-y-2">
                {t.dataUse.purposes.map((purpose, index) => (
                  <li
                    key={index}
                    className="body-base text-praxis-black flex items-start"
                  >
                    <span className="text-praxis-gold mr-2">•</span>
                    {purpose}
                  </li>
                ))}
              </ul>
            </section>

            {/* Data Sharing */}
            <section id="data-sharing" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataSharing.title}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.dataSharing.hubspot.title}
                  </h3>
                  <p className="body-base text-praxis-black leading-relaxed">
                    {t.dataSharing.hubspot.description}
                  </p>
                </div>
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.dataSharing.cloudflare.title}
                  </h3>
                  <p className="body-base text-praxis-black leading-relaxed">
                    {t.dataSharing.cloudflare.description}
                  </p>
                </div>
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.dataSharing.azure.title}
                  </h3>
                  <p className="body-base text-praxis-black leading-relaxed">
                    {t.dataSharing.azure.description}
                  </p>
                </div>
                <div className="bg-praxis-off-white rounded-lg p-4">
                  <p className="body-base text-praxis-black font-medium">
                    {t.dataSharing.noSale}
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section id="data-retention" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataRetention.title}
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-praxis-gold mr-2">•</span>
                  <span className="body-base text-praxis-black">
                    {t.dataRetention.website}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-praxis-gold mr-2">•</span>
                  <span className="body-base text-praxis-black">
                    {t.dataRetention.marketing}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-praxis-gold mr-2">•</span>
                  <span className="body-base text-praxis-black">
                    {t.dataRetention.customer}
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-praxis-gold mr-2">•</span>
                  <span className="body-base text-praxis-black">
                    {t.dataRetention.support}
                  </span>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section id="user-rights" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.userRights.title}
              </h2>
              <div className="space-y-4 mb-6">
                {t.userRights.rights.map((right, index) => (
                  <div
                    key={index}
                    className="bg-praxis-off-white rounded-lg p-4"
                  >
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {right.right}
                    </h4>
                    <p className="body-base text-praxis-black">
                      {right.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-4">
                <p className="body-base text-praxis-black">
                  <strong>{t.userRights.contact}</strong>
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section id="international-transfers" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.internationalTransfers.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.internationalTransfers.content}
              </p>
              <ul className="space-y-2">
                {t.internationalTransfers.safeguards.map((safeguard, index) => (
                  <li
                    key={index}
                    className="body-base text-praxis-black flex items-start"
                  >
                    <span className="text-praxis-gold mr-2">•</span>
                    {safeguard}
                  </li>
                ))}
              </ul>
            </section>

            {/* Security */}
            <section id="security" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.security.title}
              </h2>
              <ul className="space-y-2">
                {t.security.measures.map((measure, index) => (
                  <li
                    key={index}
                    className="body-base text-praxis-black flex items-start"
                  >
                    <span className="text-praxis-gold mr-2">•</span>
                    {measure}
                  </li>
                ))}
              </ul>
            </section>

            {/* Changes */}
            <section id="changes" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.changes.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed">
                {t.changes.content}
              </p>
            </section>

            {/* Complaints */}
            <section id="complaints" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.complaints.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed">
                {t.complaints.content}
              </p>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-praxis-dark-blue rounded-lg p-8 text-center">
            <h3 className="h3 text-praxis-white mb-4">
              {isNorwegian
                ? 'Har du spørsmål om personvern?'
                : 'Questions About Privacy?'}
            </h3>
            <p className="body-base text-praxis-tan mb-6">
              {isNorwegian
                ? 'Kontakt oss for å utøve dine rettigheter eller få svar på spørsmål om hvordan vi behandler dine data.'
                : 'Contact us to exercise your rights or get answers about how we process your data.'}
            </p>
            <a
              href="mailto:privacy@praxisnavigator.io"
              className="inline-flex items-center px-6 py-3 bg-praxis-gold text-praxis-black rounded-lg font-heading uppercase tracking-brand-wide hover:bg-praxis-gold-light transition-brand focus-ring"
            >
              {isNorwegian
                ? 'Kontakt Personvernombud'
                : 'Contact Privacy Officer'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
