import React from 'react';
import { ProgressiveDisclosure } from '../ui/ProgressiveDisclosure';

interface TrialExplainerFlowProps {
  language?: 'en' | 'no';
}

export const TrialExplainerFlow: React.FC<TrialExplainerFlowProps> = ({
  language = 'en',
}) => {
  const content = {
    en: {
      badge: 'Free Trial',
      headline: 'Start Your Praxis Navigator Trial in 3 Simple Steps',
      subheadline:
        'Get security culture analytics for your Microsoft 365 environment in under 5 minutes',
      description:
        'Our streamlined trial process gets you from signup to insights faster than any competitor. No credit card required, no complex setup.',
      ctaPrimary: 'Start Free Trial Now',
      ctaSecondary: 'Talk to Our Team',
      steps: [
        {
          id: 'azure-signup',
          title: 'Sign Up via Azure Marketplace',
          content: (
            <div className="space-y-4">
              <p className="text-praxis-dark-blue">
                Click &ldquo;Start Free Trial&rdquo; to be redirected to Azure
                Marketplace where you&rsquo;ll complete the signup process using
                your existing Microsoft credentials.
              </p>
              <div className="bg-praxis-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-praxis-dark-blue mb-2">
                  What you&rsquo;ll need:
                </h4>
                <ul className="space-y-2 text-sm text-praxis-dark-blue">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Microsoft 365 Administrator access
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Azure subscription (free trial available)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    5 minutes for setup completion
                  </li>
                </ul>
              </div>
              <div className="text-sm text-praxis-blue-600">
                ⏱️ <strong>Time required:</strong> 2-3 minutes
              </div>
            </div>
          ),
        },
        {
          id: 'permissions-grant',
          title: 'Grant Microsoft Graph Permissions',
          content: (
            <div className="space-y-4">
              <p className="text-praxis-dark-blue">
                Praxis Navigator requires read-only access to specific Microsoft
                Graph APIs to analyze security behaviors without accessing
                personal content.
              </p>
              <div className="bg-praxis-gold bg-opacity-10 border border-praxis-gold rounded-lg p-4">
                <h4 className="font-semibold text-praxis-dark-blue mb-2">
                  🔒 Privacy & Security:
                </h4>
                <ul className="space-y-2 text-sm text-praxis-dark-blue">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Read-only access to security logs and metadata
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    No access to emails, documents, or personal data
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    SOC 2 Type II and GDPR compliant data handling
                  </li>
                </ul>
              </div>
              <div className="text-sm text-praxis-blue-600">
                ⏱️ <strong>Time required:</strong> 1-2 minutes
              </div>
            </div>
          ),
        },
        {
          id: 'first-insights',
          title: 'Access Your Security Culture Dashboard',
          content: (
            <div className="space-y-4">
              <p className="text-praxis-dark-blue">
                Within minutes of setup completion, your personalized security
                culture dashboard will be ready with initial insights and
                recommendations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-praxis-accent bg-opacity-10 border border-praxis-accent rounded-lg p-4">
                  <h4 className="font-semibold text-praxis-dark-blue mb-2">
                    📊 Immediate Insights
                  </h4>
                  <ul className="space-y-1 text-sm text-praxis-dark-blue">
                    <li>• Security behavior baseline</li>
                    <li>• Risk pattern identification</li>
                    <li>• Department comparisons</li>
                    <li>• Trending analysis</li>
                  </ul>
                </div>
                <div className="bg-praxis-blue bg-opacity-10 border border-praxis-blue rounded-lg p-4">
                  <h4 className="font-semibold text-praxis-dark-blue mb-2">
                    🎯 Next Steps
                  </h4>
                  <ul className="space-y-1 text-sm text-praxis-dark-blue">
                    <li>• Custom report setup</li>
                    <li>• Alert configuration</li>
                    <li>• Team member invitations</li>
                    <li>• Integration planning</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-praxis-blue-600">
                ⏱️ <strong>Data processing:</strong> 5-15 minutes after setup
              </div>
            </div>
          ),
        },
      ],
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'Do I need a credit card to start the trial?',
            answer:
              'No credit card required. The trial is completely free for 30 days with full access to all features.',
          },
          {
            question: 'What happens to my data during the trial?',
            answer:
              "Your data is processed according to our SOC 2 Type II and GDPR compliance standards. All data remains in your geographic region and is automatically deleted if you don't convert to a paid plan.",
          },
          {
            question: 'Can I cancel anytime?',
            answer:
              'Yes, you can cancel your trial at any time through the Azure Marketplace portal or by contacting our support team.',
          },
          {
            question: 'What support is available during the trial?',
            answer:
              'You have access to our full support team via email, chat, and phone during business hours, plus comprehensive documentation and video tutorials.',
          },
        ],
      },
      testimonial: {
        quote:
          "The trial setup was incredibly smooth. We had insights within 10 minutes and could immediately see security behaviors we'd never been able to measure before.",
        author: 'Sarah Chen',
        title: 'CISO, TechCorp Financial',
        company: '2,500 employees',
      },
    },
    no: {
      badge: 'Gratis Prøveperiode',
      headline: 'Start Din Praxis Navigator Prøveperiode i 3 Enkle Trinn',
      subheadline:
        'Få sikkerhetskultur analytikk for ditt Microsoft 365 miljø på under 5 minutter',
      description:
        'Vår strømlinjeformede prøveperiode prosess får deg fra registrering til innsikter raskere enn noen konkurrent. Ingen kredittkort påkrevd, ingen kompleks oppsett.',
      ctaPrimary: 'Start Gratis Prøveperiode Nå',
      ctaSecondary: 'Snakk med Vårt Team',
      steps: [
        {
          id: 'azure-signup',
          title: 'Registrer deg via Azure Marketplace',
          content: (
            <div className="space-y-4">
              <p className="text-praxis-dark-blue">
                Klikk &ldquo;Start Gratis Prøveperiode&rdquo; for å bli
                omdirigert til Azure Marketplace hvor du fullfører
                registreringsprosessen ved hjelp av dine eksisterende
                Microsoft-legitimasjoner.
              </p>
              <div className="bg-praxis-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-praxis-dark-blue mb-2">
                  Hva du trenger:
                </h4>
                <ul className="space-y-2 text-sm text-praxis-dark-blue">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Microsoft 365 Administrator tilgang
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Azure abonnement (gratis prøveperiode tilgjengelig)
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    5 minutter for fullføring av oppsett
                  </li>
                </ul>
              </div>
              <div className="text-sm text-praxis-blue-600">
                ⏱️ <strong>Tid påkrevd:</strong> 2-3 minutter
              </div>
            </div>
          ),
        },
        {
          id: 'permissions-grant',
          title: 'Gi Microsoft Graph Tillatelser',
          content: (
            <div className="space-y-4">
              <p className="text-praxis-dark-blue">
                Praxis Navigator krever skrivebeskyttet tilgang til spesifikke
                Microsoft Graph APIer for å analysere sikkerhetsatferd uten å få
                tilgang til personlig innhold.
              </p>
              <div className="bg-praxis-gold bg-opacity-10 border border-praxis-gold rounded-lg p-4">
                <h4 className="font-semibold text-praxis-dark-blue mb-2">
                  🔒 Personvern & Sikkerhet:
                </h4>
                <ul className="space-y-2 text-sm text-praxis-dark-blue">
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Skrivebeskyttet tilgang til sikkerhetslogger og metadata
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    Ingen tilgang til e-poster, dokumenter, eller personlige
                    data
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-4 h-4 text-praxis-accent mt-0.5 mr-2 flex-shrink-0"
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
                    SOC 2 Type II og GDPR kompatibel datahåndtering
                  </li>
                </ul>
              </div>
              <div className="text-sm text-praxis-blue-600">
                ⏱️ <strong>Tid påkrevd:</strong> 1-2 minutter
              </div>
            </div>
          ),
        },
        {
          id: 'first-insights',
          title: 'Få Tilgang til Ditt Sikkerhetskultur Dashboard',
          content: (
            <div className="space-y-4">
              <p className="text-praxis-dark-blue">
                Innen minutter etter fullført oppsett vil ditt personaliserte
                sikkerhetskultur dashboard være klart med innledende innsikter
                og anbefalinger.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-praxis-accent bg-opacity-10 border border-praxis-accent rounded-lg p-4">
                  <h4 className="font-semibold text-praxis-dark-blue mb-2">
                    📊 Umiddelbare Innsikter
                  </h4>
                  <ul className="space-y-1 text-sm text-praxis-dark-blue">
                    <li>• Sikkerhetsatferd baseline</li>
                    <li>• Risikomønster identifikasjon</li>
                    <li>• Avdelingssammenligninger</li>
                    <li>• Trendanalyse</li>
                  </ul>
                </div>
                <div className="bg-praxis-blue bg-opacity-10 border border-praxis-blue rounded-lg p-4">
                  <h4 className="font-semibold text-praxis-dark-blue mb-2">
                    🎯 Neste Steg
                  </h4>
                  <ul className="space-y-1 text-sm text-praxis-dark-blue">
                    <li>• Tilpasset rapport oppsett</li>
                    <li>• Varsling konfigurasjon</li>
                    <li>• Teammedlem invitasjoner</li>
                    <li>• Integrasjon planlegging</li>
                  </ul>
                </div>
              </div>
              <div className="text-sm text-praxis-blue-600">
                ⏱️ <strong>Data prosessering:</strong> 5-15 minutter etter
                oppsett
              </div>
            </div>
          ),
        },
      ],
      faq: {
        title: 'Ofte Stilte Spørsmål',
        items: [
          {
            question: 'Trenger jeg et kredittkort for å starte prøveperioden?',
            answer:
              'Ingen kredittkort påkrevd. Prøveperioden er helt gratis i 30 dager med full tilgang til alle funksjoner.',
          },
          {
            question: 'Hva skjer med mine data under prøveperioden?',
            answer:
              'Dine data behandles i henhold til våre SOC 2 Type II og GDPR kompatibilitetsstandarder. All data forblir i din geografiske region og slettes automatisk hvis du ikke konverterer til en betalt plan.',
          },
          {
            question: 'Kan jeg avbryte når som helst?',
            answer:
              'Ja, du kan avbryte prøveperioden når som helst gjennom Azure Marketplace-portalen eller ved å kontakte vårt supportteam.',
          },
          {
            question: 'Hvilken support er tilgjengelig under prøveperioden?',
            answer:
              'Du har tilgang til vårt fulle supportteam via e-post, chat og telefon i kontortiden, pluss omfattende dokumentasjon og videoveiledninger.',
          },
        ],
      },
      testimonial: {
        quote:
          'Prøveperiode oppsettet var utrolig smidig. Vi hadde innsikter innen 10 minutter og kunne umiddelbart se sikkerhetsatferd vi aldri hadde vært i stand til å måle før.',
        author: 'Sarah Chen',
        title: 'CISO, TechCorp Financial',
        company: '2,500 ansatte',
      },
    },
  };

  const t = content[language];

  const handleTrialStart = () => {
    // Track trial start analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'trial_start_click', {
        source: 'trial_explainer',
        language: language,
        page_location: window.location.href,
      });
    }

    // Redirect to Azure Marketplace with UTM tracking
    const azureMarketplaceUrl = `https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator?utm_source=website&utm_medium=trial_explainer&utm_campaign=trial_signup&utm_content=${language}`;
    window.open(azureMarketplaceUrl, '_blank');
  };

  const handleSupportRequest = () => {
    // Track support request analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'support_request_click', {
        source: 'trial_explainer',
        language: language,
        page_location: window.location.href,
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-praxis-blue-50 to-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-praxis-accent bg-opacity-20 border border-praxis-accent rounded-full mb-6">
            <span className="text-praxis-accent text-sm font-heading font-bold uppercase tracking-brand-wide">
              {t.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-praxis-dark-blue mb-6">
            {t.headline}
          </h1>

          <p className="text-xl md:text-2xl text-praxis-blue-600 font-heading mb-6 max-w-4xl mx-auto">
            {t.subheadline}
          </p>

          <p className="text-lg text-praxis-blue-700 mb-8 max-w-3xl mx-auto">
            {t.description}
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={handleTrialStart}
              className="btn-accent btn-lg inline-flex items-center justify-center group"
            >
              {t.ctaPrimary}
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
            </button>

            <button
              onClick={handleSupportRequest}
              className="btn-secondary btn-lg"
            >
              {t.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Progressive Disclosure Steps */}
        <div className="mb-16">
          <ProgressiveDisclosure
            steps={t.steps}
            allowMultiple={true}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-heading font-bold text-praxis-dark-blue text-center mb-12">
            {t.faq.title}
          </h2>

          <div className="max-w-4xl mx-auto">
            <ProgressiveDisclosure
              steps={t.faq.items.map((item, index) => ({
                id: `faq-${index}`,
                title: item.question,
                content: (
                  <p className="text-praxis-dark-blue leading-relaxed">
                    {item.answer}
                  </p>
                ),
              }))}
              allowMultiple={true}
            />
          </div>
        </div>

        {/* Social Proof / Testimonial */}
        <div className="bg-praxis-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <div className="text-center">
            <svg
              className="w-12 h-12 text-praxis-accent mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
            </svg>

            <blockquote className="text-xl md:text-2xl text-praxis-dark-blue font-medium mb-6 italic">
              &ldquo;{t.testimonial.quote}&rdquo;
            </blockquote>

            <div className="border-t border-praxis-blue-200 pt-6">
              <div className="font-semibold text-praxis-dark-blue">
                {t.testimonial.author}
              </div>
              <div className="text-praxis-blue-600">{t.testimonial.title}</div>
              <div className="text-sm text-praxis-blue-500">
                {t.testimonial.company}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-praxis-dark-blue rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              {language === 'no'
                ? 'Klar til å starte?'
                : 'Ready to get started?'}
            </h2>
            <p className="text-praxis-blue-100 mb-6 max-w-2xl mx-auto">
              {language === 'no'
                ? 'Bli med tusenvis av organisasjoner som allerede bruker Praxis Navigator for å måle og forbedre sin sikkerhetskultur.'
                : 'Join thousands of organizations already using Praxis Navigator to measure and improve their security culture.'}
            </p>
            <button
              onClick={handleTrialStart}
              className="btn-accent btn-lg inline-flex items-center justify-center group"
            >
              {t.ctaPrimary}
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
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialExplainerFlow;
