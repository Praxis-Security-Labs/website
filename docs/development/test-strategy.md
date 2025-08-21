# Test Strategy - Praxis Navigator Promotional Website

**Status**: Draft  
**Created**: 2025-08-21  
**Author**: Quinn (QA Architect)  
**Last Updated**: 2025-08-21

## 📋 Executive Summary

This comprehensive test strategy ensures the Praxis Navigator promotional website meets enterprise-grade quality standards while supporting rapid development cycles. The strategy emphasizes shift-left testing, risk-based prioritization, and comprehensive coverage across functional, performance, security, and accessibility requirements.

### Key Testing Principles
- **Quality Gates**: Automated testing prevents defects from reaching production
- **Risk-Based Approach**: Prioritize testing based on business impact and user segments
- **Performance First**: Core Web Vitals compliance and sub-2s load times globally
- **Enterprise Standards**: WCAG AA accessibility and GDPR compliance
- **Continuous Integration**: Automated testing in every pull request

## 🎯 Testing Scope & Objectives

### Primary Testing Objectives
1. **Lead Generation Optimization**: Ensure flawless conversion funnels for all user segments
2. **Performance Excellence**: Achieve Core Web Vitals compliance (LCP <2.5s, FID <100ms, CLS <0.1)
3. **Enterprise Reliability**: 99.9% uptime with graceful degradation
4. **Security Compliance**: Enterprise-grade security without vulnerabilities
5. **Accessibility Standards**: WCAG AA compliance for inclusive user experience
6. **Cross-Browser Compatibility**: Consistent experience across modern browsers

### Testing Scope Boundaries

#### In Scope
- ✅ All promotional website functionality and content
- ✅ HubSpot form integration and lead capture workflows
- ✅ Internationalization (English/Norwegian) switching
- ✅ Performance optimization and Core Web Vitals
- ✅ Security headers and HTTPS enforcement
- ✅ Accessibility compliance (WCAG AA)
- ✅ SEO optimization and structured data
- ✅ Mobile responsiveness across all breakpoints
- ✅ Legacy browser compatibility (IE11+ for enterprise environments)

#### Out of Scope
- ❌ Main Praxis Navigator application (app.praxisnavigator.io)
- ❌ HubSpot CRM internal functionality
- ❌ Azure AD B2B authentication processing (manual testing only)
- ❌ Cloudflare infrastructure testing
- ❌ Third-party service availability testing

## 🏗️ Test Architecture

### Testing Pyramid Structure

```
                    /\
                   /  \
                  /E2E \     End-to-End Tests (20%)
                 /Tests\     - Critical user journeys
                /______\     - Cross-browser compatibility
               /        \    
              /Integration\ Integration Tests (30%)
             /   Tests    \  - Component interactions
            /______________\ - API endpoint testing
           /                \
          /   Unit Tests      \ Unit Tests (50%)
         /   & Component Tests \ - React component testing
        /____________________\ - Utility function testing
```

### Test Environment Strategy

| Environment | Purpose | Test Types | Deployment Trigger |
|-------------|---------|------------|-------------------|
| **Local** | Development testing | Unit, Component, Integration | Developer machine |
| **Preview** | Feature validation | Integration, E2E subset | Cloudflare Pages Preview (Pull Request) |
| **Production** | Live validation | Smoke tests, Performance monitoring | Cloudflare Pages Production (Merge to main) |

## 🧪 Test Types & Implementation

### 1. Unit Testing (Vitest)

**Framework**: Vitest with React Testing Library  
**Coverage Target**: 80% for utility functions and business logic  
**Focus Areas**: Pure functions, data transformations, validation logic

