import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all cursor-pointer group"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </div>
        )}
        {product.featured && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
            Featured
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            {product.discount ? (
              <>
                <p className="text-lg font-bold text-primary">
                  ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground line-through">
                  ${product.price.toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-lg font-bold text-primary">${product.price.toFixed(2)}</p>
            )}
          </div>

          <Button
            variant="accent"
            size="icon"
            onClick={handleAddToCart}
            aria-label="Add to cart"
            className="group-hover:scale-110 transition-transform"
          >
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
