import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-fashion-accent" />,
      title: "Email",
      info: "hello@elegance.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6 text-fashion-accent" />,
      title: "Phone",
      info: "+1 (555) 123-4567",
      description: "Call us during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6 text-fashion-accent" />,
      title: "Address",
      info: "123 Fashion Avenue, NYC 10001",
      description: "Visit our flagship store"
    },
    {
      icon: <Clock className="w-6 h-6 text-fashion-accent" />,
      title: "Hours",
      info: "Mon-Fri: 9AM-6PM",
      description: "Customer service hours"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-primary mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h2 className="font-display text-2xl font-semibold text-primary mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-fashion-accent bg-background"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-fashion-accent bg-background"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-fashion-accent bg-background resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button type="submit" className="btn-accent w-full py-3 text-lg">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h2 className="font-display text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-primary font-medium mb-1">
                        {item.info}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-xl font-semibold text-primary mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    What are your return policies?
                  </h4>
                  <p className="text-muted-foreground">
                    We offer 30-day returns on all unworn items with original tags.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    How long does shipping take?
                  </h4>
                  <p className="text-muted-foreground">
                    Standard shipping takes 3-5 business days. Express shipping available.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">
                    Do you offer international shipping?
                  </h4>
                  <p className="text-muted-foreground">
                    Yes, we ship worldwide. International shipping takes 7-14 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;