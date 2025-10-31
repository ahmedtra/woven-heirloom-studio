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
    images: ["products/product1.jpeg"],
    category: "Cabas",
    material: "Coton bio",
    color: "Sable",
    inStock: true,
  },
  {
    id: "3",
        name: "Mini Cabas Elia",
    price: 145,
    description:
      "Mini Cabas couleur taupe tissé main avec manchettes en bois naturel et attache boheme",
    images: ["products/product3.jpeg"],
    category: "Cabas",
    material: "Coton",
    color: "Taupe",
    inStock: true,
  },
  {
    id: "4",
    name: "Chapeau Alij",
    price: 85,
    description:
      "Chapeau tissé main avec motif fleur",
    images: ["products/product4.jpeg"],
    category: "Chapeau",
    material: "Rafia",
    color: "Beige",
    inStock: true,
  },
  {
    id: "5",
    name: "Cabas Fes",
    price: 180,
    description:
      "Grand cabas taupe en Rafia naturelle pensé pour le marché.",
    images: ["products/product5.jpeg"],
    category: "Cabas",
    material: "Raphia naturelle",
    color: "Taupe",
    inStock: true,
  },
  {
    id: "6",
    name: "Pochet Emma",
    price: 129,
    description:
      "Bandoulière souple dans une chaleureuse teinte terracotta. Tissée en coton recyclé, elle dispose d'une poche intérieure pour vos essentiels.",
    images: ["products/product6.jpeg"],
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
    images: ["products/product7.jpeg"],
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
    images: ["products/product8.jpeg"],
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
    images: ["products/product9.jpeg"],
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
    images: ["products/product10.jpeg"],
    category: "Pochette",
    material: "Cotton",
    color: "Argent",
    inStock: true,
  },
  {
    id: "11",
    name: "Sac à main Yasmina",
    price: 139,
    description:
      "Sac a main tressé main, manchettes métalliques",
    images: ["products/product11.jpeg"],
    category: "Sac á main",
    material: "Coton",
    color: "Noir",
    inStock: true,
  },
];
