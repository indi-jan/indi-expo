"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { cn } from '@/lib/utils';
import Logo from '@/components/Logo';
import { varieties } from '@/lib/varieties';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/varieties', label: 'Rice Varieties' },
  { href: '/spices', label: 'Spices' },
  { href: '/seeds', label: 'Seeds' },
  { href: '/pulses', label: 'Pulses' },
  { href: '/coconut-products', label: 'Coconut Products' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => {
                if (link.href === '/varieties') {
                  return (
                    <NavigationMenuItem key={link.href}>
                      <NavigationMenuTrigger
                        className={cn(
                          'text-sm font-medium bg-transparent',
                          pathname.startsWith('/varieties') ? 'text-accent font-bold' : 'text-foreground/80'
                        )}
                      >
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                          {varieties.map((variety) => (
                            <ListItem
                              key={variety.slug}
                              title={variety.name}
                              href={`/varieties/${variety.slug}`}
                            >
                              {variety.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }
                return (
                  <NavigationMenuItem key={link.href}>
                     <NavigationMenuLink asChild>
                        <Link href={link.href} className={cn("text-sm font-medium transition-colors hover:text-primary p-3", pathname === link.href ? "text-accent font-bold" : "text-foreground/80")}>
                          {link.label}
                        </Link>
                      </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetHeader className='p-4 border-b'>
                  <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                  <Logo />
              </SheetHeader>
              <div className="p-4">
                <nav className="flex flex-col space-y-1">
                  {navLinks.map((link) => {
                    if (link.href === '/varieties') {
                      return (
                         <Accordion type="single" collapsible key={link.href}>
                           <AccordionItem value="varieties" className="border-b-0">
                             <AccordionTrigger className={cn("py-3 text-lg font-medium hover:no-underline [&[data-state=open]>svg]:rotate-180", pathname.startsWith('/varieties') ? 'text-accent' : 'text-foreground')}>
                               {link.label}
                             </AccordionTrigger>
                             <AccordionContent>
                               <div className="flex flex-col space-y-2 pl-4">
                                 {varieties.map(v => (
                                   <SheetClose asChild key={v.slug}>
                                     <Link href={`/varieties/${v.slug}`} className={cn("text-base text-muted-foreground hover:text-primary", pathname === `/varieties/${v.slug}` ? 'text-accent font-semibold' : '')}>{v.name}</Link>
                                   </SheetClose>
                                 ))}
                               </div>
                             </AccordionContent>
                           </AccordionItem>
                         </Accordion>
                      )
                    }
                    return (
                     <SheetClose asChild key={link.href}>
                       <Link
                        href={link.href}
                        className={cn(
                          "py-3 text-lg font-medium transition-colors hover:text-primary",
                          pathname === link.href ? "text-accent" : "text-foreground"
                        )}
                      >
                        {link.label}
                      </Link>
                     </SheetClose>
                  )})}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
