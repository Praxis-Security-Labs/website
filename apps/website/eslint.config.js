import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import globals from 'globals';

export default [
  // Base recommended configs
  js.configs.recommended,
  
  // Build scripts and Node.js files
  {
    files: ['scripts/**/*.{js,mjs,cjs}', '*.config.{js,mjs,cjs}', 'vitest.config.ts', 'playwright.config.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        console: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Allow console in build scripts
      'no-unused-vars': 'warn', // Downgrade unused vars in scripts
    },
  },
  
  // Client-side JavaScript files 
  {
    files: ['src/**/*.{js,mjs}', 'src/scripts/**/*.js', 'debug-language-switch.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        console: 'readonly',
      },
    },
    rules: {
      'no-console': 'off', // Allow console in debug scripts
      'no-constant-binary-expression': 'error', // Catch logical errors
    },
  },
  
  // TypeScript files (Browser + Utils environment)
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // project: './tsconfig.json', // Only enable if needed for type-aware rules
      },
      globals: {
        ...globals.browser,
        console: 'readonly',
        // DOM API types for TypeScript
        NodeListOf: 'readonly',
        HTMLElement: 'readonly',
        Document: 'readonly',
        Window: 'readonly',
        // Additional globals for lead generation/analytics
        gtag: 'readonly',
        dataLayer: 'readonly',
        HubSpotConversations: 'readonly',
        hs: 'readonly',
        Sentry: 'readonly',
        // Performance and monitoring APIs
        PerformanceObserver: 'readonly',
        PerformanceEntry: 'readonly',
        NavigatorConnection: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // TypeScript strict rules for quality
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true 
      }],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Reduce noise for utility functions
      '@typescript-eslint/no-explicit-any': ['off'], // Allow any in utilities for browser APIs
      '@typescript-eslint/no-non-null-assertion': 'error',
      
      // React 19 specific rules
      'react/react-in-jsx-scope': 'off', // Not needed with React 19
      'react/prop-types': 'off', // Using TypeScript for prop validation
      'react/jsx-uses-react': 'off', // Not needed with React 19
      'react/jsx-uses-vars': 'error',
      'react/jsx-key': 'error',
      'react/no-array-index-key': 'off', // Allow for static content lists in marketing pages
      'react/no-unescaped-entities': 'error',
      
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      
      // Accessibility rules (critical for lead generation)
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-noninteractive-element-interactions': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      
      // Lead generation focused rules
      'no-console': 'off', // Allow console in utilities for monitoring/debugging
      'no-debugger': 'error',
      'no-constant-binary-expression': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': 'off', // Handled by TypeScript
      
      // Performance rules for conversion optimization
      'no-async-promise-executor': 'error',
      'require-atomic-updates': 'error',
    },
    settings: {
      react: {
        version: '19.1',
      },
    },
  },
  
  // Astro files
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: typescriptParser, // Direct reference instead of string
        extraFileExtensions: ['.astro'],
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        console: 'readonly',
        // Astro specific globals
        Astro: 'readonly',
        // SEO and analytics globals
        gtag: 'readonly',
        dataLayer: 'readonly',
      },
    },
    plugins: {
      astro,
    },
    rules: {
      // Disable problematic rules for Astro
      'no-undef': 'off', // Astro has its own globals
      '@typescript-eslint/no-unused-vars': 'off', // Can be tricky in Astro components
      
      // Astro specific rules
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/semi': 'error',
      
      // Disable React rules that don't apply to Astro templates
      'react/no-unknown-property': 'off',
      'react/jsx-key': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      
      // Allow console in SSR context
      'no-console': 'off',
      
      // SEO and performance rules for static generation
      'no-debugger': 'error',
    },
  },
  
  // Test setup files - Node.js environment
  {
    files: ['src/test/setup.ts', 'test-setup.ts', '**/test-setup.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        console: 'readonly',
        process: 'readonly',
        // Vitest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        vitest: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
    },
    rules: {
      'no-console': 'off', // Allow console in test setup
      '@typescript-eslint/no-explicit-any': 'off',
      'no-undef': 'error',
    },
  },

  // Test files - business-critical testing rules for lead generation
  {
    files: [
      '**/*.test.{ts,tsx}', 
      '**/*.spec.{ts,tsx}', 
      '**/tests/**/*.{ts,tsx}',
      'tests/**/*.{ts,tsx}'
    ],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        // Vitest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        vitest: 'readonly',
        // Playwright globals
        page: 'readonly',
        browser: 'readonly',
        context: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'react': react,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // Critical for lead generation - accessibility compliance (legal requirement)
      'jsx-a11y/alt-text': 'error', // Images/CTAs must have alt text
      'jsx-a11y/aria-props': 'error', // Screen reader compatibility
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/anchor-is-valid': 'error', // CTA links must work properly
      'jsx-a11y/label-has-associated-control': 'error', // Form accessibility
      
      // React rules for test reliability
      'react/react-in-jsx-scope': 'off', // React 19 auto-imports
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error', // Catch unused test utilities
      'react/prop-types': 'off', // Using TypeScript
      'react/jsx-key': 'error', // List rendering in tests
      
      // Balanced approach - catch errors but don't block productivity
      '@typescript-eslint/no-explicit-any': 'off', // Allow any in test files for mocks
      '@typescript-eslint/no-non-null-assertion': 'warn', // Common in test assertions
      '@typescript-eslint/no-unused-vars': ['warn', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^(error|response|result)$' 
      }],
      
      // Allow debugging and console output in tests
      'no-console': 'off', 
      'no-debugger': 'warn',
      
      // Essential code quality
      'no-undef': 'error', // Catch typos in test function names
      'no-unused-expressions': 'off', // expect() statements
      'prefer-const': 'warn',
      'no-constant-binary-expression': 'error', // Logic errors in tests
    },
    settings: {
      react: {
        version: '19.1',
      },
    },
  },
  
  // Global ignores (equivalent to .eslintignore)
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.astro/**',
      'coverage/**',
      '.next/**',
      '.nuxt/**',
      'package-lock.json',
      '*.d.ts',
      // Build outputs
      'public/assets/**',
      // Config files that need different handling
      'tailwind.config.js',
      'astro.config.mjs',
      'lighthouserc.js',
    ],
  },
];
