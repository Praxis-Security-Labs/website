# Data Models

**Status**: Approved  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Last Updated**: 2025-08-20

## 📋 Overview

This document defines the minimal data structures needed for the Praxis Navigator promotional website. Following KISS principles, most form handling is delegated to HubSpot, significantly reducing custom data modeling requirements.

## 🗂️ Core Data Models

### Content Models

**Purpose**: Structure for CMS-managed content (pages, posts, resources)

**Key Attributes**:
- `id`: string - Unique content identifier
- `title`: string - Display title
- `slug`: string - URL-friendly identifier
- `content`: RichText - Structured content body
- `meta`: SEOMeta - SEO metadata
- `publishedAt`: Date - Publication timestamp
- `locale`: 'en' | 'no' - Language identifier
- `status`: 'draft' | 'published' - Content status

#### TypeScript Interface

```typescript
interface ContentModel {
  id: string;
  title: string;
  slug: string;
  content: RichText;
  meta: SEOMeta;
  publishedAt: Date;
  locale: 'en' | 'no';
  status: 'draft' | 'published';
}

interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

interface RichText {
  type: 'markdown' | 'html';
  content: string;
  excerpt?: string;
}
```

#### Zod Validation Schema

```typescript
import { z } from 'zod';

const ContentModelSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1).max(200),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  content: z.object({
    type: z.enum(['markdown', 'html']),
    content: z.string().min(1),
    excerpt: z.string().optional(),
  }),
  meta: z.object({
    title: z.string().min(1).max(60),
    description: z.string().min(1).max(160),
    keywords: z.array(z.string()).max(10),
    ogImage: z.string().url().optional(),
    canonicalUrl: z.string().url().optional(),
  }),
  publishedAt: z.date(),
  locale: z.enum(['en', 'no']),
  status: z.enum(['draft', 'published']),
});
```

### Lead Data Models (HubSpot Managed)

**Purpose**: Structure for HubSpot form integration (reference only - handled externally)

**Key Attributes**:
- Forms managed entirely by HubSpot
- Automatic CRM integration
- No custom validation needed
- Direct lead scoring and workflows

#### TypeScript Interface (Reference Only)

```typescript
// HubSpot handles all form data
// These interfaces are for TypeScript reference only
interface HubSpotFormSubmission {
  formId: string;
  portalId: string;
  fields: {
    name: string;
    value: string;
  }[];
  context: {
    pageUri: string;
    pageName: string;
    hutk?: string; // HubSpot tracking cookie
  };
}

interface HubSpotFormConfig {
  formId: string;
  portalId: string;
  target: string; // CSS selector for form container
  onFormSubmit?: () => void;
  onFormReady?: () => void;
}
```

**Note**: No custom validation schemas needed - HubSpot handles all form processing, validation, and CRM integration.

### User Session Models (Simplified)

**Purpose**: Minimal client-side state for preferences and navigation

**Key Attributes**:
- `sessionId`: string - Simple session identifier (client-generated)
- `preferences`: UserPreferences - Language and theme only
- `journey`: UserJourney[] - Basic page tracking for analytics

#### TypeScript Interface

```typescript
interface UserSession {
  sessionId: string;
  preferences: {
    language: 'en' | 'no';
    theme: 'light' | 'dark' | 'auto';
  };
  journey: UserJourney[];
  createdAt: Date;
}

interface UserJourney {
  page: string;
  timestamp: Date;
  source?: string;
}
```

**Note**: No authentication state needed - promotional site never handles user authentication.

## 🎯 Specialized Data Models

### Navigation Models

**Purpose**: Define site navigation structure and menu items

#### TypeScript Interface

```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  segment?: UserSegment[];
  children?: NavigationItem[];
  icon?: string;
  description?: string;
}

interface Navigation {
  primary: NavigationItem[];
  secondary: NavigationItem[];
  footer: NavigationItem[];
  mobile: NavigationItem[];
}
```

### Component State Models

**Purpose**: TypeScript interfaces for React component props and state

#### TypeScript Interface

```typescript
interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage?: string;
  segment: UserSegment;
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  ctaText?: string;
  ctaHref?: string;
}

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatar?: string;
  rating?: number;
}
```

