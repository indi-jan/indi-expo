
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { spices } from '@/lib/spices';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SpicesPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'spices-hero');

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
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
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
            Spices
          </h1>
        </div>
      </motion.section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Explore the aromatic world of Indian spices with our handpicked collection. Each spice is carefully selected to bring authentic flavors and fragrances to your kitchen.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {spices.map((product) => (
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
                        <h4 className="font-semibold text-sm text-primary">Common Uses:</h4>
                        <p className="text-muted-foreground text-sm">{product.usage}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
