/**
 * Social Media Optimization utilities for Open Graph and Twitter Cards
 * Supports dynamic OG image generation and platform-specific optimization
 */

// Social media platform configurations
export const SOCIAL_PLATFORMS = {
  facebook: {
    imageSize: { width: 1200, height: 630 },
    titleLength: 60,
    descriptionLength: 155,
    requiredTags: [
      'og:title',
      'og:description',
      'og:image',
      'og:url',
      'og:type',
    ],
  },
  twitter: {
    imageSize: { width: 1200, height: 675 },
    titleLength: 70,
    descriptionLength: 200,
    requiredTags: [
      'twitter:card',
      'twitter:title',
      'twitter:description',
      'twitter:image',
    ],
  },
  linkedin: {
    imageSize: { width: 1200, height: 627 },
    titleLength: 150,
    descriptionLength: 300,
    requiredTags: ['og:title', 'og:description', 'og:image', 'og:url'],
  },
} as const;

// Open Graph image templates for different page types
export const OG_IMAGE_TEMPLATES = {
  homepage: {
    template: 'hero',
    background: '#013e75', // Praxis blue
    overlay: 'security-pattern',
    title: 'Praxis Navigator',
    subtitle: 'Behavioral Security Monitoring',
    logo: true,
  },
  product: {
    template: 'product',
    background: 'gradient-blue',
    overlay: 'dashboard-preview',
    title: 'Praxis Navigator Platform',
    subtitle: 'Microsoft Graph Integration',
    features: ['Real-time Monitoring', 'Risk Analytics', 'Compliance Reports'],
  },
  about: {
    template: 'person',
    background: 'professional-gradient',
    overlay: 'network-pattern',
    title: 'Kai Roer',
    subtitle: 'Security Culture Expert',
    credentials: ['Author', 'Speaker', 'Pioneer'],
  },
  segments: {
    template: 'segment',
    background: 'corporate-blue',
    overlay: 'enterprise-pattern',
    title: 'Enterprise Security Solutions',
    subtitle: 'Tailored for Your Role',
    cta: 'Explore Solutions',
  },
  resources: {
    template: 'content',
    background: 'knowledge-gradient',
    overlay: 'document-pattern',
    title: 'Security Culture Resources',
    subtitle: 'Expert Insights & Guides',
    category: 'Knowledge Base',
  },
} as const;

/**
 * Generate optimized Open Graph meta tags
 */
export function generateOpenGraphTags(page: {
  title: string;
  description: string;
  url: string;
  type?: string;
  image?: string;
  siteName?: string;
  locale?: string;
  author?: string;
}): Record<string, string> {
  const {
    title,
    description,
    url,
    type = 'website',
    image = 'https://praxisnavigator.io/images/og-praxis-navigator-default.png',
    siteName = 'Praxis Navigator',
    locale = 'en_US',
    author,
  } = page;

  const tags: Record<string, string> = {
    'og:title': truncateText(title, SOCIAL_PLATFORMS.facebook.titleLength),
    'og:description': truncateText(
      description,
      SOCIAL_PLATFORMS.facebook.descriptionLength
    ),
    'og:url': url,
    'og:type': type,
    'og:image': image,
    'og:image:width': SOCIAL_PLATFORMS.facebook.imageSize.width.toString(),
    'og:image:height': SOCIAL_PLATFORMS.facebook.imageSize.height.toString(),
    'og:image:alt': `${title} - Praxis Navigator`,
    'og:site_name': siteName,
    'og:locale': locale,
  };

  // Add article-specific tags
  if (type === 'article' && author) {
    tags['article:author'] = author;
    tags['article:publisher'] =
      'https://www.linkedin.com/company/praxis-navigator';
    tags['article:section'] = 'Security Culture';
  }

  // Add business-specific tags
  if (type === 'website') {
    tags['og:see_also'] = 'https://www.linkedin.com/company/praxis-navigator';
  }

  return tags;
}

/**
 * Generate optimized Twitter Card meta tags
 */
export function generateTwitterCardTags(page: {
  title: string;
  description: string;
  url: string;
  image?: string;
  cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
  site?: string;
  creator?: string;
}): Record<string, string> {
  const {
    title,
    description,
    url,
    image = 'https://praxisnavigator.io/images/og-praxis-navigator-default.png',
    cardType = 'summary_large_image',
    site = '@praxisnavigator',
    creator = '@kairoer',
  } = page;

  return {
    'twitter:card': cardType,
    'twitter:site': site,
    'twitter:creator': creator,
    'twitter:title': truncateText(title, SOCIAL_PLATFORMS.twitter.titleLength),
    'twitter:description': truncateText(
      description,
      SOCIAL_PLATFORMS.twitter.descriptionLength
    ),
    'twitter:image': image,
    'twitter:image:alt': `${title} - Praxis Navigator`,
    'twitter:url': url,
  };
}

/**
 * Generate LinkedIn-specific meta tags
 */
