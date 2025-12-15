import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pattern-african">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-warm" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground rounded-full px-4 py-2 text-sm font-medium animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span>Authentic Kenyan Craftsmanship</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: '100ms' }}>
              Discover the{' '}
              <span className="text-gradient">Beauty</span>
              <br />
              of Kenya
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '200ms' }}>
              Handcrafted treasures from skilled Kenyan artisans. From Maasai beadwork 
              to premium coffee, each piece tells a story of tradition and excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '300ms' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/products">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/about">Our Story</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Artisan Products</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Local Artisans</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '500ms' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated animate-float">
                  <img
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600"
                    alt="Maasai Jewelry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600"
                    alt="Kenyan Coffee"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600"
                    alt="Handwoven Basket"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated animate-float" style={{ animationDelay: '2s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600"
                    alt="African Textiles"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
