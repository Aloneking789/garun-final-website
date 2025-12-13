import type { Metadata, Viewport } from 'next';
import { ReactNode } from 'react';
import './globals.css';

// ============================================
// SEO METADATA CONFIGURATION
// ============================================

const siteConfig = {
  name: 'Garun Technologies',
  description: 'Custom app & web development agency specializing in React Native, Android, iOS, and MERN stack solutions for startups and enterprises.',
  url: 'https://garuntechnologies.com',
  ogImage: 'https://garuntechnologies.com/log.png',
  twitterHandle: '@GarunTech',
  phone: '+91 9369416686',
};

export const metadata: Metadata = {
  // ============================================
  // BASIC METADATA
  // ============================================
  title: {
    default: 'Custom App & Web Development Agency | Garun Technologies',
    template: '%s | Garun Technologies',
  },
  description: siteConfig.description,
  keywords: [
    'app development',
    'web development',
    'React Native',
    'Android development',
    'iOS development',
    'MERN stack',
    'custom software',
    'software agency',
    'tech outsourcing',
    'startup development',
  ],

  // ============================================
  // VIEWPORT & THEME
  // ============================================
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },

  // ============================================
  // OPEN GRAPH (Social Media Preview)
  // ============================================
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Custom App & Web Development Agency | Garun Technologies',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Garun Technologies - App & Web Development',
        type: 'image/jpeg',
      },
      {
        url: `${siteConfig.url}/log.png`,
        width: 800,
        height: 800,
        alt: 'Garun Technologies',
        type: 'image/jpeg',
      },
    ],
  },

  // ============================================
  // TWITTER CARD
  // ============================================
  twitter: {
    card: 'summary_large_image',
    title: 'Custom App & Web Development Agency | Garun Technologies',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },

  // ============================================
  // ROBOTS & CRAWLING
  // ============================================
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  // ============================================
  // VERIFICATION & TRACKING
  // ============================================
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add Google Search Console verification code
    // yandex: 'YOUR_YANDEX_CODE',
  },

  // ============================================
  // ADDITIONAL METADATA
  // ============================================
  authors: [
    {
      name: 'Garun Technologies',
      url: siteConfig.url,
    },
  ],
  creator: 'Garun Technologies',
  category: 'Technology',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: siteConfig.name,
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

// ============================================
// LAYOUT COMPONENT
// ============================================

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ============================================ */}
        {/* CANONICAL URL */}
        {/* ============================================ */}
        <link rel="canonical" href={siteConfig.url} />

        {/* ============================================ */}
        {/* PRECONNECT TO EXTERNAL DOMAINS */}
        {/* ============================================ */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ============================================ */}
        {/* LANGUAGE ALTERNATIVES (if supporting multiple languages) */}
        {/* ============================================ */}
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

        {/* ============================================ */}
        {/* DNS PREFETCH FOR PERFORMANCE */}
        {/* ============================================ */}
        <link rel="dns-prefetch" href="//www.googleanalytics.com" />

        {/* ============================================ */}
        {/* GOOGLE ANALYTICS (Replace with your ID) */}
        {/* ============================================ */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G_YOUR_GOOGLE_ANALYTICS_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G_YOUR_GOOGLE_ANALYTICS_ID');
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
