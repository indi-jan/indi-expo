'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// A smaller component for the image cards to keep code clean
const ImageCard = ({ image }: { image: ImagePlaceholder | undefined }) => {
    if (!image) return null;
    return (
        <div className="w-full h-full rounded-2xl shadow-xl overflow-hidden group">
            <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint={image.imageHint}
            />
        </div>
    );
};

// Mobile/Tab Carousel Component
const MobileImageCarousel = () => {
    const carouselImages = [
        PlaceHolderImages.find(p => p.id === 'herorice-1'),
        PlaceHolderImages.find(p => p.id === 'herospice-1'),
        PlaceHolderImages.find(p => p.id === 'herococonut-1'),
        PlaceHolderImages.find(p => p.id === 'heroseed-1'),
    ].filter(Boolean); // Remove undefined values

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(timer);
    }, [carouselImages.length]);

    return (
        <div className="lg:hidden absolute bottom-8 left-0 right-0 flex justify-center items-end h-64 md:h-80">
            <div className="relative w-64 h-36 md:w-80 md:h-45"> 
                {carouselImages.map((image, index) => (
                    <motion.div
                        key={image?.id}
                        className="absolute w-full h-full"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                            opacity: index === currentIndex ? 1 : 0,
                            x: index === currentIndex ? 0 : index < currentIndex ? -100 : 100,
                            scale: index === currentIndex ? 1 : 0.8
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <ImageCard image={image} />
                    </motion.div>
                ))}
                
                {/* Carousel indicators */}
                {/* <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentIndex ? 'w-6 bg-yellow-500' : 'bg-white/50'
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

// The main component for the rotating images (Desktop only)
const RotatingHeroImages = () => {
    // Images for each quadrant of the circle
    const rotatingImages = [
        PlaceHolderImages.find(p => p.id === 'hero-spice'),
        PlaceHolderImages.find(p => p.id === 'hero-rice'),
        PlaceHolderImages.find(p => p.id === 'hero-pulse'),
        PlaceHolderImages.find(p => p.id === 'hero-coconut'),
    ];

    // This component places a card in a quadrant of the circle
    const Quadrant = ({ image, quadrant }: { image: ImagePlaceholder | undefined, quadrant: 'tr' | 'br' | 'bl' | 'tl' }) => {
        const positionClasses = {
            tr: 'top-0 right-0',
            br: 'bottom-0 right-0',
            bl: 'bottom-0 left-0',
            tl: 'top-0 left-0',
        };

        return (
            <div className={`absolute w-1/2 h-1/2 ${positionClasses[quadrant]}`}>
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="w-40 h-56 md:w-48 md:h-64 p-2">
                        <div className="w-full h-full">
                            <ImageCard image={image} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="absolute -right-1/2 top-0 h-full w-full hidden lg:flex items-center justify-start">
            <motion.div
                className="relative w-[max(80vh,44rem)] h-[max(80vh,44rem)] rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: 'linear',
                }}
            >
                <Quadrant image={rotatingImages[0]} quadrant="tr" />
                <Quadrant image={rotatingImages[1]} quadrant="br" />
                <Quadrant image={rotatingImages[2]} quadrant="bl" />
                <Quadrant image={rotatingImages[3]} quadrant="tl" />
            </motion.div>
        </div>
    );
};

export default function HeroSection() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const bgImage = PlaceHolderImages.find(p => p.id === 'hero-bg');

    return (
        <section className="relative h-[80vh] md:h-[calc(100vh-64px)] w-full flex items-start overflow-hidden">
            {bgImage && (
                <Image
                    src={bgImage.imageUrl}
                    alt={bgImage.description}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={bgImage.imageHint}
                />
            )}
            
                 <div className="container mx-auto px-4 z-10 pt-28 md:pt-32 lg:pt-36">
                    <div className="grid lg:grid-cols-2 gap-8">

                    <motion.div
                        className="max-w-xl" // Added mt-8 for mobile/tab to move text up
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-accent">
                            Leading Exporter of Indian Rice & Spices
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white/90">
                            Delivering the finest quality Basmati, Non-Basmati, and aromatic spices from the heart of India to the world.
                        </p>
                        {/* Commented out buttons as in original */}
                    </motion.div>
                </div>
            </div>
            
            {/* Mobile/Tab Carousel */}
            <MobileImageCarousel />
            
            {/* Desktop Rotating Images */}
            <RotatingHeroImages />
        </section>
    );
}
