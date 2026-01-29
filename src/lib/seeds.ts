import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export type Seed = {
  name: string;
  slug: string;
  image: ImagePlaceholder | undefined;
  description: string;
  benefits: string;
};

export const seeds: Seed[] = [
    {
      name: 'Sabja Seeds',
      slug: 'sabja-seeds',
      image: PlaceHolderImages.find(p => p.id === 'sabja-seeds'),
      description: 'Also known as basil seeds, they swell when soaked in water and are a popular addition to drinks and desserts for their gelatinous texture.',
      benefits: 'Rich in fiber, which aids digestion and promotes a feeling of fullness. They have cooling properties, making them great for summer drinks.'
    },
    {
      name: 'Chia Seeds',
      slug: 'chia-seeds',
      image: PlaceHolderImages.find(p => p.id === 'chia-seeds'),
      description: 'A nutritional powerhouse from the mint family. These tiny seeds are packed with nutrients and can be added to almost any meal.',
      benefits: 'Excellent source of omega-3 fatty acids, antioxidants, fiber, and protein. Supports heart health and helps maintain stable energy levels.'
    },
    {
      name: 'Cucumber Seed (Vellari Vidhai)',
      slug: 'cucumber-seed',
      image: PlaceHolderImages.find(p => p.id === 'cucumber-seed'),
      description: 'Mild and light seeds extracted from cucumbers, often used in traditional health practices and for their subtle flavor.',
      benefits: 'Known for their cooling effect on the body. They are a good source of minerals and are believed to promote healthy skin and reduce water retention.'
    },
    {
      name: 'Sunflower Seed (Suriya Gandhi Vidhai)',
      slug: 'sunflower-seed',
      image: PlaceHolderImages.find(p => p.id === 'sunflower-seed'),
      description: 'The fruit of the sunflower, these seeds are a popular and nutritious snack, available shelled or unshelled.',
      benefits: 'Rich in Vitamin E, healthy fats, and magnesium. They support immune function, reduce inflammation, and promote cardiovascular health.'
    },
    {
      name: ' Pumpkin Seeds',
      slug: 'pumpkin-seeds',
      image: PlaceHolderImages.find(p => p.id === 'pumpkin-seeds'),
      description: 'Flat, oval-shaped green seeds that are a delicious and nutrient-dense snack, especially when roasted.',
      benefits: 'High in valuable nutrients like magnesium, zinc, and antioxidants. They are linked to improved heart health, prostate health, and protection against certain cancers.'
    },
];
