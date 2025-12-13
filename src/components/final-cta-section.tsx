import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MessageCircle, Instagram } from 'lucide-react';

export default function FinalCtaSection() {
  const ctaImage = PlaceHolderImages.find(img => img.id === 'final-cta-phone');

  return (
    <section id="contact" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 rounded-2xl bg-background p-8 md:p-12 lg:p-16 shadow-lg">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Ready to Build Your App?
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground md:text-xl/relaxed">
              Your journey from idea to launch starts here. Book a free call to discuss your project with our experts.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button asChild size="lg" className="transform transition-transform duration-300 hover:scale-105">
                <Link href="https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Let%27s%20schedule%20a%20meet%20to%20discuss%20the%20project">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Free Consultancy
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="transform transition-transform duration-300 hover:scale-105">
                <Link href="#">
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow Us
                </Link>
              </Button>
            </div>
          </div>
          {ctaImage && (
            <div className="relative w-48 shrink-0">
              <Image
                src={ctaImage.imageUrl}
                alt={ctaImage.description}
                width={200}
                height={400}
                data-ai-hint={ctaImage.imageHint}
                className="rounded-2xl object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
