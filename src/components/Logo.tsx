'use client';

import Link from 'next/link';
import { Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';


export default function Logo() {
  return (
    /*<Link href="/" className="flex items-center space-x-2">
      <Sprout className="h-8 w-8 text-primary" />
      <span
        className="font-headline font-bold text-xl text-foreground"
      >
        Indirani Enterprises
      </span>
    </Link>*/
      <Link href="/" className="flex items-center gap-3">
      
      {/* Logo image */}
      <div className="relative h-12 w-12 md:h-12 md:w-12">
        <Image
          src="/image/logo.png"
          alt="Indirani Enterprises Logo"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Brand text */}
      <span className="font-headline font-bold text-2xl text-foreground whitespace-nowrap">
        Indirani Enterprises
      </span>

    </Link>
  );
}