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
              Indirani Enterprises was founded with a simple mission: to share the authentic taste and superior quality of Indian products with the world. For generations, we have cultivated relationships with the best farms, ensuring every grain that leaves our facility is a testament to our commitment to excellence.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our state-of-the-art processing and packaging facilities ensure that the natural aroma, flavor, and nutritional value of our products are preserved from farm to table.
            </p>
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
