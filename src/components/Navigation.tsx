import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import {
  getSalePercentLabel,
  isSaleActive,
  SALE_EVENT_NAME,
} from "@/lib/pricing";

const Navigation = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();
  const saleActive = isSaleActive();
  const salePercentLabel = getSalePercentLabel();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {saleActive && (
        <div className="bg-primary text-primary-foreground text-center text-sm px-4 py-2">
          <span className="font-semibold">{SALE_EVENT_NAME}</span> :{" "}
          <span className="font-medium">
            {salePercentLabel} de réduction sur toute la collection
          </span>
        </div>
      )}
      <nav className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-bold text-primary">Asmouta</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium transition-smooth hover:text-primary">
              Accueil
            </Link>
            <Link to="/shop" className="text-sm font-medium transition-smooth hover:text-primary">
              Boutique
            </Link>
            <Link to="/about" className="text-sm font-medium transition-smooth hover:text-primary">
              À propos
            </Link>
            <Link to="/contact" className="text-sm font-medium transition-smooth hover:text-primary">
              Contact
            </Link>
          </div>

          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
