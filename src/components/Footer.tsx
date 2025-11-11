import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Asmouta</h3>
            <p className="text-sm text-muted-foreground">
              Sacs à main au crochet confectionnés avec amour et savoir-faire. Chaque pièce est un héritage unique.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-smooth">
                  Toute la boutique
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Service client</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Livraison et retours</li>
              <li>Conseils d'entretien</li>
              <li>Questions fréquentes</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Asmouta. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
