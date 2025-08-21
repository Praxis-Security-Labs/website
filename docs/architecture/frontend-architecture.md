# Frontend Architecture

## Component Architecture

### Component Organization

```
src/
├── components/
│   ├── ui/                    # Basic UI components (buttons, inputs)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   ├── layout/                # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/              # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AuthoritySection.tsx
│   │   └── SegmentSelector.tsx
│   ├── forms/                 # Form components
│   │   ├── DemoRequestForm.tsx
│   │   ├── ContactForm.tsx
│   │   └── TrialSignupForm.tsx
│   └── islands/               # Interactive islands
│       ├── LoginButton.tsx
│       ├── LanguageSwitcher.tsx
│       └── FormHandler.tsx
├── pages/                     # Astro pages
├── layouts/                   # Astro layouts
├── styles/                    # CSS and styling
└── utils/                     # Utility functions
```

### Component Template

```typescript
// Example: DemoRequestForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { demoRequestSchema, type DemoRequest } from '@/types/forms';

interface DemoRequestFormProps {
  segment: 'security-leaders' | 'executives' | 'managers' | 'sat-teams';
  utm?: UTMParameters;
}

export function DemoRequestForm({ segment, utm }: DemoRequestFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<DemoRequest>({
    resolver: zodResolver(demoRequestSchema)
  });

  const onSubmit = async (data: DemoRequest) => {
    const response = await fetch('/api/forms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, segment, utm, type: 'demo' })
    });
    
    if (response.ok) {
      // Handle success
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        {...register('contact.firstName')}
        label="First Name"
        required
        error={errors.contact?.firstName?.message}
      />
      <Input
        {...register('contact.lastName')}
        label="Last Name"
        required
        error={errors.contact?.lastName?.message}
      />
      <Input
        {...register('contact.email')}
        label="Email"
        type="email"
        required
        error={errors.contact?.email?.message}
      />
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Scheduling...' : 'Schedule Executive Demo'}
      </Button>
    </form>
  );
}
```

## State Management Architecture

### State Structure

```typescript
// stores/uiStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UIState {
  language: 'en' | 'no';
  segment: 'security-leaders' | 'executives' | 'managers' | 'sat-teams' | null;
  utm: UTMParameters | null;
  setLanguage: (language: 'en' | 'no') => void;
  setSegment: (segment: string) => void;
  setUTM: (utm: UTMParameters) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      language: 'en',
      segment: null,
      utm: null,
      setLanguage: (language) => set({ language }),
      setSegment: (segment) => set({ segment }),
      setUTM: (utm) => set({ utm }),
    }),
    {
      name: 'praxis-ui-storage',
      partialize: (state) => ({ language: state.language, segment: state.segment })
    }
  )
);
```

**Key Features**:
- **UI State Persistence**: Language and segment preferences across sessions  
- **UTM Tracking**: Campaign attribution and analytics data
- **Form State**: Temporary form data and validation states
- **Error Handling**: Global error state management

### State Management Patterns

- **Persistent Auth State**: User authentication persisted across sessions
- **Session-only Tracking**: User journey and preferences in session storage
- **Component-level State**: Form state managed by React Hook Form
- **URL State**: Language and UTM parameters reflected in URL

## Routing Architecture

### Route Organization

```
src/pages/
├── index.astro                # Homepage
├── [lang]/                    # Language-specific routes
│   ├── index.astro           # Localized homepage
│   ├── product/
│   │   ├── index.astro       # Product overview
│   │   ├── how-it-works.astro
│   │   └── features.astro
│   ├── segments/
│   │   ├── security-leaders.astro
│   │   ├── executives.astro
│   │   ├── managers.astro
│   │   └── sat-teams.astro
│   ├── about/
│   │   └── kai-roer.astro
│   ├── resources/
│   │   ├── index.astro
│   │   ├── whitepapers.astro
│   │   └── case-studies.astro
│   ├── pricing.astro
│   └── contact.astro
└── api/                       # Serverless functions
    ├── forms/
    │   └── submit.ts
    └── marketplace/
        └── redirect.ts
```

### Login Redirect Component

