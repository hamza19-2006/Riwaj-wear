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
            About Elegance
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Founded on the belief that fashion should be both beautiful and responsible, 
            Elegance curates premium clothing that transcends seasonal trends.
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
                Elegance was born from a simple vision: to create a fashion destination where quality, 
                sustainability, and style converge. Founded in 2020, we began our journey with a 
                commitment to challenging the fast fashion industry by offering carefully curated 
                pieces that stand the test of time.
              </p>
              <p className="mb-6">
                Our team travels the world to discover emerging designers and established artisans 
                who share our values of exceptional craftsmanship and ethical production. Every piece 
                in our collection tells a story of dedication, skill, and respect for both the 
                environment and the people who create our beautiful clothing.
              </p>
              <p>
                Today, Elegance serves customers who appreciate the difference that thoughtful design 
                and responsible production can make. We're not just selling clothes; we're building 
                a community of conscious consumers who believe that what we wear should reflect our values.
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