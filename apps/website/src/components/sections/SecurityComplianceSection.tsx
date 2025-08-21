import React from 'react';

interface SecurityComplianceSectionProps {
  currentLanguage?: string;
}

export const SecurityComplianceSection: React.FC<
  SecurityComplianceSectionProps
> = ({ currentLanguage = 'en' }) => {
  const isNorwegian = currentLanguage === 'no';

  const content = {
    en: {
      title: 'Security Frameworks and Certifications',
      subtitle:
        'Enterprise-grade security and compliance standards that protect your data and meet regulatory requirements.',
      frameworks: [
        {
          name: 'SOC2 Type II',
          icon: '🛡️',
          status: 'Certified',
          description:
            'Annual independent audit of security and availability controls',
          details: [
            'Security: Comprehensive information security controls and procedures',
            'Availability: 99.9% uptime SLA with monitoring and incident response',
            'Processing Integrity: Accurate and complete data processing validation',
            'Confidentiality: Customer data protection and access control measures',
            'Privacy: Personal information handling and consent management',
          ],
          lastAudit: 'July 2024',
          nextAudit: 'July 2025',
        },
        {
          name: 'ISO 27001',
          icon: '⚡',
          status: 'Certified',
          description:
            'Information Security Management System international standard',
          details: [
            'Risk Management: Systematic identification and mitigation of security risks',
            'Policy Framework: Comprehensive information security policies and procedures',
            'Asset Management: Inventory and protection of information assets',
            'Access Control: Identity and access management with least privilege',
            'Incident Management: Structured response to security incidents and breaches',
            'Business Continuity: Disaster recovery and operational resilience planning',
          ],
          lastAudit: 'September 2024',
          nextAudit: 'September 2027',
        },
        {
          name: 'GDPR Compliance',
          icon: '🌍',
          status: 'Compliant',
          description:
            'European Union General Data Protection Regulation adherence',
          details: [
            'Data Processing: Lawful basis and purpose limitation for all personal data',
            'User Rights: Implementation of access, rectification, erasure, and portability',
            'Consent Management: Granular consent collection and withdrawal mechanisms',
            'Data Protection: Privacy by design and default in all systems',
            'Breach Notification: 72-hour reporting to supervisory authorities',
            'Data Transfers: Adequate safeguards for international data transfers',
          ],
          lastAudit: 'Ongoing',
          nextAudit: 'Continuous',
        },
        {
          name: 'NIS2 Directive',
          icon: '🏛️',
          status: 'Compliant',
          description:
            'EU Network and Information Security Directive compliance',
          details: [
            'Risk Management: Cybersecurity risk assessment and mitigation measures',
            'Incident Reporting: Mandatory incident reporting to national authorities',
            'Supply Chain Security: Vendor risk management and third-party assessments',
            'Governance: Executive accountability for cybersecurity governance',
            'Resilience: Business continuity and disaster recovery capabilities',
            'Training: Cybersecurity awareness and employee training programs',
          ],
          lastAudit: 'October 2024',
          nextAudit: 'Annual review',
        },
      ],
      securityMeasures: {
        title: 'Technical Security Measures',
        subtitle:
          'Comprehensive security controls protecting your data at every layer.',
        measures: [
          {
            category: 'Data Encryption',
            icon: '🔐',
            items: [
              'AES-256 encryption for data at rest',
              'TLS 1.3 encryption for data in transit',
              'End-to-end encryption for sensitive communications',
              'Hardware Security Modules (HSMs) for key management',
              'Regular key rotation and cryptographic security reviews',
            ],
          },
          {
            category: 'Access Controls',
            icon: '🔑',
            items: [
              'Multi-factor authentication (MFA) required for all accounts',
              'Role-based access control (RBAC) with least privilege principle',
              'Single Sign-On (SSO) integration with Azure Active Directory',
              'Regular access reviews and automated deprovisioning',
              'Privileged access management (PAM) for administrative functions',
            ],
          },
          {
            category: 'Infrastructure Security',
            icon: '🏗️',
            items: [
              'Secure cloud infrastructure with Microsoft Azure',
              'Network segmentation and micro-segmentation',
              'Web Application Firewall (WAF) and DDoS protection',
              'Intrusion detection and prevention systems (IDS/IPS)',
              'Continuous vulnerability scanning and patch management',
            ],
          },
          {
            category: 'Monitoring & Response',
            icon: '📊',
            items: [
              '24/7 security operations center (SOC) monitoring',
              'Security Information and Event Management (SIEM)',
              'Automated threat detection and response',
              'Regular penetration testing and security assessments',
              'Incident response team with defined escalation procedures',
            ],
          },
        ],
      },
      auditTrail: {
        title: 'Audit Trail and Documentation',
        description:
          'Complete audit trail and compliance documentation available for enterprise customers.',
        items: [
          'Annual third-party security audits and assessments',
          'Continuous compliance monitoring and reporting',
          'Security control evidence and documentation',
          'Penetration testing results and remediation tracking',
          'Incident response logs and breach notification records',
          'Vendor risk assessments and due diligence documentation',
        ],
      },
    },
    no: {
      title: 'Sikkerhetsrammeverk og Sertifiseringer',
      subtitle:
        'Bedriftsnivå sikkerhet og samsvarsstandarder som beskytter dine data og oppfyller regulatoriske krav.',
      frameworks: [
        {
          name: 'SOC2 Type II',
          icon: '🛡️',
          status: 'Sertifisert',
          description:
            'Årlig uavhengig revisjon av sikkerhets- og tilgjengelighetskontroller',
          details: [
            'Sikkerhet: Omfattende informasjonssikkerhetskontroller og prosedyrer',
            'Tilgjengelighet: 99,9% oppetid SLA med overvåking og hendelsesrespons',
            'Behandlingsintegritet: Nøyaktig og komplett databehandlingsvalidering',
            'Konfidensialitet: Kundedatabeskyttelse og tilgangskontrolltiltak',
            'Personvern: Personlig informasjonsbehandling og samtykkeadministrasjon',
          ],
          lastAudit: 'Juli 2024',
          nextAudit: 'Juli 2025',
        },
        {
          name: 'ISO 27001',
          icon: '⚡',
          status: 'Sertifisert',
          description:
            'Informasjonssikkerhetsstyringssystem internasjonal standard',
          details: [
            'Risikostyring: Systematisk identifikasjon og reduksjon av sikkerhetsrisikoer',
            'Policy-rammeverk: Omfattende informasjonssikkerhetspolicyer og prosedyrer',
            'Asset-styring: Inventar og beskyttelse av informasjonsressurser',
            'Tilgangskontroll: Identitets- og tilgangsstyring med minste privilegium',
            'Hendelsesstyring: Strukturert respons på sikkerhetshendelser og brudd',
            'Forretningskontinuitet: Katastrofegjenoppretting og operasjonell motstandsdyktighet',
          ],
          lastAudit: 'September 2024',
          nextAudit: 'September 2027',
        },
        {
          name: 'GDPR-samsvar',
          icon: '🌍',
          status: 'Kompatibel',
          description:
            'Europeiske Union Generell Databeskyttelsesforordning overholdelse',
          details: [
            'Databehandling: Lovlig grunnlag og formålsbegrensning for alle personopplysninger',
            'Brukerrettigheter: Implementering av tilgang, retting, sletting og portabilitet',
            'Samtykkeadministrasjon: Granulær samtykkeinnsamling og tilbaketrekkingsmekanismer',
            'Databeskyttelse: Personvern by design og standard i alle systemer',
            'Bruddvarsling: 72-timers rapportering til tilsynsmyndigheter',
            'Dataoverføringer: Tilstrekkelige sikkerhetstiltak for internasjonale dataoverføringer',
          ],
          lastAudit: 'Pågående',
          nextAudit: 'Kontinuerlig',
        },
        {
          name: 'NIS2-direktivet',
          icon: '🏛️',
          status: 'Kompatibel',
          description:
            'EU Nettverks- og Informasjonssikkerhetsdirektiv samsvar',
          details: [
            'Risikostyring: Cybersikkerhet risikovurdering og reduksjonstiltak',
            'Hendelsesrapportering: Obligatorisk hendelsesrapportering til nasjonale myndigheter',
            'Leverandørkjedesikkerhet: Leverandørrisikostyring og tredjepartsvurderinger',
            'Styring: Lederansvar for cybersikkerhetsstyring',
            'Motstandsdyktighet: Forretningskontinuitet og katastrofegjenopprettingsevner',
            'Trening: Cybersikkerhetsbevissthet og ansatte treningsprogrammer',
          ],
          lastAudit: 'Oktober 2024',
          nextAudit: 'Årlig gjennomgang',
        },
      ],
      securityMeasures: {
        title: 'Tekniske Sikkerhetstiltak',
        subtitle:
          'Omfattende sikkerhetskontroller som beskytter dine data på alle lag.',
        measures: [
          {
            category: 'Datakryptering',
            icon: '🔐',
            items: [
              'AES-256 kryptering for data i hvile',
              'TLS 1.3 kryptering for data i transitt',
              'Ende-til-ende kryptering for sensitiv kommunikasjon',
              'Hardware Security Modules (HSMs) for nøkkeladministrasjon',
              'Regelmessig nøkkelrotasjon og kryptografiske sikkerhetsgjennomganger',
            ],
          },
          {
            category: 'Tilgangskontroller',
            icon: '🔑',
            items: [
              'Multifaktor autentisering (MFA) påkrevd for alle kontoer',
              'Rollebasert tilgangskontroll (RBAC) med minste privilegium prinsipp',
              'Single Sign-On (SSO) integrasjon med Azure Active Directory',
              'Regelmessige tilgangsgjennomganger og automatisert deprovisionering',
              'Privilegert tilgangsstyring (PAM) for administrative funksjoner',
            ],
          },
          {
            category: 'Infrastruktursikkerhet',
            icon: '🏗️',
            items: [
              'Sikker sky-infrastruktur med Microsoft Azure',
              'Nettverkssegmentering og mikro-segmentering',
              'Web Application Firewall (WAF) og DDoS beskyttelse',
              'Intrusion detection og prevention systemer (IDS/IPS)',
              'Kontinuerlig sårbarhetsskanning og patch-administrasjon',
            ],
          },
          {
            category: 'Overvåking & Respons',
            icon: '📊',
            items: [
              '24/7 sikkerhetsoperasjonssenter (SOC) overvåking',
              'Security Information and Event Management (SIEM)',
              'Automatisert trusseldeteksjon og respons',
              'Regelmessig penetrasjonstesting og sikkerhetsvurderinger',
              'Hendelsesrespons team med definerte eskaleringsprosedyrer',
            ],
          },
        ],
      },
      auditTrail: {
        title: 'Revisjonsspor og Dokumentasjon',
        description:
          'Komplett revisjonsspor og samsvarsdokumentasjon tilgjengelig for bedriftskunder.',
        items: [
          'Årlige tredjepartsikkerhetrevisioner og vurderinger',
          'Kontinuerlig samsvarovervåking og rapportering',
          'Sikkerhetskontrollbevis og dokumentasjon',
          'Penetrasjonstesting resultater og remediering sporing',
          'Hendelsesrespons logger og bruddvarslingsoppføringer',
          'Leverandørrisikovurderinger og due diligence dokumentasjon',
        ],
      },
    },
  };

  const t = content[isNorwegian ? 'no' : 'en'];

  return (
    <section className="py-16 lg:py-24 bg-praxis-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="h2 text-praxis-dark-blue mb-4">{t.title}</h2>
          <p className="text-xl text-praxis-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Compliance Frameworks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {t.frameworks.map((framework, index) => (
            <div key={index} className="bg-praxis-off-white rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{framework.icon}</div>
                <div>
                  <h3 className="h3 text-praxis-dark-blue mb-2">
                    {framework.name}
                  </h3>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-praxis-gold bg-opacity-20 text-praxis-dark-blue">
                      ✓ {framework.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="body-base text-praxis-gray-600 mb-6">
                {framework.description}
              </p>

              <div className="space-y-3 mb-6">
                {framework.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start">
                    <span className="text-praxis-gold mr-3 mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="body-base text-praxis-black">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-praxis-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="body-small text-praxis-gray-500">
                      {isNorwegian ? 'Siste revisjon' : 'Last Audit'}
                    </p>
                    <p className="body-base text-praxis-dark-blue font-medium">
                      {framework.lastAudit}
                    </p>
                  </div>
                  <div>
                    <p className="body-small text-praxis-gray-500">
                      {isNorwegian ? 'Neste revisjon' : 'Next Audit'}
                    </p>
                    <p className="body-base text-praxis-dark-blue font-medium">
                      {framework.nextAudit}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Measures */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="h2 text-praxis-dark-blue mb-4">
              {t.securityMeasures.title}
            </h3>
            <p className="text-lg text-praxis-gray-600 max-w-3xl mx-auto">
              {t.securityMeasures.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.securityMeasures.measures.map((measure, index) => (
              <div
                key={index}
                className="bg-praxis-white border border-praxis-gray-200 rounded-lg p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{measure.icon}</div>
                  <h4 className="h4 text-praxis-dark-blue">
                    {measure.category}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {measure.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-praxis-gold mr-2 mt-1 flex-shrink-0">
                        ✓
                      </span>
                      <span className="body-base text-praxis-black">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Trail Section */}
        <div className="bg-praxis-gold bg-opacity-10 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="h3 text-praxis-dark-blue mb-4">
              {t.auditTrail.title}
            </h3>
            <p className="body-base text-praxis-gray-600 max-w-3xl mx-auto">
              {t.auditTrail.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.auditTrail.items.map((item, index) => (
              <div
                key={index}
                className="bg-praxis-white rounded-lg p-4 flex items-start"
              >
                <span className="text-praxis-gold mr-3 mt-1 flex-shrink-0">
                  📋
                </span>
                <span className="body-base text-praxis-black">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="mailto:compliance@praxisnavigator.io"
              className="btn-accent"
            >
              {isNorwegian ? 'Be om Dokumentasjon' : 'Request Documentation'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
