# Wireframes & Component Specifications

## Homepage Wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ [LOGO]                    [LANG] [LOGIN] [AZURE MARKETPLACE] │
├─────────────────────────────────────────────────────────────┤
│                    HERO SECTION                             │
│ ┌─────────────────────────────┐ ┌───────────────────────────┐ │
│ │ HEADLINE:                   │ │                           │ │
│ │ "Measure What Matters:      │ │    [PRODUCT PREVIEW]      │ │
│ │ Actual Security Behaviors"  │ │    [DASHBOARD MOCKUP]     │ │
│ │                             │ │                           │ │
│ │ SUBHEAD:                    │ │                           │ │
│ │ "By Kai Roer, Creator of    │ │                           │ │
│ │ Security Culture Framework" │ │                           │ │
│ │                             │ │                           │ │
│ │ [DEMO REQUEST] [FREE TRIAL] │ │                           │ │
│ └─────────────────────────────┘ └───────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                  AUTHORITY SECTION                          │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ "From the mind behind the Security Culture Framework     │ │
│ │  adopted by ENISA and co-author of The Security Culture  │ │
│ │  Playbook (Wiley, 2022)"                                 │ │
│ │                                                           │ │
│ │ [KAI ROER PHOTO] [CREDENTIALS LIST] [RESEARCH HIGHLIGHTS] │ │
│ └───────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                SEGMENT SELECTION                            │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐            │
│ │Security │ │Board &  │ │Security │ │   SAT   │            │
│ │Leaders  │ │C-Suite  │ │Managers │ │ Teams   │            │
│ │[ICON]   │ │[ICON]   │ │[ICON]   │ │[ICON]   │            │
│ │[CTA]    │ │[CTA]    │ │[CTA]    │ │[CTA]    │            │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘            │
├─────────────────────────────────────────────────────────────┤
│                 PROBLEM/SOLUTION FIT                        │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ "Organizations invest heavily in Security Awareness      │ │
│ │  Training but cannot measure behavioral improvements"     │ │
│ │                                                           │ │
│ │ [BEFORE: TRAINING BLIND SPOT] → [AFTER: BEHAVIOR PROOF]  │ │
│ └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Segment Landing Page Wireframe (Security Leaders Example)

```
┌─────────────────────────────────────────────────────────────┐
│ [BREADCRUMB: Home > For Security Leaders]                   │
├─────────────────────────────────────────────────────────────┤
│                   HERO SECTION                             │
│ ┌─────────────────────────────┐ ┌───────────────────────────┐ │
│ │ "Prove SAT Investment ROI   │ │                           │ │
│ │  with Behavioral Evidence"  │ │     [EXECUTIVE            │ │
│ │                             │ │      DASHBOARD]           │ │
│ │ PAIN POINTS:                │ │                           │ │
│ │ • No behavior measurement   │ │                           │ │
│ │ • Executive reporting gaps  │ │                           │ │
│ │ • Compliance uncertainties  │ │                           │ │
│ │                             │ │                           │ │
│ │ [EXECUTIVE DEMO REQUEST]    │ │                           │ │
│ └─────────────────────────────┘ └───────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                  VALUE PROPOSITIONS                         │
│ ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐ │
│ │ ROI MEASUREMENT │ │ EXECUTIVE       │ │ COMPLIANCE      │ │
│ │ • Behavior data │ │ REPORTING       │ │ EVIDENCE        │ │
│ │ • Cost analysis │ │ • Board ready   │ │ • NIS2 ready    │ │
│ │ • Risk metrics  │ │ • Risk scoring  │ │ • Audit trails  │ │
│ └─────────────────┘ └─────────────────┘ └─────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                    USE CASE SCENARIOS                       │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ SCENARIO 1: Board Reporting                               │ │
│ │ "Show behavioral improvement trends to justify continued  │ │
│ │  SAT investments and demonstrate risk reduction"          │ │
│ │                                                           │ │
│ │ SCENARIO 2: Compliance Audit                             │ │
│ │ "Provide auditors with behavioral evidence of training   │ │
│ │  effectiveness and employee security culture"            │ │
│ └───────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                  SOCIAL PROOF                              │
│ ┌───────────────────────────────────────────────────────────┐ │
│ │ "Organizations using Praxis Navigator report 3x          │ │
│ │  improvement in security behavior measurement accuracy"   │ │
│ │                                                           │ │
│ │ [CUSTOMER LOGOS] [TESTIMONIALS] [CASE STUDY LINKS]       │ │
│ └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## Component Specifications

### Primary CTA Button
```css
/* Security Leaders: Executive Demo */
.cta-executive {
  @apply btn-primary btn-lg bg-praxis-dark-blue text-praxis-white;
  font-size: 1.125rem;
  padding: 1rem 2rem;
  letter-spacing: 0.025em;
}

/* SAT Teams: Free Trial */
.cta-trial {
  @apply btn-accent btn-lg bg-praxis-gold text-praxis-dark-blue;
  font-size: 1.125rem;
  padding: 1rem 2rem;
}

/* Azure Marketplace */
.cta-azure {
  @apply btn-secondary btn-lg bg-praxis-blue text-praxis-white;
  border: 2px solid praxis-sky;
}
```

### Authority Card Component
```jsx
// AuthorityCard.jsx
<div className="card card-primary">
  <div className="card-header">
    <h3 className="h5">Kai Roer, Security Culture Pioneer</h3>
  </div>
  <div className="card-body">
    <div className="flex items-start space-x-4">
      <img src="/kai-roer.jpg" alt="Kai Roer" className="w-16 h-16 rounded-full" />
      <div>
        <ul className="space-y-1 text-sm">
          <li>• Creator, Security Culture Framework (adopted by ENISA)</li>
          <li>• Co-author, "The Security Culture Playbook" (Wiley)</li>
          <li>• Former Chief Research Officer, KnowBe4</li>
          <li>• Ron Knode Service Award recipient</li>
        </ul>
      </div>
    </div>
  </div>
</div>
```

### Segment Selection Component
```jsx
// SegmentCard.jsx
<div className="card card-hoverable hover-lift">
  <div className="card-body text-center">
    <div className="icon-xl text-praxis-dark-blue mb-4">
      {/* Segment-specific icon */}
    </div>
    <h3 className="h5 mb-2">{segmentTitle}</h3>
    <p className="body-small text-muted mb-4">{segmentDescription}</p>
    <SecurityButton variant="outline" size="sm">
      View Solutions
    </SecurityButton>
  </div>
</div>
```

---
