import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { featuredProducts } from '@/data/products';
import { Product } from '@/contexts/CartContext';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-fashion-accent" />,
      title: "Premium Quality",
      description: "Carefully curated pieces made from the finest materials"
    },
    {
      icon: <Truck className="w-8 h-8 text-fashion-accent" />,
      title: "Free Shipping",
      description: "Complimentary shipping on all orders over Rs. 2500"
    },
    {
      icon: <Star className="w-8 h-8 text-fashion-accent" />,
      title: "Sustainable Fashion",
      description: "Ethically sourced and environmentally conscious clothing"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-primary mb-6 fade-in">
            Timeless
            <span className="text-fashion-accent block">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto fade-in">
            Discover our curated collection of premium clothing that transcends trends and embraces sustainable luxury.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
            <Link to="/shop" className="btn-accent inline-flex items-center">
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/about" className="btn-outline">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center slide-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-background rounded-2xl shadow-soft mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-primary mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces that embody our commitment to quality, style, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onProductClick={handleProductClick}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop" className="btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Stay in Touch
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for exclusive offers and style inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-fashion-accent"
            />
            <button className="btn-accent">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Home;