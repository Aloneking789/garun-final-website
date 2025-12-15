import { MetadataRoute } from 'next';

/**
 * ============================================
 * ROBOTS.TS - DYNAMIC ROBOTS.TXT GENERATION
 * ============================================
 * 
 * Place this file at: src/app/robots.ts
 * This will automatically generate: /robots.txt
 * 
 * Rules:
 * - Allow all major search engines (Google, Bing, etc.)
 * - Block bad bots and scrapers
 * - Disallow admin, private, and dynamic pages
 * - Set appropriate crawl delays
 */

export const revalidate = false;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ============================================
      // RULE 1: ALLOW ALL MAJOR SEARCH ENGINES
      // ============================================
      {
        userAgent: ['googlebot', 'googlebot-mobile'],
        allow: '/',
        crawlDelay: 0.5,
      },
      // Bing
      {
        userAgent: 'bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      // DuckDuckGo
      {
        userAgent: 'duckduckbot',
        allow: '/',
      },
      // Yandex
      {
        userAgent: 'Yandexbot',
        allow: '/',
        crawlDelay: 1,
      },
      // Baidu
      {
        userAgent: 'Baiduspider',
        allow: '/',
      },

      // ============================================
      // RULE 2: BLOCK KNOWN BAD BOTS & SCRAPERS
      // ============================================
      {
        userAgent: [
          'MJ12bot', // Block known bad crawler
          'AhrefsBot', // Ahrefs scraper (optional - you may want to allow this)
          'SemrushBot', // Semrush bot (optional)
          'BLEXBot',
          'DotBot',
          'MojeekBot',
          'SBL-BOT',
          'CCBot',
          'ChatGPT',
          'GPTBot',
          'claudebot',
          'anthropic-ai',
        ],
        disallow: '/',
      },

      // ============================================
      // RULE 3: BLOCK COMMON SCRAPERS
      // ============================================
      {
        userAgent: ['*'], // Wildcard rule for all other bots
        disallow: [
          '/admin',
          '/dashboard',
          '/api',
          '/private',
          '/*.json',
          '/?*', // Disallow URLs with query parameters
          '/search',
          '/cart',
          '/checkout',
        ],
        allow: ['/'],
        crawlDelay: 1,
      },
    ],

    // ============================================
    // SITEMAP DECLARATION
    // ============================================
    sitemap: 'https://garuntechnologies.com/sitemap.xml',

    // ============================================
    // HOST DECLARATION
    // ============================================
    host: 'https://garuntechnologies.com',
  };
}
