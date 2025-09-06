import React from 'react';
import { Heart, Globe, Users, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-fashion-accent" />,
      title: "Passion for Quality",
      description: "Every piece in our collection is carefully selected for its exceptional quality, craftsmanship, and timeless appeal."
    },
    {
      icon: <Globe className="w-8 h-8 text-fashion-accent" />,
      title: "Sustainable Practices",
      description: "We're committed to ethical sourcing and environmentally conscious practices throughout our supply chain."
    },
    {
      icon: <Users className="w-8 h-8 text-fashion-accent" />,
      title: "Community First",
      description: "Building lasting relationships with our customers, artisans, and partners is at the heart of everything we do."
    },
    {
      icon: <Award className="w-8 h-8 text-fashion-accent" />,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our business, from product curation to customer experience."
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
            About Riwaj Wear
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Riwaj Wear – Tradition with Elegance. Founded in 2024, we are a women's clothing brand 
            inspired by the beauty of tradition and the charm of modern fashion.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h2 className="font-display text-3xl font-semibold text-primary mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="mb-6">
                Riwaj Wear – Tradition with Elegance. Founded in 2024, Riwaj Wear is a women's clothing brand 
                inspired by the beauty of tradition and the charm of modern fashion. Our collections are 
                crafted with premium fabrics, intricate embroidery, and timeless designs that reflect 
                sophistication and cultural grace.
              </p>
              <p className="mb-6">
                At Riwaj Wear, we believe every woman deserves elegance in her everyday wear and confidence 
                in her festive attire. From casuals to luxury suits, each piece is created with care, 
                comfort, and style. Our mission is to blend heritage with contemporary trends, making 
                fashion not just wearable but unforgettable.
              </p>
              <p>
                Riwaj Wear – where tradition meets elegance. We serve customers who appreciate the 
                difference that thoughtful design and cultural heritage can make in their wardrobe.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-semibold text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-primary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 text-center">
          <h2 className="font-display text-3xl font-semibold mb-4">
            Our Mission
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            To make sustainable, high-quality fashion accessible while supporting 
            artisans and creators around the world. We believe that style and 
            responsibility can beautifully coexist.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;