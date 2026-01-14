'use client';
import { Award, Globe, Sprout } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "Global Export",
    description: "We ship our premium rice to all corners of the globe with reliable logistics.",
    icon: <Globe className="h-10 w-10 text-white" />,
    image: PlaceHolderImages.find(p => p.id === 'service-export')
  },
  {
    id: 2,
    title: "Quality Assurance",
    description: "Every grain undergoes rigorous quality checks to ensure it meets international standards.",
    icon: <Award className="h-10 w-10 text-white" />,
    image: PlaceHolderImages.find(p => p.id === 'quality-lab')
  },
  {
    id: 3,
    title: "Sustainable Farming",
    description: "Partnering with farmers who use sustainable practices to grow the finest rice.",
    icon: <Sprout className="h-10 w-10 text-white" />,
    image: PlaceHolderImages.find(p => p.id === 'rice-field-2')
  }
];

export default function ServicesSection() {

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
            staggerChildren: 0.2,
        },
    },
  };

  return (
    <motion.section 
      id="services" 
      className="py-16 md:py-24 bg-secondary/20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div variants={fadeIn} className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Commitment to You</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer end-to-end services to ensure a seamless experience for our clients.
            </p>
        </motion.div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="relative w-72 h-72 rounded-full overflow-hidden shadow-lg group"
              variants={fadeIn}
            >
              {service.image && (
                <Image
                  src={service.image.imageUrl}
                  alt={service.image.description}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  data-ai-hint={service.image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-white">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-headline text-2xl font-bold">{service.title}</h3>
                <p className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
