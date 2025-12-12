import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatar: ImagePlaceholder | undefined;
};

const testimonials: Testimonial[] = [
  {
    id: 'anita-negi',
    quote: "Working with Garun was a game-changer. They delivered our app ahead of schedule, and their ready-made solution saved us significant time and money. I can't recommend them enough!",
    name: 'Anita Negi',
    title: 'Founder, QuickCart',
    avatar: PlaceHolderImages.find(img => img.id === 'avatar-anita'),
  },
  {
    id: 'sagar-howlader',
    quote: "The entire process was incredibly smooth. The Garun team is professional, quick to respond, and genuinely understands the challenges startups face. Our platform is thriving because of their work.",
    name: 'Sagar Howlader',
    title: 'CEO, RideAlong',
    avatar: PlaceHolderImages.find(img => img.id === 'avatar-sagar'),
  },
  {
    id: 'nerdish-mic',
    quote: "I was initially skeptical about a pre-built solution, but Garun's platform is powerful and surprisingly flexible. The admin panel is intuitive, making it the perfect launchpad for our business.",
    name: 'Priya Sharma',
    title: 'Co-founder, FoodiesUnited',
    avatar: PlaceHolderImages.find(img => img.id === 'avatar-priya'),
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Trusted by Founders and Innovators
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover how our clients have successfully launched and scaled their businesses using our app platforms.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <blockquote className="text-lg text-foreground/90 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            {testimonial.avatar && <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