#### Test Implementation Structure
```typescript
// Example: src/utils/__tests__/validation.test.ts
import { describe, it, expect } from 'vitest';
import { validateEmail, validateForm } from '../validation';

describe('Email Validation', () => {
  it('should accept valid email addresses', () => {
    expect(validateEmail('user@company.com')).toBe(true);
    expect(validateEmail('test.email+tag@domain.co.uk')).toBe(true);
  });

  it('should reject invalid email addresses', () => {
    expect(validateEmail('invalid-email')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
    expect(validateEmail('user@')).toBe(false);
  });
});

describe('Form Validation', () => {
  it('should validate contact form data', () => {
    const validData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@company.com',
      company: 'Acme Corp'
    };
    
    expect(validateForm(validData)).toEqual({ isValid: true, errors: [] });
  });

  it('should return errors for invalid form data', () => {
    const invalidData = {
      firstName: '',
      lastName: 'Doe',
      email: 'invalid-email',
      company: ''
    };
    
    const result = validateForm(invalidData);
    expect(result.isValid).toBe(false);
    expect(result.errors).toContain('First name is required');
    expect(result.errors).toContain('Invalid email format');
  });
});
```

#### Configuration: `vitest.config.ts`
```typescript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      threshold: {
        global: {
          branches: 70,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  }
});
```

### 2. Component Testing (React Testing Library)

**Framework**: React Testing Library with Vitest  
**Coverage Target**: 85% for interactive React components  
**Focus Areas**: User interactions, state management, prop handling

#### Test Implementation Examples
```typescript
// Example: src/components/__tests__/HubSpotForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import HubSpotForm from '../forms/HubSpotForm';

describe('HubSpotForm Component', () => {
  const mockProps = {
    formId: 'test-form-id',
    portalId: 'test-portal-id',
    onFormSubmit: vi.fn(),
    onFormReady: vi.fn()
  };

  beforeEach(() => {
    // Mock HubSpot global object
    window.hbspt = {
      forms: {
        create: vi.fn()
      }
    };
  });

  it('should render form container with correct class', () => {
    render(<HubSpotForm {...mockProps} className="custom-class" />);
    
    const formContainer = screen.getByRole('generic');
    expect(formContainer).toHaveClass('hubspot-form', 'custom-class');
  });

  it('should initialize HubSpot form on mount', async () => {
    render(<HubSpotForm {...mockProps} />);
    
    await waitFor(() => {
      expect(window.hbspt.forms.create).toHaveBeenCalledWith({
        portalId: 'test-portal-id',
        formId: 'test-form-id',
        target: expect.any(HTMLElement),
        onFormSubmit: expect.any(Function),
        onFormReady: mockProps.onFormReady,
        css: ''
      });
    });
  });

  it('should track conversion on form submit', async () => {
    // Mock gtag
    window.gtag = vi.fn();
    
    render(<HubSpotForm {...mockProps} />);
    
    // Simulate form submission
    const createCall = window.hbspt.forms.create.mock.calls[0][0];
    createCall.onFormSubmit();
    
    expect(window.gtag).toHaveBeenCalledWith('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL'
    });
    expect(mockProps.onFormSubmit).toHaveBeenCalled();
  });
});
```

```typescript
// Example: src/components/__tests__/LanguageToggle.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import LanguageToggle from '../widgets/LanguageToggle';

describe('LanguageToggle Component', () => {
  beforeEach(() => {
    // Mock URL and history
    Object.defineProperty(window, 'location', {
      value: { pathname: '/en/features' },
      writable: true
    });
    
    window.history.pushState = vi.fn();
  });

  it('should display current language', () => {
    render(<LanguageToggle />);
    
    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('should toggle dropdown on button click', async () => {
    const user = userEvent.setup();
    render(<LanguageToggle />);
    
    const toggleButton = screen.getByRole('button');
    await user.click(toggleButton);
    
    expect(screen.getByText('English')).toBeInTheDocument();
    expect(screen.getByText('Norsk')).toBeInTheDocument();
  });

  it('should change language and update URL', async () => {
    const user = userEvent.setup();
    render(<LanguageToggle />);
    
    // Open dropdown
    await user.click(screen.getByRole('button'));
    
    // Select Norwegian
    await user.click(screen.getByText('Norsk'));
    
    expect(window.history.pushState).toHaveBeenCalledWith(
      {},
      '',
      '/no/features'
    );
  });
});
```

