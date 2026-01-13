import { generateFaq } from '@/ai/flows/faq-generator';
import FaqSection from '@/components/FaqSection';
import { HelpCircle } from 'lucide-react';

const parseFaqString = (faqString: string): { question: string; answer: string }[] => {
    if (!faqString) return [];
  
    // Split by "Q:" but keep the delimiter in the next element.
    const qaPairs = faqString.trim().split(/\n?Q:\s*/).filter(Boolean);
  
    return qaPairs.map(pair => {
      // Each pair is now "Question text\nA: Answer text"
      const parts = pair.split(/\n?A:\s*/);
      const question = parts[0]?.trim() || '';
      const answer = parts[1]?.trim() || '';
      return { question, answer };
    });
  };

export default async function InformationPage() {
  const faqOutput = await generateFaq({ topic: 'the process of exporting rice from India, including quality control, logistics, and payment terms' });
  const faqs = parseFaqString(faqOutput.faq);

  return (
    <>
      <section className="py-16 md:py-24 bg-secondary/20 text-center">
        <div className="container mx-auto px-4">
          <HelpCircle className="mx-auto h-12 w-12 text-primary" />
          <h1 className="font-headline text-4xl md:text-5xl font-bold mt-4">Information Hub</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your questions about rice exporting, answered. We believe in transparency and empowering our clients with knowledge.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            {faqs.length > 0 ? (
                <FaqSection faqs={faqs} />
            ) : (
                <p className="text-center text-muted-foreground">Could not load FAQs at this time. Please try again later.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
