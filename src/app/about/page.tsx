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
        ease: "easeOut",
      },
    },
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
      {/* Header */}
      <section className="bg-primary/10 py-4">
        <div className="container mx-auto px-4">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="font-headline text-3xl font-bold text-primary"
          >
            About Indirani Enterprises
          </motion.h1>
        </div>
      </section>

      {/* Our Story */}
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
              <h2 className="font-headline text-3xl font-bold text-primary">
                Our Story
              </h2>
              <p className="mt-4 text-muted-foreground">
                <strong>Indirani Enterprises</strong> is a premium agricultural
                export company headquartered in
                <strong> Chennai, Tamil Nadu, India</strong>. Established with a
                global outlook, we are committed to delivering authentic Indian
                agricultural products that meet international quality and
                compliance standards.
              </p>
              <p className="mt-4 text-muted-foreground">
                We specialize in the export of carefully selected
                <strong> rice varieties, spices, pulses, seeds, and other
                agricultural products</strong>. Though our journey has just
                begun, our approach is defined by precision sourcing, refined
                quality control, and professional export execution.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              {visionImage && (
                <Image
                  src={visionImage.imageUrl}
                  alt={visionImage.description}
                  width={500}
                  height={350}
                  className="rounded-lg shadow-xl object-cover mx-auto w-full h-auto"
                  data-ai-hint={visionImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={listContainerVariants}
          >
            <motion.div
              variants={fadeIn}
              className="bg-secondary/20 p-6 md:p-8 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold">
                  Our Mission
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                To deliver premium-grade Indian agricultural products to global
                markets through uncompromising quality standards, ethical
                sourcing, and reliable export operations. We aim to create
                enduring partnerships built on trust, transparency, and
                excellence.
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="bg-secondary/20 p-6 md:p-8 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary text-primary-foreground p-3 rounded-full flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <h2 className="font-headline text-2xl md:text-3xl font-bold">
                  Our Vision
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                To establish Indirani Enterprises as a globally respected export
                brand, recognized for refined quality, consistent performance,
                and a deep commitment to representing the excellence of Indian
                agriculture worldwide.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
            className="font-headline text-3xl md:text-4xl font-bold text-primary"
          >
            Why Choose Us?
          </motion.h2>

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
                <h3 className="font-headline text-xl font-semibold">
                  Premium Quality Standards
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Each product undergoes careful selection and quality assurance
                  to meet global export expectations.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-start space-x-4">
              <Check className="w-12 h-12 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Professional Export Execution
                </h3>
                <p className="mt-1 text-muted-foreground">
                  From documentation to logistics, we manage every export detail
                  with precision and accountability.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-start space-x-4">
              <Check className="w-12 h-12 mt-1 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-headline text-xl font-semibold">
                  Long-Term Partnership Focus
                </h3>
                <p className="mt-1 text-muted-foreground">
                  We believe in building lasting relationships through
                  consistency, clarity, and dependable service.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
