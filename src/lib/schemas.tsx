import { ReactNode } from 'react';

// ============================================
// JSON-LD STRUCTURED DATA SCHEMAS
// ============================================

interface SchemaScriptProps {
  schema: Record<string, any>;
}

/**
 * Component to safely inject JSON-LD structured data
 * Use this in your layout.tsx <head> section
 */
export function SchemaScript({ schema }: SchemaScriptProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  );
}

// ============================================
// ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Garun Technologies',
  url: 'https://garuntechnologies.com',
  logo: 'https://garuntechnologies.com/logo.png',
  description:
    'Custom app and web development agency specializing in React Native, Android, iOS, and MERN stack solutions for startups and enterprises.',
  foundingDate: '2020', // Update with actual founding date
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: '+91-9369416686',
    email: 'hello@garuntechnologies.com', // Add your email
  },
  sameAs: [
    'https://www.linkedin.com/company/garun-technologies', // Add actual LinkedIn
    'https://twitter.com/garuntech', // Add actual Twitter
    'https://github.com/garuntech', // Add actual GitHub
    'https://www.facebook.com/garuntech', // Add actual Facebook
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'GDA Tower',
    addressLocality: 'Gorakhpur',
    addressRegion: 'Uttar Pradesh',
    postalCode: '273015',
    addressCountry: 'IN', // India
  },
  areaServed: [
    'IN', // India
    'US', // Add other countries you serve
    'GB',
    'CA',
    'AU',
  ],
};

// ============================================
// PROFESSIONAL SERVICE SCHEMA (FOR SERVICES PAGE)
// ============================================
export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Garun Technologies',
  image: 'https://garuntechnologies.com/logo.png',
  description:
    'Professional software development agency offering mobile app and web development services.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Office Street Address',
    addressLocality: 'City Name',
    addressRegion: 'State/Province',
    postalCode: 'Postal Code',
    addressCountry: 'IN',
  },
  telephone: '+91-9369416686',
  priceRange: '₹20000 - ₹1000000+',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '150', // Update with actual count
    bestRating: '5',
    worstRating: '1',
  },
};

// ============================================
// LOCAL BUSINESS SCHEMA
// ============================================
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Garun Technologies',
  image: 'https://garuntechnologies.com/logo.png',
  description: 'Custom software development and app development agency in India',
  url: 'https://garuntechnologies.com',
  telephone: '+91-9369416686',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Office Street Address',
    addressLocality: 'City Name',
    addressRegion: 'State/Province',
    postalCode: 'Postal Code',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '₹20000 - ₹1000000+',
  sameAs: [
    'https://www.linkedin.com/company/garun-technologies',
    'https://twitter.com/garuntech',
  ],
};

// ============================================
// SERVICE SCHEMA (MOBILE APP DEVELOPMENT)
// ============================================
export const mobileAppServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile App Development',
  description:
    'Custom Android, iOS, and React Native app development services for startups and enterprises.',
  provider: {
    '@type': 'Organization',
    name: 'Garun Technologies',
    url: 'https://garuntechnologies.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'IN',
  },
  priceRange: '₹50000 - ₹500000+',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20mobile%20app%20development.',
      actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
    },
    result: {
      '@type': 'Reservation',
      name: 'Free Consultancy',
    },
  },
};

// ============================================
// SERVICE SCHEMA (WEB DEVELOPMENT)
// ============================================
export const webServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development',
  description:
    'Custom MERN stack and web application development for SaaS, e-commerce, and enterprise solutions.',
  provider: {
    '@type': 'Organization',
    name: 'Garun Technologies',
    url: 'https://garuntechnologies.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'IN',
  },
  priceRange: '₹20000 - ₹300000+',
  potentialAction: {
    '@type': 'ReserveAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate:
        'https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20web%20development.',
      actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
    },
    result: {
      '@type': 'Reservation',
      name: 'Free Consultancy',
    },
  },
};

// ============================================
// BREADCRUMB SCHEMA (FOR NAVIGATION)
// ============================================
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ============================================
// HOW TO IMPLEMENT IN layout.tsx
// ============================================
// Import in your layout.tsx:
// import { SchemaScript, organizationSchema, localBusinessSchema } from '@/lib/schemas';
//
// Then add to your <head>:
// <SchemaScript schema={organizationSchema} />
// <SchemaScript schema={localBusinessSchema} />
//
// For page-specific schemas, add them in individual page.tsx files:
// import { SchemaScript, mobileAppServiceSchema } from '@/lib/schemas';
//
// export default function MobileDevPage() {
//   return (
//     <>
//       <SchemaScript schema={mobileAppServiceSchema} />
//       Page content here
//     </>
//   );
// }
