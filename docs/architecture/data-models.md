# Data Models

Since this is a static promotional website, data models are primarily focused on form submissions, content structures, and user session data.

## Content Models

**Purpose**: Structure for website content that can be managed through the CMS

**Key Attributes**:
- `id`: string - Unique identifier
- `title`: string - Page/content title  
- `slug`: string - URL-friendly identifier
- `content`: RichText - Main content body
- `meta`: SEOMeta - SEO metadata
- `publishedAt`: Date - Publication timestamp
- `locale`: 'en' | 'no' - Language identifier

### TypeScript Interface

```typescript
interface ContentModel {
  id: string;
  title: string;
  slug: string;
  content: RichText;
  meta: SEOMeta;
  publishedAt: Date;
  locale: 'en' | 'no';
  status: 'draft' | 'published';
}

interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
```

## Lead Data Models

**Purpose**: Structure for capturing and managing lead generation forms

**Key Attributes**:
- `id`: string - Unique lead identifier
- `type`: LeadType - Form type (demo, trial, contact)
- `contact`: ContactInfo - Contact details
- `company`: CompanyInfo - Organization details  
- `source`: string - Traffic source/campaign
- `segment`: UserSegment - Target user segment
- `submittedAt`: Date - Form submission time

### TypeScript Interface

```typescript
interface LeadSubmission {
  id: string;
  type: 'demo' | 'trial' | 'contact' | 'whitepaper';
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    title?: string;
  };
  company: {
    name: string;
    size: '1-50' | '51-200' | '201-1000' | '1000+';
    industry?: string;
    website?: string;
  };
  segment: 'security-leaders' | 'executives' | 'managers' | 'sat-teams';
  source: string;
  utm: UTMParameters;
  submittedAt: Date;
  qualification: {
    budget?: string;
    timeline?: string;
    authority?: boolean;
    need?: string;
  };
}

interface UTMParameters {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
}
```

## User Session Models

**Purpose**: Track user interactions and authentication state

**Key Attributes**:
- `sessionId`: string - Session identifier
- `user`: UserInfo - Authenticated user data
- `preferences`: UserPreferences - Language, theme settings
- `journey`: UserJourney[] - Page navigation tracking

### TypeScript Interface

```typescript
interface UserSession {
  sessionId: string;
  user?: {
    objectId: string;
    email: string;
    name: string;
    tenantId: string;        // Always present for B2B organizations
    organizationName?: string;
  };
  preferences: {
    language: 'en' | 'no';
    timezone: string;
    consentGiven: boolean;
  };
  journey: UserJourney[];
  utm?: UTMParameters;
}

interface UserJourney {
  page: string;
  timestamp: Date;
  duration?: number;
  source?: string;
  action?: string;
}
```

---
