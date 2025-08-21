/**
 * Environment Configuration
 *
 * Centralized access to environment variables for the Praxis Navigator website.
 * All environment variables must be prefixed with ASTRO_PUBLIC_ to be accessible
 * in the browser during runtime.
 */

export const ENV = {
  // Azure AD B2B Configuration
  AZURE_CLIENT_ID: import.meta.env.ASTRO_PUBLIC_AZURE_CLIENT_ID || '',
  AZURE_AUTHORITY: import.meta.env.ASTRO_PUBLIC_AZURE_AUTHORITY || '',

  // Application URLs
  PRAXIS_APP_URL:
    import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL ||
    'https://app.praxisnavigator.io',
  MARKETPLACE_URL: import.meta.env.ASTRO_PUBLIC_MARKETPLACE_URL || '',

  // Environment Detection
  IS_PRODUCTION: import.meta.env.PROD,
  IS_DEVELOPMENT: import.meta.env.DEV,

  // Build Information
  MODE: import.meta.env.MODE,
} as const;

/**
 * Validate that all required environment variables are present
 */
export function validateEnvironment(): { isValid: boolean; missing: string[] } {
  const required = [
    'ASTRO_PUBLIC_AZURE_CLIENT_ID',
    'ASTRO_PUBLIC_AZURE_AUTHORITY',
    'ASTRO_PUBLIC_PRAXIS_APP_URL',
    'ASTRO_PUBLIC_MARKETPLACE_URL',
  ] as const;

  const missing = required.filter(key => !import.meta.env[key]);

  return {
    isValid: missing.length === 0,
    missing,
  };
}

/**
 * Get environment-specific configuration
 */
export function getEnvironmentInfo() {
  const validation = validateEnvironment();

  return {
    environment: ENV.MODE,
    isProduction: ENV.IS_PRODUCTION,
    isDevelopment: ENV.IS_DEVELOPMENT,
    validation,
    config: {
      azureClientId: ENV.AZURE_CLIENT_ID ? '✓ Set' : '✗ Missing',
      azureAuthority: ENV.AZURE_AUTHORITY ? '✓ Set' : '✗ Missing',
      praxisAppUrl: ENV.PRAXIS_APP_URL,
      marketplaceUrl: ENV.MARKETPLACE_URL ? '✓ Set' : '✗ Missing',
    },
  };
}
