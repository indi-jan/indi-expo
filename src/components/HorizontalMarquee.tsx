'use client';

import Image from 'next/image';
import { otherProducts } from '@/lib/coconut-products';

export default function HorizontalMarquee() {
  // We duplicate the content to create a seamless loop
  const duplicatedProducts = [...otherProducts, ...otherProducts];

  return (
    <div className="relative w-full overflow-hidden">
      <div className="marquee flex w-max gap-8 hover:[animation-play-state:paused]">
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.slug}-${index}`}
            className="group w-64 flex-shrink-0"
          >
            <div className="overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {product.image && (
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={product.image.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={product.image.imageHint}
                  />
                </div>
              )}
              <div className="p-4 text-center">
                <h3 className="font-headline text-lg font-semibold text-card-foreground">
                  {product.name}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
