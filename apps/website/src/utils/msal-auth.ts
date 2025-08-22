import { PublicClientApplication } from '@azure/msal-browser';
import type {
  Configuration,
  RedirectRequest,
  PopupRequest,
} from '@azure/msal-browser';

// MSAL configuration for Praxis Navigator
const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.ASTRO_PUBLIC_AZURE_CLIENT_ID || '',
    authority:
      import.meta.env.ASTRO_PUBLIC_AZURE_AUTHORITY ||
      'https://login.microsoftonline.com/common',
    redirectUri:
      import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL ||
      'https://app.praxisnavigator.io',
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (_level, message) => {
        if (import.meta.env.MODE === 'development') {
          console.log(`[MSAL] ${message}`);
        }
      },
    },
  },
};

// Create MSAL instance
let msalInstance: PublicClientApplication | null = null;

export const getMsalInstance = (): PublicClientApplication | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!msalInstance) {
    try {
      msalInstance = new PublicClientApplication(msalConfig);
    } catch (error) {
      console.error('Failed to create MSAL instance:', error);
      return null;
    }
  }

  return msalInstance;
};

// Login scopes for Praxis Navigator
const loginRequest: PopupRequest = {
  scopes: ['openid', 'profile', 'email'],
  prompt: 'select_account',
};

/**
 * Initiates Azure AD B2B login flow using popup
 * This will authenticate the user and then redirect to the main application
 */
export const loginWithAzureAD = async (): Promise<void> => {
  const msal = getMsalInstance();

  if (!msal) {
    console.error('MSAL not initialized');
    // Fallback to direct redirect to app login
    window.location.href = `${import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL || 'https://app.praxisnavigator.io'}/login`;
    return;
  }

  try {
    // Use popup for authentication
    const loginResponse = await msal.loginPopup(loginRequest);

    if (loginResponse) {
      // After successful authentication, redirect to main application
      const appUrl =
        import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL ||
        'https://app.praxisnavigator.io';

      // Add query parameters to preserve context
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = new URL(appUrl);

      // Preserve UTM parameters for analytics
      [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_content',
        'utm_term',
      ].forEach(param => {
        const value = urlParams.get(param);
        if (value) {
          redirectUrl.searchParams.set(param, value);
        }
      });

      // Track successful login
      if (
        typeof window !== 'undefined' &&
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
      ) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          'event',
          'login',
          {
            method: 'Azure AD',
            source: 'pricing_page',
          }
        );
      }

      // Redirect to main application
      window.location.href = redirectUrl.toString();
    }
  } catch (error) {
    console.error('Azure AD login failed:', error);

    // Fallback to direct redirect to app login
    const appUrl =
      import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL ||
      'https://app.praxisnavigator.io';
    window.location.href = `${appUrl}/login`;
  }
};

/**
 * Initiates Azure AD B2B login flow using redirect
 * Alternative method for browsers that block popups
 */
export const loginWithAzureADRedirect = async (): Promise<void> => {
  const msal = getMsalInstance();

  if (!msal) {
    console.error('MSAL not initialized');
    // Fallback to direct redirect to app login
    window.location.href = `${import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL || 'https://app.praxisnavigator.io'}/login`;
    return;
  }

  try {
    const redirectRequest: RedirectRequest = {
      ...loginRequest,
      redirectUri: `${import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL || 'https://app.praxisnavigator.io'}/auth/callback`,
    };

    await msal.loginRedirect(redirectRequest);
  } catch (error) {
    console.error('Azure AD redirect login failed:', error);

    // Fallback to direct redirect to app login
    const appUrl =
      import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL ||
      'https://app.praxisnavigator.io';
    window.location.href = `${appUrl}/login`;
  }
};

/**
 * Direct redirect to Praxis Navigator application
 * Used as fallback when MSAL is not available or fails
 */
export const redirectToPraxisApp = (path: string = ''): void => {
  const appUrl =
    import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL ||
    'https://app.praxisnavigator.io';
  const fullUrl = `${appUrl}${path}`;

  // Preserve UTM parameters
  const urlParams = new URLSearchParams(window.location.search);
  const redirectUrl = new URL(fullUrl);

  [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
  ].forEach(param => {
    const value = urlParams.get(param);
    if (value) {
      redirectUrl.searchParams.set(param, value);
    }
  });

  // Track redirect
  if (
    typeof window !== 'undefined' &&
    (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
  ) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
      'event',
      'click',
      {
        event_category: 'navigation',
        event_label: 'app_redirect',
        destination: path || 'home',
      }
    );
  }

  window.location.href = redirectUrl.toString();
};

/**
 * Initialize MSAL instance and handle any redirect callbacks
 * Should be called once when the application loads
 */
export const initializeMsal = async (): Promise<void> => {
  if (typeof window === 'undefined') {
    return;
  }

  const msal = getMsalInstance();

  if (!msal) {
    return;
  }

  try {
    // Handle redirect response if we're returning from Azure AD
    const response = await msal.handleRedirectPromise();

    if (response) {
      // Successful authentication via redirect
      console.log('Authentication successful via redirect');

      // Redirect to main application
      redirectToPraxisApp();
    }
  } catch (error) {
    console.error('MSAL initialization error:', error);
  }
};

/**
 * Check if MSAL is properly configured
 */
export const isMsalConfigured = (): boolean => {
  return !!(
    import.meta.env.ASTRO_PUBLIC_AZURE_CLIENT_ID &&
    import.meta.env.ASTRO_PUBLIC_AZURE_AUTHORITY &&
    import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL
  );
};

// Export types for use in components
export type { PopupRequest, RedirectRequest } from '@azure/msal-browser';
