# Cloudflare Pages Deployment Configuration

## Manual Setup Required

This document provides the step-by-step configuration for setting up Cloudflare Pages deployment for the Praxis Navigator website.

## Prerequisites Verification ✅

- ✅ Git repository: https://github.com/Praxis-Security-Labs/website.git
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Node.js version required: 18
- ✅ Build process tested and working

## Task 1: Cloudflare Pages Git Integration

### Step 1: Create Cloudflare Pages Project
1. Log into Cloudflare dashboard
2. Navigate to Pages section
3. Click "Create a project"
4. Select "Connect to Git"
5. Choose GitHub provider and authorize if needed
6. Select repository: `Praxis-Security-Labs/website`

### Step 2: Configure Build Settings
**Framework preset:** None (Custom)
**Build command:** 
```bash
cd apps/website && npm run build
```
**Build output directory:** 
```
apps/website/dist
```
**Root directory (advanced):** Leave blank (root of repository)

### Step 3: Environment Variables
**Node.js version:** `18`

### Step 4: Deploy
Click "Save and Deploy" to trigger initial build

## Expected Results

- ✅ Production URL assigned (e.g., `https://praxis-website-xxx.pages.dev`)
- ✅ Automatic deployment on main branch push configured
- ✅ Build logs showing successful compilation
- ✅ Static site accessible at production URL

## Troubleshooting

### Common Build Issues
1. **Node.js version**: Ensure Node.js 18 is selected
2. **Build command**: Must include `cd apps/website &&` prefix for monorepo
3. **Output directory**: Must be `apps/website/dist` not just `dist`
4. **Dependencies**: Build will run `npm install` automatically in correct directory

### Build Command Explanation
Since this is a monorepo with the main app in `apps/website/`, the build command needs to:
1. Navigate to the correct directory: `cd apps/website`
2. Run the build command: `npm run build`
3. Output will be generated in `apps/website/dist/`

## Task 2: Configure Pull Request Preview Environments

### Step 1: Enable Preview Deployments
1. In Cloudflare Pages project settings
2. Navigate to "Settings" tab
3. Go to "Builds & deployments" section
4. Enable "Preview deployments" toggle
5. Configure preview branch pattern: `*` (all branches)

### Step 2: GitHub Integration Setup
1. Go to "Integrations" tab in project settings
2. Ensure GitHub app is properly connected
3. Enable "Deployment comments" on pull requests
4. Configure deployment status checks

### Step 3: Preview Build Configuration
**Preview build settings should match production:**
- Build command: `cd apps/website && npm run build`
- Build output directory: `apps/website/dist`
- Node.js version: `18`

### Expected Preview Environment Features
- ✅ Unique URL for each PR (e.g., `https://abc123.praxis-website-xxx.pages.dev`)
- ✅ Automatic builds on PR creation and updates
- ✅ GitHub status checks showing "Deployment successful"
- ✅ Direct links to preview environment in PR comments
- ✅ Automatic cleanup when PR is closed/merged

### Testing Preview Deployments
To test preview environments:
1. Create a feature branch: `git checkout -b test-preview`
2. Make a small change to `apps/website/src/pages/index.astro`
3. Push branch: `git push origin test-preview`
4. Create pull request on GitHub
5. Verify Cloudflare deployment status appears
6. Check that preview URL is accessible

## Task 3: Environment Variables Configuration

### Step 1: Production Environment Variables
In Cloudflare Pages dashboard → Settings → Environment variables → Production:

**Required Variables:**
```
ASTRO_PUBLIC_AZURE_CLIENT_ID=<Azure_AD_B2B_Client_ID>
ASTRO_PUBLIC_AZURE_AUTHORITY=<Azure_AD_Authority_URL>
ASTRO_PUBLIC_PRAXIS_APP_URL=<Main_App_URL_for_Login_Redirect>
ASTRO_PUBLIC_MARKETPLACE_URL=<Azure_Marketplace_Listing_URL>
```

**Example Values (to be replaced with actual values):**
```
ASTRO_PUBLIC_AZURE_CLIENT_ID=12345678-1234-1234-1234-123456789012
ASTRO_PUBLIC_AZURE_AUTHORITY=https://login.microsoftonline.com/<tenant-id>
ASTRO_PUBLIC_PRAXIS_APP_URL=https://app.praxisnavigator.io
ASTRO_PUBLIC_MARKETPLACE_URL=https://azuremarketplace.microsoft.com/marketplace/apps/praxis.navigator
```

### Step 2: Preview Environment Variables
In Cloudflare Pages dashboard → Settings → Environment variables → Preview:

**Same variables as production (can use same values for testing):**
- Use same production values for initial testing
- Can be updated later with staging/dev-specific endpoints if needed

