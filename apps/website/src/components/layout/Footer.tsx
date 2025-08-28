import React from 'react';
import { ui } from '../../i18n';

interface FooterProps {
  currentLanguage?: string;
}

export const Footer: React.FC<FooterProps> = ({ currentLanguage = 'en' }) => {
  const currentYear = new Date().getFullYear();
  const t = ui[currentLanguage as keyof typeof ui] || ui.en;

  // Helper function to create correct URLs
  const createUrl = (path: string) => {
    if (currentLanguage === 'no') {
      return `/no${path}`;
    }
    return path;
  };

  const footerNavigation = {
    product: {
      title: t['nav.product'],
      links: [
        {
          name: t['footer.productOverview'],
          href: createUrl('/product'),
        },
        {
          name: t['footer.features'],
          href: createUrl('/product/features'),
        },
        {
          name: t['footer.integrations'],
          href: createUrl('/product/integrations'),
        },
        {
          name: t['footer.security'],
          href: createUrl('/product/security'),
        },
      ],
    },
    segments: {
      title: t['nav.segments'],
      links: [
        {
          name: t['footer.securityLeaders'],
          href: createUrl('/segments/security-leaders'),
        },
        {
          name: t['footer.executives'],
          href: createUrl('/segments/executives'),
        },
        {
          name: t['footer.managers'],
          href: createUrl('/segments/managers'),
        },
        {
          name: t['footer.satTeams'],
          href: createUrl('/segments/sat-teams'),
        },
      ],
    },
    resources: {
      title: t['nav.resources'],
      links: [
        {
          name: t['footer.blog'],
          href: createUrl('/resources/blog'),
        },
        {
          name: t['footer.whitepapers'],
          href: createUrl('/resources/whitepapers'),
        },
        {
          name: t['footer.webinars'],
          href: createUrl('/resources/webinars'),
        },
        {
          name: t['footer.caseStudies'],
          href: createUrl('/resources/case-studies'),
        },
      ],
    },
    support: {
      title: t['footer.support'],
      links: [
        {
          name: t['nav.contact'],
          href: createUrl('/contact'),
        },
        {
          name: t['footer.bookDemo'],
          href: createUrl('/contact/demo'),
        },
        {
          name: t['footer.customerSupport'],
          href: createUrl('/support'),
        },
        {
          name: t['footer.documentation'],
          href: createUrl('/support/docs'),
        },
      ],
    },
  };

  const legalLinks = [
    {
      name: t['footer.privacyPolicy'],
      href: createUrl('/legal/privacy-policy'),
    },
    {
      name: t['footer.termsOfService'],
      href: createUrl('/legal/terms-of-service'),
    },
    {
      name: t['footer.cookiePolicy'],
      href: createUrl('/legal/cookie-policy'),
    },
    {
      name: t['footer.compliance'],
      href: createUrl('/compliance'),
    },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/praxis-navigator',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/praxisnavigator',
      icon: (
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-praxis-brown" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Information */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="mb-6">
                <a
                  href={createUrl('/')}
                  className="focus-ring rounded-lg p-1"
                  aria-label={
                    currentLanguage === 'no'
                      ? 'Hjem til Praxis Navigator'
                      : 'Praxis Navigator Home'
                  }
                >
                  <img
                    src="/images/logos/praxis-navigator-logo.svg"
                    alt="Praxis Navigator"
                    className="h-12 md:h-16"
                  />
                </a>
              </div>

              {/* Company Description */}
              <div className="mb-6">
                <p className="body-base text-praxis-tan leading-relaxed">
                  {currentLanguage === 'no'
                    ? 'Praxis Navigator hjelper organisasjoner med å måle og forbedre sikkerhetskultur gjennom kontinuerlig atferdsovervåking og personalisert trening.'
                    : 'Praxis Navigator helps organizations measure and improve security culture through continuous behavioral monitoring and personalized training.'}
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-2 text-praxis-tan">
                <p className="body-small">
                  <span className="font-heading uppercase tracking-brand-wide text-praxis-gold">
                    {currentLanguage === 'no' ? 'E-post:' : 'Email:'}
                  </span>{' '}
                  <a
                    href="mailto:contact@praxisnavigator.io"
                    className="hover:text-praxis-gold transition-brand focus-ring rounded"
                  >
                    contact@praxisnavigator.io
                  </a>
                </p>
                <p className="body-small">
                  <span className="font-heading uppercase tracking-brand-wide text-praxis-gold">
                    {currentLanguage === 'no' ? 'Grunnlegger:' : 'Founder:'}
                  </span>{' '}
                  <a
                    href={createUrl('/about')}
                    className="hover:text-praxis-gold transition-brand focus-ring rounded"
                  >
                    Kai Roer
                  </a>
                </p>
              </div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerNavigation).map(([key, section]) => (
              <div key={key}>
                <h3 className="h6 text-praxis-gold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="body-small text-praxis-tan hover:text-praxis-gold transition-brand focus-ring rounded"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-praxis-brown-600 py-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            {/* Legal Links */}
            <div className="mb-6 lg:mb-0">
              <nav
                className="flex flex-wrap gap-6"
                aria-label={
                  currentLanguage === 'no' ? 'Juridiske lenker' : 'Legal links'
                }
              >
                {legalLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="body-small text-praxis-tan hover:text-praxis-gold transition-brand focus-ring rounded"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="body-small text-praxis-tan">
                {currentLanguage === 'no' ? 'Følg oss:' : 'Follow us:'}
              </span>
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-praxis-tan hover:text-praxis-gold transition-brand focus-ring rounded p-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.name} ${currentLanguage === 'no' ? '(åpnes i ny fane)' : '(opens in new tab)'}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-praxis-brown-600">
            <div className="lg:flex lg:items-center lg:justify-between">
              <p className="body-small text-praxis-tan mb-4 lg:mb-0">
                © {currentYear} Praxis Navigator.{' '}
                {currentLanguage === 'no'
                  ? 'Alle rettigheter reservert.'
                  : 'All rights reserved.'}
              </p>

              {/* Additional Info */}
              <div className="flex flex-wrap gap-4 text-praxis-tan body-small">
                <span>
                  {currentLanguage === 'no'
                    ? 'Laget med ♥ for bedre sikkerhet'
                    : 'Built with ♥ for better security'}
                </span>
                <span className="hidden lg:inline">•</span>
                <a
                  href={createUrl('/about/kai-roer')}
                  className="hover:text-praxis-gold transition-brand focus-ring rounded"
                >
                  {currentLanguage === 'no' ? 'Av Kai Roer' : 'By Kai Roer'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
