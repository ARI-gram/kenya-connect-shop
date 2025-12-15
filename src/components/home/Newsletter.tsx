import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you for subscribing!', {
      description: 'You\'ll receive our latest updates and offers.',
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-sunset text-primary-foreground overflow-hidden relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 pattern-african opacity-10" />
      
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Join Our Community
          </h2>
          <p className="text-primary-foreground/90 mb-8">
            Subscribe for exclusive offers, new arrivals, and stories from our artisans.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-1"
              required
            />
            <Button 
              type="submit" 
              variant="gold"
              disabled={isLoading}
              className="min-w-[140px]"
            >
              {isLoading ? (
                'Subscribing...'
              ) : (
                <>
                  Subscribe
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-primary-foreground/60 text-xs mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
