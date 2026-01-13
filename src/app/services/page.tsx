import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Package, Truck, Award } from 'lucide-react';

const services = [
  {
    title: "Global Export & Documentation",
    description: "We have extensive experience in exporting rice to countries across the globe. Our dedicated team handles all aspects of the export process, including complex documentation, customs clearance, and compliance with international trade regulations, ensuring a hassle-free experience for our clients.",
    icon: <Globe className="w-8 h-8 text-primary" />,
    image: PlaceHolderImages.find(p => p.id === 'service-export')
  },
  {
    title: "Private Labeling & Packaging",
    description: "Strengthen your brand with our private labeling services. We offer custom packaging solutions tailored to your brand identity and market needs. From bag design to material selection, we work with you to create packaging that stands out on the shelf and appeals to your target customers.",
    icon: <Package className="w-8 h-8 text-primary" />,
    image: PlaceHolderImages.find(p => p.id === 'service-packaging')
  },
  {
    title: "End-to-End Logistics",
    description: "Our robust logistics network ensures reliable and timely delivery of your consignment. We manage the entire supply chain, from factory to port of destination. We partner with leading shipping lines to provide cost-effective and efficient transportation solutions, with real-time tracking and support.",
    icon: <Truck className="w-8 h-8 text-primary" />,
    image: PlaceHolderImages.find(p => p.id === 'service-logistics')
  },
  {
    title: "Quality Assurance & Certification",
    description: "Quality is not just a promise; it's a guarantee. We provide comprehensive quality assurance, with certifications from internationally recognized bodies like ISO, HACCP, and SGS. Each shipment is accompanied by a detailed quality report, giving you complete confidence in the product you receive.",
    icon: <Award className="w-8 h-8 text-primary" />,
    image: PlaceHolderImages.find(p => p.id === 'quality-lab')
  }
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to support your business and ensure a seamless procurement process.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="flex flex-col md:flex-row items-center overflow-hidden">
                <div className="w-full md:w-1/3 relative h-48 md:h-full">
                  {service.image && (
                    <Image
                      src={service.image.imageUrl}
                      alt={service.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={service.image.imageHint}
                    />
                  )}
                </div>
                <div className="w-full md:w-2/3">
                  <CardHeader className='flex-row gap-4 items-center'>
                    {service.icon}
                    <CardTitle className="font-headline text-xl leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
