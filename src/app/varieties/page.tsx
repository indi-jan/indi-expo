import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const varieties = [
  {
    name: 'Basmati Rice',
    image: PlaceHolderImages.find(p => p.id === 'basmati-rice'),
    description: 'Known as the "Queen of Fragrance", our Basmati rice is distinguished by its long, slender grains, delightful aroma, and fluffy texture when cooked. Aged to perfection to enhance its flavor.',
    specs: ['Grain Length: 8.35mm+', 'Aged: 12-24 months', 'Aroma: Strong']
  },
  {
    name: 'Non Basmati Rice',
    image: PlaceHolderImages.find(p => p.id === 'non-basmati-rice'),
    description: 'A diverse category of rice that offers great value and variety. Perfect for everyday consumption and a wide range of dishes.',
    specs: ['Type: Long/Medium/Short-grain', 'Versatile', 'Affordable']
  },
  {
    name: 'Ponni Rice',
    image: PlaceHolderImages.find(p => p.id === 'ponni-rice'),
    description: 'A popular medium-grain rice from South India, known for its soft texture and suitability for a variety of traditional dishes.',
    specs: ['Type: Medium-grain', 'Texture: Soft', 'Origin: South India']
  },
  {
    name: 'Sona Masoori Rice',
    image: PlaceHolderImages.find(p => p.id === 'sona-masoori-rice'),
    description: 'A lightweight and aromatic medium-grain rice, Sona Masoori is a staple in many South Indian households. It is known for its delicate flavor and is easily digestible.',
    specs: ['Grain Length: 5.2mm', 'Type: Medium-grain', 'Texture: Lightweight']
  },
  {
    name: 'Round Grain Rice (Idly)',
    image: PlaceHolderImages.find(p => p.id === 'idly-rice'),
    description: 'Specifically cultivated for making soft and fluffy idlis and dosas. This short-grain rice provides the perfect texture for fermented batters.',
    specs: ['Type: Short-grain', 'Best for: Idli, Dosa', 'Texture: Soft']
  },
  {
    name: 'Kerala Matta (Red Rice)',
    image: PlaceHolderImages.find(p => p.id === 'matta-rice'),
    description: 'A healthy and nutritious indigenous variety of rice from Kerala, with a distinct reddish-brown color and earthy flavor. Rich in fiber and nutrients.',
    specs: ['Type: Red Rice', 'Flavor: Earthy', 'High in Nutrients']
  },
  {
    name: 'IR 64 Long Grain Rice',
    image: PlaceHolderImages.find(p => p.id === 'ir64-rice'),
    description: 'A widely consumed parboiled long-grain rice, known for its firm texture and non-sticky quality after cooking. Ideal for a variety of culinary applications.',
    specs: ['Type: Long-grain parboiled', 'Texture: Firm', 'Non-sticky']
  },
  {
    name: 'Organic Rice',
    image: PlaceHolderImages.find(p => p.id === 'organic-rice'),
    description: 'Grown without synthetic pesticides or fertilizers, our organic rice is certified to meet the highest international standards, providing a pure and natural choice.',
    specs: ['Cultivation: 100% Organic', 'Certified: Yes', 'Varieties: Multiple']
  }
];

export default function VarietiesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Rice Varieties</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse selection of India's finest grains, each with its own unique character and flavor profile.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {varieties.map((variety) => (
              <Card key={variety.name} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                {variety.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={variety.image.imageUrl}
                      alt={variety.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={variety.image.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{variety.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground flex-grow">{variety.description}</p>
                  <ul className="mt-4 space-y-1 text-sm">
                    {variety.specs.map(spec => (
                        <li key={spec} className="flex items-center">
                            <span className="text-primary font-bold mr-2">&#10004;</span>
                            <span className="text-muted-foreground">{spec}</span>
                        </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
