import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Duka Kenya</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Celebrating Kenyan craftsmanship and culture through authentic, 
              handmade products. Every purchase supports local artisans.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Shop</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/products" className="text-background/70 hover:text-accent transition-colors text-sm">
                All Products
              </Link>
              <Link to="/products?category=jewelry" className="text-background/70 hover:text-accent transition-colors text-sm">
                Maasai Jewelry
              </Link>
              <Link to="/products?category=coffee" className="text-background/70 hover:text-accent transition-colors text-sm">
                Kenyan Coffee
              </Link>
              <Link to="/products?category=crafts" className="text-background/70 hover:text-accent transition-colors text-sm">
                Handmade Crafts
              </Link>
              <Link to="/products?category=textiles" className="text-background/70 hover:text-accent transition-colors text-sm">
                Textiles
              </Link>
            </nav>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Help</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/shipping" className="text-background/70 hover:text-accent transition-colors text-sm">
                Shipping Info
              </Link>
              <Link to="/returns" className="text-background/70 hover:text-accent transition-colors text-sm">
                Returns & Exchanges
              </Link>
              <Link to="/faq" className="text-background/70 hover:text-accent transition-colors text-sm">
                FAQ
              </Link>
              <Link to="/contact" className="text-background/70 hover:text-accent transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@dukakenya.co.ke" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-sm">
                <Mail className="h-4 w-4" />
                hello@dukakenya.co.ke
              </a>
              <a href="tel:+254700000000" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors text-sm">
                <Phone className="h-4 w-4" />
                +254 700 000 000
              </a>
              <p className="flex items-start gap-2 text-background/70 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 Duka Kenya. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-background/50 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-background/50 hover:text-accent transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
