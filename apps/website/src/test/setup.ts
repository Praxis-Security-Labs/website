import '@testing-library/jest-dom';
import { beforeAll } from 'vitest';

// Mock environment variables
beforeAll(() => {
  // Mock Astro global - casting to avoid type conflicts
  (globalThis as Record<string, unknown>).Astro = {
    generator: 'Astro v3.0.0',
  };

  // Mock environment variables
  process.env.ASTRO_PUBLIC_AZURE_CLIENT_ID = 'test-client-id';
  process.env.ASTRO_PUBLIC_AZURE_AUTHORITY =
    'https://login.microsoftonline.com/test';
  process.env.ASTRO_PUBLIC_PRAXIS_APP_URL =
    'https://test-app.praxisnavigator.io';
  process.env.ASTRO_PUBLIC_MARKETPLACE_URL =
    'https://test-marketplace.microsoft.com';
});
