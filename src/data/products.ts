export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in KES
  category: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  featured?: boolean;
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "jewelry",
    name: "Maasai Jewelry",
    description: "Handcrafted beadwork and traditional accessories",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600",
    productCount: 4,
  },
  {
    id: "coffee",
    name: "Kenyan Coffee",
    description: "Premium AA grade coffee from the highlands",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600",
    productCount: 3,
  },
  {
    id: "crafts",
    name: "Handmade Crafts",
    description: "Traditional and contemporary Kenyan artistry",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600",
    productCount: 3,
  },
  {
    id: "textiles",
    name: "Textiles & Fabrics",
    description: "Beautiful Kenyan fabrics and clothing",
    image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600",
    productCount: 2,
  },
];

export const products: Product[] = [
  // Jewelry
  {
    id: "1",
    name: "Maasai Beaded Necklace",
    description: "Stunning handcrafted beaded necklace made by Maasai artisans. Each piece is unique, featuring vibrant colors and traditional patterns that tell stories of Maasai culture and heritage. Perfect for adding an authentic African touch to any outfit.",
    price: 3500,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600",
    ],
    inStock: true,
    rating: 4.9,
    reviews: 127,
    featured: true,
    tags: ["handmade", "traditional", "beadwork"],
  },
  {
    id: "2",
    name: "Maasai Beaded Bracelet Set",
    description: "Set of 5 colorful beaded bracelets, each handwoven by skilled Maasai women. The intricate patterns represent unity and strength. Stackable design allows for versatile styling.",
    price: 1800,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
    ],
    inStock: true,
    rating: 4.8,
    reviews: 89,
    tags: ["handmade", "stackable", "colorful"],
  },
  {
    id: "3",
    name: "Maasai Wedding Collar",
    description: "Exquisite ceremonial wedding collar featuring thousands of glass beads in traditional red, blue, and white patterns. A statement piece that celebrates African craftsmanship.",
    price: 12000,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
    ],
    inStock: true,
    rating: 5.0,
    reviews: 34,
    featured: true,
    tags: ["ceremonial", "premium", "traditional"],
  },
  {
    id: "4",
    name: "Beaded Earrings - Sunset",
    description: "Elegant drop earrings inspired by the African sunset. Lightweight design with secure hooks, featuring a gradient of warm orange, red, and gold beads.",
    price: 1200,
    category: "jewelry",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600",
    ],
    inStock: true,
    rating: 4.7,
    reviews: 56,
    tags: ["earrings", "lightweight", "sunset"],
  },

  // Coffee
  {
    id: "5",
    name: "Kenya AA Coffee - 500g",
    description: "Premium single-origin Kenya AA coffee beans from the fertile slopes of Mount Kenya. Known for its bright acidity, full body, and notes of blackcurrant, citrus, and wine. Medium roast for optimal flavor.",
    price: 1500,
    category: "coffee",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600",
    ],
    inStock: true,
    rating: 4.9,
    reviews: 234,
    featured: true,
    tags: ["premium", "single-origin", "mount-kenya"],
  },
  {
    id: "6",
    name: "Nyeri Highlands Coffee - 250g",
    description: "Specialty coffee from the renowned Nyeri region. Tasting notes of tomato, brown sugar, and floral undertones. Perfect for pour-over brewing methods.",
    price: 950,
    category: "coffee",
    images: [
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600",
    ],
    inStock: true,
    rating: 4.8,
    reviews: 112,
    tags: ["specialty", "nyeri", "pour-over"],
  },
  {
    id: "7",
    name: "Kiambu Estate Coffee Gift Set",
    description: "Luxurious gift set featuring 3 varieties of premium Kenyan coffee (250g each), a traditional jebena pot, and hand-carved wooden cups. Perfect for coffee connoisseurs.",
    price: 5500,
    category: "coffee",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600",
    ],
    inStock: true,
    rating: 5.0,
    reviews: 67,
    featured: true,
    tags: ["gift-set", "premium", "collection"],
  },

  // Crafts
  {
    id: "8",
    name: "Kisii Soapstone Sculpture",
    description: "Hand-carved soapstone elephant sculpture from the Kisii region. Each piece is unique, showcasing the natural variations in the stone and the artisan's skill. Approximately 15cm tall.",
    price: 2800,
    category: "crafts",
    images: [
      "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=600",
    ],
    inStock: true,
    rating: 4.7,
    reviews: 45,
    tags: ["soapstone", "sculpture", "kisii"],
  },
  {
    id: "9",
    name: "Woven Sisal Basket - Large",
    description: "Beautiful handwoven sisal basket with leather handles. Made by women's cooperatives using traditional techniques. Perfect for storage or as decorative piece. 40cm diameter.",
    price: 3200,
    category: "crafts",
    images: [
      "https://images.unsplash.com/photo-1590736969955-71cc94801759?w=600",
    ],
    inStock: true,
    rating: 4.8,
    reviews: 78,
    featured: true,
    tags: ["sisal", "handwoven", "storage"],
  },
  {
    id: "10",
    name: "Wooden Giraffe Carving",
    description: "Elegant hand-carved wooden giraffe made from sustainable African mahogany. Detailed craftsmanship showcasing traditional carving techniques. 30cm tall.",
    price: 4500,
    category: "crafts",
    images: [
      "https://images.unsplash.com/photo-1549194898-60ef3d747e69?w=600",
    ],
    inStock: true,
    rating: 4.9,
    reviews: 92,
    tags: ["wood-carving", "giraffe", "mahogany"],
  },

  // Textiles
  {
    id: "11",
    name: "Kikoy Beach Wrap",
    description: "Traditional Kenyan kikoy in vibrant colors. Versatile piece that can be used as a sarong, beach wrap, or home décor. 100% cotton, hand-loomed. 180cm x 110cm.",
    price: 1800,
    category: "textiles",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600",
    ],
    inStock: true,
    rating: 4.6,
    reviews: 156,
    tags: ["kikoy", "beach", "versatile"],
  },
  {
    id: "12",
    name: "Kanga Set - Mama Africa",
    description: "Traditional kanga set featuring bold African prints and Swahili proverb. Two-piece set, perfect for everyday wear or special occasions. 100% cotton.",
    price: 2200,
    category: "textiles",
    images: [
      "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600",
    ],
    inStock: true,
    rating: 4.8,
    reviews: 89,
    featured: true,
    tags: ["kanga", "traditional", "cotton"],
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (categoryId: string) => 
  products.filter(p => p.category === categoryId);

export const getProductById = (id: string) => 
  products.find(p => p.id === id);

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.description.toLowerCase().includes(lowercaseQuery) ||
    p.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};
