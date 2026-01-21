'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { seeds } from '@/lib/seeds';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SeedsPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'seeds-hero');

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

  const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
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
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white text-center">
            Oil Seeds
          </h1>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <motion.p variants={fadeIn} className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Our premium selection of oil seeds adds flavor, texture, and nutritional value to your dishes. Sourced for their quality and freshness, they are an essential part of Indian and global cuisines.
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seeds.map((product) => (
              <motion.div key={product.slug} variants={fadeIn}>
                <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full">
                  {product.image && (
                    <div className="relative h-56 w-full">
                      <Image
                        src={product.image.imageUrl}
                        alt={product.image.description}
                        fill
                        className="object-cover"
                        data-ai-hint={product.image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="text-muted-foreground text-sm mb-4 flex-grow">{product.description}</p>
                    <div>
                        <h4 className="font-semibold text-sm text-primary">Key Benefits:</h4>
                        <p className="text-muted-foreground text-sm">{product.benefits}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
