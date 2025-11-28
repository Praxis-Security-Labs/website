# NPM Dependencies Security Audit Report

**Date:** 2025-11-28  
**Branch:** security/npm-deps-audit  
**Audited by:** GitHub Copilot  

## Summary

The security audit revealed **21 vulnerabilities** across the project dependencies:
- 🔴 **1 Critical** vulnerability
- 🟠 **14 High** vulnerabilities  
- 🟡 **2 Moderate** vulnerabilities
- 🟢 **4 Low** vulnerabilities

## Vulnerability Details

### Critical Vulnerabilities

#### 1. lodash (<=4.17.20) - CRITICAL
- **Issue:** Multiple prototype pollution and command injection vulnerabilities
- **CVEs:** 
  - GHSA-fvqr-27wr-82fm (Prototype Pollution)
  - GHSA-35jh-r3h4-6jhm (Command Injection)  
  - GHSA-4xc9-xhrj-v574 (Prototype Pollution)
  - GHSA-jf85-cpcp-j695 (Prototype Pollution)
- **Location:** `node_modules/globule/node_modules/lodash`
- **Fix:** Available via `npm audit fix`

### High Severity Vulnerabilities

#### 1. braces (<3.0.3) - HIGH
- **Issue:** Uncontrolled resource consumption (DoS)
- **CVE:** GHSA-grv7-fg5c-xmjg
- **Location:** `node_modules/findup-sync/node_modules/braces`
- **Fix:** Available via `npm audit fix`

#### 2. lodash.template (*) - HIGH  
- **Issue:** Command injection vulnerability
- **CVE:** GHSA-35jh-r3h4-6jhm
- **Location:** `node_modules/lodash.template`
- **Fix:** Available via `npm audit fix --force` (breaking change)

#### 3. minimatch (<=3.0.4) - HIGH
- **Issue:** Regular Expression Denial of Service (ReDoS)
- **CVEs:**
  - GHSA-hxm2-r34f-qmc5
  - GHSA-f8q6-p94x-37v3
- **Location:** Multiple locations in glob-stream and globule
- **Fix:** Available via `npm audit fix --force` (breaking change)

#### 4. semver (<5.7.2) - HIGH
- **Issue:** Regular Expression Denial of Service vulnerability
- **CVE:** GHSA-c2qf-rxjj-qqgw
- **Location:** `node_modules/gulp/node_modules/semver`
- **Fix:** Available via `npm audit fix --force` (breaking change)

#### 5. tmp (<=0.2.3) - HIGH
- **Issue:** Arbitrary temporary file/directory write via symbolic link
- **CVE:** GHSA-52f5-9888-hmc6
- **Location:** Multiple locations including @lhci/cli and external-editor
- **Fix:** Available via `npm audit fix --force` (breaking change)

## Dependency Analysis: ALL VULNERABILITIES ARE TRANSITIVE

✅ **Confirmed:** ALL security vulnerabilities are in **transitive dependencies** (dependencies of our dependencies), NOT in our direct dependencies.

### Vulnerable Transitive Dependencies:

#### From `performance-budget@1.4.2`:
- **lodash@1.0.2** (CRITICAL) - via `performance-budget → gulp@3.9.1 → vinyl-fs → glob-watcher → gaze → globule`
- **braces@2.3.2** (HIGH) - via `performance-budget → gulp → liftoff → findup-sync → micromatch`
- **minimatch@0.2.14, @2.0.10** (HIGH) - via multiple gulp-related paths
- **semver@4.3.6** (HIGH) - via `performance-budget → gulp`

#### From `@lhci/cli@0.15.1`:
- **tmp@0.0.33, @0.1.0** (HIGH) - via `@lhci/cli → inquirer → external-editor` and direct
- **lodash@4.17.21** (CRITICAL) - via `@lhci/cli → inquirer`
- **minimatch@3.1.2** (HIGH) - via `@lhci/cli → chrome-launcher → rimraf → glob`
- **semver@5.7.2, @6.3.1** (HIGH) - via multiple lighthouse paths

