/**
 * Client-side language preference handler
 * This script runs on page load to redirect users to their preferred language
 * Should be included in the BaseLayout component
 */

(function () {
  // Only run on the client-side
  if (typeof window === 'undefined') return;

  const LANGUAGE_PREFERENCE_KEY = 'praxis-language-preference';

  /**
   * Get stored language preference from localStorage
   */
  function getStoredLanguagePreference() {
    try {
      const stored = localStorage.getItem(LANGUAGE_PREFERENCE_KEY);
      if (stored === 'en' || stored === 'no') {
        return stored;
      }
    } catch {
      // localStorage not available
    }

    // Fallback to browser language detection
    const browserLanguage = navigator.language.toLowerCase();
    if (browserLanguage.startsWith('no') || browserLanguage.startsWith('nb')) {
      return 'no';
    }

    return 'en';
  }

  /**
   * Get language from current URL path
   */
  function getLanguageFromPath(path) {
    if (path.startsWith('/no/') || path === '/no') {
      return 'no';
    }
    return 'en';
  }

  /**
   * Check if we should redirect and perform redirect if needed
   */
  function checkAndRedirectForLanguagePreference() {
    const currentPath = window.location.pathname;
    const urlLanguage = getLanguageFromPath(currentPath);
    const storedLanguage = getStoredLanguagePreference();

    // Don't redirect if languages match
    if (urlLanguage === storedLanguage) {
      return;
    }

    // Don't redirect if this appears to be a manual language switch
    // (user just clicked a language link)
    if (
      document.referrer &&
      new URL(document.referrer).hostname === window.location.hostname
    ) {
      const referrerPath = new URL(document.referrer).pathname;
      const referrerLanguage = getLanguageFromPath(referrerPath);

      // If coming from the other language version, this is likely a manual switch
      // Store the new preference and don't redirect
      if (referrerLanguage !== urlLanguage) {
        try {
          localStorage.setItem(LANGUAGE_PREFERENCE_KEY, urlLanguage);
        } catch {
          // localStorage not available
        }
        return;
      }
    }

    // Build target URL with preferred language
    let pathWithoutLang = currentPath;
    if (currentPath.startsWith('/en/')) {
      pathWithoutLang = currentPath.substring(3);
    } else if (currentPath.startsWith('/no/')) {
      pathWithoutLang = currentPath.substring(3);
    } else if (currentPath === '/' || currentPath === '/en') {
      pathWithoutLang = '';
    }

    const targetUrl =
      storedLanguage === 'en'
        ? `/en${pathWithoutLang}`
        : `/no${pathWithoutLang}`;

    // Perform redirect
    window.location.replace(targetUrl);
  }

  // Run the check when the script loads
  checkAndRedirectForLanguagePreference();
})();
