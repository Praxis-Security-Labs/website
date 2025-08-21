# Astro Tech Brief - Praxis Navigator Website Development Standards

**Version:** 1.0  
**Date:** August 21, 2025  
**Authors:** Development Team  
**Status:** Active  

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture Standards](#architecture-standards)
3. [Internationalization (i18n) Implementation](#internationalization-i18n-implementation)
4. [Component Development Standards](#component-development-standards)
5. [Performance and SEO Standards](#performance-and-seo-standards)
6. [Development Workflow](#development-workflow)
7. [Testing Standards](#testing-standards)
8. [Deployment and Build Process](#deployment-and-build-process)
9. [Code Style and Conventions](#code-style-and-conventions)
10. [Common Patterns and Examples](#common-patterns-and-examples)

---

## Project Overview

### Tech Stack
- **Framework:** Astro v3.6.5 (Static Site Generator)
- **UI Framework:** React 18 (for interactive components)
- **Styling:** Tailwind CSS v3.3+ with custom Praxis design system
- **Language:** TypeScript (strict mode)
- **Deployment:** Cloudflare Pages
- **Package Management:** npm
- **Build Tool:** Vite (integrated with Astro)

### Project Structure
```
apps/website/
├── src/
│   ├── components/          # React components
│   │   ├── layout/         # Header, Footer, etc.
│   │   ├── sections/       # Page sections
│   │   └── ui/            # Reusable UI components
│   ├── layouts/           # Astro layout components
│   ├── pages/             # File-based routing
│   │   ├── en/           # English pages
│   │   ├── no/           # Norwegian pages
│   │   └── api/          # API endpoints
│   ├── styles/           # Global CSS and Tailwind
│   ├── i18n/             # Internationalization
│   ├── utils/            # Utility functions
│   ├── config/           # Configuration files
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── tests/                # Test files
└── scripts/             # Build and utility scripts
```

---

## Architecture Standards

### Core Principles

1. **Static-First:** Prefer static generation over client-side rendering
2. **Progressive Enhancement:** Start with semantic HTML, enhance with interactivity
3. **Language-Aware Routing:** Explicit language prefixes for all pages (`/en/`, `/no/`)
4. **Component Isolation:** Each component should be self-contained and reusable
5. **Performance by Default:** Optimize for Core Web Vitals and loading performance

### File Naming Conventions

```
Components:     PascalCase.tsx      (e.g., HeroSection.tsx)
Pages:          kebab-case.astro    (e.g., security-leaders.astro)
Utilities:      camelCase.ts        (e.g., formatDate.ts)
Types:          PascalCase.ts       (e.g., ProductTypes.ts)
Configs:        kebab-case.js       (e.g., tailwind.config.js)
```

### Directory Standards

- **Components:** Group by type/purpose (`layout/`, `sections/`, `ui/`)
- **Pages:** Mirror the URL structure exactly
- **Assets:** Use descriptive names and organize by type
- **Tests:** Co-locate with source files or mirror structure in `/tests`

---

## Internationalization (i18n) Implementation

### **CRITICAL:** Our i18n implementation uses folder-based routing with explicit language prefixes for both English and Norwegian.

### Language Structure
```
src/pages/
├── index.astro           # Root redirect page
├── en/                   # English pages
│   ├── index.astro      # Homepage: /en/
│   ├── about/
│   ├── product/
│   └── ...
└── no/                   # Norwegian pages
    ├── index.astro      # Homepage: /no/
    ├── about/
    ├── product/
    └── ...
```

### URL Pattern Standards
- **English:** `/en/path` (explicit prefix)
- **Norwegian:** `/no/path` (explicit prefix)
- **Root:** `/` redirects to default language

### Implementation Requirements

#### 1. BaseLayout Language Detection
```typescript
// Always extract language from URL path
const currentPath = Astro.url.pathname;
const isNorwegian = lang === 'no' || currentPath.startsWith('/no');
const currentLanguage = isNorwegian ? 'no' : 'en';
```

#### 2. Navigation Links
**MANDATORY:** All navigation links must use `/${currentLanguage}/` pattern:

```tsx
// ✅ CORRECT - Consistent language prefixes
const navigationItems = [
  {
    label: currentLanguage === 'no' ? 'Produkt' : 'Product',
    href: `/${currentLanguage}/product`,
  },
  // ... more items
];

// ❌ WRONG - Conditional logic
href: `/${currentLanguage === 'no' ? 'no/' : ''}product`
```

#### 3. Language Switching
```tsx
// Helper function for context-aware language switching
const getLanguageSwitchUrl = (targetLanguage: string) => {
  let pathWithoutLang = currentPath;
  if (currentPath.startsWith('/en/')) {
    pathWithoutLang = currentPath.substring(3);
  } else if (currentPath.startsWith('/no/')) {
    pathWithoutLang = currentPath.substring(3);
  }
  
  return pathWithoutLang === '' 
    ? `/${targetLanguage}` 
    : `/${targetLanguage}${pathWithoutLang}`;
};
```

#### 4. Meta Tags and SEO
```astro
<!-- Language alternate URLs -->
{currentLanguage === 'en' ? (
  <link 
    rel="alternate" 
    hreflang="no" 
    href={`${Astro.site}no${currentPath === '/' ? '' : currentPath}`} 
  />
) : (
  <link 
    rel="alternate" 
    hreflang="en" 
    href={`${Astro.site}${currentPath.replace('/no', '') || '/'}`} 
  />
)}
<link 
  rel="alternate" 
  hreflang="x-default" 
  href={`${Astro.site}${currentPath.replace('/no', '') || '/'}`} 
/>
```

### Translation Management

Use the i18n utility system for consistent translations:

```typescript
// src/i18n/ui.ts
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    // ...
  },
  no: {
    'nav.home': 'Hjem',
    'nav.about': 'Om Oss',
    // ...
  },
} as const;

// Usage in components
import { useTranslations } from '../i18n/utils';
const t = useTranslations(currentLanguage);
const homeLabel = t('nav.home');
```

---

## Component Development Standards

### React Component Structure

```tsx
// Standard component template
import React from 'react';

interface ComponentNameProps {
  // Props with explicit types
  title: string;
  description?: string;
  variant?: 'primary' | 'secondary';
  currentLanguage?: 'en' | 'no';
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  title,
  description,
  variant = 'primary',
  currentLanguage = 'en',
}) => {
  // Component logic here
  
  return (
    <section className="component-specific-classes">
      {/* Component JSX */}
    </section>
  );
};
```

### Astro Page Structure

```astro
---
// Astro frontmatter
import BaseLayout from '../../layouts/BaseLayout.astro';
import { ComponentName } from '../../components/sections/ComponentName';
import { getLangFromUrl } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url);

const title = 'Page Title - Praxis Navigator';
const description = 'Page description for SEO';
const keywords = 'relevant, seo, keywords';

// Structured data if needed
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  // ... schema.org data
};
---

<BaseLayout 
  title={title}
  description={description}
  keywords={keywords}
  lang={lang}
  structuredData={structuredData}
  pageType="content"
>
  <ComponentName 
    title={title}
    currentLanguage={lang}
    client:load
  />
</BaseLayout>
```

### Styling Standards

#### Tailwind Class Organization
```tsx
// Group classes logically - layout, spacing, appearance, states
className="
  flex items-center justify-between        // Layout
  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  // Container & spacing
  bg-praxis-dark-blue text-praxis-white    // Appearance
  hover:bg-praxis-dark-blue-700            // States
  transition-brand rounded-lg focus-ring   // Transitions & accessibility
"
```

#### Custom CSS Classes
Use design system utilities for consistency:
```css
/* Design system utilities */
.btn-primary { /* Primary button styles */ }
.btn-secondary { /* Secondary button styles */ }
.btn-accent { /* Accent button styles */ }
.focus-ring { /* Consistent focus styles */ }
.transition-brand { /* Brand transition timing */ }
```

### Accessibility Requirements

1. **Semantic HTML:** Use proper HTML elements
2. **ARIA Labels:** Provide descriptive labels for interactive elements
3. **Focus Management:** Ensure keyboard navigation works
4. **Skip Links:** Include skip navigation for screen readers
5. **Language Attributes:** Set `lang` attribute on HTML element

```tsx
// Example accessibility implementation
<button
  onClick={handleClick}
  className="btn-primary"
  aria-label={currentLanguage === 'no' 
    ? 'Logg inn på Praxis Navigator' 
    : 'Log in to Praxis Navigator'
  }
>
  {currentLanguage === 'no' ? 'Logg Inn' : 'Login'}
</button>
```

---

## Performance and SEO Standards

### Core Web Vitals Targets
- **LCP:** < 2.5 seconds
- **FID:** < 100 milliseconds  
- **CLS:** < 0.1

### Image Optimization
```astro
<!-- Use responsive images with proper sizing -->
<img 
  src="/images/hero-image.webp"
  alt="Descriptive alt text"
  width="1200"
  height="600"
  loading="lazy"
  decoding="async"
/>
```

### SEO Requirements

#### Meta Tags (implemented in BaseLayout)
- Title (55-60 characters)
- Description (150-160 characters)
- Keywords (relevant, not stuffed)
- Open Graph tags
- Twitter Cards
- Canonical URLs
- Language alternates

#### Structured Data
Use Schema.org markup for relevant content types:
```javascript
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Praxis Navigator',
  description: 'Security culture measurement platform',
  // ... additional schema properties
};
```

### Performance Best Practices

1. **Component Hydration:** Use `client:load` sparingly, prefer `client:idle` or `client:visible`
2. **Image Optimization:** WebP format, proper sizing, lazy loading
3. **CSS:** Critical CSS inlined, non-critical CSS loaded asynchronously
4. **JavaScript:** Code splitting, tree shaking enabled
5. **Caching:** Leverage Cloudflare caching headers

---

## Development Workflow

### Local Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests
npm run test
```

### Git Workflow
1. **Branch naming:** `feature/description` or `fix/description`
2. **Commit messages:** Conventional commits format
3. **Pull requests:** Include description, testing notes, screenshots
4. **Code review:** Required before merging

### Pre-commit Hooks
```json
{
  "lint-staged": {
    "*.{ts,tsx,astro}": ["eslint --fix", "prettier --write"],
    "*.{md,json}": ["prettier --write"]
  }
}
```

---

## Testing Standards

### Unit Testing (Vitest)
```typescript
// Example component test
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders with correct content', () => {
    render(<ComponentName title="Test Title" currentLanguage="en" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders Norwegian content when language is no', () => {
    render(<ComponentName title="Test Title" currentLanguage="no" />);
    // Test Norwegian-specific content
  });
});
```

### E2E Testing (Playwright)
```typescript
// Example E2E test
test('navigation works correctly', async ({ page }) => {
  await page.goto('/en/');
  await page.click('text=Product');
  await expect(page).toHaveURL('/en/product');
  
  // Test language switching
  await page.click('text=NO');
  await expect(page).toHaveURL('/no/product');
});
```

### Performance Testing
```bash
# Lighthouse CI
npm run test:lighthouse

# Performance budget check
npm run build:with-budget
```

---

## Deployment and Build Process

### Build Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  site: 'https://praxisnavigator.io',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
```

### Cloudflare Pages Configuration
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** 18+
- **Environment variables:** Set in Cloudflare dashboard

### Performance Budget
```javascript
// Performance thresholds
const performanceBudget = {
  maxBundleSize: '500KB',
  maxImageSize: '200KB',
  maxCSSSize: '50KB',
  maxJSSize: '250KB',
};
```

---

## Code Style and Conventions

### TypeScript Standards
```typescript
// Use explicit types
interface UserData {
  id: string;
  name: string;
  email: string;
  language: 'en' | 'no';
}

// Use const assertions for immutable data
export const LANGUAGES = ['en', 'no'] as const;
export type Language = typeof LANGUAGES[number];

// Use function declarations for components
export function ComponentName(props: ComponentProps) {
  // Implementation
}
```

### Import Organization
```typescript
// 1. Node modules
import React from 'react';
import { defineConfig } from 'astro/config';

// 2. Internal modules (use aliases)
import { Header } from '@/components/layout/Header';
import { formatDate } from '@/utils/date';

// 3. Relative imports
import './ComponentName.css';
```

### CSS Class Naming
```typescript
// Use descriptive, semantic class names
const buttonClasses = `
  btn-primary
  text-sm font-heading uppercase tracking-brand-wide
  px-4 py-2 rounded-lg
  transition-brand focus-ring
  hover:bg-praxis-gold-600
`;
```

---

## Common Patterns and Examples

### 1. Creating a New Language-Aware Page

```astro
---
// src/pages/en/new-page.astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import { NewPageSection } from '../../components/sections/NewPageSection';
import { getLangFromUrl } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url); // Will be 'en'

const title = 'New Page - Praxis Navigator';
const description = 'Description for the new page';
---

<BaseLayout title={title} description={description} lang={lang}>
  <NewPageSection currentLanguage={lang} client:load />
</BaseLayout>
```

```astro
---
// src/pages/no/new-page.astro  
import BaseLayout from '../../layouts/BaseLayout.astro';
import { NewPageSection } from '../../components/sections/NewPageSection';
import { getLangFromUrl } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url); // Will be 'no'

const title = 'Ny Side - Praxis Navigator';
const description = 'Beskrivelse for den nye siden';
---

<BaseLayout title={title} description={description} lang={lang}>
  <NewPageSection currentLanguage={lang} client:load />
</BaseLayout>
```

### 2. Adding Navigation Items

```tsx
// In src/components/layout/Header.tsx
const navigationItems = [
  {
    label: currentLanguage === 'no' ? 'Norsk Label' : 'English Label',
    href: `/${currentLanguage}/new-page`, // Always use /${currentLanguage}/
    hasDropdown: false,
  },
  // ... existing items
];
```

### 3. Creating Responsive Components

```tsx
export const ResponsiveSection: React.FC<Props> = ({ title, content }) => {
  return (
    <section className="
      py-12 sm:py-16 lg:py-20                    // Responsive spacing
      px-4 sm:px-6 lg:px-8                      // Responsive padding
    ">
      <div className="max-w-7xl mx-auto">
        <h2 className="
          text-2xl sm:text-3xl lg:text-4xl       // Responsive typography
          font-heading text-praxis-dark-blue
          mb-6 sm:mb-8 lg:mb-12                  // Responsive margins
        ">
          {title}
        </h2>
        <div className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  // Responsive grid
          gap-6 sm:gap-8 lg:gap-12                        // Responsive gaps
        ">
          {content}
        </div>
      </div>
    </section>
  );
};
```

### 4. Form Handling with Validation

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const ContactForm: React.FC<Props> = ({ currentLanguage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          {currentLanguage === 'no' ? 'E-post' : 'Email'}
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-praxis-gray"
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-600">
            {errors.email.message}
          </p>
        )}
      </div>
    </form>
  );
};
```

---

## Conclusion

This tech brief establishes the foundation for consistent, maintainable, and performant development on the Praxis Navigator website. All developers should familiarize themselves with these standards and refer to this document when implementing new features or making changes.

### Key Takeaways

1. **Always use explicit language prefixes** (`/en/`, `/no/`) for navigation
2. **Follow the established i18n patterns** for new pages and components
3. **Maintain accessibility standards** in all implementations
4. **Optimize for performance** with every change
5. **Test thoroughly** across languages and devices
6. **Follow TypeScript best practices** for type safety

### Support and Questions

For questions about these standards or implementation details:
1. Check existing code examples in the codebase
2. Review this tech brief
3. Consult with the development team
4. Refer to official Astro documentation

---

**Last Updated:** August 21, 2025  
**Next Review:** September 21, 2025
