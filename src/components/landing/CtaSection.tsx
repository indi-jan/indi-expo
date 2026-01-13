import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CtaSection() {
  const ctaImage = PlaceHolderImages.find(p => p.id === 'carousel-paddy-field');

  return (
    <section className="relative bg-secondary/20">
       {ctaImage && (
        <Image
          src={ctaImage.imageUrl}
          alt={ctaImage.description}
          fill
          className="object-cover"
          data-ai-hint={ctaImage.imageHint}
        />
       )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 py-16 md:py-24 text-center text-primary-foreground">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Partner With Us?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Contact us today for a quote or to learn more about our rice export services. We are here to meet your needs with reliability and excellence.
        </p>
        <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}
