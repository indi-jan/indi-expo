import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export type OtherProduct = {
  name: string;
  slug: string;
  image: ImagePlaceholder | undefined;
};

export const otherProducts: OtherProduct[] = [
  {
    name: 'Salt',
    slug: 'salt',
    image: PlaceHolderImages.find(p => p.id === 'salt'),
  },
  {
    name: 'Jaggery',
    slug: 'jaggery',
    image: PlaceHolderImages.find(p => p.id === 'jaggery'),
  },
  {
    name: 'Moringa Powder',
    slug: 'moringa-powder',
    image: PlaceHolderImages.find(p => p.id === 'moringa-powder'),
  },
  {
    name: 'Neem Powder',
    slug: 'neem-powder',
    image: PlaceHolderImages.find(p => p.id === 'neem-powder'),
  },
  {
    name: 'Herbal Teas',
    slug: 'herbal-teas',
    image: PlaceHolderImages.find(p => p.id === 'herbal-teas'),
  },
  {
    name: 'Cold Pressed Oils',
    slug: 'cold-pressed-oils',
    image: PlaceHolderImages.find(p => p.id === 'cold-pressed-oils'),
  },
  {
    name: 'Millet Bars',
    slug: 'millet-bars',
    image: PlaceHolderImages.find(p => p.id === 'millet-bars'),
  },
  {
    name: 'Dry Coconut Powder',
    slug: 'dry-coconut-powder',
    image: PlaceHolderImages.find(p => p.id === 'coconut-powder'),
  },
];
