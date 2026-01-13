'use server';
/**
 * @fileOverview Generates a FAQ section for the information page of the Indirani Rice Exports website.
 *
 * - generateFaq - A function that generates the FAQ content.
 * - FaqGeneratorInput - The input type for the generateFaq function.
 * - FaqGeneratorOutput - The return type for the generateFaq function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqGeneratorInputSchema = z.object({
  topic: z
    .string()
    .default('rice exports')
    .describe('The topic for which to generate FAQs.'),
});
export type FaqGeneratorInput = z.infer<typeof FaqGeneratorInputSchema>;

const FaqGeneratorOutputSchema = z.object({
  faq: z.string().describe('The generated FAQ content.'),
});
export type FaqGeneratorOutput = z.infer<typeof FaqGeneratorOutputSchema>;

export async function generateFaq(input: FaqGeneratorInput): Promise<FaqGeneratorOutput> {
  return faqGeneratorFlow(input);
}

const faqGeneratorPrompt = ai.definePrompt({
  name: 'faqGeneratorPrompt',
  input: {schema: FaqGeneratorInputSchema},
  output: {schema: FaqGeneratorOutputSchema},
  prompt: `You are an expert in creating FAQs for businesses.

  Generate a FAQ section for a company in the topic of {{topic}}. Make sure to use language appropriate for potential clients of Indirani Rice Exports.
  The FAQ should be formatted as a string.
  Each question should be on a new line, followed by the answer on a new line.
  Begin each question with "Q: ".\n  Begin each answer with "A: ".\n`,
});

const faqGeneratorFlow = ai.defineFlow(
  {
    name: 'faqGeneratorFlow',
    inputSchema: FaqGeneratorInputSchema,
    outputSchema: FaqGeneratorOutputSchema,
  },
  async input => {
    const {output} = await faqGeneratorPrompt(input);
    return output!;
  }
);
