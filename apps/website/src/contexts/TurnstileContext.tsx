/**
 * Global Turnstile Context for CAPTCHA management across all contact forms
 */

import React, { createContext, useContext, useState, useCallback } from 'react';

interface TurnstileContextType {
  token: string | null;
  isReady: boolean;
  setToken: (token: string | null) => void;
  setReady: (ready: boolean) => void;
  reset: () => void;
}

const TurnstileContext = createContext<TurnstileContextType | undefined>(
  undefined
);

interface TurnstileProviderProps {
  children: React.ReactNode;
}

export function TurnstileProvider({ children }: TurnstileProviderProps) {
  const [token, setTokenState] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  const setToken = useCallback((newToken: string | null) => {
    setTokenState(newToken);
  }, []);

  const setReady = useCallback((ready: boolean) => {
    setIsReady(ready);
  }, []);

  const reset = useCallback(() => {
    setTokenState(null);
    setIsReady(false);
  }, []);

  const value: TurnstileContextType = {
    token,
    isReady,
    setToken,
    setReady,
    reset,
  };

  return (
    <TurnstileContext.Provider value={value}>
      {children}
    </TurnstileContext.Provider>
  );
}

export function useTurnstile(): TurnstileContextType {
  const context = useContext(TurnstileContext);
  if (context === undefined) {
    throw new Error('useTurnstile must be used within a TurnstileProvider');
  }
  return context;
}

// Export for standalone usage when context is not available
export { TurnstileContext };
