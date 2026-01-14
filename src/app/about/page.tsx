'use client';

import Image from 'next/image';
import { Check, Target, Eye } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const visionImage = PlaceHolderImages.find(p => p.id === 'about-us-vision');

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
      
    const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
        },
    },
    };

  return (
    <>
      <section className="bg-primary/10 py-4">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="font-headline text-3xl font-bold text-primary">About Indirani Enterprises</motion.h1>
        </div>
      </section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
        className="py-16 md:py-24"
        >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="font-headline text-3xl font-bold text-primary">Our Story</h2>
                <p className="mt-4 text-muted-foreground">
                    Founded on the fertile plains of Northern India, Indirani Enterprises began with a vision to connect global markets with the unparalleled quality of Indian products. Our journey started with a small group of passionate farmers dedicated to traditional and sustainable agricultural practices.
                </p>
                <p className="mt-4 text-muted-foreground">
                    Over the years, we have grown into a leading export house, but our core values remain unchanged. We honor our roots by fostering strong relationships with our farming communities and investing in their well-being. Today, Indirani is synonymous with integrity, quality, and a deep respect for the land that provides for us.
                </p>
            </div>
            <div className="order-1 lg:order-2">
                {visionImage && 
                    <Image
                    src={visionImage.imageUrl}
                    alt={visionImage.description}
                    width={500}
                    height={350}
                    className="rounded-lg shadow-xl object-cover mx-auto w-full h-auto"
                    data-ai-hint={visionImage.imageHint}
                    />
                }
            </div>
          </div>
        </div>
      </motion.section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainerVariants}
            >
            <motion.div variants={fadeIn} className="bg-secondary/20 p-6 md:p-8 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                To consistently provide our global clientele with the highest quality Indian rice, while upholding principles of fair trade, environmental sustainability, and corporate social responsibility. We aim to be a reliable and trusted partner in the global food supply chain.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-secondary/20 p-6 md:p-8 rounded-lg">
                <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                    <Eye className="w-6 h-6" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="mt-4 text-muted-foreground">
                To be recognized as the world's most trusted exporter of Indian rice, celebrated for our unwavering commitment to quality, innovation, and ethical business practices. We envision a future where the authentic taste of India enriches dining experiences everywhere.
                </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="font-headline text-3xl md:text-4xl font-bold text-primary">Why Choose Us?</motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-12 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainerVariants}
            >
            <motion.div variants={fadeIn} className="flex items-start space-x-4">
              <Check className="w-12 h-12 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Uncompromising Quality</h3>
                <p className="mt-1 text-muted-foreground">From paddy selection to final packaging, we implement stringent quality controls at every stage.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-start space-x-4">
              <Check className="w-12 h-12 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Sustainable Sourcing</h3>
                <p className="mt-1 text-muted-foreground">We partner with farmers who use eco-friendly methods, ensuring a better planet for future generations.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-start space-x-4">
              <Check className="w-12 h-12 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">Global Logistics Network</h3>
                <p className="mt-1 text-muted-foreground">Our experienced logistics team ensures timely and efficient delivery to any port in the world.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
