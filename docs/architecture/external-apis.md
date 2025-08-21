# External APIs

## Azure MSAL B2B API

- **Purpose**: Enterprise authentication integration with Azure AD B2B for organizational customers
- **Documentation**: https://docs.microsoft.com/en-us/azure/active-directory/external-identities/b2b-fundamentals
- **Base URL(s)**: https://login.microsoftonline.com/organizations/
- **Authentication**: OAuth 2.0 with PKCE flow for enterprise directories
- **Rate Limits**: Standard Azure AD limits (varies by organization tenant)

**Key Endpoints Used**:
- `GET /oauth2/v2.0/authorize` - Initiate authentication flow for enterprise users
- `POST /oauth2/v2.0/token` - Exchange authorization code for tokens

**Integration Notes**: Direct redirect authentication flow for seamless UX transition to main application, enterprise directory integration via Azure AD B2B

## Azure Marketplace Listing

- **Purpose**: External product listing where customers can view and purchase Praxis Navigator
- **Documentation**: https://docs.microsoft.com/en-us/azure/marketplace/
- **Base URL(s)**: Configured via ASTRO_PUBLIC_MARKETPLACE_URL environment variable
- **Authentication**: None required (public listing)
- **Rate Limits**: No specific limits for external links

**Key URLs Used**:
- Azure Marketplace listing page for Praxis Navigator (URL stored in environment variable)

**Integration Notes**: Simple external links with UTM tracking for attribution, URL configured via environment variable for easy updates

## HubSpot CRM API

- **Purpose**: Lead management, contact creation, and email automation workflows
- **Documentation**: https://developers.hubspot.com/docs/api/overview
- **Base URL(s)**: https://api.hubapi.com/
- **Authentication**: API key authentication
- **Rate Limits**: 100 requests per 10 seconds (standard tier)

**Key Endpoints Used**:
- `POST /crm/v3/objects/contacts` - Create lead/contact in HubSpot
- `POST /crm/v3/objects/deals` - Create deal for qualified leads
- `GET /crm/v3/properties/contacts` - Retrieve contact properties

**Integration Notes**: Direct API integration for comprehensive lead management, automated email workflows through HubSpot

## Cloudflare Workers API

- **Purpose**: Form processing, email handling, and API integration endpoints
- **Documentation**: https://developers.cloudflare.com/workers/
- **Base URL(s)**: https://{website}.pages.dev/api/
- **Authentication**: Request validation, rate limiting
- **Rate Limits**: 100,000 requests/day on free tier

**Key Endpoints Used**:
- `POST /api/forms/submit` - Lead form processing
- `GET /api/marketplace/redirect` - Marketplace link tracking

**Integration Notes**: Edge deployment for global performance, integrated with hosting platform

---
