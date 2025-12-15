import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Service = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: ImagePlaceholder | undefined;
};

const services: Service[] = [
  {
    id: 'quick-commerce',
    title: 'Instant Commerce Platform',
    subtitle: 'Inspired by Blinkit & Zepto',
    description: 'Launch a rapid delivery service for your customers. Our platform provides the tools for quick order processing and delivery.',
    features: ['Customer Android & iOS App', 'Vendor Android & iOS App', 'Central Admin Dashboard', 'Customer-facing Website'],
    image: PlaceHolderImages.find(img => img.id === 'quick-commerce'),
  },
  {
    id: 'ecommerce',
    title: 'Multi-Vendor Marketplace',
    subtitle: 'Similar to Amazon & Flipkart',
    description: 'Create a thriving online marketplace for multiple vendors to sell their products. Manage everything from a single dashboard.',
    features: ['Customer Android & iOS App', 'Seller Management App', 'Comprehensive Admin Panel', 'E-commerce Website'],
    image: PlaceHolderImages.find(img => img.id === 'ecommerce'),
  },
  // {
  //   id: 'grocery',
  //   title: 'Online Grocery Delivery Solution',
  //   subtitle: 'Think BigBasket & Grofers',
  //   description: 'Establish your own online grocery store with inventory management, order tracking, and delivery logistics.',
  //   features: ['Customer Ordering App (iOS/Android)', 'Store Management App', 'Main Admin Control Panel', 'Online Storefront'],
  //   image: PlaceHolderImages.find(img => img.id === 'grocery'),
  // },
  {
    id: 'food-delivery',
    title: 'Food Delivery Marketplace',
    subtitle: 'Modeled after Swiggy & Zomato',
    description: 'Build your own food delivery empire, connecting restaurants with hungry customers through a seamless mobile experience.',
    features: ['Customer App for iOS & Android', 'Restaurant Partner App', 'Fleet Management Admin Panel', 'Web Ordering Portal'],
    image: PlaceHolderImages.find(img => img.id === 'food-delivery'),
  },
  {
    id: 'cab-service',
    title: 'Ride-Hailing Service App',
    subtitle: 'Like Uber & Ola',
    description: 'Deploy a complete ride-sharing solution with real-time tracking, driver management, and automated payments.',
    features: ['Rider App for iOS & Android', 'Driver Partner App', 'Operations Control Panel', 'Web Booking Interface'],
    image: PlaceHolderImages.find(img => img.id === 'cab-service'),
  },
  {
    id: 'home-services',
    title: 'On-Demand Home Services Platform',
    subtitle: 'Inspired by Urban Company',
    description: 'Connect skilled professionals with users seeking home services like cleaning, repairs, and beauty treatments.',
    features: ['Customer Booking App (iOS/Android)', 'Service Provider App', 'Central Services Dashboard', 'Web Booking Portal'],
    image: PlaceHolderImages.find(img => img.id === 'home-service'),
  },
];

export default function ServicesSection() {
  const getServiceImage = (serviceId: string) => {
    const imageMap: { [key: string]: string } = {
      'quick-commerce': 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main/public/zepto.png',
      'ecommerce': 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main/public/ecooom.png',
      'food-delivery': 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main/public/swiggy.png',
      'cab-service': 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main/public/uber.png',
      'home-services': 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main/public/urban-company.png',
    };
    return imageMap[serviceId] || 'https://cdn.jsdelivr.net/gh/Aloneking789/garun-final-website@main/public/zepto.png';
  };

  return (
    <section id="services" className="bg-card">
      <div className="container mx-auto px-4 space-y-24">
        {services.map((service, index) => (
          <div key={service.id} className="grid md:grid-cols-2 gap-12 items-center">
            <div className={cn('space-y-6', index % 2 !== 0 && 'md:order-last')}>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl font-headline">{service.title}</h3>
                <p className="text-lg text-muted-foreground">{service.subtitle}</p>
              </div>
              <p className="text-foreground/80">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="hover-button-glow relative">
                <Link href="https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Let%27s%20schedule%20a%20meet%20to%20discuss%20the%20project">
                  <MessageCircle className="mr-2 h-5 w-5 icon-hover" />
                  Book Free Consultation
                </Link>
              </Button>
            </div>
            <div className="flex justify-center hover-lift">
              <Image
                src={getServiceImage(service.id)}
                alt={service.title}
                width={500}
                height={600}
                quality={80}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
