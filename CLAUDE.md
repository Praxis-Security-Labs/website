# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Praxis Navigator promotional website built with Astro and React. It's a Jamstack architecture designed for lead generation, featuring Azure AD B2B authentication integration, HubSpot form processing, and multi-language support (English/Norwegian). The site promotes a security behavior monitoring SaaS platform.

## Development Commands

### Core Development
```bash
# Main development server (from apps/website/)
npm run dev            # Starts Astro dev server at localhost:4321

# Build commands
npm run build          # Build production site to ./dist/
npm run preview        # Preview build locally before deploying
```

### Testing Commands
```bash
# Full test suite
npm run test:all       # Run unit, component, E2E, and performance tests

# Individual test suites  
npm run test:unit      # Vitest unit tests with coverage
npm run test:components # React component tests
npm run test:e2e       # Playwright end-to-end tests
npm run test:performance # Lighthouse CI performance tests
npm run test:a11y      # Accessibility compliance tests
npm run test:security  # Security header and input validation tests

# Development testing
npm run test:watch     # Watch mode for unit tests
npm run test:e2e:ui    # Playwright UI mode for E2E debugging
```

### Quality Commands
```bash
npm run lint           # ESLint for TypeScript/Astro files
npm run lint:fix       # Auto-fix linting issues
npm run type-check     # TypeScript type checking
```

## Architecture Overview

### Repository Structure
```
/
├── apps/website/          # Main Astro application
│   ├── src/
│   │   ├── pages/         # Astro pages (file-based routing)
│   │   ├── components/    # React components
│   │   │   ├── ui/        # Basic UI components
│   │   │   ├── forms/     # HubSpot form components
│   │   │   ├── sections/  # Page sections  
│   │   │   └── islands/   # Interactive React islands
│   │   ├── layouts/       # Astro layouts
│   │   └── utils/         # Utilities and services
├── packages/
│   ├── praxis-ui/         # Praxis design system components
│   └── shared/            # TypeScript types and utilities
└── docs/                  # Comprehensive project documentation
```

### Technology Stack
- **Frontend**: Astro v3 with React islands architecture
- **Styling**: Tailwind CSS with Praxis Design System
- **State**: Zustand for lightweight client state  
- **Forms**: React Hook Form with Zod validation
- **Auth**: MSAL Browser for Azure AD B2B redirect flow
- **Testing**: Vitest (unit), Playwright (E2E), Lighthouse CI (performance)
- **Deployment**: Cloudflare Pages with automatic GitHub integration

### Key Patterns
- **Island Architecture**: Selective React hydration for interactive components
- **Redirect-Based Auth**: Login button redirects to app.praxisnavigator.io after Azure AD auth
- **Lead Generation Focus**: HubSpot form integration for all CTAs
- **Performance-First**: Sub-2s load times, Core Web Vitals compliance
- **Progressive Enhancement**: Base functionality works without JavaScript

## Critical Development Rules

### Type System
- Always define shared types in `packages/shared/` and import from there
- Use strict TypeScript mode (enabled in tsconfig.json)
- All forms must use Zod schemas for validation

### Praxis Design System
- **Only use Praxis Design System components** - never create custom UI
- All styling must use Praxis theme classes via Tailwind CSS
- **No inline CSS** - all styles through design system
- If required component doesn't exist, discuss with Product Manager first

### API and Services  
- Never make direct HTTP calls - use `apiClient` service layer
- All serverless functions must use standard error handling
- Environment variables accessed only through config objects, never `process.env` directly

### Forms and Lead Generation
- All forms integrate with HubSpot for lead capture
- Form validation uses React Hook Form + Zod schemas
- UTM parameter tracking for campaign attribution
- Segment-specific form handling (security-leaders, executives, managers, sat-teams)

### Internationalization
- All user-facing text must support i18n (English/Norwegian)
- Language switching persists in Zustand store
- URL structure: `/` (English), `/no` (Norwegian)

### Authentication Flow
- Login buttons trigger Azure AD B2B redirect to app.praxisnavigator.io
- No authentication state management in promotional site
- MSAL configuration points to main application, not promotional site

## Performance Requirements

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms  
- **CLS (Cumulative Layout Shift)**: < 0.1
- **Overall Performance**: Lighthouse score ≥ 90

