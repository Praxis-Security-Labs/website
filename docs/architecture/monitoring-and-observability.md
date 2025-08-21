# Monitoring and Observability

## Monitoring Stack

- **Frontend Monitoring**: Sentry for error tracking, Cloudflare Web Analytics for performance
- **Backend Monitoring**: Cloudflare Workers analytics, structured logging
- **Error Tracking**: Sentry with custom error boundaries
- **Performance Monitoring**: Core Web Vitals tracking, API response time monitoring

## Key Metrics

**Frontend Metrics:**
- Core Web Vitals (LCP, FID, CLS)
- JavaScript errors and unhandled promises
- API response times from frontend perspective
- User interactions and conversion funnel metrics
- Language switching and form completion rates

**Backend Metrics:**
- Request rate and response times
- Error rate by endpoint
- Form submission success/failure rates
- Rate limiting effectiveness
- External API dependency health

**Business Metrics:**
- Lead generation conversion rates by segment
- Demo request completion rates
- Azure Marketplace link clicks and external navigation tracking
- Email delivery and open rates
- Geographic distribution of traffic

---

This comprehensive architecture document provides a complete blueprint for implementing the Praxis Navigator promotional website as a high-performance, enterprise-grade static site with modern development practices and robust lead generation capabilities.

This document outlines the complete fullstack architecture for **Praxis Navigator Website**, including backend systems, frontend implementation, and their integration. It serves as the single source of truth for AI-driven development, ensuring consistency across the entire technology stack.

This unified approach combines what would traditionally be separate backend and frontend architecture documents, streamlining the development process for modern fullstack applications where these concerns are increasingly intertwined.

## Starter Template or Existing Project

**Status**: Greenfield project with specific static site requirements

Based on the PRD analysis, this is a greenfield promotional website project with the following key architectural drivers:

- **Static Site Architecture**: Astro with React components for optimal performance and SEO
- **Praxis Design System**: Must implement existing design manual and CSS components
- **Azure B2B Integration**: MSAL authentication for enterprise customers and direct links to Azure Marketplace listing
- **Multilingual Support**: English/Norwegian language switching
- **Lead Generation Focus**: Forms, demo requests, and conversion optimization
- **Enterprise Grade**: Performance, accessibility, and security requirements

**Key Constraints Identified**:
- Must use Praxis CSS theme and design system exclusively (no inline CSS or custom styles)
- Product Manager approval required for any missing Praxis components before implementation
- Deployment on Cloudflare Pages specified in PRD
- TypeScript strict mode required
- Core Web Vitals compliance mandatory
- GDPR compliance for Norwegian market

## Change Log

| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-08-20 | 1.0 | Initial architecture document based on PRD and UX specs | Winston (Architect) |
| 2025-08-20 | 1.1 | Added Design System Governance rules - no inline CSS, PM approval for missing components | Winston (Architect) |

---
