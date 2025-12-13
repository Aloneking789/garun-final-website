import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Smartphone, Globe, MessageCircle } from 'lucide-react';

const mobileFeatures = [
  'Customer Android & iOS App',
  'Vendor/Partner App (as needed)',
  'Powerful Master Admin Panel',
  'Customer-facing Website',
  'Free Technical Support',
  'Lifetime Code Ownership',
];

const webFeatures = [
  'Custom Web Application',
  'Responsive Design',
  'Admin Dashboard',
  'User Authentication',
  'Free Technical Support',
  'Lifetime Code Ownership',
];

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our All-Inclusive Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              One straightforward plan to launch your business online. No recurring fees. You own the code forever.
            </p>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mobile Apps Card */}
          <Card className="shadow-2xl border-2 border-primary transform transition-transform duration-300 hover:scale-105 bg-card">
            <CardHeader className="items-center text-center p-8">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Smartphone className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold font-headline">Mobile Apps</CardTitle>
              <CardDescription className="text-lg">Complete mobile solution for your business</CardDescription>
            </CardHeader>
            <CardContent className="px-8 space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold">Starts at </span>
                <span className="text-4xl font-bold text-primary">₹50000</span>
              </div>
              <ul className="space-y-3">
                {mobileFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8">
              <Button asChild size="lg" className="w-full">
                <Link href="https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Let%27s%20schedule%20a%20meet%20to%20discuss%20the%20project">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Free Consultancy
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Web Apps Card */}
          <Card className="shadow-2xl border-2 border-primary transform transition-transform duration-300 hover:scale-105 bg-card">
            <CardHeader className="items-center text-center p-8">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Globe className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold font-headline">Web Solutions</CardTitle>
              <CardDescription className="text-lg">Powerful web applications for your needs</CardDescription>
            </CardHeader>
            <CardContent className="px-8 space-y-4">
              <div className="text-center">
                <span className="text-4xl font-bold">Starts at </span>
                <span className="text-4xl font-bold text-primary">₹20000</span>
              </div>
              <ul className="space-y-3">
                {webFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8">
              <Button asChild size="lg" className="w-full">
                <Link href="https://wa.me/919369416686?text=Hi%20I%20would%20like%20to%20enquire%20about%20your%20services.%20Let%27s%20schedule%20a%20meet%20to%20discuss%20the%20project">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book Free Consultancy
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