### 3. Integration Testing

**Framework**: Vitest with MSW (Mock Service Worker)  
**Coverage Target**: 100% for critical integration points  
**Focus Areas**: API interactions, form submissions, Cloudflare Workers endpoints

#### Test Implementation Examples
```typescript
// Example: src/test/integration/hubspot-integration.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { submitContactForm } from '../services/hubspot';

const server = setupServer(
  rest.post('https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formId', 
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ success: true, redirectUri: '/thank-you' })
      );
    }
  )
);

describe('HubSpot Integration', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should successfully submit contact form', async () => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@company.com',
      company: 'Acme Corp',
      segment: 'security-leaders'
    };

    const result = await submitContactForm(formData);
    
    expect(result.success).toBe(true);
    expect(result.redirectUri).toBe('/thank-you');
  });

  it('should handle API errors gracefully', async () => {
    server.use(
      rest.post('https://api.hsforms.com/submissions/v3/integration/submit/:portalId/:formId', 
        (req, res, ctx) => {
          return res(ctx.status(500), ctx.json({ error: 'Server error' }));
        }
      )
    );

    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@company.com',
      company: 'Acme Corp',
      segment: 'security-leaders'
    };

    const result = await submitContactForm(formData);
    
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });
});
```

### 4. End-to-End Testing (Playwright)

**Framework**: Playwright  
**Coverage Target**: 100% for critical user journeys  
**Focus Areas**: Complete user workflows, cross-browser compatibility

#### Test Implementation Structure
```typescript
// Example: tests/e2e/lead-generation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Lead Generation Flow', () => {
  test('Security Leaders - Complete contact form submission', async ({ page }) => {
    // Navigate to Security Leaders page
    await page.goto('/solutions/security-leaders');
    
    // Verify page loads correctly
    await expect(page.locator('h1')).toContainText('PROVE SAT INVESTMENT ROI');
    
    // Fill out contact form
    await page.locator('[data-testid="contact-form"]').scrollIntoViewIfNeeded();
    await page.fill('input[name="firstname"]', 'Jane');
    await page.fill('input[name="lastname"]', 'Smith');
    await page.fill('input[name="email"]', 'jane.smith@enterprise.com');
    await page.fill('input[name="company"]', 'Enterprise Security Corp');
    await page.selectOption('select[name="company_size"]', '1000-5000');
    await page.selectOption('select[name="role"]', 'CISO');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Verify success redirect
    await expect(page).toHaveURL('/thank-you');
    await expect(page.locator('h1')).toContainText('Thank You');
    
    // Verify tracking pixel fired
    const trackingRequests = await page.evaluate(() => {
      return window.dataLayer?.filter(event => event.event === 'form_submit');
    });
    expect(trackingRequests).toHaveLength(1);
  });

  test('Demo Request - Executive segment workflow', async ({ page }) => {
    await page.goto('/');
    
    // Click demo request from hero section
    await page.click('[data-testid="hero-demo-cta"]');
    
    // Verify demo form modal opens
    await expect(page.locator('[data-testid="demo-modal"]')).toBeVisible();
    
    // Fill demo request form
    await page.fill('[data-testid="demo-form"] input[name="firstname"]', 'Robert');
    await page.fill('[data-testid="demo-form"] input[name="lastname"]', 'Johnson');
    await page.fill('[data-testid="demo-form"] input[name="email"]', 'robert@company.com');
    await page.fill('[data-testid="demo-form"] input[name="company"]', 'Global Enterprise Inc');
    await page.selectOption('[data-testid="demo-form"] select[name="urgency"]', 'immediate');
    
    // Submit demo request
    await page.click('[data-testid="demo-form"] button[type="submit"]');
    
    // Verify success state
    await expect(page.locator('[data-testid="demo-success"]')).toBeVisible();
    await expect(page.locator('[data-testid="demo-success"]'))
      .toContainText('Thank you! We\'ll contact you within 24 hours');
  });
});

test.describe('Language Switching', () => {
  test('English to Norwegian navigation', async ({ page }) => {
    await page.goto('/');
    
    // Verify default English content
    await expect(page.locator('h1')).toContainText('MEASURE WHAT MATTERS');
    
    // Switch to Norwegian
    await page.click('[data-testid="language-toggle"]');
    await page.click('[data-testid="language-no"]');
    
    // Verify Norwegian content
    await expect(page).toHaveURL('/no');
    await expect(page.locator('h1')).toContainText('MÅL DET SOM BETYR NOE');
    
    // Verify navigation menu is translated
    await expect(page.locator('[data-testid="nav-features"]')).toContainText('Funksjoner');
    await expect(page.locator('[data-testid="nav-pricing"]')).toContainText('Priser');
  });
});
```

