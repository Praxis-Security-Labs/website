# Praxis Security Labs Website

This is the promotional website for Praxis Security Labs, built with Astro and React using the Praxis Design System.

## Project Structure

```
/
├── apps/website/          # Main Astro application
├── packages/
│   ├── praxis-ui/         # Praxis design system components
│   └── shared/            # Shared TypeScript types and utilities
└── docs/                  # Project documentation
```

## Development Setup

### Prerequisites

- Node.js >=18.0.0
- npm >=9.0.0
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd praxis-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:4321 in your browser

### Available Scripts

#### Root Level Scripts (monorepo management)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run test` - Run tests
- `npm run test:unit` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

#### Workspace-specific Scripts
All scripts above run on the `apps/website` workspace. To run commands directly on specific workspaces:

```bash
# Run commands in website app
npm run dev --workspace=apps/website
npm run build --workspace=apps/website

# Install dependencies in specific workspace
npm install <package> --workspace=apps/website
```

## Technology Stack

- **Static Site Generator**: Astro ^3.0.0
- **UI Framework**: React ^18.0.0  
- **Styling**: Tailwind CSS ^3.3.0 with Praxis Design System
- **TypeScript**: ^5.2.0 (strict mode)
- **Testing**: Vitest (unit), Playwright (E2E)
- **Code Quality**: ESLint + Prettier
- **Build Tool**: Vite (built into Astro)

## Code Quality

### Pre-commit Hooks
This project uses Husky and lint-staged to enforce code quality:
- Runs ESLint with auto-fix
- Runs Prettier for formatting
- Ensures TypeScript type checking passes

### Code Standards
- **TypeScript Strict Mode**: All code must pass strict type checking
- **Praxis Design System**: Only use Praxis components and CSS classes
- **ESLint Rules**: Follows React, TypeScript, and accessibility best practices
- **File Naming**: kebab-case for files, PascalCase for components

## Development Workflow

### Feature Development
1. Create a feature branch from `main`
2. Make your changes following coding standards
3. Run tests: `npm run test:all`
4. Commit changes (pre-commit hooks will run automatically)
5. Push to remote and create pull request

### Branch Protection
- Main branch requires pull requests
- All status checks must pass before merge
- At least one review required

## Project Guidelines

### Praxis Design System
- **CRITICAL**: Only use components and styles from the Praxis Design System
- No inline CSS or custom styling allowed
- If a component doesn't exist, consult with Product Management first

### Accessibility
- All components must be keyboard accessible
- Proper ARIA labels required
- Maintain WCAG 2.1 AA compliance

### Performance
- Target Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Lazy load non-critical resources
- Use Astro's selective hydration

## Environment Variables

Create a `.env` file in `apps/website/` for development:

```bash
# Azure AD B2B Configuration
ASTRO_PUBLIC_AZURE_CLIENT_ID=your_client_id_here
ASTRO_PUBLIC_AZURE_AUTHORITY=https://login.microsoftonline.com/your_tenant_id
ASTRO_PUBLIC_PRAXIS_APP_URL=https://app.praxisnavigator.io
ASTRO_PUBLIC_MARKETPLACE_URL=https://azuremarketplace.microsoft.com/your_listing
```

## Testing

### Unit Tests
```bash
npm run test:unit
```
- Uses Vitest with React Testing Library
- Location: `apps/website/src/**/*.test.{ts,tsx}`
- Target: 80% code coverage

### End-to-End Tests  
```bash
npm run test:e2e
```
- Uses Playwright for cross-browser testing
- Location: `apps/website/tests/e2e/`
- Covers critical user journeys

### Test in Watch Mode
```bash
npm run test:watch
```

## Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**
- Run `npm run type-check` to see detailed errors
- Ensure all types are properly imported from `packages/shared`

**ESLint errors:**
- Run `npm run lint:fix` to auto-fix issues
- Check `.eslintrc.cjs` for rules configuration

**Styling issues:**
- Verify you're using only Praxis CSS classes
- Check `apps/website/src/styles/globals.css` for available classes
- Consult `docs/praxis-design-manual/` for design system guidelines

### Getting Help

- Check project documentation in `docs/`
- Review architecture decisions in `docs/architecture/`
- Consult Praxis Design Manual: `docs/praxis-design-manual/praxis-design-manual.md`

## Contributing

1. Follow the development workflow outlined above
2. Ensure all tests pass and code quality checks succeed
3. Follow the Praxis Design System guidelines
4. Write clear commit messages and pull request descriptions

## License

MIT License - see LICENSE file for details