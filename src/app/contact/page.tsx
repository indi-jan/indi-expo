import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'contact-header');

  return (
    <>
      <section className="relative py-20 md:py-32 bg-secondary/20">
        {headerImage && (
             <Image
             src={headerImage.imageUrl}
             alt={headerImage.description}
             fill
             className="object-cover"
             data-ai-hint={headerImage.imageHint}
           />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We're here to help. Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-background p-8 rounded-lg shadow-lg">
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                <ContactForm />
            </div>
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-4 rounded-full">
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Email Us</h3>
                        <p className="text-muted-foreground">Send your inquiries to our team.</p>
                        <a href="mailto:info@indirani.com" className="text-primary hover:underline">info@indirani.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-4 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">Speak with a representative.</p>
                        <a href="tel:+911234567890" className="text-primary hover:underline">+91 123 456 7890</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-4 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Our Location</h3>
                        <p className="text-muted-foreground">123 Rice Mill Road<br/>Karnal, Haryana, 132001<br/>India</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <Map />
      </section>
    </>
  );
}
