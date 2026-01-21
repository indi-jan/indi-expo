import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export type Pulse = {
  name: string;
  slug: string;
  image: ImagePlaceholder | undefined;
  description: string;
  usage: string;
};

export const pulses: Pulse[] = [
  {
    name: 'Green Peas (Pacha Pattani)',
    slug: 'green-peas',
    image: PlaceHolderImages.find(p => p.id === 'green-peas'),
    description: 'Vibrant green peas are small, spherical seeds that are sweet and starchy. They are a popular vegetable, packed with antioxidants and nutrients.',
    usage: 'Commonly used in curries, rice dishes like biryani, stews, salads, and as a side dish. They can be added to both savory and slightly sweet preparations.'
  },
  {
    name: 'Horse Gram (Kollu)',
    slug: 'horse-gram',
    image: PlaceHolderImages.find(p => p.id === 'horse-gram'),
    description: 'Horse gram is a reddish-brown legume with a robust, earthy flavor. It is renowned in traditional medicine for its numerous health benefits and is a great source of protein and iron.',
    usage: 'Often used to make soups (rasam), powders for porridge, and traditional stews. It is considered a "warming" food, ideal for colder weather.'
  }
];
