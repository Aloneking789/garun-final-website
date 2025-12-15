import { MetadataRoute } from 'next';

/**
 * ============================================
 * SITEMAP.TS - DYNAMIC SITEMAP.XML GENERATION
 * ============================================
 * 
 * Place this file at: src/app/sitemap.ts
 * This will automatically generate: /sitemap.xml
 * 
 * Features:
 * - Dynamic generation of all public pages
 * - Proper lastModified timestamps
 * - Priority and changefreq for SEO
 * - Large sitemap support (index + multiple sitemaps)
 * 
 * For sites with 50,000+ URLs, split into multiple sitemaps:
 * - sitemap_0.xml, sitemap_1.xml, etc.
 * - Create sitemap_index.xml
 */

export const revalidate = false;

const BASE_URL = 'https://garuntechnologies.com';

// Define your routes with metadata
const routes = [
  // Home page
  {
    url: '/',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  // Main service pages
  {
    url: '/services/mobile-app-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/web-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: '/services/android-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/services/ios-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/services/react-native-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/services/mern-stack-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  {
    url: '/services/saas-development',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  // Company pages
  {
    url: '/about',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/portfolio',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/blog',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  },
  {
    url: '/contact',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: '/pricing',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
  // Legal pages
  {
    url: '/privacy-policy',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: '/terms-of-service',
    lastModified: new Date('2025-12-14'),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // ============================================
  // Generate sitemap entries for static routes
  // ============================================
  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // ============================================
  // OPTIONAL: Generate sitemap entries for dynamic content
  // ============================================
  // If you have a database of blog posts, case studies, etc.:
  // const dynamicEntries = await fetchDynamicRoutes();

  // ============================================
  // Return combined sitemap
  // ============================================
  return staticEntries;
}

/**
 * ============================================
 * ALTERNATIVE: FOR LARGE SITEMAPS (50K+ URLs)
 * ============================================
 * 
 * If you have more than 50,000 URLs, use sitemap-index approach:
 * 
 * File: src/app/sitemap-index.xml/route.ts
 * 
 * export async function GET() {
 *   const sitemaps = [
 *     { url: 'https://garuntechnologies.com/sitemap-0.xml', lastmod: new Date() },
 *     { url: 'https://garuntechnologies.com/sitemap-1.xml', lastmod: new Date() },
 *     { url: 'https://garuntechnologies.com/sitemap-2.xml', lastmod: new Date() },
 *   ];
 *   return new Response(generateSitemapIndex(sitemaps), {
 *     headers: { 'Content-Type': 'application/xml' },
 *   });
 * }
 */
