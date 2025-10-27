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
    name: "Cabas sable tressé",
    price: 159,
    description:
      "Un cabas aux teintes sable tressé main dans un coton bio ultra doux. Sa base renforcée garde une belle tenue, idéale pour les journées bien remplies.",
    images: ["product1.jpeg"],
    category: "Cabas",
    material: "Coton bio",
    color: "Sable",
    sizes: ["Taille unique"],
    inStock: true,
  },
  {
    id: "2",
    name: "Bandoulière bleu nuit",
    price: 135,
    description:
      "Sac bandoulière compact en bleu nuit, doublé d'un coton et de finitions en cuir végétal. La bandoulière ajustable permet un porté confortable toute la journée.",
    images: ["product2.jpeg"],
    category: "Bandoulière",
    material: "Coton et cuir végétal",
    color: "Bleu nuit",
    sizes: ["Taille unique"],
    inStock: true,
  },
  {
    id: "3",
    name: "Pochette pastel perles",
    price: 95,
    description:
      "Pochette délicate dans des tons pastel, ornée de fines perles crochetées. Parfaite pour ajouter une touche artisanale à vos tenues de soirée.",
    images: ["product3.jpeg"],
    category: "Pochette",
    material: "Laine fine",
    color: "Rose poudré",
    inStock: true,
  },
  {
    id: "4",
    name: "Sac seau ivoire lunaire",
    price: 149,
    description:
      "Sac seau ivoire avec cordon resserrant et fond rigide. Le coton mercerisé lui apporte une brillance subtile tout en restant doux au toucher.",
    images: ["product4.jpeg"],
    category: "Sac seau",
    material: "Coton mercerisé",
    color: "Ivoire",
    sizes: ["Taille unique"],
    inStock: false,
  },
  {
    id: "5",
    name: "Cabas marché olive",
    price: 165,
    description:
      "Grand cabas vert olive pensé pour le marché. Les anses renforcées et la maille ajourée respirante en font un compagnon pratique et élégant.",
    images: ["product5.jpeg"],
    category: "Cabas",
    material: "Raphia tissé",
    color: "Vert olive",
    sizes: ["Taille unique"],
    inStock: true,
  },
  {
    id: "6",
    name: "Bandoulière terracotta",
    price: 129,
    description:
      "Bandoulière souple dans une chaleureuse teinte terracotta. Tissée en coton recyclé, elle dispose d'une poche intérieure pour vos essentiels.",
    images: ["product6.jpeg"],
    category: "Bandoulière",
    material: "Coton recyclé",
    color: "Terre cuite",
    sizes: ["Taille unique"],
    inStock: true,
  },
  {
    id: "7",
    name: "Mini sac caramel",
    price: 115,
    description:
      "Petit sac caramel à porter à la main ou épaule grâce à sa chaîne amovible. Sa doublure veloutée protège vos petites affaires avec élégance.",
    images: ["product7.jpeg"],
    category: "Pochette",
    material: "Coton et cuir souple",
    color: "Caramel",
    inStock: false,
  },
  {
    id: "8",
    name: "Sac à dos lin brut",
    price: 175,
    description:
      "Un sac à dos léger en lin brut, parfait pour vos escapades créatives. Les bretelles réglables et la poche avant zippée simplifient vos déplacements.",
    images: ["product8.jpeg"],
    category: "Sac à dos",
    material: "Lin brut",
    color: "Naturel",
    sizes: ["Petite", "Moyenne", "Grande"],
    inStock: true,
  },
  {
    id: "9",
    name: "Cabas mer du nord",
    price: 169,
    description:
      "Grand cabas bleu ardoise inspiré des rivages du Nord. Sa laine bouclée, chaude et résistante, garde vos effets bien protégés.",
    images: ["product9.jpeg"],
    category: "Cabas",
    material: "Laine bouclée",
    color: "Bleu ardoise",
    sizes: ["Taille unique"],
    inStock: true,
  },
  {
    id: "10",
    name: "Pochette soirée argent",
    price: 105,
    description:
      "Pochette de soirée argentée en fil métallisé, agrémentée d'une dragonne crochetée. Elle capte la lumière et se glisse facilement dans la main.",
    images: ["product10.jpeg"],
    category: "Pochette",
    material: "Fil métallisé",
    color: "Argent",
    inStock: true,
  },
  {
    id: "11",
    name: "Bandoulière prune velours",
    price: 139,
    description:
      "Sac bandoulière prune aux finitions velours, doublé d'un coton peigné. L'intérieur modulable accueille aisément portefeuille et carnet.",
    images: ["product11.jpeg"],
    category: "Bandoulière",
    material: "Coton peigné",
    color: "Prune",
    sizes: ["Taille unique"],
    inStock: true,
  },
];
