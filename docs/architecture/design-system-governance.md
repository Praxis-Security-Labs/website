# Design System Governance

## Praxis Theme Usage Rules

**CRITICAL: NO EXCEPTIONS TO THESE RULES**

### ✅ **Required Practices:**
- **Use Praxis CSS Classes Only**: All styling must use predefined Praxis theme classes
- **Component Library First**: Always check Praxis component library before building custom components
- **Theme Variables**: Use Praxis design tokens for colors, spacing, typography, etc.
- **Responsive Design**: Use Praxis responsive breakpoints and utilities

### ❌ **Forbidden Practices:**
- **No Inline Styles**: Never use `style={}` attributes or inline CSS
- **No Custom CSS**: No custom CSS classes outside of Praxis theme
- **No CSS-in-JS**: No styled-components, emotion, or similar libraries
- **No Arbitrary Values**: No arbitrary Tailwind values like `w-[123px]`

### 🤝 **Governance Process:**

**When Praxis Component Doesn't Exist:**
1. **STOP** - Do not proceed with custom implementation
2. **Document Need** - Create detailed component specification
3. **Consult Product Manager** - Discuss requirement and approach
4. **Design Review** - Get approval for design direction
5. **Add to Praxis** - Component must be added to design system first
6. **Then Implement** - Use the new Praxis component

**Process Example:**
```typescript
// ❌ WRONG - Custom styling
<div style={{ padding: '24px', color: '#FF0000' }}>
  <span className="text-red-500">Error message</span>
</div>

// ❌ WRONG - Custom CSS class
<div className="my-custom-error-box">
  Error message
</div>

// ✅ CORRECT - Praxis theme classes
<div className="praxis-alert praxis-alert-error">
  <span className="praxis-text-error">Error message</span>
</div>

// 🤝 IF PRAXIS COMPONENT DOESN'T EXIST
// 1. Document: "Need alert component with error variant"
// 2. Discuss with PM: Required for form validation UX
// 3. Add to Praxis: Create AlertComponent with error/warning/success variants
// 4. Implement: <PraxisAlert variant="error">Error message</PraxisAlert>
```

### 📋 **Component Request Template:**

When requesting new Praxis components:

```markdown