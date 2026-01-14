'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const carouselSlides = [
  {
    id: 'carousel-grass-land',
    title: 'From Fertile Fields',
    description: 'Our journey begins in the lush grasslands of India, where the soil is prepared for cultivation.',
    imageUrl: 'https://images.unsplash.com/photo-1714984626568-140215a357e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxncmFzc2xhbmQlMjBmaWVsZHxlbnwwfHx8fDE3NjgyNDA4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'grassland field'
  },
  {
    id: 'carousel-paddy-field',
    title: 'Nurtured in Paddy Fields',
    description: 'Young rice saplings are carefully planted and nurtured in vast, irrigated paddy fields.',
    imageUrl: 'https://images.unsplash.com/photo-1599328580087-15c9dab481f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwYWRkeSUyMGZpZWxkfGVufDB8fHx8MTc2ODIzNTAyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'rice paddy'
  },
  {
    id: 'carousel-crops-grown',
    title: 'Growing to Maturity',
    description: 'Under the tropical sun, the rice crops grow tall and strong, promising a bountiful harvest.',
    imageUrl: 'https://images.unsplash.com/photo-1673985814584-d4f1189f7f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyaWNlJTIwY3JvcHN8ZW58MHx8fHwxNzY4MjQxMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'growing rice'
  },
  {
    id: 'carousel-crop-cultivated',
    title: 'The Golden Harvest',
    description: 'Skilled farmers harvest the mature, golden stalks of rice, a culmination of months of hard work.',
    imageUrl: 'https://images.unsplash.com/photo-1694152491268-8ef19538ebc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyaWNlJTIwaGFydmVzdHxlbnwwfHx8fDE3NjgyNDEyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'rice harvest'
  },
  {
    id: 'carousel-paddy',
    title: 'From Paddy to Grain',
    description: 'The harvested paddy is readied for the milling process, where the husk is carefully removed.',
    imageUrl: 'https://images.unsplash.com/photo-1609412058473-c199497c3c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxyaWNlJTIwcGFkZHl8ZW58MHx8fHwxNzY4MjE2MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'rice grains'
  },
  {
    id: 'carousel-rice',
    title: 'Pure Grains, Global Reach',
    description: 'Delivering the finest quality rice from the heart of India to the rest of the world.',
    imageUrl: 'https://images.unsplash.com/photo-1618513965492-badaf6cbdfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxyaWNlJTIwZ3JhaW5zfGVufDB8fHx8MTc2ODIyMTg0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    imageHint: 'rice bowl'
  },
];

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        
        setApi={setApi}
      >
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[80vh] md:h-screen w-full flex items-center justify-center text-center text-white">
                <Image
                  src={slide.imageUrl}
                  alt={slide.description}
                  fill
                  className="object-cover"
                  priority={carouselSlides.indexOf(slide) === 0}
                  data-ai-hint={slide.imageHint}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-4xl mx-auto px-4">
                  <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                  {slide.id === 'carousel-rice' && (
                      <div className="mt-8 flex justify-center gap-4">
                      <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                          <Link href="/varieties">Explore Our Rice</Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                          <Link href="/contact">Contact Us</Link>
                      </Button>
                      </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              current === i ? "p-1.5 bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
}
