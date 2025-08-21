# Testing Strategy

## Testing Pyramid

```
                  E2E Tests (Playwright)
                 /                      \
            Integration Tests (API Routes)
               /                        \
          Frontend Unit          Backend Unit
         (React Testing)        (Vitest + MSW)
```

## Test Organization

### Frontend Tests

```
tests/
├── unit/                      # Unit tests
│   ├── components/            # Component tests
│   │   ├── Button.test.tsx
│   │   ├── DemoForm.test.tsx
│   │   └── LanguageSwitcher.test.tsx
│   ├── services/              # Service tests
│   │   ├── apiClient.test.ts
│   │   └── leadService.test.ts
│   └── utils/                 # Utility tests
│       ├── validation.test.ts
│       └── formatters.test.ts
├── integration/               # Integration tests
│   ├── forms/                 # Form workflow tests
│   │   ├── demo-request.test.ts
│   │   └── contact-form.test.ts
│   └── redirect/              # Login redirect flow tests
│       └── msal-redirect.test.ts
└── e2e/                       # End-to-end tests
    ├── user-journeys/         # Complete user flows
    │   ├── lead-generation.spec.ts
    │   ├── login-redirect.spec.ts
    │   └── language-switching.spec.ts
    ├── performance/           # Performance tests
    │   └── core-web-vitals.spec.ts
    └── accessibility/         # A11y tests
        └── wcag-compliance.spec.ts
```

## Test Examples

### Frontend Component Test

```typescript
// tests/unit/components/DemoRequestForm.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { DemoRequestForm } from '@/components/forms/DemoRequestForm';
import { apiClient } from '@/services/apiClient';

// Mock API client
jest.mock('@/services/apiClient');
const mockApiClient = apiClient as jest.Mocked<typeof apiClient>;

describe('DemoRequestForm', () => {
  beforeEach(() => {
    mockApiClient.submitForm.mockResolvedValue({
      success: true,
      data: { leadId: 'test-lead-123' }
    });
  });

  it('should submit form with correct data', async () => {
    render(<DemoRequestForm segment="security-leaders" />);

    // Fill form
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: 'John' }
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: 'Doe' }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'john.doe@example.com' }
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /schedule demo/i }));

    await waitFor(() => {
      expect(mockApiClient.submitForm).toHaveBeenCalledWith({
        type: 'demo',
        segment: 'security-leaders',
        contact: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com'
        }
      });
    });
  });

  it('should display validation errors', async () => {
    render(<DemoRequestForm segment="security-leaders" />);

    // Submit empty form
    fireEvent.click(screen.getByRole('button', { name: /schedule demo/i }));

    await waitFor(() => {
      expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });
  });
});
```

### Backend API Test

```typescript
// tests/integration/forms/submit.test.ts
import { unstable_dev } from 'wrangler';

describe('Form submission API', () => {
  let worker: any;

  beforeAll(async () => {
    worker = await unstable_dev('functions/forms/submit.ts', {
      experimental: { disableExperimentalWarning: true }
    });
  });

  afterAll(async () => {
    await worker.stop();
  });

  it('should accept valid form submission', async () => {
    const formData = {
      type: 'demo',
      contact: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com'
      },
      company: {
        name: 'Acme Corp',
        size: '201-1000'
      },
      segment: 'security-leaders'
    };

    const response = await worker.fetch('/api/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    expect(response.status).toBe(200);
    
    const result = await response.json();
    expect(result.success).toBe(true);
    expect(result.leadId).toMatch(/^lead_/);
  });

  it('should reject invalid form data', async () => {
    const invalidData = {
      type: 'demo',
      contact: {
        firstName: '',
        email: 'invalid-email'
      }
    };

    const response = await worker.fetch('/api/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(invalidData)
    });

    expect(response.status).toBe(400);
    
    const result = await response.json();
    expect(result.success).toBe(false);
    expect(result.error.code).toBe('VALIDATION_ERROR');
  });
});
```

### E2E Test

```typescript
// tests/e2e/user-journeys/lead-generation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Lead Generation Flow', () => {
  test('Security Leader Demo Request', async ({ page }) => {
    // Navigate to security leaders page
    await page.goto('/segments/security-leaders');
    
    // Verify page loaded correctly
    await expect(page).toHaveTitle(/Security Leaders/);
    await expect(page.locator('h1')).toContainText('Prove SAT Investment ROI');

    // Fill demo request form
    await page.fill('[data-testid="first-name"]', 'John');
    await page.fill('[data-testid="last-name"]', 'Doe');
    await page.fill('[data-testid="email"]', 'john.doe@example.com');
    await page.fill('[data-testid="company-name"]', 'Acme Security');
    await page.selectOption('[data-testid="company-size"]', '201-1000');

    // Submit form
    await page.click('[data-testid="submit-demo-request"]');

    // Verify success message
    await expect(page.locator('[data-testid="success-message"]'))
      .toContainText('Thank you for your submission');

    // Verify form is reset
    await expect(page.locator('[data-testid="first-name"]')).toHaveValue('');
  });

  test('Language switching preserves form data', async ({ page }) => {
    await page.goto('/segments/security-leaders');
    
    // Fill some form data
    await page.fill('[data-testid="first-name"]', 'John');
    await page.fill('[data-testid="email"]', 'john@example.com');

    // Switch to Norwegian
    await page.click('[data-testid="language-switcher"]');
    await page.click('[data-testid="language-no"]');

    // Verify URL changed to Norwegian
    await expect(page).toHaveURL(/\/no\/segments\/security-leaders/);

    // Verify form data is preserved
    await expect(page.locator('[data-testid="first-name"]')).toHaveValue('John');
    await expect(page.locator('[data-testid="email"]')).toHaveValue('john@example.com');
  });

  test('Core Web Vitals performance', async ({ page }) => {
    await page.goto('/');
    
    // Measure performance metrics
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals = entries.reduce((acc, entry) => {
            if (entry.name === 'LCP') acc.lcp = entry.value;
            if (entry.name === 'FID') acc.fid = entry.value;
            if (entry.name === 'CLS') acc.cls = entry.value;
            return acc;
          }, {});
          resolve(vitals);
        }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      });
    });

    // Assert Core Web Vitals thresholds
    expect(metrics.lcp).toBeLessThan(2500); // LCP < 2.5s
    expect(metrics.fid).toBeLessThan(100);  // FID < 100ms
    expect(metrics.cls).toBeLessThan(0.1);  // CLS < 0.1
  });
});
```

---
