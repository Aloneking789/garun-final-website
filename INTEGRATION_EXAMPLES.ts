/**
 * ============================================
 * INTEGRATION EXAMPLES
 * ============================================
 * 
 * Copy-paste ready examples for integrating SEO
 * into your existing Next.js pages.
 */

// ============================================
// EXAMPLE 1: HOME PAGE (page.tsx)
// ============================================

/**
 * File: src/app/page.tsx
 * 
 * Replace this entire file or update your existing one
 */

export const example1HomePage = `
import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaScript, organizationSchema, localBusinessSchema } from '@/lib/schemas';
import { homePageH1, homePageMetaDescription } from '@/lib/seo-copy';

export const metadata: Metadata = {
  title: 'Custom App & Web Development Agency | Garun Technologies',
  description: 'Hire expert developers for mobile & web apps. React Native, Android, iOS, MERN stack. Starts at ₹20K. Book free consultancy from Garun Technologies.',
  keywords: [
    'custom app development',
    'web development agency',
    'react native',
    'android app development',
    'ios app development',
    'mern stack',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://garuntechnologies.com',
    siteName: 'Garun Technologies',
    title: 'Custom App & Web Development Agency | Garun Technologies',
    description: 'Hire expert developers for mobile & web apps. React Native, Android, iOS, MERN stack.',
    images: [
      {
        url: 'https://garuntechnologies.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garun Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom App & Web Development Agency | Garun Technologies',
    description: 'Hire expert developers for mobile & web apps. React Native, Android, iOS, MERN stack.',
    images: ['https://garuntechnologies.com/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <SchemaScript schema={organizationSchema} />
      <SchemaScript schema={localBusinessSchema} />
      
      <main>
        <section className="hero">
          <h1>{homePageH1}</h1>
          <p className="lead">
            From concept to production: Expert React Native, Android, iOS, and MERN developers 
            ready to build your next big app or web platform.
          </p>
          
          <div className="cta-section">
            <Link href="https://wa.me/919369416686" className="button primary">
              Book Free Consultancy
            </Link>
          </div>
        </section>

        {/* Your existing sections */}
        {/* ServicesSection, PricingSection, etc. */}
      </main>
    </>
  );
}
`;

// ============================================
// EXAMPLE 2: MOBILE APP SERVICE PAGE
// ============================================

export const example2MobileAppPage = `
import type { Metadata } from 'next';
import { SchemaScript, mobileAppServiceSchema } from '@/lib/schemas';
import { mobileAppDeviceMetadata, serviceH1Tags } from '@/lib/service-metadata';

export const metadata = mobileAppDeviceMetadata;

export default function MobileAppDevelopmentPage() {
  return (
    <>
      <SchemaScript schema={mobileAppServiceSchema} />
      
      <main>
        <section className="hero">
          <h1>{serviceH1Tags.mobileApp}</h1>
          <p>
            We specialize in building scalable, high-performance mobile applications 
            for startups and enterprises across Android, iOS, and React Native platforms.
          </p>
        </section>

        <section className="services-detail">
          <h2>Our Mobile App Development Services</h2>
          <div className="services-grid">
            <article>
              <h3>Android App Development</h3>
              <p>Expert native Android development using Kotlin and the latest Android Studio tools...</p>
              <Link href="/services/android-development">Learn More</Link>
            </article>
            
            <article>
              <h3>iOS App Development</h3>
              <p>Professional iOS development using Swift and modern Apple technologies...</p>
              <Link href="/services/ios-development">Learn More</Link>
            </article>
            
            <article>
              <h3>React Native Development</h3>
              <p>Cross-platform mobile apps for iOS and Android with React Native...</p>
              <Link href="/services/react-native-development">Learn More</Link>
            </article>
          </div>
        </section>

        <section className="cta">
          <h2>Ready to Build Your Mobile App?</h2>
          <Link href="/contact" className="button">Book Free Consultation</Link>
        </section>
      </main>
    </>
  );
}
`;

// ============================================
// EXAMPLE 3: WEB DEVELOPMENT PAGE
// ============================================

