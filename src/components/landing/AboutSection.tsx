'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'rice-field-1');

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
      id="about" 
      className="py-16 md:py-24 bg-background"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              A Legacy of Quality and Trust
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Indirani Enterprises was established with a focused mission—to deliver the authentic taste and superior quality of Indian agricultural products to global markets. As a growing export company, we collaborate with carefully selected suppliers to ensure every product reflects consistency, purity, and international standards. </p>
            <p className="mt-4 text-muted-foreground">
             Our modern processing and packaging practices are designed to preserve the natural aroma, flavor, and nutritional value of our products. From sourcing to final shipment, every stage is managed with precision, ensuring quality is maintained from origin to destination. </p>
            <Button asChild className="mt-6">
              <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="order-first lg:order-last relative min-h-[450px]">
             {aboutImage && (
                <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="rounded-lg shadow-xl object-cover w-full h-full"
                data-ai-hint={aboutImage.imageHint}
                />
             )}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
