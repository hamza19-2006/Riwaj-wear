import React, { useState } from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Product, useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) return;
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    
    onClose();
    setSelectedSize('');
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-muted transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-6">
            {/* Product Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h2 className="font-display text-3xl font-semibold text-primary mb-2">
                  {product.name}
                </h2>
                <p className="text-muted-foreground text-lg mb-4">
                  {product.category}
                </p>
                <p className="font-semibold text-2xl text-fashion-accent">
                  Rs. {product.price.toFixed(2)}
                </p>
              </div>

              <div>
                <p className="text-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-medium text-foreground mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg font-medium transition-all ${
                        selectedSize === size
                          ? 'border-fashion-accent bg-fashion-accent text-fashion-accent-foreground'
                          : 'border-border hover:border-fashion-accent'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <h3 className="font-medium text-foreground mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-border rounded-lg hover:border-fashion-accent transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-medium text-lg min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-border rounded-lg hover:border-fashion-accent transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="btn-accent w-full py-3 text-lg"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;