### Optimization Strategies
- Lazy load all non-critical JavaScript and images
- Use Astro's selective hydration for React components
- Optimize for mobile-first (50%+ expected mobile traffic)
- CDN delivery via Cloudflare global edge network

## Testing Strategy

### Test Coverage Targets
- **Unit Tests**: 80% coverage for business logic
- **Component Tests**: 85% coverage for React components  
- **E2E Tests**: 100% coverage for critical user journeys
- **Performance**: 100% of pages meet Core Web Vitals
- **Accessibility**: 100% WCAG AA compliance

### Cross-Browser Support
- Modern browsers: Chrome, Firefox, Safari, Edge
- **Legacy Enterprise**: IE11+ compatibility required
- Mobile: iOS Safari, Android Chrome
- Progressive enhancement for older browsers

### Critical Test Scenarios
1. **Lead Generation Forms**: All segment-specific form submissions
2. **Language Switching**: English ↔ Norwegian navigation
3. **Performance**: Core Web Vitals on mobile and desktop
4. **Authentication**: Azure AD B2B redirect flow (manual testing)
5. **Accessibility**: Keyboard navigation, screen readers
6. **Legacy Browsers**: Basic functionality on IE11+

## HubSpot Integration

### Form Processing
- All contact forms submit to HubSpot CRM
- Segment-based lead qualification (security-leaders, executives, etc.)
- UTM parameter capture for campaign attribution
- Conversion tracking via gtag events

### Form Types
- **Contact Forms**: General inquiries by user segment
- **Demo Requests**: Executive demo scheduling
- **Trial Signups**: Redirect to Azure Marketplace
- **Newsletter**: Content marketing opt-ins

## Azure Integration

### Authentication
- **Login Flow**: Promotional site → Azure AD B2B → app.praxisnavigator.io
- **No Token Management**: Authentication handled by main application
- **Enterprise SSO**: Supports organizational directories via `/organizations/` endpoint

### Marketplace Integration
- **Trial Signups**: Direct links to Azure Marketplace listing
- **UTM Tracking**: Campaign attribution through marketplace URLs
- **Environment Variable**: `ASTRO_PUBLIC_MARKETPLACE_URL`

## Accessibility Standards

### WCAG AA Compliance
- All interactive elements keyboard accessible
- Proper ARIA labels for screen readers
- Color contrast ratios meet AA standards
- Semantic HTML structure with logical heading hierarchy
- Alt text for all images (or marked as decorative)

### Testing Tools
- axe-playwright for automated accessibility scanning
- Manual keyboard navigation testing
- Screen reader compatibility verification

## Security Requirements

### Headers and Policies
- Content Security Policy (CSP) enforcement
- HTTPS-only with HSTS headers
- X-Frame-Options: DENY
- Input sanitization for all form fields

### Data Protection
- GDPR compliance for European users
- No real user data in test environments
- Privacy policy and terms of service pages

## Content Management

### Internationalization
- Content structure supports English/Norwegian switching
- Language preference persisted in browser storage
- URL-based language routing: `/` vs `/no`

### SEO Optimization
- Structured data markup (JSON-LD)
- Meta tags optimized for security industry keywords
- Internal linking architecture for content clusters
- Mobile-first responsive design

## Environment Setup

### Prerequisites
- Node.js (version specified in package.json)
- npm workspaces support
- Git for version control

### Local Development
1. Clone repository
2. Run `npm install` from root directory
3. Navigate to `apps/website/`
4. Run `npm run dev` to start development server
5. Access at `http://localhost:4321`

### Environment Variables
Key environment variables for local development:
- `ASTRO_PUBLIC_AZURE_CLIENT_ID`: Azure AD B2B client ID
- `ASTRO_PUBLIC_AZURE_AUTHORITY`: Azure AD authority URL
- `ASTRO_PUBLIC_PRAXIS_APP_URL`: Main application URL
- `ASTRO_PUBLIC_MARKETPLACE_URL`: Azure Marketplace listing URL

## Deployment

### Cloudflare Pages
- Automatic deployment on push to main branch
- Preview deployments for all pull requests
- Global CDN with edge computing
- Integrated analytics and performance monitoring

### Build Process
- Astro static site generation
- TypeScript compilation with strict mode
- Tailwind CSS compilation with Praxis theme
- Asset optimization and minification