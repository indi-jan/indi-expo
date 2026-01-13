import Link from 'next/link';
import { Sprout, Facebook, Twitter, Instagram } from 'lucide-react';
import Logo from '@/components/Logo';

const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/varieties', label: 'Rice Varieties' },
    { href: '/facilities', label: 'Facilities' },
    { href: '/contact', label: 'Contact' },
  ];

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo isScrolled={true} />
            <p className="mt-4 text-sm text-muted-foreground">
              Exporting the finest Indian rice to the world with a commitment to quality and sustainability.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
          <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Email: info@indirani.com</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Address: 123 Rice Mill Rd, Karnal, Haryana, India</li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
            <div className="flex mt-4 space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Indirani Rice Exports. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
