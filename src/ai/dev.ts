import { config } from 'dotenv';
config();

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

genkit({
    plugins: [
        googleAI({
            apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY,
        }),
    ],
});
