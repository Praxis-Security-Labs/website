# Component Implementation Specifications

## Authority Section Component

```jsx
// AuthoritySection.jsx
import { SecurityCard } from './SecurityCard'

export const AuthoritySection = () => {
  return (
    <section className="section-padding bg-praxis-white">
      <div className="container-praxis">
        <h2 className="h2 text-center mb-12">
          From The Mind Behind The Security Culture Framework
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img 
              src="/kai-roer-professional.jpg"
              alt="Kai Roer, Security Culture Pioneer"
              className="w-40 h-40 rounded-full mx-auto lg:mx-0 mb-6 object-cover"
              loading="lazy"
            />
            <div className="space-y-2">
              <div className="h5 text-praxis-blue">Research Portfolio</div>
              <ul className="space-y-1 text-sm">
                <li>• 25+ years cybersecurity research</li>
                <li>• 100+ published articles</li>
                <li>• Peer-reviewed academic work</li>
                <li>• Global speaking engagements</li>
              </ul>
            </div>
          </div>
          
          <SecurityCard variant="primary" className="card-bordered">
            <div className="space-y-4">
              <h3 className="h5">Key Credentials & Recognition</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-praxis-gold mr-2">🏆</span>
                  <div>
                    <strong>Security Culture Framework Creator</strong>
                    <div className="text-sm text-muted">Adopted by ENISA for EU-wide guidelines</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-praxis-gold mr-2">📚</span>
                  <div>
                    <strong>Co-author, "The Security Culture Playbook"</strong>
                    <div className="text-sm text-muted">Wiley Publishing, 2022</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-praxis-gold mr-2">🔬</span>
                  <div>
                    <strong>Former Chief Research Officer</strong>
                    <div className="text-sm text-muted">KnowBe4 (Human cyber risk research)</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-praxis-gold mr-2">🚀</span>
                  <div>
                    <strong>Founder, CLTRe</strong>
                    <div className="text-sm text-muted">First security culture SaaS (acquired by KnowBe4)</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-praxis-gold mr-2">🏅</span>
                  <div>
                    <strong>Ron Knode Service Award</strong>
                    <div className="text-sm text-muted">Cloud Security Alliance</div>
                  </div>
                </li>
              </ul>
            </div>
          </SecurityCard>
        </div>
        
        <div className="text-center mt-12">
          <p className="body-large italic text-praxis-blue max-w-4xl mx-auto">
            "Kai Roer's research-backed approach to security culture transformation 
            provides the credible foundation enterprises require for this critical 
            investment in behavioral security monitoring."
          </p>
          <div className="mt-6">
            <SecurityButton variant="outline" href="/about-kai-roer">
              Learn More About Kai's Research
            </SecurityButton>
          </div>
        </div>
      </div>
    </section>
  )
}
```

## Segment Selection Component

