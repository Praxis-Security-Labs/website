# Story 9.2: Persona-Aware CTA Logic and Advanced Personalization

**Epic:** Phase 4 - Advanced Optimization  
**Story Points:** 13  
**Priority:** High  
**Assigned to:** AI Development Team  
**Sprint:** Phase 4 - Week 2

---

## Story Description

**As a** website visitor with specific role and needs  
**I want** personalized content and CTAs that match my professional context and goals  
**So that** I receive relevant messaging that addresses my specific pain points and guides me to appropriate conversion actions

## Acceptance Criteria

### Primary Requirements

**Persona Detection System:**
- [ ] Implement visitor behavior tracking to identify likely persona
- [ ] Create persona classification based on page visit patterns
- [ ] Build progressive profiling through micro-interactions
- [ ] Develop explicit persona selection mechanism
- [ ] Store persona preferences for returning visitors

**Dynamic CTA Personalization:**
- [ ] SAT/HRM Professionals: "Start Free Trial" → Trial signup flow
- [ ] Security Analysts/CISOs: "Request Demo" → Demo scheduling form
- [ ] Executives/Board Members: "Schedule Consultation" → Executive meeting request
- [ ] Department Managers: "Download Benchmark" → Lead generation form
- [ ] Unknown visitors: "Learn More" → Persona identification flow

**Adaptive Content Strategy:**
- [ ] Personalize hero messaging based on detected/selected persona
- [ ] Adjust feature highlighting for role-specific benefits
- [ ] Customize case study and testimonial presentation
- [ ] Modify pricing emphasis based on persona budget authority
- [ ] Adapt technical depth based on audience sophistication

### Technical Implementation

**Persona Detection Engine:**
```typescript
// utils/PersonaDetection.ts
export interface PersonaSignals {
  pageViews: string[];
  timeOnPages: Record<string, number>;
  interactions: string[];
  referrer: string;
  sessionDuration: number;
  downloadAttempts: string[];
}

export interface PersonaProfile {
  type: 'sat-hrm' | 'security' | 'executive' | 'manager' | 'unknown';
  confidence: number;
  signals: PersonaSignals;
  explicitSelection?: boolean;
  lastUpdated: Date;
}

export class PersonaDetectionEngine {
  private weights = {
    'sat-hrm': {
      pages: {
        '/platform/training-effectiveness': 0.8,
        '/solutions/security-awareness': 0.7,
        '/case-studies/training-roi': 0.6,
        '/competitors/knowbe4': 0.5
      },
      interactions: {
        'roi-calculator': 0.6,
        'training-guide-download': 0.7,
        'effectiveness-demo': 0.8
      }
    },
    'security': {
      pages: {
        '/platform/security-analytics': 0.8,
        '/integrations/microsoft-365': 0.7,
        '/security/compliance': 0.6,
        '/platform/threat-intelligence': 0.5
      },
      interactions: {
        'technical-demo': 0.8,
        'security-whitepaper': 0.7,
        'api-documentation': 0.6
      }
    },
    'executive': {
      pages: {
        '/solutions/executive-reporting': 0.8,
        '/case-studies/business-impact': 0.7,
        '/pricing/enterprise': 0.6,
        '/about/leadership': 0.4
      },
      interactions: {
        'executive-brief-download': 0.8,
        'consultation-request': 0.9,
        'board-presentation': 0.7
      }
    },
    'manager': {
      pages: {
        '/platform/team-management': 0.7,
        '/solutions/department-insights': 0.6,
        '/resources/best-practices': 0.5
      },
      interactions: {
        'benchmark-download': 0.7,
        'team-guide': 0.6,
        'manager-demo': 0.5
      }
    }
  };

  detectPersona(signals: PersonaSignals): PersonaProfile {
    const scores = this.calculatePersonaScores(signals);
    const topPersona = this.getTopPersona(scores);
    
    return {
      type: topPersona.type,
      confidence: topPersona.score,
      signals,
      explicitSelection: false,
      lastUpdated: new Date()
    };
  }

  private calculatePersonaScores(signals: PersonaSignals): Record<string, number> {
    const scores = { 'sat-hrm': 0, 'security': 0, 'executive': 0, 'manager': 0 };
    
    // Page view scoring
    signals.pageViews.forEach(page => {
      Object.entries(this.weights).forEach(([persona, weights]) => {
        if (weights.pages[page]) {
          scores[persona] += weights.pages[page] * 0.4;
        }
      });
    });
    
    // Interaction scoring
    signals.interactions.forEach(interaction => {
      Object.entries(this.weights).forEach(([persona, weights]) => {
        if (weights.interactions[interaction]) {
          scores[persona] += weights.interactions[interaction] * 0.6;
        }
      });
    });
    
    // Time on page bonus
    Object.entries(signals.timeOnPages).forEach(([page, time]) => {
      if (time > 120) { // 2+ minutes indicates engagement
        Object.entries(this.weights).forEach(([persona, weights]) => {
          if (weights.pages[page]) {
            scores[persona] += 0.2; // Engagement bonus
          }
        });
      }
    });
    
    return scores;
  }

  private getTopPersona(scores: Record<string, number>) {
    const entries = Object.entries(scores);
    entries.sort(([,a], [,b]) => b - a);
    
    const [topType, topScore] = entries[0];
    const [secondType, secondScore] = entries[1] || ['', 0];
    
    // Require minimum confidence threshold
    if (topScore < 0.3) {
      return { type: 'unknown', score: 0 };
    }
    
    // Require clear differentiation
    if (topScore - secondScore < 0.1) {
      return { type: 'unknown', score: topScore };
    }
    
    return { type: topType as PersonaProfile['type'], score: topScore };
  }
}
```

