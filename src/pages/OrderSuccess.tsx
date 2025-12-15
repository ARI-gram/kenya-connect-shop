import { Link } from 'react-router-dom';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderSuccess = () => {
  const orderNumber = `DK${Date.now().toString().slice(-8)}`;

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-warm">
      <div className="container max-w-lg text-center py-16">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elevated animate-scale-in">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="font-display text-3xl font-bold mb-4">
            Asante Sana!
          </h1>
          <p className="text-muted-foreground mb-6">
            Your order has been placed successfully. We'll send you a confirmation email shortly.
          </p>

          {/* Order Number */}
          <div className="bg-muted rounded-lg p-4 mb-8">
            <p className="text-sm text-muted-foreground mb-1">Order Number</p>
            <p className="font-display text-xl font-bold">{orderNumber}</p>
          </div>

          {/* What's Next */}
          <div className="space-y-4 text-left mb-8">
            <h3 className="font-display font-semibold">What happens next?</h3>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm">Confirmation Email</p>
                <p className="text-sm text-muted-foreground">
                  You'll receive an email with your order details and tracking info.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Package className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-sm">Order Processing</p>
                <p className="text-sm text-muted-foreground">
                  We'll prepare your order and ship within 1-2 business days.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="flex-1">
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="outline" asChild className="flex-1">
              <Link to="/account">Track Order</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