#### Playwright Configuration
```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    process.env.CI ? ['github'] : ['list']
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    // Desktop browsers
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'edge',
      use: { ...devices['Desktop Edge'] },
    },

    // Legacy Enterprise browsers
    {
      name: 'ie11',
      use: {
        browserName: 'chromium',
        // Use user agent to simulate IE11 for enterprise compatibility
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
        viewport: { width: 1366, height: 768 },
        // Disable modern features to simulate IE11 limitations
        javaScriptEnabled: true,
        ignoreHTTPSErrors: true
      },
    },

    // Mobile devices
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    // Tablet devices
    {
      name: 'Tablet',
      use: { ...devices['iPad Pro'] },
    }
  ],

  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### 5. Performance Testing

**Framework**: Lighthouse CI, WebPageTest API, custom performance monitoring  
**Coverage Target**: 100% of pages meet Core Web Vitals thresholds  
**Focus Areas**: Load times, Core Web Vitals, mobile performance

#### Lighthouse CI Configuration
```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/solutions/security-leaders",
        "http://localhost:3000/solutions/executives", 
        "http://localhost:3000/solutions/managers",
        "http://localhost:3000/solutions/sat-teams",
        "http://localhost:3000/pricing",
        "http://localhost:3000/about",
        "http://localhost:3000/no"
      ],
      "numberOfRuns": 3,
      "settings": {
        "preset": "perf",
        "chromeFlags": "--no-sandbox --headless"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}],
        "categories:best-practices": ["error", {"minScore": 0.9}],
        "categories:seo": ["error", {"minScore": 0.9}],
        "first-contentful-paint": ["error", {"maxNumericValue": 1200}],
        "largest-contentful-paint": ["error", {"maxNumericValue": 2500}],
        "first-input-delay": ["error", {"maxNumericValue": 100}],
        "cumulative-layout-shift": ["error", {"maxNumericValue": 0.1}]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

#### Performance Test Implementation
```typescript
// tests/performance/core-web-vitals.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Core Web Vitals Performance', () => {
  test('Homepage performance benchmarks', async ({ page }) => {
    // Enable performance monitoring
    await page.addInitScript(() => {
      window.performanceMetrics = [];
      
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          window.performanceMetrics.push({
            name: entry.name,
            value: entry.value,
            rating: entry.rating
          });
        }
      }).observe({ type: 'navigation', buffered: true });
    });

    await page.goto('/');
    
    // Wait for page to fully load
    await page.waitForLoadState('networkidle');
    
    // Get performance metrics
    const metrics = await page.evaluate(() => window.performanceMetrics);
    
    // Assert Core Web Vitals thresholds
    const lcp = metrics.find(m => m.name === 'largest-contentful-paint');
    const fid = metrics.find(m => m.name === 'first-input-delay');
    const cls = metrics.find(m => m.name === 'cumulative-layout-shift');
    
    expect(lcp?.value).toBeLessThan(2500); // LCP < 2.5s
    expect(fid?.value).toBeLessThan(100);  // FID < 100ms
    expect(cls?.value).toBeLessThan(0.1);  // CLS < 0.1
  });

  test('Mobile performance optimization', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile-specific test');
    
    await page.goto('/');
    
    // Simulate slow 3G connection
    await page.context().route('**/*', async route => {
      await new Promise(resolve => setTimeout(resolve, 100));
      await route.continue();
    });
    
    const startTime = Date.now();
    await page.waitForSelector('[data-testid="hero-section"]');
    const loadTime = Date.now() - startTime;
    
    // Assert mobile load time under 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });
});
```

