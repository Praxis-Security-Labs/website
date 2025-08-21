/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
    css: true,
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    exclude: ['tests/**/*', 'node_modules/**/*'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        'tests/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/*.test.*',
        'dist/',
      ]
    }
  },
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@/components': new URL('./src/components', import.meta.url).pathname,
      '@/utils': new URL('./src/utils', import.meta.url).pathname,
      '@/types': new URL('./src/types', import.meta.url).pathname,
      '@/layouts': new URL('./src/layouts', import.meta.url).pathname,
      '@/styles': new URL('./src/styles', import.meta.url).pathname,
    }
  }
});