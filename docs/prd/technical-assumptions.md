# Technical Assumptions

## Repository Structure: Monorepo
Single repository containing all website components, content, and configuration with clear separation of concerns for maintainability and deployment efficiency.

## Service Architecture
Static site architecture using Astro's island architecture for optimal performance with selective hydration of React components only where interactivity is required.

## Testing Requirements
Comprehensive testing strategy including unit testing with Vitest for component logic, Playwright for end-to-end testing of critical user journeys (lead generation flows, language switching, authentication), and manual testing convenience methods for content validation.

## Additional Technical Assumptions and Requests
- **Frontend Framework:** Astro with React components for interactive elements, leveraging island architecture for optimal static generation with selective hydration
- **TypeScript Configuration:** Strict mode enabled across all code with comprehensive type checking and zero type errors in production builds
- **Styling & Design System:** Tailwind CSS with Praxis CSS theme integration via @theme settings, ensuring pixel-perfect consistency with application design system
- **Deployment Strategy:** Cloudflare Pages with GitHub integration for automatic deployments on main branch push, preview environments for pull request testing
- **Authentication Integration:** Microsoft Authentication Library (MSAL) for popup login with seamless redirect to app.praxisnavigator.io
- **CRM Integration:** HubSpot CRM for lead management, contact creation, and automated email workflows with direct API integration
- **Azure Marketplace URL:** Configured via ASTRO_PUBLIC_MARKETPLACE_URL environment variable for easy updates and deployment flexibility
- **Internationalization:** Astro i18n framework with English and Norwegian initial support, structured for additional language expansion
- **Content Management:** Git-based workflow with Markdown frontmatter for structured, translatable content
- **SEO Optimization:** Comprehensive organic traffic strategy including JSON-LD structured data, strategic internal linking, content clusters, and full technical SEO implementation
- **Performance Requirements:** Core Web Vitals compliance (LCP <2.5s, FID <100ms, CLS <0.1) with 90+ Lighthouse scores across all metrics
- **Security & Compliance:** Content Security Policy (CSP), HTTPS enforcement, GDPR-compliant analytics (Cloudflare Web Analytics), enterprise-grade security standards
- **Analytics & Monitoring:** Privacy-first Cloudflare Web Analytics with Google Search Console integration for organic traffic monitoring
- **Development Tools:** ESLint + Prettier for code quality, pnpm for package management, feature branch workflow with pull request reviews
