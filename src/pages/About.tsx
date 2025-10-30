import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bagsImage from "@/assets/bags.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <div className="bg-muted/30 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Notre histoire</h1>
            <p className="text-lg text-muted-foreground">
              Façonné avec amour, conçu pour durer
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8">
                Chaque sac que nous créons est plus qu'un simple accessoire — c'est un ouvrage né de notre passion,
                un témoignage du savoir-faire traditionnel et une œuvre d'art à porter, pensée pour traverser les générations.
              </p>

              <div className="aspect-video rounded-lg overflow-hidden mb-12">
                <img
                  src={bagsImage}
                  alt="Collection de sacs artisanaux"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold mb-4">L'art du crochet</h2>
              <p className="text-muted-foreground mb-6">
                Notre aventure est née d'une passion simple pour le crochet — Mme Asma pratique cet art depuis sa plus tendre enfance,
                façonnant patiemment des sacs à la main. Plus qu'une simple passion, le crochet est devenu sa manière d'exprimer son amour
                et son cœur pour ses proches. Aujourd'hui, elle souhaite transmettre cette flamme et cette expertise à travers des sacs uniques
                qui reflètent sa créativité et sa délicatesse.
              </p>

              <h2 className="text-3xl font-serif font-bold mb-4">Unicité</h2>
              <p className="text-muted-foreground mb-6">
                Ce travail représente l'imagination et la créativité de Mme Asma, qui a pratiqué le crochet ainsi que différentes
                autres techniques textiles depuis l'enfance. Chaque pièce est le fruit d'années de pratique et de réinterprétation de
                la tradition du crochet à la main.
              </p>

              <h2 className="text-3xl font-serif font-bold mb-4">Pensés pour durer</h2>
              <p className="text-muted-foreground mb-6">
                Chaque sac nécessite plusieurs jours de travail. Nous ne précipitons jamais le processus,
                car nous croyons aux pièces d'héritage plutôt qu'à la mode éphémère. Nous misons sur la qualité de la matière première
                ainsi que sur l'authenticité de chaque article, et c'est pour cela que chaque création unique célèbre votre singularité.
              </p>

              <div className="bg-muted/30 rounded-lg p-8 my-12">
                <h3 className="text-2xl font-serif font-bold mb-4">Nos valeurs</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Matières durables et approvisionnement éthique</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Préserver l'artisanat traditionnel pour les générations futures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>La qualité avant la quantité, toujours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Chaque pièce est réalisée avec amour et intention</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-muted-foreground">
                Merci de soutenir l'artisanat fait main et de faire partie de notre histoire.
                Nous espérons que votre sac vous apportera autant de joie que nous en avons eu à le créer.
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
