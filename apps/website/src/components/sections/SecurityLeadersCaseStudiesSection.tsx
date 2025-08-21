import React, { useState } from 'react';

interface SecurityLeadersCaseStudiesSectionProps {
  language?: 'en' | 'no';
}

export const SecurityLeadersCaseStudiesSection: React.FC<
  SecurityLeadersCaseStudiesSectionProps
> = ({ language = 'en' }) => {
  const [activeCaseStudy, setActiveCaseStudy] =
    useState<string>('manufacturing');

  const content = {
    en: {
      sectionTitle: 'Proven Results: CISO Success Stories',
      sectionDescription:
        'Real-world results from security leaders who transformed their organizations with behavioral measurement.',
      caseStudies: [
        {
          id: 'manufacturing',
          company: 'Global Manufacturing Corp',
          size: '8,500 employees',
          challenge:
            'Proving ROI of $2M annual security training investment to skeptical board members',
          solution:
            'Implemented behavioral measurement to demonstrate actual security improvement over training completion metrics',
          results: [
            '73% reduction in phishing susceptibility within 6 months',
            '£1.2M cost avoidance from prevented security incidents',
            '45% faster board approval for additional security investments',
            '90% improvement in audit readiness and compliance reporting',
          ],
          quote:
            'Praxis Navigator transformed our board conversations from defending costs to celebrating measurable security culture improvements.',
          role: 'CISO',
        },
        {
          id: 'financial',
          company: 'European Financial Services',
          size: '12,000 employees',
          challenge:
            'Meeting stringent regulatory requirements while demonstrating training effectiveness',
          solution:
            'Deployed comprehensive behavioral analytics for NIS2 compliance and executive reporting',
          results: [
            '100% NIS2 compliance readiness achieved',
            '67% reduction in manual compliance reporting time',
            '€800K annual savings from automated audit preparation',
            '95% executive satisfaction with security governance visibility',
          ],
          quote:
            'The regulatory compliance automation alone justified our investment. The behavioral insights are transformational.',
          role: 'Chief Risk Officer',
        },
        {
          id: 'technology',
          company: 'Tech Scale-up Enterprise',
          size: '3,200 employees',
          challenge:
            'Scaling security culture during rapid growth while maintaining investor confidence',
          solution:
            'Established measurement framework for security culture maturity aligned with business growth metrics',
          results: [
            '85% improvement in security culture maturity score',
            '52% reduction in employee-related security incidents',
            '3x faster security culture onboarding for new hires',
            'Series C funding secured with security culture as differentiator',
          ],
          quote:
            'Investors were impressed by our data-driven approach to security culture. It became a competitive advantage.',
          role: 'VP of Security',
        },
      ],
    },
    no: {
      sectionTitle: 'Beviste Resultater: CISO Suksesshistorier',
      sectionDescription:
        'Virkelige resultater fra sikkerhetsledere som transformerte sine organisasjoner med atferdsmåling.',
      caseStudies: [
        {
          id: 'manufacturing',
          company: 'Global Produksjon Corp',
          size: '8,500 ansatte',
          challenge:
            'Bevise ROI av €2M årlig sikkerhetsopplæring investering til skeptiske styremedlemmer',
          solution:
            'Implementerte atferdsmåling for å demonstrere faktisk sikkerhetsforbedring over opplæring fullførelse metrikker',
          results: [
            '73% reduksjon i phishing mottakelighet innen 6 måneder',
            '€1,2M kostnadsunngåelse fra forhindrede sikkerhetshendelser',
            '45% raskere styre godkjenning for ytterligere sikkerhetsinvesteringer',
            '90% forbedring i revisjonsberedskap og compliance rapportering',
          ],
          quote:
            'Praxis Navigator transformerte våre styresamtaler fra å forsvare kostnader til å feire målbare sikkerhetskulturelle forbedringer.',
          role: 'CISO',
        },
        {
          id: 'financial',
          company: 'Europeiske Finansielle Tjenester',
          size: '12,000 ansatte',
          challenge:
            'Møte strenge regulatoriske krav mens de demonstrerer opplæring effektivitet',
          solution:
            'Implementerte omfattende atferdsanalytikk for NIS2 compliance og lederskap rapportering',
          results: [
            '100% NIS2 compliance beredskap oppnådd',
            '67% reduksjon i manuell compliance rapportering tid',
            '€800K årlige besparelser fra automatisert revisjonsforberedelse',
            '95% lederskap tilfredshet med sikkerhetsstyring synlighet',
          ],
          quote:
            'Den regulatoriske compliance automatiseringen alene rettferdiggjorde vår investering. Atferdsinnsiktene er transformasjonelle.',
          role: 'Sjef Risikoansvarlig',
        },
        {
          id: 'technology',
          company: 'Tech Scale-up Virksomhet',
          size: '3,200 ansatte',
          challenge:
            'Skalering sikkerhetskultur under rask vekst mens de opprettholder investor tillit',
          solution:
            'Etablerte målingsramme for sikkerhetskultur modenhet tilpasset forretningsvekst metrikker',
          results: [
            '85% forbedring i sikkerhetskultur modenhet score',
            '52% reduksjon i ansatt-relaterte sikkerhetshendelser',
            '3x raskere sikkerhetskultur onboarding for nye ansatte',
            'Serie C finansiering sikret med sikkerhetskultur som differensiator',
          ],
          quote:
            'Investorer var imponerte over vår datadrevne tilnærming til sikkerhetskultur. Det ble en konkurransefordel.',
          role: 'VP Sikkerhet',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="bg-praxis-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-dark-blue-600 max-w-4xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {t.caseStudies.map(caseStudy => (
            <button
              key={caseStudy.id}
              onClick={() => setActiveCaseStudy(caseStudy.id)}
              className={`px-6 py-3 text-sm font-heading font-semibold rounded-lg transition-all duration-200 ${
                activeCaseStudy === caseStudy.id
                  ? 'bg-praxis-gold text-praxis-dark-blue shadow-lg'
                  : 'bg-praxis-white text-praxis-dark-blue-600 hover:bg-praxis-blue-100 shadow-sm'
              }`}
            >
              {caseStudy.company.split(' ')[0]}{' '}
              {/* Show first word of company name */}
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        {t.caseStudies.map(
          caseStudy =>
            activeCaseStudy === caseStudy.id && (
              <div
                key={caseStudy.id}
                className="bg-praxis-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Content Column */}
                  <div className="p-8">
                    {/* Company Info */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-2">
                        {caseStudy.company}
                      </h3>
                      <p className="text-praxis-dark-blue-600 font-medium">
                        {caseStudy.size}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-8">
                      <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-3">
                        {language === 'no' ? 'Utfordring' : 'Challenge'}
                      </h4>
                      <p className="text-praxis-dark-blue-600">
                        {caseStudy.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-8">
                      <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-3">
                        {language === 'no' ? 'Løsning' : 'Solution'}
                      </h4>
                      <p className="text-praxis-dark-blue-600">
                        {caseStudy.solution}
                      </p>
                    </div>

                    {/* Quote */}
                    <div className="bg-praxis-blue-50 rounded-xl p-6">
                      <blockquote className="text-praxis-dark-blue italic mb-4">
                        &ldquo;{caseStudy.quote}&rdquo;
                      </blockquote>
                      <cite className="text-praxis-dark-blue-600 font-medium not-italic">
                        — {caseStudy.role}, {caseStudy.company}
                      </cite>
                    </div>
                  </div>

                  {/* Results Column */}
                  <div className="bg-praxis-dark-blue p-8 text-praxis-white">
                    <h4 className="text-2xl font-heading font-bold mb-8">
                      {language === 'no' ? 'Resultater' : 'Results'}
                    </h4>

                    <div className="space-y-6">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-8 h-8 bg-praxis-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                            <svg
                              className="w-4 h-4 text-praxis-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className="text-praxis-blue-100 font-medium">
                              {result}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Success Metrics Visual */}
                    <div className="mt-8 pt-8 border-t border-praxis-blue-400">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-3xl font-heading font-bold text-praxis-gold">
                            6
                          </div>
                          <div className="text-praxis-blue-200 text-sm">
                            {language === 'no'
                              ? 'Måneder til ROI'
                              : 'Months to ROI'}
                          </div>
                        </div>
                        <div>
                          <div className="text-3xl font-heading font-bold text-praxis-gold">
                            95%
                          </div>
                          <div className="text-praxis-blue-200 text-sm">
                            {language === 'no'
                              ? 'Lederskap Tilfredshet'
                              : 'Leadership Satisfaction'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-6">
            {language === 'no'
              ? 'Klar for å Bli Vårt Neste Suksesshistorie?'
              : 'Ready to Become Our Next Success Story?'}
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${language === 'no' ? 'no/' : ''}contact?segment=security-leaders&interest=case-study`}
              className="btn-accent btn-lg inline-flex items-center justify-center group"
            >
              {language === 'no'
                ? 'Diskuter Din Situasjon'
                : 'Discuss Your Situation'}
              <svg
                className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>

            <a
              href={`/${language === 'no' ? 'no/' : ''}resources/case-studies`}
              className="btn-secondary btn-lg"
            >
              {language === 'no'
                ? 'Les Flere Case Studies'
                : 'Read More Case Studies'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
