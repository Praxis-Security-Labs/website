import React from 'react';

interface ManagersContactSectionProps {
  language?: 'en' | 'no';
}

export const ManagersContactSection: React.FC<ManagersContactSectionProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      sectionTitle: 'Try Praxis Navigator Free for 30 Days',
      sectionDescription:
        'Start measuring your team security culture today with no commitment. Install directly from Microsoft Azure Marketplace.',
      leftContent: {
        headline: '30-Day Free Trial Benefits',
        description:
          'Get full access to Praxis Navigator through Microsoft Azure Marketplace. No credit card required, no strings attached.',
        benefits: [
          'Complete team security culture assessment',
          'Team behavioral risk analytics and insights dashboard',
          'Departmental performance reports and metrics',
          'Team benchmarking against industry standards',
          'Microsoft Graph integration for seamless deployment',
          'Expert onboarding and team setup guidance included',
        ],
        contactInfo: {
          title: 'Questions About Your Trial?',
          email: 'support@praxisnavigator.io',
          phone: '+47 900 12 345',
          availability: 'Support available: EU/US business hours',
        },
      },
    },
    no: {
      sectionTitle: 'Prøv Praxis Navigator Gratis i 30 Dager',
      sectionDescription:
        'Start måling av ditt team sikkerhetskultur i dag uten forpliktelser. Installer direkte fra Microsoft Azure Marketplace.',
      leftContent: {
        headline: '30-Dagers Gratis Prøveperiode Fordeler',
        description:
          'Få full tilgang til Praxis Navigator gjennom Microsoft Azure Marketplace. Ingen kredittkort påkrevd, ingen forpliktelser.',
        benefits: [
          'Komplett team sikkerhetskultur vurdering',
          'Team atferdsrisiko analytikk og innsikt dashbord',
          'Avdelingsmessige ytelse rapporter og målinger',
          'Team benchmarking mot industristandarder',
          'Microsoft Graph integrasjon for sømløs utplassering',
          'Ekspert innføring og team oppsett veiledning inkludert',
        ],
        contactInfo: {
          title: 'Spørsmål Om Din Prøveperiode?',
          email: 'support@praxisnavigator.io',
          phone: '+47 900 12 345',
          availability: 'Support tilgjengelig: EU/US arbeidstid',
        },
      },
    },
  };

  const t = content[language];

  return (
    <section className="bg-gradient-to-br from-praxis-dark-blue to-praxis-dark-blue-800 border-t border-praxis-blue-300">
      <div className="container mx-auto px-6 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            {t.sectionTitle}
          </h2>
          <p className="text-xl text-praxis-blue-100 max-w-3xl mx-auto">
            {t.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="text-white">
            <h3 className="text-3xl font-heading font-bold mb-6">
              {t.leftContent.headline}
            </h3>
            <p className="text-lg text-praxis-blue-100 mb-8">
              {t.leftContent.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-12">
              {t.leftContent.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-praxis-accent rounded-full flex items-center justify-center mt-0.5 mr-3">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-praxis-blue-100">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Direct Contact Info */}
            <div className="bg-praxis-dark-blue-700/50 backdrop-blur rounded-lg p-6 border border-praxis-blue-400">
              <h4 className="text-xl font-semibold mb-4">
                {t.leftContent.contactInfo.title}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-praxis-blue-200 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href={`mailto:${t.leftContent.contactInfo.email}`}
                    className="text-praxis-blue-100 hover:text-white transition-colors"
                  >
                    {t.leftContent.contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-praxis-blue-200 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${t.leftContent.contactInfo.phone}`}
                    className="text-praxis-blue-100 hover:text-white transition-colors"
                  >
                    {t.leftContent.contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-praxis-blue-200 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-praxis-blue-100 text-sm">
                    {t.leftContent.contactInfo.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Free Trial CTA */}
          <div className="bg-praxis-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-praxis-accent rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-praxis-dark-blue mb-4">
                {language === 'no'
                  ? 'Start Din Gratis Prøveperiode'
                  : 'Start Your Free Trial'}
              </h3>
              <p className="text-praxis-dark-blue-600 mb-6">
                {language === 'no'
                  ? 'Installer Praxis Navigator direkte fra Microsoft Azure Marketplace og få umiddelbar tilgang til alle funksjoner for team ledelse.'
                  : 'Install Praxis Navigator directly from Microsoft Azure Marketplace and get instant access to all team management features.'}
              </p>
            </div>

            {/* Trial Features */}
            <div className="mb-8">
              <h4 className="text-lg font-heading font-bold text-praxis-dark-blue mb-4">
                {language === 'no'
                  ? 'Inkludert i Prøveperioden:'
                  : 'Included in Your Trial:'}
              </h4>
              <ul className="space-y-3">
                {[
                  language === 'no'
                    ? 'Komplett team sikkerhetskultur vurdering'
                    : 'Complete team security culture assessment',
                  language === 'no'
                    ? 'Team ytelse dashbord'
                    : 'Team performance dashboard',
                  language === 'no'
                    ? 'Benchmarking rapporter'
                    : 'Benchmarking reports',
                  language === 'no'
                    ? 'Microsoft Graph integrasjon'
                    : 'Microsoft Graph integration',
                  language === 'no' ? 'Ekspert support' : 'Expert support',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 bg-praxis-accent rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-praxis-dark-blue-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href="https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full flex items-center justify-center"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.055 3.055A1 1 0 014 3h16a1 1 0 01.945.55l.78 2.337A1 1 0 0121 7H3a1 1 0 01-.945-1.113l.78-2.337A1 1 0 013.055 3.055zM3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                </svg>
                {language === 'no'
                  ? 'Installer fra Azure Marketplace'
                  : 'Install from Azure Marketplace'}
              </a>

              <button className="btn btn-outline w-full">
                {language === 'no' ? 'Se Produkt Demo' : 'Watch Product Demo'}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-praxis-blue-100">
              <div className="flex items-center justify-center space-x-4 text-sm text-praxis-dark-blue-600">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === 'no' ? 'Ingen kredittkort' : 'No credit card'}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === 'no' ? '30 dager gratis' : '30 days free'}
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {language === 'no'
                    ? 'Øyeblikkelig tilgang'
                    : 'Instant access'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
