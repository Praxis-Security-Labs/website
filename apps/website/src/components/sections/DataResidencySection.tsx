import React from 'react';

interface DataResidencySectionProps {
  currentLanguage?: string;
}

export const DataResidencySection: React.FC<DataResidencySectionProps> = ({
  currentLanguage = 'en',
}) => {
  const isNorwegian = currentLanguage === 'no';

  const content = {
    en: {
      title: 'Data Residency and International Compliance',
      subtitle:
        'Transparent data processing locations and cross-border transfer safeguards for global enterprise customers.',
      regions: [
        {
          name: 'European Union',
          flag: '🇪🇺',
          primary: true,
          dataCenter: 'Amsterdam, Netherlands',
          compliance: ['GDPR', 'NIS2 Directive', 'ePrivacy Directive'],
          description:
            'Primary data processing location for EU/EEA customers with full GDPR compliance.',
          details: [
            'Data processed and stored within EU/EEA boundaries',
            'GDPR Article 28 Data Processing Agreements available',
            'No data transfers outside EU without adequate safeguards',
            'Right to data localization for enterprise customers',
            'EU-based support and compliance teams',
            'Supervisory authority: Dutch Data Protection Authority (AP)',
          ],
        },
        {
          name: 'United Kingdom',
          flag: '🇬🇧',
          primary: false,
          dataCenter: 'London, United Kingdom',
          compliance: ['UK GDPR', 'Data Protection Act 2018'],
          description:
            'Dedicated UK data processing for post-Brexit compliance requirements.',
          details: [
            'UK GDPR and Data Protection Act 2018 compliance',
            'Data processed within UK territorial boundaries',
            'Standard Contractual Clauses for EU data transfers',
            "Information Commissioner's Office (ICO) jurisdiction",
            'Brexit-compliant data processing agreements',
            'UK-based customer support and legal representation',
          ],
        },
        {
          name: 'Norway',
          flag: '🇳🇴',
          primary: false,
          dataCenter: 'Oslo, Norway',
          compliance: [
            'Norwegian Personal Data Act',
            'GDPR (via EEA Agreement)',
          ],
          description:
            'Local data processing for Norwegian customers with Datatilsynet compliance.',
          details: [
            'Norwegian Personal Data Act (Personopplysningsloven) compliance',
            'GDPR compliance through EEA Agreement implementation',
            'Data sovereignty for Norwegian government entities',
            'Datatilsynet (Norwegian DPA) supervisory authority',
            'Local Norwegian language support and documentation',
            'Oslo-based data center with 99.9% uptime SLA',
          ],
        },
        {
          name: 'United States',
          flag: '🇺🇸',
          primary: false,
          dataCenter: 'Virginia, United States',
          compliance: ['CCPA', 'SOX', 'HIPAA (where applicable)'],
          description:
            'US data processing with state privacy law compliance and federal security standards.',
          details: [
            'California Consumer Privacy Act (CCPA) compliance',
            'Sarbanes-Oxley Act (SOX) compliance for financial data',
            'HIPAA Business Associate Agreements available',
            'FedRAMP-compatible security controls',
            'US-based enterprise support teams',
            'Data residency options for federal contractors',
          ],
        },
      ],
      transferMechanisms: {
        title: 'International Data Transfer Safeguards',
        subtitle:
          'Legal mechanisms ensuring adequate protection for cross-border data transfers.',
        mechanisms: [
          {
            name: 'Standard Contractual Clauses (SCCs)',
            icon: '📋',
            description:
              'European Commission approved clauses for international transfers',
            coverage: [
              'EU to Third Countries',
              'Controller to Processor',
              'Processor to Processor',
            ],
            details: [
              'Commission Decision 2021/914 implementation',
              'Supplementary measures assessment for each transfer',
              'Data subject rights equivalent to GDPR standards',
              'Legal remedies and effective enforcement mechanisms',
              'Regular review and updates based on adequacy decisions',
            ],
          },
          {
            name: 'Adequacy Decisions',
            icon: '✅',
            description:
              'EU Commission recognition of equivalent data protection',
            coverage: [
              'UK',
              'Switzerland',
              'New Zealand',
              'Canada (commercial)',
            ],
            details: [
              'European Commission adequacy decision reliance',
              'No additional safeguards required for transfers',
              'Equivalent level of data protection guaranteed',
              'Regular monitoring of adequacy decision validity',
              'Automatic compliance with data transfer requirements',
            ],
          },
          {
            name: 'Binding Corporate Rules (BCRs)',
            icon: '🏢',
            description:
              'Internal data protection rules for multinational groups',
            coverage: ['Microsoft Azure', 'HubSpot', 'Other Service Providers'],
            details: [
              'Approved internal data protection policies',
              'Binding legal commitments across corporate group',
              'Data subject rights enforcement mechanisms',
              'Independent oversight and compliance monitoring',
              'European DPA approval and ongoing supervision',
            ],
          },
          {
            name: 'Certification Schemes',
            icon: '🏆',
            description: 'Industry certification programs for data protection',
            coverage: ['SOC2 Type II', 'ISO 27001', 'Privacy Shield Successor'],
            details: [
              'Independent third-party certification bodies',
              'Ongoing monitoring and recertification requirements',
              'Transparent compliance reporting and evidence',
              'Industry-specific data protection standards',
              'Regular audit and assessment procedures',
            ],
          },
        ],
      },
      sovereignty: {
        title: 'Data Sovereignty and Government Access',
        subtitle:
          'Transparency about government access requests and data sovereignty measures.',
        principles: [
          {
            principle: 'Data Sovereignty',
            description:
              'Customer data remains under the jurisdiction of the chosen processing location.',
            commitments: [
              'Data processing location transparency and choice',
              'No unauthorized access by foreign governments',
              'Legal challenges to overreaching government requests',
              'Customer notification of government access requests where legally permitted',
              'Data encryption rendering government access technically difficult',
            ],
          },
          {
            principle: 'Government Access Transparency',
            description:
              'Annual transparency reporting on government data requests and legal processes.',
            commitments: [
              'Annual government access transparency reports',
              'Legal process notification to affected customers',
              'Challenge overreaching or invalid government requests',
              'Minimize data disclosure through legal advocacy',
              'Encryption and technical measures limiting government access',
            ],
          },
          {
            principle: 'Legal Protection',
            description:
              'Strong legal frameworks protecting customer data from unauthorized access.',
            commitments: [
              'Multi-jurisdictional legal representation',
              'Challenge invalid or overbroad government requests',
              'Data minimization reducing exposure to government access',
              'Technical and organizational measures limiting access',
              'Customer data sovereignty rights respected',
            ],
          },
        ],
      },
      contact: {
        title: 'Data Residency Support',
        description:
          'Contact our compliance team for specific data residency requirements and regional compliance questions.',
        team: {
          compliance: {
            email: 'compliance@praxisnavigator.io',
            role: 'General compliance and data residency questions',
          },
          dpo: {
            email: 'dpo@praxisnavigator.io',
            role: 'Data Protection Officer for GDPR and privacy matters',
          },
          legal: {
            email: 'legal@praxisnavigator.io',
            role: 'Legal team for contractual and regulatory questions',
          },
        },
      },
    },
    no: {
      title: 'Dataresidensitet og Internasjonal Samsvar',
      subtitle:
        'Transparente databehandlingslokasjoner og grenseoverskridende overføringssikkerhetstiltak for globale bedriftskunder.',
      regions: [
        {
          name: 'Europeiske Union',
          flag: '🇪🇺',
          primary: true,
          dataCenter: 'Amsterdam, Nederland',
          compliance: ['GDPR', 'NIS2-direktivet', 'ePrivacy-direktivet'],
          description:
            'Primære databehandlingssted for EU/EØS-kunder med full GDPR-samsvar.',
          details: [
            'Data behandlet og lagret innenfor EU/EØS-grenser',
            'GDPR Artikkel 28 Databehandlingsavtaler tilgjengelige',
            'Ingen dataoverføringer utenfor EU uten tilstrekkelige sikkerhetstiltak',
            'Rett til datalokalisering for bedriftskunder',
            'EU-baserte støtte- og samsvarteam',
            'Tilsynsmyndighet: Nederlands Databeskyttelsesmyndighet (AP)',
          ],
        },
        {
          name: 'Storbritannia',
          flag: '🇬🇧',
          primary: false,
          dataCenter: 'London, Storbritannia',
          compliance: ['UK GDPR', 'Data Protection Act 2018'],
          description:
            'Dedikert britisk databehandling for post-Brexit samsvarskrav.',
          details: [
            'UK GDPR og Data Protection Act 2018 samsvar',
            'Data behandlet innenfor britiske territoriale grenser',
            'Standard kontraktsklausuler for EU-dataoverføringer',
            "Information Commissioner's Office (ICO) jurisdiksjon",
            'Brexit-kompatible databehandlingsavtaler',
            'UK-basert kundestøtte og juridisk representasjon',
          ],
        },
        {
          name: 'Norge',
          flag: '🇳🇴',
          primary: false,
          dataCenter: 'Oslo, Norge',
          compliance: ['Norsk personopplysningslov', 'GDPR (via EØS-avtalen)'],
          description:
            'Lokal databehandling for norske kunder med Datatilsynet samsvar.',
          details: [
            'Norsk personopplysningslov samsvar',
            'GDPR-samsvar gjennom EØS-avtale implementering',
            'Datasuverenitet for norske statlige enheter',
            'Datatilsynet tilsynsmyndighet',
            'Lokal norsk språkstøtte og dokumentasjon',
            'Oslo-basert datasenter med 99,9% oppetid SLA',
          ],
        },
        {
          name: 'Forente Stater',
          flag: '🇺🇸',
          primary: false,
          dataCenter: 'Virginia, Forente Stater',
          compliance: ['CCPA', 'SOX', 'HIPAA (der det gjelder)'],
          description:
            'US databehandling med statlig personvernlov samsvar og føderale sikkerhetsstandarder.',
          details: [
            'California Consumer Privacy Act (CCPA) samsvar',
            'Sarbanes-Oxley Act (SOX) samsvar for finansielle data',
            'HIPAA Business Associate avtaler tilgjengelige',
            'FedRAMP-kompatible sikkerhetskontroller',
            'US-baserte bedriftssupport team',
            'Dataresidensitet alternativer for føderale kontraktører',
          ],
        },
      ],
      transferMechanisms: {
        title: 'Internasjonale Dataoverføring Sikkerhetstiltak',
        subtitle:
          'Juridiske mekanismer som sikrer tilstrekkelig beskyttelse for grenseoverskridende dataoverføringer.',
        mechanisms: [
          {
            name: 'Standard Kontraktsklausuler (SCCs)',
            icon: '📋',
            description:
              'Europakommisjonen godkjente klausuler for internasjonale overføringer',
            coverage: [
              'EU til tredjeland',
              'Behandlingsansvarlig til databehandler',
              'Databehandler til databehandler',
            ],
            details: [
              'Commission Decision 2021/914 implementering',
              'Supplerende tiltak vurdering for hver overføring',
              'Datasubjekt rettigheter tilsvarende GDPR-standarder',
              'Juridiske rettsmidler og effektive håndhevingsmekanismer',
              'Regelmessig gjennomgang og oppdateringer basert på tilstrekkelighetsavgjørelser',
            ],
          },
          {
            name: 'Tilstrekkelighetsavgjørelser',
            icon: '✅',
            description:
              'EU-kommisjonen anerkjennelse av tilsvarende databeskyttelse',
            coverage: ['UK', 'Sveits', 'New Zealand', 'Canada (kommersiell)'],
            details: [
              'Europakommisjonen tilstrekkelighetsavgjørelse avhengighet',
              'Ingen tilleggssikkerhetstiltak påkrevd for overføringer',
              'Tilsvarende nivå av databeskyttelse garantert',
              'Regelmessig overvåking av tilstrekkelighetsavgjørelse gyldighet',
              'Automatisk samsvar med dataoverføringskrav',
            ],
          },
          {
            name: 'Bindende Bedriftsregler (BCRs)',
            icon: '🏢',
            description:
              'Interne databeskyttelsesregler for multinasjonale konsern',
            coverage: [
              'Microsoft Azure',
              'HubSpot',
              'Andre tjenesteleverandører',
            ],
            details: [
              'Godkjente interne databeskyttelsespolicyer',
              'Bindende juridiske forpliktelser på tvers av bedriftskonsern',
              'Datasubjekt rettigheter håndhevingsmekanismer',
              'Uavhengig tilsyn og samsvarovervåking',
              'Europeisk DPA-godkjenning og pågående supervising',
            ],
          },
          {
            name: 'Sertifiseringsordninger',
            icon: '🏆',
            description:
              'Industri sertifiseringsprogrammer for databeskyttelse',
            coverage: [
              'SOC2 Type II',
              'ISO 27001',
              'Privacy Shield etterfølger',
            ],
            details: [
              'Uavhengige tredjeparten sertifiseringsorganer',
              'Pågående overvåking og resertifiseringskrav',
              'Transparente samsvarrapportering og bevis',
              'Industri-spesifikke databeskyttelsesstandarder',
              'Regelmessige audit og vurderingsprosedyrer',
            ],
          },
        ],
      },
      sovereignty: {
        title: 'Datasuverenitet og Myndighetstilgang',
        subtitle:
          'Åpenhet om myndigheters tilgangsforespørsler og datasuverenitetstiltak.',
        principles: [
          {
            principle: 'Datasuverenitet',
            description:
              'Kundedata forblir under jurisdiksjonen til det valgte behandlingsstedet.',
            commitments: [
              'Databehandlingssted åpenhet og valg',
              'Ingen uautorisert tilgang av utenlandske myndigheter',
              'Juridiske utfordringer til over-reaching myndighetsforespørsler',
              'Kundenotifikasjon av myndighetstilgangsforespørsler der juridisk tillatt',
              'Datakryptering som gjør myndighetstilgang teknisk vanskelig',
            ],
          },
          {
            principle: 'Myndighetstilgang Åpenhet',
            description:
              'Årlig åpenhetsrapportering om myndighetsdata forespørsler og juridiske prosesser.',
            commitments: [
              'Årlige myndighetstilgang åpenhetsrapporter',
              'Juridisk prosess notifikasjon til berørte kunder',
              'Utfordre over-reaching eller ugyldige myndighetsforespørsler',
              'Minimere dataavsløring gjennom juridisk forsvar',
              'Kryptering og tekniske tiltak som begrenser myndighetstilgang',
            ],
          },
          {
            principle: 'Juridisk Beskyttelse',
            description:
              'Sterke juridiske rammeverk som beskytter kundedata fra uautorisert tilgang.',
            commitments: [
              'Multi-jurisdiksjonell juridisk representasjon',
              'Utfordre ugyldige eller alt for brede myndighetsforespørsler',
              'Dataminimering som reduserer eksponering for myndighetstilgang',
              'Tekniske og organisatoriske tiltak som begrenser tilgang',
              'Kundedata suverenitet rettigheter respektert',
            ],
          },
        ],
      },
      contact: {
        title: 'Dataresidensitet Støtte',
        description:
          'Kontakt vårt samsvarteam for spesifikke dataresidensitetskrav og regionale samsvarsspørsmål.',
        team: {
          compliance: {
            email: 'compliance@praxisnavigator.io',
            role: 'Generelle samsvar og dataresidensitet spørsmål',
          },
          dpo: {
            email: 'dpo@praxisnavigator.io',
            role: 'Personvernombud for GDPR og personvernsaker',
          },
          legal: {
            email: 'legal@praxisnavigator.io',
            role: 'Juridisk team for kontraktuelle og regulatoriske spørsmål',
          },
        },
      },
    },
  };

  const t = content[isNorwegian ? 'no' : 'en'];

  return (
    <section className="py-16 lg:py-24 bg-praxis-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="h2 text-praxis-dark-blue mb-4">{t.title}</h2>
          <p className="text-xl text-praxis-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Data Processing Regions */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {t.regions.map((region, index) => (
              <div
                key={index}
                className={`bg-praxis-white rounded-lg p-8 ${region.primary ? 'border-2 border-praxis-gold' : 'border border-praxis-gray-200'}`}
              >
                {region.primary && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-praxis-gold bg-opacity-20 text-praxis-dark-blue mb-4">
                    ⭐ {isNorwegian ? 'Primær lokasjon' : 'Primary Location'}
                  </div>
                )}

                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{region.flag}</div>
                  <div>
                    <h3 className="h3 text-praxis-dark-blue mb-2">
                      {region.name}
                    </h3>
                    <p className="body-base text-praxis-gray-600">
                      {region.dataCenter}
                    </p>
                  </div>
                </div>

                <p className="body-base text-praxis-gray-600 mb-6">
                  {region.description}
                </p>

                {/* Compliance Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {region.compliance.map((item, complianceIndex) => (
                    <span
                      key={complianceIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-praxis-gold bg-opacity-10 text-praxis-dark-blue"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {region.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <span className="text-praxis-gold mr-2 mt-1 flex-shrink-0">
                        •
                      </span>
                      <span className="body-small text-praxis-black">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transfer Mechanisms */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="h2 text-praxis-dark-blue mb-4">
              {t.transferMechanisms.title}
            </h3>
            <p className="text-lg text-praxis-gray-600 max-w-3xl mx-auto">
              {t.transferMechanisms.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.transferMechanisms.mechanisms.map((mechanism, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-lg p-6 border border-praxis-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{mechanism.icon}</div>
                  <div>
                    <h4 className="h4 text-praxis-dark-blue mb-1">
                      {mechanism.name}
                    </h4>
                    <p className="body-small text-praxis-gray-600">
                      {mechanism.description}
                    </p>
                  </div>
                </div>

                {/* Coverage */}
                <div className="mb-4">
                  <p className="body-small text-praxis-gray-500 mb-2">
                    {isNorwegian ? 'Dekning:' : 'Coverage:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mechanism.coverage.map((item, coverageIndex) => (
                      <span
                        key={coverageIndex}
                        className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-praxis-off-white text-praxis-dark-blue"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  {mechanism.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <span className="text-praxis-gold mr-2 mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span className="body-small text-praxis-black">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sovereignty */}
        <div className="bg-praxis-white rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="h2 text-praxis-dark-blue mb-4">
              {t.sovereignty.title}
            </h3>
            <p className="text-lg text-praxis-gray-600 max-w-3xl mx-auto">
              {t.sovereignty.subtitle}
            </p>
          </div>

          <div className="space-y-8">
            {t.sovereignty.principles.map((principle, index) => (
              <div key={index} className="bg-praxis-off-white rounded-lg p-6">
                <h4 className="h4 text-praxis-dark-blue mb-3">
                  {principle.principle}
                </h4>
                <p className="body-base text-praxis-gray-600 mb-4">
                  {principle.description}
                </p>

                <div className="space-y-2">
                  {principle.commitments.map((commitment, commitmentIndex) => (
                    <div key={commitmentIndex} className="flex items-start">
                      <span className="text-praxis-gold mr-2 mt-1 flex-shrink-0">
                        🛡️
                      </span>
                      <span className="body-small text-praxis-black">
                        {commitment}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-praxis-dark-blue rounded-lg p-8 text-center">
          <h3 className="h3 text-praxis-white mb-4">{t.contact.title}</h3>
          <p className="body-base text-praxis-tan mb-8 max-w-2xl mx-auto">
            {t.contact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(t.contact.team).map(([key, contact]) => (
              <div
                key={key}
                className="bg-praxis-white bg-opacity-10 rounded-lg p-4"
              >
                <h4 className="h6 text-praxis-gold mb-2">
                  {key === 'compliance'
                    ? isNorwegian
                      ? 'Samsvar'
                      : 'Compliance'
                    : key === 'dpo'
                      ? isNorwegian
                        ? 'Personvernombud'
                        : 'Data Protection Officer'
                      : isNorwegian
                        ? 'Juridisk'
                        : 'Legal'}
                </h4>
                <a
                  href={`mailto:${contact.email}`}
                  className="body-base text-praxis-tan hover:text-praxis-gold focus-ring rounded block mb-2"
                >
                  {contact.email}
                </a>
                <p className="body-small text-praxis-tan">{contact.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="mailto:compliance@praxisnavigator.io"
              className="btn-accent"
            >
              {isNorwegian ? 'Kontakt Samsvarteam' : 'Contact Compliance Team'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