```jsx
// SegmentSelector.jsx
import { SecurityCard, SecurityButton } from './ui'

export const SegmentSelector = () => {
  const segments = [
    {
      title: "Security Leaders",
      subtitle: "CISOs & Directors",
      description: "ROI & Risk Reporting",
      icon: "🛡️",
      href: "/security-leaders",
      highlight: "Executive dashboards & compliance evidence"
    },
    {
      title: "Board & C-Suite", 
      subtitle: "Executives",
      description: "Business Compliance",
      icon: "📊",
      href: "/executives",
      highlight: "Risk reduction & regulatory alignment"
    },
    {
      title: "Security Managers",
      subtitle: "Implementation Teams", 
      description: "Technical Integration",
      icon: "⚙️",
      href: "/security-managers",
      highlight: "Microsoft Graph API & deployment"
    },
    {
      title: "SAT Teams",
      subtitle: "Training Coordinators",
      description: "Training Measurement", 
      icon: "👥",
      href: "/sat-teams",
      highlight: "Behavioral monitoring & effectiveness"
    }
  ]

  return (
    <section className="section-padding bg-praxis-gold-50">
      <div className="container-praxis">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">Solutions For Your Role</h2>
          <p className="body-large text-muted max-w-3xl mx-auto">
            Discover how Praxis Navigator addresses the specific challenges 
            and requirements of your position in the organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <SecurityCard 
              key={segment.title}
              hoverable
              className="text-center h-full"
            >
              <div className="card-body flex flex-col h-full">
                <div className="text-6xl mb-4">{segment.icon}</div>
                <h3 className="h5 mb-2">{segment.title}</h3>
                <div className="text-sm text-praxis-blue mb-2">{segment.subtitle}</div>
                <p className="body-small text-muted mb-4">{segment.description}</p>
                <div className="text-xs text-praxis-brown mb-6 flex-grow">
                  {segment.highlight}
                </div>
                <SecurityButton 
                  variant="outline" 
                  size="sm" 
                  href={segment.href}
                  className="mt-auto"
                >
                  View Solutions
                </SecurityButton>
              </div>
            </SecurityCard>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Problem/Solution Visualization

```jsx
// ProblemSolutionSection.jsx
import { SecurityCard } from './ui'

export const ProblemSolutionSection = () => {
  return (
    <section className="section-padding bg-praxis-white">
      <div className="container-praxis">
        <div className="text-center mb-12">
          <h2 className="h2 mb-4">The Security Awareness Training Blind Spot</h2>
          <p className="body-large text-muted max-w-4xl mx-auto">
            Organizations invest heavily in security awareness training but lack 
            the ability to measure whether these investments translate to improved 
            real-world security behaviors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <SecurityCard variant="danger" className="card-bordered">
            <div className="card-header card-header-accent">
              <h3 className="h4 text-praxis-brick">Current State: Training Blind Spot</h3>
            </div>
            <div className="card-body">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-praxis-brick-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">❌</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="h6 mb-2">Organizations Invest In:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Security Awareness Training programs</li>
                    <li>• Phishing simulation platforms</li>
                    <li>• Compliance documentation systems</li>
                    <li>• Annual security assessments</li>
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="h6 mb-2 text-praxis-brick">But Cannot Measure:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>❌ Actual behavioral improvements</li>
                    <li>❌ Real-world security practice adoption</li>
                    <li>❌ Training investment effectiveness</li>
                    <li>❌ Risk reduction from training</li>
                  </ul>
                </div>
              </div>
            </div>
          </SecurityCard>
          
          <SecurityCard variant="accent" className="card-bordered">
            <div className="card-header">
              <h3 className="h4">Praxis Solution: Behavioral Evidence</h3>
            </div>
            <div className="card-body">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-praxis-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">✅</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="h6 mb-2">Praxis Navigator Provides:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Real behavioral data via Microsoft Graph API</li>
                    <li>• Continuous security practice monitoring</li>
                    <li>• Evidence-based ROI measurement</li>
                    <li>• Executive-ready impact reporting</li>
                  </ul>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="h6 mb-2 text-praxis-gold-700">Measurable Results:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✅ Quantified behavior improvements</li>
                    <li>✅ Risk reduction evidence</li>
                    <li>✅ Training effectiveness proof</li>
                    <li>✅ Compliance audit readiness</li>
                  </ul>
                </div>
              </div>
            </div>
          </SecurityCard>
        </div>
        
        <div className="text-center mt-12">
          <SecurityButton variant="primary" size="lg" href="/product-overview">
            Learn How It Works
          </SecurityButton>
        </div>
      </div>
    </section>
  )
}
```

This comprehensive wireframe and component specification document provides detailed visual architecture that aligns perfectly with the Praxis Design System while addressing all the progressive disclosure and conversion optimization requirements outlined in your PRD. The wireframes show exactly how the authority-first presentation, segment-specific content, and Azure Marketplace integration will work together to create a high-converting enterprise website.

Would you like me to create additional wireframes for specific pages or develop more detailed component specifications for any particular section?
