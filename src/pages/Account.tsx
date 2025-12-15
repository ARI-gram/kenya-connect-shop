import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, LogOut, Mail, Lock, Eye, EyeOff, Plus, Edit, Trash2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

// Admin credentials
const ADMIN_CREDENTIALS = {
  email: 'admin@kenyaconnect.com',
  password: 'admin123'
};

const CATEGORIES = ['electronics', 'clothing', 'home-garden', 'sports', 'books', 'beauty'];

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'user' | 'admin'>('user');
  const [showPassword, setShowPassword] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  // Product management states
  const [products, setProducts] = useState([]);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    images: '',
    rating: '4.5',
    reviews: '0',
    inStock: true,
    featured: false
  });

  // Load products from storage on mount
  useEffect(() => {
    if (isLoggedIn && userRole === 'admin') loadProducts();
  }, [isLoggedIn, userRole]);

  const loadProducts = async () => {
    try {
      const keys = Object.keys(localStorage).filter(k => k.startsWith('product:'));
      const loadedProducts = keys.map(key => {
        try {
          return JSON.parse(localStorage.getItem(key) || '');
        } catch {
          return null;
        }
      }).filter(p => p !== null);
      setProducts(loadedProducts);
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts([]);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Check admin login
    if (formData.email === ADMIN_CREDENTIALS.email && formData.password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setUserRole('admin');
      toast.success('Welcome, Admin!');
      return;
    }

    // Regular user login simulation
    if (authMode === 'login') {
      setIsLoggedIn(true);
      setUserRole('user');
      toast.success('Welcome back!');
    } else {
      // Simulate registration
      toast.success('Account created successfully!');
      setAuthMode('login');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('user');
    toast.success('Logged out successfully');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // ----- Product Management Handlers -----
  const handleProductInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetProductForm = () => {
    setProductForm({
      name: '',
      description: '',
      price: '',
      category: '',
      images: '',
      rating: '4.5',
      reviews: '0',
      inStock: true,
      featured: false
    });
    setEditingProduct(null);
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();

    if (!productForm.name || !productForm.price || !productForm.category) {
      toast.error('Please fill in all required fields');
      return;
    }

    const imageUrls = productForm.images.split('\n').map(url => url.trim()).filter(url => url);
    if (imageUrls.length === 0) {
      toast.error('Please provide at least one image URL');
      return;
    }

    const product = {
      id: editingProduct?.id || `prod_${Date.now()}`,
      name: productForm.name,
      description: productForm.description,
      price: parseFloat(productForm.price),
      category: productForm.category,
      images: imageUrls,
      rating: parseFloat(productForm.rating),
      reviews: parseInt(productForm.reviews),
      inStock: productForm.inStock,
      featured: productForm.featured
    };

    localStorage.setItem(`product:${product.id}`, JSON.stringify(product));
    toast.success(editingProduct ? 'Product updated!' : 'Product added!');
    loadProducts();
    resetProductForm();
    setIsAddDialogOpen(false);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      images: product.images.join('\n'),
      rating: product.rating.toString(),
      reviews: product.reviews.toString(),
      inStock: product.inStock,
      featured: product.featured
    });
    setIsAddDialogOpen(true);
  };

  const handleDeleteProduct = (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    localStorage.removeItem(`product:${id}`);
    toast.success('Product deleted!');
    loadProducts();
  };

  // ------------------------------

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-warm">
        <div className="container max-w-md py-16">
          <div className="bg-card rounded-2xl p-8 shadow-elevated">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-2xl font-bold">
                {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
              </h1>
              <p className="text-muted-foreground text-sm mt-2">
                {authMode === 'login' ? 'Sign in to access your account' : 'Join us and start shopping'}
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {authMode === 'register' && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                {authMode === 'login' ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                {authMode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="text-primary font-medium hover:underline"
                >
                  {authMode === 'login' ? 'Sign Up' : 'Sign In'}
                </button>
              </p>
            </div>

            <p className="text-xs text-center text-muted-foreground mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ------------------ Logged in Dashboard ------------------

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl font-bold">My Account</h1>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>

        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="w-full md:w-auto">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            {userRole === 'admin' && (
              <TabsTrigger value="products" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Manage Products
              </TabsTrigger>
            )}
          </TabsList>

          {/* ------------------- PROFILE ------------------- */}
          <TabsContent value="profile">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold mb-6">Profile Information</h2>
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input defaultValue="John" />
                </div>
                <div className="space-y-2">
                  <Label>Last Name</Label>
                  <Input defaultValue="Doe" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Email</Label>
                  <Input defaultValue="john@example.com" type="email" />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Phone</Label>
                  <Input defaultValue="+254 712 345 678" type="tel" />
                </div>
                <div className="sm:col-span-2">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ------------------- ORDERS ------------------- */}
          <TabsContent value="orders">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold mb-6">Order History</h2>
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No orders yet</p>
                <Button asChild className="mt-4">
                  <Link to="/products">Start Shopping</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* ------------------- WISHLIST ------------------- */}
          <TabsContent value="wishlist">
            <div className="bg-card rounded-xl p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold mb-6">My Wishlist</h2>
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Your wishlist is empty</p>
                <Button asChild className="mt-4">
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* ------------------- ADMIN PRODUCT MANAGEMENT ------------------- */}
          {userRole === 'admin' && (
            <TabsContent value="products">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Products</h2>
                <Button onClick={() => { resetProductForm(); setIsAddDialogOpen(true); }}>
                  <Plus className="h-4 w-4 mr-2" /> Add Product
                </Button>
              </div>

              {products.length === 0 ? (
                <div className="bg-white rounded-lg shadow p-12 text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No products yet</h3>
                  <p className="text-gray-600 mb-4">Get started by adding your first product</p>
                  <Button onClick={() => setIsAddDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" /> Add Product
                  </Button>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                      <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold text-purple-600">{new Intl.NumberFormat('en-KE', { style:'currency', currency:'KES', minimumFractionDigits:0 }).format(product.price)}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {product.inStock ? 'In Stock' : 'Out of Stock'}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditProduct(product)}>
                            <Edit className="h-3 w-3 mr-1" /> Edit
                          </Button>
                          <Button variant="destructive" size="sm" className="flex-1" onClick={() => handleDeleteProduct(product.id)}>
                            <Trash2 className="h-3 w-3 mr-1" /> Delete
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add/Edit Product Dialog */}
              {isAddDialogOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white max-w-2xl w-full rounded-xl p-6 max-h-[90vh] overflow-y-auto">
                    <h3 className="text-xl font-semibold mb-4">{editingProduct ? 'Edit Product' : 'Add New Product'}</h3>

                    <form onSubmit={handleProductSubmit} className="space-y-4">
                      <div>
                        <Label>Product Name *</Label>
                        <Input name="name" value={productForm.name} onChange={handleProductInputChange} required />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Input name="description" value={productForm.description} onChange={handleProductInputChange} />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label>Price (KES) *</Label>
                          <Input type="number" name="price" value={productForm.price} onChange={handleProductInputChange} required />
                        </div>
                        <div>
                          <Label>Category *</Label>
                          <select name="category" value={productForm.category} onChange={handleProductInputChange} className="w-full border rounded px-2 py-1" required>
                            <option value="">Select Category</option>
                            {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <Label>Image URLs (one per line) *</Label>
                        <textarea name="images" value={productForm.images} onChange={handleProductInputChange} rows={4} className="w-full border rounded px-2 py-1" required />
                      </div>
                      <div className="flex gap-4 items-center">
                        <label className="flex items-center gap-2">
                          <input type="checkbox" name="inStock" checked={productForm.inStock} onChange={handleProductInputChange} />
                          In Stock
                        </label>
                        <label className="flex items-center gap-2">
                          <input type="checkbox" name="featured" checked={productForm.featured} onChange={handleProductInputChange} />
                          Featured
                        </label>
                      </div>
                      <div className="flex gap-2 justify-end mt-4">
                        <Button type="button" variant="outline" onClick={() => { setIsAddDialogOpen(false); resetProductForm(); }}>Cancel</Button>
                        <Button type="submit">{editingProduct ? 'Update Product' : 'Add Product'}</Button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default Account;