**Personalized CTA Component:**
```astro
---
// components/PersonalizedCTA.astro
export interface Props {
  page: string;
  position: 'hero' | 'inline' | 'footer';
  fallbackText?: string;
  fallbackHref?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
}

const { 
  page, 
  position, 
  fallbackText = 'Learn More', 
  fallbackHref = '/contact',
  size = 'medium',
  variant = 'primary'
} = Astro.props;

// Persona-specific CTA configurations
const personaCTAs = {
  'sat-hrm': {
    hero: { text: 'Start Free Trial', href: '/trial-signup', color: 'primary', icon: 'play' },
    inline: { text: 'Try Praxis Navigator', href: '/trial-signup', color: 'primary', icon: 'arrow-right' },
    footer: { text: 'Begin Your Trial', href: '/trial-signup', color: 'success', icon: 'check' }
  },
  'security': {
    hero: { text: 'Request Technical Demo', href: '/demo/technical', color: 'secondary', icon: 'shield' },
    inline: { text: 'Schedule Demo', href: '/demo/technical', color: 'secondary', icon: 'calendar' },
    footer: { text: 'Book Security Demo', href: '/demo/technical', color: 'secondary', icon: 'lock' }
  },
  'executive': {
    hero: { text: 'Schedule Consultation', href: '/consultation/executive', color: 'warning', icon: 'briefcase' },
    inline: { text: 'Book Executive Meeting', href: '/consultation/executive', color: 'warning', icon: 'users' },
    footer: { text: 'Discuss with Expert', href: '/consultation/executive', color: 'warning', icon: 'phone' }
  },
  'manager': {
    hero: { text: 'Download Benchmark Report', href: '/resources/benchmark', color: 'info', icon: 'download' },
    inline: { text: 'Get Team Insights', href: '/resources/benchmark', color: 'info', icon: 'chart' },
    footer: { text: 'Access Manager Guide', href: '/resources/manager-guide', color: 'info', icon: 'book' }
  },
  'unknown': {
    hero: { text: 'Discover Your Solution', href: '/persona-selector', color: 'primary', icon: 'compass' },
    inline: { text: 'Find Your Fit', href: '/persona-selector', color: 'primary', icon: 'target' },
    footer: { text: 'Get Started', href: '/persona-selector', color: 'primary', icon: 'arrow-right' }
  }
};

// Context-aware messaging
const contextualMessaging = {
  'sat-hrm': {
    urgency: 'Join 500+ SAT professionals already measuring training effectiveness',
    benefit: 'Prove your training ROI with behavioral analytics',
    social: '★★★★★ "Finally, data that shows training actually works" - SAT Manager, Fortune 500'
  },
  'security': {
    urgency: 'Integrate with your existing Microsoft security stack',
    benefit: 'Complete your security analytics with human behavior insights',
    social: '★★★★★ "Essential human factor data for our SOC" - CISO, Financial Services'
  },
  'executive': {
    urgency: 'Reduce security culture risk with quantifiable metrics',
    benefit: 'Board-ready security culture reporting and ROI analysis',
    social: '★★★★★ "Clear business impact from our security investments" - CEO, Manufacturing'
  },
  'manager': {
    urgency: 'Benchmark your team against industry standards',
    benefit: 'Data-driven insights to improve team security behaviors',
    social: '★★★★★ "My team\'s security awareness improved 40%" - Department Manager'
  },
  'unknown': {
    urgency: 'Discover how Praxis Navigator fits your role',
    benefit: 'Personalized solutions for your security culture challenges',
    social: '★★★★★ "Perfect solution for our specific needs" - Various Customers'
  }
};
---

<div class="personalized-cta-container" data-page={page} data-position={position}>
  <script>
    // Client-side persona detection and CTA personalization
    import { PersonaDetectionEngine } from '../utils/PersonaDetection';
    
    class PersonalizedCTAManager {
      constructor() {
        this.detector = new PersonaDetectionEngine();
        this.currentPersona = this.getCurrentPersona();
        this.initializePersonalization();
      }
      
      getCurrentPersona() {
        // Check for explicit persona selection
        const explicitPersona = localStorage.getItem('selected-persona');
        if (explicitPersona) {
          return JSON.parse(explicitPersona);
        }
        
        // Detect based on current session
        const signals = this.collectCurrentSignals();
        return this.detector.detectPersona(signals);
      }
      
      collectCurrentSignals() {
        const pageViews = JSON.parse(sessionStorage.getItem('page-views') || '[]');
        const interactions = JSON.parse(sessionStorage.getItem('interactions') || '[]');
        const timeOnPages = JSON.parse(sessionStorage.getItem('time-on-pages') || '{}');
        
        return {
          pageViews,
          interactions,
          timeOnPages,
          referrer: document.referrer,
          sessionDuration: Date.now() - parseInt(sessionStorage.getItem('session-start') || '0'),
          downloadAttempts: JSON.parse(sessionStorage.getItem('downloads') || '[]')
        };
      }
      
      initializePersonalization() {
        this.updateCTAs();
        this.updateMessaging();
        this.trackPersonalization();
      }
      
      updateCTAs() {
        const containers = document.querySelectorAll('.personalized-cta-container');
        containers.forEach(container => {
          const page = container.dataset.page;
          const position = container.dataset.position;
          const config = personaCTAs[this.currentPersona.type][position];
          
          if (config) {
            this.renderPersonalizedCTA(container, config, position);
          }
        });
      }
      
      renderPersonalizedCTA(container, config, position) {
        const ctaHTML = `
          <a href="${config.href}" 
             class="btn btn-${config.color} btn-${size} personalized-cta"
             data-persona="${this.currentPersona.type}"
             data-confidence="${this.currentPersona.confidence}"
             onclick="this.trackPersonalizedClick('${position}', '${this.currentPersona.type}')">
            <i class="icon-${config.icon}"></i>
            ${config.text}
          </a>
        `;
        
        container.innerHTML = ctaHTML;
      }
      
      updateMessaging() {
        const messaging = contextualMessaging[this.currentPersona.type];
        
        // Update urgency indicators
        const urgencyElements = document.querySelectorAll('[data-personalize="urgency"]');
        urgencyElements.forEach(el => el.textContent = messaging.urgency);
        
        // Update benefit statements
        const benefitElements = document.querySelectorAll('[data-personalize="benefit"]');
        benefitElements.forEach(el => el.textContent = messaging.benefit);
        
        // Update social proof
        const socialElements = document.querySelectorAll('[data-personalize="social"]');
        socialElements.forEach(el => el.innerHTML = messaging.social);
      }
      
      trackPersonalization() {
        gtag('event', 'personalization_applied', {
          persona_type: this.currentPersona.type,
          confidence: this.currentPersona.confidence,
          explicit_selection: this.currentPersona.explicitSelection,
          page: window.location.pathname
        });
      }
      
      trackPersonalizedClick(position, persona) {
        gtag('event', 'personalized_cta_click', {
          event_category: 'conversion',
          event_label: `${position}-${persona}`,
          persona_type: persona,
          confidence: this.currentPersona.confidence
        });
      }
    }
    
    // Initialize when DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
      new PersonalizedCTAManager();
    });
  </script>
  
  <!-- Fallback CTA for no-JS scenarios -->
  <noscript>
    <a href={fallbackHref} class={`btn btn-${variant} btn-${size}`}>
      {fallbackText}
    </a>
  </noscript>
</div>
```

