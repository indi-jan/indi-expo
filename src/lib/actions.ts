'use server';

import * as z from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function handleContactFormSubmission(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  // In a real application, you would process this data:
  // - Send an email
  // - Save to a database
  // - etc.
  console.log('Received contact form submission:');
  console.log(parsed.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
