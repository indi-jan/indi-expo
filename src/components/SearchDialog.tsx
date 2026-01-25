'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, PackageX } from 'lucide-react';

import { varieties } from '@/lib/varieties';
import { spices } from '@/lib/spices';
import { pulses } from '@/lib/pulses';
import { seeds } from '@/lib/seeds';
import { otherProducts } from '@/lib/coconut-products';

type SearchResult = {
  name: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  href: string;
  category: string;
};

// Aggregate all products into a single searchable array
const allProducts: SearchResult[] = [
  ...varieties.map(p => ({
    name: p.name,
    description: p.description,
    imageUrl: p.image?.imageUrl,
    imageHint: p.image?.imageHint,
    href: `/varieties/${p.slug}`,
    category: 'Rice Variety',
  })),
  ...spices.map(p => ({
    name: p.name,
    description: p.description,
    imageUrl: p.image?.imageUrl,
    imageHint: p.image?.imageHint,
    href: '/spices',
    category: 'Spice',
  })),
  ...pulses.map(p => ({
    name: p.name,
    description: p.description,
    imageUrl: p.image?.imageUrl,
    imageHint: p.image?.imageHint,
    href: '/pulses',
    category: 'Pulse',
  })),
  ...seeds.map(p => ({
    name: p.name,
    description: p.description,
    imageUrl: p.image?.imageUrl,
    imageHint: p.image?.imageHint,
    href: '/seeds',
    category: 'Seed',
  })),
  ...otherProducts.map(p => ({
    name: p.name,
    description: `A fine product from Indirani Enterprises. Explore our range of quality goods.`,
    imageUrl: p.image?.imageUrl,
    imageHint: p.image?.imageHint,
    href: '/coconut-products',
    category: 'Other Product',
  })),
];

export function SearchDialog() {
  const [query, setQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<SearchResult[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    if (query.trim().length > 2) {
      const lowercasedQuery = query.toLowerCase();
      const results = allProducts.filter(product =>
        product.name.toLowerCase().includes(lowercasedQuery) || 
        product.category.toLowerCase().includes(lowercasedQuery)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [query]);
  
  const handleResultClick = () => {
    // This will be called when a result link is clicked.
    // We can use this to programmatically close the dialog if needed,
    // but DialogClose on the link should handle it.
  };

  return (
    <DialogContent className="sm:max-w-2xl p-0">
      <DialogHeader className="p-6 pb-4">
        <DialogTitle className="font-headline text-2xl">Search Our Products</DialogTitle>
        <DialogDescription>
          Find rice, spices, seeds, and more in our extensive catalog.
        </DialogDescription>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchResults.length > 0) {
              router.push(searchResults[0].href);
            }
          }}
          className="relative mt-2"
        >
          <Input
            type="search"
            name="q"
            placeholder="Search for Basmati rice, Cumin, etc..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 h-12 text-base"
            autoFocus
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </form>
      </DialogHeader>

      <ScrollArea className="max-h-[60vh]">
        <div className="p-6 pt-0">
          {query.trim().length > 2 && searchResults.length === 0 && (
            <div className="text-center py-8">
              <PackageX className="mx-auto h-16 w-16 text-muted-foreground" />
              <h3 className="mt-4 font-headline text-xl font-semibold">No products found for "{query}"</h3>
              <p className="mt-2 text-muted-foreground">
                We couldn't find what you're looking for. You can request a product, and we'll see if we can source it for you.
              </p>
              <DialogClose asChild>
                <Button asChild className="mt-6">
                  <Link href="/contact">Request a Product</Link>
                </Button>
              </DialogClose>
            </div>
          )}

          {searchResults.length > 0 && (
            <div>
              <h3 className="font-headline text-lg font-bold text-primary mb-4">
                {searchResults.length} result{searchResults.length > 1 ? 's' : ''}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {searchResults.map((product) => (
                  <DialogClose asChild key={product.name}>
                    <Link href={product.href} className="block group" onClick={handleResultClick}>
                      <div className="flex items-center gap-4 rounded-lg border p-3 transition-colors hover:bg-muted/50 h-full">
                        {product.imageUrl && (
                          <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={product.imageUrl}
                              alt={product.name}
                              fill
                              className="object-cover"
                              data-ai-hint={product.imageHint}
                            />
                          </div>
                        )}
                        <div className="flex-grow">
                          <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{product.category}</p>
                          <p className="font-semibold leading-tight">{product.name}</p>
                        </div>
                      </div>
                    </Link>
                  </DialogClose>
                ))}
              </div>
            </div>
          )}

          {query.trim().length <= 2 && (
            <div className="text-center text-muted-foreground pt-12">
              <Search className="mx-auto h-12 w-12 mb-4" />
              <p>Start typing to see product results.</p>
            </div>
          )}
        </div>
      </ScrollArea>
    </DialogContent>
  );
}
