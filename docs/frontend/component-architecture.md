# Frontend Component Architecture

**Status**: Approved  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Last Updated**: 2025-08-20

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
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── Layout.astro
│   ├── sections/         # Page section components
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Testimonials.astro
│   │   └── CTA.astro
│   ├── ui/              # Reusable UI components
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Icon.astro
│   │   └── Badge.astro
│   ├── forms/           # Interactive form components (React)
│   │   ├── HubSpotForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── DemoRequestForm.tsx
│   └── widgets/         # Interactive widgets (React)
│       ├── LanguageToggle.tsx
│       ├── ThemeToggle.tsx
│       └── Analytics.tsx
└── layouts/
    └── BaseLayout.astro
```

## 🧩 Core Components

### Layout Components (Astro)

#### BaseLayout.astro
```astro
---
interface Props {
  title: string;
  description: string;
  lang?: 'en' | 'no';
  ogImage?: string;
}

const { title, description, lang = 'en', ogImage } = Astro.props;
---

<!DOCTYPE html>
<html lang={lang}>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <meta name="description" content={description}>
  {ogImage && <meta property="og:image" content={ogImage}>}
  
  <!-- Praxis Design System CSS -->
  <link rel="stylesheet" href="/styles/praxis-theme.css">
  
  <!-- HubSpot Tracking Script -->
  <script type="text/javascript" id="hs-script-loader" 
          async defer src="//js.hsforms.net/forms/v2.js"></script>
</head>
<body class="bg-praxis-bg text-praxis-text">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
  
  <!-- Analytics Island -->
  <Analytics client:load />
</body>
</html>
```

#### Header.astro
```astro
---
import Navigation from './Navigation.astro';
import LanguageToggle from '../widgets/LanguageToggle.tsx';
---

<header class="bg-praxis-primary text-white sticky top-0 z-50">
  <div class="container mx-auto px-4 py-4">
    <div class="flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center space-x-2">
        <img src="/logo-white.svg" alt="Praxis Navigator" class="h-8 w-auto">
        <span class="text-xl font-bold">Praxis Navigator</span>
      </a>
      
      <!-- Navigation -->
      <Navigation />
      
      <!-- Controls -->
      <div class="flex items-center space-x-4">
        <LanguageToggle client:load />
        <a href="/auth/login" 
           class="btn-secondary">
          Get Started
        </a>
      </div>
    </div>
  </div>
</header>
```

### Section Components (Astro)

#### Hero.astro
```astro
---
interface Props {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
  segment: 'security-leaders' | 'executives' | 'managers' | 'sat-teams';
}

const { title, subtitle, ctaText, ctaHref, backgroundImage, segment } = Astro.props;
---

<section class="hero-section relative min-h-screen flex items-center justify-center">
  {backgroundImage && (
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
         style={`background-image: url(${backgroundImage})`}></div>
  )}
  
  <div class="relative z-10 container mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-7xl font-bold mb-6 text-praxis-primary">
      {title}
    </h1>
    
    <p class="text-xl md:text-2xl mb-8 text-praxis-secondary max-w-3xl mx-auto">
      {subtitle}
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={ctaHref} 
         class="btn-primary text-lg px-8 py-4"
         data-segment={segment}>
        {ctaText}
      </a>
      
      <a href="/demo" 
         class="btn-secondary text-lg px-8 py-4">
        Watch Demo
      </a>
    </div>
  </div>
</section>
```

#### Features.astro
```astro
---
import FeatureCard from '../ui/FeatureCard.astro';

interface Feature {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

interface Props {
  title: string;
  features: Feature[];
}

const { title, features } = Astro.props;
---

<section class="py-20 bg-praxis-bg-alt">
  <div class="container mx-auto px-4">
    <h2 class="text-4xl font-bold text-center mb-16 text-praxis-primary">
      {title}
    </h2>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard 
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          benefits={feature.benefits}
        />
      ))}
    </div>
  </div>
</section>
```

### UI Components (Astro)

#### FeatureCard.astro
```astro
---
interface Props {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  ctaText?: string;
  ctaHref?: string;
}

const { title, description, icon, benefits, ctaText, ctaHref } = Astro.props;
---

