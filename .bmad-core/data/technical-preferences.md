# User-Defined Preferred Patterns and Preferences

## Frontend Framework & Build System
- **Static Site Generator:** Astro (optimal for static generation with selective hydration)
- **UI Components:** React components for interactive elements
- **TypeScript:** Strict mode enabled for maximum type safety and code quality
- **Build Tool:** Astro's built-in Vite-based build system
- **Component Architecture:** Island architecture for optimal performance

## Styling & Design System
- **CSS Framework:** Tailwind CSS with Praxis CSS theme integration via @theme settings
- **Design System:** Praxis Design guidelines (official design manual compliance)
- **Icons:** Consider Heroicons or Lucide React for consistency
- **Fonts:** Define web font loading strategy for Praxis brand typography

## Deployment & Infrastructure  
- **Hosting:** Cloudflare Pages
- **Repository:** GitHub with automatic deployments on push to main branch
- **Environment Management:** Cloudflare Pages environment variables for configuration
- **CDN:** Cloudflare's global CDN with automatic optimization

## Internationalization
- **i18n Framework:** Astro i18n with English and Norwegian initial support
- **Content Management:** Markdown files with frontmatter for structured content
- **Translation Workflow:** Git-based content workflow for easy updates

## Authentication & Integrations
- **Microsoft Integration:** MSAL (Microsoft Authentication Library) for popup login
- **Azure Marketplace:** Direct link integration (URL to be provided)
- **API Clients:** Consider Microsoft Graph SDK if needed for future enhancements

## Analytics & Monitoring  
- **Analytics:** Cloudflare Web Analytics (privacy-first, GDPR-compliant)
- **Performance Monitoring:** Cloudflare's built-in performance metrics
- **Error Tracking:** Consider Sentry integration for production error monitoring

## Development Workflow
- **Package Manager:** npm or pnpm (recommend pnpm for performance)
- **Code Quality:** ESLint + Prettier for consistent code formatting
- **TypeScript Config:** Strict mode enabled with comprehensive type checking
- **Git Workflow:** Feature branches with pull request reviews
- **Testing:** Playwright for E2E testing, Vitest for unit testing

## Content & SEO
- **Content Format:** Markdown with frontmatter for structured content
- **SEO Optimization:** Comprehensive SEO strategy optimized for organic traffic
  - **Meta Tags:** Dynamic meta tags (title, description, OG, Twitter Cards) per page/language
  - **Structured Data:** JSON-LD schema markup for security software, organization, and person entities
  - **Sitemap:** Automatic XML sitemap generation with priority and frequency indicators
  - **Internal Linking:** Strategic internal link architecture with anchor text optimization
  - **URL Structure:** SEO-friendly URLs with keyword optimization
  - **Content Optimization:** Keyword density optimization for target terms (security behavior monitoring, SAT effectiveness, Microsoft Graph security)
  - **Technical SEO:** Page speed optimization, Core Web Vitals compliance, mobile-first indexing
  - **Local SEO:** Schema markup for business entity and location data
  - **Rich Snippets:** FAQ schema, HowTo schema, and Review schema where applicable
  - **Canonical URLs:** Proper canonicalization for multilingual content
  - **Robots.txt:** Optimized robots.txt with sitemap references
  - **Open Graph:** Complete OG meta tags for social media sharing optimization
  - **Alt Text:** Descriptive alt text for all images with keyword integration
  - **Header Structure:** Semantic H1-H6 hierarchy with keyword optimization
  - **Content Clusters:** Topic clusters around core themes (security culture, behavioral monitoring, compliance)
  - **Analytics Integration:** Google Search Console setup for organic traffic monitoring

## Security & Compliance
- **Security Headers:** Content Security Policy (CSP), HTTPS enforcement
- **GDPR Compliance:** Cookie-free analytics, privacy policy templates
- **Form Handling:** Consider Netlify Forms or Formspree for contact forms
- **Data Validation:** Zod for form validation and type safety

## Performance Optimization
- **Image Optimization:** Astro's built-in image optimization
- **Code Splitting:** Automatic with Astro's island architecture
- **Caching Strategy:** Cloudflare's intelligent caching
- **Bundle Analysis:** Built-in bundle analysis tools
