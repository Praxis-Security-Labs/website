# State Management

**Status**: Approved  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Last Updated**: 2025-08-20

## 📋 Overview

This document outlines the simplified state management strategy for the Praxis Navigator promotional website. Following KISS principles, we use minimal client-side state with Zustand for React islands.

## 🎯 Simplified State Strategy

### Minimal State Requirements
Since this is a promotional website with HubSpot form integration, state management needs are minimal:

1. **User Preferences**: Language and theme settings
2. **Navigation State**: Mobile menu toggle, current page
3. **Form State**: Handled entirely by HubSpot (no custom state)
4. **Authentication State**: None (redirect-only approach)

### No Complex State Management Needed
- ❌ No user authentication state
- ❌ No form validation state  
- ❌ No API request state
- ❌ No shopping cart or complex workflows
- ❌ No real-time data synchronization

## 🛠️ Zustand Store Implementation

### Core App Store

```typescript
// src/store/appStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppStore {
  // Preferences
  language: 'en' | 'no';
  theme: 'light' | 'dark' | 'auto';
  
  // Navigation
  isMobileMenuOpen: boolean;
  currentPage: string;
  
  // Analytics
  sessionId: string;
  visitCount: number;
  
  // Actions
  setLanguage: (language: 'en' | 'no') => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  toggleMobileMenu: () => void;
  setCurrentPage: (page: string) => void;
  incrementVisitCount: () => void;
}

export const useStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Initial state
      language: 'en',
      theme: 'auto',
      isMobileMenuOpen: false,
      currentPage: '/',
      sessionId: crypto.randomUUID(),
      visitCount: 0,
      
      // Actions
      setLanguage: (language) => set({ language }),
      setTheme: (theme) => set({ theme }),
      toggleMobileMenu: () => set((state) => ({ 
        isMobileMenuOpen: !state.isMobileMenuOpen 
      })),
      setCurrentPage: (page) => set({ currentPage: page }),
      incrementVisitCount: () => set((state) => ({ 
        visitCount: state.visitCount + 1 
      })),
    }),
    {
      name: 'praxis-website-storage',
      // Only persist preferences, not session state
      partialize: (state) => ({
        language: state.language,
        theme: state.theme,
        visitCount: state.visitCount,
      }),
    }
  )
);
```

### Theme Management Store

```typescript
// src/store/themeStore.ts
import { create } from 'zustand';

interface ThemeStore {
  theme: 'light' | 'dark' | 'auto';
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  initializeTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'auto',
  resolvedTheme: 'light',
  
  setTheme: (theme) => {
    set({ theme });
    
    // Update resolved theme
    const resolved = theme === 'auto' 
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    
    set({ resolvedTheme: resolved });
    
    // Update document class
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    
    // Store in localStorage
    localStorage.setItem('theme', theme);
  },
  
  initializeTheme: () => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | 'auto' || 'auto';
    get().setTheme(stored);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (get().theme === 'auto') {
        set({ resolvedTheme: e.matches ? 'dark' : 'light' });
        document.documentElement.classList.toggle('dark', e.matches);
      }
    });
  },
}));
```

### Analytics Store (Optional)

```typescript
// src/store/analyticsStore.ts
import { create } from 'zustand';

interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  timestamp: Date;
}

interface AnalyticsStore {
  events: AnalyticsEvent[];
  sessionStartTime: Date;
  pageViews: number;
  
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  getSessionDuration: () => number;
}

export const useAnalyticsStore = create<AnalyticsStore>((set, get) => ({
  events: [],
  sessionStartTime: new Date(),
  pageViews: 0,
  
  trackEvent: (event, properties = {}) => {
    const newEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: new Date(),
    };
    
    set((state) => ({
      events: [...state.events, newEvent],
    }));
    
    // Send to Cloudflare Analytics or HubSpot if needed
    if (window.gtag) {
      window.gtag('event', event, properties);
    }
  },
  
  trackPageView: (page) => {
    set((state) => ({
      pageViews: state.pageViews + 1,
    }));
    
    get().trackEvent('page_view', { page });
  },
  
  getSessionDuration: () => {
    return Date.now() - get().sessionStartTime.getTime();
  },
}));
```

## 🚀 Store Usage in Components

### Language Toggle Component

```typescript
// src/components/widgets/LanguageToggle.tsx
import React from 'react';
import { useStore } from '../../store/appStore';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useStore();
  
  const handleLanguageChange = (newLanguage: 'en' | 'no') => {
    setLanguage(newLanguage);
    
    // Update URL path for language routing
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|no)/, `/${newLanguage}`);
    
    if (newPath !== currentPath) {
      window.location.href = newPath;
    }
  };
  
  return (
    <div className="language-toggle">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`px-2 py-1 ${language === 'en' ? 'font-bold text-praxis-primary' : 'text-gray-600'}`}
      >
        EN
      </button>
      <span className="mx-1 text-gray-400">|</span>
      <button
        onClick={() => handleLanguageChange('no')}
        className={`px-2 py-1 ${language === 'no' ? 'font-bold text-praxis-primary' : 'text-gray-600'}`}
      >
        NO
      </button>
    </div>
  );
};

export default LanguageToggle;
```

### Theme Toggle Component