**Persona Selection Interface:**
```astro
---
// components/PersonaSelector.astro
const personas = [
  {
    id: 'sat-hrm',
    title: 'SAT/HRM Professional',
    description: 'Security Awareness Training Manager or Human Risk Management professional',
    icon: 'graduation-cap',
    benefits: ['Measure training effectiveness', 'Prove program ROI', 'Optimize training content'],
    cta: 'Start Free Trial'
  },
  {
    id: 'security',
    title: 'Security Analyst/CISO',
    description: 'Security professional seeking behavioral analytics',
    icon: 'shield',
    benefits: ['Complete security visibility', 'Human factor insights', 'Microsoft 365 integration'],
    cta: 'Request Demo'
  },
  {
    id: 'executive',
    title: 'Executive/Board Member',
    description: 'C-suite executive or board member focused on governance',
    icon: 'briefcase',
    benefits: ['Board-ready reporting', 'Compliance evidence', 'Strategic insights'],
    cta: 'Schedule Consultation'
  },
  {
    id: 'manager',
    title: 'Department Manager',
    description: 'Team leader responsible for security culture',
    icon: 'users',
    benefits: ['Team benchmarking', 'Behavior insights', 'Best practices guidance'],
    cta: 'Download Benchmark'
  }
];
---

<div class="persona-selector">
  <div class="container">
    <h2 class="text-center mb-8">What best describes your role?</h2>
    <p class="text-center text-gray-600 mb-12">Choose your role to see personalized content and recommendations</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {personas.map(persona => (
        <div class="persona-card" data-persona={persona.id}>
          <div class="card p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div class="text-center mb-4">
              <i class={`icon-${persona.icon} text-4xl text-primary mb-3`}></i>
              <h3 class="text-lg font-semibold mb-2">{persona.title}</h3>
              <p class="text-sm text-gray-600 mb-4">{persona.description}</p>
            </div>
            
            <ul class="text-sm space-y-2 mb-6">
              {persona.benefits.map(benefit => (
                <li class="flex items-center">
                  <i class="icon-check text-success mr-2"></i>
                  {benefit}
                </li>
              ))}
            </ul>
            
            <button class={`btn btn-primary w-full`} onclick={`selectPersona('${persona.id}')`}>
              {persona.cta}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<script>
  function selectPersona(personaId) {
    // Store explicit persona selection
    const persona = {
      type: personaId,
      confidence: 1.0,
      explicitSelection: true,
      lastUpdated: new Date()
    };
    
    localStorage.setItem('selected-persona', JSON.stringify(persona));
    
    // Track selection
    gtag('event', 'persona_selected', {
      event_category: 'personalization',
      event_label: personaId,
      explicit_selection: true
    });
    
    // Redirect to appropriate landing page
    const redirects = {
      'sat-hrm': '/solutions/training-effectiveness',
      'security': '/platform/security-analytics',
      'executive': '/solutions/executive-reporting',
      'manager': '/solutions/team-management'
    };
    
    window.location.href = redirects[personaId] || '/';
  }
  
  // Track persona card interactions
  document.querySelectorAll('.persona-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const persona = card.dataset.persona;
      gtag('event', 'persona_card_hover', {
        event_category: 'personalization',
        event_label: persona
      });
    });
  });
</script>
```

