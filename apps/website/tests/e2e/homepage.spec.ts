import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads
    await expect(page).toHaveTitle(/Praxis Security Labs/);
  });

  test('should display Praxis branding', async ({ page }) => {
    await page.goto('/');

    // Check for main heading
    await expect(page.locator('h1')).toContainText('Praxis Security Labs');

    // Check for development environment message
    await expect(
      page.locator('text=Development Environment Setup Complete')
    ).toBeVisible();
  });

  test('should render sample component', async ({ page }) => {
    await page.goto('/');

    // Check that the sample component is rendered
    await expect(page.locator('text=Praxis Design System Test')).toBeVisible();
    await expect(
      page.locator('text=This component demonstrates the Praxis design system')
    ).toBeVisible();
  });

  test('should have proper Praxis styling', async ({ page }) => {
    await page.goto('/');

    // Check that Praxis CSS classes are applied
    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-praxis-white/);

    // Check that the main heading has Praxis styling
    const heading = page.locator('h1');
    await expect(heading).toHaveClass(/h1/);
  });

  test('should be accessible', async ({ page }) => {
    await page.goto('/');

    // Basic accessibility checks
    await expect(page.locator('h1')).toBeVisible();

    // Check that interactive elements are focusable
    const button = page.locator('button');
    if ((await button.count()) > 0) {
      await button.first().focus();
      await expect(button.first()).toBeFocused();
    }
  });

  test('should be responsive', async ({ page }) => {
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('h1')).toBeVisible();
  });
});
