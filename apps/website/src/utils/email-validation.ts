// Consumer email domains blacklist for business email validation
export const CONSUMER_EMAIL_DOMAINS = [
  // Major free email providers
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'live.com',
  'msn.com',
  'yahoo.co.uk',
  'gmail.co.uk',
  'hotmail.co.uk',

  // International providers
  'mail.ru',
  'yandex.com',
  'yandex.ru',
  'online.no',
  'hotmail.fr',
  'yahoo.fr',
  'yahoo.de',
  'gmx.com',
  'gmx.de',
  't-online.de',
  'web.de',
  'freenet.de',
  'yahoo.it',
  'libero.it',
  'yahoo.es',

  // Apple/iCloud
  'icloud.com',
  'me.com',
  'mac.com',

  // Privacy-focused
  'protonmail.com',
  'proton.me',
  'tutanota.com',
  'tutamail.com',

  // Other common consumer domains
  'rediffmail.com',
  '163.com',
  '126.com',
  'qq.com',
  'sina.com',
  'naver.com',
  'daum.net',
  'hanmail.net',
  'yahoo.com.au',
  'bigpond.com',
  'optusnet.com.au',
  'telstra.com',
  'tpg.com.au',
];

// Frontend validation - subset of most common domains for real-time feedback
export const FRONTEND_CONSUMER_DOMAINS = CONSUMER_EMAIL_DOMAINS.slice(0, 20);

export interface EmailValidationResult {
  isValid: boolean;
  isConsumerEmail: boolean;
  message?: string;
}

export function validateBusinessEmail(
  email: string,
  language: 'en' | 'no' = 'en'
): EmailValidationResult {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      isConsumerEmail: false,
      message:
        language === 'no' ? 'Ugyldig e-postformat' : 'Invalid email format',
    };
  }

  // Extract domain
  const domain = email.toLowerCase().split('@')[1];

  // Check against frontend consumer domains for immediate feedback
  if (FRONTEND_CONSUMER_DOMAINS.includes(domain)) {
    return {
      isValid: false,
      isConsumerEmail: true,
      message:
        language === 'no'
          ? 'Vennligst bruk din bedrifts e-postadresse'
          : 'Please use your company email address',
    };
  }

  return {
    isValid: true,
    isConsumerEmail: false,
  };
}

export function isConsumerEmailDomain(domain: string): boolean {
  return CONSUMER_EMAIL_DOMAINS.includes(domain.toLowerCase());
}
