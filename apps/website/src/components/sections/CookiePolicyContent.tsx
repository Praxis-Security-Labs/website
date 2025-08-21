import React from 'react';

interface CookiePolicyContentProps {
  currentLanguage?: string;
}

export const CookiePolicyContent: React.FC<CookiePolicyContentProps> = ({
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
      title: 'Cookie Policy',
      lastUpdated: 'Last updated',
      introduction: {
        title: 'About Cookies and Our Privacy-First Approach',
        content: `This Cookie Policy explains how Praxis Navigator uses cookies and similar technologies when you visit our website. We are committed to privacy-first analytics and have specifically chosen Cloudflare Web Analytics as our primary analytics solution because it does not use cookies or collect personally identifiable information.`,
      },
      whatAreCookies: {
        title: 'What Are Cookies?',
        content: `Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies can be "persistent" (remain on your device until deleted) or "session" cookies (deleted when you close your browser).`,
      },
      cookieCategories: {
        title: 'Cookie Categories We Use',
        essential: {
          title: 'Essential Cookies',
          description:
            'These cookies are necessary for our website to function properly and cannot be disabled.',
          examples: [
            'Session management for form submissions',
            'Security tokens for CSRF protection',
            'Language preference storage (English/Norwegian)',
            'Accessibility preferences and settings',
          ],
          retention: 'Duration: Session or 12 months maximum',
        },
        analytics: {
          title: 'Analytics (Privacy-First)',
          description:
            'We use Cloudflare Web Analytics which does NOT use cookies or collect personal data.',
          features: [
            'No personal data collection or tracking',
            'No cross-site tracking or fingerprinting',
            'Aggregated and anonymized traffic statistics only',
            'Page performance and user experience metrics',
            'Geographic data limited to country/region level',
            'No individual user identification possible',
          ],
          retention: 'Duration: Data aggregated and anonymized immediately',
        },
        functional: {
          title: 'Functional Cookies',
          description:
            'These cookies enhance your experience but are not essential for basic website functionality.',
          examples: [
            'Demo form progress and preferences',
            'Contact form auto-save functionality',
            'User interface preferences and settings',
            'Marketing communication consent tracking',
          ],
          retention: 'Duration: 30 days to 2 years depending on purpose',
        },
      },
      thirdPartyServices: {
        title: 'Third-Party Services and Data Processing',
        cloudflare: {
          title: 'Cloudflare Web Analytics',
          description:
            'Our primary analytics solution that respects user privacy.',
          features: [
            'Privacy-first analytics with no personal data collection',
            'GDPR compliant by design - no consent required',
            'No cookies, local storage, or fingerprinting',
            'Aggregated traffic and performance data only',
            "Data processed in accordance with Cloudflare's privacy policy",
            'No cross-site tracking or advertising integration',
          ],
          dataProtection:
            'Cloudflare maintains GDPR compliance and provides Data Processing Agreements for enterprise customers.',
        },
        hubspot: {
          title: 'HubSpot CRM Integration',
          description: 'Contact and demo form processing through HubSpot.',
          cookies: [
            'HubSpot tracking cookies for form analytics',
            'Lead scoring and behavior tracking',
            'Marketing campaign attribution',
            'Contact communication preferences',
          ],
          consent:
            'HubSpot cookies require your consent and can be managed through our cookie preferences.',
          retention: 'Duration: 2 years or until consent withdrawn',
        },
        azure: {
          title: 'Microsoft Azure Authentication',
          description: 'Enterprise authentication and platform access.',
          cookies: [
            'Azure Active Directory authentication tokens',
            'Single sign-on session management',
            'Multi-factor authentication state',
            'Organizational directory access permissions',
          ],
          security:
            'Microsoft Azure cookies are essential for secure enterprise authentication and cannot be disabled.',
          retention: 'Duration: Session-based with automatic expiration',
        },
      },
      consentManagement: {
        title: 'Cookie Consent and Your Choices',
        consent: {
          title: 'Managing Your Preferences',
          description:
            'You have full control over non-essential cookies on our website.',
          options: [
            'Accept all cookies for enhanced website functionality',
            'Accept only essential cookies for basic website operation',
            'Customize cookie preferences by category',
            'Withdraw consent at any time through cookie preferences',
            'Update preferences when our cookie policy changes',
          ],
        },
        browserControls: {
          title: 'Browser-Based Cookie Control',
          description:
            'You can also manage cookies directly through your browser settings.',
          instructions: [
            'Chrome: Settings > Privacy and Security > Cookies and other site data',
            'Firefox: Preferences > Privacy & Security > Cookies and Site Data',
            'Safari: Preferences > Privacy > Manage Website Data',
            'Edge: Settings > Cookies and Site Permissions > Cookies and Site Data',
          ],
          note: 'Note: Disabling essential cookies may affect website functionality.',
        },
      },
      dataRetention: {
        title: 'Cookie Data Retention and Deletion',
        retention: [
          {
            category: 'Essential Cookies',
            duration: 'Session or 12 months maximum',
            deletion: 'Automatically deleted when expired or session ends',
          },
          {
            category: 'Cloudflare Analytics',
            duration: 'No cookies used - data aggregated immediately',
            deletion:
              'Individual data never stored - only aggregated statistics',
          },
          {
            category: 'HubSpot Marketing',
            duration: '2 years or until consent withdrawn',
            deletion: 'Deleted immediately when consent withdrawn or expired',
          },
          {
            category: 'Azure Authentication',
            duration: 'Session-based with security timeouts',
            deletion:
              'Automatically deleted when authentication session expires',
          },
        ],
      },
      internationalCompliance: {
        title: 'International Compliance and Data Protection',
        gdpr: {
          title: 'GDPR Compliance (EU/EEA)',
          requirements: [
            'Cookie consent required for non-essential cookies',
            'Clear information about cookie purposes and retention',
            'Easy withdrawal of consent mechanisms',
            'Legitimate interest basis for essential website functionality',
            'Privacy by design and default implementation',
          ],
        },
        norway: {
          title: 'Norwegian Data Protection Compliance',
          requirements: [
            'Compliance with Norwegian Personal Data Act',
            'Datatilsynet (Data Protection Authority) guidelines followed',
            'Clear Norwegian language cookie information',
            'Local data protection rights respected',
          ],
        },
        other: {
          title: 'Other Jurisdictions',
          note: 'We comply with applicable cookie and privacy laws in all jurisdictions where we operate, including but not limited to ePrivacy Directive, CCPA, and other regional data protection regulations.',
        },
      },
      updates: {
        title: 'Updates to This Cookie Policy',
        content: `We may update this Cookie Policy to reflect changes in our cookie usage, legal requirements, or privacy practices. When we make significant changes, we will:`,
        notification: [
          'Update the "Last Updated" date at the top of this policy',
          'Notify users through prominent website banner or notification',
          'Send email notifications to registered users when appropriate',
          'Re-request consent for new cookie categories if required by law',
          'Provide clear information about what has changed and why',
        ],
      },
      contact: {
        title: 'Questions About Cookies',
        content:
          'If you have questions about our cookie usage, privacy practices, or need assistance with cookie preferences, please contact us:',
        methods: [
          {
            method: 'Email',
            contact: 'privacy@praxisnavigator.io',
            purpose: 'Cookie and privacy inquiries',
          },
          {
            method: 'Data Protection Officer',
            contact: 'dpo@praxisnavigator.io',
            purpose: 'GDPR rights and data protection questions',
          },
          {
            method: 'Legal Team',
            contact: 'legal@praxisnavigator.io',
            purpose: 'Legal compliance and regulatory questions',
          },
        ],
      },
    },
    no: {
      title: 'Informasjonskapselpolicy',
      lastUpdated: 'Sist oppdatert',
      introduction: {
        title: 'Om Informasjonskapsler og Vår Personvernfokuserte Tilnærming',
        content: `Denne informasjonskapselpolicyen forklarer hvordan Praxis Navigator bruker informasjonskapsler og lignende teknologier når du besøker vårt nettsted. Vi forplikter oss til personvernfokuserte analyser og har spesifikt valgt Cloudflare Web Analytics som vår primære analyseløsning fordi den ikke bruker informasjonskapsler eller samler personlig identifiserbar informasjon.`,
      },
      whatAreCookies: {
        title: 'Hva er Informasjonskapsler?',
        content: `Informasjonskapsler er små tekstfiler som plasseres på enheten din når du besøker et nettsted. De brukes mye for å få nettsteder til å fungere mer effektivt og for å gi informasjon til nettstedeiere. Informasjonskapsler kan være "persistent" (forblir på enheten din til de slettes) eller "session" informasjonskapsler (slettes når du lukker nettleseren).`,
      },
      cookieCategories: {
        title: 'Informasjonskapsekategorier Vi Bruker',
        essential: {
          title: 'Nødvendige Informasjonskapsler',
          description:
            'Disse informasjonskapselsene er nødvendige for at nettstedet vårt skal fungere riktig og kan ikke deaktiveres.',
          examples: [
            'Øktadministrasjon for skjemainnsendinger',
            'Sikkerhetstokens for CSRF-beskyttelse',
            'Språkpreferanselagring (engelsk/norsk)',
            'Tilgjengelighhetspreferanser og innstillinger',
          ],
          retention: 'Varighet: Økt eller maksimalt 12 måneder',
        },
        analytics: {
          title: 'Analyser (Personvernfokuserte)',
          description:
            'Vi bruker Cloudflare Web Analytics som IKKE bruker informasjonskapsler eller samler personlige data.',
          features: [
            'Ingen personlig datainnsamling eller sporing',
            'Ingen sporing på tvers av nettsteder eller fingeravtrykk',
            'Kun aggregerte og anonymiserte trafikk statistikker',
            'Sideytelse og brukeropplevelse målinger',
            'Geografiske data begrenset til land/regionnivå',
            'Ingen individuell brukeridentifikasjon mulig',
          ],
          retention: 'Varighet: Data aggregert og anonymisert umiddelbart',
        },
        functional: {
          title: 'Funksjonelle Informasjonskapsler',
          description:
            'Disse informasjonskapselsene forbedrer din opplevelse, men er ikke avgjørende for grunnleggende nettstedfunksjonalitet.',
          examples: [
            'Demo skjemfremgang og preferanser',
            'Kontaktskjem autolagringsfunksjonalitet',
            'Brukergrensesnittpreferanser og innstillinger',
            'Markedskommunikasjon samtykke sporing',
          ],
          retention: 'Varighet: 30 dager til 2 år avhengig av formål',
        },
      },
      thirdPartyServices: {
        title: 'Tredjepartstjenester og Databehandling',
        cloudflare: {
          title: 'Cloudflare Web Analytics',
          description:
            'Vår primære analyseløsning som respekterer brukerpersonvern.',
          features: [
            'Personvernfokuserte analyser uten personlig datainnsamling',
            'GDPR-kompatible by design - ikke samtykke kreves',
            'Ingen informasjonskapsler, lokal lagring eller fingeravtrykk',
            'Kun aggregerte trafikk og ytelsesdata',
            'Data behandlet i samsvar med Cloudflares personvernpolicy',
            'Ingen sporing på tvers av nettsteder eller reklameintegrasjon',
          ],
          dataProtection:
            'Cloudflare opprettholder GDPR-samsvar og gir databehandlingsavtaler for bedriftskunder.',
        },
        hubspot: {
          title: 'HubSpot CRM-integrasjon',
          description: 'Kontakt- og demoskjembehandling gjennom HubSpot.',
          cookies: [
            'HubSpot sporingsinformasjonskapsler for skjemanalyser',
            'Lead-scoring og atferdssporing',
            'Markedskampanjeattribusjon',
            'Kontaktkommunikasjonspreferanser',
          ],
          consent:
            'HubSpot informasjonskapsler krever ditt samtykke og kan administreres gjennom våre informasjonskapslerpreferanser.',
          retention: 'Varighet: 2 år eller til samtykke trekkes tilbake',
        },
        azure: {
          title: 'Microsoft Azure Autentisering',
          description: 'Bedriftsautentisering og plattformtilgang.',
          cookies: [
            'Azure Active Directory autentiseringstokens',
            'Single sign-on øktadministrasjon',
            'Multifaktor autentiseringstilstand',
            'Organisatoriske katalogtilgangstillatelser',
          ],
          security:
            'Microsoft Azure informasjonskapsler er avgjørende for sikker bedriftsautentisering og kan ikke deaktiveres.',
          retention: 'Varighet: Øktbasert med automatisk utløp',
        },
      },
      consentManagement: {
        title: 'Informasjonskapslersamtykke og Dine Valg',
        consent: {
          title: 'Administrere Dine Preferanser',
          description:
            'Du har full kontroll over ikke-nødvendige informasjonskapsler på nettstedet vårt.',
          options: [
            'Aksepter alle informasjonskapsler for forbedret nettstedfunksjonalitet',
            'Aksepter kun nødvendige informasjonskapsler for grunnleggende nettstedoperasjon',
            'Tilpass informasjonskapslerpreferanser etter kategori',
            'Trekk tilbake samtykke når som helst gjennom informasjonskapslerpreferanser',
            'Oppdater preferanser når vår informasjonskapselpolicy endres',
          ],
        },
        browserControls: {
          title: 'Nettleserbasert Informasjonskapserkontroll',
          description:
            'Du kan også administrere informasjonskapsler direkte gjennom nettleserinnstillingene dine.',
          instructions: [
            'Chrome: Innstillinger > Personvern og sikkerhet > Informasjonskapsler og andre nettstedsdata',
            'Firefox: Innstillinger > Personvern og sikkerhet > Informasjonskapsler og nettstedsdata',
            'Safari: Innstillinger > Personvern > Administrer nettstedsdata',
            'Edge: Innstillinger > Informasjonskapsler og nettstedstillatelser > Informasjonskapsler og nettstedsdata',
          ],
          note: 'Merk: Deaktivering av nødvendige informasjonskapsler kan påvirke nettstedfunksjonaliteten.',
        },
      },
      dataRetention: {
        title: 'Informasjonskapslerdata Oppbevaring og Sletting',
        retention: [
          {
            category: 'Nødvendige Informasjonskapsler',
            duration: 'Økt eller maksimalt 12 måneder',
            deletion: 'Automatisk slettet når utløpt eller økt avsluttes',
          },
          {
            category: 'Cloudflare Analyser',
            duration:
              'Ingen informasjonskapsler brukt - data aggregert umiddelbart',
            deletion:
              'Individuelle data aldri lagret - kun aggregerte statistikker',
          },
          {
            category: 'HubSpot Markedsføring',
            duration: '2 år eller til samtykke trekkes tilbake',
            deletion:
              'Slettet umiddelbart når samtykke trekkes tilbake eller utløper',
          },
          {
            category: 'Azure Autentisering',
            duration: 'Øktbasert med sikkerhets timeouts',
            deletion: 'Automatisk slettet når autentiseringsøkten utløper',
          },
        ],
      },
      internationalCompliance: {
        title: 'Internasjonalt Samsvar og Databeskyttelse',
        gdpr: {
          title: 'GDPR-samsvar (EU/EØS)',
          requirements: [
            'Informasjonskapslersamtykke kreves for ikke-nødvendige informasjonskapsler',
            'Klar informasjon om informasjonskapslerformål og oppbevaring',
            'Enkle mekanismer for tilbaketrekking av samtykke',
            'Berettiget interesse grunnlag for nødvendig nettstedfunksjonalitet',
            'Personvern by design og standard implementering',
          ],
        },
        norway: {
          title: 'Norsk Databeskyttelsessamsvar',
          requirements: [
            'Samsvar med norsk personopplysningslov',
            'Datatilsynet (databeskyttelsesmyndighet) retningslinjer fulgt',
            'Klar norsk språk informasjonskapslerinformasjon',
            'Lokale databeskyttelsesrettigheter respektert',
          ],
        },
        other: {
          title: 'Andre Jurisdiksjoner',
          note: 'Vi overholder gjeldende informasjonskapsle- og personvernlover i alle jurisdiksjoner hvor vi opererer, inkludert men ikke begrenset til ePrivacy-direktivet, CCPA og andre regionale databeskyttelsesforskrifter.',
        },
      },
      updates: {
        title: 'Oppdateringer til Denne Informasjonskapselpolicyen',
        content: `Vi kan oppdatere denne informasjonskapselpolicyen for å reflektere endringer i vår informasjonskapslerbruk, juridiske krav eller personvernpraksis. Når vi gjør betydelige endringer, vil vi:`,
        notification: [
          'Oppdatere "Sist oppdatert"-datoen øverst i denne policyen',
          'Varsle brukere gjennom fremtredende nettstedsbanner eller notifikasjon',
          'Sende e-postvarsler til registrerte brukere når det er hensiktsmessig',
          'Be om nytt samtykke for nye informasjonskapserkategorier hvis påkrevd av loven',
          'Gi klar informasjon om hva som har endret seg og hvorfor',
        ],
      },
      contact: {
        title: 'Spørsmål om Informasjonskapsler',
        content:
          'Hvis du har spørsmål om vår informasjonskapslerbruk, personvernpraksis eller trenger hjelp med informasjonskapslerpreferanser, vennligst kontakt oss:',
        methods: [
          {
            method: 'E-post',
            contact: 'privacy@praxisnavigator.io',
            purpose: 'Informasjonskapsle- og personvernhenvendelser',
          },
          {
            method: 'Personvernombud',
            contact: 'dpo@praxisnavigator.io',
            purpose: 'GDPR-rettigheter og databeskyttelsesspørsmål',
          },
          {
            method: 'Juridisk Team',
            contact: 'legal@praxisnavigator.io',
            purpose: 'Juridisk samsvar og regulatoriske spørsmål',
          },
        ],
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

          {/* Privacy-First Notice */}
          <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-6 mb-8">
            <h2 className="h6 text-praxis-dark-blue mb-3">
              {isNorwegian
                ? '🔒 Personvernfokuserte Analyser'
                : '🔒 Privacy-First Analytics'}
            </h2>
            <p className="body-base text-praxis-black">
              {isNorwegian
                ? 'Vi bruker Cloudflare Web Analytics som ikke samler personlige data eller bruker sporingsinformasjonskapsler. Ditt personvern er beskyttet by design.'
                : 'We use Cloudflare Web Analytics which does not collect personal data or use tracking cookies. Your privacy is protected by design.'}
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
                    href="#what-are-cookies"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.whatAreCookies.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#cookie-categories"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.cookieCategories.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#third-party"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.thirdPartyServices.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#consent"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.consentManagement.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#retention"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.dataRetention.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#compliance"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.internationalCompliance.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#updates"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.updates.title}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-praxis-gold focus-ring rounded"
                  >
                    {t.contact.title}
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

            {/* What Are Cookies */}
            <section id="what-are-cookies" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.whatAreCookies.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed">
                {t.whatAreCookies.content}
              </p>
            </section>

            {/* Cookie Categories */}
            <section id="cookie-categories" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.cookieCategories.title}
              </h2>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.cookieCategories.essential.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.cookieCategories.essential.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.cookieCategories.essential.examples.map(
                      (example, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {example}
                        </li>
                      )
                    )}
                  </ul>
                  <p className="body-small text-praxis-gray-600 font-medium">
                    {t.cookieCategories.essential.retention}
                  </p>
                </div>

                {/* Analytics */}
                <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.cookieCategories.analytics.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.cookieCategories.analytics.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.cookieCategories.analytics.features.map(
                      (feature, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">✓</span>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                  <p className="body-small text-praxis-gray-600 font-medium">
                    {t.cookieCategories.analytics.retention}
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.cookieCategories.functional.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.cookieCategories.functional.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.cookieCategories.functional.examples.map(
                      (example, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {example}
                        </li>
                      )
                    )}
                  </ul>
                  <p className="body-small text-praxis-gray-600 font-medium">
                    {t.cookieCategories.functional.retention}
                  </p>
                </div>
              </div>
            </section>

            {/* Third Party Services */}
            <section id="third-party" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.thirdPartyServices.title}
              </h2>

              <div className="space-y-6">
                {/* Cloudflare */}
                <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.thirdPartyServices.cloudflare.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.thirdPartyServices.cloudflare.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.thirdPartyServices.cloudflare.features.map(
                      (feature, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">✓</span>
                          {feature}
                        </li>
                      )
                    )}
                  </ul>
                  <div className="bg-praxis-white rounded-lg p-4">
                    <p className="body-small text-praxis-black font-medium">
                      <strong>
                        {isNorwegian ? 'Databeskyttelse:' : 'Data Protection:'}
                      </strong>{' '}
                      {t.thirdPartyServices.cloudflare.dataProtection}
                    </p>
                  </div>
                </div>

                {/* HubSpot */}
                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.thirdPartyServices.hubspot.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.thirdPartyServices.hubspot.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.thirdPartyServices.hubspot.cookies.map(
                      (cookie, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {cookie}
                        </li>
                      )
                    )}
                  </ul>
                  <div className="bg-praxis-white rounded-lg p-4 mb-4">
                    <p className="body-small text-praxis-black">
                      <strong>{isNorwegian ? 'Samtykke:' : 'Consent:'}</strong>{' '}
                      {t.thirdPartyServices.hubspot.consent}
                    </p>
                  </div>
                  <p className="body-small text-praxis-gray-600 font-medium">
                    {t.thirdPartyServices.hubspot.retention}
                  </p>
                </div>

                {/* Azure */}
                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.thirdPartyServices.azure.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.thirdPartyServices.azure.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.thirdPartyServices.azure.cookies.map((cookie, index) => (
                      <li
                        key={index}
                        className="body-base text-praxis-black flex items-start"
                      >
                        <span className="text-praxis-gold mr-2">•</span>
                        {cookie}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-praxis-white rounded-lg p-4 mb-4">
                    <p className="body-small text-praxis-black">
                      <strong>
                        {isNorwegian ? 'Sikkerhet:' : 'Security:'}
                      </strong>{' '}
                      {t.thirdPartyServices.azure.security}
                    </p>
                  </div>
                  <p className="body-small text-praxis-gray-600 font-medium">
                    {t.thirdPartyServices.azure.retention}
                  </p>
                </div>
              </div>
            </section>

            {/* Consent Management */}
            <section id="consent" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.consentManagement.title}
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.consentManagement.consent.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.consentManagement.consent.description}
                  </p>
                  <ul className="space-y-2">
                    {t.consentManagement.consent.options.map(
                      (option, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {option}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.consentManagement.browserControls.title}
                  </h3>
                  <p className="body-base text-praxis-black mb-4">
                    {t.consentManagement.browserControls.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {t.consentManagement.browserControls.instructions.map(
                      (instruction, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {instruction}
                        </li>
                      )
                    )}
                  </ul>
                  <div className="bg-praxis-off-white rounded-lg p-4">
                    <p className="body-small text-praxis-black">
                      <strong>{isNorwegian ? 'Merk:' : 'Note:'}</strong>{' '}
                      {t.consentManagement.browserControls.note}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section id="retention" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.dataRetention.title}
              </h2>
              <div className="space-y-4">
                {t.dataRetention.retention.map((item, index) => (
                  <div
                    key={index}
                    className="bg-praxis-off-white rounded-lg p-4"
                  >
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {item.category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="body-small text-praxis-black">
                          <strong>
                            {isNorwegian ? 'Varighet:' : 'Duration:'}
                          </strong>{' '}
                          {item.duration}
                        </p>
                      </div>
                      <div>
                        <p className="body-small text-praxis-black">
                          <strong>
                            {isNorwegian ? 'Sletting:' : 'Deletion:'}
                          </strong>{' '}
                          {item.deletion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* International Compliance */}
            <section id="compliance" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.internationalCompliance.title}
              </h2>

              <div className="space-y-6">
                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.internationalCompliance.gdpr.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.internationalCompliance.gdpr.requirements.map(
                      (requirement, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {requirement}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.internationalCompliance.norway.title}
                  </h3>
                  <ul className="space-y-2">
                    {t.internationalCompliance.norway.requirements.map(
                      (requirement, index) => (
                        <li
                          key={index}
                          className="body-base text-praxis-black flex items-start"
                        >
                          <span className="text-praxis-gold mr-2">•</span>
                          {requirement}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="bg-praxis-off-white rounded-lg p-6">
                  <h3 className="h3 text-praxis-dark-blue mb-3">
                    {t.internationalCompliance.other.title}
                  </h3>
                  <p className="body-base text-praxis-black">
                    {t.internationalCompliance.other.note}
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section id="updates" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.updates.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.updates.content}
              </p>
              <ul className="space-y-2">
                {t.updates.notification.map((item, index) => (
                  <li
                    key={index}
                    className="body-base text-praxis-black flex items-start"
                  >
                    <span className="text-praxis-gold mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Contact */}
            <section id="contact" className="mb-8">
              <h2 className="h2 text-praxis-dark-blue mb-4">
                {t.contact.title}
              </h2>
              <p className="body-base text-praxis-black leading-relaxed mb-4">
                {t.contact.content}
              </p>
              <div className="space-y-4">
                {t.contact.methods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-praxis-off-white rounded-lg p-4"
                  >
                    <h4 className="h6 text-praxis-dark-blue mb-2">
                      {method.method}
                    </h4>
                    <p className="body-base text-praxis-black mb-1">
                      <a
                        href={`mailto:${method.contact}`}
                        className="text-praxis-dark-blue hover:text-praxis-gold focus-ring rounded"
                      >
                        {method.contact}
                      </a>
                    </p>
                    <p className="body-small text-praxis-gray-600">
                      {method.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Cookie Preferences CTA */}
          <div className="mt-12 bg-praxis-dark-blue rounded-lg p-8 text-center">
            <h3 className="h3 text-praxis-white mb-4">
              {isNorwegian
                ? 'Administrer Informasjonskapslerpreferanser'
                : 'Manage Cookie Preferences'}
            </h3>
            <p className="body-base text-praxis-tan mb-6">
              {isNorwegian
                ? 'Klikk nedenfor for å tilpasse informasjonskapslerinnstillingene dine og kontrollere hvordan vi bruker informasjonskapsler på vårt nettsted.'
                : 'Click below to customize your cookie settings and control how we use cookies on our website.'}
            </p>
            <button
              className="inline-flex items-center px-6 py-3 bg-praxis-gold text-praxis-black rounded-lg font-heading uppercase tracking-brand-wide hover:bg-praxis-gold-light transition-brand focus-ring mr-4"
              onClick={() => {
                // This would open cookie preferences modal in real implementation
                alert(
                  isNorwegian
                    ? 'Informasjonskapslerpreferanser åpnes...'
                    : 'Opening cookie preferences...'
                );
              }}
            >
              {isNorwegian
                ? 'Informasjonskapslerpreferanser'
                : 'Cookie Preferences'}
            </button>
            <a
              href="mailto:privacy@praxisnavigator.io"
              className="inline-flex items-center px-6 py-3 border border-praxis-gold text-praxis-gold rounded-lg font-heading uppercase tracking-brand-wide hover:bg-praxis-gold hover:text-praxis-black transition-brand focus-ring"
            >
              {isNorwegian ? 'Kontakt Personvern' : 'Contact Privacy'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
