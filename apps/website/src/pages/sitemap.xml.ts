/**
 * Dynamic XML Sitemap Generation for Praxis Navigator
 * Supports multilingual content with hreflang annotations and priority indicators
 */

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://praxisnavigator.io';

  // Define site pages with priorities and update frequencies
  const pages = [
    // High Priority Pages (Conversion focused)
    {
      url: '/',
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: '2024-08-21',
      languages: ['en', 'no'],
    },
    {
      url: '/product',
      priority: 1.0,
      changefreq: 'weekly',
      lastmod: '2024-08-21',
      languages: ['en', 'no'],
    },
    {
      url: '/about/kai-roer',
      priority: 0.9,
      changefreq: 'monthly',
      lastmod: '2024-08-15',
      languages: ['en', 'no'],
    },

    // Medium Priority Pages (Authority & Content)
    {
      url: '/segments/ciso',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: '2024-08-20',
      languages: ['en', 'no'],
    },
    {
      url: '/segments/compliance-officer',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: '2024-08-20',
      languages: ['en', 'no'],
    },
    {
      url: '/segments/security-manager',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: '2024-08-20',
      languages: ['en', 'no'],
    },
    {
      url: '/segments/it-administrator',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: '2024-08-20',
      languages: ['en', 'no'],
    },
    {
      url: '/segments/enterprise',
      priority: 0.8,
      changefreq: 'weekly',
      lastmod: '2024-08-20',
      languages: ['en', 'no'],
    },

    // Resource Pages (SEO & Content Marketing)
    {
      url: '/resources',
      priority: 0.7,
      changefreq: 'weekly',
      lastmod: '2024-08-21',
      languages: ['en', 'no'],
    },
    {
      url: '/resources/security-culture-framework',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2024-08-15',
      languages: ['en', 'no'],
    },
    {
      url: '/resources/microsoft-graph-integration',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2024-08-15',
      languages: ['en', 'no'],
    },
    {
      url: '/resources/training-roi-guide',
      priority: 0.7,
      changefreq: 'monthly',
      lastmod: '2024-08-15',
      languages: ['en', 'no'],
    },

    // Standard Pages
    {
      url: '/contact',
      priority: 0.6,
      changefreq: 'monthly',
      lastmod: '2024-08-01',
      languages: ['en', 'no'],
    },
    {
      url: '/privacy',
      priority: 0.4,
      changefreq: 'yearly',
      lastmod: '2024-07-01',
      languages: ['en', 'no'],
    },
    {
      url: '/terms',
      priority: 0.4,
      changefreq: 'yearly',
      lastmod: '2024-07-01',
      languages: ['en', 'no'],
    },
  ];

  // Generate XML sitemap content
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(page => {
    // Generate entries for each language
    const languageEntries = page.languages
      .map(lang => {
        const urlPath =
          lang === 'en' ? page.url : `/no${page.url === '/' ? '' : page.url}`;
        const fullUrl = `${baseUrl}${urlPath}`;

        // Generate hreflang alternates
        const hreflangLinks = page.languages
          .map(altLang => {
            const altPath =
              altLang === 'en'
                ? page.url
                : `/no${page.url === '/' ? '' : page.url}`;
            const altUrl = `${baseUrl}${altPath}`;
            const hreflang = altLang === 'en' ? 'en-US' : 'nb-NO';

            return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${altUrl}" />`;
          })
          .join('\n');

        // Add x-default for English version
        const xDefaultLink =
          lang === 'en'
            ? `    <xhtml:link rel="alternate" hreflang="x-default" href="${fullUrl}" />`
            : '';

        return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${hreflangLinks}
${xDefaultLink}
  </url>`;
      })
      .join('\n');

    return languageEntries;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};
