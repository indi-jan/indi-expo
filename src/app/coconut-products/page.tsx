'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import HorizontalMarquee from '@/components/HorizontalMarquee';

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
        <HorizontalMarquee />
      </motion.section>
    </>
  );
}
