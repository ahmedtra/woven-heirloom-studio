import { useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Shop = () => {
  const [selectedStyle, setSelectedStyle] = useState<string>("all");
  const [selectedMaterial, setSelectedMaterial] = useState<string>("all");
  const [selectedColor, setSelectedColor] = useState<string>("all");

  const styles = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    []
  );

  const materials = useMemo(
    () => Array.from(new Set(products.map((product) => product.material))),
    []
  );

  const colors = useMemo(
    () => Array.from(new Set(products.map((product) => product.color))),
    []
  );

  const filteredProducts = products.filter((product) => {
    if (selectedStyle !== "all" && product.category !== selectedStyle) return false;
    if (selectedMaterial !== "all" && product.material !== selectedMaterial) return false;
    if (selectedColor !== "all" && product.color !== selectedColor) return false;
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Collection de la boutique</h1>
            <p className="text-lg text-muted-foreground">
              Parcourez notre sélection soignée de sacs au crochet faits main
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Style</label>
              <Select value={selectedStyle} onValueChange={setSelectedStyle}>
                <SelectTrigger>
                  <SelectValue placeholder="Tous les styles" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="all">Tous les styles</SelectItem>
                  {styles.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Matière</label>
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les matières" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="all">Toutes les matières</SelectItem>
                  {materials.map((material) => (
                    <SelectItem key={material} value={material}>
                      {material}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Couleur</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Toutes les couleurs" />
                </SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="all">Toutes les couleurs</SelectItem>
                  {colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                Aucun produit ne correspond à vos filtres. Essayez d'ajuster votre sélection.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
