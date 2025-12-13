import { Metadata } from 'next';

// ============================================
// PAGE-SPECIFIC SEO METADATA
// ============================================

export const metadata: Metadata = {
  title: 'Custom App & Web Development Agency | Garun Technologies',
  description: 'Hire expert React Native, Android, iOS, and MERN developers. Custom software solutions for startups & enterprises. Starts at ₹20,000. Book free consultancy today.',

  openGraph: {
    title: 'Custom App & Web Development Agency | Garun Technologies',
    description: 'Hire expert developers for mobile and web app development. React Native, Android, iOS, MERN stack solutions.',
    type: 'website',
    locale: 'en_US',
    url: 'https://garuntechnologies.com',
    siteName: 'Garun Technologies',
    images: [
      {
        url: 'https://garuntechnologies.com/log.png',
        width: 1200,
        height: 630,
        alt: 'Garun Technologies - Home',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Custom App & Web Development Agency | Garun Technologies',
    description: 'Hire expert developers for mobile and web app development. React Native, Android, iOS, MERN stack solutions.',
    images: ['https://garuntechnologies.com/log.png'],
  },
};

export default function Home() {
  return (
    <main>
      {/* Your existing home page content */}
      {/* The H1 below is optimized for SEO (Section 5) */}
      <h1 className="text-5xl font-bold">
        Custom App & Web Development Agency for Startups & Enterprises
      </h1>
      {/* Rest of your page */}
    </main>
  );
}
