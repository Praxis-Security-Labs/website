// Main translation exports
export { ui, languages, defaultLang } from './ui';
export {
  useTranslations,
  getLangFromUrl,
  getRelativeLocaleUrl,
  getLocaleFromUrl,
} from './utils';

// Content-specific translations
export { homepage } from './homepage';
export { product } from './product';
export { sections } from './sections';
export { forms } from './forms';
export { pages } from './pages';
export { segments } from './segments';
export { compliance } from './compliance';

// Import for type definitions
import { ui } from './ui';
import { homepage } from './homepage';
import { product } from './product';
import { sections } from './sections';
import { forms } from './forms';
import { pages } from './pages';
import { segments } from './segments';
import { compliance } from './compliance';

// Type definitions for translation keys
export type Language = 'en' | 'no';
export type TranslationKey = keyof typeof ui.en;
export type HomepageKey = keyof typeof homepage.en;
export type ProductKey = keyof typeof product.en;
export type SectionKey = keyof typeof sections.en;
export type FormKey = keyof typeof forms.en;
export type PageKey = keyof typeof pages.en;
export type SegmentKey = keyof typeof segments.en;
export type ComplianceKey = keyof typeof compliance.en;