### 6. Accessibility Testing

**Framework**: axe-playwright, manual WCAG AA validation  
**Coverage Target**: 100% WCAG AA compliance  
**Focus Areas**: Screen reader compatibility, keyboard navigation, color contrast

#### Accessibility Test Implementation
```typescript
// tests/accessibility/wcag-compliance.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('WCAG AA Accessibility Compliance', () => {
  test('Homepage accessibility audit', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Contact form accessibility', async ({ page }) => {
    await page.goto('/solutions/security-leaders');
    
    // Focus on form container
    await page.locator('[data-testid="contact-form"]').scrollIntoViewIfNeeded();
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('[data-testid="contact-form"]')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Keyboard navigation workflow', async ({ page }) => {
    await page.goto('/');
    
    // Start keyboard navigation from top
    await page.keyboard.press('Tab');
    
    // Verify focus moves through interactive elements
    await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'skip-to-content');
    
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'main-logo');
    
    await page.keyboard.press('Tab');
    await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'nav-solutions');
    
    // Test dropdown navigation
    await page.keyboard.press('Enter');
    await expect(page.locator('[data-testid="solutions-dropdown"]')).toBeVisible();
    
    await page.keyboard.press('ArrowDown');
    await expect(page.locator(':focus')).toHaveAttribute('data-testid', 'solutions-security-leaders');
  });

  test('Screen reader content structure', async ({ page }) => {
    await page.goto('/');
    
    // Verify heading hierarchy
    const headings = await page.locator('h1, h2, h3, h4, h5, h6').allTextContents();
    
    // Verify logical heading structure (h1 -> h2 -> h3, etc.)
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1); // Only one h1 per page
    
    // Verify alt text for images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      const role = await img.getAttribute('role');
      
      // Images must have alt text or be marked as decorative
      expect(alt !== null || role === 'presentation').toBeTruthy();
    }
  });
});
```

### 7. Legacy Browser Compatibility Testing

**Framework**: Playwright with IE11+ simulation  
**Coverage Target**: 100% for core functionality on legacy browsers  
**Focus Areas**: Basic functionality, form submissions, progressive enhancement

#### Legacy Browser Test Implementation
```typescript
// tests/compatibility/legacy-browsers.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Legacy Browser Compatibility', () => {
  test('IE11 basic functionality', async ({ page, browserName }) => {
    test.skip(browserName !== 'ie11', 'IE11-specific test');
    
    await page.goto('/');
    
    // Verify core content loads
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
    
    // Verify navigation works
    await page.click('[data-testid="nav-solutions"]');
    await expect(page.locator('[data-testid="solutions-dropdown"]')).toBeVisible();
    
    // Test basic form functionality
    await page.goto('/solutions/security-leaders');
    await page.fill('input[name="firstname"]', 'Test');
    await page.fill('input[name="lastname"]', 'User');
    await page.fill('input[name="email"]', 'test@company.com');
    
    // Verify form validation (basic HTML5 validation should work)
    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toHaveValue('test@company.com');
  });

  test('Progressive enhancement graceful degradation', async ({ page, browserName }) => {
    test.skip(browserName !== 'ie11', 'IE11-specific test');
    
    await page.goto('/');
    
    // Verify that even if JavaScript fails, basic content is accessible
    await page.addInitScript(() => {
      // Simulate JavaScript being disabled or failing
      window.addEventListener('error', (e) => e.preventDefault());
    });
    
    // Core content should still be visible and functional
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    
    // Basic links should work
    await page.click('a[href="/about"]');
    await expect(page).toHaveURL(/\/about$/);
  });

  test('CSS compatibility for older browsers', async ({ page, browserName }) => {
    test.skip(browserName !== 'ie11', 'IE11-specific test');
    
    await page.goto('/');
    
    // Verify basic layout works without modern CSS features
    const heroSection = page.locator('[data-testid="hero-section"]');
    await expect(heroSection).toBeVisible();
    
    // Check that fallback fonts are applied
    const headingFont = await page.locator('h1').evaluate(el => 
      window.getComputedStyle(el).fontFamily
    );
    expect(headingFont).toContain('sans-serif'); // Should fallback to system fonts
    
    // Verify buttons are clickable and visible
    const ctaButton = page.locator('[data-testid="hero-cta"]');
    await expect(ctaButton).toBeVisible();
    
    const buttonBox = await ctaButton.boundingBox();
    expect(buttonBox?.width).toBeGreaterThan(100); // Button should have reasonable size
    expect(buttonBox?.height).toBeGreaterThan(30);
  });
});
```

