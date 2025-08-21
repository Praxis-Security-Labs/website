// Shared TypeScript types for Praxis website

// Common types for forms and lead generation
export interface LeadSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  message?: string;
  segment: UserSegment;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export type UserSegment = 
  | 'security-leaders'
  | 'executives' 
  | 'managers'
  | 'sat-teams'
  | 'general';

// Language and internationalization types
export type Language = 'en' | 'no';

export interface LocalizedContent {
  en: string;
  no: string;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  id?: string;
}