export function generateLinkedInTags(page: {
  title: string;
  description: string;
  url: string;
  image?: string;
  author?: string;
}): Record<string, string> {
  const {
    title,
    description,
    url,
    image = 'https://praxisnavigator.io/images/og-praxis-navigator-default.png',
    author = 'Kai Roer',
  } = page;

  return {
    // LinkedIn uses Open Graph tags but with specific preferences
    'og:title': truncateText(title, SOCIAL_PLATFORMS.linkedin.titleLength),
    'og:description': truncateText(
      description,
      SOCIAL_PLATFORMS.linkedin.descriptionLength
    ),
    'og:url': url,
    'og:image': image,
    'og:type': 'article',
    'article:author': `https://www.linkedin.com/in/${author.toLowerCase().replace(' ', '')}`,
    'article:publisher': 'https://www.linkedin.com/company/praxis-navigator',
  };
}

/**
 * Generate dynamic OG image URL based on page content
 */
export function generateDynamicOGImage(page: {
  type: keyof typeof OG_IMAGE_TEMPLATES;
  title: string;
  subtitle?: string;
  customData?: Record<string, string>;
}): string {
  const { type, title, subtitle, customData = {} } = page;
  const template = OG_IMAGE_TEMPLATES[type];

  // Build query parameters for dynamic image generation
  const params = new URLSearchParams({
    template: template.template,
    title: encodeURIComponent(title),
    subtitle: encodeURIComponent(subtitle || template.subtitle),
    background: template.background,
    ...customData,
  });

  return `https://praxisnavigator.io/api/og-image?${params.toString()}`;
}

/**
 * Validate social media meta tags
 */
export function validateSocialTags(
  tags: Record<string, string>,
  platform: keyof typeof SOCIAL_PLATFORMS
): {
  valid: boolean;
  warnings: string[];
  errors: string[];
} {
  const config = SOCIAL_PLATFORMS[platform];
  const warnings: string[] = [];
  const errors: string[] = [];

  // Check required tags
  config.requiredTags.forEach(tag => {
    if (!tags[tag]) {
      errors.push(`Missing required tag: ${tag}`);
    }
  });

  // Check title length
  const titleTag = platform === 'twitter' ? 'twitter:title' : 'og:title';
  if (tags[titleTag] && tags[titleTag].length > config.titleLength) {
    warnings.push(
      `${titleTag} exceeds recommended length of ${config.titleLength} characters`
    );
  }

  // Check description length
  const descTag =
    platform === 'twitter' ? 'twitter:description' : 'og:description';
  if (tags[descTag] && tags[descTag].length > config.descriptionLength) {
    warnings.push(
      `${descTag} exceeds recommended length of ${config.descriptionLength} characters`
    );
  }

  // Check image dimensions (would need actual image checking in real implementation)
  const imageTag = platform === 'twitter' ? 'twitter:image' : 'og:image';
  if (tags[imageTag] && !tags[imageTag].includes('praxisnavigator.io')) {
    warnings.push(
      'Image should be hosted on the same domain for better performance'
    );
  }

  return {
    valid: errors.length === 0,
    warnings,
    errors,
  };
}

/**
 * Generate social sharing URLs
 */
export function generateSharingUrls(page: {
  url: string;
  title: string;
  description: string;
}): Record<string, string> {
  const { url, title, description } = page;

  return {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&via=praxisnavigator`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + '\n\n' + url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + '\n' + url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  };
}

/**
 * Track social media sharing analytics
 */
export function trackSocialShare(
  platform: string,
  url: string,
  title: string
): void {
  // Integration with Cloudflare Web Analytics
  if (
    typeof window !== 'undefined' &&
    (window as unknown as { __cfBeacon?: unknown }).__cfBeacon
  ) {
    try {
      const beacon = (
        window as unknown as {
          __cfBeacon: {
            trackEvent: (event: {
              category: string;
              action: string;
              label: string;
              value: number;
            }) => void;
          };
        }
      ).__cfBeacon;
      beacon.trackEvent({
        category: 'social_sharing',
        action: `share_${platform}`,
        label: title,
        value: 1,
      });
    } catch (error) {
      // Error tracking failed - continue silently
      if (import.meta.env.MODE === 'development') {
        // eslint-disable-next-line no-console
        console.error('Social sharing tracking error:', error);
      }
    }
  }

  // Development logging
  if (import.meta.env.MODE === 'development') {
    // eslint-disable-next-line no-console
    console.log(`Social share tracked: ${platform} - ${title} - ${url}`);
  }
}

/**
 * Utility function to truncate text while preserving word boundaries
 */
function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength - 3);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

/**
 * Generate structured data for social media optimization
 */
export function generateSocialStructuredData(page: {
  title: string;
  description: string;
  url: string;
  image: string;
  author?: string;
  publishDate?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    image: {
      '@type': 'ImageObject',
      url: page.image,
      width: 1200,
      height: 630,
    },
    author: page.author
      ? {
          '@type': 'Person',
          name: page.author,
          url: 'https://praxisnavigator.io/about/kai-roer',
        }
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Praxis Navigator',
      logo: {
        '@type': 'ImageObject',
        url: 'https://praxisnavigator.io/images/praxis-navigator-logo.png',
      },
    },
    datePublished: page.publishDate || new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': page.url,
    },
  };
}
