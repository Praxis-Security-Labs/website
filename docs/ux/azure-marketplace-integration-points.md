# Azure Marketplace Integration Points

## Integration Touchpoints

### 1. Header Navigation
- **Position**: Top-right corner
- **Label**: "Get on Azure Marketplace"
- **Style**: `btn-secondary` with Azure blue accent

### 2. Hero Section CTAs
- **Primary CTA**: "Start Free Trial"
- **Destination**: Azure Marketplace listing (URL from ASTRO_PUBLIC_MARKETPLACE_URL)
- **Analytics**: Track marketplace attribution

### 3. Pricing Page
- **Azure Badge**: "Available on Azure Marketplace" 
- **Direct Link**: "Deploy Now on Azure"
- **Benefits**: Simplified billing, enterprise compliance

### 4. Post-Demo Follow-up
- **Email Template**: Include Azure Marketplace link (URL from environment variable)
- **Sales Handoff**: Marketplace-specific benefits
- **Implementation**: Azure-native deployment guide

## MSAL Authentication Flow

```javascript
// Authentication popup implementation
const msalConfig = {
  auth: {
    clientId: import.meta.env.ASTRO_PUBLIC_AZURE_CLIENT_ID,
    authority: import.meta.env.ASTRO_PUBLIC_AZURE_AUTHORITY,
    redirectUri: import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL
  }
}

const authRequest = {
  scopes: ["User.Read"],
  prompt: "select_account"
}

// Popup login with redirect
const handleLogin = async () => {
  try {
    const loginResponse = await msalInstance.loginPopup(authRequest)
    window.location.href = import.meta.env.ASTRO_PUBLIC_PRAXIS_APP_URL
  } catch (error) {
    console.error("Login failed:", error)
  }
}
```

---
