import HeroCarousel from '@/components/landing/HeroCarousel';
import AboutSection from '@/components/landing/AboutSection';
import VarietiesSection from '@/components/landing/VarietiesSection';
import ServicesSection from '@/components/landing/ServicesSection';
import CtaSection from '@/components/landing/CtaSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroCarousel />
        <AboutSection />
        <VarietiesSection />
        <ServicesSection />
        <CtaSection />
      </main>
    </div>
  );
}

    