export const example3WebPage = `
import type { Metadata } from 'next';
import { SchemaScript, webServiceSchema } from '@/lib/schemas';
import { webDevMetadata, serviceH1Tags } from '@/lib/service-metadata';

export const metadata = webDevMetadata;

export default function WebDevelopmentPage() {
  return (
    <>
      <SchemaScript schema={webServiceSchema} />
      
      <main>
        <section className="hero">
          <h1>{serviceH1Tags.webDev}</h1>
          <p>
            Scalable custom web applications built with the MERN stack, perfect for 
            SaaS, e-commerce, and enterprise solutions.
          </p>
        </section>

        <section className="tech-stack">
          <h2>Our Technology Stack</h2>
          <div className="stack">
            <div>
              <h3>Frontend</h3>
              <p>React.js, Next.js, TypeScript, Tailwind CSS</p>
            </div>
            <div>
              <h3>Backend</h3>
              <p>Node.js, Express.js, GraphQL, REST APIs</p>
            </div>
            <div>
              <h3>Database</h3>
              <p>MongoDB, PostgreSQL, Redis, Firebase</p>
            </div>
          </div>
        </section>

        <section className="case-studies">
          <h2>Recent Web Development Projects</h2>
          <p><Link href="/portfolio">View All Case Studies →</Link></p>
        </section>

        <section className="cta">
          <h2>Start Your Web Development Project</h2>
          <Link href="/contact" className="button">Schedule Free Consultation</Link>
        </section>
      </main>
    </>
  );
}
`;

// ============================================
// EXAMPLE 4: PORTFOLIO PAGE
// ============================================

export const example4PortfolioPage = `
import type { Metadata } from 'next';
import { portfolioMetadata, serviceH1Tags } from '@/lib/service-metadata';

export const metadata = portfolioMetadata;

export default function PortfolioPage() {
  return (
    <main>
      <section className="hero">
        <h1>{serviceH1Tags.portfolio}</h1>
        <p>
          Explore the successful app and web development projects we've delivered 
          for startups and enterprises worldwide.
        </p>
      </section>

      <section className="case-studies">
        <h2>Featured Projects</h2>
        {/* Your case study cards here */}
        {/* Each should have a link to internal pages */}
        <article>
          <h3>Healthcare Mobile App</h3>
          <p>React Native app serving 50k+ users...</p>
          <Link href="/case-study/healthcare-app">Read Case Study</Link>
        </article>
      </section>

      <section className="cta">
        <h2>Start Your Next Project</h2>
        <Link href="/contact">Book Free Consultation</Link>
      </section>
    </main>
  );
}
`;

// ============================================
// EXAMPLE 5: CONTACT PAGE
// ============================================

export const example5ContactPage = `
import type { Metadata } from 'next';
import { contactMetadata, serviceH1Tags } from '@/lib/service-metadata';

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <main>
      <section className="hero">
        <h1>{serviceH1Tags.contact}</h1>
        <p>
          Have a project in mind? Let's discuss your requirements and find the 
          perfect solution for your business.
        </p>
      </section>

      <section className="contact-methods">
        <h2>Get in Touch</h2>
        
        <div className="contact-card">
          <h3>WhatsApp</h3>
          <a href="https://wa.me/919369416686">
            +91 9369 416 686
          </a>
          <p>Fastest way to reach us</p>
        </div>

        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:hello@garuntechnologies.com">
            hello@garuntechnologies.com
          </a>
        </div>

        <div className="contact-card">
          <h3>Office</h3>
          <p>Your Office Address Here</p>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        {/* Your contact form here */}
      </section>

      <section className="services-links">
        <h2>Choose Your Service</h2>
        <Link href="/services/mobile-app-development">Mobile App Development</Link>
        <Link href="/services/web-development">Web Development</Link>
        <Link href="/pricing">View Pricing</Link>
      </section>
    </main>
  );
}
`;

// ============================================
// EXAMPLE 6: ADDING BREADCRUMB SCHEMA
// ============================================

export const example6Breadcrumb = `
// In your service page, add breadcrumb schema:

import { SchemaScript, getBreadcrumbSchema } from '@/lib/schemas';

export default function ServicePage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://garuntechnologies.com' },
    { name: 'Services', url: 'https://garuntechnologies.com/services' },
    { name: 'Mobile App Development', url: 'https://garuntechnologies.com/services/mobile-app-development' },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      {/* Your page content */}
    </>
  );
}
`;

// ============================================
// EXAMPLE 7: BLOG POST TEMPLATE
// ============================================

