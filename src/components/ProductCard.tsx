import React from 'react';
import { Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  return (
    <div 
      className="card-product cursor-pointer group"
      onClick={() => onProductClick(product)}
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover image-zoom"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-foreground mb-1 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-2 line-clamp-1">
          {product.category}
        </p>
        <p className="font-semibold text-primary text-lg">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;