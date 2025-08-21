# Frontend Component Architecture

**Status**: Updated  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Last Updated**: 2025-08-21

## 📋 Overview

This document outlines the frontend component architecture for the Praxis Navigator promotional website, built with Astro and React islands for optimal performance and developer experience.

## 🏗️ Architecture Philosophy

### Astro Islands Architecture
- **Static First**: Generate static HTML for maximum performance
- **Selective Hydration**: Only hydrate interactive components
- **Zero JavaScript by Default**: Ship only the JavaScript you need
- **Framework Agnostic**: Use React where needed, plain HTML elsewhere

### Component Strategy
- **Content Components**: Static Astro components for content
- **Interactive Islands**: React components for forms and dynamic behavior
- **Design System**: Praxis-themed Tailwind components
- **Reusable Patterns**: Shared component library

## 🎯 Component Hierarchy

```
src/
├── components/
│   ├── layout/           # Layout and navigation components
│   │   ├── Header.tsx    # React component for navigation
│   │   ├── Footer.tsx    # React component for footer
│   │   └── Navigation.tsx (if separate)
│   ├── sections/         # Page section components (React)
│   │   ├── HeroSection.tsx
│   │   ├── AboutHeroSection.tsx
│   │   ├── PricingHeroSection.tsx
│   │   ├── FeatureComparisonSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── [Various specialized sections]
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── [Other UI components]
│   └── forms/           # Form components with validation
│       ├── EnterpriseContactSection.tsx
│       ├── SecurityLeadersContactSection.tsx
│       └── ComplianceContactSection.tsx
├── layouts/
│   └── BaseLayout.astro  # Main layout component
├── pages/               # File-based routing with i18n
│   ├── index.astro      # Root redirect page
│   ├── 404.astro        # Error page
│   ├── api/             # API endpoints
│   ├── en/              # English pages
│   │   ├── about/
│   │   ├── product/
│   │   ├── segments/
│   │   ├── pricing.astro
│   │   └── contact/
│   └── no/              # Norwegian pages (mirrors en/)
│       ├── about/
│       ├── product/
│       ├── segments/
│       ├── pricing.astro
│       └── contact/
├── i18n/               # Internationalization
│   ├── ui.ts           # Translation strings
│   └── utils.ts        # i18n utility functions
├── utils/              # Utility functions
│   ├── msal-auth.ts    # Azure authentication
│   ├── analytics.js    # Analytics utilities
│   ├── performance.js  # Performance monitoring
│   └── sentry.js       # Error tracking
└── styles/
    └── globals.css     # Global CSS with Tailwind
```

## 🧩 Core Components

### Layout Components

#### BaseLayout.astro
The main layout component handling SEO, meta tags, language detection, and i18n routing.

```astro
---
export interface Props {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
  lang?: string;
  structuredData?: Record<string, unknown>;
  pageType?: 'homepage' | 'content' | 'segment' | 'product' | 'contact' | 'about' | 'resources' | 'compliance' | 'segment-index';
}

const {
  title,
  description = 'Default description...',
  keywords = 'default, keywords',
  ogImage = '/images/og-praxis-navigator-default.png',
  ogType = 'website',
  canonicalUrl,
  noIndex = false,
  lang = 'en',
  structuredData,
  pageType = 'content',
} = Astro.props;

// Get current path for navigation
const currentPath = Astro.url.pathname;

// Determine language from path or lang prop
const isNorwegian = lang === 'no' || currentPath.startsWith('/no');
const currentLanguage = isNorwegian ? 'no' : 'en';
---

<!doctype html>
<html lang={currentLanguage} class="h-full">
<head>
  <!-- Comprehensive SEO and meta tags -->
  <!-- Language alternate URLs for i18n -->
  <!-- Performance optimizations -->
  <!-- Analytics and monitoring -->
</head>
<body>
  <Header currentPath={currentPath} currentLanguage={currentLanguage} client:load />
  <main id="main-content" class="flex-grow" role="main" tabindex="-1">
    <slot />
  </main>
  <Footer currentLanguage={currentLanguage} />
</body>
</html>
```

#### Header.tsx (React Component)
Language-aware navigation with explicit URL prefixes for both languages.

