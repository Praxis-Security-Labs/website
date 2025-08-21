# Asset Placement Guide - Praxis Navigator Website

**Date**: August 21, 2025  
**Purpose**: Guide for organizing and placing existing assets  
**Status**: Ready for Implementation  

## Quick Reference - Where to Place Your Assets

### 🎯 **Immediate Priority Assets (Place These First)**

#### Logos
- **Your PNG logos** → `/apps/website/public/images/logos/`
  - Rename to: `praxis-navigator-logo.png`, `praxis-navigator-logo-horizontal.png`
- **Your SVG logos** → `/apps/website/public/images/logos/`
  - Rename to: `praxis-navigator-logo.svg`, `praxis-navigator-logo-horizontal.svg`

#### Kai Roer Photos
- **Professional headshot (small)** → `/apps/website/public/images/about/`
  - Rename to: `kai-roer-professional-150x150.jpg`
  - Used in: Homepage Authority Section
- **Professional headshot (large)** → `/apps/website/public/images/about/`
  - Rename to: `kai-roer-professional-300x300.jpg`
  - Used in: About page hero section

#### Book Covers
- **"The Security Culture Playbook" cover** → `/apps/website/public/images/books/`
  - Rename to: `security-culture-playbook-cover-300x400.jpg`
- **"Build a Security Culture" cover** → `/apps/website/public/images/books/`
  - Rename to: `build-security-culture-cover-300x400.jpg`

## Detailed Asset Organization

### Directory Structure Created
```
/apps/website/public/
├── images/
│   ├── logos/ ← Place all logo files here
│   ├── about/ ← Place all Kai Roer photos here
│   ├── books/ ← Place all book covers here
│   └── (root) ← Place Open Graph images here
├── downloads/ ← Place all PDF documents here
└── favicon.svg (already exists)
```

### Asset Categories & Placement

#### 1. **Logos & Branding** 
**Destination**: `/apps/website/public/images/logos/`

| Your Asset | Rename To | Dimensions | Usage |
|------------|-----------|------------|-------|
| Main logo PNG | `praxis-navigator-logo.png` | Any size | Header, footer, general use |
| Main logo SVG | `praxis-navigator-logo.svg` | Vector | Preferred for web (scalable) |
| Horizontal logo | `praxis-navigator-logo-horizontal.svg` | Vector | Alternative layout |

**Currently Referenced In Code**:
- `src/layouts/BaseLayout.astro` (line 70)
- `src/components/layout/Header.tsx`

#### 2. **Kai Roer Professional Photos**
**Destination**: `/apps/website/public/images/about/`

| Your Asset | Rename To | Dimensions | Usage |
|------------|-----------|------------|-------|
| Professional headshot (small) | `kai-roer-professional-150x150.jpg` | 150x150px | Homepage Authority Section |
| Professional headshot (large) | `kai-roer-professional-300x300.jpg` | 300x300px | About page hero |
| Speaking/conference photo | `kai-roer-speaking-400x300.jpg` | 400x300px | Timeline sections |

**Currently Referenced In Code**:
- `src/components/sections/AuthoritySection.tsx` (line 27)
- `src/pages/about/kai-roer.astro` (line 25)

#### 3. **Book Covers & Publications**
**Destination**: `/apps/website/public/images/books/`

| Your Asset | Rename To | Dimensions | Usage |
|------------|-----------|------------|-------|
| Security Culture Playbook cover | `security-culture-playbook-cover-300x400.jpg` | 300x400px | Publications section (primary) |
| Build a Security Culture cover | `build-security-culture-cover-300x400.jpg` | 300x400px | Publications section |
| Other book covers | `{book-title}-cover-300x400.jpg` | 300x400px | Publications section |

**Currently Referenced In Code**:
- `src/components/sections/PublicationsSection.tsx`
- Structured data in About page (books schema)

#### 4. **Social Media & SEO Images**
**Destination**: `/apps/website/public/images/`

| Your Asset | Rename To | Dimensions | Usage |
|------------|-----------|------------|-------|
| Default Open Graph image | `og-praxis-navigator-default.png` | 1200x630px | Social media sharing |
| Kai Roer OG image | `about/kai-roer-og-image.png` | 1200x630px | About page sharing |

**Currently Referenced In Code**:
- `src/layouts/BaseLayout.astro` (line 23)
- `src/pages/about/kai-roer.astro` (line 143)

#### 5. **Downloadable Documents**
**Destination**: `/apps/website/public/downloads/`

| Your Asset | Rename To | Format | Usage |
|------------|-----------|--------|-------|
| Professional biography | `kai-roer-professional-bio.pdf` | PDF | About page download |
| Security Culture Framework | `security-culture-framework.pdf` | PDF | Research resource |
| Publications list | `kai-roer-publications.pdf` | PDF | Academic portfolio |

**Currently Referenced In Code**:
- `src/pages/about/kai-roer.astro` (line 319)

## Step-by-Step Implementation

### Phase 1: Critical Assets (Do This First)
1. **Place logos in `/images/logos/`**
   - Update Header.tsx to use actual logo files instead of text
   - Update BaseLayout.astro structured data logo reference

2. **Place Kai Roer photos in `/images/about/`**
   - Replace placeholder paths in AuthoritySection.tsx
   - Update About page hero section image reference

3. **Place book covers in `/images/books/`**
   - Update PublicationsSection.tsx with actual book cover images

### Phase 2: SEO & Social Enhancement
4. **Create and place Open Graph images in `/images/`**
   - Update meta tags in BaseLayout.astro
   - Test social media sharing previews

5. **Place downloadable PDFs in `/downloads/`**
   - Verify download links work correctly
   - Test PDF accessibility and formatting

### Phase 3: Optimization & Testing
6. **Optimize all images for web**
   - Resize to specified dimensions
   - Compress for web performance
   - Create WebP alternatives if possible

7. **Test everything**
   - Verify all images display correctly
   - Check mobile responsiveness
   - Validate social media previews

## Asset Quality Requirements

### Technical Specifications
- **Image Format**: JPG for photos, PNG for graphics with transparency, SVG for logos
- **Quality**: High resolution but web-optimized (under 500KB per image)
- **Naming**: Lowercase, hyphen-separated, descriptive filenames
- **Alt Text**: Will be added during implementation for SEO and accessibility

### Professional Standards
- **Photography**: Professional lighting, appropriate business attire, clean backgrounds
- **Logo**: Clean, scalable, consistent with brand identity
- **Book Covers**: High-quality scans or official publisher images
- **Documents**: Professional formatting with Praxis Navigator branding

## Testing Checklist

After placing assets, verify:
- [ ] Logos display in header and footer
- [ ] Kai Roer photos appear on homepage and about page
- [ ] Book covers show in publications section
- [ ] Download links work for all PDFs
- [ ] Images display correctly on mobile devices
- [ ] Social media sharing shows proper previews
- [ ] No broken image links anywhere on site

## Next Steps After Asset Placement

1. **Run the website locally** to see your assets in action
2. **Review and optimize** any images that need quality improvements  
3. **Test social sharing** on LinkedIn, Twitter, Facebook
4. **Update content** if any asset names or descriptions need changes
5. **Consider professional photography** if current photos need enhancement

## Need Help?

If you have questions about:
- **Where to place a specific asset** → Check the tables above
- **How to rename files** → Use the exact filenames specified
- **Image quality requirements** → See Technical Specifications section
- **Testing your implementation** → Follow the Testing Checklist

The website code is already set up to use these assets - you just need to place them in the right locations with the right names!
