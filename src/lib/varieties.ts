import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

type Spec = { key: string; value: string };
type Term = { key: string; value: string };

export type Variety = {
  name: string;
  slug: string;
  image?: ImagePlaceholder;
  image2?: ImagePlaceholder;
  description: string;
  specs: Spec[];
  terms: Term[];
};


export const varieties: Variety[] = [
    {
      name: 'Basmati Rice',
      slug: 'basmati-rice',
      image: PlaceHolderImages.find(p => p.id === 'basmati-rice'),
      image2: PlaceHolderImages.find(p => p.id === 'basmati-rice-2'),
      description: "Basmati is the Long grain rice, grown largely in the states of North India. The quality of our rice is extremely fine and it's more than one year old crop hence after cooking the rice gives more soft and also it is non-sticky. It has an excellent source of protein and high in nutrients. It is finely processed to remove foreign grains, husk, dust particles and other impurities. It is free from all artificial colors and harmful adulterants. Our rice is 100% healthy, delicious in taste, fine texture and natural because it is strictly cultivated in the renowned farms.",
      specs: [
        { key: 'RICE', value: 'Basmati' },
        { key: 'Brand', value: 'RiceOne / Buyer Brand' },
        { key: 'Year of Crop', value: '2025' },
        { key: 'Avg. Length', value: '8.4 MM' },
        { key: 'Moisture', value: '12 to 14%' },
        { key: 'Broken', value: 'Less than 5%' },
        { key: 'Damage / Dis-colour', value: 'Less than 3%' },
        { key: 'Chalky', value: 'Less than 3%' },
        { key: 'Packing', value: 'Poly , PP Bag' },
        { key: 'Packing size', value: '26/50 kg' },
      ],
      terms: [
        { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
        { key: 'Payment terms', value: 'Advance' },
        { key: 'Delivery Period', value: 'Within 25 days from the date advance payment.' },
      ]
    },
    {
      name: 'Non Basmati Rice',
      slug: 'non-basmati-rice',
      image: PlaceHolderImages.find(p => p.id === 'non-basmati-rice'),
      image2: PlaceHolderImages.find(p => p.id === 'non-basmati-rice-2'),
      description: 'Non-Basmati is the medium and short grain rice, grown largely in the states of Tamil Nadu, Andhra Pradesh and Karnataka. The quality of our rice is extremely fine and it\'s more than one year old crop hence after cooking the rice gives more soft and also it is non-sticky. It has an excellent source of protein and high in nutrients. It is finely processed to remove foreign grains, husk, dust particles and other impurities. It is free from all artificial colors and harmful adulterants. Our rice is 100% healthy, delicious in taste, fine texture and natural because it is strictly cultivated in the renowned farms.',
      specs: [
        { key: 'Origin State', value: 'Tamil Nadu, Karnataka & Andhra Pradesh' },
        { key: 'Verities', value: 'Raw, ParBoiled, Steam' },
        { key: 'Age of Rice', value: '1+ year Old' },
        { key: 'Packing', value: '5, 10, 25, 50 kg PP Bag' },
      ],
      terms: []
    },
    {
        name: 'Ponni Rice',
        slug: 'ponni-rice',
        image: PlaceHolderImages.find(p => p.id === 'ponni-rice'),
        image2: PlaceHolderImages.find(p => p.id === 'ponni-rice-2'),
        description: "Ponni is the medium grain rice is widely renowned Indian rice variety grown in the southern parts of India. The name in Tamil literally means 'Like Gold'. This rice variety is highly popular in Asian Countries too for its good quality & high nutrients. These are cultivated using time-tested techniques & when cooked, it is soft, non-sticky and expands only lengthwise resulting in long & thin grains. The rice has highest fibre content and considered to be easily digestible food. RiceOne is 100% healthy, delicious in taste, fine texture and natural because it is strictly cultivated in the renowned farms.",
        specs: [
          { key: 'RICE', value: 'Ponni Rice' },
          { key: 'Brand', value: 'RiceOne / Buyer Brand' },
          { key: 'Year of Crop', value: '2025' },
          { key: 'Avg. Length', value: '6 MM' },
          { key: 'Moisture', value: '12 to 14%' },
          { key: 'Broken', value: 'Less than 5%' },
          { key: 'Damage / Dis-colour', value: 'Less than 3%' },
          { key: 'Chalky', value: 'Less than 5%' },
          { key: 'Packing', value: 'Poly , PP Bag' },
          { key: 'Packing size', value: '26/50 kg' },
        ],
        terms: [
            { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
            { key: 'Payment terms', value: 'Advance' },
            { key: 'Delivery Period', value: 'Within 25 days from the date advance payment.' },
        ]
      },
      {
        name: 'Sona Masoori Rice',
        slug: 'sona-masoori-rice',
        image: PlaceHolderImages.find(p => p.id === 'sona-masoori-rice'),
        image2: PlaceHolderImages.find(p => p.id === 'sona-masoori-rice-2'),
        description: 'Sona Masoori is the medium grain rice is widely renowned Indian rice variety grown in the southern parts of India. Sona Masoori in Telugu means Golden Ivy. It is lightweight and aromatic. These are cultivated using time-tested techniques & when cooked, it is soft, non-sticky and expands only lengthwise resulting in long & thin grains. The rice has highest fibre content and considered to be easily digestible food. RiceOne is 100% healthy, delicious in taste, fine texture and natural because it is cultivated in one of the most fertile land in India.',
        specs: [
            { key: 'RICE', value: 'Sona Masoori' },
            { key: 'Brand', value: 'RiceOne / Buyer Brand' },
            { key: 'Year of Crop', value: '2025' },
            { key: 'Avg. Length', value: '6 MM' },
            { key: 'Moisture', value: '12 to 14%' },
            { key: 'Broken', value: 'Less than 5%' },
            { key: 'Damage / Dis-colour', value: 'Less than 3%' },
            { key: 'Chalky', value: 'Less than 5%' },
            { key: 'Packing', value: 'Poly , PP Bag' },
            { key: 'Packing size', value: '26/50 kg' },
        ],
        terms: [
            { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
            { key: 'Payment terms', value: 'Advance' },
            { key: 'Delivery Period', value: 'Within 25 days from the date advance payment.' },
        ]
      },
      {
        name: 'Round Grain Rice (Idly)',
        slug: 'idly-rice',
        image: PlaceHolderImages.find(p => p.id === 'idly-rice'),
        image2: PlaceHolderImages.find(p => p.id === 'idly-rice-2'),
        description: 'Round Grain Idly Rice is a staple diet consumed chiefly in varieties of food items all over South India and also used for making Sushi, its also  called as sticky rice. The grain is short, bold kernel with a white belly in the kernel. Finest quality rice is used in preparing delicious, tasty, soft and fluffy idli, Dosa , Sushi and more food itesms.',
        specs: [
            { key: 'RICE', value: 'Round Grain Rice' },
            { key: 'Brand', value: 'RiceOne / Buyer Brand' },
            { key: 'Year of Crop', value: '2025' },
            { key: 'Avg. Length', value: '4 MM' },
            { key: 'Moisture', value: '12 to 14%' },
            { key: 'Broken', value: 'Less than 5%' },
            { key: 'Damage / Dis-colour', value: 'Less than 3%' },
            { key: 'Chalky', value: 'Less than 5%' },
            { key: 'Packing', value: 'Poly , PP Bag' },
            { key: 'Packing size', value: '26/50 kg' },
        ],
        terms: [
            { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
            { key: 'Payment terms', value: 'Advance' },
            { key: 'Delivery Period', value: 'Within 25 days from the date advance payment.' },
        ]
      },
      {
        name: 'Kerala Matta (Red Rice)',
        slug: 'matta-rice',
        image: PlaceHolderImages.find(p => p.id === 'matta-rice'),
        image2: PlaceHolderImages.find(p => p.id === 'matta-rice-2'),
        description: 'Kerala Matta Rice also known as Rose-Matta rice, Palakkadan, Kerala Red rice, or Red parboiled rice an indigenous variety of rice grown in Kerala in southern parts of India. The grains are yellowish pink from being parboiled with the reddish out layers. Rose Matta Rice maintains a pink hue as well as its flavour on cooking. Like all brown or par boiled rice, Red Matta has a lengthy cook time and requires extra water. It is a coarse variety of rice with bold grains and red pericarp. The rice has a unique taste. The coarse rice with red pericarp by itself ensures high content of nutrients. “Par-boiling” of the rice further ensures retention of nutritional value.',
        specs: [
            { key: 'RICE', value: 'Kerala Matta Rice' },
            { key: 'Brand', value: 'RiceOne / Buyer Brand' },
            { key: 'Year of Crop', value: '2025' },
            { key: 'Avg. Length', value: '5 - 5.5 MM' },
            { key: 'Moisture', value: '12 to 14%' },
            { key: 'Broken', value: 'Less than 5%' },
            { key: 'Damage / Dis-colour', value: 'Less than 3%' },
            { key: 'Chalky', value: 'Less than 3%' },
            { key: 'Packing', value: 'Poly , PP Bag' },
            { key: 'Packing size', value: '26/50 kg' },
        ],
        terms: [
            { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
            { key: 'Payment terms', value: 'Advance' },
            { key: 'Delivery Period', value: 'Within 25 days from the date advance payment.' },
        ]
      },
      {
        name: 'IR 64 Long Grain Rice',
        slug: 'ir-64-rice',
        image: PlaceHolderImages.find(p => p.id === 'ir64-rice'),
        image2: PlaceHolderImages.find(p => p.id === 'ir64-rice-2'),
        description: 'IR-64 Long Grain Rice, cultivated mostly in the southern parts of India. These are cultivated using time-tested techniques & when cooked, it is soft, non-sticky and expands only lengthwise resulting in long & thin grains. The rice has highest fibre content and considered to be easily digestible food. IR 64 is produced in large quality in India and is being exported to all over the world mainly to Middle East and African countries.',
        specs: [
            { key: 'RICE', value: 'IR-64' },
            { key: 'Brand', value: 'RiceOne / Buyer Brand' },
            { key: 'Year of Crop', value: '2025' },
            { key: 'Avg. Length', value: '6 MM' },
            { key: 'Moisture', value: '12 to 14%' },
            { key: 'Broken', value: 'Less than 5%' },
            { key: 'Damage / Dis-colour', value: 'Less than 3%' },
            { key: 'Chalky', value: 'Less than 5%' },
            { key: 'Packing', value: 'Poly , PP Bag' },
            { key: 'Packing size', value: '26/50 kg' },
        ],
        terms: [
            { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
            { key: 'Payment terms', value: 'Advance' },
            { key: 'Delivery Period', value: 'Within 25 days from the date advance payment.' },
        ]
      },
      {
        name: 'Organic Rice',
        slug: 'organic-rice',
        image: PlaceHolderImages.find(p => p.id === 'organic-rice'),
        image2: PlaceHolderImages.find(p => p.id === 'organic-rice-2'),
        description: 'Organic rice is cultivated entirely using only natural fertilizers including manures and add­ons instead of chemical fertilizers. This ensures rice is 100% healthy with no side effects. RiceOne\'s range of Organic rice contains twice the amount of fiber, vitamins and minerals in comparison to white milled rice. Since this variety of rice is fibrous, its variation in the form of brown, Red, Black and Bamboo rice is highly suitable for diabetics and obese people. This is because it reduces the plasma cholestrol level. This variety of rice also prevents cancer. Our rice is 100% healthy, delicious in taste, fine texture and natural because it is strictly cultivated in the renowned farms.',
        specs: [
            { key: 'RICE', value: 'Organic Rice' },
            { key: 'Brand', value: 'RiceOne / Buyer Brand' },
            { key: 'Year of Crop', value: '2025' },
            { key: 'Avg. Length', value: '5 - 6 MM' },
            { key: 'Moisture', value: '12 to 14%' },
            { key: 'Broken', value: 'Less than 5%' },
            { key: 'Damage / Dis-colour', value: 'Less than 3%' },
            { key: 'Chalky', value: 'Less than 3%' },
            { key: 'Packing', value: 'Poly , PP Bag' },
            { key: 'Packing size', value: '26/50 kg' },
        ],
        terms: [
            { key: 'Shipment terms', value: 'FOB, CNF, CIF' },
            { key: 'Payment terms', value: 'Advance' },
            { key: 'Delivery Period', value: 'Within 30 days from the date advance payment.' },
        ]
      }
  ];

    

    

    