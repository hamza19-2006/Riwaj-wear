import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="py-16">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-display text-3xl font-semibold text-primary mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our beautiful collection and find something you love.
            </p>
            <Link to="/shop" className="btn-accent">
              Start Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-semibold text-primary mb-2">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-full sm:w-24 h-32 sm:h-24 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">
                      {item.category} • Size: {item.selectedSize}
                    </p>
                    <p className="font-semibold text-primary">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="p-1 border border-border rounded hover:border-fashion-accent transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="p-1 border border-border rounded hover:border-fashion-accent transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl p-6 shadow-soft sticky top-8">
              <h2 className="font-display text-xl font-semibold text-primary mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {totalPrice >= 100 ? 'Free' : '$10.00'}
                  </span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-semibold text-lg text-primary">
                      ${(totalPrice + (totalPrice >= 100 ? 0 : 10)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="btn-accent w-full py-3 text-lg mb-4">
                Proceed to Checkout
              </Button>

              <Link
                to="/shop"
                className="block text-center text-fashion-accent hover:text-fashion-accent/80 font-medium transition-colors"
              >
                Continue Shopping
              </Link>

              {totalPrice < 100 && (
                <div className="mt-4 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    Add ${(100 - totalPrice).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;