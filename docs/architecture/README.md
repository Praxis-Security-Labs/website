# Architecture Overview

**Status**: Draft v1.0  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Project**: Praxis Navigator Static Promotional Website

## 📋 Table of Contents

1. [Tech Stack](./tech-stack.md) - Technology choices and rationale
2. [High-Level Architecture](./high-level-architecture.md) - System overview and diagrams
3. [Data Models](./data-models.md) - Data structures and TypeScript interfaces
4. [API Specification](./api-specification.md) - REST API endpoints and schemas
5. [External APIs](./external-apis.md) - Third-party integrations

## 🎯 Executive Summary

The Praxis Navigator promotional website employs a modern **Jamstack architecture** using Astro as the static site generator with selective React hydration for interactive components. This approach delivers optimal performance through static generation while enabling dynamic features like form handling, language switching, and seamless login redirects to the main application.

## 🏗️ Key Architectural Decisions

### Platform Choice: Cloudflare + Azure
- **Hosting**: Cloudflare Pages for global CDN and edge performance
- **Functions**: Cloudflare Workers for serverless API endpoints
- **Authentication**: Azure AD B2B for enterprise customer SSO
- **Content**: Headless CMS for non-technical content updates

### Framework Choice: Astro + React
- **Static Generation**: Astro for optimal SEO and performance
- **Interactive Components**: React islands for dynamic functionality
- **Styling**: Tailwind CSS with strict Praxis Design System integration
- **Type Safety**: TypeScript in strict mode throughout

### Authentication Strategy: Redirect-Based
- **No Local Auth**: Promotional site doesn't handle authentication tokens
- **MSAL Redirect**: Direct redirect to app.praxisnavigator.io after auth
- **Enterprise SSO**: Leverages existing organizational authentication
- **Simplified Security**: Zero authentication attack surface on promotional site

### Design System Governance
- **Praxis Theme Only**: No inline CSS or custom styles allowed
- **Component Library**: All components must come from Praxis design system
- **PM Approval**: Required for any missing Praxis components
- **Automated Enforcement**: ESLint rules prevent violations

## 🔗 Cross-References

### Related Frontend Documentation
- [Component Architecture](../frontend/component-architecture.md) - React and Astro components
- [Design System](../frontend/design-system.md) - Praxis theme governance
- [Authentication](../frontend/authentication.md) - MSAL implementation

### Related Backend Documentation
- [Serverless Functions](../backend/serverless-functions.md) - Cloudflare Workers
- [Form Processing](../backend/form-processing.md) - Lead generation

### Related Operations Documentation
- [Deployment](../operations/deployment.md) - Cloudflare Pages deployment
- [Security](../operations/security.md) - Security implementation

## 📊 Architecture Metrics

| Metric | Target | Rationale |
|--------|--------|-----------|
| Page Load Time | <2s globally | PRD requirement for performance |
| Bundle Size | <500KB initial | Mobile performance optimization |
| Core Web Vitals | Green scores | SEO and user experience |
| Uptime | 99.9% | Enterprise reliability requirement |

## 🚀 Migration from Monolithic

This architecture replaces the original 2100+ line architecture document with focused, maintainable documentation that enables:

- **Faster Developer Onboarding**: Find relevant information quickly
- **Parallel Development**: Teams can work on different aspects independently  
- **Better Maintenance**: Update specific areas without affecting others
- **Clear Ownership**: Each document has a clear audience and purpose

## 📝 Change Log

| Date | Version | Description | Author |
|------|---------|-------------|---------|
| 2025-08-20 | 1.0 | Sharded from monolithic architecture document | Winston (Architect) |

---

*For detailed technical specifications, see the individual architecture documents linked above.*