```tsx
interface HeaderProps {
  currentPath?: string;
  currentLanguage?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath = '/',
  currentLanguage = 'en',
}) => {
  // Navigation items with consistent language prefixes
  const navigationItems = [
    {
      label: currentLanguage === 'no' ? 'Produkt' : 'Product',
      href: `/${currentLanguage}/product`,
      hasDropdown: true,
    },
    {
      label: currentLanguage === 'no' ? 'For Din Rolle' : 'For Your Role',
      href: `/${currentLanguage}/segments`,
      hasDropdown: true,
    },
    // ... more items with CONSISTENT /${currentLanguage}/ pattern
  ];

  // Context-aware language switching
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

  return (
    <header className="bg-praxis-dark-blue border-b border-praxis-dark-blue-600">
      {/* Navigation implementation */}
    </header>
  );
};
```

### Section Components (React)

Page sections are implemented as React components for consistent props handling and interactivity.

#### HeroSection.tsx
```tsx
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  currentLanguage?: 'en' | 'no';
  backgroundImage?: string;
  segment?: 'security-leaders' | 'executives' | 'managers' | 'sat-teams';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaHref,
  currentLanguage = 'en',
  backgroundImage,
  segment
}) => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-praxis-dark-blue">
          {title}
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-praxis-blue max-w-3xl mx-auto">
          {subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={ctaHref} 
            className="btn-primary text-lg px-8 py-4"
            data-segment={segment}
          >
            {ctaText}
          </a>
          
          <a 
            href={`/${currentLanguage}/contact`} 
            className="btn-secondary text-lg px-8 py-4"
          >
            {currentLanguage === 'no' ? 'Kontakt Demo' : 'Request Demo'}
          </a>
        </div>
      </div>
    </section>
  );
};
```

#### Contact Forms with Validation
Contact forms use react-hook-form with Zod validation:

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name required'),
  message: z.string().min(10, 'Please provide more details'),
});

export const EnterpriseContactSection: React.FC<Props> = ({ currentLanguage }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Handle form submission to API endpoint
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        // Success handling
      }
    } catch (error) {
      // Error handling
    }
  };

  return (
    <section className="py-16 bg-praxis-white">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Form fields with error handling */}
      </form>
    </section>
  );
};
```

## 🌐 Internationalization (i18n) Architecture

### **CRITICAL: Folder-Based Routing with Explicit Language Prefixes**

Our i18n implementation uses explicit language prefixes for ALL pages:

```
src/pages/
├── index.astro           # Root redirect to default language
├── 404.astro            # Error page
├── api/                 # API endpoints
├── en/                  # English pages (/en/*)
│   ├── about/
│   ├── product/
│   ├── segments/
│   ├── pricing.astro
│   └── contact/
└── no/                  # Norwegian pages (/no/*)
    ├── about/           # Mirrors en/ structure
    ├── product/
    ├── segments/
    ├── pricing.astro
    └── contact/
```

### URL Pattern Standards
- **English:** `/en/path` (explicit prefix required)
- **Norwegian:** `/no/path` (explicit prefix required)
- **Root:** `/` redirects to `/en/` (default language)

### Language Detection in BaseLayout
```astro
---
// Language detection from URL path
const currentPath = Astro.url.pathname;
const isNorwegian = lang === 'no' || currentPath.startsWith('/no');
const currentLanguage = isNorwegian ? 'no' : 'en';
---
```

### Navigation Links Requirements
**MANDATORY:** All navigation links must use `/${currentLanguage}/` pattern:

```tsx
// ✅ CORRECT - Consistent language prefixes
const navigationItems = [
  {
    label: currentLanguage === 'no' ? 'Produkt' : 'Product',
    href: `/${currentLanguage}/product`,
  },
  {
    label: currentLanguage === no' ? 'For Din Rolle' : 'For Your Role',
    href: `/${currentLanguage}/segments`,
  },
];

// ❌ WRONG - Conditional logic creates inconsistency
href: `/${currentLanguage === 'no' ? 'no/' : ''}product`
```

### Translation System
```typescript
// src/i18n/ui.ts
export const languages = {
  en: 'English',
  no: 'Norsk',
};

