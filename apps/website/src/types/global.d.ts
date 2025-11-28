/**
 * Global type declarations
 */

// Extend the global Window interface for Google Analytics
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      parameters?: Record<string, any>
    ) => void;
  }
}

export {};
