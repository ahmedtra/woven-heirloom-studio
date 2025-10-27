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
                Chaque sac que nous créons est plus qu'un simple accessoire — c'est un travail d'amour,
                un témoignage du savoir-faire traditionnel et une pièce d'art à porter pensée pour traverser les générations.
              </p>

              <div className="aspect-video rounded-lg overflow-hidden mb-12">
                <img
                  src={heroImage}
                  alt="Artisan fabriquant des sacs"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-3xl font-serif font-bold mb-4">L'art du crochet</h2>
              <p className="text-muted-foreground mb-6">
                Notre aventure est née d'une simple passion pour le crochet — un art pluriséculaire qui
                transforme un fil humble en motifs raffinés et magnifiques. Chaque sac commence avec des
                matières soigneusement choisies : des fils de coton doux aux teintes chaleureuses, associés
                à des finitions en cuir premium provenant de fournisseurs responsables.
              </p>

              <h2 className="text-3xl font-serif font-bold mb-4">Tradition maroquinière</h2>
              <p className="text-muted-foreground mb-6">
                Nous associons les techniques traditionnelles du crochet à l'art de la maroquinerie — la
                tradition française du travail fin du cuir. Nos finitions en cuir sont découpées à la main,
                polies sur les bords et soigneusement fixées pour sublimer la douceur du crochet. Cette alliance
                textile donne naissance à des sacs à la fois luxueux et fonctionnels.
              </p>

              <h2 className="text-3xl font-serif font-bold mb-4">Pensé pour durer</h2>
              <p className="text-muted-foreground mb-6">
                Chaque sac nécessite plusieurs jours de travail. Nous ne précipitons jamais le processus,
                car nous croyons aux pièces héritage plutôt qu'à la mode éphémère. Du premier point à la dernière
                touche de cuir, chaque étape est réalisée à la main avec une attention méticuleuse aux détails.
                Le résultat : un sac qui se magnifie avec le temps et développe une patine unique, reflet de votre histoire commune.
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
