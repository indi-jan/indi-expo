import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const metadata: Metadata = {
  title: 'Basmati & Non-Basmati Rice Exporter in India | Spice Exporter | Indirani Enterprises',
  description:
    'Indirani Enterprises is a leading rice exporter from Chennai, India, offering bulk supply of Basmati and Non-Basmati rice. As a top spice exporter in Tamil Nadu, we provide wholesale rice and spices for global export. Partner with a trusted Indian rice exporter for quality and reliability.',
  keywords: [
    'basmati rice exporter in india',
    'non basmati rice exporter in tamil nadu',
    'rice exporter from chennai',
    'indian rice exporter for bulk supply',
    'wholesale rice exporter in india',
    'spice exporter in india',
    'spices exporter in india',
    'rice and spice exporter in india',
    'indirani enterprises',
    'exporter in india',
  ],
  icons: {
    icon: {
      url: '/favicon.ico',
      sizes: 'any',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
