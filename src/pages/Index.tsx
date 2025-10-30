import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import bagsImage from "@/assets/bags.png";
import crochetCraftGif from "@/assets/crochet making.gif";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={bagsImage}
              alt="Collection de sacs artisanaux"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                Fait main,<br />Avec cœur
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Découvrez votre prochain sac à transmettre
              </p>
              <div className="flex gap-4">
                <Link to="/shop">
                  <Button size="lg" className="text-lg px-8">
                    Découvrir la collection
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Notre histoire
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Collection à la une</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chaque sac est confectionné avec un soin méticuleux, associant des techniques traditionnelles de crochet
              à des finitions en cuir de qualité pour un style intemporel.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline">
                Voir tous les produits
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">L'art du fait main</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Chaque sac de notre collection est un travail d'amour, issu du savoir-faire ancestral du crochet.
                  Nous associons des fils doux et de haute qualité à des motifs de crochet uniques pour créer des
                  pièces à la fois belles et fonctionnelles.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Notre engagement envers les techniques traditionnelles de crochet garantit que chaque sac
                  n'est pas qu'un simple accessoire, mais une pièce patrimoniale conçue pour durer des générations.
                </p>
                <Link to="/about">
                  <Button variant="secondary">
                    En savoir plus sur notre savoir-faire
                  </Button>
                </Link>
              </div>
              <div className="flex justify-center">
                <img
                  src={crochetCraftGif}
                  alt="Processus de création au crochet"
                  className="rounded-lg max-h-[360px] w-full max-w-3xl object-contain bg-muted p-2"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