### 8. Cross-Browser Form Testing

**Framework**: Playwright cross-browser matrix  
**Coverage Target**: 100% form functionality across all supported browsers  
**Focus Areas**: HubSpot integration, validation, submission workflows

#### Cross-Browser Form Test Implementation
```typescript
// tests/cross-browser/form-compatibility.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Cross-Browser Form Compatibility', () => {
  ['chromium', 'firefox', 'webkit', 'edge', 'ie11'].forEach(browserType => {
    test(`Contact form submission - ${browserType}`, async ({ page, browserName }) => {
      test.skip(browserName !== browserType, `${browserType}-specific test`);
      
      await page.goto('/solutions/security-leaders');
      
      // Fill form with browser-specific considerations
      await page.fill('input[name="firstname"]', 'Cross Browser');
      await page.fill('input[name="lastname"]', 'Test User');
      await page.fill('input[name="email"]', `test-${browserType}@enterprise.com`);
      await page.fill('input[name="company"]', 'Enterprise Test Corp');
      
      // Handle select dropdowns (different behavior across browsers)
      if (browserType === 'ie11') {
        // IE11 might need special handling for select elements
        await page.selectOption('select[name="company_size"]', { label: '1000-5000 employees' });
      } else {
        await page.selectOption('select[name="company_size"]', '1000-5000');
      }
      
      // Submit form
      await page.click('button[type="submit"]');
      
      // Verify submission handling works across browsers
      if (browserType === 'ie11') {
        // IE11 might show different success indicators
        await expect(page.locator('.success-message, [data-testid="form-success"]')).toBeVisible({ timeout: 10000 });
      } else {
        await expect(page).toHaveURL('/thank-you', { timeout: 5000 });
      }
    });
  });

  test('HTML5 validation fallbacks', async ({ page, browserName }) => {
    await page.goto('/solutions/security-leaders');
    
    // Test email validation across browsers
    await page.fill('input[name="email"]', 'invalid-email');
    await page.click('button[type="submit"]');
    
    if (browserName === 'ie11') {
      // IE11 doesn't support HTML5 validation, should use JavaScript fallback
      await expect(page.locator('.error-message')).toBeVisible();
    } else {
      // Modern browsers should show native validation
      const emailInput = page.locator('input[name="email"]');
      const validationMessage = await emailInput.evaluate(el => el.validationMessage);
      expect(validationMessage).toBeTruthy();
    }
  });
});

### 9. Security Testing

**Framework**: Custom security tests with Playwright  
**Coverage Target**: 100% for security headers and input validation  
**Focus Areas**: XSS prevention, CSP compliance, HTTPS enforcement

#### Security Test Implementation
```typescript
// tests/security/security-headers.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Security Headers & Policies', () => {
  test('Content Security Policy enforcement', async ({ page }) => {
    const response = await page.goto('/');
    
    const headers = response?.headers();
    expect(headers?.['content-security-policy']).toBeDefined();
    
    const csp = headers?.['content-security-policy'];
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("script-src 'self'");
    expect(csp).toContain("style-src 'self' 'unsafe-inline'");
  });

  test('HTTPS enforcement', async ({ page }) => {
    const response = await page.goto('/');
    
    const headers = response?.headers();
    expect(headers?.['strict-transport-security']).toBeDefined();
    expect(headers?.['x-frame-options']).toBe('DENY');
    expect(headers?.['x-content-type-options']).toBe('nosniff');
  });

  test('Form input sanitization', async ({ page }) => {
    await page.goto('/solutions/security-leaders');
    
    // Attempt XSS injection in form fields
    const maliciousScript = '<script>alert("XSS")</script>';
    
    await page.fill('input[name="firstname"]', maliciousScript);
    await page.fill('input[name="email"]', `${maliciousScript}@test.com`);
    
    // Verify script tags are properly escaped
    const firstNameValue = await page.inputValue('input[name="firstname"]');
    expect(firstNameValue).not.toContain('<script>');
    expect(firstNameValue).toContain('&lt;script&gt;');
  });
});
```

## 🤖 Test Automation & Cloudflare Integration

### Cloudflare Pages Integration
Since the project uses Cloudflare Pages with direct GitHub integration, testing is streamlined without the need for complex CI/CD workflows. Tests run locally and in preview environments automatically created by Cloudflare Pages.

### Local Development Testing
```bash
# Run full test suite locally before pushing
npm run test:all

