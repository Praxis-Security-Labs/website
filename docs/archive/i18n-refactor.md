# Rapid i18n Fix Plan: Junior Developer Guide

This guide follows the official Astro i18n documentation to implement proper internationalization. We'll convert the current duplicated file system to use Astro's built-in i18n routing.

**Reference:** [Astro i18n Guide](https://docs.astro.build/en/guides/internationalization/) and [i18n Recipe](https://docs.astro.build/en/recipes/i18n/)

## Part 1: Current Implementation Audit

### Files That Need Fixing

**PAGES (Follow Astro's folder-based approach):**
```
❌ src/pages/segments/security-leaders.astro          → ✅ src/pages/en/segments/security-leaders.astro
❌ src/pages/segments/executives.astro                → ✅ src/pages/en/segments/executives.astro  
❌ src/pages/segments/managers.astro                  → ✅ src/pages/en/segments/managers.astro
❌ src/pages/segments/sat-teams.astro                 → ✅ src/pages/en/segments/sat-teams.astro
❌ src/pages/pricing.astro                            → ✅ src/pages/en/pricing.astro
❌ src/pages/resources/index.astro                    → ✅ src/pages/en/resources/index.astro
❌ src/pages/compliance/index.astro                   → ✅ src/pages/en/compliance/index.astro

✅ src/pages/no/* (Keep existing Norwegian pages - they're correctly placed!)
```

**COMPONENTS (Already good, just need small tweaks):**
```
✅ src/components/sections/SecurityLeadersHeroSection.tsx  (Already has language prop - good!)
✅ src/components/sections/ExecutivesHeroSection.tsx       (Need to add language prop)
✅ src/components/sections/ManagersHeroSection.tsx         (Need to add language prop)
✅ src/components/sections/SATTeamsHeroSection.tsx         (Need to add language prop)
```

## Part 2: Proper Astro i18n Setup (15 minutes)

### Step 1: Configure Astro
**File: `astro.config.mjs`** - Add this to your existing config:
```javascript
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'no'],
    routing: {
      prefixDefaultLocale: false // URLs: /pricing (EN), /no/pricing (NO)
    }
  },
  // ... your existing config
});
```

### Step 2: Create Translation Dictionary
**File: `src/i18n/ui.ts`** - Create this new file:
```typescript
export const languages = {
  en: 'English',
  no: 'Norsk',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.segments': 'Solutions',
    'nav.pricing': 'Prices',
    'nav.contact': 'Contact',
    'nav.resources': 'Resources',
  },
  no: {
    'nav.home': 'Hjem',
    'nav.about': 'Om Oss',
    'nav.segments': 'Løsninger',
    'nav.pricing': 'Priser',
    'nav.contact': 'Kontakt',
    'nav.resources': 'Ressurser',
  },
} as const;
```

### Step 3: Create i18n Utilities
**File: `src/i18n/utils.ts`** - Create this new file:
```typescript
import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getRelativeLocaleUrl(locale: keyof typeof ui, path: string) {
  if (locale === defaultLang) {
    return path;
  }
  return `/${locale}${path}`;
}
```

## Part 3: Move Files to Language Folders (45 minutes)

### The Astro Way: Language Folders
Instead of `[lang]` dynamic routing, Astro recommends using dedicated language folders:
- `src/pages/en/` for English pages
- `src/pages/no/` for Norwegian pages (already exists!)

### Fix 1: Create English Language Folder
**Create: `src/pages/en/segments/security-leaders.astro`**
```astro
---
import BaseLayout from '../../../layouts/BaseLayout.astro';
import { SecurityLeadersHeroSection } from '../../../components/sections/SecurityLeadersHeroSection';
import { ROIDemonstrationSection } from '../../../components/sections/ROIDemonstrationSection';
import { ExecutiveCommunicationSection } from '../../../components/sections/ExecutiveCommunicationSection';
import { TechnicalCredibilitySection } from '../../../components/sections/TechnicalCredibilitySection';
import { SecurityLeadersCaseStudiesSection } from '../../../components/sections/SecurityLeadersCaseStudiesSection';
import { SecurityLeadersContactSection } from '../../../components/sections/SecurityLeadersContactSection';
import { getLangFromUrl } from '../../../i18n/utils';

const lang = getLangFromUrl(Astro.url); // Will be 'en'

const title = 'For Security Leaders & CISOs - Praxis Navigator';
const description = 'Measure security training ROI and generate board-ready reports with behavioral monitoring. Praxis Navigator provides CISOs with data-driven security culture insights.';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description: description,
  inLanguage: 'en-US',
  // ... copy rest of structured data from existing file
};
---

<BaseLayout
  title={title}
  description={description}
  lang={lang}
  structuredData={structuredData}
  pageType="segment"
>
  <SecurityLeadersHeroSection language={lang} client:load />
  <ROIDemonstrationSection language={lang} client:load />
  <ExecutiveCommunicationSection language={lang} client:load />
  <TechnicalCredibilitySection language={lang} client:load />
  <SecurityLeadersCaseStudiesSection language={lang} client:load />
  <SecurityLeadersContactSection language={lang} client:load />
</BaseLayout>
```

### Fix 2-7: Move All Other English Pages
Simply copy the existing pages into the new `src/pages/en/` folder structure:

```bash
# Create the English folder structure
mkdir -p src/pages/en/{segments,resources,compliance}

# Move existing pages to English folder
mv src/pages/segments/security-leaders.astro src/pages/en/segments/
mv src/pages/segments/executives.astro src/pages/en/segments/
mv src/pages/segments/managers.astro src/pages/en/segments/
mv src/pages/segments/sat-teams.astro src/pages/en/segments/
mv src/pages/pricing.astro src/pages/en/
mv src/pages/resources/index.astro src/pages/en/resources/
mv src/pages/compliance/index.astro src/pages/en/compliance/
```

### Fix 3: Update Norwegian Pages (if needed)
The Norwegian pages are already correctly placed in `src/pages/no/`. Just add the missing ones:

**Create missing Norwegian pages by copying from English and updating language prop:**
```bash
# Copy missing Norwegian segment pages
cp src/pages/en/segments/executives.astro src/pages/no/segments/executives.astro
cp src/pages/en/segments/managers.astro src/pages/no/segments/managers.astro  
cp src/pages/en/segments/sat-teams.astro src/pages/no/segments/sat-teams.astro

# Update the language detection in each copied Norwegian file:
# Change: const lang = getLangFromUrl(Astro.url); // Will be 'en'
# To:     const lang = getLangFromUrl(Astro.url); // Will be 'no'
```

### Fix 4: Migrate Legal Pages (Consistency)
The legal pages are currently using the old `[lang]` approach. Move them to the folder structure for consistency:

```bash
# Create legal folders
mkdir -p src/pages/{en,no}/legal

# Move legal pages from [lang] to language folders
mv src/pages/[lang]/legal/* src/pages/en/legal/
cp src/pages/en/legal/* src/pages/no/legal/

# Remove old [lang] structure
rm -rf src/pages/\[lang\]/
```

## Part 4: Component Fixes (30 minutes)

### Missing Language Props

**Fix: `src/components/sections/ExecutivesHeroSection.tsx`** - Add this interface and prop:
```typescript
interface ExecutivesHeroSectionProps {
  language?: 'en' | 'no';
}

export const ExecutivesHeroSection: React.FC<ExecutivesHeroSectionProps> = ({ language = 'en' }) => {
  // Your existing content object is fine, just add the interface and prop
```

**Fix: `src/components/sections/ManagersHeroSection.tsx`** - Same change:
```typescript
interface ManagersHeroSectionProps {
  language?: 'en' | 'no';
}

export const ManagersHeroSection: React.FC<ManagersHeroSectionProps> = ({ language = 'en' }) => {
```

**Fix: `src/components/sections/SATTeamsHeroSection.tsx`** - Same change:
```typescript
interface SATTeamsHeroSectionProps {
  language?: 'en' | 'no';
}

export const SATTeamsHeroSection: React.FC<SATTeamsHeroSectionProps> = ({ language = 'en' }) => {
```

## Part 5: Cleanup (5 minutes)

### Remove Empty Directories
```bash
# Remove now-empty segment directory
rm -rf src/pages/segments/

# Clean up any remaining top-level pages (they're now in language folders)
# Only remove if they exist and aren't needed
rm -f src/pages/pricing.astro src/pages/resources/index.astro src/pages/compliance/index.astro
```

### Final Structure Should Look Like:
```
src/pages/
├── en/                     # English pages
│   ├── segments/
│   ├── resources/
│   ├── compliance/
│   └── pricing.astro
│   └── legal/               # English legal pages (move from [lang]/legal/)
├── no/                     # Norwegian pages (existing + new)
│   ├── segments/
│   ├── resources/
│   ├── compliance/
│   ├── pricing.astro
│   └── legal/             # Norwegian legal pages (move from [lang]/legal/)
├── index.astro             # Default homepage
└── api/                    # API routes
```

## Part 6: Proper Testing (15 minutes)

### Fix Astro's 404 Status Code Issue
**Problem**: Astro returns 200 status codes even for 404 pages, making curl testing unreliable.

**Solution**: Update `src/pages/404.astro` to return proper status codes:

```astro
---
// src/pages/404.astro
Astro.response.status = 404;
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found | Praxis Navigator</title>
</head>
<body>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go back to homepage</a>
</body>
</html>
```

### Better Testing Method
Instead of just checking status codes, check for actual content:

```bash
npm run dev

# Test by looking for actual page content, not just status codes

# Test English pages (should contain page-specific content):
echo "Testing English pages..."
curl -s http://localhost:4321/en/segments/security-leaders | grep -q "Security Leaders" && echo "✅ EN Security Leaders" || echo "❌ EN Security Leaders"
curl -s http://localhost:4321/en/segments/executives | grep -q "Executives\|Board" && echo "✅ EN Executives" || echo "❌ EN Executives"  
curl -s http://localhost:4321/en/segments/managers | grep -q "Managers\|Department" && echo "✅ EN Managers" || echo "❌ EN Managers"
curl -s http://localhost:4321/en/segments/sat-teams | grep -q "SAT Teams\|Training" && echo "✅ EN SAT Teams" || echo "❌ EN SAT Teams"
curl -s http://localhost:4321/en/pricing | grep -q "Pricing\|Trial" && echo "✅ EN Pricing" || echo "❌ EN Pricing"

# Test Norwegian pages (should contain Norwegian content):
echo "Testing Norwegian pages..."
curl -s http://localhost:4321/no/segments/security-leaders | grep -q "Sikkerhetsledere\|CISO" && echo "✅ NO Security Leaders" || echo "❌ NO Security Leaders"
curl -s http://localhost:4321/no/segments/executives | grep -q "Styre\|Ledere" && echo "✅ NO Executives" || echo "❌ NO Executives"
curl -s http://localhost:4321/no/segments/managers | grep -q "Avdelingsledere\|Manager" && echo "✅ NO Managers" || echo "❌ NO Managers"
curl -s http://localhost:4321/no/segments/sat-teams | grep -q "SAT Team\|Opplæring" && echo "✅ NO SAT Teams" || echo "❌ NO SAT Teams"
curl -s http://localhost:4321/no/pricing | grep -q "Priser\|Prøveperiode" && echo "✅ NO Pricing" || echo "❌ NO Pricing"

# Test that 404s actually return 404 content:
echo "Testing 404 behavior..."
curl -s http://localhost:4321/nonexistent-page | grep -q "404.*Not Found" && echo "✅ 404 page works" || echo "❌ 404 page broken"
```

### Manual Browser Testing
Also test manually in browser to verify:
```
✅ http://localhost:4321/en/segments/security-leaders (should show English content)
✅ http://localhost:4321/no/segments/security-leaders (should show Norwegian content)
❌ http://localhost:4321/nonexistent-page (should show 404 page)
```

## Summary: Astro-Compliant i18n Implementation

This approach follows Astro's official recommendations:

- ✅ **Language-based folder structure** (`/en/` and `/no/`)
- ✅ **Built-in i18n routing** via `astro.config.mjs`
- ✅ **Translation utilities** following Astro patterns
- ✅ **No duplicate logic** - just proper organization
- ✅ **Maintains existing functionality** with minimal changes

**Benefits:**
- Follows official Astro best practices
- Much simpler than custom `[lang]` routing
- Easier to maintain and extend
- No complex dynamic routing logic needed
- SEO-friendly with proper language detection

**Total time:** ~1 hour (much faster than the original plan!)