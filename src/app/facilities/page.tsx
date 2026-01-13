import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Infrastructure</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            State-of-the-art facilities that form the backbone of our promise of quality and efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16 md:space-y-20">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