# Run specific test suites
npm run test:unit
npm run test:components  
npm run test:e2e
npm run test:performance
npm run test:a11y
npm run test:security
npm run test:compatibility
```

### Preview Environment Testing
Cloudflare Pages automatically creates preview deployments for pull requests, enabling:
- Manual testing of new features
- Performance validation on Cloudflare's edge network
- Cross-browser compatibility verification
- End-to-end testing against live preview URLs

### Package.json Scripts
```json
{
  "scripts": {
    "test:all": "npm run test:unit && npm run test:components && npm run test:e2e && npm run test:performance",
    "test:unit": "vitest run --coverage",
    "test:components": "vitest run src/components",
    "test:integration": "vitest run src/test/integration",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:performance": "lhci autorun",
    "test:a11y": "playwright test tests/accessibility",
    "test:security": "playwright test tests/security",
    "test:compatibility": "playwright test tests/compatibility",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage --reporter=html",
    "lint": "eslint src --ext .ts,.tsx,.astro",
    "lint:fix": "eslint src --ext .ts,.tsx,.astro --fix",
    "type-check": "tsc --noEmit"
  }
}
```

## 📊 Test Data Management

### Test Data Strategy
- **Static Test Data**: JSON fixtures for consistent testing
- **Dynamic Test Data**: Factory functions for varied scenarios
- **Environment-Specific**: Different data sets for each environment
- **Privacy Compliance**: No real user data in test environments

#### Test Data Structure
```typescript
// src/test/fixtures/users.ts
export const testUsers = {
  securityLeader: {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@enterprise.com',
    company: 'Global Security Corp',
    role: 'CISO',
    segment: 'security-leaders'
  },
  executive: {
    firstName: 'Michael',
    lastName: 'Chen',
    email: 'michael.chen@company.com',
    company: 'Enterprise Solutions Inc',
    role: 'CEO',
    segment: 'executives'
  },
  manager: {
    firstName: 'Lisa',
    lastName: 'Rodriguez',
    email: 'lisa.rodriguez@business.com',
    company: 'Mid-Size Business LLC',
    role: 'Security Manager',
    segment: 'managers'
  },
  satTeam: {
    firstName: 'David',
    lastName: 'Kim',
    email: 'david.kim@organization.org',
    company: 'Training Organization',
    role: 'SAT Coordinator',
    segment: 'sat-teams'
  }
};

// src/test/factories/form-data.ts
import { faker } from '@faker-js/faker';

