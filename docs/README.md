# Praxis Navigator Website Documentation

**Project**: Praxis Navigator Static Promotional Website  
**Status**: In Development  
**Created**: 2025-08-20  
**Last Updated**: 2025-08-20

## 📋 Overview

This documentation suite provides comprehensive guidance for building the Praxis Navigator promotional website. The documentation is organized by audience and concern to make it easy to find relevant information.

## � Documentation Structure

### 🏗️ Architecture Documentation
- **[Architecture Overview](./architecture/README.md)** - High-level system design and component relationships
- **[Tech Stack](./architecture/tech-stack.md)** - Technology choices, rationale, and alternatives
- **[High-Level Architecture](./architecture/high-level-architecture.md)** - System interactions and data flow
- **[Data Models](./architecture/data-models.md)** - TypeScript interfaces and validation schemas
- **[API Specification](./architecture/api-specification.md)** - Simplified approach with HubSpot integration
- **[External APIs](./architecture/external-apis.md)** - No external APIs needed (HubSpot handles forms)

### 🎨 Frontend Documentation  
- **[Component Architecture](./frontend/component-architecture.md)** - Astro + React islands implementation
- **[State Management](./frontend/state-management.md)** - Simplified Zustand store for preferences
- **[Routing](./frontend/routing.md)** - Astro file-based routing and navigation *(coming soon)*
- **[Design System](./frontend/design-system.md)** - Praxis design tokens and components *(coming soon)*
- **[Authentication](./frontend/authentication.md)** - Simple Azure AD redirect flow *(coming soon)*

### 🔧 Backend Documentation
- **[Serverless Functions](./backend/serverless-functions.md)** - Not needed (HubSpot handles everything) *(coming soon)*
- **[Data Processing](./backend/data-processing.md)** - External service integration *(coming soon)*

### 🚀 Operations Documentation
- **[Deployment](./operations/deployment.md)** - Cloudflare Pages deployment *(coming soon)*
- **[HubSpot Setup](./operations/hubspot-setup.md)** - Form configuration and CRM integration *(coming soon)*
- **[Monitoring](./operations/monitoring.md)** - Analytics and performance tracking *(coming soon)*

### �‍💻 Development Documentation
- **[Getting Started](./development/getting-started.md)** - Development environment setup *(coming soon)*
- **[Coding Standards](./development/coding-standards.md)** - TypeScript and design system rules *(coming soon)*
- **[Testing](./development/testing.md)** - Vitest and Playwright testing strategy *(coming soon)*

### 📋 Product Documentation
- **[Requirements](./product/requirements.md)** - Extracted from PRD *(coming soon)*
- **[User Stories](./product/user-stories.md)** - User journeys and acceptance criteria *(coming soon)*
- **[Content Strategy](./product/content-strategy.md)** - Content organization and CMS *(coming soon)*

## 🎯 Quick Navigation

### For Developers Starting Fresh
1. Read [Getting Started](./development/getting-started.md)
2. Review [Tech Stack](./architecture/tech-stack.md)
3. Understand [Component Architecture](./frontend/component-architecture.md)
4. Follow [Coding Standards](./development/coding-standards.md)

### For Product Managers
1. Review [Product Overview](./product/README.md)
2. Check [Features](./product/features.md)
3. Understand [User Segments](./product/user-segments.md)

### For DevOps/Operations
1. Review [Deployment](./operations/deployment.md)
2. Configure [Environments](./operations/environments.md)
3. Implement [Security](./operations/security.md)

### For Frontend Developers
1. Understand [Component Architecture](./frontend/component-architecture.md)
2. Follow [Design System](./frontend/design-system.md) rules
3. Implement [Authentication](./frontend/authentication.md)

### For Backend Developers
1. Review [Serverless Functions](./backend/serverless-functions.md)
2. Implement [Form Processing](./backend/form-processing.md)
3. Set up [Monitoring](./backend/monitoring.md)

## 📝 Documentation Standards

- **Keep docs focused**: Each document should cover one main topic
- **Cross-reference liberally**: Link to related information in other docs
- **Update change logs**: Track significant updates in each document
- **Use examples**: Include code examples and practical guidance
- **Maintain consistency**: Follow the same structure across similar documents

## 🔄 Change Management

When updating documentation:
1. Update the relevant specific document
2. Update cross-references if structure changes
3. Update this main README if new documents are added
4. Consider impact on other related documents

## 📞 Contact

For questions about this documentation structure or content:
- **Architecture Questions**: Contact the development team
- **Product Questions**: Contact the product manager
- **Process Questions**: Contact the project lead

---

*This documentation is living and should be updated as the project evolves.*
