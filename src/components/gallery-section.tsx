'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

export default function GallerySection() {
  return (
    <section id="gallery">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Checkout Our Application
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the clean, intuitive, and beautiful user interfaces of our ready-made apps.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[Autoplay({ delay: 3000 })]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    {image.link ? (
                      <div className="flex flex-col gap-3">
                        <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                          <CardContent className="flex aspect-[9/14] items-center justify-center p-0">
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              width={300}
                              height={600}
                              data-ai-hint={image.imageHint}
                              className="object-cover w-full h-full"
                            />
                          </CardContent>
                        </Card>
                        <Button asChild className="w-full">
                          <Link href={image.link} target="_blank" rel="noopener noreferrer">
                            Download Now
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <CardContent className="flex aspect-[9/14] items-center justify-center p-0">
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={300}
                            height={600}
                            data-ai-hint={image.imageHint}
                            className="object-cover w-full h-full"
                          />
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