<div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
  <div class="flex items-center mb-4">
    <div class="w-12 h-12 bg-praxis-primary rounded-lg flex items-center justify-center mr-4">
      <i class={`${icon} text-white text-xl`}></i>
    </div>
    <h3 class="text-xl font-semibold text-praxis-primary">{title}</h3>
  </div>
  
  <p class="text-praxis-text mb-4">{description}</p>
  
  <ul class="space-y-2 mb-6">
    {benefits.map((benefit) => (
      <li class="flex items-center text-sm text-praxis-secondary">
        <i class="fas fa-check text-praxis-accent mr-2"></i>
        {benefit}
      </li>
    ))}
  </ul>
  
  {ctaText && ctaHref && (
    <a href={ctaHref} class="btn-outline w-full">
      {ctaText}
    </a>
  )}
</div>
```

#### Button.astro
```astro
---
interface Props {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  class?: string;
}

const { 
  variant = 'primary', 
  size = 'md', 
  href, 
  type = 'button',
  disabled = false,
  class: className = ''
} = Astro.props;

const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variantClasses = {
  primary: 'bg-praxis-primary text-white hover:bg-praxis-primary-dark focus:ring-praxis-primary',
  secondary: 'bg-praxis-secondary text-white hover:bg-praxis-secondary-dark focus:ring-praxis-secondary',
  outline: 'border-2 border-praxis-primary text-praxis-primary hover:bg-praxis-primary hover:text-white',
  ghost: 'text-praxis-primary hover:bg-praxis-primary hover:bg-opacity-10'
};

const sizeClasses = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
---

{href ? (
  <a href={href} class={classes}>
    <slot />
  </a>
) : (
  <button type={type} disabled={disabled} class={classes}>
    <slot />
  </button>
)}
```

## 🚀 Interactive Components (React Islands)

### HubSpot Form Integration

#### HubSpotForm.tsx
```typescript
import React, { useEffect, useRef } from 'react';

interface HubSpotFormProps {
  formId: string;
  portalId: string;
  onFormSubmit?: () => void;
  onFormReady?: () => void;
  className?: string;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({
  formId,
  portalId,
  onFormSubmit,
  onFormReady,
  className = ''
}) => {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current && window.hbspt) {
      window.hbspt.forms.create({
        portalId: portalId,
        formId: formId,
        target: formRef.current,
        onFormSubmit: () => {
          // Track conversion
          if (window.gtag) {
            window.gtag('event', 'conversion', {
              send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL'
            });
          }
          onFormSubmit?.();
        },
        onFormReady: onFormReady,
        css: '',  // Use our custom CSS instead
      });
    }
  }, [formId, portalId, onFormSubmit, onFormReady]);

  return (
    <div 
      ref={formRef} 
      className={`hubspot-form ${className}`}
    />
  );
};

export default HubSpotForm;
```

#### ContactForm.tsx
```typescript
import React from 'react';
import HubSpotForm from './HubSpotForm';

interface ContactFormProps {
  segment: 'security-leaders' | 'executives' | 'managers' | 'sat-teams';
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ segment, className }) => {
  const handleFormSubmit = () => {
    // Track form submission by segment
    if (window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'engagement',
        event_label: `contact_${segment}`,
        value: 1
      });
    }
    
    // Show thank you message
    setTimeout(() => {
      window.location.href = '/thank-you';
    }, 1000);
  };

  return (
    <div className={`contact-form ${className}`}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-praxis-primary mb-2">
          Get in Touch
        </h3>
        <p className="text-praxis-secondary">
          Ready to transform your security assessment process? Let's talk.
        </p>
      </div>
      
      <HubSpotForm
        formId="contact-form-id"
        portalId="your-portal-id"
        onFormSubmit={handleFormSubmit}
        className="praxis-form"
      />
    </div>
  );
};