export const defaultLang = 'en';

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
import { useTranslations } from '../../i18n/utils';
const t = useTranslations(currentLanguage);
```

## 🚀 Interactive Components (React Islands)

### Authentication Integration

#### MSAL (Microsoft Authentication Library)
```tsx
// src/utils/msal-auth.ts
import { PublicClientApplication } from '@azure/msal-browser';

export const loginWithAzureAD = async () => {
  // Azure AD login implementation
};

export const redirectToPraxisApp = (path: string) => {
  // Redirect to main application
};

// Usage in Header component
const handleLogin = async () => {
  if (isMsalConfigured()) {
    try {
      await loginWithAzureAD();
    } catch (error) {
      redirectToPraxisApp('/login');
    }
  } else {
    redirectToPraxisApp('/login');
  }
};
```

### Form Components with Validation

## 🎨 Design System Integration

### Praxis Theme Configuration

#### tailwind.config.js
```javascript
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './layouts/**/*.{js,ts,jsx,tsx,vue}',
    './src/**/*.{js,ts,jsx,tsx,vue,astro}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Blues
        'praxis-dark-blue': {
          DEFAULT: '#013E75',
          50: '#E6EEF5',
          100: '#CCDCEB',
          200: '#99B9D7',
          300: '#6696C3',
          400: '#3373AF',
          500: '#013E75',
          600: '#013264',
          700: '#012653',
          800: '#011A42',
          900: '#000E31'
        },
        'praxis-blue': {
          DEFAULT: '#0071B3',
          50: '#E6F2F9',
          100: '#CCE5F3',
          200: '#99CBE7',
          300: '#66B1DB',
          400: '#3397CF',
          500: '#0071B3',
          600: '#005B91',
          700: '#00456F',
          800: '#002F4D',
          900: '#00192B'
        },
        'praxis-sky': {
          DEFAULT: '#00A5DB',
          50: '#E6F5FB',
          100: '#CCEBF7',
          200: '#99D7EF',
          300: '#66C3E7',
          400: '#33AFDF',
          500: '#00A5DB',
          600: '#0085B2',
          700: '#006589',
          800: '#004560',
          900: '#002537'
        },
        // Warm Accents
        'praxis-gold': {
          DEFAULT: '#DFB03C',
          50: '#FAF6EA',
          100: '#F5EDD5',
          200: '#EBDBAB',
          300: '#E1C981',
          400: '#D7B757',
          500: '#DFB03C',
          600: '#C89A30',
          700: '#A17D26',
          800: '#7A5F1D',
          900: '#534113'
        },
        // Additional colors...
        'praxis-black': '#222223',
        'praxis-gray': '#BDBDBD',
        'praxis-white': '#FBFBF9',
      },
      fontFamily: {
        'sans': ['Avenir', 'Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Avenir Black', 'Open Sans', 'system-ui', 'sans-serif'],
        'body': ['Avenir Medium', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'brand-tight': '-0.01em',
        'brand-normal': '0',
        'brand-wide': '0.025em',
        'brand-wider': '0.05em',
        'brand-widest': '0.2em',
      },
      transitionDuration: {
        'brand': '200ms',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
```

### Component CSS Classes

#### Button Styles
```css
/* Design system button classes */
.btn-primary {
  @apply bg-praxis-dark-blue text-white hover:bg-praxis-dark-blue-700 
         focus:ring-2 focus:ring-praxis-dark-blue focus:ring-offset-2
         px-4 py-2 rounded-lg font-medium transition-brand;
}

.btn-secondary {
  @apply bg-praxis-blue text-white hover:bg-praxis-blue-700
         focus:ring-2 focus:ring-praxis-blue focus:ring-offset-2
         px-4 py-2 rounded-lg font-medium transition-brand;
}

.btn-accent {
  @apply bg-praxis-gold text-praxis-dark-blue hover:bg-praxis-gold-600
         focus:ring-2 focus:ring-praxis-gold focus:ring-offset-2
         px-4 py-2 rounded-lg font-medium transition-brand;
}

.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-praxis-gold focus:ring-offset-2;
}

.transition-brand {
  @apply transition-all duration-brand ease-brand;
}
```

## 📱 Responsive Design Patterns

### Mobile-First Approach
```astro
<!-- Mobile-first responsive sections -->
<section className="
  py-12 sm:py-16 lg:py-20                    // Responsive spacing
  px-4 sm:px-6 lg:px-8                      // Responsive padding
">
  <div className="max-w-7xl mx-auto">
    <h1 className="
      text-3xl sm:text-4xl md:text-5xl lg:text-7xl  // Responsive typography
      font-bold text-center mb-6 sm:mb-8 lg:mb-12  // Responsive margins
      text-praxis-dark-blue
    ">
      Transform Security Culture
    </h1>
  </div>
</section>
```

### Grid System
```tsx
<!-- Responsive feature grid -->
<div className="
  grid gap-6 sm:gap-8 lg:gap-12
  grid-cols-1                    // Mobile: single column
  md:grid-cols-2                 // Tablet: two columns
  lg:grid-cols-3                 // Desktop: three columns
  xl:grid-cols-4                 // Large: four columns
">
  {features.map(feature => <FeatureCard key={feature.id} {...feature} />)}
</div>
```

## 🔍 Monitoring and Analytics

### Performance Monitoring
```typescript
// src/utils/performance.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const initializeCoreWebVitals = () => {
  getCLS(sendToAnalytics);
  getFID(sendToAnalytics);
  getFCP(sendToAnalytics);
  getLCP(sendToAnalytics);
  getTTFB(sendToAnalytics);
};

