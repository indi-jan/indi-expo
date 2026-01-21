import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export type CoconutProduct = {
  name: string;
  slug: string;
  image: ImagePlaceholder | undefined;
  description: string;
  usage: string;
};

export const coconutProducts: CoconutProduct[] = [
  {
    name: 'Coconut Powder',
    slug: 'coconut-powder',
    image: PlaceHolderImages.find(p => p.id === 'coconut-powder'),
    description: 'Finely milled from dried coconut meat, our coconut powder dissolves easily and provides a rich, creamy texture.',
    usage: 'Perfect for creating coconut milk or cream for curries, soups, and sauces. Also a great addition to smoothies, baked goods, and desserts for a natural coconut flavor.'
  },
  {
    name: 'Desiccated Coconut',
    slug: 'desiccated-coconut',
    image: PlaceHolderImages.find(p => p.id === 'desiccated-coconut'),
    description: 'Dried, finely shredded coconut flesh that is unsweetened and full of natural flavor. It adds texture and taste to a variety of dishes.',
    usage: 'Ideal as a coating for sweets and cakes, a key ingredient in granola and energy bars, and for garnishing curries and rice dishes.'
  },
  {
    name: 'Virgin Coconut Oil',
    slug: 'coconut-oil',
    image: PlaceHolderImages.find(p => p.id === 'coconut-oil'),
    description: '100% pure, cold-pressed virgin coconut oil extracted from fresh coconut milk. It retains all its natural aroma, flavor, and nutrients.',
    usage: 'A healthy cooking oil for sautéing and frying. Also widely used for skincare as a moisturizer, for hair care as a conditioner, and in oil pulling for oral hygiene.'
  },
];
