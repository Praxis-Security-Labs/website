# Praxis Navigator Website – MVP Front-End UX/UI Specification

This spec ensures the MVP scope from the content strategy brief is fully aligned with the existing UX/UI standards in `/docs/ux`. Only new or updated elements are detailed; all other requirements reference existing specifications.

---

## 1. Persona Pages (SAT/HRM, Executive/Board, Department Managers)
- **Reference:** `wireframes-component-specifications.md`, `user-segment-analysis.md`
- **Requirements:**
  - Use existing persona page layouts and component specs.
  - Add tailored CTA logic for each persona (SAT/HRM: trial signup, Executive: demo request, Managers: benchmark download).
  - Ensure proof points and testimonials use the existing card/list components.
  - Accessibility and mobile optimization per guidelines.

## 2. Trial Explainer Page (Pre-Azure Onboarding)
- **Reference:** `progressive-disclosure-strategy.md`, `conversion-optimization-strategy.md`
- **Requirements:**
  - Step-by-step onboarding flow using progressive disclosure.
  - Visual flow component (new if not present):
    - Screenshots for each step
    - Support contact module
  - CTA: "Start Trial" (links to Azure Marketplace)

## 3. Trust Overview Page
- **Reference:** `accessibility-performance-guidelines.md`, `component-implementation-specifications.md`
- **Requirements:**
  - Compliance badges (SOC 2, GDPR, ISO/ENISA)
  - Data flow diagram (use existing diagram component if available)
  - Links to detailed compliance hub
  - New: Compliance badge component (if not present)

## 4. Competitor Comparison Pages (KnowBe4, Junglemap/Nimblr)
- **Reference:** `detailed-page-wireframes.md`, `conversion-optimization-strategy.md`
- **Requirements:**
  - Table format for feature comparison
  - Narrative positioning section
  - Persona-specific CTAs
  - New: Comparison table component (if not present)

## 5. Case Studies Hub
- **Reference:** `authority-first-information-architecture.md`, `wireframes-component-specifications.md`
- **Requirements:**
  - Centralized hub using card/list layout
  - Flagship story with before/after metrics, timeline, quotes
  - CTA: "See Outcomes" or "Request Demo"
  - New: Case study card/list component (if not present)

## 6. Homepage Optimization
- **Reference:** `site-architecture-user-flow-diagrams.md`, `design-system-implementation.md`
- **Requirements:**
  - Add one-liner definition: "Security culture analytics for Microsoft 365"
  - Structure: Benefits → How it Works → Proof → CTA
  - Systematic CTA placement (hero, mid, end, sticky header)
  - New: Sticky header CTA logic (if not present)

## 7. Platform/Features/Pricing Pages
- **Reference:** `component-implementation-specifications.md`, `conversion-optimization-strategy.md`
- **Requirements:**
  - Benefit-led modules with micro-screenshots
  - Value statements per feature/tier
  - Inline FAQ section
  - Prominent trial CTA
  - ROI calculator link integration (new if not present)

---

## General Requirements
- **Accessibility:** WCAG 2.1 AA compliance
- **Performance:** <3s page load for all core pages
- **Mobile Optimization:** 90%+ usability scores
- **Design System:** All new components must follow existing design system specs

---

## References
- `/docs/ux/wireframes-component-specifications.md`
- `/docs/ux/component-implementation-specifications.md`
- `/docs/ux/conversion-optimization-strategy.md`
- `/docs/ux/progressive-disclosure-strategy.md`
- `/docs/ux/accessibility-performance-guidelines.md`
- `/docs/ux/authority-first-information-architecture.md`
- `/docs/ux/site-architecture-user-flow-diagrams.md`

---

**Note:** If a required component or pattern is missing from the current UX/UI spec, document it as a new addition and update the design system accordingly.
