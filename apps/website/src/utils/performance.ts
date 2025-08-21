/**
 * Core Web Vitals monitoring and performance tracking
 * Integrates with Cloudflare Web Analytics and custom reporting
 */

import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

// Performance thresholds based on story requirements
export const PERFORMANCE_THRESHOLDS = {
  LCP: 2500, // Largest Contentful Paint < 2.5s
  INP: 200, // Interaction to Next Paint < 200ms (replaces FID)
  CLS: 0.1, // Cumulative Layout Shift < 0.1
  FCP: 1800, // First Contentful Paint < 1.8s
  TTFB: 600, // Time to First Byte < 600ms
} as const;

// Performance metrics interface
export interface PerformanceMetrics {
  lcp?: number;
  inp?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  timestamp: string;
  url: string;
  userAgent: string;
  connectionType?: string | undefined;
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

// Performance alerts interface
export interface PerformanceAlert {
  metric: keyof typeof PERFORMANCE_THRESHOLDS;
  value: number;
  threshold: number;
  severity: 'warning' | 'critical';
  page: string;
  timestamp: string;
}

// Global performance storage
const performanceMetrics: PerformanceMetrics = {
  timestamp: new Date().toISOString(),
  url: typeof window !== 'undefined' ? window.location.href : '',
  userAgent:
    typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 100) : '',
  deviceType: getDeviceType(),
};

/**
 * Determine device type based on viewport
 */
function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  if (typeof window === 'undefined') return 'desktop';

  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Get network connection information
 */
function getConnectionInfo(): string | undefined {
  if (typeof navigator !== 'undefined' && 'connection' in navigator) {
    const connection = (navigator as any).connection;
    return connection?.effectiveType || connection?.type;
  }
  return undefined;
}

/**
 * Check if metric exceeds threshold
 */
function checkThreshold(
  metric: keyof typeof PERFORMANCE_THRESHOLDS,
  value: number
): PerformanceAlert | null {
  const threshold = PERFORMANCE_THRESHOLDS[metric];

  if (value > threshold) {
    const severity = value > threshold * 1.5 ? 'critical' : 'warning';

    return {
      metric,
      value,
      threshold,
      severity,
      page: window.location.pathname,
      timestamp: new Date().toISOString(),
    };
  }

  return null;
}

/**
 * Send metrics to analytics service
 */
function sendMetrics(metrics: Partial<PerformanceMetrics>): void {
  // Send to Cloudflare Web Analytics if available
  if (typeof window !== 'undefined' && (window as any).__cfBeacon) {
    try {
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as any).__cfBeacon.trackEvent({
            category: 'performance',
            action: `core_web_vitals_${key}`,
            label: `${key}_${performanceMetrics.deviceType}`,
            value: Math.round(value * 100), // Convert to centiseconds for better granularity
          });
        }
      });
    } catch (error) {
      console.error('Performance metrics tracking error:', error);
    }
  }

  // Development logging
  if (import.meta.env.MODE === 'development') {
    console.log('Core Web Vitals:', metrics);
  }
}

/**
 * Send performance alert
 */
function sendAlert(alert: PerformanceAlert): void {
  // Send critical alerts to monitoring system
  if (alert.severity === 'critical') {
    console.warn(
      `Performance Alert: ${alert.metric} = ${alert.value}ms exceeds threshold of ${alert.threshold}ms`
    );
  }

  // Track alerts in analytics
  if (typeof window !== 'undefined' && (window as any).__cfBeacon) {
    try {
      (window as any).__cfBeacon.trackEvent({
        category: 'performance_alert',
        action: `threshold_exceeded_${alert.metric}`,
        label: `${alert.severity}_${alert.page}`,
        value: Math.round((alert.value / alert.threshold) * 100),
      });
    } catch (error) {
      console.error('Performance alert tracking error:', error);
    }
  }
}

/**
 * Initialize Core Web Vitals monitoring
 */
export function initializeCoreWebVitals(): void {
  if (typeof window === 'undefined') return;

  // Update connection info
  performanceMetrics.connectionType = getConnectionInfo();

  // Largest Contentful Paint (LCP)
  onLCP(metric => {
    const lcp = metric.value;
    performanceMetrics.lcp = lcp;

    const alert = checkThreshold('LCP', lcp);
    if (alert) sendAlert(alert);

    sendMetrics({ lcp });
  });

  // Interaction to Next Paint (INP) - replaces FID
  onINP(metric => {
    const inp = metric.value;
    performanceMetrics.inp = inp;

    const alert = checkThreshold('INP', inp);
    if (alert) sendAlert(alert);

    sendMetrics({ inp });
  });

  // Cumulative Layout Shift (CLS)
  onCLS(metric => {
    const cls = metric.value;
    performanceMetrics.cls = cls;

    const alert = checkThreshold('CLS', cls);
    if (alert) sendAlert(alert);

    sendMetrics({ cls });
  });

  // First Contentful Paint (FCP)
  onFCP(metric => {
    const fcp = metric.value;
    performanceMetrics.fcp = fcp;

    const alert = checkThreshold('FCP', fcp);
    if (alert) sendAlert(alert);

    sendMetrics({ fcp });
  });

  // Time to First Byte (TTFB)
  onTTFB(metric => {
    const ttfb = metric.value;
    performanceMetrics.ttfb = ttfb;

    const alert = checkThreshold('TTFB', ttfb);
    if (alert) sendAlert(alert);

    sendMetrics({ ttfb });
  });
}

