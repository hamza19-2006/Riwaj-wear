import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useCheckout } from '@/hooks/useCheckout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { submitOrder, isLoading } = useCheckout();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    shippingAddress: ''
  });

  const handleCheckoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitOrder(checkoutData);
    if (result.success) {
      setIsCheckoutOpen(false);
      setCheckoutData({ fullName: '', email: '', whatsapp: '', shippingAddress: '' });
    }
  };

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
                      Rs. {item.price.toFixed(2)}
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
                  <span className="font-medium">Rs. {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">
                    {totalPrice >= 2500 ? 'Free' : 'Rs. 250'}
                  </span>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between">
                    <span className="font-semibold text-lg">Total</span>
                    <span className="font-semibold text-lg text-primary">
                      Rs. {(totalPrice + (totalPrice >= 2500 ? 0 : 250)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
                <DialogTrigger asChild>
                  <Button className="btn-accent w-full py-3 text-lg mb-4">
                    Proceed to Checkout
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={checkoutData.fullName}
                        onChange={(e) => setCheckoutData(prev => ({ ...prev, fullName: e.target.value }))}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={checkoutData.email}
                        onChange={(e) => setCheckoutData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        placeholder="Your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number *</Label>
                      <Input
                        id="whatsapp"
                        type="tel"
                        value={checkoutData.whatsapp}
                        onChange={(e) => setCheckoutData(prev => ({ ...prev, whatsapp: e.target.value }))}
                        required
                        placeholder="Your WhatsApp number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="shippingAddress">Shipping Address *</Label>
                      <Input
                        id="shippingAddress"
                        type="text"
                        value={checkoutData.shippingAddress}
                        onChange={(e) => setCheckoutData(prev => ({ ...prev, shippingAddress: e.target.value }))}
                        required
                        placeholder="Your complete shipping address"
                      />
                    </div>
                    
                    <div className="border rounded-lg p-4 space-y-2">
                      <h4 className="font-semibold">Order Summary</h4>
                      <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                          <span>Items ({totalItems})</span>
                          <span>Rs. {totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Shipping</span>
                          <span>{totalPrice >= 2500 ? 'Free' : 'Rs. 250'}</span>
                        </div>
                        <div className="border-t pt-2">
                          <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>Rs. {(totalPrice + (totalPrice >= 2500 ? 0 : 250)).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? 'Placing Order...' : 'Place Order'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Link
                to="/shop"
                className="block text-center text-fashion-accent hover:text-fashion-accent/80 font-medium transition-colors"
              >
                Continue Shopping
              </Link>

              {totalPrice < 2500 && (
                <div className="mt-4 p-4 bg-accent/20 rounded-lg">
                  <p className="text-sm text-foreground">
                    Add Rs. {(2500 - totalPrice).toFixed(2)} more for free shipping!
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