import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { CursorEffect } from "@/components/cursor-effect";

export const metadata: Metadata = {
  title: 'Garun Technologies | Build Your First Mobile App With Us',
  description: 'A sleek, modern portfolio website to showcase apps, featuring a prominent hero section for introduction, interactive project cards displaying app details, smooth navigation, and a dedicated contact section.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CursorEffect />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
