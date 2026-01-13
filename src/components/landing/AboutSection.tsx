import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'rice-field-1');

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              A Legacy of Quality and Trust
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Indirani Rice Exports was founded with a simple mission: to share the authentic taste and superior quality of Indian rice with the world. For generations, we have cultivated relationships with the best farms, ensuring every grain that leaves our facility is a testament to our commitment to excellence.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our state-of-the-art processing and packaging facilities ensure that the natural aroma, flavor, and nutritional value of our rice are preserved from farm to table.
            </p>
            <Button asChild className="mt-6">
              <Link href="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="order-first lg:order-last">
             {aboutImage && (
                <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover w-full h-auto"
                data-ai-hint={aboutImage.imageHint}
                />
             )}
          </div>
        </div>
      </div>
    </section>
  );
}
