import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
import { getDiscountedPrice, isSaleActive } from "@/lib/pricing";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const salePrice = getDiscountedPrice(product.price);
  const saleActive = isSaleActive() && salePrice !== product.price;

  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-smooth">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={`/${product.images[0]}`}
            alt={product.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold mb-1 group-hover:text-primary transition-smooth">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-baseline gap-2">
          <p className="font-semibold text-primary">{formatCurrency(salePrice)}</p>
          {saleActive && (
            <span className="text-sm text-muted-foreground line-through">
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/product/${product.id}`} className="w-full">
          <Button className="w-full" variant="outline">
            Voir les détails
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
