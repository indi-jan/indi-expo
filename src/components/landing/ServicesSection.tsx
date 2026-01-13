import { Award, Globe, Sprout } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Global Export",
    description: "We ship our premium rice to all corners of the globe with reliable logistics.",
    icon: <Globe className="w-10 h-10 text-primary" />
  },
  {
    title: "Quality Assurance",
    description: "Every grain undergoes rigorous quality checks to ensure it meets international standards.",
    icon: <Award className="w-10 h-10 text-primary" />
  },
  {
    title: "Sustainable Farming",
    description: "Partnering with farmers who use sustainable practices to grow the finest rice.",
    icon: <Sprout className="w-10 h-10 text-primary" />
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Commitment to You</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer end-to-end services to ensure a seamless experience for our clients.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
                <Card key={service.title} className="text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
                    <CardHeader>
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                           {service.icon}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                        <p className="mt-2 text-muted-foreground">{service.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