export const createContactFormData = (overrides = {}) => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  company: faker.company.name(),
  role: faker.helpers.arrayElement(['CISO', 'CEO', 'Security Manager', 'IT Director']),
  segment: faker.helpers.arrayElement(['security-leaders', 'executives', 'managers', 'sat-teams']),
  ...overrides
});
```

## 🏷️ Risk-Based Testing Priorities

### Critical Risk Areas (P0 - Must Test)
1. **Lead Generation Forms**: Any failure blocks primary business objective
2. **Core Web Vitals**: SEO and user experience impact
3. **Mobile Responsiveness**: 50%+ mobile traffic expected
4. **Cross-Browser Compatibility**: Enterprise environment diversity including IE11+
5. **HubSpot Integration**: Critical for lead capture and CRM workflow

### High Risk Areas (P1 - Should Test)
1. **Language Switching**: Norwegian market requirement
2. **SEO Optimization**: Organic traffic acquisition
3. **Accessibility Compliance**: Legal and compliance requirement
4. **Performance Optimization**: Competitive differentiation
5. **Security Headers**: Enterprise trust requirement

### Medium Risk Areas (P2 - Good to Test)
1. **Content Updates**: CMS workflow testing
2. **Analytics Integration**: Data collection optimization
3. **Error Handling**: Graceful degradation scenarios
4. **Cache Validation**: CDN performance verification

## 📈 Test Metrics & KPIs

### Quality Gates
- **Unit Test Coverage**: ≥80% for business logic
- **Component Test Coverage**: ≥85% for React components  
- **E2E Test Coverage**: 100% for critical user journeys
- **Performance Score**: ≥90 Lighthouse score
- **Accessibility Score**: 100% WCAG AA compliance
- **Security Score**: Zero high/critical vulnerabilities

### Monitoring Dashboards
- **Cloudflare Analytics**: Real-time performance and traffic monitoring
- **Performance Monitoring**: Core Web Vitals tracking via Lighthouse CI
- **Error Rate Monitoring**: Production error detection through Cloudflare logs
- **Conversion Tracking**: Lead generation effectiveness via HubSpot analytics

### Reporting Structure
- **Daily**: Local test results during development
- **Weekly**: Performance trends and browser compatibility reports
- **Monthly**: Quality metrics review and test strategy adjustment
- **Quarterly**: Test effectiveness assessment and coverage analysis

## 🔄 Test Maintenance Strategy

### Regular Maintenance Tasks
- **Weekly**: Review and update test data
- **Monthly**: Audit test coverage and remove obsolete tests
- **Quarterly**: Update browser versions and dependencies
- **Annually**: Complete test strategy review

### Test Environment Hygiene
- **Automated Cleanup**: Remove old test artifacts
- **Data Refresh**: Update test fixtures regularly
- **Dependency Updates**: Keep testing frameworks current
- **Performance Monitoring**: Ensure tests run efficiently

## 🎯 Success Criteria

### Definition of Ready (DoR) for Testing
- [ ] Acceptance criteria clearly defined
- [ ] Test data requirements identified
- [ ] Performance benchmarks established
- [ ] Security considerations documented
- [ ] Accessibility requirements specified

### Definition of Done (DoD) for Features
- [ ] All test types executed successfully
- [ ] Code coverage thresholds met
- [ ] Performance benchmarks achieved
- [ ] Accessibility standards verified
- [ ] Security scanning completed
- [ ] Cross-browser compatibility confirmed (including IE11+)
- [ ] Manual testing of Azure AD B2B authentication flow completed
- [ ] Documentation updated

## 🔗 Related Documentation

- [Technical Architecture](../architecture/high-level-architecture.md) - System design and component interactions
- [Component Architecture](../frontend/component-architecture.md) - React and Astro implementation details
- [Performance Requirements](../architecture/tech-stack.md) - Core Web Vitals and optimization targets
- [Security Requirements](../operations/security.md) - Enterprise security standards
- [Cloudflare Pages Deployment](../operations/deployment.md) - Deployment integration and monitoring

---

*This comprehensive test strategy ensures the Praxis Navigator promotional website meets enterprise-grade quality standards while leveraging Cloudflare Pages' seamless deployment integration. The strategy emphasizes local testing, manual validation of authentication flows, and comprehensive cross-browser compatibility including legacy enterprise environments.*