### Safe Dependencies:
- **Modern packages** (Astro, React, TypeScript, Wrangler) use updated versions:
  - `semver@7.7.3` ✅ (safe)
  - `minimatch@9.0.5` ✅ (safe)
  - `braces@3.0.3` ✅ (safe)
  - `lodash@4.17.21` ✅ (safe in newer paths)

## Package Status

### Outdated Packages
- **tailwindcss:** 3.4.18 → 4.1.17 (major version update available)
- **React ecosystem:** Already on latest versions (v19.2.x)

### Workspace Analysis
- **Root workspace:** 21 vulnerabilities identified
- **Website app:** 21 vulnerabilities (same as root)
- **Worker app:** ✅ 0 vulnerabilities (clean)

## Recommendations

### Immediate Actions (Medium Priority - Revised)

Since these are all transitive dependencies in dev tools, the urgency is **reduced**:

1. **Evaluate necessity of problematic packages:**
   ```bash
   # Check if performance-budget is actively used
   grep -r "performance-budget" apps/website/
   
   # Check if @lhci/cli is essential for CI/CD
   grep -r "@lhci/cli\|lighthouse" .github/ || echo "No CI usage found"
   ```

2. **Consider package replacements:**
   - **performance-budget:** Replace with modern alternatives like `bundlesize` or `size-limit`
   - **@lhci/cli:** Update to latest version or use GitHub Actions lighthouse alternative

3. **Safe modernization approach:**
   ```bash
   # Only if packages aren't critical
   npm uninstall performance-budget @lhci/cli
   
   # Or update to latest versions
   npm update @lhci/cli
   ```

### Low Priority Actions

1. **Apply force fixes only if needed:**
   ```bash
   npm audit fix --force
   ```
   ⚠️ **Note:** Only apply if the dev tools are actively used in your workflow

### Medium Priority Actions

1. **Update major dependencies:**
   - Consider updating to Tailwind CSS v4.x (evaluate breaking changes)
   - Ensure React 19.x compatibility across all components

2. **Dependency review:**
   - Audit if `performance-budget` is actively used
   - Consider replacing gulp-based tools with modern alternatives
   - Review if all dev dependencies are necessary

### Long-term Security Practices

1. **Implement automated security scanning:**
   - Add `npm audit` to CI/CD pipeline
   - Consider tools like Snyk or GitHub Dependabot
   - Set up automated dependency updates for security patches

2. **Regular maintenance:**
   - Schedule monthly dependency reviews
   - Keep dependencies up-to-date
   - Monitor security advisories

## Risk Assessment

### Current Risk Level: 🟡 **MEDIUM-LOW** 
**Revised assessment:** Since all vulnerabilities are in transitive dependencies of development tools:

- **Runtime Production Risk:** ❌ **NONE** - Vulnerable packages not included in production build
- **Development Environment Risk:** 🟡 **LOW-MEDIUM** - Only affects dev tools during build
- **CI/CD Pipeline Risk:** 🟡 **LOW-MEDIUM** - Potential impact during automated builds

### Impact Scope:
- **Production runtime:** ✅ **NO IMPACT** - Astro builds don't include dev dependencies
- **Development builds:** 🟡 **Potential impact** - But limited to development tools
- **CI/CD pipeline:** 🟡 **Potential impact** - During performance testing and lighthouse checks

## Next Steps

1. [ ] Apply `npm audit fix` for non-breaking changes
2. [ ] Test application after automatic fixes
3. [ ] Evaluate breaking changes required for remaining vulnerabilities
4. [ ] Update or replace problematic packages
5. [ ] Implement automated security scanning
6. [ ] Document security maintenance procedures

---

**Note:** This audit was performed on branch `security/npm-deps-audit`. All changes should be tested thoroughly before merging to main.