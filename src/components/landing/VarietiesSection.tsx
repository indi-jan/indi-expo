'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { varieties } from '@/lib/varieties';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from 'framer-motion';


export default function VarietiesSection() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'hero-rice-paddy');
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        } 
    }
  };

  return (
    <motion.section 
      id="varieties" 
      className="relative py-16 md:py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <Sprout className="mx-auto h-12 w-12 text-primary" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4 text-primary">Our Featured Varieties</h2>
        <p className="mt-2 text-lg text-primary/90 max-w-2xl mx-auto">
          From aromatic Basmati to wholesome Brown Rice, explore our curated selection of premium grains.
        </p>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {varieties.map((variety) => (
              <CarouselItem key={variety.slug} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                 <div className="p-1">
                    <Link href={`/varieties/${variety.slug}`} className="block">
                      <Card className="text-left overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background h-full">
                        {variety.image && (
                          <div className="aspect-w-16 aspect-h-9">
                            <Image
                              src={variety.image.imageUrl}
                              alt={variety.image.description}
                              width={400}
                              height={225}
                              className="object-cover w-full h-full"
                              data-ai-hint={variety.image.imageHint}
                            />
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="font-headline text-xl">{variety.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground line-clamp-2 text-sm">{variety.description}</p>
                        </CardContent>
                      </Card>
                    </Link>
                 </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </motion.section>
  );
}
