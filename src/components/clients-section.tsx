import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clientLogos = PlaceHolderImages.filter(img => img.id.startsWith('client-logo')).slice(0, 5);

export default function ClientsSection() {
  return (
    <section className="bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {clientLogos.map((logo) => (
            <div key={logo.id} className="relative h-12 w-32">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                width={128}
                height={48}
                data-ai-hint={logo.imageHint}
                className="object-contain transition-all duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
