/**
 * Lighthouse CI Configuration
 * Automated performance, SEO, and accessibility testing
 */

module.exports = {
  ci: {
    collect: {
      // Build command and static directory
      staticDistDir: './dist',

      // URLs to test (relative to staticDistDir)
      url: ['http://localhost/index.html', 'http://localhost/404.html'],

      // Lighthouse settings
      settings: {
        // Use desktop settings for consistent results
        preset: 'desktop',

        // Throttling settings for consistent results
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0,
        },

        // Skip certain audits that may be flaky
        skipAudits: [
          'uses-http2',
          'canonical', // Skip canonical audit as it requires absolute URLs
        ],

        // Chrome launch settings
        chromeFlags: '--no-sandbox --disable-dev-shm-usage',
      },

      // Number of runs per URL (for averaging)
      numberOfRuns: 3,
    },

    assert: {
      // Performance thresholds
      assertions: {
        // Core Web Vitals thresholds (based on story requirements)
        'categories:performance': ['error', { minScore: 0.9 }], // 90+ performance score
        'categories:accessibility': ['error', { minScore: 0.9 }], // 90+ accessibility score
        'categories:seo': ['error', { minScore: 0.9 }], // 90+ SEO score
        'categories:best-practices': ['warn', { minScore: 0.8 }], // 80+ best practices (warning only)

        // Core Web Vitals metrics
        'metrics:largest-contentful-paint': [
          'error',
          { maxNumericValue: 2500 },
        ], // LCP < 2.5s
        'metrics:first-input-delay': ['error', { maxNumericValue: 100 }], // FID < 100ms
        'metrics:cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }], // CLS < 0.1
        'metrics:first-contentful-paint': ['warn', { maxNumericValue: 1800 }], // FCP < 1.8s
        'metrics:speed-index': ['warn', { maxNumericValue: 3000 }], // Speed Index < 3s

        // Resource optimization
        'metrics:total-blocking-time': ['warn', { maxNumericValue: 300 }], // TBT < 300ms
        'metrics:interactive': ['warn', { maxNumericValue: 3000 }], // TTI < 3s

        // Accessibility specific assertions
        'audits:color-contrast': 'error',
        'audits:heading-order': 'error',
        'audits:html-has-lang': 'error',
        'audits:image-alt': 'error',
        'audits:link-name': 'error',
        'audits:list': 'error',

        // SEO specific assertions
        'audits:document-title': 'error',
        'audits:meta-description': 'error',
        'audits:viewport': 'error',
        'audits:robots-txt': 'warn',

        // Performance specific assertions
        'audits:unused-css-rules': 'warn',
        'audits:unused-javascript': 'warn',
        'audits:render-blocking-resources': 'warn',
        'audits:unminified-css': 'error',
        'audits:unminified-javascript': 'error',
        'audits:efficient-animated-content': 'warn',
        'audits:uses-optimized-images': 'warn',
        'audits:uses-webp-images': 'warn',
        'audits:uses-text-compression': 'error',

        // Security and best practices
        'audits:is-on-https': 'error',
        'audits:uses-http2': 'off', // Disabled for local testing
        'audits:no-vulnerable-libraries': 'error',
      },
    },

    upload: {
      // Target for storing reports (can be configured for CI/CD)
      target: 'filesystem',

      // Output directory for reports
      outputDir: './lighthouse-reports',
    },
  },
};