```typescript
// components/LoginButton.tsx
import { msalInstance } from '@/utils/msal-config';

interface LoginButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function LoginButton({ className, variant = 'primary' }: LoginButtonProps) {
  const handleLogin = () => {
    // Configure MSAL to redirect directly to app.praxisnavigator.io after auth
    const loginRequest = {
      scopes: ['User.Read'],
      redirectUri: 'https://app.praxisnavigator.io',
      extraScopesToConsent: ['https://graph.microsoft.com/User.Read']
    };
    
    msalInstance.loginRedirect(loginRequest);
  };

  return (
    <button 
      onClick={handleLogin}
      className={`praxis-button ${variant} ${className}`}
    >
      Log In
    </button>
  );
}
```

### Authentication Flow Explanation

The promotional website uses a **redirect-based authentication approach** that seamlessly transfers users from the marketing site to the actual Praxis Navigator application:

**Flow Steps:**
1. User clicks "Login" button on promotional website
2. MSAL initiates Azure AD B2B authentication with `/organizations/` endpoint
3. User authenticates with their enterprise directory
4. Azure AD redirects authenticated user directly to `app.praxisnavigator.io`
5. User lands in the main application with authenticated session

**Key Benefits:**
- **No Authentication State Management**: Promotional site doesn't need to handle auth tokens or user sessions
- **Seamless UX**: Single-click transition from marketing to application
- **Enterprise SSO**: Leverages existing organizational authentication
- **Simplified Architecture**: Removes complex auth handling from static site
- **Security**: Authentication is handled entirely by Azure AD and the main application

**MSAL Configuration:**
```typescript
// utils/msal-config.ts
import { PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: process.env.ASTRO_PUBLIC_AZURE_CLIENT_ID!,
    authority: process.env.ASTRO_PUBLIC_AZURE_AUTHORITY!,
    redirectUri: process.env.ASTRO_PUBLIC_PRAXIS_APP_URL! // Points to main app, not promotional site
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false
  }
};

export const msalInstance = new PublicClientApplication(msalConfig);
```

## Frontend Services Layer

### API Client Setup

```typescript
// services/apiClient.ts
interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api') {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error };
      }

      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: {
          code: 'NETWORK_ERROR',
          message: 'Failed to connect to server',
          details: error
        }
      };
    }
  }

  async submitForm<T>(data: T): Promise<ApiResponse<{ leadId: string }>> {
    return this.request('/forms/submit', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  openMarketplaceListing(utmParams?: Record<string, string>): void {
    const baseUrl = import.meta.env.ASTRO_PUBLIC_MARKETPLACE_URL;
    const params = new URLSearchParams(utmParams);
    const url = params.toString() ? `${baseUrl}?${params.toString()}` : baseUrl;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}

export const apiClient = new ApiClient();
```

### Service Example

```typescript
// services/hubspotService.ts
import { apiClient } from './apiClient';
import type { LeadSubmission } from '@/types/forms';

export class HubSpotService {
  static async createLead(
    formData: Omit<LeadSubmission, 'id' | 'submittedAt' | 'utm' | 'source'>
  ): Promise<{ success: boolean; contactId?: string; error?: string }> {
    
    const leadData: LeadSubmission = {
      ...formData,
      id: crypto.randomUUID(),
      submittedAt: new Date(),
      utm: this.getUTMParameters(),
      source: document.referrer || 'direct'
    };

    const response = await apiClient.submitForm(leadData);
    
    if (response.success) {
      // Track successful submission
      this.trackConversion(leadData.type, leadData.segment);
      return { success: true, contactId: response.data?.contactId };
    } else {
      return { success: false, error: response.error?.message };
    }
  }

  private static getUTMParameters(): UTMParameters {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      source: urlParams.get('utm_source') || undefined,
      medium: urlParams.get('utm_medium') || undefined,
      campaign: urlParams.get('utm_campaign') || undefined,
      term: urlParams.get('utm_term') || undefined,
      content: urlParams.get('utm_content') || undefined,
    };
  }

  private static trackConversion(type: string, segment: string): void {
    // Track conversion event for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'conversion', {
        event_category: 'lead_generation',
        event_label: `${type}_${segment}`,
        value: 1
      });
    }
  }
}
```

---
