import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import ContactForm from '@/components/ContactForm';
import Map from '@/components/Map';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const headerImage = PlaceHolderImages.find(p => p.id === 'contact-header');

  return (
    <>
      <section className="bg-primary/10 py-4">
        <div className="container mx-auto px-4">
          <h1 className="font-headline text-3xl font-bold text-primary">Get In Touch</h1>
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
                        <a href="mailto:Indranient13@gmail.com" className="text-primary hover:underline">Indranient13@gmail.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-4 rounded-full">
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">Speak with a representative.</p>
                        <div className="flex flex-col gap-1">
                        <a href="tel:9677024296" className="text-primary hover:underline">9677024296</a>
                        <a href="tel:9380388701" className="text-primary hover:underline">9380388701</a>
                    </div></div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-secondary/50 p-4 rounded-full">
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-semibold">Our Location</h3>
                        <p className="text-muted-foreground">No,3.Varalakshmi Castle.<br/>G3,Ground floor, Akbarabad st, 2 ND street,<br/>Kodambakkam,Chennai. 600024</p>
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
