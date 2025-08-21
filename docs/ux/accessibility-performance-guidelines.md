# Accessibility & Performance Guidelines

## WCAG 2.1 AA Compliance

### Color Contrast Requirements
- **Normal text**: 4.5:1 ratio minimum
- **Large text**: 3:1 ratio minimum
- **Interactive elements**: 3:1 ratio minimum

### Keyboard Navigation
```jsx
// Focus management for modals
useEffect(() => {
  if (isModalOpen) {
    const focusableElements = modal.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    
    firstElement?.focus()
    
    const handleTabKey = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }
    
    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }
}, [isModalOpen])
```

### Screen Reader Support
```jsx
// Semantic HTML structure
<main role="main" aria-labelledby="main-heading">
  <h1 id="main-heading">Praxis Navigator Security Platform</h1>
  
  <section aria-labelledby="authority-heading">
    <h2 id="authority-heading">About Kai Roer</h2>
    <div aria-describedby="credentials-list">
      <ul id="credentials-list">
        <li>Creator of Security Culture Framework</li>
        <li>Co-author of The Security Culture Playbook</li>
      </ul>
    </div>
  </section>
  
  <nav aria-label="User segments" role="navigation">
    <ul>
      <li><a href="/security-leaders" aria-describedby="segment-desc-1">
        Security Leaders
        <span id="segment-desc-1" className="sr-only">
          Solutions for CISOs and security directors
        </span>
      </a></li>
    </ul>
  </nav>
</main>
```

## Performance Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint)**: <2.5s
- **FID (First Input Delay)**: <100ms  
- **CLS (Cumulative Layout Shift)**: <0.1

### Image Optimization Strategy
```jsx
// Next.js Image optimization for hero graphics
import Image from 'next/image'

<Image
  src="/hero-dashboard.webp"
  alt="Praxis Navigator dashboard showing security behavior analytics"
  width={800}
  height={600}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Critical CSS Inlining
```html
<!-- Inline critical CSS for above-the-fold content -->
<style>
  .hero-section { 
    background: linear-gradient(135deg, #013E75 0%, #0071B3 100%);
    min-height: 600px;
    display: flex;
    align-items: center;
  }
  .hero-headline {
    font-size: 3rem;
    color: #FBFBF9;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }
</style>
```

---
