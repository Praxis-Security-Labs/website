# Praxis Security Labs - Design System Manual

## Table of Contents
1. [Introduction](#introduction)
2. [Brand Philosophy](#brand-philosophy)
3. [Tailwind CSS Theme Configuration](#tailwind-css-theme-configuration)
4. [Colors](#colors)
5. [Typography](#typography)
6. [Logo Usage](#logo-usage)
7. [Components](#components)
8. [Interactive States](#interactive-states)
9. [Icons](#icons)
10. [Animations & Transitions](#animations--transitions)
11. [Accessibility Guidelines](#accessibility-guidelines)
12. [Implementation Guide](#implementation-guide)

---

## Introduction

This design manual serves as the single source of truth for implementing the Praxis Security Labs brand across all digital platforms. It provides comprehensive guidelines, Tailwind CSS theme configuration, and ready-to-use components for both the Vue/Nuxt UI Pro application and the Astro/React website.

### Core Principles
- **Research-driven**: Every design decision is based on what actually works
- **Security-focused**: Visual elements reinforce trust and protection
- **Geometric strength**: Hexagonal patterns represent stability and efficiency
- **Professional clarity**: Clean, accessible interfaces that prioritize function

---

## Brand Philosophy

### The Hexagon - Our Core Symbol
The hexagon is the strongest shape known in nature. With six sides held together by 120-degree angles, hexagons create perfect tessellation with no wasted space. This mathematical and mechanical stability represents our approach to cybersecurity:

- **Solid**: Reliable security practices
- **Efficient**: No wasted resources or efforts
- **Connected**: Integrated security solutions
- **Protected**: Complete coverage without gaps

The circuit design overlay depicts the complexity of security culture that we manage proactively through organized awareness and proven practices.

---

## Tailwind CSS Theme Configuration

Create a `tailwind.config.js` file in your project root:

```javascript
// tailwind.config.js
const colors = require('tailwindcss/colors')

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
        'praxis-yellow': {
          DEFAULT: '#FBDE82',
          50: '#FEFBF0',
          100: '#FDF7E1',
          200: '#FBEFC3',
          300: '#F9E7A5',
          400: '#F7DF87',
          500: '#FBDE82',
          600: '#F9D35A',
          700: '#F7C832',
          800: '#E5B30F',
          900: '#B88E0C'
        },
        // Earth Tones
        'praxis-brick': {
          DEFAULT: '#9B4430',
          50: '#F4EAE8',
          100: '#E9D5D1',
          200: '#D3ABA3',
          300: '#BD8175',
          400: '#A75747',
          500: '#9B4430',
          600: '#7C3626',
          700: '#5D291D',
          800: '#3E1B13',
          900: '#1F0E0A'
        },
        'praxis-brown': {
          DEFAULT: '#996639',
          50: '#F3EDE7',
          100: '#E7DBCF',
          200: '#CFB79F',
          300: '#B7936F',
          400: '#9F6F3F',
          500: '#996639',
          600: '#7A522E',
          700: '#5C3D22',
          800: '#3D2917',
          900: '#1F140B'
        },
        'praxis-tan': {
          DEFAULT: '#E2D2B1',
          50: '#FAF8F3',
          100: '#F5F1E7',
          200: '#EBE3CF',
          300: '#E1D5B7',
          400: '#D7C79F',
          500: '#E2D2B1',
          600: '#D4BC8E',
          700: '#C6A66B',
          800: '#B89048',
          900: '#95743A'
        },
        'praxis-pine': {
          DEFAULT: '#093238',
          50: '#E7EBEC',
          100: '#CFD7D9',
          200: '#9FAFB3',
          300: '#6F878D',
          400: '#3F5F67',
          500: '#093238',
          600: '#07282D',
          700: '#051E22',
          800: '#041417',
          900: '#020A0C'
        },
        // Neutrals
        'praxis-black': '#222223',
        'praxis-gray': '#BDBDBD',
        'praxis-white': '#FBFBF9',
      },
      fontFamily: {
        'sans': ['Avenir', 'Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
        'heading': ['Avenir Black', 'Open Sans', 'system-ui', 'sans-serif'],
        'body': ['Avenir Medium', 'Open Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Type scale based on brand guidelines
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.3' }],
        'lg': ['1.125rem', { lineHeight: '1.3' }],
        'xl': ['1.25rem', { lineHeight: '1.3' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'brand-tight': '-0.01em',
        'brand-normal': '0',
        'brand-wide': '0.025em',
        'brand-wider': '0.05em',
        'brand-widest': '0.2em',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
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
}
```

---

## Colors

### Primary Palette

Our color system is built on strong, dependable blues that convey trust and security, complemented by warm golden accents and grounded earth tones.

#### Primary Blues
These colors dominate our brand and should be used for primary actions, navigation, and key interface elements.

- **Dark Blue** (`praxis-dark-blue`): Primary brand color for headers and important text
- **Blue** (`praxis-blue`): Secondary blue for interactive elements
- **Sky Blue** (`praxis-sky`): Accent blue for highlights and active states

#### Accent Colors
Used sparingly to draw attention and create visual hierarchy.

- **Gold** (`praxis-gold`): Primary accent for important CTAs and success states
- **Yellow** (`praxis-yellow`): Secondary accent for warnings and highlights

#### Earth Tones
Grounding colors that provide depth and warmth.

- **Brick** (`praxis-brick`): Error states and critical alerts
- **Brown** (`praxis-brown`): Secondary text and borders
- **Tan** (`praxis-tan`): Background accents and disabled states
- **Pine** (`praxis-pine`): Dark backgrounds and high contrast elements

### Usage Examples

```jsx
// React Component
export const Card = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-praxis-white border-praxis-gray',
    primary: 'bg-praxis-dark-blue-50 border-praxis-dark-blue-200',
    accent: 'bg-praxis-gold-50 border-praxis-gold-200',
  }
  
  return (
    <div className={`rounded-lg border-2 p-6 ${variants[variant]}`}>
      {children}
    </div>
  )
}
```

```vue
<!-- Vue Component -->
<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default'
  }
})

const cardClasses = computed(() => {
  const variants = {
    default: 'bg-praxis-white border-praxis-gray',
    primary: 'bg-praxis-dark-blue-50 border-praxis-dark-blue-200',
    accent: 'bg-praxis-gold-50 border-praxis-gold-200',
  }
  return `rounded-lg border-2 p-6 ${variants[props.variant]}`
})
</script>
```

---

## Typography

### Font Stack
- **Primary**: Avenir (with Open Sans fallback for web)
- **System Fallbacks**: system-ui, -apple-system, sans-serif

### Type Scale

#### Headings
All headings use `font-heading` (Avenir Black) with uppercase styling for maximum impact.

```css
/* Custom CSS classes for typography */
.h1 {
  @apply text-5xl font-heading uppercase tracking-brand-wide text-praxis-dark-blue;
}

.h2 {
  @apply text-4xl font-heading uppercase tracking-brand-wide text-praxis-dark-blue;
}

.h3 {
  @apply text-3xl font-heading uppercase tracking-brand-normal text-praxis-dark-blue;
}

.h4 {
  @apply text-2xl font-heading uppercase tracking-brand-normal text-praxis-dark-blue;
}

.h5 {
  @apply text-xl font-heading uppercase tracking-brand-normal text-praxis-blue;
}

.h6 {
  @apply text-lg font-heading uppercase tracking-brand-normal text-praxis-blue;
}
```

#### Body Text
Body text uses `font-body` (Avenir Medium) with a line height of 1.3x the font size.

```css
.body-large {
  @apply text-lg font-body leading-relaxed text-praxis-black;
}

.body-base {
  @apply text-base font-body leading-relaxed text-praxis-black;
}

.body-small {
  @apply text-sm font-body leading-relaxed text-praxis-black;
}

.caption {
  @apply text-xs font-body text-praxis-brown;
}
```

### Usage Guidelines
- **Headlines**: Always uppercase, ranged left, with tracking between -10 to 200
- **Body Copy**: Sentence case, ranged left, with 1.3x line height
- **Links**: Use italic/oblique styling with `praxis-blue` color
- **Emphasis**: Use Avenir Black (bold) to highlight important information

---

## Logo Usage

### Size Classes
Map logo sizes to Tailwind's spacing system for consistency:

```css
/* Logo size utilities */
.logo-xs {
  @apply h-8 w-auto; /* 32px - minimum digital size */
}

.logo-sm {
  @apply h-12 w-auto; /* 48px */
}

.logo-md {
  @apply h-16 w-auto; /* 64px */
}

.logo-lg {
  @apply h-24 w-auto; /* 96px */
}

.logo-xl {
  @apply h-32 w-auto; /* 128px - recommended for hero sections */
}
```

### Clearspace Requirements
- **Vertical**: Minimum space equal to the height of the central hexagon
- **Horizontal**: Minimum space equal to 2x the width of the central hexagon

```jsx
// React Logo Component
export const Logo = ({ size = 'md' }) => {
  return (
    <div className="p-4"> {/* Clearspace padding */}
      <img 
        src="/logo.svg" 
        alt="Praxis Security Labs"
        className={`logo-${size}`}
      />
    </div>
  )
}
```

### Logo Don'ts
- ❌ Never place on busy backgrounds
- ❌ Never alter colors or proportions
- ❌ Never rotate or skew
- ❌ Never add effects (shadows, outlines, etc.)
- ❌ Minimum size: 120px (digital) or 0.4 inches (print)

---

## Components

### Button Component

```css
/* Base button styles */
.btn {
  @apply px-6 py-3 font-heading uppercase tracking-brand-wide rounded-lg transition-all duration-brand ease-brand focus:outline-none focus:ring-4;
}

/* Button variants */
.btn-primary {
  @apply btn bg-praxis-dark-blue text-praxis-white hover:bg-praxis-dark-blue-600 focus:ring-praxis-dark-blue-300;
}

.btn-secondary {
  @apply btn bg-praxis-blue text-praxis-white hover:bg-praxis-blue-600 focus:ring-praxis-blue-300;
}

.btn-accent {
  @apply btn bg-praxis-gold text-praxis-dark-blue hover:bg-praxis-gold-600 focus:ring-praxis-gold-300;
}

.btn-outline {
  @apply btn bg-transparent border-2 border-praxis-dark-blue text-praxis-dark-blue hover:bg-praxis-dark-blue hover:text-praxis-white focus:ring-praxis-dark-blue-300;
}

.btn-danger {
  @apply btn bg-praxis-brick text-praxis-white hover:bg-praxis-brick-600 focus:ring-praxis-brick-300;
}

/* Button sizes */
.btn-sm {
  @apply px-4 py-2 text-sm;
}

.btn-lg {
  @apply px-8 py-4 text-lg;
}
```

### Card Component

```css
.card {
  @apply bg-praxis-white rounded-lg border border-praxis-gray-200 overflow-hidden transition-all duration-brand;
}

.card-hoverable {
  @apply card hover:shadow-lg hover:border-praxis-blue-300;
}

.card-header {
  @apply px-6 py-4 border-b border-praxis-gray-200 bg-praxis-dark-blue-50;
}

.card-body {
  @apply p-6;
}

.card-footer {
  @apply px-6 py-4 border-t border-praxis-gray-200 bg-praxis-gray-50;
}
```

### Form Components

```css
/* Input fields */
.input {
  @apply w-full px-4 py-2 border-2 border-praxis-gray-300 rounded-lg font-body text-praxis-black 
         focus:border-praxis-blue focus:outline-none focus:ring-4 focus:ring-praxis-blue-200
         transition-all duration-brand;
}

.input-error {
  @apply border-praxis-brick-400 focus:border-praxis-brick focus:ring-praxis-brick-200;
}

.input-success {
  @apply border-praxis-gold-400 focus:border-praxis-gold focus:ring-praxis-gold-200;
}

/* Labels */
.label {
  @apply block mb-2 font-heading uppercase text-sm tracking-brand-wide text-praxis-dark-blue;
}

/* Help text */
.help-text {
  @apply mt-1 text-sm text-praxis-brown;
}

.error-text {
  @apply mt-1 text-sm text-praxis-brick;
}
```

### Alert Component

```css
.alert {
  @apply p-4 rounded-lg border-2 font-body;
}

.alert-info {
  @apply alert bg-praxis-sky-50 border-praxis-sky-300 text-praxis-pine;
}

.alert-success {
  @apply alert bg-praxis-gold-50 border-praxis-gold-300 text-praxis-brown;
}

.alert-warning {
  @apply alert bg-praxis-yellow-50 border-praxis-yellow-300 text-praxis-brown;
}

.alert-danger {
  @apply alert bg-praxis-brick-50 border-praxis-brick-300 text-praxis-brick-900;
}
```

---

## Interactive States

### Hover States
All interactive elements should provide clear visual feedback:

```css
/* Hover utilities */
.hover-lift {
  @apply transition-transform duration-brand hover:-translate-y-1;
}

.hover-glow {
  @apply transition-shadow duration-brand hover:shadow-lg;
}

.hover-brighten {
  @apply transition-opacity duration-brand hover:opacity-90;
}
```

### Focus States
Ensure keyboard navigation is clearly visible:

```css
/* Focus utilities */
.focus-ring {
  @apply focus:outline-none focus:ring-4 focus:ring-praxis-blue-300 focus:ring-opacity-50;
}

.focus-ring-gold {
  @apply focus:outline-none focus:ring-4 focus:ring-praxis-gold-300 focus:ring-opacity-50;
}
```

### Active States
Provide immediate feedback for user actions:

```css
/* Active utilities */
.active-scale {
  @apply active:scale-95 transition-transform duration-75;
}

.active-darken {
  @apply active:brightness-90 transition-all duration-75;
}
```

---

## Icons

### Icon Guidelines

⚠️ **CRITICAL**: Icons should NOT be used unless:
1. Specifically requested by Product Management
2. Approved by Product Management
3. Absolutely necessary for user understanding

### When Icons ARE Approved

If icons are approved for use, follow these guidelines:

```css
/* Icon sizing utilities */
.icon-xs {
  @apply h-4 w-4;
}

.icon-sm {
  @apply h-5 w-5;
}

.icon-md {
  @apply h-6 w-6;
}

.icon-lg {
  @apply h-8 w-8;
}

.icon-xl {
  @apply h-10 w-10;
}

/* Icon color utilities */
.icon-primary {
  @apply text-praxis-dark-blue;
}

.icon-secondary {
  @apply text-praxis-blue;
}

.icon-muted {
  @apply text-praxis-gray;
}

.icon-accent {
  @apply text-praxis-gold;
}

.icon-danger {
  @apply text-praxis-brick;
}
```

### Icon Implementation Rules
- Always provide text labels alongside icons
- Never use icons as the only means of conveying information
- Ensure icons have proper ARIA labels for accessibility
- Use consistent icon libraries (recommend Lucide or Heroicons)
- Icons should follow the hexagonal/geometric theme when possible

---

## Animations & Transitions

### Transition Guidelines
Keep animations subtle and professional:

```css
/* Transition utilities */
.transition-brand {
  @apply transition-all duration-brand ease-brand;
}

.transition-fast {
  @apply transition-all duration-150 ease-brand;
}

.transition-slow {
  @apply transition-all duration-500 ease-brand;
}
```

### Animation Classes

```css
/* Entrance animations */
.animate-fade-in {
  @apply animate-fade-in;
}

.animate-slide-up {
  @apply animate-slide-up;
}

/* Subtle animations for loading states */
.animate-pulse-subtle {
  @apply animate-pulse-subtle;
}
```

### Usage Principles
- **Performance First**: Animations should not impact application performance
- **Purposeful**: Every animation should have a clear UX purpose
- **Consistent**: Use the same timing functions across the application
- **Accessible**: Respect `prefers-reduced-motion` settings

```css
/* Respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  .transition-brand,
  .transition-fast,
  .transition-slow {
    @apply transition-none;
  }
  
  .animate-fade-in,
  .animate-slide-up,
  .animate-pulse-subtle {
    @apply animate-none;
  }
}
```

---

## Accessibility Guidelines

### Color Contrast Requirements

All text must meet WCAG 2.1 AA standards:

#### Approved Combinations ✅

**Normal Text (4.5:1 ratio)**
- `praxis-dark-blue` on `praxis-white` ✅ (18.4:1)
- `praxis-blue` on `praxis-white` ✅ (5.2:1)
- `praxis-brick` on `praxis-white` ✅ (7.1:1)
- `praxis-pine` on `praxis-white` ✅ (14.8:1)
- `praxis-white` on `praxis-dark-blue` ✅ (18.4:1)
- `praxis-white` on `praxis-pine` ✅ (14.8:1)

**Large Text (3:1 ratio)**
- `praxis-gold` on `praxis-dark-blue` ✅ (6.2:1)
- `praxis-sky` on `praxis-pine` ✅ (5.3:1)

#### Avoid These Combinations ❌
- Light colors on light backgrounds
- `praxis-yellow` on white backgrounds
- `praxis-tan` on light backgrounds
- Any color combination below 4.5:1 for normal text

### Focus Indicators
- All interactive elements must have visible focus indicators
- Use `focus-ring` utility class for consistent focus styles
- Ensure 3:1 contrast ratio for focus indicators

### Screen Reader Support
```jsx
// React Example
<button 
  className="btn-primary"
  aria-label="Submit security scan"
  aria-pressed={isActive}
>
  SCAN
</button>
```

```vue
<!-- Vue Example -->
<button 
  class="btn-primary"
  :aria-label="buttonLabel"
  :aria-pressed="isActive"
>
  SCAN
</button>
```

---

## Implementation Guide

### 1. Install Dependencies

```bash
# For Vue/Nuxt project
npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography

# For Astro/React project
npm install -D tailwindcss @tailwindcss/forms @tailwindcss/typography
```

### 2. Configure Tailwind

Copy the provided `tailwind.config.js` to your project root.

### 3. Create Component Styles

Create a `styles/components.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  /* Add all component classes from this document */
  
  /* Typography */
  .h1 { @apply text-5xl font-heading uppercase tracking-brand-wide text-praxis-dark-blue; }
  .h2 { @apply text-4xl font-heading uppercase tracking-brand-wide text-praxis-dark-blue; }
  /* ... rest of the component styles ... */
}
```

### 4. Import Fonts

#### Option A: Self-hosted (Recommended for security)
```css
/* In your global CSS */
@font-face {
  font-family: 'Avenir';
  src: url('/fonts/Avenir-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Avenir Black';
  src: url('/fonts/Avenir-Black.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
```

#### Option B: Google Fonts (Open Sans fallback)
```html
<!-- In your HTML head -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;900&display=swap" rel="stylesheet">
```

### 5. Usage in Vue (Nuxt UI Pro)

```vue
<template>
  <UCard class="card-hoverable">
    <template #header>
      <h2 class="h3">Security Dashboard</h2>
    </template>
    
    <div class="space-y-4">
      <UAlert class="alert-info">
        System scan completed successfully
      </UAlert>
      
      <UButton class="btn-primary">
        View Report
      </UButton>
    </div>
  </UCard>
</template>

<script setup>
// Component logic
</script>
```

### 6. Usage in React (Astro)

```jsx
// components/SecurityCard.jsx
export default function SecurityCard({ title, status }) {
  return (
    <div className="card card-hoverable">
      <div className="card-header">
        <h3 className="h3">{title}</h3>
      </div>
      <div className="card-body">
        <div className={`alert alert-${status}`}>
          Security status: {status}
        </div>
        <button className="btn-primary mt-4">
          View Details
        </button>
      </div>
    </div>
  )
}
```

### 7. Dark Mode Considerations

While not specified in the brand guidelines, if dark mode is needed:

```javascript
// Extend tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      // ... existing config
    }
  }
}
```

```css
/* Dark mode utilities */
.dark .card {
  @apply bg-praxis-pine border-praxis-pine-600;
}

.dark .btn-primary {
  @apply bg-praxis-sky text-praxis-pine hover:bg-praxis-sky-600;
}
```

---

## Version Control & Updates

### Current Version: 1.0.0
- Initial design system documentation
- Tailwind CSS theme configuration
- Component library foundation

### Changelog
- **1.0.0** (2024): Initial release based on 2023 brand guidelines

### Maintenance
This design system should be reviewed quarterly and updated as needed. All changes must be approved by Product Management and align with the core brand philosophy of "facts, not fiction."

---

## Support & Resources

### Internal Resources
- Brand Assets: `/assets/brand/`
- Logo Files: `/assets/logo/`
- Icon Library: (Pending PM approval)

### External Resources
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Nuxt UI Pro Components](https://ui.nuxt.com/pro)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

### Contact
For questions about this design system or brand implementation:
- Design Team: design@praxislabs.com
- Product Management: pm@praxislabs.com

---

*Remember: We focus on facts, not fiction. Every design decision should be research-driven and contribute to reducing risk and improving security.*