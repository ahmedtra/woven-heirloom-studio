import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-bags.jpg";

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
              src={heroImage}
              alt="Handmade crochet bags"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                Handmade,<br />Heartfelt
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Discover Your Next Heirloom Bag
              </p>
              <div className="flex gap-4">
                <Link to="/shop">
                  <Button size="lg" className="text-lg px-8">
                    Shop Collection
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Featured Collection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each bag is meticulously crafted by hand, combining traditional crochet techniques
              with premium leather accents for a timeless look.
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
                View All Products
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6">The Art of Handmade</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Every bag in our collection is a labor of love, created through the time-honored
                  craft of crochet. We combine soft, high-quality yarns with premium leather
                  accents to create pieces that are both beautiful and functional.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our commitment to traditional maroquinerie techniques ensures that each bag
                  is not just an accessory, but an heirloom piece that will last for generations.
                </p>
                <Link to="/about">
                  <Button variant="secondary">
                    Learn More About Our Craft
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img
                  src={heroImage}
                  alt="Craftsmanship detail"
                  className="w-full h-full object-cover"
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
