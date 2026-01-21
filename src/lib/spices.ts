import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export type Spice = {
  name: string;
  slug: string;
  image: ImagePlaceholder | undefined;
  description: string;
  usage: string;
};

export const spices: Spice[] = [
  {
    name: 'Mace (Jadhi Pathiri)',
    slug: 'mace',
    image: PlaceHolderImages.find(p => p.id === 'mace'),
    description: 'Mace is the delicate, lace-like outer covering of the nutmeg seed. It has a warm, sweet, and slightly pungent flavor, more subtle than nutmeg.',
    usage: 'Excellent in baked goods, desserts, savory dishes like stews and curries, and in pickling spices.'
  },
  {
    name: 'Cloves (Kirambu / Ilavangam)',
    slug: 'cloves',
    image: PlaceHolderImages.find(p => p.id === 'cloves'),
    description: 'Dried flower buds of the clove tree, known for their intense aroma and sweet, pungent taste. They are a powerful and aromatic spice.',
    usage: 'Widely used in biryanis, meat dishes, and spice blends like garam masala. Also used in baking and mulled drinks.'
  },
  {
    name: 'Green Cardamom (Elachi / Elakkai)',
    slug: 'green-cardamom',
    image: PlaceHolderImages.find(p => p.id === 'green-cardamom'),
    description: 'Known as the "Queen of Spices," green cardamom has a strong, unique taste, with an intensely aromatic, resinous fragrance.',
    usage: 'A key ingredient in Indian sweets (mithai), chai, and savory rice dishes.'
  },
  {
    name: 'Ceylon Cinnamon (Surul Pattai)',
    slug: 'ceylon-cinnamon',
    image: PlaceHolderImages.find(p => p.id === 'cinnamon-sticks'),
    description: 'True cinnamon, with a delicate, sweet flavor and a light, citrusy aroma. It has thin, paper-like bark that forms multiple layers when rolled.',
    usage: 'Perfect for desserts, beverages, and dishes where a subtle, refined cinnamon flavor is desired.'
  },
  {
    name: 'Nutmeg (Jadhikai)',
    slug: 'nutmeg',
    image: PlaceHolderImages.find(p => p.id === 'nutmeg'),
    description: 'A sweet, aromatic, and nutty spice derived from the seed of the nutmeg tree. It is often grated fresh for the best flavor.',
    usage: 'Used in both sweet and savory cooking, including baked goods, coffee, sauces, and vegetable dishes.'
  },
  {
    name: 'Black Cardamom (Karuppu Elakkai)',
    slug: 'black-cardamom',
    image: PlaceHolderImages.find(p => p.id === 'black-cardamom'),
    description: 'Larger than its green counterpart, black cardamom has a smoky, camphor-like flavor that is more suited for savory dishes.',
    usage: 'Adds a deep, smoky flavor to hearty meat stews, lentil dishes (dals), and biryanis.'
  },
  {
    name: 'Marathi Moggu',
    slug: 'marathi-moggu',
    image: PlaceHolderImages.find(p => p.id === 'marathi-moggu'),
    description: 'Also known as Kapok buds, this is a type of caper. It has a pungent, woody aroma and is typically fried in oil to release its flavor.',
    usage: 'An essential ingredient in South Indian spice blends, especially in Karnataka for \'Bisi Bele Bath\'.'
  },
  {
    name: 'White Pepper (White Milaku)',
    slug: 'white-pepper',
    image: PlaceHolderImages.find(p => p.id === 'white-pepper'),
    description: 'Made from ripe pepper berries with the skin removed, white pepper is hotter than black pepper but has a more earthy, less complex flavor.',
    usage: 'Ideal for white sauces, cream-based soups, and potato dishes where the color of black pepper is not desired.'
  },
  {
    name: 'Turmeric Finger (Virali Manajal / Selam Manjal)',
    slug: 'turmeric-finger',
    image: PlaceHolderImages.find(p => p.id === 'turmeric-finger'),
    description: 'These are the dried rhizomes (roots) of the turmeric plant. They have an earthy aroma and a pungent, slightly bitter flavor. Can be ground into powder.',
    usage: 'Ground turmeric is a cornerstone of curry powders and is used to color and flavor rice, lentil, and vegetable dishes.'
  },
  {
    name: 'Dry Ginger (Sukku)',
    slug: 'dry-ginger',
    image: PlaceHolderImages.find(p => p.id === 'dry-ginger'),
    description: 'Dried ginger root offers a pungent, spicy-sweet flavor and aroma. It is more potent and has a different flavor profile than fresh ginger.',
    usage: 'Used to make ginger powder, which is a key component of spice blends, teas, and traditional remedies.'
  },
  {
    name: 'Black Pepper (Pepper / Milaku)',
    slug: 'black-pepper',
    image: PlaceHolderImages.find(p => p.id === 'black-pepper'),
    description: 'The "King of Spices," it has a sharp, pungent, and earthy flavor. Whole peppercorns provide a more complex flavor than ground pepper.',
    usage: 'A universal spice used to season almost any savory dish, from soups and stews to grilled meats and vegetables.'
  },
  {
    name: 'Cumin Seeds (Seerakam)',
    slug: 'cumin-seeds',
    image: PlaceHolderImages.find(p => p.id === 'cumin-seeds'),
    description: 'Known for their distinctive warm, nutty, and slightly peppery flavor. They are a staple in many global cuisines.',
    usage: 'Often tempered in hot oil at the start of a dish (tadka). Used whole or ground in curries, rice, and spice rubs.'
  },
  {
    name: 'Star Anise (Annachi Poo)',
    slug: 'star-anise',
    image: PlaceHolderImages.find(p => p.id === 'star-anise'),
    description: 'A star-shaped spice with a powerful, licorice-like flavor and aroma, similar to anise but more potent.',
    usage: 'A key ingredient in biryani, pho, and Chinese five-spice powder. Excellent for flavoring braised meats.'
  },
  {
    name: 'Fennel Seeds (Sombu)',
    slug: 'fennel-seeds',
    image: PlaceHolderImages.find(p => p.id === 'fennel-seeds'),
    description: 'These seeds have a sweet, anise-like flavor. They are often used as a mouth freshener after meals in India.',
    usage: 'Used in spice blends, sausages, and for flavoring fish and vegetable dishes. Also common in breads and pickles.'
  },
  {
    name: 'Fenugreek (Venthayam / Methi)',
    slug: 'fenugreek',
    image: PlaceHolderImages.find(p => p.id === 'fenugreek'),
    description: 'Fenugreek seeds have a slightly bitter, nutty taste with a hint of maple. When toasted, the bitterness subsides.',
    usage: 'A common ingredient in curry powders and pickles. Used in dals and vegetable dishes, especially in South Indian cuisine.'
  },
  {
    name: 'Asafoetida (Eswar Perungayam)',
    slug: 'asafoetida',
    image: PlaceHolderImages.find(p => p.id === 'asafoetida'),
    description: 'A dried latex (gum oleoresin) with a strong, pungent onion-garlic odor that mellows into a savory flavor when cooked.',
    usage: 'A pinch is typically fried in hot oil and used to flavor lentil dishes, vegetable curries, and pickles.'
  },
  {
    name: 'Stone Flower (Kalpasi)',
    slug: 'stone-flower',
    image: PlaceHolderImages.find(p => p.id === 'stone-flower'),
    description: 'A type of lichen that has a soft, dark, and earthy aroma. It doesn\'t have a strong taste on its own but adds a mysterious, smoky flavor to dishes.',
    usage: 'A key ingredient in Chettinad cuisine and goda masala. Used in meat and vegetable dishes.'
  },
  {
    name: 'Palm Jaggery (Karuppati)',
    slug: 'palm-jaggery',
    image: PlaceHolderImages.find(p => p.id === 'palm-jaggery'),
    description: 'A natural sweetener made from the sap of palm trees. It has a rich, caramel-like flavor with smoky and chocolatey notes. It is unrefined and contains more minerals than processed sugar.',
    usage: 'Used in traditional Indian sweets, desserts, and beverages. It can be a healthier substitute for white sugar.'
  }
];
