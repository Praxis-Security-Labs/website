/**
 * Sentry error tracking and performance monitoring configuration
 * Provides production error monitoring with proper filtering
 */

import * as Sentry from '@sentry/browser';
// Remove unused imports for v10 compatibility

// Error categories for filtering and organization
export enum ErrorCategory {
  NAVIGATION = 'navigation',
  FORM = 'form',
  API = 'api',
  COMPONENT = 'component',
  PERFORMANCE = 'performance',
  ANALYTICS = 'analytics',
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  CRITICAL = 'critical',
}

// Custom error context interface
export interface ErrorContext extends Record<string, unknown> {
  category: ErrorCategory;
  component?: string | undefined;
  userAction?: string | undefined;
  pageUrl?: string | undefined;
  userAgent?: string | undefined;
  sessionInfo?: Record<string, unknown> | undefined;
}

// Performance monitoring configuration
interface PerformanceContext {
  transaction: string;
  operation: string;
  tags?: Record<string, string>;
  data?: Record<string, any>;
}

/**
 * Initialize Sentry for production error tracking
 */
export function initializeSentry(): void {
  // Only initialize in production or if DSN is explicitly provided
  const dsn = import.meta.env.SENTRY_DSN;
  if (!dsn || import.meta.env.MODE === 'development') {
    console.warn('Sentry: Disabled in development mode');
    return;
  }

  Sentry.init({
    dsn,
    environment:
      import.meta.env.MODE === 'production' ? 'production' : 'preview',

    // Sample rate for performance monitoring (10% to reduce overhead)
    tracesSampleRate: 0.1,

    // Sample rate for session replay (disabled for privacy)
    replaysSessionSampleRate: 0.0,
    replaysOnErrorSampleRate: 0.0,

    // Integrations
    integrations: [
      // Remove BrowserTracing as it's causing compatibility issues
      // Performance monitoring will be handled through Core Web Vitals utility
    ],

    // Filter out noise and non-critical errors
    beforeSend(event, hint) {
      const error = hint.originalException;

      // Filter out browser extension errors
      if (error && error.toString().includes('extension://')) {
        return null;
      }

      // Filter out common bot/spider errors
      if (
        typeof navigator !== 'undefined' &&
        /bot|spider|crawler/i.test(navigator.userAgent)
      ) {
        return null;
      }

      // Filter out network errors from ad blockers
      if (
        error &&
        (error.toString().includes('AdBlock') ||
          error.toString().includes('adblock') ||
          error.toString().includes('blocked by client'))
      ) {
        return null;
      }

      // Filter out script load errors for third-party resources
      if (
        event.exception?.values?.[0]?.value?.includes('Loading chunk') ||
        event.exception?.values?.[0]?.value?.includes('Loading CSS chunk')
      ) {
        return null;
      }

      return event;
    },

    // Add global tags
    initialScope: {
      tags: {
        component: 'praxis-website',
        version: '1.0.0',
      },
    },
  });

  // Set user context (anonymized)
  Sentry.setUser({
    id: generateAnonymousId(),
    ip_address: null, // Respect privacy
  });
}

/**
 * Generate anonymous user ID for session tracking
 */
