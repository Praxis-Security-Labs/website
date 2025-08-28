import React, { useState } from 'react';
import {
  loginWithAzureAD,
  redirectToPraxisApp,
  isMsalConfigured,
} from '../../utils/msal-auth';
import { handleLanguageSwitch } from '../../utils/language-preference';
import { useTranslations } from '../../i18n/utils';

interface HeaderProps {
  currentPath?: string;
  currentLanguage?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath = '/',
  currentLanguage = 'en',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations(currentLanguage as 'en' | 'no');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  // Navigation items using translations
  const navigationItems = [
    {
      label: t('nav.product'),
      href: currentLanguage === 'en' ? '/product' : '/no/product',
      hasDropdown: false,
    },
    {
      label: t('nav.segments'),
      href: currentLanguage === 'en' ? '/segments' : '/no/segments',
      hasDropdown: false,
    },
    {
      label: t('nav.resources'),
      href: currentLanguage === 'en' ? '/resources' : '/no/resources',
      hasDropdown: false,
    },
    {
      label: t('nav.pricing'),
      href: currentLanguage === 'en' ? '/pricing' : '/no/pricing',
      hasDropdown: false,
    },
    {
      label: t('nav.about'),
      href: currentLanguage === 'en' ? '/about' : '/no/about',
      hasDropdown: false,
    },
  ];

  const isActiveLink = (href: string) => {
    return currentPath === href || currentPath.startsWith(href + '/');
  };

  // Handle language switch with localStorage update
  const handleLanguageClick = (
    targetLanguage: 'en' | 'no',
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    const targetUrl = handleLanguageSwitch(targetLanguage, currentPath);
    // Navigate to the new URL
    window.location.href = targetUrl;
  };

  const handleLogin = async () => {
    if (isMsalConfigured()) {
      try {
        await loginWithAzureAD();
      } catch (error) {
        console.error('Login failed, falling back to direct redirect:', error);
        redirectToPraxisApp('/login');
      }
    } else {
      redirectToPraxisApp('/login');
    }
  };

