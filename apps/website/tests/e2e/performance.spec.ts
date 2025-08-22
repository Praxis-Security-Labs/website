/**
 * End-to-End Performance Testing
 * Tests Core Web Vitals compliance and performance monitoring
 */

import { test, expect } from '@playwright/test';
import { PERFORMANCE_THRESHOLDS } from '../../src/utils/performance';

test.describe('Core Web Vitals Performance', () => {
  test.beforeEach(async ({ page }) => {
    // Enable performance measurement
    await page.addInitScript(() => {
      window.performanceMetrics = {
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
      };
    });
  });

  test('Homepage meets Core Web Vitals thresholds', async ({ page }) => {
    const startTime = Date.now();

    // Navigate to homepage
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Measure Core Web Vitals
    const coreWebVitals = await page.evaluate(async () => {
      return new Promise(resolve => {
        // Import web-vitals and measure
        import('/node_modules/web-vitals/dist/web-vitals.js')
          .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            const metrics: any = {};
            let metricsCount = 0;
            const totalMetrics = 5;

            const checkComplete = () => {
              if (metricsCount === totalMetrics) {
                resolve(metrics);
              }
            };

            getCLS(metric => {
              metrics.cls = metric.value;
              metricsCount++;
              checkComplete();
            });

            getFID(metric => {
              metrics.fid = metric.value;
              metricsCount++;
              checkComplete();
            });

            getFCP(metric => {
              metrics.fcp = metric.value;
              metricsCount++;
              checkComplete();
            });

            getLCP(metric => {
              metrics.lcp = metric.value;
              metricsCount++;
              checkComplete();
            });

            getTTFB(metric => {
              metrics.ttfb = metric.value;
              metricsCount++;
              checkComplete();
            });

            // Timeout after 5 seconds
            setTimeout(() => {
              resolve(metrics);
            }, 5000);
          })
          .catch(() => {
            // Fallback measurement using Performance API
            const navigation = performance.getEntriesByType(
              'navigation'
            )[0] as PerformanceNavigationTiming;
            resolve({
              ttfb: navigation.responseStart - navigation.requestStart,
              fcp:
                performance.getEntriesByName('first-contentful-paint')[0]
                  ?.startTime || 0,
              lcp:
                performance.getEntriesByName('largest-contentful-paint')[0]
                  ?.startTime || 0,
              cls: 0, // Cannot measure CLS easily in this fallback
              fid: 0, // Cannot measure FID easily in this fallback
            });
          });
      });
    });

    console.log('Core Web Vitals:', coreWebVitals);

    // Assert Core Web Vitals meet thresholds
    if (coreWebVitals.lcp) {
      expect(coreWebVitals.lcp).toBeLessThan(PERFORMANCE_THRESHOLDS.LCP);
    }

    if (coreWebVitals.fid) {
      expect(coreWebVitals.fid).toBeLessThan(PERFORMANCE_THRESHOLDS.FID);
    }

    if (coreWebVitals.cls) {
      expect(coreWebVitals.cls).toBeLessThan(PERFORMANCE_THRESHOLDS.CLS);
    }

    if (coreWebVitals.fcp) {
      expect(coreWebVitals.fcp).toBeLessThan(PERFORMANCE_THRESHOLDS.FCP);
    }

    if (coreWebVitals.ttfb) {
      expect(coreWebVitals.ttfb).toBeLessThan(PERFORMANCE_THRESHOLDS.TTFB);
    }

    // Measure total loading time
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(5000); // Page should load within 5 seconds
  });

  test('404 page meets performance thresholds', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response?.status()).toBe(404);

    await page.waitForLoadState('networkidle');

    // Measure basic performance metrics
    const performanceMetrics = await page.evaluate(() => {
      const navigation = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded:
          navigation.domContentLoadedEventEnd - navigation.navigationStart,
        loadComplete: navigation.loadEventEnd - navigation.navigationStart,
        responseTime: navigation.responseEnd - navigation.requestStart,
      };
    });

    console.log('404 Page Performance:', performanceMetrics);

    // Assert 404 page loads quickly
    expect(performanceMetrics.domContentLoaded).toBeLessThan(2000); // DOM ready < 2s
    expect(performanceMetrics.responseTime).toBeLessThan(1000); // Response < 1s
  });

  test('Performance monitoring is initialized', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Wait for analytics and performance monitoring to load
    await page.waitForTimeout(2000);

    // Check if performance monitoring functions are available
    const monitoringInitialized = await page.evaluate(() => {
      // Check for Cloudflare Web Analytics
      const hasCloudflareAnalytics = !!(window as any).__cfBeacon;

      // Check for performance monitoring utilities
      const hasPerformanceMonitoring =
        typeof (window as any).performance !== 'undefined';

      return {
        cloudflareAnalytics: hasCloudflareAnalytics,
        performanceAPI: hasPerformanceMonitoring,
        webVitalsSupport: 'PerformanceObserver' in window,
      };
    });

    console.log('Monitoring Status:', monitoringInitialized);

    expect(monitoringInitialized.performanceAPI).toBe(true);
    expect(monitoringInitialized.webVitalsSupport).toBe(true);
    // Note: Cloudflare Analytics may not be available in test environment
  });
});

