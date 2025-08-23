import React from 'react';

interface SecurityTestimonialsProps {
  language?: 'en' | 'no';
  className?: string;
}

export const SecurityTestimonials: React.FC<SecurityTestimonialsProps> = ({
  language = 'en',
  className = '',
}) => {
  const content = {
    en: {
      testimonials: [
        {
          id: 'ciso-tech-company',
          quote:
            "Praxis Navigator's read-only approach and Microsoft 365 native integration gave us the confidence to approve deployment across our entire organization. Their transparent security architecture documentation made our security review process straightforward.",
          author: 'Sarah Chen',
          title: 'Chief Information Security Officer',
          company: 'TechForward Inc',
          industry: 'Technology',
          companySize: '2,500+ employees',
          logo: '🏢',
          securityFocus: 'Zero-trust architecture compliance',
        },
        {
          id: 'compliance-director-finance',
          quote:
            'The SOC 2 Type II certification and detailed compliance documentation allowed us to fast-track our security approval. We were particularly impressed with their data residency controls and audit trail capabilities.',
          author: 'Michael Rodriguez',
          title: 'Director of Compliance & Risk',
          company: 'FinanceSecure Corp',
          industry: 'Financial Services',
          companySize: '5,000+ employees',
          logo: '🏦',
          securityFocus: 'Financial services compliance',
        },
        {
          id: 'security-manager-healthcare',
          quote:
            "As a healthcare organization, HIPAA compliance is non-negotiable. Praxis Navigator's metadata-only approach and comprehensive encryption gave our legal team the assurance they needed for approval.",
          author: 'Dr. Jennifer Walsh',
          title: 'Security Manager',
          company: 'HealthTech Systems',
          industry: 'Healthcare',
          companySize: '1,200+ employees',
          logo: '🏥',
          securityFocus: 'HIPAA compliance & data privacy',
        },
      ],
      trustMetrics: {
        title: 'Security Metrics That Matter',
        metrics: [
          {
            value: '99.9%',
            label: 'Uptime SLA',
            description: 'Enterprise-grade availability',
          },
          {
            value: '< 15min',
            label: 'Incident Response',
            description: 'Security incident response time',
          },
          {
            value: '100%',
            label: 'Data Encryption',
            description: 'End-to-end encryption coverage',
          },
          {
            value: 'Zero',
            label: 'Breaches',
            description: 'Security incidents to date',
          },
        ],
      },
    },
    no: {
      testimonials: [
        {
          id: 'ciso-tech-company',
          quote:
            'Praxis Navigator sin skrivebeskyttede tilnærming og Microsoft 365 native integrasjon ga oss tilliten til å godkjenne distribusjon i hele organisasjonen vår. Deres transparente sikkerhetsarkitektur dokumentasjon gjorde vår sikkerhetsgjennomgang enkel.',
          author: 'Sarah Chen',
          title: 'Chief Information Security Officer',
          company: 'TechForward Inc',
          industry: 'Teknologi',
          companySize: '2,500+ ansatte',
          logo: '🏢',
          securityFocus: 'Zero-trust arkitektur compliance',
        },
        {
          id: 'compliance-director-finance',
          quote:
            'SOC 2 Type II sertifiseringen og detaljert compliance dokumentasjon tillot oss å akselerere vår sikkerhetsgodkjenning. Vi var spesielt imponert over deres data residens kontroller og audit trail muligheter.',
          author: 'Michael Rodriguez',
          title: 'Direktør for Compliance & Risiko',
          company: 'FinanceSecure Corp',
          industry: 'Finansielle Tjenester',
          companySize: '5,000+ ansatte',
          logo: '🏦',
          securityFocus: 'Finansielle tjenester compliance',
        },
        {
          id: 'security-manager-healthcare',
          quote:
            'Som en helseorganisasjon er HIPAA compliance ikke-omsettelig. Praxis Navigator sin metadata-bare tilnærming og omfattende kryptering ga vårt juridiske team forsikringen de trengte for godkjenning.',
          author: 'Dr. Jennifer Walsh',
          title: 'Sikkerhetssjef',
          company: 'HealthTech Systems',
          industry: 'Helsevesen',
          companySize: '1,200+ ansatte',
          logo: '🏥',
          securityFocus: 'HIPAA compliance & data personvern',
        },
      ],
      trustMetrics: {
        title: 'Sikkerhetsmålinger Som Betyr Noe',
        metrics: [
          {
            value: '99.9%',
            label: 'Oppetid SLA',
            description: 'Enterprise-grade tilgjengelighet',
          },
          {
            value: '< 15min',
            label: 'Hendelse Respons',
            description: 'Sikkerhetshendelse responstid',
          },
          {
            value: '100%',
            label: 'Data Kryptering',
            description: 'Ende-til-ende kryptering dekning',
          },
          {
            value: 'Null',
            label: 'Brudd',
            description: 'Sikkerhetshendelser til dato',
          },
        ],
      },
    },
  };

  const t = content[language];

  // Track testimonial interactions
  const handleTestimonialClick = (testimonialId: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'security_testimonial_click', {
        testimonial_id: testimonialId,
        language: language,
        page_location: window.location.href,
      });
    }
  };

  return (
    <div className={`space-y-12 ${className}`}>
      {/* Security Testimonials */}
      <div className="grid lg:grid-cols-3 gap-8">
        {t.testimonials.map(testimonial => (
          <div
            key={testimonial.id}
            onClick={() => handleTestimonialClick(testimonial.id)}
            onKeyDown={e =>
              e.key === 'Enter' && handleTestimonialClick(testimonial.id)
            }
            tabIndex={0}
            role="button"
            aria-label={`Read testimonial from ${testimonial.author}`}
            className="bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-200 cursor-pointer"
          >
            {/* Quote */}
            <div className="mb-6">
              <svg
                className="w-8 h-8 text-praxis-accent mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
              </svg>
              <p className="text-white leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-start space-x-4">
              <div className="text-2xl">{testimonial.logo}</div>
              <div className="flex-1">
                <div className="text-white font-semibold">
                  {testimonial.author}
                </div>
                <div className="text-praxis-blue-100 text-sm">
                  {testimonial.title}
                </div>
                <div className="text-praxis-blue-200 text-sm">
                  {testimonial.company} • {testimonial.industry}
                </div>
                <div className="text-praxis-blue-300 text-xs mt-1">
                  {testimonial.companySize}
                </div>

                {/* Security Focus Badge */}
                <div className="mt-3">
                  <span className="inline-block px-3 py-1 bg-praxis-accent bg-opacity-20 text-praxis-accent text-xs rounded-full">
                    {testimonial.securityFocus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Metrics */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-white mb-2">
            {t.trustMetrics.title}
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.trustMetrics.metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-white bg-opacity-10 rounded-xl p-6 border border-white border-opacity-20"
            >
              <div className="text-3xl font-heading font-bold text-praxis-accent mb-2">
                {metric.value}
              </div>
              <div className="text-white font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-praxis-blue-100 text-sm">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Security CTA */}
      <div className="text-center mt-12">
        <a
          href={
            language === 'no' ? '/no/customer-stories' : '/customer-stories'
          }
          className="btn-white-outline btn-md inline-flex items-center"
        >
          {language === 'en'
            ? 'See More Customer Stories'
            : 'Se Flere Kundehistorier'}
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default SecurityTestimonials;
