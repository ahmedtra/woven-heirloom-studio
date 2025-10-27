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
    name: "Artisan Cream Tote",
    price: 149,
    description: "Handcrafted with premium cream cotton yarn and genuine leather handles. This spacious tote is perfect for daily use, featuring a sturdy construction that holds its shape beautifully. Each piece is lovingly made over several days, ensuring exceptional quality and attention to detail.",
    images: ["product-tote-cream.jpg"],
    category: "Tote",
    material: "Cotton",
    color: "Cream",
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: "2",
    name: "Terracotta Crossbody",
    price: 129,
    description: "A stunning crossbody bag in rich terracotta hue, featuring an adjustable leather strap. The circular crochet pattern creates a unique texture that catches the eye. Perfect for hands-free convenience without sacrificing style.",
    images: ["product-crossbody-terracotta.jpg"],
    category: "Crossbody",
    material: "Cotton",
    color: "Terracotta",
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: "3",
    name: "Forest Green Evening Clutch",
    price: 89,
    description: "Elegant evening clutch in deep forest green with a luxurious gold kiss-lock closure. The dense crochet work creates a structured form that's both sophisticated and timeless. Perfect for special occasions.",
    images: ["product-clutch-green.jpg"],
    category: "Clutch",
    material: "Wool",
    color: "Green",
    inStock: true,
  },
  {
    id: "4",
    name: "Warm Brown Shoulder Bag",
    price: 139,
    description: "Classic shoulder bag in warm brown tones with premium leather accents. The horizontal textured pattern adds visual interest while maintaining elegance. A versatile piece that complements any wardrobe.",
    images: ["product-shoulder-brown.jpg"],
    category: "Tote",
    material: "Leather accents",
    color: "Brown",
    sizes: ["One Size"],
    inStock: true,
  },
];