function sendToAnalytics(metric) {
  // Send to analytics service
  if (window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.value),
      non_interaction: true,
    });
  }
}
```

### Error Tracking
```typescript
// src/utils/sentry.js
import * as Sentry from '@sentry/browser';

export const initializeSentry = () => {
  if (import.meta.env.PROD) {
    Sentry.init({
      dsn: import.meta.env.ASTRO_PUBLIC_SENTRY_DSN,
      environment: import.meta.env.MODE,
      tracesSampleRate: 0.1,
    });
  }
};
```

## 🚀 Performance Optimization

### Astro Configuration
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',
  site: 'https://praxisnavigator.io',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
    assets: '_astro',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  vite: {
    build: {
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
          }
        }
      }
    },
  }
});
```

### Component Hydration Strategy
```astro
<!-- Selective hydration based on interaction needs -->
<Header currentPath={currentPath} currentLanguage={currentLanguage} client:load />
<HeroSection title={title} client:idle />
<ContactForm segment="executives" client:visible />
<Footer currentLanguage={currentLanguage} />  <!-- No hydration needed -->
```

## 🔗 Related Documentation

- [Astro Tech Brief](../development/astro-tech-brief.md) - Complete development standards and patterns
- [State Management](./state-management.md) - State management implementation
- [Routing](./routing.md) - i18n routing and navigation patterns
- [Design System](./design-system.md) - Praxis design tokens and components
- [Performance](./performance.md) - Optimization and Core Web Vitals monitoring

## 📋 Component Development Checklist

### For New Components
- [ ] Follow TypeScript interface patterns
- [ ] Include `currentLanguage` prop where needed
- [ ] Use consistent Praxis design system classes
- [ ] Implement proper accessibility (ARIA labels, semantic HTML)
- [ ] Add responsive design patterns
- [ ] Include error boundaries for React components
- [ ] Test in both English and Norwegian contexts

### For Page Components
- [ ] Create both `/en/` and `/no/` versions
- [ ] Use `getLangFromUrl()` for language detection
- [ ] Include proper SEO meta tags via BaseLayout
- [ ] Implement structured data where appropriate
- [ ] Test language switching maintains page context
- [ ] Verify all internal links use language prefixes

### For Navigation Updates
- [ ] Use `/${currentLanguage}/` pattern consistently
- [ ] Update both Header and Footer components
- [ ] Test breadcrumb navigation
- [ ] Verify language switcher functionality
- [ ] Check mobile navigation behavior

---

*This component architecture documentation reflects the current implementation with folder-based i18n routing, React components for interactivity, and the complete Praxis design system integration.*
