/**
 * Performance Monitoring Utilities
 *
 * Provides utilities for monitoring Core Web Vitals and other performance metrics
 * that work with Cloudflare Pages analytics.
 */

// Core Web Vitals thresholds (Google recommendations)
export const CORE_WEB_VITALS_THRESHOLDS = {
  LCP: { good: 2500, needsImprovement: 4000 }, // Largest Contentful Paint (ms)
  FID: { good: 100, needsImprovement: 300 }, // First Input Delay (ms)
  CLS: { good: 0.1, needsImprovement: 0.25 }, // Cumulative Layout Shift
  FCP: { good: 1800, needsImprovement: 3000 }, // First Contentful Paint (ms)
  TTFB: { good: 800, needsImprovement: 1800 }, // Time to First Byte (ms)
} as const;

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

/**
 * Get rating for a performance metric
 */
function getRating(
  metricName: keyof typeof CORE_WEB_VITALS_THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const threshold = CORE_WEB_VITALS_THRESHOLDS[metricName];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Measure and report Core Web Vitals
 */
export async function measureCoreWebVitals(): Promise<PerformanceMetric[]> {
  const metrics: PerformanceMetric[] = [];

  // Use web-vitals library or native performance API
  if ('performance' in window) {
    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;

    if (navigation) {
      // Time to First Byte
      const ttfb = navigation.responseStart - navigation.requestStart;
      metrics.push({
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        timestamp: Date.now(),
      });

      // First Contentful Paint (if available)
      const fcp = performance.getEntriesByName('first-contentful-paint')[0];
      if (fcp) {
        metrics.push({
          name: 'FCP',
          value: fcp.startTime,
          rating: getRating('FCP', fcp.startTime),
          timestamp: Date.now(),
        });
      }
    }
  }

  return metrics;
}

/**
 * Monitor resource loading performance
 */
export function measureResourcePerformance() {
  if ('performance' in window) {
    const resources = performance.getEntriesByType(
      'resource'
    ) as PerformanceResourceTiming[];

    const metrics = {
      totalResources: resources.length,
      totalSize: 0,
      totalLoadTime: 0,
      slowestResource: null as PerformanceResourceTiming | null,
      resourceTypes: {} as Record<string, number>,
    };

    resources.forEach(resource => {
      const loadTime = resource.responseEnd - resource.requestStart;
      metrics.totalLoadTime += loadTime;

      if (
        !metrics.slowestResource ||
        loadTime >
          metrics.slowestResource.responseEnd -
            metrics.slowestResource.requestStart
      ) {
        metrics.slowestResource = resource;
      }

      // Count by resource type
      const type = getResourceType(resource.name);
      metrics.resourceTypes[type] = (metrics.resourceTypes[type] || 0) + 1;

      // Estimate size (if available)
      if ('transferSize' in resource) {
        metrics.totalSize +=
          (resource as PerformanceResourceTiming & { transferSize?: number })
            .transferSize || 0;
      }
    });

    return metrics;
  }

  return null;
}

/**
 * Get resource type from URL
 */
function getResourceType(url: string): string {
  if (url.includes('_astro/')) {
    if (url.endsWith('.js')) return 'javascript';
    if (url.endsWith('.css')) return 'stylesheet';
  }
  if (url.match(/\.(png|jpg|jpeg|gif|svg|webp|avif)$/)) return 'image';
  if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
  if (url.endsWith('.css')) return 'stylesheet';
  if (url.endsWith('.js')) return 'script';
  return 'other';
}

/**
 * Report performance metrics (integrate with Cloudflare Analytics)
 */
export function reportPerformanceMetrics(metrics: PerformanceMetric[]) {
  // In production, this would send to Cloudflare Analytics
  // For now, just log to console in development
  if (import.meta.env.DEV) {
    console.group('📊 Performance Metrics');
    metrics.forEach(metric => {
      const emoji =
        metric.rating === 'good'
          ? '✅'
          : metric.rating === 'needs-improvement'
            ? '⚠️'
            : '❌';
      console.log(
        `${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`
      );
    });
    console.groupEnd();
  }

  // TODO: Integrate with Cloudflare Web Analytics when deployed
  // This would use the Cloudflare Analytics API or beacon
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring() {
  // Measure Core Web Vitals when page loads
  if (document.readyState === 'complete') {
    measureAndReport();
  } else {
    window.addEventListener('load', measureAndReport);
  }
}

async function measureAndReport() {
  const metrics = await measureCoreWebVitals();
  reportPerformanceMetrics(metrics);

  const resourceMetrics = measureResourcePerformance();
  if (resourceMetrics && import.meta.env.DEV) {
    console.group('📦 Resource Performance');
    console.log(`Total resources: ${resourceMetrics.totalResources}`);
    console.log(
      `Total load time: ${resourceMetrics.totalLoadTime.toFixed(2)}ms`
    );
    console.log(
      `Estimated total size: ${(resourceMetrics.totalSize / 1024).toFixed(2)}KB`
    );
    console.log('Resource types:', resourceMetrics.resourceTypes);
    console.groupEnd();
  }
}
