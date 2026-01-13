import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sprout } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const varieties = [
  {
    name: 'Premium Basmati',
    description: 'Long-grain aromatic rice, perfect for biryanis and special occasions.',
    image: PlaceHolderImages.find(p => p.id === 'basmati-rice')
  },
  {
    name: 'Sona Masoori',
    description: 'A versatile, lightweight and aromatic medium-grain rice.',
    image: PlaceHolderImages.find(p => p.id === 'sona-masoori-rice')
  },
  {
    name: 'Brown Rice',
    description: 'Nutrient-rich whole grain rice with a nutty flavor and chewy texture.',
    image: PlaceHolderImages.find(p => p.id === 'brown-rice')
  },
];

export default function VarietiesSection() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'hero-rice-paddy');

  return (
    <section id="varieties" className="relative py-16 md:py-24">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-4 text-center relative">
        <Sprout className="mx-auto h-12 w-12 text-white" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4 text-white">Our Featured Varieties</h2>
        <p className="mt-2 text-lg text-white/90 max-w-2xl mx-auto">
          From aromatic Basmati to wholesome Brown Rice, explore our curated selection of premium grains.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {varieties.map((variety) => (
            <Card key={variety.name} className="text-left overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl bg-background/90 backdrop-blur-sm">
              {variety.image && (
                <div className="aspect-w-16 aspect-h-9">
                  <Image
                    src={variety.image.imageUrl}
                    alt={variety.image.description}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                    data-ai-hint={variety.image.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{variety.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{variety.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild size="lg" className="mt-12 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/varieties">View All Varieties</Link>
        </Button>
      </div>
    </section>
  );
}