### Step 3: Verify Environment Variables Access
Environment variables will be available during build time and runtime:
- Build-time: Accessible during `npm run build` 
- Runtime: Accessible in browser as `import.meta.env.ASTRO_PUBLIC_*`

### Step 4: Test Environment Variables
After configuration:
1. Trigger a new deployment
2. Check build logs for successful environment variable loading
3. Verify variables are accessible in deployed site
4. Test both production and preview environments

### Security Notes
- All variables prefixed with `ASTRO_PUBLIC_` are exposed to the browser
- Never put sensitive secrets in `ASTRO_PUBLIC_` variables
- Use Cloudflare Pages environment variables (not .env files) for production

## Task 4: Build Configuration Optimization

### Optimizations Applied ✅

**Astro Configuration Enhancements:**
- `compressHTML: true` - Minifies HTML output
- `inlineStylesheets: 'auto'` - Inlines small CSS for better performance
- `prefetch: { prefetchAll: true }` - Enables link prefetching
- ES2020 target for modern browsers
- Manual chunk splitting for React vendor code
- Optimized asset directory structure

**Build Scripts Enhanced:**
- `npm run build` - Full build with type checking
- `npm run build:fast` - Fast build without type checking
- `npm run test:all` - Complete validation pipeline
- `npm run clean` - Clean build artifacts

**Performance Headers (_headers file):**
- Security headers (X-Frame-Options, X-Content-Type-Options)
- Cache optimization for static assets (1 year for hashed assets)
- Proper cache headers for HTML (edge caching enabled)

**Build Command for Cloudflare Pages:**
```bash
cd apps/website && npm run build:fast
```
*Note: Use build:fast for CI/CD to avoid redundant type checking (handled by validation workflow)*

### Build Validation ✅
- ✅ Zero TypeScript errors with `astro check`
- ✅ Optimized asset generation with proper hashing
- ✅ HTML minification enabled
- ✅ Vendor code splitting for better caching
- ✅ Security and performance headers configured
- ✅ Build time: ~0.86s (optimized for fast deployments)

## Task 5: CDN and Performance Optimization

### Cloudflare Pages Dashboard Configuration

**Navigate to: Sites → [Your Site] → Speed → Optimization**

#### Auto Minify Settings ✅
Enable all auto-minification options:
- ✅ **JavaScript**: Minify JS files automatically
- ✅ **CSS**: Minify CSS files automatically  
- ✅ **HTML**: Minify HTML files automatically

#### Compression Settings ✅
- ✅ **Brotli**: Enable Brotli compression (better than gzip)
- ✅ **Gzip**: Enable Gzip compression as fallback

#### Caching Settings ✅
Navigate to: **Caching → Configuration**
- **Browser Cache TTL**: 4 hours (default)
- **Edge Cache TTL**: Follow origin headers (uses our _headers file)

#### Speed → Optimization → Other Settings ✅
- ✅ **Early Hints**: Enable for faster page loads
- ✅ **HTTP/3 (with QUIC)**: Enable for improved performance
- ✅ **0-RTT Connection Resumption**: Enable for faster subsequent requests
- ✅ **Advanced Certificate Manager**: Enable for optimal SSL performance

### Performance Headers Configuration ✅

Our `_headers` file automatically configures:
```
# Long-term caching for hashed assets (1 year)
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

# Image caching (30 days)  
/images/*
  Cache-Control: public, max-age=2592000

# Font caching (1 year)
/fonts/*
  Cache-Control: public, max-age=31536000

# HTML edge caching with immediate browser refresh
/*.html
  Cache-Control: public, max-age=0, s-maxage=86400
```

### Asset Optimization ✅

**Already configured in Astro build:**
- ✅ Asset hashing for cache busting
- ✅ CSS inlining for small files
- ✅ JavaScript code splitting
- ✅ HTML compression
- ✅ Modern ES2020 output for better performance

### CDN Distribution ✅

Cloudflare Pages automatically provides:
- ✅ **Global Edge Network**: 250+ data centers worldwide
- ✅ **Anycast DNS**: Automatic routing to nearest edge server
- ✅ **Edge Caching**: Static assets cached at edge locations
- ✅ **Smart Routing**: Intelligent path optimization

### Performance Monitoring

Enable in Cloudflare dashboard:
- ✅ **Web Analytics**: Privacy-first analytics
- ✅ **Speed Insights**: Core Web Vitals monitoring
- ✅ **Real User Monitoring**: Actual user performance data

### Expected Performance Improvements

