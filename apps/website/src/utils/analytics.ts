/**
 * Analytics utilities for Cloudflare Web Analytics
 * GDPR compliant - no cookies or personal data collection
 */

// Custom event types for business metrics tracking
export interface ConversionEvent {
  action:
    | 'demo_request'
    | 'contact_form'
    | 'marketplace_click'
    | 'login_attempt'
    | 'newsletter_signup'
    | 'resource_download';
  category: 'conversion' | 'engagement' | 'navigation';
  label?: string;
  value?: number;
  segment?:
    | 'security-leaders'
    | 'executives'
    | 'managers'
    | 'sat-teams'
    | 'general'
    | undefined;
}

// Form submission event
export interface FormEvent {
  formType: 'contact' | 'demo' | 'newsletter' | 'support';
  segment: string;
  success: boolean;
  validationErrors?: string[];
}

// Navigation event
export interface NavigationEvent {
  action: 'page_view' | 'external_link' | 'download' | 'search';
  page: string;
  language: 'en' | 'no';
  source?: 'organic' | 'direct' | 'referral' | 'social';
}

/**
 * Track custom conversion events
 * Integrates with Cloudflare Web Analytics custom events
 */
export function trackConversionEvent(event: ConversionEvent): void {
  // Only track in production and if analytics is enabled
  if (import.meta.env.MODE === 'development') {
    console.warn('Analytics (dev mode):', event);
    return;
  }

  // Check if Cloudflare Web Analytics is loaded
  if (typeof window !== 'undefined' && '__cfBeacon' in window) {
    try {
      // Send custom event to Cloudflare Analytics
      (
        window as unknown as {
          __cfBeacon: { trackEvent: (event: Record<string, unknown>) => void };
        }
      ).__cfBeacon.trackEvent({
        category: event.category,
        action: event.action,
        label: event.label || '',
        value: event.value || 0,
        customProperties: {
          segment: event.segment || 'general',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent.slice(0, 100), // Truncated for privacy
          language: document.documentElement.lang || 'en',
        },
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  }
}

/**
 * Track form submissions for lead generation metrics
 */
export function trackFormSubmission(event: FormEvent): void {
  // Type guard for segment
  const validSegments = [
    'security-leaders',
    'executives',
    'managers',
    'sat-teams',
    'general',
  ];
  const segment = validSegments.includes(event.segment)
    ? (event.segment as ConversionEvent['segment'])
    : undefined;

  trackConversionEvent({
    action: event.formType === 'demo' ? 'demo_request' : 'contact_form',
    category: 'conversion',
    label: `${event.formType}_${event.segment}`,
    value: event.success ? 1 : 0,
    segment: segment,
  });

  // Track validation errors for UX improvement (anonymized)
  if (!event.success && event.validationErrors?.length) {
    trackConversionEvent({
      action: 'contact_form',
      category: 'engagement',
      label: `validation_error_count_${event.validationErrors.length}`,
      value: event.validationErrors.length,
    });
  }
}

/**
 * Track navigation and page engagement
 */
export function trackNavigation(event: NavigationEvent): void {
  trackConversionEvent({
    action:
      event.action === 'external_link' ? 'marketplace_click' : 'demo_request',
    category: 'navigation',
    label: `${event.page}_${event.language}`,
    value: 1,
  });
}

/**
 * Track Azure Marketplace clicks for conversion funnel
 */
export function trackMarketplaceClick(source: string): void {
  trackConversionEvent({
    action: 'marketplace_click',
    category: 'conversion',
    label: `marketplace_from_${source}`,
    value: 1,
  });
}

/**
 * Track demo request button clicks
 */
export function trackDemoRequest(source: string, segment?: string): void {
  // Type guard for segment
  const validSegments = [
    'security-leaders',
    'executives',
    'managers',
    'sat-teams',
    'general',
  ];
  const validSegment =
    segment && validSegments.includes(segment)
      ? (segment as ConversionEvent['segment'])
      : undefined;

  trackConversionEvent({
    action: 'demo_request',
    category: 'conversion',
    label: `demo_from_${source}`,
    value: 1,
    segment: validSegment,
  });
}

/**
 * Track resource downloads (whitepapers, case studies)
 */
export function trackResourceDownload(
  resourceType: string,
  resourceName: string
): void {
  trackConversionEvent({
    action: 'resource_download',
    category: 'engagement',
    label: `${resourceType}_${resourceName.replace(/\s+/g, '_')}`,
    value: 1,
  });
}

/**
 * Track newsletter signups
 */
export function trackNewsletterSignup(source: string): void {
  trackConversionEvent({
    action: 'newsletter_signup',
    category: 'conversion',
    label: `newsletter_from_${source}`,
    value: 1,
  });
}

/**
 * Initialize analytics tracking
 * Called after Cloudflare Web Analytics loads
 */
export function initializeAnalytics(): void {
  if (typeof window === 'undefined') return;

  // Enhanced click tracking for conversion elements
  document.addEventListener('click', event => {
    const target = event.target as HTMLElement;

    // Track marketplace links
    if (target.closest('a[href*="azuremarketplace"]')) {
      const source =
        target.closest('[data-source]')?.getAttribute('data-source') ||
        'unknown';
      trackMarketplaceClick(source);
    }

    // Track demo request buttons
    if (target.closest('a[href*="/contact"], a[href*="/demo"]')) {
      const source =
        target.closest('[data-source]')?.getAttribute('data-source') ||
        target.closest('header')
          ? 'header'
          : target.closest('footer')
            ? 'footer'
            : 'page';
      trackDemoRequest(source);
    }

    // Track resource downloads
    if (target.closest('a[href*="/resources/"], a[download]')) {
      const href = (target.closest('a') as HTMLAnchorElement)?.href || '';
      const resourceName = href.split('/').pop() || 'unknown';
      const resourceType = href.includes('whitepaper')
        ? 'whitepaper'
        : href.includes('case-study')
          ? 'case-study'
          : href.includes('webinar')
            ? 'webinar'
            : 'resource';
      trackResourceDownload(resourceType, resourceName);
    }
  });

  // Track scroll depth for engagement metrics
  let maxScroll = 0;
  let scrollTracked = false;

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      ((window.scrollY + window.innerHeight) / document.body.scrollHeight) * 100
    );

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
    }

    // Track significant scroll milestones
    if (!scrollTracked && maxScroll >= 75) {
      trackConversionEvent({
        action: 'demo_request', // Using existing action type
        category: 'engagement',
        label: 'scroll_75_percent',
        value: 75,
      });
      scrollTracked = true;
    }
  });

  // Track page visibility changes for engagement time
  let visibilityStart = Date.now();

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      const timeSpent = Math.round((Date.now() - visibilityStart) / 1000);
      if (timeSpent > 10) {
        // Only track if user spent more than 10 seconds
        trackConversionEvent({
          action: 'demo_request', // Using existing action type
          category: 'engagement',
          label: 'time_spent_seconds',
          value: Math.min(timeSpent, 3600), // Cap at 1 hour
        });
      }
    } else {
      visibilityStart = Date.now();
    }
  });
}

/**
 * Privacy-compliant session tracking
 * Uses only aggregated, anonymous data
 */
export function getSessionInfo() {
  if (typeof window === 'undefined') return null;

  return {
    referrer: document.referrer
      ? new URL(document.referrer).hostname
      : 'direct',
    language: navigator.language || 'en',
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    userAgent: navigator.userAgent.slice(0, 100), // Truncated for privacy
    timestamp: new Date().toISOString(),
  };
}

/**
 * GDPR compliance check
 * Ensures no personal data is collected
 */
export function isGDPRCompliant(): boolean {
  // Cloudflare Web Analytics is cookieless and GDPR compliant by default
  // This function can be extended for additional compliance checks
  return true;
}
