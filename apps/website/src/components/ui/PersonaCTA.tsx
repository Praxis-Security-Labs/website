// Enhanced CTA Component for Persona-Specific Targeting
import React from 'react';

interface PersonaCTAProps {
  segment: 'sat-teams' | 'security-leaders' | 'executives' | 'managers';
  language?: 'en' | 'no';
  variant?: 'primary' | 'secondary' | 'comparison' | 'hero';
  size?: 'sm' | 'md' | 'lg' | 'large';
  className?: string;
  onClick?: () => void;
  customHeadline?: string;
}

export const PersonaCTA: React.FC<PersonaCTAProps> = ({
  segment,
  language = 'en',
  variant = 'primary',
  size = 'lg',
  className = '',
  onClick,
  customHeadline,
}) => {
  // Persona-specific CTA configurations based on PRD requirements
  const ctaConfig = {
    'sat-teams': {
      en: {
        primary: {
          text: 'Start Free Trial',
          href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator',
        },
        secondary: {
          text: 'View Training ROI Guide',
          href: '/resources/training-roi',
        },
      },
      no: {
        primary: {
          text: 'Start Gratis Prøveperiode',
          href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator',
        },
        secondary: {
          text: 'Se Opplæring ROI Guide',
          href: '/no/resources/training-roi',
        },
      },
    },
    'security-leaders': {
      en: {
        primary: {
          text: 'Start Free Trial',
          href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator',
        },
        secondary: {
          text: 'View ROI Calculator',
          href: '/resources/roi-calculator',
        },
      },
      no: {
        primary: {
          text: 'Start Gratis Prøveperiode',
          href: 'https://azuremarketplace.microsoft.com/en-us/marketplace/apps/praxis-security.praxis-navigator',
        },
        secondary: {
          text: 'Se ROI Kalkulator',
          href: '/no/resources/roi-calculator',
        },
      },
    },
    executives: {
      en: {
        primary: {
          text: 'Schedule Executive Consultation',
          href: '/contact?segment=executives',
        },
        secondary: {
          text: 'Download Executive Brief',
          href: '/resources/executive-brief',
        },
      },
      no: {
        primary: {
          text: 'Planlegg Lederskap Konsultasjon',
          href: '/no/contact?segment=executives',
        },
        secondary: {
          text: 'Last ned Lederskap Brief',
          href: '/no/resources/executive-brief',
        },
      },
    },
    managers: {
      en: {
        primary: {
          text: 'Download Benchmark Report',
          href: '/resources/benchmark-report',
        },
        secondary: {
          text: 'Request Manager Demo',
          href: '/contact?segment=managers',
        },
      },
      no: {
        primary: {
          text: 'Last ned Benchmark Rapport',
          href: '/no/resources/benchmark-report',
        },
        secondary: {
          text: 'Be om Manager Demo',
          href: '/no/contact?segment=managers',
        },
      },
    },
  };

  // Get config, fallback to primary if variant doesn't exist
  const variantToUse = ['comparison', 'hero'].includes(variant)
    ? 'primary'
    : variant;
  const config =
    ctaConfig[segment][language][variantToUse as 'primary' | 'secondary'];

  // Use custom text if provided for special variants
  const displayText = customHeadline || config.text;
  const displayHref = config.href;
  const isExternalLink = displayHref.startsWith('http');

  // Analytics tracking for persona-specific CTAs
  const handleClick = () => {
    // Track CTA click with segment and variant information
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cta_click', {
        event_category: 'conversion',
        event_label: `${segment}-${variant}`,
        segment: segment,
        language: language,
        cta_text: displayText,
        destination: displayHref,
      });
    }

    if (onClick) {
      onClick();
    }
  };

  // Base CSS classes for different variants and sizes
  const baseClasses =
    'inline-flex items-center justify-center font-heading font-bold transition-all duration-200 group';

  const variantClasses = {
    primary: 'btn-accent hover:bg-praxis-accent-dark text-praxis-white',
    secondary:
      'btn-secondary hover:bg-praxis-blue-100 text-praxis-dark-blue border-2 border-praxis-blue-300',
    comparison: 'btn-accent hover:bg-praxis-accent-dark text-praxis-white',
    hero: 'btn-accent hover:bg-praxis-accent-dark text-praxis-white',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    large: 'px-8 py-4 text-lg rounded-xl',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <a
      href={displayHref}
      className={combinedClasses}
      onClick={handleClick}
      data-segment={segment}
      data-variant={variant}
      data-language={language}
      {...(isExternalLink && {
        target: '_blank',
        rel: 'noopener noreferrer',
      })}
    >
      {displayText}
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
  );
};

