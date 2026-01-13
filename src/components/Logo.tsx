'use client';

import Link from 'next/link';
import { Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type LogoProps = {
  isScrolled: boolean;
};

export default function Logo({ isScrolled }: LogoProps) {
    const pathname = usePathname();
    const isHomeAndNotScrolled = pathname === '/' && !isScrolled;

  return (
    <Link href="/" className="flex items-center space-x-2">
      <Sprout className={cn("h-8 w-8 transition-colors", isHomeAndNotScrolled ? "text-white" : "text-primary")} />
      <span
        className={cn(
          "font-headline font-bold text-xl transition-colors",
          isHomeAndNotScrolled ? "text-white" : "text-foreground"
        )}
      >
        Indirani Rice
      </span>
    </Link>
  );
}
