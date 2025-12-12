import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ServicesSection from '@/components/services-section';
import GallerySection from '@/components/gallery-section';
import TestimonialsSection from '@/components/testimonials-section';
import ClientsSection from '@/components/clients-section';
import PricingSection from '@/components/pricing-section';
import FinalCtaSection from '@/components/final-cta-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ClientsSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
