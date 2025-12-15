import { Truck, Shield, Heart, Leaf } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Handcrafted with Love',
    description: 'Every product is made by skilled Kenyan artisans with passion and dedication.',
  },
  {
    icon: Shield,
    title: 'Quality Guaranteed',
    description: 'We ensure authentic, high-quality products that meet our strict standards.',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description: 'Fast and reliable delivery across Kenya, with tracking on all orders.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Practices',
    description: 'Supporting eco-friendly production methods and fair trade practices.',
  },
];

const ValueProps = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                <value.icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-primary-foreground/80 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