/**
 * Get current performance metrics
 */
export function getPerformanceMetrics(): PerformanceMetrics {
  return { ...performanceMetrics };
}

/**
 * Track custom performance events
 */
export function trackCustomPerformance(event: string, duration: number): void {
  if (typeof window !== 'undefined' && (window as any).__cfBeacon) {
    try {
      (window as any).__cfBeacon.trackEvent({
        category: 'custom_performance',
        action: event,
        label: `${event}_${getDeviceType()}`,
        value: Math.round(duration),
      });
    } catch (error) {
      console.error('Custom performance tracking error:', error);
    }
  }
}

/**
 * Performance observer for additional metrics
 */
export function setupPerformanceObserver(): void {
  if (typeof window === 'undefined' || !window.PerformanceObserver) return;

  try {
    // Observe navigation timing
    const navigationObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;

          // Track additional navigation metrics using fetchStart as baseline
          const metrics = {
            domContentLoaded:
              navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
            loadComplete: navEntry.loadEventEnd - navEntry.fetchStart,
            domInteractive: navEntry.domInteractive - navEntry.fetchStart,
          };

          Object.entries(metrics).forEach(([key, value]) => {
            trackCustomPerformance(`navigation_${key}`, value);
          });
        }
      }
    });

    navigationObserver.observe({ entryTypes: ['navigation'] });

    // Observe resource timing for large resources
    const resourceObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const resource = entry as PerformanceResourceTiming;

        // Track slow resources (> 1s load time)
        if (resource.duration > 1000) {
          trackCustomPerformance('slow_resource_load', resource.duration);
        }

        // Track large resources (> 1MB transfer size)
        if (resource.transferSize && resource.transferSize > 1024 * 1024) {
          trackCustomPerformance(
            'large_resource_transfer',
            resource.transferSize
          );
        }
      }
    });

    resourceObserver.observe({ entryTypes: ['resource'] });
  } catch (error) {
    console.error('Performance observer setup error:', error);
  }
}

/**
 * Generate performance report
 */
export function generatePerformanceReport(): string {
  const metrics = getPerformanceMetrics();
  const timestamp = new Date().toISOString();

  const report = {
    timestamp,
    url: metrics.url,
    device: metrics.deviceType,
    connection: metrics.connectionType,
    coreWebVitals: {
      lcp: metrics.lcp
        ? `${metrics.lcp}ms (${metrics.lcp <= PERFORMANCE_THRESHOLDS.LCP ? 'PASS' : 'FAIL'})`
        : 'N/A',
      inp: metrics.inp
        ? `${metrics.inp}ms (${metrics.inp <= PERFORMANCE_THRESHOLDS.INP ? 'PASS' : 'FAIL'})`
        : 'N/A',
      cls: metrics.cls
        ? `${metrics.cls} (${metrics.cls <= PERFORMANCE_THRESHOLDS.CLS ? 'PASS' : 'FAIL'})`
        : 'N/A',
      fcp: metrics.fcp
        ? `${metrics.fcp}ms (${metrics.fcp <= PERFORMANCE_THRESHOLDS.FCP ? 'PASS' : 'FAIL'})`
        : 'N/A',
      ttfb: metrics.ttfb
        ? `${metrics.ttfb}ms (${metrics.ttfb <= PERFORMANCE_THRESHOLDS.TTFB ? 'PASS' : 'FAIL'})`
        : 'N/A',
    },
  };

  return JSON.stringify(report, null, 2);
}

/**
 * Check if current page meets all Core Web Vitals thresholds
 */
export function meetsCoreWebVitalsThresholds(): boolean {
  const metrics = getPerformanceMetrics();

  return (
    (!metrics.lcp || metrics.lcp <= PERFORMANCE_THRESHOLDS.LCP) &&
    (!metrics.inp || metrics.inp <= PERFORMANCE_THRESHOLDS.INP) &&
    (!metrics.cls || metrics.cls <= PERFORMANCE_THRESHOLDS.CLS)
  );
}
