# Unified Project Structure

This monorepo structure accommodates the static website with design system integration:

```
praxis-navigator-website/
├── apps/
│   └── website/                # Main Astro application
│       ├── src/
│       │   ├── components/     # React components
│       │   │   ├── ui/         # Basic UI components
│       │   │   ├── layout/     # Layout components
│       │   │   ├── sections/   # Page sections
│       │   │   ├── forms/      # Form components
│       │   │   └── islands/    # Interactive islands
│       │   ├── pages/          # Astro pages
│       │   │   ├── index.astro # Homepage
│       │   │   ├── [lang]/     # Localized pages
│       │   │   └── api/        # Serverless functions
│       │   │       ├── forms/  # Form submission handlers
│       │   │       └── auth/   # Authentication handlers
│       │   ├── layouts/        # Astro layouts
│       │   ├── styles/         # CSS and styling
│       │   │   ├── globals.css # Global styles
│       │   │   └── components.css # Component styles
│       │   ├── content/        # Content collections
│       │   │   ├── pages/      # CMS-managed pages
│       │   │   └── resources/  # Resources content
│       │   ├── types/          # TypeScript interfaces
│       │   ├── stores/         # Zustand stores
│       │   ├── services/       # API services
│       │   ├── utils/          # Utility functions
│       │   └── env.d.ts        # Environment types
│       ├── public/             # Static assets
│       │   ├── images/         # Images and graphics
│       │   ├── fonts/          # Praxis font files
│       │   └── favicon.ico     # Site icon
│       ├── functions/          # Cloudflare Workers
│       │   ├── forms/          # Form handlers  
│       │   ├── auth/           # Auth handlers
│       │   └── utils/          # Shared utilities
│       ├── astro.config.mjs    # Astro configuration
│       ├── tailwind.config.js  # Tailwind + Praxis theme
│       ├── tsconfig.json       # TypeScript config
│       └── package.json        # App dependencies
├── packages/
│   ├── praxis-ui/              # Praxis design system
│   │   ├── src/
│   │   │   ├── components/     # Reusable components
│   │   │   ├── styles/         # Praxis CSS theme
│   │   │   └── index.ts        # Export everything
│   │   ├── tailwind.config.js  # Praxis Tailwind theme
│   │   └── package.json
│   ├── shared/                 # Shared utilities
│   │   ├── src/
│   │   │   ├── types/          # Shared TypeScript types
│   │   │   ├── constants/      # Shared constants
│   │   │   ├── utils/          # Shared utility functions
│   │   │   └── validation/     # Zod schemas
│   │   └── package.json
│   └── config/                 # Shared configuration
│       ├── eslint/             # ESLint configurations
│       ├── typescript/         # TypeScript configurations
│       └── prettier/           # Prettier configurations
├── docs/                       # Documentation
│   ├── prd.md                  # Product requirements
│   ├── ux-architecture.md      # UX specifications
│   ├── architecture.md         # This document
│   └── praxis-design-manual/   # Design system docs
├── scripts/                    # Build and deployment scripts
│   ├── build.sh               # Build script
│   ├── deploy.sh              # Deployment script
│   └── setup.sh               # Initial setup
├── .env.example               # Environment template
├── .gitignore                 # Git ignore rules
├── package.json               # Root package.json
├── pnpm-workspace.yaml        # PNPM workspace config
├── turbo.json                 # Turborepo configuration
└── README.md                  # Project documentation
```

---
