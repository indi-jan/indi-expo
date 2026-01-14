"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/varieties', label: 'Rice Varieties' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary font-bold" : "text-foreground/80"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled || pathname !== '/'
          ? "bg-background/95 border-b border-border/50 shadow-sm backdrop-blur-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo isScrolled={isScrolled} />
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={cn("h-6 w-6", (isScrolled || pathname !== '/') ? 'text-primary' : 'text-white')} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                </SheetHeader>
                <div className="p-4">
                  <div className="mb-8">
                    <Logo isScrolled={true} />
                  </div>
                  <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                         <Link
                          href={link.href}
                          className={cn(
                            "text-lg font-medium transition-colors hover:text-primary",
                            pathname === link.href ? "text-primary" : "text-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                       </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
