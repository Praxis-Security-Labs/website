# Component Request: [ComponentName]

**Use Case**: Brief description of where/why needed
**User Story**: As a [user], I need [component] to [achieve goal]
**Design Requirements**: 
- Visual appearance
- Interactive behavior
- Responsive behavior
- Accessibility requirements

**API Proposal**:
```typescript
interface ComponentProps {
  // Proposed component interface
}
```

**Alternatives Considered**: What existing components were evaluated
**Impact**: How many places will use this component
```

### 🎯 **Benefits of This Approach:**
- **Brand Consistency**: Perfect alignment with Praxis brand standards
- **Developer Speed**: No design decisions needed - just use Praxis classes
- **Maintainability**: Centralized design changes through theme updates
- **Quality Assurance**: All components tested and approved by design team
- **Accessibility**: Built-in WCAG compliance through Praxis components

### 🔧 **Enforcement Through Tooling:**

**ESLint Rules** (Recommended):
```javascript
// .eslintrc.js - Add these rules to enforce design system usage
module.exports = {
  rules: {
    // Prevent inline styles
    'react/forbid-dom-props': [
      'error',
      {
        forbid: [
          {
            propName: 'style',
            message: 'Use Praxis theme classes instead of inline styles'
          }
        ]
      }
    ],
    
    // Prevent arbitrary Tailwind values  
    'no-restricted-syntax': [
      'error',
      {
        selector: 'Literal[value=/\\[.*\\]/]',
        message: 'No arbitrary Tailwind values - use Praxis design tokens'
      }
    ]
  }
};
```

**Pre-commit Hooks**:
```bash