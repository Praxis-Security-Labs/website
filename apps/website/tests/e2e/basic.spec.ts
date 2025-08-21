import { test, expect } from '@playwright/test';

test.describe('Basic E2E Tests', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check that the page loads with correct title
    await expect(page).toHaveTitle(/Praxis Security Labs/);

    // Check for main heading
    await expect(page.locator('h1')).toContainText('Praxis Security Labs');
  });
});