### Advanced Personalization Features

**Dynamic Content Adaptation:**
```javascript
// utils/ContentPersonalization.js
export class ContentPersonalizer {
  constructor(persona) {
    this.persona = persona;
    this.adaptations = this.getPersonaAdaptations();
  }
  
  getPersonaAdaptations() {
    return {
      'sat-hrm': {
        heroTitle: 'Prove Your Security Training Actually Works',
        valueProps: ['Measure behavioral change', 'Calculate training ROI', 'Optimize program effectiveness'],
        testimonialFilter: 'training-manager',
        caseStudyFocus: 'training-effectiveness',
        pricingEmphasis: 'per-user-value',
        technicalDepth: 'business-focused'
      },
      'security': {
        heroTitle: 'Complete Your Security Analytics with Human Behavior Data',
        valueProps: ['Microsoft 365 integration', 'Behavioral threat intelligence', 'SOC-ready dashboards'],
        testimonialFilter: 'security-professional',
        caseStudyFocus: 'security-improvement',
        pricingEmphasis: 'enterprise-features',
        technicalDepth: 'technical-detailed'
      },
      'executive': {
        heroTitle: 'Quantify and Reduce Your Organization\'s Human Security Risk',
        valueProps: ['Board-ready metrics', 'Compliance reporting', 'Strategic risk insights'],
        testimonialFilter: 'executive',
        caseStudyFocus: 'business-impact',
        pricingEmphasis: 'roi-focused',
        technicalDepth: 'business-outcome'
      },
      'manager': {
        heroTitle: 'Improve Your Team\'s Security Behaviors with Data-Driven Insights',
        valueProps: ['Team benchmarking', 'Behavior analytics', 'Coaching recommendations'],
        testimonialFilter: 'manager',
        caseStudyFocus: 'team-improvement',
        pricingEmphasis: 'team-pricing',
        technicalDepth: 'practical-focused'
      }
    };
  }
  
  personalizeContent() {
    const adaptation = this.adaptations[this.persona.type] || this.adaptations['unknown'];
    
    this.updateHeroContent(adaptation);
    this.filterTestimonials(adaptation.testimonialFilter);
    this.highlightRelevantCaseStudies(adaptation.caseStudyFocus);
    this.adjustPricingPresentation(adaptation.pricingEmphasis);
    this.adaptTechnicalDepth(adaptation.technicalDepth);
  }
  
  updateHeroContent(adaptation) {
    const heroTitle = document.querySelector('[data-personalize="hero-title"]');
    if (heroTitle) {
      heroTitle.textContent = adaptation.heroTitle;
    }
    
    const valueProps = document.querySelector('[data-personalize="value-props"]');
    if (valueProps) {
      valueProps.innerHTML = adaptation.valueProps
        .map(prop => `<li><i class="icon-check"></i> ${prop}</li>`)
        .join('');
    }
  }
  
  filterTestimonials(filter) {
    const testimonials = document.querySelectorAll('[data-testimonial-type]');
    testimonials.forEach(testimonial => {
      const type = testimonial.dataset.testimonialType;
      testimonial.style.display = type === filter ? 'block' : 'none';
    });
  }
  
  adjustPricingPresentation(emphasis) {
    const pricingElements = document.querySelectorAll('[data-pricing-emphasis]');
    pricingElements.forEach(element => {
      const elementEmphasis = element.dataset.pricingEmphasis;
      element.classList.toggle('highlighted', elementEmphasis === emphasis);
    });
  }
}
```

