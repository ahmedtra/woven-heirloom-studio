import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bags.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Story</h1>
            <p className="text-lg text-muted-foreground">
              Handcrafted with love, designed to last
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Every bag we create is more than an accessory—it's a labor of love, a testament
                to traditional craftsmanship, and a piece of wearable art designed to last generations.
              </p>

              <div className="aspect-video rounded-lg overflow-hidden mb-12">
                <img
                  src={heroImage}
                  alt="Artisan crafting bags"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold mb-4">The Art of Crochet</h2>
              <p className="text-muted-foreground mb-6">
                Our journey began with a simple passion for crochet—a centuries-old craft that
                transforms humble yarn into intricate, beautiful patterns. Each bag starts with
                carefully selected, high-quality materials: soft cotton yarns in warm, earthy
                tones and premium leather accents sourced from ethical suppliers.
              </p>

              <h2 className="text-3xl font-serif font-bold mb-4">Maroquinerie Tradition</h2>
              <p className="text-muted-foreground mb-6">
                We combine traditional crochet techniques with the art of maroquinerie—the French
                tradition of fine leather craftsmanship. Our leather accents are hand-cut, edge-finished,
                and carefully attached to complement the softness of the crochet work. This marriage
                of textiles creates bags that are both luxurious and functional.
              </p>

              <h2 className="text-3xl font-serif font-bold mb-4">Made to Last</h2>
              <p className="text-muted-foreground mb-6">
                Each bag takes days to complete. We don't rush the process because we believe in
                creating heirlooms, not fast fashion. From the first stitch to the final leather
                treatment, every step is done by hand with meticulous attention to detail. The result
                is a bag that grows more beautiful with age, developing a unique patina that tells
                the story of your journey together.
              </p>

              <div className="bg-muted/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-serif font-bold mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sustainable materials and ethical sourcing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Traditional craftsmanship preserved for future generations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Quality over quantity, always</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Each piece made with love and intention</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground">
                Thank you for supporting handmade craftsmanship and becoming part of our story.
                We hope your bag brings you as much joy as we had creating it.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
