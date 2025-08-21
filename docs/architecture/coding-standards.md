# Coding Standards

## Critical Fullstack Rules

- **Type Sharing**: Always define types in `packages/shared` and import from there
- **API Calls**: Never make direct HTTP calls - use the `apiClient` service layer
- **Environment Variables**: Access only through config objects, never `process.env` directly
- **Error Handling**: All API routes must use the standard error handler
- **State Updates**: Never mutate state directly - use proper state management patterns
- **Form Validation**: All forms must use Zod schemas for validation
- **Praxis Design System**: Only use components and styles from the Praxis design system
- **No Inline CSS**: Never use inline styles - all styling must go through Praxis theme classes
- **Missing Components**: If required component doesn't exist in Praxis, discuss with Product Manager before creating custom solutions
- **Language Support**: All user-facing text must support i18n
- **Accessibility**: All interactive elements must be keyboard accessible with proper ARIA labels
- **Performance**: Lazy load all non-critical JavaScript and images

## Naming Conventions

| Element | Frontend | Backend | Example |
|---------|----------|---------|---------|
| Components | PascalCase | - | `DemoRequestForm.tsx` |
| Hooks | camelCase with 'use' | - | `useForm.ts` |
| API Routes | - | kebab-case | `/api/forms/submit` |
| Types/Interfaces | PascalCase | PascalCase | `LeadSubmission` |
| Constants | SCREAMING_SNAKE_CASE | SCREAMING_SNAKE_CASE | `API_BASE_URL` |
| Functions | camelCase | camelCase | `submitForm()` |
| Files | kebab-case | kebab-case | `demo-request-form.tsx` |

---
