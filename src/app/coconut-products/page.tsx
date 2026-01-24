'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import HorizontalMarquee from '@/components/HorizontalMarquee';
import { otherProducts } from '@/lib/coconut-products';

export default function OtherProductsPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'coconut-hero');

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };
  
  const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
  };

  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative h-64 md:h-80 w-full"
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white text-center">
            Our Other Products
          </h1>
        </div>
      </motion.section>

      <motion.section
        className="py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        {/* Desktop: Marquee */}
        <div className="hidden md:block">
            <HorizontalMarquee />
        </div>

        {/* Mobile: Grid */}
        <div className="container mx-auto px-4 md:hidden">
            <motion.div 
                className="grid grid-cols-2 gap-6"
                variants={containerVariants}
            >
            {otherProducts.map((product) => (
                <motion.div 
                    key={product.slug} 
                    variants={fadeIn}
                >
                    <div className="group h-full flex flex-col overflow-hidden rounded-xl bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      {product.image && (
                        <div className="relative aspect-[4/5] w-full overflow-hidden">
                          <Image
                            src={product.image.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint={product.image.imageHint}
                          />
                        </div>
                      )}
                      <div className="p-3 text-center flex-grow flex items-center justify-center">
                        <h3 className="font-headline text-base font-semibold text-card-foreground">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                </motion.div>
            ))}
          </motion.div>
        </div>

      </motion.section>
    </>
  );
}