### Form Models (HubSpot Integration)

**Purpose**: TypeScript interfaces for HubSpot form integration

#### TypeScript Interface

```typescript
// Simplified form props for HubSpot integration
interface HubSpotFormProps {
  formId: string;
  onFormSubmit?: () => void;
  onFormReady?: () => void;
  className?: string;
}

// Contact form configuration
interface ContactFormConfig {
  formId: string; // HubSpot form ID
  portalId: string; // HubSpot portal ID
  target: string; // Where to render the form
}

// Demo request form configuration  
interface DemoFormConfig {
  formId: string; // Different HubSpot form ID for demo requests
  portalId: string;
  target: string;
}
```

**Note**: No validation schemas needed - HubSpot handles all form validation and processing.

## 🔄 Data Flow Patterns (Simplified)

### State Management Flow

```typescript
// Minimal Zustand store for basic preferences
interface AppStore {
  preferences: {
    language: 'en' | 'no';
    theme: 'light' | 'dark' | 'auto';
  };
  
  // Simple actions
  setLanguage: (language: 'en' | 'no') => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
}
```

### HubSpot Integration Flow

```typescript
// HubSpot form integration pattern
interface HubSpotIntegration {
  loadForm: (config: HubSpotFormConfig) => void;
  trackFormView: (formId: string) => void;
  onFormSubmit: (callback: () => void) => void;
}

// Example usage
const hubspotForms = {
  contact: { formId: 'contact-form-id', portalId: 'your-portal-id' },
  demo: { formId: 'demo-form-id', portalId: 'your-portal-id' },
};
```

## 📊 Data Persistence Patterns (Simplified)

### Local Storage Only

```typescript
// Minimal local storage for user preferences
interface LocalStorageState {
  sessionId: string;
  preferences: {
    language: 'en' | 'no';
    theme: 'light' | 'dark' | 'auto';
  };
  journey: UserJourney[];
}
```

**Note**: No server-side storage needed - HubSpot handles all form data persistence.

## 🌐 Internationalization Models

### Translation Data

```typescript
interface TranslationKey {
  en: string;
  no: string;
}

interface Translations {
  navigation: {
    home: TranslationKey;
    features: TranslationKey;
    pricing: TranslationKey;
    about: TranslationKey;
    contact: TranslationKey;
  };
  hero: {
    title: TranslationKey;
    subtitle: TranslationKey;
    cta: TranslationKey;
  };
  forms: {
    firstName: TranslationKey;
    lastName: TranslationKey;
    email: TranslationKey;
    company: TranslationKey;
    submit: TranslationKey;
  };
}
```

## 🔒 Authentication Models (No Local Auth)

### Azure AD B2B Redirect Only

```typescript
// No local authentication data stored
// Simple redirect URL construction
interface AuthRedirect {
  loginUrl: string; // https://login.microsoftonline.com/organizations/...
  redirectUri: string; // https://app.praxisnavigator.io
  clientId: string; // Azure AD app client ID
}
```

**Note**: Promotional site never stores authentication data - only constructs redirect URLs.

## 📈 Analytics Models (Simplified)

```typescript
// Basic page tracking only
interface PageView {
  page: string;
  timestamp: Date;
  sessionId: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
  };
}

// HubSpot tracking handled automatically
interface HubSpotTracking {
  hutk: string; // HubSpot user token (handled by HubSpot script)
  formId: string; // Form submission tracking
  pageUri: string; // Current page URL
}
```

**Note**: Most analytics handled by Cloudflare Web Analytics and HubSpot's built-in tracking.

## 🔗 Related Documentation

- [HubSpot Integration](../operations/hubspot-setup.md) - HubSpot form configuration and setup
- [Frontend Components](../frontend/component-architecture.md) - React component implementation
- [Static Content](../frontend/content-management.md) - Astro content handling
- [Deployment](../operations/deployment.md) - Simple static site deployment

---

*This simplified data model eliminates custom backend complexity by leveraging HubSpot for all form processing and CRM integration, following KISS principles for maximum maintainability.*
