# Tech Stack

**Status**: Approved  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Last Updated**: 2025-08-20

## 📋 Overview

This document outlines the complete technology stack for the Praxis Navigator promotional website, including rationale for each choice and how technologies integrate together.

## 🏗️ Architecture Philosophy

### Jamstack Approach
- **Static Generation**: Maximum performance and SEO optimization
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Edge Computing**: Global performance through CDN and serverless functions
- **Developer Experience**: Modern tooling with TypeScript throughout

### Key Principles
- **Performance First**: Sub-2-second load times globally
- **Enterprise Grade**: Security, reliability, and compliance ready
- **Developer Friendly**: Modern tooling and clear patterns
- **Cost Effective**: Serverless and edge computing for optimal pricing

## 🛠️ Technology Stack

### Frontend Technologies

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Frontend Language** | TypeScript | ^5.2.0 | Type-safe development | PRD requirement for strict mode, enterprise reliability |
| **Static Site Generator** | Astro | ^3.0.0 | Static site generation with islands | Optimal performance, SEO, selective hydration |
| **UI Framework** | React | ^18.0.0 | Interactive components | Team familiarity, extensive ecosystem |
| **CSS Framework** | Tailwind CSS | ^3.3.0 | Utility-first styling | Praxis Design System integration requirement |
| **UI Component Library** | Custom Praxis Components | 1.0.0 | Brand-consistent components | PRD mandates strict Praxis Design adherence |
| **State Management** | Zustand | ^4.4.0 | Lightweight state management | Simple state needs, TypeScript support |
| **Internationalization** | Astro i18n | Built-in | Multi-language support | English/Norwegian switching requirement |

### Backend Technologies

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Serverless Platform** | Cloudflare Workers | - | Form processing, API calls | Integrated with hosting, edge performance |
| **Email Service** | Cloudflare Email Workers | - | Form submission handling | Integrated workflow for lead capture |
| **Content Management** | Forestry CMS | Latest | Headless content editing | Non-technical content updates |
| **Database** | Cloudflare KV | - | Temporary data storage | Serverless key-value store for form data |

### Authentication & Integration

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Authentication** | MSAL Browser | ^3.0.0 | Azure AD B2B login redirect | Enterprise SSO integration |
| **HTTP Client** | Fetch API | Native | API requests | Native browser support, no extra dependencies |

### Development & Build Tools

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Build Tool** | Vite | ^4.4.0 | Fast development and building | Built into Astro, modern tooling |
| **Package Manager** | npm | ^9.0.0 | Dependency management | Standard tooling, workspace support |
| **Forms** | React Hook Form | ^7.45.0 | Form validation and handling | Lead generation forms optimization |
| **Code Quality** | ESLint + Prettier | Latest | Code formatting and linting | Team consistency, best practices |
| **Type Checking** | TypeScript | ^5.2.0 | Static type analysis | Strict mode requirement from PRD |

### Testing & Quality Assurance

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Testing Framework** | Vitest | ^0.34.0 | Unit and integration testing | Vite integration, fast execution |
| **E2E Testing** | Playwright | ^1.37.0 | End-to-end testing | Cross-browser testing, reliability |
| **Monitoring** | Sentry | ^7.0.0 | Error tracking and performance | Production debugging and monitoring |

### Hosting & Operations

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Hosting Platform** | Cloudflare Pages | - | Static hosting with CDN | PRD requirement, global performance |
| **Analytics** | Cloudflare Web Analytics | - | Privacy-first analytics | GDPR compliance requirement |
| **CDN** | Cloudflare CDN | - | Global content delivery | Sub-2s load times worldwide |

## 🔗 Technology Integration

### Frontend Stack Integration
```
Astro (Static Generation)
├── React (Interactive Islands)
│   ├── Tailwind CSS (Styling)
│   ├── Praxis Components (UI Library)
│   ├── Zustand (State Management)
│   └── React Hook Form (Forms)
├── TypeScript (Type Safety)
└── Vite (Build Tool)
```

### Backend Stack Integration
```
Cloudflare Pages (Hosting)
├── Cloudflare Workers (Serverless Functions)
│   ├── Cloudflare KV (Data Storage)
│   └── Email Workers (Notifications)
├── Forestry CMS (Content Management)
└── Cloudflare Analytics (Monitoring)
```

### Authentication Flow
```
Promotional Website
├── MSAL Browser (Auth Library)
├── Azure AD B2B (Enterprise Auth)
└── app.praxisnavigator.io (Target Application)
```

## 🎯 Alternative Technologies Considered

### Static Site Generator Alternatives
- **Next.js**: More complex for static sites, overkill for our needs
- **Gatsby**: GraphQL complexity not needed for simple content structure
- **11ty**: Less TypeScript support, smaller ecosystem
- **Hugo**: No React integration, different language (Go)

**Why Astro**: Perfect balance of performance, React integration, and developer experience

### CSS Framework Alternatives
- **Styled Components**: Conflicts with Praxis design system constraints
- **Emotion**: Runtime overhead, complexity not needed
- **Plain CSS**: Doesn't integrate well with Praxis design tokens
- **Bootstrap**: Heavy, conflicts with custom design system

**Why Tailwind**: Seamless integration with Praxis design tokens and utility-first approach

### Hosting Platform Alternatives
- **Vercel**: More expensive, less integrated analytics
- **Netlify**: Good option but Cloudflare has better global performance
- **AWS S3 + CloudFront**: More complex setup, higher maintenance
- **GitHub Pages**: Limited functionality, no serverless functions

**Why Cloudflare Pages**: Best performance, integrated Workers, cost-effective

## 📊 Performance Expectations

### Bundle Size Targets
- **Initial Bundle**: <500KB (including Praxis components)
- **Route Bundles**: <200KB per additional page
- **Third-party Libraries**: <100KB total
- **Images**: WebP format, responsive sizing

### Load Time Targets
- **First Contentful Paint**: <1.2s
- **Largest Contentful Paint**: <2.5s  
- **First Input Delay**: <100ms
- **Cumulative Layout Shift**: <0.1

### Core Web Vitals Compliance
All pages must achieve "Good" scores in Google's Core Web Vitals assessment.

## 🔒 Security Considerations

### Frontend Security
- **CSP Headers**: Strict content security policy
- **XSS Prevention**: React's built-in protection + input sanitization
- **No Inline Scripts**: All JavaScript through proper bundling

### Backend Security
- **Input Validation**: Zod schemas for all API inputs
- **Rate Limiting**: Prevent abuse of form endpoints
- **CORS Policy**: Restricted to approved domains

### Authentication Security
- **No Token Storage**: Promotional site never handles auth tokens
- **Secure Redirects**: HTTPS-only with proper validation
- **Enterprise SSO**: Leverages organizational security policies

## 📝 Upgrade Path

### Planned Upgrades
- **Astro v4**: When stable (improved performance)
- **React v19**: When released (better concurrent features)
- **TypeScript v5.3**: Regular updates for latest features

### Monitoring for Updates
- Monthly dependency security audits
- Quarterly major version review
- Annual tech stack assessment

## 🔗 Related Documentation

- [High-Level Architecture](./high-level-architecture.md) - System overview and component interactions
- [Frontend Component Architecture](../frontend/component-architecture.md) - React and Astro implementation
- [Backend Serverless Functions](../backend/serverless-functions.md) - Cloudflare Workers implementation
- [Deployment Strategy](../operations/deployment.md) - Cloudflare Pages deployment

---

*This tech stack is designed to be stable and maintainable while providing enterprise-grade performance and developer experience.*
