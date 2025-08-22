/**
 * Language preference utilities using localStorage
 * Simple alternative to Zustand for persistent language preference storage
 */

export type SupportedLanguage = 'en' | 'no';

const LANGUAGE_PREFERENCE_KEY = 'praxis-language-preference';

/**
 * Get the stored language preference from localStorage
 * Falls back to browser language detection if no preference is stored
 */
export function getStoredLanguagePreference(): SupportedLanguage {
  if (typeof window === 'undefined') {
    return 'en'; // Server-side fallback
  }

  try {
    const stored = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
    if (stored === 'en' || stored === 'no') {
      return stored;
    }
  } catch {
    // localStorage not available (private browsing, etc.)
    // Fall through to browser language detection
  }

  // Fallback to browser language detection
  const browserLanguage = navigator.language.toLowerCase();
  if (browserLanguage.startsWith('no') || browserLanguage.startsWith('nb')) {
    return 'no';
  }

  return 'en';
}

/**
 * Store language preference in localStorage
 */
export function setStoredLanguagePreference(language: SupportedLanguage): void {
  if (typeof window === 'undefined') {
    return; // Server-side guard
  }

  try {
    localStorage.setItem(LANGUAGE_PREFERENCE_KEY, language);
  } catch {
    // localStorage not available (private browsing, etc.)
    // Silently fail - language switching will still work via URL
  }
}

/**
 * Get language from current URL path
 */
export function getLanguageFromPath(path: string): SupportedLanguage {
  if (path.startsWith('/no/') || path === '/no') {
    return 'no';
  }
  return 'en';
}

/**
 * Check if current URL language matches stored preference
 * Returns true if they match, false if user should be redirected
 */
export function shouldRedirectForLanguagePreference(currentPath: string): {
  shouldRedirect: boolean;
  targetUrl?: string;
} {
  const urlLanguage = getLanguageFromPath(currentPath);
  const storedLanguage = getStoredLanguagePreference();

  if (urlLanguage === storedLanguage) {
    return { shouldRedirect: false };
  }

  // Build target URL with preferred language
  let pathWithoutLang = currentPath;
  if (currentPath.startsWith('/no/')) {
    pathWithoutLang = currentPath.substring(3);
  } else if (currentPath === '/no') {
    pathWithoutLang = '';
  }
  // English pages are at root, so currentPath is already the clean path

  // English is the default locale, so no prefix needed (prefixDefaultLocale: false)
  const targetUrl =
    storedLanguage === 'en'
      ? `/${pathWithoutLang}`.replace('//', '/') || '/'
      : `/no${pathWithoutLang === '' ? '' : `/${pathWithoutLang}`}`;

  return { shouldRedirect: true, targetUrl };
}

/**
 * Handle language switch with preference storage
 * Call this when user manually switches language
 */
export function handleLanguageSwitch(
  targetLanguage: SupportedLanguage,
  currentPath: string
): string {
  // Store the user's preference
  setStoredLanguagePreference(targetLanguage);

  // Mark that a manual switch occurred (prevent auto-redirect interference)
  if (typeof window !== 'undefined') {
    try {
      sessionStorage.setItem(
        'praxis-language-switch-timestamp',
        Date.now().toString()
      );
    } catch {
      // sessionStorage not available
    }
  }

  // Calculate target URL
  let pathWithoutLang = currentPath;
  if (currentPath.startsWith('/no/')) {
    pathWithoutLang = currentPath.substring(3);
  } else if (currentPath === '/no') {
    pathWithoutLang = '';
  }
  // English pages are at root, so currentPath is already the clean path

  // English is the default locale, so no prefix needed (prefixDefaultLocale: false)
  const targetPath =
    targetLanguage === 'en'
      ? `/${pathWithoutLang}`.replace('//', '/') || '/'
      : `/no${pathWithoutLang === '' ? '' : `/${pathWithoutLang}`}`;

  return targetPath;
}
