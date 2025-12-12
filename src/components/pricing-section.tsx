import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Package, MessageCircle } from 'lucide-react';

const features = [
  'Customer Android & iOS App',
  'Vendor/Partner App (as needed)',
  'Powerful Master Admin Panel',
  'Customer-facing Website',
  '6 Months of Free Technical Support',
  'Lifetime Code Ownership',
];

export default function PricingSection() {
  return (
    <section id="pricing">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Our All-Inclusive Startup Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              One straightforward plan to launch your business online. No recurring fees. You own the code forever.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-md shadow-2xl border-2 border-primary transform transition-transform duration-300 hover:scale-105 bg-card">
            <CardHeader className="items-center text-center p-8">
              <div className="bg-primary/20 p-4 rounded-full mb-4">
                <Package className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold font-headline">Startup Plan</CardTitle>
              <CardDescription className="text-lg">Everything you need to get started.</CardDescription>
            </CardHeader>
            <CardContent className="px-8 space-y-4">
               <div className="text-center">
                  <span className="text-5xl font-bold">₹50,000</span>
                  <span className="text-muted-foreground">/one-time</span>
                </div>
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-8">
              <Button asChild size="lg" className="w-full">
                <Link href="#">
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
