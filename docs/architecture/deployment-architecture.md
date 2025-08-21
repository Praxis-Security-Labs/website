# Deployment Architecture

## Deployment Strategy

**Frontend Deployment:**
- **Platform**: Cloudflare Pages with Git integration
- **Trigger**: Automatic deployment on push to `main` branch
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **CDN/Edge**: Global Cloudflare CDN with automatic edge caching

**Serverless Functions:**
- **Platform**: Cloudflare Workers (integrated with Pages)
- **Build**: Automatic TypeScript compilation via Cloudflare's build system
- **Deployment**: Automatic with Pages Functions - no separate CI/CD needed

**Content Management:**
- **Platform**: Headless CMS with webhook triggers
- **Build Trigger**: Automatic rebuild on content changes via Cloudflare Pages webhooks
- **Preview**: Automatic branch deployments for PR previews

## Cloudflare Pages Git Integration

Instead of a traditional CI/CD pipeline, Cloudflare Pages provides **automatic Git-based deployment**:

**Features:**
- ✅ **Automatic Deployments**: Every push to `main` triggers a new deployment
- ✅ **Preview Deployments**: Pull requests get unique preview URLs
- ✅ **Build Cache**: Cloudflare caches dependencies and build artifacts
- ✅ **Rollback Support**: One-click rollback to previous deployments
- ✅ **Environment Variables**: Managed through Cloudflare dashboard
- ✅ **Build Logs**: Real-time build monitoring and error reporting

**Configuration:**
```javascript
// Cloudflare Pages Build Configuration
{
  "build": {
    "command": "npm run build",
    "destination": "dist",
    "root_dir": "/",
    "env_vars": {
      "NODE_VERSION": "18"
    }
  },
  "preview": {
    "command": "npm run build",
    "destination": "dist"
  }
}
```

**Why No Separate CI/CD Pipeline Needed:**
- **Cloudflare Handles Everything**: Build, test, deploy, and host all integrated
- **Simpler Architecture**: Fewer moving parts to maintain and secure
- **Cost Effective**: No GitHub Actions minutes or external CI/CD costs
- **Edge Performance**: Built-in global CDN and edge optimization
- **Zero Configuration**: Works out of the box with Git repository

## Environments

| Environment | Frontend URL | Functions URL | Purpose |
|-------------|--------------|---------------|---------|
| Development | http://localhost:3000 | http://localhost:3000/api | Local development |
| Staging | https://staging-praxis.pages.dev | https://staging-praxis.pages.dev/api | Pre-production testing |
| Production | https://praxisnavigator.io | https://praxisnavigator.io/api | Live environment |

---
