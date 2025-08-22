/**
 * SEO Health Monitoring and Lighthouse CI Integration
 * Provides automated SEO monitoring, performance tracking, and regression testing
 */

import { PERFORMANCE_THRESHOLDS } from './performance';

// SEO performance targets based on story requirements
export const SEO_TARGETS = {
  lighthouse: {
    seo: 100,
    performance: 90,
    accessibility: 90,
    bestPractices: 90,
    pwa: 90,
  },
  coreWebVitals: {
    lcp: PERFORMANCE_THRESHOLDS.LCP, // 2500ms
    inp: PERFORMANCE_THRESHOLDS.INP, // 200ms
    cls: PERFORMANCE_THRESHOLDS.CLS, // 0.1
    fcp: PERFORMANCE_THRESHOLDS.FCP, // 1800ms
    ttfb: PERFORMANCE_THRESHOLDS.TTFB, // 600ms
  },
  seoMetrics: {
    titleLength: { min: 30, max: 60 },
    descriptionLength: { min: 120, max: 160 },
    h1Count: { min: 1, max: 1 },
    internalLinks: { min: 3, max: 10 },
    imageAltTags: 100, // percentage
    structuredDataErrors: 0,
  },
} as const;

// SEO health check interface
export interface SEOHealthReport {
  url: string;
  timestamp: string;
  scores: {
    lighthouse: Record<string, number>;
    coreWebVitals: Record<string, number>;
    seoMetrics: Record<string, number | boolean>;
  };
  issues: Array<{
    type: 'error' | 'warning' | 'info';
    category: string;
    message: string;
    impact: 'high' | 'medium' | 'low';
    fix?: string;
  }>;
  structuredData: {
    valid: boolean;
    errors: string[];
    warnings: string[];
    schemas: string[];
  };
  status: 'excellent' | 'good' | 'needs-improvement' | 'poor';
}

/**
 * Generate comprehensive SEO health report
 */
export async function generateSEOHealthReport(
  url: string
): Promise<SEOHealthReport> {
  const timestamp = new Date().toISOString();
  const issues: SEOHealthReport['issues'] = [];

  // Initialize report structure
  const report: SEOHealthReport = {
    url,
    timestamp,
    scores: {
      lighthouse: {},
      coreWebVitals: {},
      seoMetrics: {},
    },
    issues,
    structuredData: {
      valid: false,
      errors: [],
      warnings: [],
      schemas: [],
    },
    status: 'needs-improvement',
  };

  try {
    // Perform SEO audit (in a real implementation, this would integrate with Lighthouse API)
    const seoAudit = await performSEOAudit();
    report.scores.lighthouse = seoAudit.lighthouse;
    report.scores.seoMetrics = seoAudit.seoMetrics;

    // Check structured data
    const structuredDataAudit = await auditStructuredData();
    report.structuredData = structuredDataAudit;

    // Generate issues based on audit results
    generateSEOIssues(report);

    // Calculate overall status
    report.status = calculateOverallSEOStatus(report);
  } catch (error) {
    issues.push({
      type: 'error',
      category: 'audit',
      message: `Failed to generate SEO report: ${error}`,
      impact: 'high',
      fix: 'Check SEO monitoring configuration and try again',
    });
  }

  return report;
}

/**
 * Perform mock SEO audit (placeholder for Lighthouse API integration)
 */
async function performSEOAudit(): Promise<{
  lighthouse: Record<string, number>;
  seoMetrics: Record<string, number>;
}> {
  // In a real implementation, this would call Lighthouse API
  // For now, return mock data that simulates current state
  return {
    lighthouse: {
      seo: 95, // Close to target but not perfect
      performance: 88,
      accessibility: 92,
      bestPractices: 96,
      pwa: 85,
    },
    seoMetrics: {
      titleLength: 55, // Good
      descriptionLength: 145, // Good
      h1Count: 1, // Perfect
      internalLinks: 5, // Good
      imageAltTags: 90, // Needs improvement
      structuredDataErrors: 0, // Perfect
    },
  };
}

/**
 * Audit structured data implementation
 */