  return (
    <header
      className="bg-praxis-dark-blue border-b border-praxis-dark-blue-600"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href={`/${currentLanguage === 'no' ? 'no' : ''}`}
              className="focus-ring rounded-lg p-1"
              aria-label={
                currentLanguage === 'no'
                  ? 'Hjem til Praxis Navigator'
                  : 'Praxis Navigator Home'
              }
            >
              <div className="flex items-center space-x-3">
                <img
                  src="/images/logos/praxisLogoSquare.svg"
                  alt="Praxis Navigator Icon"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
                <div className="text-praxis-white font-heading">
                  <span className="text-praxis-gold">PRAXIS</span>{' '}
                  <span className="text-praxis-white">NAVIGATOR</span>
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:block"
            role="navigation"
            aria-label={
              currentLanguage === 'no' ? 'Hovednavigasjon' : 'Main navigation'
            }
          >
            <ul className="flex items-center space-x-8">
              {navigationItems.map(item => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`
                      text-sm font-heading uppercase tracking-brand-wide transition-brand
                      px-3 py-2 rounded-lg focus-ring
                      ${
                        isActiveLink(item.href)
                          ? 'text-praxis-gold bg-praxis-dark-blue-700'
                          : 'text-praxis-white hover:text-praxis-gold hover:bg-praxis-dark-blue-700'
                      }
                    `}
                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <span
                        className="ml-1 text-praxis-sky text-xs"
                        aria-hidden="true"
                      >
                        ▼
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center border border-praxis-blue-400 rounded-lg overflow-hidden">
              <button
                onClick={e => handleLanguageClick('en', e)}
                className={`
                  px-3 py-1 text-sm font-heading uppercase transition-brand focus-ring-gold
                  ${
                    currentLanguage === 'en'
                      ? 'bg-praxis-gold text-praxis-dark-blue'
                      : 'text-praxis-white hover:bg-praxis-dark-blue-700'
                  }
                `}
                aria-label={
                  currentLanguage === 'no'
                    ? 'Switch to English'
                    : 'Bytt til norsk'
                }
              >
                EN
              </button>
              <button
                onClick={e => handleLanguageClick('no', e)}
                className={`
                  px-3 py-1 text-sm font-heading uppercase transition-brand focus-ring-gold
                  ${
                    currentLanguage === 'no'
                      ? 'bg-praxis-gold text-praxis-dark-blue'
                      : 'text-praxis-white hover:bg-praxis-dark-blue-700'
                  }
                `}
                aria-label={
                  currentLanguage === 'en'
                    ? 'Switch to Norwegian'
                    : 'Bytt til engelsk'
                }
              >
                NO
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="btn-secondary btn-sm"
              aria-label={
                currentLanguage === 'no'
                  ? 'Logg inn på Praxis Navigator'
                  : 'Log in to Praxis Navigator'
              }
            >
              {t('nav.login')}
            </button>

            {/* Trial Button */}
            <a
              href="/trial-explainer"
              className="btn-accent btn-sm"
              aria-label={
                currentLanguage === 'no'
                  ? 'Start gratis prøveperiode'
                  : 'Start free trial'
              }
            >
              {t('nav.trial')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-praxis-white hover:text-praxis-gold focus-ring p-2 rounded-lg transition-brand"
              onClick={toggleMobileMenu}
              onKeyDown={e => handleKeyDown(e, toggleMobileMenu)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={
                isMobileMenuOpen
                  ? currentLanguage === 'no'
                    ? 'Lukk meny'
                    : 'Close menu'
                  : currentLanguage === 'no'
                    ? 'Åpne meny'
                    : 'Open menu'
              }
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-brand overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-screen border-t border-praxis-dark-blue-600 pb-4'
              : 'max-h-0'
          }`}
          role="navigation"
          aria-label={
            currentLanguage === 'no' ? 'Mobilnavigasjon' : 'Mobile navigation'
          }
        >
          <div className="pt-4 space-y-2">
            {/* Mobile Navigation Links */}
            {navigationItems.map(item => (
              <a
                key={`mobile-${item.href}`}
                href={item.href}
                className={`
                  block px-3 py-3 text-base font-heading uppercase tracking-brand-normal 
                  transition-brand rounded-lg focus-ring
                  ${
                    isActiveLink(item.href)
                      ? 'text-praxis-gold bg-praxis-dark-blue-700'
                      : 'text-praxis-white hover:text-praxis-gold hover:bg-praxis-dark-blue-700'
                  }
                `}
                onClick={closeMobileMenu}
                aria-current={isActiveLink(item.href) ? 'page' : undefined}
              >
                {item.label}
                {item.hasDropdown && (
                  <span
                    className="ml-2 text-praxis-sky text-sm"
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                )}
              </a>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-praxis-dark-blue-600">
              <div className="flex space-x-2">
                <button
                  onClick={e => {
                    closeMobileMenu();
                    handleLanguageClick('en', e);
                  }}
                  className={`
                    flex-1 text-center py-2 px-4 text-sm font-heading uppercase transition-brand rounded-lg
                    ${
                      currentLanguage === 'en'
                        ? 'bg-praxis-gold text-praxis-dark-blue'
                        : 'text-praxis-white border border-praxis-blue-400 hover:bg-praxis-dark-blue-700'
                    }
                  `}
                  aria-label={
                    currentLanguage === 'no'
                      ? 'Switch to English'
                      : 'Bytt til norsk'
                  }
                >
                  EN
                </button>
                <button
                  onClick={e => {
                    closeMobileMenu();
                    handleLanguageClick('no', e);
                  }}
                  className={`
                    flex-1 text-center py-2 px-4 text-sm font-heading uppercase transition-brand rounded-lg
                    ${
                      currentLanguage === 'no'
                        ? 'bg-praxis-gold text-praxis-dark-blue'
                        : 'text-praxis-white border border-praxis-blue-400 hover:bg-praxis-dark-blue-700'
                    }
                  `}
                  aria-label={
                    currentLanguage === 'en'
                      ? 'Switch to Norwegian'
                      : 'Bytt til engelsk'
                  }
                >
                  NO
                </button>
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => {
                  closeMobileMenu();
                  handleLogin();
                }}
                className="btn-secondary w-full text-center"
                aria-label={
                  currentLanguage === 'no'
                    ? 'Logg inn på Praxis Navigator'
                    : 'Log in to Praxis Navigator'
                }
              >
                {t('nav.login')}
              </button>

              <a
                href="/trial-explainer"
                className="btn-accent w-full text-center"
                onClick={closeMobileMenu}
                aria-label={
                  currentLanguage === 'no'
                    ? 'Start gratis prøveperiode'
                    : 'Start free trial'
                }
              >
                {t('nav.trial')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
