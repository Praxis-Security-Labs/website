# API Specification (Simplified)

**Status**: Approved  
**Created**: 2025-08-20  
**Author**: Winston (Architect)  
**Last Updated**: 2025-08-20

## 📋 Overview

This document outlines the minimal API requirements for the Praxis Navigator promotional website. Following KISS principles, we use HubSpot for all form processing, eliminating the need for custom backend APIs.

## 🎯 No-Backend Strategy

### Why No Custom APIs?
- **HubSpot Integration**: Already using HubSpot CRM, forms integrate seamlessly
- **Static Site**: Pure Astro static generation with no server-side logic needed
- **Redirect Authentication**: Simple Azure AD redirect, no token handling
- **External Analytics**: Cloudflare Web Analytics handles tracking

### What This Eliminates:
- ❌ Custom serverless functions
- ❌ Form validation logic
- ❌ Lead processing workflows
- ❌ Database management
- ❌ Email sending logic
- ❌ API rate limiting
- ❌ Error handling complexity

## 🛠️ HubSpot Integration (Recommended)

Since you're already using HubSpot as your CRM, this is the optimal solution:

### HubSpot Forms Setup

#### 1. Contact Form Integration
```typescript
// React component for HubSpot form
import { useEffect } from 'react';

interface HubSpotFormProps {
  formId: string;
  onFormSubmit?: () => void;
}

const HubSpotForm: React.FC<HubSpotFormProps> = ({ formId, onFormSubmit }) => {
  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/v2.js';
    script.onload = () => {
      // @ts-ignore
      hbspt.forms.create({
        portalId: 'YOUR_PORTAL_ID',
        formId: formId,
        target: `#hubspot-form-${formId}`,
        onFormSubmit: onFormSubmit,
      });
    };
    document.body.appendChild(script);
  }, [formId, onFormSubmit]);

  return <div id={`hubspot-form-${formId}`} />;
};
```

#### 2. Demo Request Form
```typescript
// Demo form with custom styling
const DemoRequestForm = () => (
  <HubSpotForm 
    formId="demo-request-form-id"
    onFormSubmit={() => {
      // Optional: Track conversion
      gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
      });
    }}
  />
);
```

### HubSpot Configuration
| Setting | Value |
|---------|-------|
| **Portal ID** | Your HubSpot portal ID |
| **Contact Form ID** | Create in HubSpot Forms |
| **Demo Form ID** | Create separate form for demo requests |
| **Thank You Page** | Redirect to `/thank-you` page |
| **Notifications** | Configure in HubSpot workflows |

### Benefits of HubSpot Integration
- ✅ **Seamless CRM Integration**: Leads go directly into your existing HubSpot CRM
- ✅ **Lead Scoring**: Automatic lead qualification based on HubSpot rules
- ✅ **Email Workflows**: Trigger automated follow-up sequences
- ✅ **Analytics Integration**: Built-in form analytics and conversion tracking
- ✅ **GDPR Compliance**: HubSpot handles data privacy requirements
- ✅ **No Custom Backend**: Zero maintenance for form processing
- ✅ **Professional Styling**: HubSpot forms can be styled to match your brand

## 🔄 Simple Redirect Endpoints (Optional)

### Azure Marketplace Links

**Purpose**: Track clicks to Azure Marketplace listing

#### Static redirect pages (no API needed)
```astro
---
// src/pages/marketplace.astro
export const prerender = true;

// Redirect logic can be handled client-side
---
<script>
  // Client-side redirect with UTM tracking
  const urlParams = new URLSearchParams(window.location.search);
  const marketplaceUrl = new URL('https://azuremarketplace.microsoft.com/marketplace/apps/praxis');
  
  // Preserve UTM parameters
  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
    const value = urlParams.get(param);
    if (value) marketplaceUrl.searchParams.set(param, value);
  });
  
  window.location.href = marketplaceUrl.toString();
</script>
```

### Authentication Redirect

**Purpose**: Redirect users to Azure AD B2B authentication

#### Static redirect page
```astro
---
// src/pages/auth/login.astro
export const prerender = true;
---
<script>
  // Simple client-side redirect to Azure AD
  const authUrl = 'https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize';
  const params = new URLSearchParams({
    client_id: 'YOUR_AZURE_CLIENT_ID',
    response_type: 'code',
    redirect_uri: 'https://app.praxisnavigator.io',
    scope: 'openid profile email',
    response_mode: 'query'
  });
  
  window.location.href = `${authUrl}?${params.toString()}`;
</script>
```

## 🔒 Security Considerations (Simplified)

### HubSpot Security
- **Built-in Protection**: HubSpot provides spam protection and bot detection
- **GDPR Compliance**: HubSpot handles data privacy automatically
- **SSL/TLS**: All form submissions encrypted via HubSpot's infrastructure
- **Data Processing**: No sensitive data stored on promotional site

### Client-Side Security
```typescript
// Minimal security for static site
interface SecurityHeaders {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' js.hsforms.net js.hs-analytics.net; style-src 'self' 'unsafe-inline'";
  'X-Frame-Options': 'DENY';
  'X-Content-Type-Options': 'nosniff';
  'Referrer-Policy': 'strict-origin-when-cross-origin';
}
```

### Form Validation (Client-Side Only)
```typescript
// Basic client-side validation before HubSpot submission
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateRequired = (value: string) => value.trim().length > 0;

// No server-side validation needed - HubSpot handles everything
```

## 🎯 Implementation Summary

### What You Need to Build
1. **Static Astro Site**: Pages, components, styling
2. **HubSpot Form Integration**: Embed HubSpot forms in React components
3. **Simple Redirects**: Static pages that redirect to Azure AD and Marketplace
4. **Basic Analytics**: Cloudflare Web Analytics integration

### What You DON'T Need to Build
- ❌ Custom API endpoints
- ❌ Form validation logic
- ❌ Database schemas
- ❌ Email sending
- ❌ Lead processing workflows
- ❌ Authentication handling
- ❌ Rate limiting
- ❌ Error handling for forms

### HubSpot Setup Checklist
- [ ] Create contact form in HubSpot
- [ ] Create demo request form in HubSpot  
- [ ] Configure form styling to match brand
- [ ] Set up automated email workflows
- [ ] Configure lead scoring rules
- [ ] Test form submissions
- [ ] Set up conversion tracking

### Total Development Time
- **With Custom Backend**: 2-3 weeks
- **With HubSpot Integration**: 3-5 days

The KISS approach saves significant development time while providing better lead management through your existing HubSpot CRM.

## 🔗 Related Documentation

- [HubSpot Integration Guide](../operations/hubspot-setup.md) - Detailed HubSpot form setup
- [Frontend Components](../frontend/component-architecture.md) - React HubSpot form components
- [Static Redirects](../frontend/routing.md) - Astro redirect page implementation
- [Deployment](../operations/deployment.md) - Static site deployment to Cloudflare Pages

---

*This simplified approach eliminates backend complexity by leveraging HubSpot for all form processing, following KISS principles while providing superior lead management through existing CRM integration.*
