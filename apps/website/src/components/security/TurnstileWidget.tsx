/**
 * Global Turnstile Widget Component
 * Renders Cloudflare Turnstile CAPTCHA for all contact forms
 */

import { useEffect, useRef } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import { useTurnstile } from '../../contexts/TurnstileContext';

// Environment configuration
const TURNSTILE_SITE_KEY =
  import.meta.env.PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'; // Test key

interface TurnstileWidgetProps {
  className?: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact';
  onError?: (error: string) => void;
}

export function TurnstileWidget({
  className = '',
  theme = 'light',
  size = 'normal',
  onError,
}: TurnstileWidgetProps) {
  const { setToken, setReady, reset } = useTurnstile();
  const turnstileRef = useRef<any>(null);

  // Handle successful verification
  const handleSuccess = (token: string) => {
    console.log('🔐 [DEBUG] Turnstile verification successful');
    setToken(token);
    setReady(true);

    // Store token globally for form-handler access
    if (typeof window !== 'undefined') {
      (window as any).turnstileToken = token;
    }

    // Also store in DOM for fallback access
    let tokenElement = document.querySelector(
      '[data-turnstile-token]'
    ) as HTMLElement;
    if (!tokenElement) {
      tokenElement = document.createElement('div');
      tokenElement.style.display = 'none';
      document.body.appendChild(tokenElement);
    }
    tokenElement.setAttribute('data-turnstile-token', token);
  };

  // Handle verification expiry
  const handleExpire = () => {
    console.log('🔐 [DEBUG] Turnstile token expired');
    reset();

    // Clear global token
    if (typeof window !== 'undefined') {
      delete (window as any).turnstileToken;
    }

    // Clear DOM token
    const tokenElement = document.querySelector('[data-turnstile-token]');
    if (tokenElement) {
      tokenElement.removeAttribute('data-turnstile-token');
    }
  };

  // Handle verification error
  const handleError = (error: string) => {
    console.error('🔐 [ERROR] Turnstile verification failed:', error);
    reset();
    onError?.(error);

    // Clear global token
    if (typeof window !== 'undefined') {
      delete (window as any).turnstileToken;
    }
  };

  // Handle loading/ready state
  const handleLoad = () => {
    console.log('🔐 [DEBUG] Turnstile widget loaded');
  };

  // Reset on unmount
  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  // Don't render if no site key configured
  if (
    !TURNSTILE_SITE_KEY ||
    TURNSTILE_SITE_KEY === '1x00000000000000000000AA'
  ) {
    console.warn(
      '🔐 [WARNING] Turnstile site key not configured, skipping CAPTCHA'
    );
    return null;
  }

  return (
    <div className={`turnstile-widget ${className}`}>
      <Turnstile
        ref={turnstileRef}
        siteKey={TURNSTILE_SITE_KEY}
        onSuccess={handleSuccess}
        onExpire={handleExpire}
        onError={handleError}
        onLoad={handleLoad}
        options={{
          theme,
          size,
          retry: 'auto',
          language: 'auto',
        }}
      />
    </div>
  );
}

export default TurnstileWidget;