function generateAnonymousId(): string {
  // Create a simple hash based on browser characteristics (no personal data)
  const characteristics = [
    navigator.userAgent.slice(0, 50),
    screen.width,
    screen.height,
    new Date().getTimezoneOffset(),
  ].join('|');

  // Simple hash function
  let hash = 0;
  for (let i = 0; i < characteristics.length; i++) {
    const char = characteristics.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  return Math.abs(hash).toString(16);
}

/**
 * Report error with context
 */
export function reportError(
  error: Error,
  context: ErrorContext,
  severity: ErrorSeverity = ErrorSeverity.NORMAL
): void {
  if (import.meta.env.MODE === 'development') {
    console.error('Sentry Error (dev mode):', error, context);
    return;
  }

  Sentry.withScope(scope => {
    // Set error category and severity
    scope.setTag('error_category', context.category);
    scope.setLevel(severity as any);

    // Add component context
    if (context.component) {
      scope.setTag('component', context.component);
    }

    // Add user action context
    if (context.userAction) {
      scope.setContext('user_action', {
        action: context.userAction,
        timestamp: new Date().toISOString(),
      });
    }

    // Add page context
    scope.setContext('page_info', {
      url: context.pageUrl || window.location.href,
      pathname: window.location.pathname,
      language: document.documentElement.lang,
      referrer: document.referrer || 'direct',
    });

    // Add browser context (anonymized)
    scope.setContext('browser_info', {
      userAgent: navigator.userAgent.slice(0, 100),
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      cookieEnabled: navigator.cookieEnabled,
      language: navigator.language,
    });

    // Add session info if provided
    if (context.sessionInfo) {
      scope.setContext('session', context.sessionInfo);
    }

    // Report the error
    Sentry.captureException(error);
  });
}

/**
 * Report custom message with context
 */
export function reportMessage(
  message: string,
  context: ErrorContext,
  severity: ErrorSeverity = ErrorSeverity.NORMAL
): void {
  if (import.meta.env.MODE === 'development') {
    console.warn('Sentry Message (dev mode):', message, context);
    return;
  }

  Sentry.withScope(scope => {
    scope.setTag('error_category', context.category);
    scope.setLevel(severity as any);

    if (context.component) {
      scope.setTag('component', context.component);
    }

    scope.setContext('message_context', context);
    Sentry.captureMessage(message);
  });
}

/**
 * Track performance transaction
 */
export function trackPerformanceTransaction(
  context: PerformanceContext,
  operation: () => Promise<any>
): Promise<any> {
  if (import.meta.env.MODE === 'development') {
    console.warn('Performance Transaction (dev mode):', context);
    return operation();
  }

  // Use simplified performance tracking for Sentry v10 compatibility
  return Sentry.startSpan(
    {
      name: context.transaction,
      op: context.operation,
      attributes: context.tags || {},
    },
    async () => {
      try {
        return await operation();
      } catch (error) {
        Sentry.captureException(error, {
          tags: { transaction: context.transaction },
          contexts: { performance: context.data },
        });
        throw error;
      }
    }
  );
}

/**
 * Form error tracking
 */
export function reportFormError(
  formType: string,
  error: Error,
  fieldErrors?: Record<string, string>
): void {
  reportError(
    error,
    {
      category: ErrorCategory.FORM,
      component: formType,
      userAction: 'form_submission',
      sessionInfo: {
        formType,
        fieldErrors: fieldErrors ? Object.keys(fieldErrors) : [],
      },
    },
    ErrorSeverity.NORMAL
  );
}

/**
 * Navigation error tracking
 */
export function reportNavigationError(error: Error, route?: string): void {
  reportError(
    error,
    {
      category: ErrorCategory.NAVIGATION,
      userAction: 'navigation',
      pageUrl: route,
      sessionInfo: {
        targetRoute: route,
        currentRoute: window.location.pathname,
      },
    },
    ErrorSeverity.HIGH
  );
}

/**
 * Component error tracking
 */
export function reportComponentError(
  componentName: string,
  error: Error,
  props?: Record<string, any>
): void {
  reportError(
    error,
    {
      category: ErrorCategory.COMPONENT,
      component: componentName,
      sessionInfo: {
        componentProps: props ? Object.keys(props) : [],
      },
    },
    ErrorSeverity.NORMAL
  );
}

/**
 * Analytics error tracking
 */
export function reportAnalyticsError(error: Error, eventType?: string): void {
  reportError(
    error,
    {
      category: ErrorCategory.ANALYTICS,
      component: 'analytics',
      userAction: eventType,
      sessionInfo: {
        analyticsEvent: eventType,
      },
    },
    ErrorSeverity.LOW
  );
}

/**
 * Performance issue tracking
 */
export function reportPerformanceIssue(
  metric: string,
  value: number,
  threshold: number
): void {
  reportMessage(
    `Performance threshold exceeded: ${metric} = ${value} > ${threshold}`,
    {
      category: ErrorCategory.PERFORMANCE,
      sessionInfo: {
        metric,
        value,
        threshold,
        exceedanceRatio: (value / threshold).toFixed(2),
      },
    },
    value > threshold * 1.5 ? ErrorSeverity.HIGH : ErrorSeverity.NORMAL
  );
}

/**
 * React Error Boundary component
 */
export class SentryErrorBoundary extends Error {
  constructor(
    message: string,
    public componentStack?: string
  ) {
    super(message);
    this.name = 'SentryErrorBoundary';
  }
}

/**
 * Wrap async operations with error tracking
 */
export async function withErrorTracking<T>(
  operation: () => Promise<T>,
  context: ErrorContext
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    reportError(error as Error, context);
    throw error;
  }
}