// Persona-specific value propositions and messaging
export const getPersonaMessaging = (
  segment: PersonaCTAProps['segment'],
  language: 'en' | 'no' = 'en'
) => {
  const messaging = {
    'sat-teams': {
      en: {
        headline: 'Prove Your Training Actually Works',
        subheadline:
          'Transform security awareness training from activity-based to outcome-based with behavioral measurement',
        painPoints: [
          'Can show training completion but not behavioral change',
          'Need business-friendly metrics for C-suite presentations',
          'Pressure to prove security training investment returns',
          'Want data-driven insights to optimize programs',
        ],
        benefits: [
          'Measure behavioral change over time',
          'Generate executive dashboards',
          'Optimize training content based on data',
          'Demonstrate measurable ROI to leadership',
        ],
        socialProof:
          'Trusted by SAT professionals managing 500-10,000+ employees',
      },
      no: {
        headline: 'Bevis at Din Opplæring Faktisk Virker',
        subheadline:
          'Transformer sikkerhetsbevissthet opplæring fra aktivitetsbasert til resultatbasert med atferdsmåling',
        painPoints: [
          'Kan vise opplæring fullføring men ikke atferdsendring',
          'Trenger forretningsvennlige metrics for lederskap presentasjoner',
          'Press for å bevise sikkerhetstrening investering avkastning',
          'Ønsker datadrevne innsikter for å optimalisere programmer',
        ],
        benefits: [
          'Mål atferdsendring over tid',
          'Generer lederskap dashboards',
          'Optimaliser opplæringsinnhold basert på data',
          'Demonstrer målbar ROI til ledelse',
        ],
        socialProof:
          'Stolt på av SAT profesjonelle som administrerer 500-10,000+ ansatte',
      },
    },
    'security-leaders': {
      en: {
        headline: 'Prove Your Security Training ROI',
        subheadline:
          'Transform security awareness from cost center to measurable business value',
        painPoints: [
          'Inability to measure security training effectiveness',
          'Lack of data for board and compliance reporting',
          'Pressure to prove security investment ROI',
          'Resource constraints and budget justification',
        ],
        benefits: [
          'Quantify security behavior change over time',
          'Generate executive-ready compliance reports',
          'Integrate with existing security infrastructure',
          'Demonstrate training program effectiveness',
        ],
        socialProof: 'Trusted by CISOs at 500-10,000+ employee organizations',
      },
      no: {
        headline: 'Bevis Din Sikkerhetsopplæring ROI',
        subheadline:
          'Transformer sikkerhetsbevissthet fra kostnadssenter til målbar forretningsverdi',
        painPoints: [
          'Manglende evne til å måle sikkerhetsopplæring effektivitet',
          'Mangel på data for styre- og compliance-rapportering',
          'Press for å bevise sikkerhetsinvestering ROI',
          'Ressursbegrensninger og budsjettjustifikasjon',
        ],
        benefits: [
          'Kvantifiser sikkerhetsatferdsendring over tid',
          'Generer lederskap-klare compliance rapporter',
          'Integrer med eksisterende sikkerhetsinfrastruktur',
          'Demonstrer opplæringsprogram effektivitet',
        ],
        socialProof: 'Stolt på av CISOs ved 500-10,000+ ansatte organisasjoner',
      },
    },
    executives: {
      en: {
        headline: "Quantify and Reduce Your Organization's Human Security Risk",
        subheadline:
          'Board-ready security governance with clear business impact metrics',
        painPoints: [
          'Need evidence for compliance audits and regulatory requirements',
          'Require security metrics in business language',
          'Must demonstrate ROI for security culture investments',
          'Pressure to show measurable risk reduction',
        ],
        benefits: [
          'Board-ready compliance and risk reports',
          'Regulatory evidence for audits',
          'Clear business impact measurement',
          'Strategic security culture insights',
        ],
        socialProof:
          'Trusted by executives at 2,000+ employee regulated organizations',
      },
      no: {
        headline:
          'Kvantifiser og Reduser Din Organisasjons Menneskelige Sikkerhetsrisiko',
        subheadline:
          'Styreklar sikkerhetsstyring med klare forretningseffekt metrics',
        painPoints: [
          'Trenger bevis for compliance revisjoner og regulatoriske krav',
          'Krever sikkerhetsmetrikker i forretningsspråk',
          'Må demonstrere ROI for sikkerhetskultur investeringer',
          'Press for å vise målbar risiko reduksjon',
        ],
        benefits: [
          'Styreklar compliance og risiko rapporter',
          'Regulatorisk bevis for revisjoner',
          'Klar forretningseffekt måling',
          'Strategisk sikkerhetskultur innsikter',
        ],
        socialProof:
          'Stolt på av ledere ved 2,000+ ansatte regulerte organisasjoner',
      },
    },
    managers: {
      en: {
        headline:
          "Improve Your Team's Security Behaviors with Data-Driven Insights",
        subheadline:
          'Benchmark your team against industry standards and optimize security culture',
        painPoints: [
          'Difficulty measuring team security awareness progress',
          'Need data to guide security culture initiatives',
          'Want to benchmark team against industry standards',
          'Pressure to show measurable security improvements',
        ],
        benefits: [
          'Team security behavior benchmarking',
          'Data-driven coaching recommendations',
          'Industry comparison metrics',
          'Progress tracking and reporting',
        ],
        socialProof: 'Used by department managers across 500+ organizations',
      },
      no: {
        headline:
          'Forbedre Ditt Teams Sikkerhetsatferd med Datadrevne Innsikter',
        subheadline:
          'Benchmark ditt team mot industristandarder og optimaliser sikkerhetskultur',
        painPoints: [
          'Vanskelighet med å måle team sikkerhetsbevissthet fremgang',
          'Trenger data for å guide sikkerhetskultur initiativer',
          'Ønsker å benchmarke team mot industristandarder',
          'Press for å vise målbare sikkerhetsforbedringer',
        ],
        benefits: [
          'Team sikkerhetsatferd benchmarking',
          'Datadrevne coaching anbefalinger',
          'Industri sammenligning metrics',
          'Fremdrift sporing og rapportering',
        ],
        socialProof: 'Brukt av avdelingsledere på tvers av 500+ organisasjoner',
      },
    },
  };

  return messaging[segment][language];
};