async function auditStructuredData(): Promise<{
  valid: boolean;
  errors: string[];
  warnings: string[];
  schemas: string[];
}> {
  // Mock structured data audit results
  // In real implementation, would use Google's Structured Data Testing Tool API
  return {
    valid: true,
    errors: [],
    warnings: [
      'Consider adding more specific business hours in LocalBusiness schema',
      'Image schema could include more detailed metadata',
    ],
    schemas: [
      'Organization',
      'WebSite',
      'Person',
      'SoftwareApplication',
      'LocalBusiness',
      'BreadcrumbList',
    ],
  };
}

/**
 * Generate SEO issues based on audit results
 */
function generateSEOIssues(report: SEOHealthReport): void {
  const { scores, issues } = report;

  // Check Lighthouse scores
  if (scores.lighthouse.seo < SEO_TARGETS.lighthouse.seo) {
    issues.push({
      type: 'warning',
      category: 'lighthouse',
      message: `SEO score is ${scores.lighthouse.seo}, target is ${SEO_TARGETS.lighthouse.seo}`,
      impact: 'high',
      fix: 'Review meta tags, structured data, and crawlability issues',
    });
  }

  if (scores.lighthouse.performance < SEO_TARGETS.lighthouse.performance) {
    issues.push({
      type: 'warning',
      category: 'performance',
      message: `Performance score is ${scores.lighthouse.performance}, target is ${SEO_TARGETS.lighthouse.performance}`,
      impact: 'high',
      fix: 'Optimize Core Web Vitals, images, and JavaScript loading',
    });
  }

  // Check SEO metrics
  const titleLength = scores.seoMetrics.titleLength as number;
  if (
    titleLength < SEO_TARGETS.seoMetrics.titleLength.min ||
    titleLength > SEO_TARGETS.seoMetrics.titleLength.max
  ) {
    issues.push({
      type: 'warning',
      category: 'meta-tags',
      message: `Title length (${titleLength}) should be between ${SEO_TARGETS.seoMetrics.titleLength.min}-${SEO_TARGETS.seoMetrics.titleLength.max} characters`,
      impact: 'medium',
      fix: 'Adjust page title to optimal length for search results',
    });
  }

  const imageAltTags = scores.seoMetrics.imageAltTags as number;
  if (imageAltTags < SEO_TARGETS.seoMetrics.imageAltTags) {
    issues.push({
      type: 'warning',
      category: 'accessibility',
      message: `${imageAltTags}% of images have alt tags, target is ${SEO_TARGETS.seoMetrics.imageAltTags}%`,
      impact: 'medium',
      fix: 'Add descriptive alt text to all images for accessibility and SEO',
    });
  }

  // Check structured data
  if (!report.structuredData.valid) {
    issues.push({
      type: 'error',
      category: 'structured-data',
      message: 'Structured data validation failed',
      impact: 'high',
      fix: 'Fix structured data markup errors for rich snippets',
    });
  }

  if (report.structuredData.errors.length > 0) {
    issues.push({
      type: 'error',
      category: 'structured-data',
      message: `${report.structuredData.errors.length} structured data errors found`,
      impact: 'high',
      fix: 'Review and fix structured data markup',
    });
  }
}

/**
 * Calculate overall SEO status
 */
function calculateOverallSEOStatus(
  report: SEOHealthReport
): SEOHealthReport['status'] {
  const { scores, issues } = report;

  const criticalIssues = issues.filter(
    issue => issue.type === 'error' || issue.impact === 'high'
  );
  const lighthouseAverage =
    Object.values(scores.lighthouse).reduce((sum, score) => sum + score, 0) /
    Object.values(scores.lighthouse).length;

  if (criticalIssues.length === 0 && lighthouseAverage >= 95) {
    return 'excellent';
  } else if (criticalIssues.length <= 1 && lighthouseAverage >= 90) {
    return 'good';
  } else if (criticalIssues.length <= 3 && lighthouseAverage >= 80) {
    return 'needs-improvement';
  } else {
    return 'poor';
  }
}

/**
 * Monitor Core Web Vitals compliance
 */