export default ContactForm;
```

### Language and Theme Toggles

#### LanguageToggle.tsx
```typescript
import React, { useState, useEffect } from 'react';
import { useStore } from '../store/appStore';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useStore();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (newLang: 'en' | 'no') => {
    setLanguage(newLang);
    setIsOpen(false);
    
    // Update URL if using language-based routing
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|no)/, `/${newLang}`);
    window.history.pushState({}, '', newPath);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-praxis-accent transition-colors"
      >
        <i className="fas fa-globe"></i>
        <span className="uppercase">{language}</span>
        <i className={`fas fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[100px]">
          <button
            onClick={() => toggleLanguage('en')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
              language === 'en' ? 'text-praxis-primary font-medium' : 'text-gray-700'
            }`}
          >
            English
          </button>
          <button
            onClick={() => toggleLanguage('no')}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 ${
              language === 'no' ? 'text-praxis-primary font-medium' : 'text-gray-700'
            }`}
          >
            Norsk
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
```

## 🎨 Design System Integration

### Praxis Theme Configuration

#### tailwind.config.js
```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        praxis: {
          primary: '#1B365D',
          'primary-dark': '#0F1B2E',
          secondary: '#2E5984',
          'secondary-dark': '#1E3A56',
          accent: '#FF6B35',
          'accent-light': '#FF8A65',
          bg: '#FFFFFF',
          'bg-alt': '#F8FAFC',
          text: '#1F2937',
          'text-light': '#6B7280',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### Component CSS Classes

#### Button Styles
```css
/* Button component classes */
.btn-primary {
  @apply bg-praxis-primary text-white hover:bg-praxis-primary-dark 
         focus:ring-2 focus:ring-praxis-primary focus:ring-offset-2
         px-4 py-2 rounded-lg font-medium transition-colors;
}

.btn-secondary {
  @apply bg-praxis-secondary text-white hover:bg-praxis-secondary-dark
         focus:ring-2 focus:ring-praxis-secondary focus:ring-offset-2
         px-4 py-2 rounded-lg font-medium transition-colors;
}

.btn-outline {
  @apply border-2 border-praxis-primary text-praxis-primary 
         hover:bg-praxis-primary hover:text-white
         focus:ring-2 focus:ring-praxis-primary focus:ring-offset-2
         px-4 py-2 rounded-lg font-medium transition-colors;
}
```

#### HubSpot Form Styling
```css
/* HubSpot form customization */
.hubspot-form .hs-form {
  @apply space-y-4;
}

.hubspot-form .hs-form-field > label {
  @apply block text-sm font-medium text-praxis-text mb-1;
}

.hubspot-form .hs-input {
  @apply w-full px-3 py-2 border border-praxis-border rounded-lg
         focus:ring-2 focus:ring-praxis-primary focus:border-transparent
         transition-colors;
}

.hubspot-form .hs-button {
  @apply btn-primary w-full;
}

.hubspot-form .hs-error-msg {
  @apply text-red-600 text-sm mt-1;
}
```

## 📱 Responsive Design Patterns

### Mobile-First Approach
```astro
<!-- Mobile-first responsive hero -->
<section class="
  px-4 py-12           /* Mobile: compact spacing */
  md:px-8 md:py-20     /* Tablet: medium spacing */
  lg:px-16 lg:py-32    /* Desktop: generous spacing */
">
  <h1 class="
    text-3xl             /* Mobile: readable size */
    md:text-5xl          /* Tablet: larger impact */
    lg:text-7xl          /* Desktop: maximum impact */
    font-bold text-center
  ">
    Transform Security Assessments
  </h1>
</section>
```

### Grid System
```astro
<!-- Responsive feature grid -->
<div class="
  grid gap-6
  grid-cols-1          /* Mobile: single column */
  md:grid-cols-2       /* Tablet: two columns */
  lg:grid-cols-3       /* Desktop: three columns */
  xl:grid-cols-4       /* Large: four columns */
">
  {features.map(feature => <FeatureCard {...feature} />)}
</div>
```

## 🔗 Related Documentation

- [State Management](./state-management.md) - Zustand store implementation
- [Routing](./routing.md) - Astro routing and navigation
- [Design System](./design-system.md) - Praxis design tokens and components
- [Performance](./performance.md) - Optimization and Core Web Vitals

---

*This component architecture balances static performance with selective interactivity, following Astro's islands architecture while maintaining strict adherence to the Praxis Design System.*
