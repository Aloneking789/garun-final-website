import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section id="home" className="pt-28 md:pt-16 pb-8 md:pb-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-slide-up">
            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline transition-all duration-500 hover:-translate-y-2" style={{ 'animation': 'slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), pulse-soft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
              Build Your Mobile App Faster with Us
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl transition-all duration-500 hover:translate-x-1" style={{ 'animation': 'slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both' }}>
              Get a free consultation for your startup idea. We turn visions into market-ready apps using our versatile, pre-built platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" style={{ 'animation': 'slide-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both' }}>
              <Button asChild size="lg" className="hover-button-glow relative">
                <Link href="https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Let%27s%20schedule%20a%20meet%20to%20discuss%20the%20project">
                  <MessageCircle className="mr-2 h-5 w-5 icon-hover" />
                  Book Free Consultancy
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="hover-button-glow relative">
                <Link href="https://www.instagram.com/garuntechnologies">
                  <Instagram className="mr-2 h-5 w-5 icon-hover" />
                  Follow on Instagram
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative w-full h-full flex justify-center items-center animate-fade-in hover-lift">
            <Image
              src="/heroo.png"
              alt="Mobile app showcase"
              width={1000}
              height={800}
              priority
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