```typescript
// src/components/widgets/ThemeToggle.tsx
import React, { useEffect } from 'react';
import { useThemeStore } from '../../store/themeStore';

const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, setTheme, initializeTheme } = useThemeStore();
  
  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  
  const cycleTheme = () => {
    const themes: ('light' | 'dark' | 'auto')[] = ['light', 'dark', 'auto'];
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };
  
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return '☀️';
      case 'dark': return '🌙';
      case 'auto': return '🌓';
    }
  };
  
  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      title={`Current theme: ${theme} (${resolvedTheme})`}
    >
      <span className="text-lg">{getThemeIcon()}</span>
    </button>
  );
};

export default ThemeToggle;
```

### Mobile Navigation Component

```typescript
// src/components/layout/MobileNavigation.tsx
import React from 'react';
import { useStore } from '../../store/appStore';

const MobileNavigation: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu } = useStore();
  
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden p-2"
        aria-label="Toggle mobile menu"
      >
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      
      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          />
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg">
            <div className="p-4">
              <button
                onClick={toggleMobileMenu}
                className="float-right text-2xl"
              >
                ×
              </button>
            </div>
            <nav className="mt-8">
              <a href="/" className="block px-4 py-2 hover:bg-gray-100">Home</a>
              <a href="/features" className="block px-4 py-2 hover:bg-gray-100">Features</a>
              <a href="/pricing" className="block px-4 py-2 hover:bg-gray-100">Pricing</a>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100">About</a>
              <a href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;
```

## 📊 State Persistence Strategy

### Local Storage Integration

```typescript
// src/utils/storage.ts
interface StorageData {
  language: 'en' | 'no';
  theme: 'light' | 'dark' | 'auto';
  visitCount: number;
  lastVisit?: string;
}

export class LocalStorageManager {
  private static readonly STORAGE_KEY = 'praxis-website-preferences';
  
  static save(data: Partial<StorageData>): void {
    try {
      const existing = this.load();
      const updated = { ...existing, ...data };
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }
  
  static load(): StorageData {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load from localStorage:', error);
    }
    
    return {
      language: 'en',
      theme: 'auto',
      visitCount: 0,
    };
  }
  
  static clear(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear localStorage:', error);
    }
  }
}
```

### Session Storage for Temporary State

```typescript
// src/utils/sessionStorage.ts
interface SessionData {
  sessionId: string;
  startTime: string;
  pageViews: number;
  currentPage: string;
}

export class SessionStorageManager {
  private static readonly SESSION_KEY = 'praxis-website-session';
  
  static initializeSession(): string {
    const sessionId = crypto.randomUUID();
    const sessionData: SessionData = {
      sessionId,
      startTime: new Date().toISOString(),
      pageViews: 1,
      currentPage: window.location.pathname,
    };
    
    this.save(sessionData);
    return sessionId;
  }
  
  static save(data: Partial<SessionData>): void {
    try {
      const existing = this.load();
      const updated = { ...existing, ...data };
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to save session data:', error);
    }
  }
  
  static load(): SessionData | null {
    try {
      const stored = sessionStorage.getItem(this.SESSION_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.warn('Failed to load session data:', error);
      return null;
    }
  }
}
```

## 🔄 State Hydration in Astro

### Client-Side State Initialization

```astro
---
// src/components/StateInitializer.astro
---

<script>
  // Initialize state when page loads
  import { useStore } from '../store/appStore';
  import { useThemeStore } from '../store/themeStore';
  import { LocalStorageManager, SessionStorageManager } from '../utils/storage';
  
  // Load saved preferences
  const savedPrefs = LocalStorageManager.load();
  const store = useStore.getState();
  
  store.setLanguage(savedPrefs.language);
  store.setTheme(savedPrefs.theme);
  
  // Initialize theme
  const themeStore = useThemeStore.getState();
  themeStore.initializeTheme();
  
  // Initialize or restore session
  let sessionData = SessionStorageManager.load();
  if (!sessionData) {
    SessionStorageManager.initializeSession();
  } else {
    // Update page view count
    SessionStorageManager.save({
      pageViews: (sessionData.pageViews || 0) + 1,
      currentPage: window.location.pathname,
    });
  }
</script>
```

## 🎯 Performance Considerations

### Lazy Store Initialization

```typescript
// Only initialize stores when needed
const useStoreWithInit = () => {
  const store = useStore();
  
  React.useEffect(() => {
    // Initialize only once on first component mount
    if (!store.sessionId) {
      store.incrementVisitCount();
    }
  }, []);
  
  return store;
};
```

### Minimal Re-renders

```typescript
// Use selectors to prevent unnecessary re-renders
const useLanguage = () => useStore(state => state.language);
const useTheme = () => useStore(state => state.theme);
const useMobileMenu = () => useStore(state => ({
  isOpen: state.isMobileMenuOpen,
  toggle: state.toggleMobileMenu
}));
```

## 🔗 Related Documentation

- [Component Architecture](./component-architecture.md) - React island implementation
- [HubSpot Integration](../operations/hubspot-setup.md) - Form state handling
- [Performance](./performance.md) - State management optimization
- [Data Models](../architecture/data-models.md) - TypeScript interfaces

---

*This simplified state management approach minimizes complexity while providing essential functionality for user preferences and basic analytics, perfectly suited for a promotional website with external form handling.*
