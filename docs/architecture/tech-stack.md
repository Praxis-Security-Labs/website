# Tech Stack

## Technology Stack Table

| Category | Technology | Version | Purpose | Rationale |
|----------|------------|---------|---------|-----------|
| **Frontend Language** | TypeScript | ^5.2.0 | Type-safe development | PRD requirement for strict mode, enterprise reliability |
| **Static Site Generator** | Astro | ^3.0.0 | Static site generation with islands | Optimal performance, SEO, selective hydration |
| **UI Framework** | React | ^18.0.0 | Interactive components | Team familiarity, extensive ecosystem |
| **CSS Framework** | Tailwind CSS | ^3.3.0 | Utility-first styling | Praxis Design System integration requirement |
| **UI Component Library** | Custom Praxis Components | 1.0.0 | Brand-consistent components | PRD mandates strict Praxis Design adherence |
| **State Management** | Zustand | ^4.4.0 | Lightweight state management | Simple state needs, TypeScript support |
| **Internationalization** | Astro i18n | Built-in | Multi-language support | English/Norwegian switching requirement |
| **Authentication** | MSAL Browser | ^3.0.0 | Azure AD B2B login redirect to app.praxisnavigator.io | PRD requirement for seamless enterprise login experience |
| **Forms** | React Hook Form | ^7.45.0 | Form validation and handling | Lead generation forms optimization |
| **HTTP Client** | Fetch API | Native | API requests | Native browser support, no extra dependencies |
| **Build Tool** | Vite | ^4.4.0 | Fast development and building | Built into Astro, modern tooling |
| **Package Manager** | npm | ^9.0.0 | Dependency management | Standard tooling, workspace support |
| **Content Management** | Forestry CMS | Latest | Headless content editing | Non-technical content updates |
| **Hosting Platform** | Cloudflare Pages | - | Static hosting with CDN | PRD requirement, global performance |
| **Serverless Functions** | Cloudflare Workers | - | Form processing, API calls | Integrated with hosting, edge performance |
| **Analytics** | Cloudflare Web Analytics | - | Privacy-first analytics | GDPR compliance requirement |
| **CRM Integration** | HubSpot CRM | Latest | Lead management and email automation | Direct API integration for comprehensive lead management |
| **Monitoring** | Sentry | ^7.0.0 | Error tracking and performance | Production debugging and monitoring |
| **Testing Framework** | Vitest | ^0.34.0 | Unit and integration testing | Vite integration, fast execution |
| **E2E Testing** | Playwright | ^1.37.0 | End-to-end testing | Cross-browser testing, reliability |
| **Code Quality** | ESLint + Prettier | Latest | Code formatting and linting | Team consistency, best practices |
| **Type Checking** | TypeScript | ^5.2.0 | Static type analysis | Strict mode requirement from PRD |

---