export const example7BlogPost = `
import type { Metadata } from 'next';
import { SchemaScript } from '@/lib/schemas';

export const metadata: Metadata = {
  title: 'How to Choose a Mobile App Developer | Garun Technologies',
  description: 'Complete guide to hiring the right mobile app developers. Learn what to look for, questions to ask, and how to evaluate their expertise.',
  keywords: [
    'hire mobile app developers',
    'choosing app developer',
    'mobile development expertise',
  ],
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://garuntechnologies.com/blog/choose-mobile-app-developer',
    siteName: 'Garun Technologies',
    title: 'How to Choose a Mobile App Developer | Garun Technologies',
    description: 'Complete guide to hiring the right mobile app developers.',
    images: [
      {
        url: 'https://garuntechnologies.com/blog/choose-developer-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    authors: ['Garun Technologies'],
    publishedTime: '2025-12-14T10:00:00Z',
    modifiedTime: '2025-12-14T10:00:00Z',
    tags: ['mobile development', 'hiring', 'developers'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Choose a Mobile App Developer',
  image: 'https://garuntechnologies.com/blog/choose-developer-og.jpg',
  datePublished: '2025-12-14T10:00:00Z',
  dateModified: '2025-12-14T10:00:00Z',
  author: {
    '@type': 'Organization',
    name: 'Garun Technologies',
    url: 'https://garuntechnologies.com',
  },
};

export default function BlogPost() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      
      <article>
        <h1>How to Choose a Mobile App Developer</h1>
        <p className="published">Published: December 14, 2025</p>
        
        <img src="/blog/choose-developer.jpg" alt="Mobile app developers working" />
        
        <h2>1. Check Their Portfolio</h2>
        <p>Look at their past projects and the quality of their code...</p>
        
        <h2>2. Verify Their Experience</h2>
        <p>Ask about their experience with your specific needs...</p>
        
        <h2>Related Articles</h2>
        <ul>
          <li><a href="/blog/react-native-vs-native">React Native vs Native Apps</a></li>
          <li><a href="/blog/mern-stack-guide">MERN Stack Complete Guide</a></li>
        </ul>
        
        <h2>Ready to Hire?</h2>
        <p><a href="/contact">Book a free consultation with our experts</a></p>
      </article>
    </>
  );
}
`;

// ============================================
// EXAMPLE 8: UPDATING LAYOUT.TSX
// ============================================

export const example8LayoutUpdate = `
// Replace the imports in your layout.tsx with:

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import { SchemaScript, organizationSchema, localBusinessSchema } from '@/lib/schemas';

const siteConfig = {
  name: 'Garun Technologies',
  description: 'Custom app & web development agency...',
  url: 'https://garuntechnologies.com',
  ogImage: 'https://garuntechnologies.com/og-image.jpg',
};

export const metadata: Metadata = {
  title: {
    default: 'Custom App & Web Development Agency | Garun Technologies',
    template: '%s | Garun Technologies',
  },
  description: siteConfig.description,
  // ... rest of metadata from layout-seo.tsx
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <SchemaScript schema={organizationSchema} />
        <SchemaScript schema={localBusinessSchema} />
        <link rel="canonical" href={siteConfig.url} />
        {/* Other head content */}
      </head>
      <body>{children}</body>
    </html>
  );
}
`;

// ============================================
// COMMON PATTERNS
// ============================================

export const commonPatterns = {
  // Pattern 1: Service page H1 with keyword
  serviceH1: (serviceName: string, keyword: string) => 
    `${serviceName} Services | ${keyword} | Garun Technologies`,

  // Pattern 2: Meta description with CTA
  metaDescription: (service: string, price: string, company: string) => 
    `Expert ${service} development. Custom solutions from ${price}. Hire developers from ${company}. Free consultation.`,

  // Pattern 3: Internal link with keywords
  internalLink: (text: string, url: string, keywords: string[]) => 
    `<Link href="${url}" title="${keywords.join(', ')}">${text}</Link>`,

  // Pattern 4: JSON-LD service template
  serviceSchema: (name: string, description: string, price: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Garun Technologies',
    },
    priceRange: price,
  }),
};

// ============================================
// DEPLOYMENT CHECKLIST
// ============================================

export const deploymentChecklist = `
BEFORE YOU DEPLOY:

☐ All metadata files created in /src/lib/
☐ Layout.tsx updated with SEO setup
☐ Home page (page.tsx) updated
☐ Service pages updated with metadata
☐ robots.ts in place at /src/app/robots.ts
☐ sitemap.ts in place at /src/app/sitemap.ts
☐ All URLs updated to your domain (not garuntechnologies.com)
☐ Google Analytics ID added
☐ OG images created (1200x630, 800x800)
☐ All links tested for 404s
☐ Mobile preview tested
☐ Lighthouse audit shows 90+

AFTER DEPLOYMENT:

☐ Test /robots.txt - should show formatted robots.txt
☐ Test /sitemap.xml - should show XML sitemap
☐ Submit sitemap to Google Search Console
☐ Submit sitemap to Bing Webmaster Tools
☐ Request indexation in GSC for home page
☐ Verify schemas in Google's Structured Data Tool
☐ Test social media preview (Facebook, Twitter)
☐ Monitor GSC for crawl errors (first 24-48 hours)
☐ Set up alerts for important metrics

ONGOING:

☐ Monitor rankings weekly
☐ Check GSC for errors weekly
☐ Update content monthly
☐ Build backlinks
☐ Analyze traffic trends
☐ Optimize underperforming pages
`;

export default {
  example1HomePage,
  example2MobileAppPage,
  example3WebPage,
  example4PortfolioPage,
  example5ContactPage,
  example6Breadcrumb,
  example7BlogPost,
  example8LayoutUpdate,
  commonPatterns,
  deploymentChecklist,
};