### Performance Requirements

**Personalization Performance:**
- Persona detection algorithm executes in <50ms
- CTA updates occur without visible flicker or layout shift
- Progressive enhancement ensures functionality without JavaScript
- Mobile performance maintained with personalization overhead <100ms

**Accuracy Requirements:**
- Persona detection accuracy >80% for users with 3+ page views
- Explicit persona selection available when confidence <70%
- Fallback to generic content when detection fails
- Progressive improvement through user interaction feedback

## Business Value

**Conversion Optimization:**
- **25-50% improvement in CTA click-through rates** through relevant messaging
- **15-30% increase in qualified leads** by matching CTAs to user intent
- **Reduced bounce rate** through immediately relevant content presentation
- **Higher trial-to-paid conversion** through better user-solution fit

**User Experience Enhancement:**
- **Personalized journey** reducing cognitive load and decision fatigue
- **Relevant social proof** increasing trust and credibility
- **Appropriate technical depth** matching audience sophistication
- **Streamlined conversion paths** reducing friction for each persona

## Technical Context

**Integration Points:**
- `/src/utils/PersonaDetection.ts` - Core persona detection engine
- `/src/components/PersonalizedCTA.astro` - Dynamic CTA component
- `/src/components/PersonaSelector.astro` - Explicit selection interface
- `/src/utils/ContentPersonalization.js` - Content adaptation logic
- `/src/layouts/` - Personalized layout components