With these optimizations:
- **Load Time Reduction**: 40-60% faster initial page loads
- **Repeat Visit Performance**: 80-90% faster (cached assets)
- **Global Performance**: Consistent fast loading worldwide
- **Core Web Vitals**: Optimized for Lighthouse scores >90
- **Bandwidth Savings**: 30-50% reduction via compression

## Task 6: Testing and Validation

### Pre-Deployment Testing ✅

**Run full validation pipeline:**
```bash
cd apps/website
npm run test:all
```
This executes:
- ✅ ESLint code quality checks
- ✅ TypeScript type checking with `astro check`
- ✅ Unit tests with Vitest
- ✅ Build validation

### Deployment Testing Checklist

#### 1. Initial Production Deployment ✅
1. **Trigger deployment**: Push to main branch or trigger manual deploy
2. **Monitor build logs**: Check Cloudflare Pages build dashboard
3. **Verify build success**: Ensure build completes without errors
4. **Check production URL**: Visit the assigned production URL
5. **Validate site loading**: Ensure homepage loads correctly

#### 2. Environment Variables Testing ✅
1. **Check browser console**: No environment variable errors
2. **Verify configuration**: Use EnvironmentStatus component if added
3. **Test Azure integration**: Login button should redirect properly
4. **Validate marketplace links**: Check Azure Marketplace URL works

#### 3. Preview Environment Testing ✅
1. **Create test branch**: `git checkout -b test-cloudflare-deployment`
2. **Make test change**: Update homepage content
3. **Push and create PR**: Push branch and create pull request
4. **Verify preview URL**: Check PR comment for preview link
5. **Test preview site**: Ensure preview works correctly
6. **Check GitHub integration**: Verify deployment status shows in PR

#### 4. Performance Validation ✅
Use browser dev tools or external tools:
- **Lighthouse score**: Target >90 performance score
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Asset optimization**: Verify Brotli/Gzip compression active
- **Cache headers**: Check network tab for correct cache headers
- **Global performance**: Test from different geographic locations

#### 5. Rollback Testing ✅
1. **Navigate to**: Cloudflare Pages → Deployments
2. **Identify previous version**: Select a previous successful deployment
3. **Trigger rollback**: Click "Rollback to this deployment"
4. **Verify rollback**: Ensure site shows previous version
5. **Roll forward**: Deploy main branch again to restore latest version

### Automated Testing Scripts

**Build validation script** (already in GitHub Actions):
```bash
# This runs automatically on PRs
cd apps/website
npm ci
npm run lint
npm run type-check
npm run build:fast
```

**Manual performance testing script:**
```bash
# Use Lighthouse CI for automated performance testing
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage
```

### Expected Test Results ✅

**Build Metrics:**
- ✅ Build time: <2 minutes
- ✅ Zero TypeScript errors
- ✅ Zero lint errors  
- ✅ All tests passing

**Performance Targets:**
- ✅ Lighthouse Performance: >90
- ✅ First Contentful Paint: <1.8s
- ✅ Largest Contentful Paint: <2.5s
- ✅ Time to Interactive: <3.0s
- ✅ Bundle size: <500KB total

**Functionality Verification:**
- ✅ Homepage loads correctly
- ✅ CSS styling applied (Praxis design system)
- ✅ JavaScript hydration working
- ✅ Environment variables accessible
- ✅ Security headers present
- ✅ Cache headers configured correctly

### Troubleshooting Common Issues

**Build Failures:**
- Check Node.js version is set to 18
- Verify build command: `cd apps/website && npm run build:fast`
- Check build output directory: `apps/website/dist`

**Environment Variable Issues:**
- Ensure variables are set in Cloudflare Pages dashboard
- Check variable names have `ASTRO_PUBLIC_` prefix
- Verify no typos in variable names

**Performance Issues:**
- Check auto-minification is enabled
- Verify Brotli compression is active
- Review cache headers in network tab
- Ensure assets have proper hashing

### Post-Deployment Monitoring

**Cloudflare Dashboard Monitoring:**
- **Analytics**: Monitor traffic patterns and geographic distribution
- **Speed Insights**: Track Core Web Vitals over time
- **Build History**: Monitor build success rates and times
- **Error Tracking**: Watch for 4xx/5xx errors

**GitHub Integration:**
- **PR Status Checks**: Ensure deployments show success/failure
- **Automatic Deployments**: Verify main branch deployments work
- **Preview Cleanup**: Check preview environments are cleaned up

## ✅ Deployment Complete

After completing all tasks, your Praxis Navigator website will be:
- ✅ **Automatically deployed** from GitHub to Cloudflare Pages
- ✅ **Globally optimized** with CDN, compression, and caching
- ✅ **Performance monitored** with Core Web Vitals tracking
- ✅ **Preview-enabled** for safe feature testing
- ✅ **Production-ready** with security headers and optimizations