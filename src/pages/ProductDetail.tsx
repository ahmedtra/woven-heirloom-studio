import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { formatCurrency } from "@/lib/utils";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-serif font-bold mb-4">Produit introuvable</h1>
            <Link to="/shop">
              <Button>Retour à la boutique</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product?.id]);

  const hasMultipleImages = product.images.length > 1;
  const currentImage = product.images[currentImageIndex] ?? product.images[0];

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
  };

  const handleImageAdvance = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/shop" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-smooth">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la boutique
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={`/${currentImage}`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={handleImageAdvance}
                  className="absolute bottom-4 right-4 rounded-full bg-black/65 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur transition-smooth hover:bg-black/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Voir l'image suivante"
                >
                  Image {currentImageIndex + 1}/{product.images.length}
                </button>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary mb-6">{formatCurrency(product.price)}</p>
              
              <div className="prose prose-lg mb-8">
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Détails</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><span className="font-medium text-foreground">Matière :</span> {product.material}</li>
                    <li><span className="font-medium text-foreground">Couleur :</span> {product.color}</li>
                    <li><span className="font-medium text-foreground">Style :</span> {product.category}</li>
                    <li><span className="font-medium text-foreground">Disponibilité :</span> {product.inStock ? "En stock" : "Rupture de stock"}</li>
                  </ul>
                </div>

                {product.sizes && product.sizes.length > 1 && (
                  <div>
                    <label className="font-semibold mb-2 block">Taille</label>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choisir une taille" />
                      </SelectTrigger>
                      <SelectContent className="bg-card z-50">
                        {product.sizes.map((size) => (
                          <SelectItem key={size} value={size}>
                            {size}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div>
                  <label className="font-semibold mb-2 block">Quantité</label>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Ajouter au panier" : "Rupture de stock"}
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t">
                <h3 className="font-semibold mb-4">Conseils d'entretien</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Nettoyer uniquement en tamponnant avec un savon doux</li>
                  <li>• Éviter une exposition prolongée au soleil</li>
                  <li>• Ranger dans une housse de protection lorsqu'il n'est pas utilisé</li>
                  <li>• Nourrir régulièrement les finitions en cuir</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