**Dependencies:**
- Google Analytics 4 event tracking
- Local storage for persona persistence
- Session storage for behavior tracking
- Existing CTA and content components

**Data Models:**
```typescript
interface PersonaSession {
  id: string;
  type: PersonaProfile['type'];
  confidence: number;
  signals: PersonaSignals;
  explicitSelection: boolean;
  conversions: ConversionEvent[];
  lastUpdated: Date;
}

interface ConversionEvent {
  type: 'cta_click' | 'form_submit' | 'download' | 'demo_request';
  timestamp: Date;
  page: string;
  element: string;
  persona: string;
}
```

## Definition of Done

**Technical Completion:**
- [ ] Persona detection engine implemented and tested
- [ ] Dynamic CTA personalization functional across all key pages
- [ ] Persona selector interface deployed and accessible
- [ ] Content personalization system operational
- [ ] Analytics tracking for personalization events configured

**Business Validation:**
- [ ] Persona detection accuracy validated through user feedback
- [ ] A/B test comparing personalized vs. generic CTAs launched
- [ ] Conversion rate improvements measured and documented
- [ ] User experience feedback collected and analyzed

**Quality Assurance:**
- [ ] Cross-browser compatibility for all personalization features
- [ ] Performance impact within acceptable limits
- [ ] Accessibility compliance maintained
- [ ] Fallback behavior validated for edge cases

---

## Implementation Notes

**Week 1 Tasks:**
1. Implement persona detection engine and data models
2. Create personalized CTA components with dynamic configuration
3. Build persona selector interface for explicit selection
4. Set up analytics tracking for personalization events

**Week 2 Tasks:**
1. Deploy content personalization across all key pages
2. Launch A/B tests comparing personalized vs. generic experiences
3. Implement feedback mechanisms for persona accuracy
4. Monitor and optimize personalization performance

**Success Metrics:**
- **Primary:** 25-40% improvement in persona-specific conversion rates
- **Secondary:** 80%+ persona detection accuracy for engaged users
- **Tertiary:** 20%+ increase in overall trial signup rates

This story creates a sophisticated personalization system that adapts the entire website experience to each visitor's professional context, significantly improving conversion rates and user experience through relevant, targeted messaging and CTAs.