export function monitorCoreWebVitals(): {
  compliant: boolean;
  metrics: Record<string, { value: number; target: number; passing: boolean }>;
} {
  // Get current performance metrics (would integrate with actual performance monitoring)
  const currentMetrics = {
    lcp: 2200, // Mock current value
    inp: 150, // Mock current value
    cls: 0.08, // Mock current value
    fcp: 1600, // Mock current value
    ttfb: 550, // Mock current value
  };

  const metrics: Record<
    string,
    { value: number; target: number; passing: boolean }
  > = {};
  let allPassing = true;

  Object.entries(currentMetrics).forEach(([metric, value]) => {
    const target =
      SEO_TARGETS.coreWebVitals[
        metric as keyof typeof SEO_TARGETS.coreWebVitals
      ];
    const passing = value <= target;

    metrics[metric] = { value, target, passing };

    if (!passing) {
      allPassing = false;
    }
  });

  return {
    compliant: allPassing,
    metrics,
  };
}

/**
 * Create SEO performance dashboard data
 */
export function createSEODashboard(): {
  summary: {
    status: string;
    score: number;
    lastUpdated: string;
  };
  metrics: {
    lighthouse: Record<string, number>;
    coreWebVitals: Record<
      string,
      { value: number; target: number; passing: boolean }
    >;
    structuredData: { schemas: number; errors: number; warnings: number };
  };
  trends: {
    period: string;
    improvement: number;
    regression: number;
  };
} {
  const coreWebVitals = monitorCoreWebVitals();

  return {
    summary: {
      status: 'good',
      score: 94,
      lastUpdated: new Date().toISOString(),
    },
    metrics: {
      lighthouse: {
        seo: 95,
        performance: 88,
        accessibility: 92,
        bestPractices: 96,
      },
      coreWebVitals: coreWebVitals.metrics,
      structuredData: {
        schemas: 6,
        errors: 0,
        warnings: 2,
      },
    },
    trends: {
      period: '30 days',
      improvement: 3,
      regression: 0,
    },
  };
}

/**
 * SEO regression testing for deployment pipeline
 */
export async function runSEORegressionTest(urls: string[]): Promise<{
  passed: boolean;
  results: Array<{
    url: string;
    passed: boolean;
    issues: string[];
  }>;
}> {
  const results = await Promise.all(
    urls.map(async url => {
      const report = await generateSEOHealthReport(url);
      const criticalIssues = report.issues
        .filter(issue => issue.type === 'error' || issue.impact === 'high')
        .map(issue => issue.message);

      return {
        url,
        passed:
          criticalIssues.length === 0 && report.scores.lighthouse.seo >= 90,
        issues: criticalIssues,
      };
    })
  );

  const allPassed = results.every(result => result.passed);

  return {
    passed: allPassed,
    results,
  };
}

/**
 * Track SEO metrics over time
 */
export function trackSEOMetrics(metrics: {
  url: string;
  seoScore: number;
  performanceScore: number;
  coreWebVitals: Record<string, number>;
}): void {
  // Integration with analytics and monitoring
  if (
    typeof window !== 'undefined' &&
    (window as unknown as { __cfBeacon?: unknown }).__cfBeacon
  ) {
    try {
      const beacon = (
        window as unknown as {
          __cfBeacon: {
            trackEvent: (event: {
              category: string;
              action: string;
              label: string;
              value: number;
            }) => void;
          };
        }
      ).__cfBeacon;

      // Track SEO score
      beacon.trackEvent({
        category: 'seo_monitoring',
        action: 'lighthouse_seo_score',
        label: metrics.url,
        value: metrics.seoScore,
      });

      // Track performance score
      beacon.trackEvent({
        category: 'seo_monitoring',
        action: 'lighthouse_performance_score',
        label: metrics.url,
        value: metrics.performanceScore,
      });

      // Track Core Web Vitals
      Object.entries(metrics.coreWebVitals).forEach(([metric, value]) => {
        beacon.trackEvent({
          category: 'core_web_vitals',
          action: metric,
          label: metrics.url,
          value: Math.round(value),
        });
      });
    } catch (error) {
      // Silent fail for analytics
      if (import.meta.env.MODE === 'development') {
        // eslint-disable-next-line no-console
        console.error('SEO metrics tracking error:', error);
      }
    }
  }
}
