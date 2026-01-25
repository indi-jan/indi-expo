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
     name: 'Urad Dal (Ulunthu)',
    slug: 'urad-dal',
    image: PlaceHolderImages.find(p => p.id === 'urad-dal'),
    description: 'Also known as black gram, these are split and skinned lentils with a creamy white interior and a mild, earthy flavor. They are a staple in South Indian cuisine.',
    usage: 'Essential for making batters for dosas and idlis. Also used in dals, vadas (fritters), and to make papadums.'
  },
  {
    name: 'Horse Gram (Kollu)',
    slug: 'horse-gram',
    image: PlaceHolderImages.find(p => p.id === 'horse-gram'),
    description: 'Horse gram is a reddish-brown legume with a robust, earthy flavor. It is renowned in traditional medicine for its numerous health benefits and is a great source of protein and iron.',
    usage: 'Often used to make soups (rasam), powders for porridge, and traditional stews. It is considered a "warming" food, ideal for colder weather.'
  }
];
