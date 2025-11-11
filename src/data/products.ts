export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  material: string;
  color: string;
  sizes?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mini Cabas Elyssa",
    price: 120,
    description:
      "un mini Cabas au teintes sable tressé main avec manchettes en bois naturel",
    images: ["products/1/1.jpeg", "products/1/2.jpeg", "products/1/3.jpeg"],
    category: "Cabas",
    material: "Coton bio",
    color: "Sable",
    inStock: true,
  },
  {
    id: "3",
        name: "Mini Cabas Mimi",
    price: 145,
    description:
      "Mini Cabas couleur taupe tissé main avec manchettes en bois naturel et attache boheme",
    images: ["products/3/1.jpeg", "products/3/2.jpeg"],
    category: "Cabas",
    material: "Coton",
    color: "Taupe",
    inStock: true,
  },
  {
    id: "4",
    name: "Chapeau Imen",
    price: 85,
    description:
      "Chapeau tissé main avec motif fleur",
    images: ["products/4/1.jpeg", "products/4/2.jpeg"],
    category: "Chapeau",
    material: "Rafia",
    color: "Beige",
    inStock: true,
  },
  {
    id: "5",
    name: "Cabas Rakia",
    price: 180,
    description:
      "Grand cabas taupe en Rafia naturelle pensé pour le marché.",
    images: ["products/5/1.jpeg", "products/5/2.jpeg"],
    category: "Cabas",
    material: "Raphia naturelle",
    color: "Taupe",
    inStock: true,
  },
  {
    id: "6",
    name: "Pochette Emma",
    price: 129,
    description:
      "Bandoulière souple dans une chaleureuse teinte terracotta. Tissée en coton recyclé, elle dispose d'une poche intérieure pour vos essentiels.",
    images: [
      "products/6/1.jpeg",
      "products/6/2.jpeg",
      "products/6/3.jpeg",
    ],
    category: "Bandoulière",
    material: "Coton recyclé",
    color: "Terre cuite",
    inStock: true,
  },
  {
    id: "7",
    name: "Sac Bandouliére Janna",
    price: 130,
    description:
      "Sac bondouliére tissé main portée épaule parfait pour le quotidien.",
    images: ["products/7/1.jpeg"],
    category: "Sac Bandouliére",
    material: "Coton",
    color: "Noir",
    inStock: true,
  },
  {
    id: "8",
    name: "Sac à main Lella",
    price: 160,
    description:
      "Sac à main, forme carrée avec manchettes en bois couleur kaki",
    images: ["products/8/1.jpeg", "products/8/2.jpeg", "products/8/3.jpeg"],
    category: "Sac à main",
    material: "Cotton",
    color: "Kaki",
    inStock: true,
  },
  {
    id: "9",
    name: "Sac à main Nejma",
    price: 200,
    description:
      "Sac porté épaule avec anse trés comfortable, fermeture éclair, noeud travaillé",
    images: ["products/9/1.jpeg", "products/9/2.jpeg", "products/9/3.jpeg"],
    category: "Sac à main",
    material: "Coton",
    color: "Blanc cassé",
    inStock: true,
  },
  {
    id: "10",
    name: "Pochette soirée Warda",
    price: 120,
    description:
      "Pochette de soirée argentée, forme fleur, manchettes métalliques",
    images: ["products/10/1.jpeg", "products/10/2.jpeg", "products/10/3.jpeg"],
    category: "Pochette",
    material: "Cotton",
    color: "Argent",
    inStock: true,
  },
  {
    id: "11",
    name: "Sac à main Yesmine",
    price: 139,
    description:
      "Sac a main tressé main, manchettes métalliques",
    images: ["products/11/1.jpeg", "products/11/2.jpeg", "products/11/3.jpeg"],
    category: "Sac á main",
    material: "Coton",
    color: "Noir",
    inStock: true,
  },
];
