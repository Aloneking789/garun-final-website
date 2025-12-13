/**
 * ============================================
 * SEO CONTENT OPTIMIZATION GUIDE
 * ============================================
 * 
 * This file contains optimized copy for your home page
 * focusing on high-intent keywords and conversion.
 */

// ============================================
// HOME PAGE H1 (PRIMARY KEYWORD FOCUS)
// ============================================
export const homePageH1 = 'Custom App & Web Development Agency for Startups & Enterprises';

/**
 * Why this H1 is optimized:
 * ✅ Contains primary keyword: "Custom App & Web Development Agency"
 * ✅ Secondary modifier: "for Startups & Enterprises" (targets audience)
 * ✅ 11 words (ideal length for Google's display)
 * ✅ Clear value proposition
 * ✅ Includes high-intent modifiers
 * ✅ Natural language (not keyword-stuffed)
 */

// ============================================
// HOME PAGE META DESCRIPTION (160 chars)
// ============================================
export const homePageMetaDescription =
  'Hire expert developers for mobile & web apps. React Native, Android, iOS, MERN stack. Starts at ₹20K. Book free consultancy from Garun Technologies.';

/**
 * Why this meta description is optimized:
 * ✅ Contains 155 characters (fits in Google's display: 155-160)
 * ✅ Primary keyword: "mobile & web apps"
 * ✅ Secondary keywords: "React Native, Android, iOS, MERN"
 * ✅ Call-to-action: "Book free consultancy"
 * ✅ Price mention: Builds trust & filters low-quality leads
 * ✅ Company name: "Garun Technologies" for brand awareness
 * ✅ Compelling: Includes CTA and pricing
 */

// ============================================
// ALTERNATIVE META DESCRIPTION (More CTA-focused)
// ============================================
export const homePageMetaDescriptionAlt =
  'Custom app & web development for Indian startups. Expert React Native, Android, iOS developers. Free tech consultation. Get your MVP built today!';

// ============================================
// SERVICE PAGE EXAMPLES
// ============================================

export const mobileAppH1 = 'React Native & Native Mobile App Development Services';
export const mobileAppMetaDesc =
  'Custom Android & iOS app development. React Native experts. Build scalable mobile solutions with Garun Technologies. Hire developers now.';

export const webAppH1 = 'MERN Stack & Custom Web Application Development';
export const webAppMetaDesc =
  'Scalable web solutions using MERN stack. SaaS development, e-commerce, custom platforms. Hire expert web developers at Garun Technologies.';

// ============================================
// IMPLEMENTATION IN YOUR PAGE.TSX
// ============================================

/**
 * Add this to your src/app/page.tsx:
 * 
 * import { homePageH1, homePageMetaDescription } from '@/lib/seo-copy';
 * 
 * export const metadata: Metadata = {
 *   title: homePageH1 + ' | Garun Technologies',
 *   description: homePageMetaDescription,
 * };
 * 
 * export default function Home() {
 *   return (
 *     <main>
 *       <section className="hero">
 *         <h1>{homePageH1}</h1>
 *         <p>Your compelling subheading here...</p>
 *       </section>
 *     </main>
 *   );
 * }
 */

// ============================================
// ADDITIONAL SEO COPY TEMPLATES
// ============================================

export const seoTemplates = {
  // Hero section subheading
  heroSubheading:
    'From concept to production: Expert React Native, Android, iOS, and MERN developers ready to build your next big app or web platform.',

  // Value proposition
  valueProposition:
    'We specialize in building scalable, high-performance mobile and web applications that help startups and enterprises transform their business ideas into reality.',

  // CTA primary
  ctaPrimary: 'Book Your Free Technical Consultation',

  // CTA secondary
  ctaSecondary: 'View Our Portfolio & Case Studies',

  // Pricing H2
  pricingH2: 'Transparent Pricing. No Hidden Costs. You Own Your Code Forever.',

  // Services intro
  servicesIntro:
    'From native Android and iOS apps to React Native cross-platform solutions, and full-stack MERN web applications—we deliver the technology your business needs.',

  // Trust section
  trustSection:
    'Trusted by 150+ startups and enterprises. 4.8/5 average rating. 3+ years of proven excellence in mobile and web development.',

  // Tech stack section
  techStackIntro:
    'Our expertise spans the latest technologies: React Native, Android Studio, Swift, React.js, Node.js, MongoDB, and more.',
};

// ============================================
// KEYWORD DENSITY OPTIMIZATION TIPS
// ============================================

/**
 * For optimal SEO without over-optimization:
 * 
 * Primary Keywords (should appear 1-2 times per 300 words):
 * - "Custom app development"
 * - "Web development agency"
 * - "React Native developers"
 * - "Android app development"
 * - "MERN stack"
 * 
 * Secondary Keywords (0.5-1 time per 300 words):
 * - "Hire developers"
 * - "Software agency"
 * - "Mobile app agency"
 * - "Startup development"
 * 
 * Long-tail Keywords (natural placement):
 * - "Custom app development for startups"
 * - "Hire React Native developers"
 * - "Build MVP quickly"
 * - "Affordable web development India"
 */

// ============================================
// INTERNAL LINKING STRATEGY
// ============================================

export const internalLinkingStrategy = {
  // Home page should link to:
  homePageLinks: [
    { text: 'Mobile App Development', url: '/services/mobile-app-development' },
    { text: 'Web Development', url: '/services/web-development' },
    { text: 'View Portfolio', url: '/portfolio' },
    { text: 'Pricing', url: '/pricing' },
    { text: 'Contact Us', url: '/contact' },
  ],

  // Service pages should link to:
  servicePageLinks: [
    { text: 'How We Work', url: '/process' },
    { text: 'Case Studies', url: '/portfolio' },
    { text: 'Technologies', url: '/services' },
    { text: 'Book Consultation', url: '/contact' },
  ],

  // Blog should link to:
  blogLinks: [
    { text: 'Related Services', url: '/services' },
    { text: 'Case Study', url: '/portfolio' },
    { text: 'Get Started', url: '/contact' },
  ],
};

// ============================================
// ANCHOR TEXT BEST PRACTICES
// ============================================

/**
 * ✅ GOOD ANCHOR TEXT:
 * - "Hire React Native developers"
 * - "Mobile app development services"
 * - "View our web development portfolio"
 * 
 * ❌ AVOID:
 * - "Click here"
 * - "Learn more" (use sparingly)
 * - "Read more" (lacks keyword relevance)
 * - Exact match for competitive keywords (unnatural)
 */
