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
    <Link href="/" className="flex items-center space-x-3">
      <Image
        src="/image/logo.png"
        alt="Indirani Enterprises Logo"
        width={60}
        height={20}
        className="object-contain"
      /><span
        className="font-headline font-bold text-xl text-foreground"
      >
        Indirani Enterprises
      </span>
    </Link>
  );
}
