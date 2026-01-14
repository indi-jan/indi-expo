'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const facilities = [
  {
    title: 'Modern Milling Plant',
    description: 'Our facility is equipped with the latest generation of milling technology from world-renowned suppliers. This includes advanced sorting, polishing, and grading machines that ensure uniform grain size and a flawless finish. The automated process minimizes human contact, ensuring the highest standards of hygiene.',
    image: PlaceHolderImages.find(p => p.id === 'milling-facility'),
  },
  {
    title: 'Automated Packaging Unit',
    description: 'We offer a wide range of packaging solutions, from small consumer packs to large bulk bags. Our automated packaging unit is designed for speed and precision, ensuring airtight seals that preserve the freshness and aroma of the rice. We provide custom branding and packaging options to meet client specifications.',
    image: PlaceHolderImages.find(p => p.id === 'packaging-facility'),
  },
  {
    title: 'Climate-Controlled Warehousing',
    description: 'Proper storage is crucial for maintaining the quality of rice. Our extensive warehouses are climate-controlled to maintain optimal temperature and humidity levels. This prevents spoilage and pest infestation, ensuring that our rice remains in perfect condition until it is shipped.',
    image: PlaceHolderImages.find(p => p.id === 'storage-warehouse'),
  },
  {
    title: 'In-House Quality Laboratory',
    description: 'Quality is at the core of our operations. Our in-house laboratory is staffed by experienced technicians who conduct rigorous tests at every stage of the process. We test for moisture content, grain length, purity, and other key parameters to ensure every shipment meets international quality standards.',
    image: PlaceHolderImages.find(p => p.id === 'quality-lab'),
  },
];

export default function FacilitiesPage() {
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
                staggerChildren: 0.3
            }
        }
    }

  return (
    <>
      <section className="bg-primary/10 py-4">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="font-headline text-3xl font-bold text-primary">Our Infrastructure</motion.h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
            className="space-y-16 md:space-y-20"
            >
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                variants={fadeIn}
                className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                <div className={index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}>
                  <h2 className="font-headline text-3xl font-bold text-primary">{facility.title}</h2>
                  <p className="mt-4 text-muted-foreground">{facility.description}</p>
                </div>
                <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-2'}>
                  {facility.image && (
                    <Image
                      src={facility.image.imageUrl}
                      alt={facility.image.description}
                      width={500}
                      height={350}
                      className="rounded-lg shadow-xl object-cover mx-auto w-full h-auto"
                      data-ai-hint={facility.image.imageHint}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
