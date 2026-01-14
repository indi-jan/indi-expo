'use client';

import Image from 'next/image';
import { varieties } from '@/lib/varieties';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { use } from 'react';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default function VarietyPage({ params }: PageProps) {
  // In newer Next.js versions with client components, params can be a promise.
  // While direct access is currently supported for migration, this ensures future compatibility.
  const { slug } = use(params);
  const variety = varieties.find((v) => v.slug === slug);

  if (!variety) {
    notFound();
  }

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
      <section className="bg-primary/10 py-4">
        <div className="container mx-auto px-4">
            <motion.h1 
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="font-headline text-3xl font-bold text-primary">{variety.name}</motion.h1>
        </div>
      </section>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
            {/* Top Section */}
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
              {variety.image && (
                <div className="w-full">
                  <Image
                    src={variety.image.imageUrl}
                    alt={variety.image.description}
                    width={600}
                    height={450}
                    className="rounded-lg shadow-md object-cover w-full h-auto aspect-[4/3]"
                    data-ai-hint={variety.image.imageHint}
                  />
                </div>
              )}
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary mb-4">{variety.name}</h2>
                <p className="text-base text-muted-foreground">{variety.description}</p>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {variety.image2 && (
                <div className="w-full">
                  <Image
                    src={variety.image2.imageUrl}
                    alt={variety.image2.description}
                    width={600}
                    height={450}
                    className="rounded-lg shadow-md object-cover w-full h-auto aspect-[4/3]"
                    data-ai-hint={variety.image2.imageHint}
                  />
                </div>
              )}
              <div className="space-y-8">
                {variety.specs && variety.specs.length > 0 && (
                    <div>
                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">Specifications</h3>
                        <div className="overflow-hidden rounded-lg border">
                            <table className="w-full text-sm">
                                <tbody>
                                {variety.specs.map((spec, index) => (
                                    <tr key={spec.key} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                                    <th className="px-4 py-3 text-left font-semibold w-1/3">{spec.key}</th>
                                    <td className="px-4 py-3 text-muted-foreground">{spec.value}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                
                {variety.specs.length > 0 && variety.terms.length > 0 && <Separator />}

                {variety.terms && variety.terms.length > 0 && (
                    <div>
                        <h3 className="font-headline text-2xl font-bold text-primary mb-4">Terms</h3>
                        <div className="overflow-hidden rounded-lg border">
                            <table className="w-full text-sm">
                                <tbody>
                                {variety.terms.map((term, index) => (
                                    <tr key={term.key} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                                    <th className="px-4 py-3 text-left font-semibold w-1/3">{term.key}</th>
                                    <td className="px-4 py-3 text-muted-foreground">{term.value}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
              </div>
            </motion.div>
        </div>
      </motion.div>

      <section className="py-16 md:py-24 bg-secondary/20">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="container mx-auto px-4"
            >
          <motion.h2 variants={fadeIn} className="text-center font-headline text-3xl font-bold text-primary mb-8">Other Varieties</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {varieties.filter(v => v.slug !== slug).slice(0, 3).map((otherVariety) => (
               <motion.div key={otherVariety.slug} variants={fadeIn}>
                <Link href={`/varieties/${otherVariety.slug}`} className="block h-full">
                    <Card className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl h-full">
                    {otherVariety.image && (
                        <div className="relative h-48 w-full">
                        <Image
                            src={otherVariety.image.imageUrl}
                            alt={otherVariety.image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={otherVariety.image.imageHint}
                        />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{otherVariety.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground text-sm line-clamp-3">{otherVariety.description}</p>
                    </CardContent>
                    </Card>
                </Link>
               </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