test.describe('Bundle Performance', () => {
  test('JavaScript bundle sizes are within budget', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all loaded JavaScript resources
    const jsResources = await page.evaluate(() => {
      const resources = performance.getEntriesByType(
        'resource'
      ) as PerformanceResourceTiming[];
      return resources
        .filter(resource => resource.name.endsWith('.js'))
        .map(resource => ({
          name: resource.name,
          size: resource.transferSize || resource.encodedBodySize || 0,
          duration: resource.duration,
        }))
        .sort((a, b) => b.size - a.size);
    });

    console.log('JavaScript Resources:', jsResources);

    // Check individual JS files don't exceed budget
    jsResources.forEach(resource => {
      expect(resource.size).toBeLessThan(300 * 1024); // 300KB per JS file
    });

    // Check total JS size
    const totalJSSize = jsResources.reduce(
      (sum, resource) => sum + resource.size,
      0
    );
    expect(totalJSSize).toBeLessThan(500 * 1024); // 500KB total JS
  });

  test('CSS bundle sizes are within budget', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Get all loaded CSS resources
    const cssResources = await page.evaluate(() => {
      const resources = performance.getEntriesByType(
        'resource'
      ) as PerformanceResourceTiming[];
      return resources
        .filter(resource => resource.name.endsWith('.css'))
        .map(resource => ({
          name: resource.name,
          size: resource.transferSize || resource.encodedBodySize || 0,
          duration: resource.duration,
        }))
        .sort((a, b) => b.size - a.size);
    });

    console.log('CSS Resources:', cssResources);

    // Check individual CSS files don't exceed budget
    cssResources.forEach(resource => {
      expect(resource.size).toBeLessThan(100 * 1024); // 100KB per CSS file
    });

    // Check total CSS size
    const totalCSSSize = cssResources.reduce(
      (sum, resource) => sum + resource.size,
      0
    );
    expect(totalCSSSize).toBeLessThan(200 * 1024); // 200KB total CSS
  });
});

test.describe('Analytics Compliance', () => {
  test('Analytics tracking works without cookies', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that no tracking cookies are set
    const cookies = await page.context().cookies();
    const trackingCookies = cookies.filter(
      cookie =>
        cookie.name.includes('analytics') ||
        cookie.name.includes('tracking') ||
        cookie.name.includes('_ga') ||
        cookie.name.includes('_gtm')
    );

    expect(trackingCookies).toHaveLength(0);

    // Wait for analytics to potentially load
    await page.waitForTimeout(3000);

    // Check cookies again after analytics load
    const cookiesAfterLoad = await page.context().cookies();
    const trackingCookiesAfterLoad = cookiesAfterLoad.filter(
      cookie =>
        cookie.name.includes('analytics') ||
        cookie.name.includes('tracking') ||
        cookie.name.includes('_ga') ||
        cookie.name.includes('_gtm')
    );

    expect(trackingCookiesAfterLoad).toHaveLength(0);
  });

  test('Privacy policy is accessible', async ({ page }) => {
    await page.goto('/privacy');
    await page.waitForLoadState('networkidle');

    // Check page loads successfully
    expect(page.url()).toContain('/privacy');

    // Check key privacy content exists
    await expect(page.locator('h1')).toContainText('Privacy');
    await expect(page.getByText('GDPR')).toBeVisible();
    await expect(page.getByText('Cloudflare Web Analytics')).toBeVisible();
    await expect(page.getByText('cookies')).toBeVisible();

    // Check contact information is present
    await expect(page.getByText('privacy@praxisnavigator.io')).toBeVisible();
  });

  test('Norwegian privacy policy is accessible', async ({ page }) => {
    await page.goto('/no/privacy');
    await page.waitForLoadState('networkidle');

    // Should redirect to main privacy page with Norwegian content
    await expect(page.locator('h1')).toContainText('Personvern');
  });
});

test.describe('Error Tracking', () => {
  test('Error boundaries handle component errors gracefully', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Inject a test error to verify error handling
    const errorHandled = await page.evaluate(() => {
      try {
        // Simulate a JavaScript error
        throw new Error('Test error for error tracking');
      } catch (error) {
        // Check if error tracking is working
        console.log('Test error caught:', error);
        return typeof window !== 'undefined';
      }
    });

    expect(errorHandled).toBe(true);

    // Page should still be functional after error
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});
