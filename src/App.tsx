/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  User,
  Menu,
  X,
  Star,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  RotateCcw,
  Plus,
  Minus,
  Trash2,
  Check,
  CheckCircle2,
  Eye,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Clock,
  Shirt,
  Leaf,
  Diamond,
  Flame,
  Tag,
  Zap,
  Globe,
  Download
} from 'lucide-react';

/* ==========================================================================
   1. BRAND CONFIGURATION (Easily customize everywhere)
   ========================================================================== */
export const BRAND_CONFIG = {
  name: "Zira Fashion",
  shortName: "Zira",
  tagline: "Define Your Style, Own Your World",
  subTagline: "Where comfort meets confidence",
  whatsappNumber: "919876543210", // Digits only with country code
  whatsappDisplayNumber: "+91 98765 43210",
  email: "support@zirafashion.com",
  currency: "₹",
  freeShippingThreshold: 1499,
  socialLinks: {
    instagram: "https://instagram.com/zirafashion",
    twitter: "https://twitter.com/zirafashion",
    facebook: "https://facebook.com/zirafashion"
  }
};

/* ==========================================================================
   2. CATEGORIES DATA
   ========================================================================== */
export interface CategoryItem {
  id: string;
  name: string;
  itemCount: string;
  image: string;
  filterKey: string;
  badge?: string;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "cat-women",
    name: "Women",
    itemCount: "84+ Styles",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80",
    filterKey: "Women",
    badge: "Trending"
  },
  {
    id: "cat-men",
    name: "Men",
    itemCount: "92+ Styles",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
    filterKey: "Men",
    badge: "Popular"
  },
  {
    id: "cat-girls",
    name: "Girls",
    itemCount: "45+ Styles",
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=500&q=80",
    filterKey: "Girls"
  },
  {
    id: "cat-boys",
    name: "Boys",
    itemCount: "50+ Styles",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=500&q=80",
    filterKey: "Boys"
  },
  {
    id: "cat-dresses",
    name: "Dresses",
    itemCount: "38+ Drops",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=500&q=80",
    filterKey: "Dresses"
  },
  {
    id: "cat-hoodies",
    name: "Hoodies",
    itemCount: "68+ Drops",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80",
    filterKey: "Hoodies",
    badge: "Bestseller"
  }
];

/* ==========================================================================
   3. PRODUCTS DATABASE (Streetwear outfits with realistic names & ₹ prices)
   ========================================================================== */
export interface Product {
  id: string;
  name: string;
  category: 'Women' | 'Men' | 'Girls' | 'Boys' | 'Hoodies' | 'T-Shirts' | 'Dresses';
  price: number;
  originalPrice: number;
  image: string;
  galleryImages: string[];
  fabric: string;
  description: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  tag?: 'New' | 'Hot' | 'Limited';
  rating: number;
  reviewsCount: number;
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: "AR-01",
    name: "Graffiti Oversized Purple Hoodie",
    category: "Hoodies",
    price: 2499,
    originalPrice: 3499,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "450 GSM Heavyweight French Terry 100% Organic Cotton",
    description: "The hero streetwear staple. Drop-shoulder relaxed silhouette, kangaroo pocket with hidden earphone pass-through, pre-shrunk fleece interior, and puff-print typography on the chest.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Lavender Purple", hex: "#8A6FD6" },
      { name: "Onyx Black", hex: "#12111A" },
      { name: "Cream White", hex: "#F7F5F0" }
    ],
    tag: "Hot",
    rating: 4.9,
    reviewsCount: 340
  },
  {
    id: "AR-02",
    name: "Globe Print Oversized Boxy Tee",
    category: "T-Shirts",
    price: 1299,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "240 GSM Combed Cotton Single Jersey",
    description: "Boxy streetwear fit featuring our iconic custom globe back print with 'BE YOU. DO YOU. FOR YOU.' manifesto. Thick 1.25-inch ribbed crewneck collar.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Lilac Wash", hex: "#D6C7F7" },
      { name: "Washed Slate", hex: "#2B2836" }
    ],
    tag: "New",
    rating: 4.8,
    reviewsCount: 195
  },
  {
    id: "AR-03",
    name: "Urban Cargo Parachute Joggers",
    category: "Men",
    price: 2199,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "Matte Technical Ripstop Nylon with Water-Repellent Finish",
    description: "Relaxed balloon leg fit with adjustable bungee cord ankle cuffs, 6 utility cargo pockets with matte black snaps, and an elasticated waistband.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Purple Twilight", hex: "#7B5FD0" },
      { name: "Shadow Black", hex: "#12111A" },
      { name: "Cement Grey", hex: "#9CA3AF" }
    ],
    tag: "Hot",
    rating: 4.9,
    reviewsCount: 128
  },
  {
    id: "AR-04",
    name: "Ribbed Knit Streetwear Beanie",
    category: "Women",
    price: 699,
    originalPrice: 999,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "100% Non-Itch Acrylic Soft Rib Knit",
    description: "Fold-over cuff beanie with custom woven rubberized logo badge. Snug yet stretchable fit that retains its structure.",
    sizes: ["One Size"],
    colors: [
      { name: "Lavender", hex: "#8A6FD6" },
      { name: "Jet Black", hex: "#12111A" },
      { name: "Mustard Gold", hex: "#F59E0B" }
    ],
    tag: "New",
    rating: 4.7,
    reviewsCount: 86
  },
  {
    id: "AR-05",
    name: "Tiered Street Tulle Hoodie Dress",
    category: "Dresses",
    price: 2799,
    originalPrice: 3999,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "Organic Fleece Top with Micro-Tulle Skirt Overlay",
    description: "Hybrid high-fashion streetwear. An oversized pullover fleece hoodie blended into a tiered flounce skirt. Edgy, expressive, and comfortable.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Lilac Violet", hex: "#8A6FD6" },
      { name: "Midnight Black", hex: "#12111A" }
    ],
    tag: "Limited",
    rating: 5.0,
    reviewsCount: 74
  },
  {
    id: "AR-06",
    name: "Junior Trendsetter Colorblock Hoodie",
    category: "Girls",
    price: 1599,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "100% Kid-Soft Brushed Cotton Fleece",
    description: "Play-proof cozy hoodie for trendsetting young girls. Pastel lilac and cream paneling with non-scratch inner tags.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    colors: [
      { name: "Lavender Blossom", hex: "#8A6FD6" },
      { name: "Blush Pink", hex: "#F472B6" }
    ],
    rating: 4.8,
    reviewsCount: 62
  },
  {
    id: "AR-07",
    name: "Boys Street Skater Crewneck Sweatshirt",
    category: "Boys",
    price: 1499,
    originalPrice: 2099,
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "Heavyweight 100% Breathable Cotton Looped Fleece",
    description: "Durable reinforced collar and ribbed hem for active movement. Screenprinted graffiti chest graphic.",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-12Y"],
    colors: [
      { name: "Heather Grey", hex: "#9CA3AF" },
      { name: "Purple Shade", hex: "#8A6FD6" },
      { name: "Deep Black", hex: "#12111A" }
    ],
    rating: 4.9,
    reviewsCount: 54
  },
  {
    id: "AR-08",
    name: "Retro Acid-Wash Zip-Up Windbreaker",
    category: "Men",
    price: 2899,
    originalPrice: 4199,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ],
    fabric: "Dobby Weave Lightweight Stormproof Polyester",
    description: "90s archival windbreaker with two-way waterproof zip, breathable mesh back flap vent, and reflective sleeve piping.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Purple Wave", hex: "#8A6FD6" },
      { name: "Onyx Black", hex: "#12111A" }
    ],
    tag: "Hot",
    rating: 4.9,
    reviewsCount: 168
  }
];

/* ==========================================================================
   CART ITEM TYPE
   ========================================================================== */
export interface CartItem {
  id: string; // unique item id = productId + size + color
  productId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

/* ==========================================================================
   CUSTOMER REVIEWS DATA
   ========================================================================== */
export const REVIEWS = [
  {
    id: 1,
    name: "Tara Sen",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    comment: "The oversized tee quality is insane. Heavyweight cotton that doesn't lose shape after washing. Received so many compliments on the purple globe graphic!",
    rating: 5,
    item: "Globe Print Oversized Boxy Tee"
  },
  {
    id: 2,
    name: "Kabir Varma",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    comment: "The Graffiti Hoodie has the perfect boxy silhouette. The 450 GSM fleece feels super luxurious without being overly heavy. 10/10 recommendation.",
    rating: 5,
    item: "Graffiti Oversized Purple Hoodie"
  },
  {
    id: 3,
    name: "Dia & Ria",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    comment: "Fast dispatch and WhatsApp customer support helped us pick the exact oversized fit. Love how Zira Fashion represents unapologetic confidence.",
    rating: 5,
    item: "Urban Cargo Parachute Joggers"
  },
  {
    id: 4,
    name: "Ananya Patel",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
    comment: "The Tiered Street Tulle Hoodie Dress is literally runway quality! The fabric drape is so flattering and the lilac hue is drop-dead gorgeous.",
    rating: 5,
    item: "Tiered Street Tulle Hoodie Dress"
  },
  {
    id: 5,
    name: "Rohan Mehra",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    comment: "Ordered directly through WhatsApp. The team answered sizing questions in under 5 minutes and delivery arrived 2 days ahead of schedule!",
    rating: 5,
    item: "Retro Acid-Wash Zip-Up Windbreaker"
  }
];

/* ==========================================================================
   MAIN APPLICATION
   ========================================================================== */
export default function App() {
  // Navigation & UI States
  const [activeNav, setActiveNav] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [orderConfirmed, setOrderConfirmed] = useState<{ id: string; name: string } | null>(null);

  // Quick View Selectors
  const [quickViewSize, setQuickViewSize] = useState<string>('M');
  const [quickViewColor, setQuickViewColor] = useState<string>('');
  const [quickViewQty, setQuickViewQty] = useState<number>(1);

  // Countdown timer for 30% OFF banner
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 32, seconds: 48 });

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Reviews Carousel Index
  const [reviewIdx, setReviewIdx] = useState(0);

  // Checkout Form State
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    paymentMethod: 'whatsapp'
  });

  // Wishlist in localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('zira_wishlist') || localStorage.getItem('aura_wishlist');
      return saved ? JSON.parse(saved) : ['AR-01'];
    } catch {
      return ['AR-01'];
    }
  });

  // Cart in localStorage (Initial item count = 1 item, matching the screenshot badge "1 item")
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('zira_cart') || localStorage.getItem('aura_cart');
      if (saved) return JSON.parse(saved);
      return [
        {
          id: 'AR-01-L-Lavender Purple',
          productId: 'AR-01',
          name: 'Graffiti Oversized Purple Hoodie',
          price: 2499,
          image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=500&q=80',
          size: 'L',
          color: 'Lavender Purple',
          quantity: 1
        }
      ];
    } catch {
      return [];
    }
  });

  // Countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zira_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('zira_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Toast helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Quick view defaults
  useEffect(() => {
    if (quickViewProduct) {
      setQuickViewSize(quickViewProduct.sizes[0] || 'M');
      setQuickViewColor(quickViewProduct.colors[0]?.name || 'Standard');
      setQuickViewQty(1);
    }
  }, [quickViewProduct]);

  // Cart totals
  const totalCartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  const cartSubtotal = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cart]);

  const isFreeDelivery = cartSubtotal >= BRAND_CONFIG.freeShippingThreshold || cart.length === 0;
  const shippingFee = isFreeDelivery ? 0 : 99;
  const cartGrandTotal = cartSubtotal + shippingFee;

  // Wishlist toggle
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast("Removed from wishlist");
        return prev.filter((id) => id !== productId);
      } else {
        showToast("Saved to your wishlist ❤️");
        return [...prev, productId];
      }
    });
  };

  // Add to Cart
  const handleAddToCart = (product: Product, size?: string, color?: string, qty = 1) => {
    const chosenSize = size || product.sizes[0] || 'M';
    const chosenColor = color || product.colors[0]?.name || 'Standard';
    const cartItemId = `${product.id}-${chosenSize}-${chosenColor}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: cartItemId,
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: chosenSize,
          color: chosenColor,
          quantity: qty
        }
      ];
    });

    showToast(`Added "${product.name}" to cart! 🛍️`);
    setCartOpen(true);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeCartItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    showToast("Item removed from cart");
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesDesc = p.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesDesc) return false;
      }
      if (selectedCategory !== 'All' && p.category !== selectedCategory) {
        return false;
      }
      if (selectedSizeFilter !== 'All' && !p.sizes.includes(selectedSizeFilter)) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedSizeFilter]);

  // WhatsApp Checkout
  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.phone || !checkoutForm.address) {
      showToast("Please provide your name, phone, and delivery address.");
      return;
    }

    const orderId = `ZF-${Math.floor(100000 + Math.random() * 900000)}`;
    let message = `*⚡ NEW ORDER - ${BRAND_CONFIG.name.toUpperCase()} ⚡*\n`;
    message += `*Order ID:* ${orderId}\n`;
    message += `*Customer:* ${checkoutForm.name}\n`;
    message += `*WhatsApp:* ${checkoutForm.phone}\n`;
    message += `*Shipping Address:* ${checkoutForm.address}, ${checkoutForm.city} - ${checkoutForm.pincode}\n`;
    message += `*Payment Mode:* ${checkoutForm.paymentMethod.toUpperCase()}\n\n`;
    message += `*ITEMS ORDERED (${cart.length}):*\n`;

    cart.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}*\n`;
      message += `   Size: ${item.size} | Color: ${item.color} | Qty: ${item.quantity}\n`;
      message += `   Price: ${BRAND_CONFIG.currency}${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });

    message += `\n------------------------\n`;
    message += `*Subtotal:* ${BRAND_CONFIG.currency}${cartSubtotal.toLocaleString('en-IN')}\n`;
    message += `*Express Delivery:* ${shippingFee === 0 ? 'FREE' : `${BRAND_CONFIG.currency}${shippingFee}`}\n`;
    message += `*TOTAL AMOUNT:* ${BRAND_CONFIG.currency}${cartGrandTotal.toLocaleString('en-IN')}\n`;
    message += `------------------------\n`;
    message += `Please confirm availability & dispatch tracking from Zira Fashion. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');

    setOrderConfirmed({ id: orderId, name: checkoutForm.name });
    setCheckoutModalOpen(false);
    setCart([]);
    localStorage.removeItem('zira_cart');
    localStorage.removeItem('aura_cart');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F1FA] text-[#12111A] selection:bg-[#8A6FD6] selection:text-white font-sans antialiased p-0 pb-24 sm:py-6 sm:px-6 sm:pb-6">

      {/* Floating Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#12111A] text-white px-5 py-2.5 rounded-full shadow-2xl flex items-center space-x-2.5 text-xs sm:text-sm font-semibold border border-[#8A6FD6]/50 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#8A6FD6]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ====================================================================
          OUTER WRAPPER: Matches the rounded card aesthetic in screenshot
          ==================================================================== */}
      <div className="max-w-7xl mx-auto bg-white rounded-none sm:rounded-[36px] sm:shadow-xl sm:border border-[#EDE8F7] overflow-hidden">

        {/* ==================================================================
            1. HEADER (Left nav, Centered Bold Logo, Right search/user/cart)
            ================================================================== */}
        <header className="px-4 sm:px-10 py-4 sm:py-5 flex items-center justify-between border-b border-[#F2EEFA] relative z-30">
          
          {/* Left Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs font-semibold text-[#12111A]">
            {[
              { label: 'Shop', action: () => scrollTo('shop-categories') },
              { label: 'New In', action: () => scrollTo('new-arrivals') },
              { label: 'Collections', action: () => scrollTo('express-yourself') },
              { label: 'About', action: () => scrollTo('our-mission') },
              { label: 'Contact', action: () => scrollTo('footer-section') }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  setActiveNav(link.label);
                  link.action();
                }}
                className={`transition-colors hover:text-[#8A6FD6] cursor-pointer ${
                  activeNav === link.label ? 'text-[#8A6FD6] font-bold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
            className="lg:hidden p-2 text-[#12111A] hover:text-[#8A6FD6]"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Centered Logo: Zira Fashion (Using shop's logo colors: primary purple #8A6FD6, deep purple #7252C7, and black #12111A) */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer select-none flex items-center space-x-2 sm:space-x-2.5 group"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#7252C7] to-[#8A6FD6] text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <span className="font-black text-sm sm:text-base tracking-tighter">Z</span>
            </div>
            <div className="text-left leading-none">
              <div className="font-black text-lg sm:text-xl tracking-tight text-[#12111A] group-hover:text-[#8A6FD6] transition-colors flex items-center space-x-1">
                <span>ZIRA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8A6FD6]" />
              </div>
              <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] text-[#8A6FD6]">
                FASHION
              </div>
            </div>
          </div>

          {/* Right Action Controls: Search, User Avatar, Pill Cart Button */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            {/* Search Icon */}
            <button
              onClick={() => {
                const el = document.getElementById('search-input-field');
                if (el) el.focus();
                scrollTo('new-arrivals');
              }}
              aria-label="Search"
              className="p-2 hover:bg-[#F4F1FA] text-[#12111A] rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User Avatar */}
            <div
              onClick={() => showToast("VIP Trendsetter Profile: Active.")}
              className="w-8 h-8 rounded-full overflow-hidden border border-[#EDE8F7] cursor-pointer hover:ring-2 hover:ring-[#8A6FD6] transition-all hidden sm:block"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="User profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Pill-shaped Cart Button: e.g. "1 item" (Exact match to screenshot!) */}
            <button
              onClick={() => setCartOpen(true)}
              className="px-4 py-2 rounded-full border border-[#8A6FD6]/40 hover:border-[#8A6FD6] bg-[#F4F0FD] hover:bg-[#ECE6FA] transition-all flex items-center space-x-2 text-xs font-bold text-[#8A6FD6] shadow-2xs cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-[#8A6FD6]" />
              <span>{totalCartCount} {totalCartCount === 1 ? 'item' : 'items'}</span>
            </button>

          </div>
        </header>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden flex">
            <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setMobileMenuOpen(false)} />
            <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl p-6 z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#7252C7] to-[#8A6FD6] text-white flex items-center justify-center font-black text-xs shadow-xs">
                      Z
                    </div>
                    <div className="leading-none">
                      <span className="font-black text-base tracking-tight text-[#12111A]">ZIRA</span>
                      <span className="text-[#8A6FD6] font-bold text-[10px] ml-1 uppercase tracking-wider">FASHION</span>
                    </div>
                  </div>
                  <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-gray-500">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="mt-6 flex flex-col space-y-3 font-semibold text-sm">
                  {['Shop', 'New In', 'Collections', 'About', 'Contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        setActiveNav(item);
                        setMobileMenuOpen(false);
                        if (item === 'Shop') scrollTo('shop-categories');
                        if (item === 'New In') scrollTo('new-arrivals');
                        if (item === 'Collections') scrollTo('express-yourself');
                        if (item === 'About') scrollTo('our-mission');
                        if (item === 'Contact') scrollTo('footer-section');
                      }}
                      className="text-left py-2.5 px-3 rounded-xl hover:bg-[#F4F1FA] text-[#12111A] flex items-center justify-between"
                    >
                      <span>{item}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setWishlistOpen(true);
                  }}
                  className="w-full py-2.5 mb-2 rounded-xl bg-[#F4F1FA] text-[#12111A] text-xs font-bold flex items-center justify-center space-x-2"
                >
                  <Heart className="w-4 h-4 text-[#8A6FD6]" />
                  <span>My Wishlist ({wishlist.length})</span>
                </button>

                <a
                  href="/zira-fashion-source-code.zip"
                  download="zira-fashion-source-code.zip"
                  className="w-full py-2.5 mb-2 rounded-xl bg-[#8A6FD6] text-white text-xs font-bold flex items-center justify-center space-x-2 shadow-xs"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Download Code (.ZIP)</span>
                </a>

                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=Hi%20${BRAND_CONFIG.name},%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            2. HERO SECTION (Compact mobile layout, headline above the fold)
            ================================================================== */}
        <section className="relative px-4 sm:px-8 lg:px-10 pt-5 sm:pt-8 pb-8 sm:pb-10 overflow-hidden">
          
          {/* Top Big Typography Row (Compact 2-column layout on mobile so both lines fit above the fold) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 items-end relative z-10 mb-5 sm:mb-[-50px] lg:mb-[-75px]">
            
            {/* Left Headline: "Define Your STYLE" */}
            <div className="text-left">
              <h2 className="font-extrabold italic text-lg sm:text-3xl lg:text-5xl text-[#12111A] tracking-tight leading-none mb-0.5 sm:mb-1">
                Define Your
              </h2>
              <div className="text-[#8A6FD6] font-black text-3xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-none">
                STYLE
              </div>
            </div>

            {/* Right Headline: "Own Your WORLD ✦" */}
            <div className="text-right flex flex-col items-end">
              <div className="inline-flex items-center space-x-1 sm:space-x-2">
                <h2 className="font-extrabold italic text-lg sm:text-3xl lg:text-5xl text-[#12111A] tracking-tight leading-none">
                  Own Your
                </h2>
                {/* 8-point Purple Star Icon */}
                <Sparkles className="w-3.5 h-3.5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#8A6FD6] animate-pulse shrink-0" />
              </div>
              <div className="text-[#8A6FD6] font-black text-3xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-none">
                WORLD
              </div>
            </div>

          </div>

          {/* Main Purple Rounded Card with Overlapping Model */}
          <div className="relative mt-2 sm:mt-6 lg:mt-8 rounded-[24px] sm:rounded-[32px] bg-[#8A6FD6] text-white p-4 sm:p-8 lg:p-10 pt-4 sm:pt-6 lg:pt-10 overflow-hidden shadow-lg sm:min-h-[460px] flex flex-col justify-between">
            
            {/* Organic soft purple blob accents in background */}
            <div className="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-[#9B81E2] opacity-40 blur-2xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#7B5FD0] opacity-50 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-[#7252C7] opacity-60 blur-3xl pointer-events-none" />

            {/* Model Image: On mobile sits at the top overlapping the purple panel top edge; on desktop absolute centered */}
            <div className="relative mt-0 sm:-mt-16 lg:mt-0 lg:absolute lg:inset-x-0 lg:-top-24 flex items-end justify-center pointer-events-none z-20 mb-6 lg:mb-0">
              <div className="relative w-full sm:w-64 lg:w-[420px] flex flex-col items-center">
                
                {/* Floating Oval Wireframe Line Accents Behind Head */}
                <div className="absolute -top-4 -left-4 w-full h-28 sm:h-36 pointer-events-none z-0 opacity-70">
                  <svg viewBox="0 0 300 140" fill="none" className="w-full h-full stroke-white/60">
                    <ellipse cx="150" cy="70" rx="130" ry="45" strokeWidth="1.5" transform="rotate(-8 150 70)" />
                    <ellipse cx="150" cy="70" rx="140" ry="50" strokeWidth="1" strokeDasharray="4 4" transform="rotate(12 150 70)" />
                  </svg>
                </div>

                {/* Model Image with Back Streetwear Graphic */}
                <div className="relative z-10 w-full overflow-hidden flex justify-center">
                  <div className="relative w-full rounded-2xl sm:rounded-t-3xl sm:rounded-b-none overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
                      alt={`${BRAND_CONFIG.name} Streetwear Model`}
                      className="w-full aspect-[4/5] sm:aspect-auto sm:h-[320px] lg:h-[460px] object-cover object-top"
                    />

                    {/* Small "New Collection" Tag at bottom corner (unobtrusive, does not cover the outfit) */}
                    <div className="absolute bottom-2.5 left-2.5 z-20 pointer-events-auto">
                      <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold tracking-wider uppercase border border-white/20 shadow-md">
                        <Sparkles className="w-3 h-3 text-[#8A6FD6]" />
                        <span>Zira Fashion Drop</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Inner Content: Positioned directly below model on mobile, and in two balanced columns on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-30">
              
              {/* Left Column in Purple Panel */}
              <div className="lg:col-span-5 text-left flex flex-col justify-between h-full space-y-6">
                <div>
                  {/* "New Collection" label */}
                  <div className="inline-flex items-center space-x-1.5 text-xs font-semibold bg-white/15 backdrop-blur-md px-3.5 py-1 rounded-full text-white mb-4 border border-white/20">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span>New Collection</span>
                  </div>

                  {/* Heading "Where Comfort Meets Confidence" */}
                  <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight mb-3 max-w-sm">
                    Where Comfort Meets Confidence
                  </h3>

                  {/* One line of text */}
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-md mb-6 font-normal">
                    Elevate your everyday look with pieces that speak you.
                  </p>

                  {/* Black "Explore Now" pill button with arrow */}
                  <button
                    onClick={() => scrollTo('new-arrivals')}
                    className="px-6 min-h-[48px] bg-black hover:bg-gray-900 text-white rounded-full font-bold text-xs uppercase tracking-wider flex items-center space-x-2 shadow-lg transition-transform duration-150 ease-out sm:hover:scale-105 active:scale-[0.97] cursor-pointer w-fit"
                  >
                    <span>Explore Now</span>
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                </div>

                {/* "Loved by 20K+ Trendsetters" chip with 3 round avatars */}
                <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 flex items-center space-x-3 w-full sm:w-fit shadow-md">
                  <div className="flex -space-x-2">
                    <img
                      className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar 1"
                    />
                    <img
                      className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar 2"
                    />
                    <img
                      className="w-7 h-7 rounded-full ring-2 ring-white object-cover"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar 3"
                    />
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs font-semibold text-white">
                    <span>Loved by 20K+ Trendsetters</span>
                    <span>♥</span>
                  </div>
                </div>

              </div>

              {/* Middle Space for Overlapping Model (Desktop) */}
              <div className="hidden lg:block lg:col-span-2" />

              {/* Right Column in Purple Panel */}
              <div className="lg:col-span-5 flex flex-col justify-between items-stretch lg:items-end space-y-6">
                
                {/* 3 Icons Row: Premium Quality, Sustainable Fashion, Limited Edition */}
                <div className="grid grid-cols-3 gap-2 w-full lg:w-auto lg:flex lg:items-center lg:gap-8 text-center text-white">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center mb-1">
                      <Shirt className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight">Premium<br />Quality</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center mb-1">
                      <Leaf className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight">Sustainable<br />Fashion</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center mb-1">
                      <Diamond className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-bold tracking-tight">Limited<br />Edition</span>
                  </div>
                </div>

                {/* "Featured Look" Card with product image, name, price in ₹ and small cart pill */}
                <div className="w-full sm:w-auto">
                  <span className="text-xs font-bold text-white/90 block mb-2 text-left lg:text-right">
                    Featured Look
                  </span>
                  
                  <div className="bg-white rounded-2xl p-3 sm:p-4 text-[#12111A] shadow-2xl w-full sm:w-60 flex flex-col justify-between border border-white/20">
                    <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F4F1FA] mb-2.5">
                      <img
                        src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80"
                        alt="Graffiti Hoodie"
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform"
                      />
                    </div>

                    <div className="mb-2 text-left">
                      <h4 className="font-bold text-xs sm:text-sm text-[#12111A] line-clamp-1">Graffiti Hoodie</h4>
                      <p className="text-[10px] text-gray-500">Streetwear Essential</p>
                    </div>

                    {/* Purple Pill Price Button with Cart Icon */}
                    <button
                      onClick={() => handleAddToCart(PRODUCTS_DATA[0])}
                      className="w-full min-h-[48px] bg-[#8A6FD6] hover:bg-[#7252C7] text-white rounded-full font-bold text-sm flex items-center justify-center space-x-1.5 shadow-sm transition-[transform,background-color] duration-150 ease-out active:scale-[0.97] cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{BRAND_CONFIG.currency}2,499</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ==================================================================
            1. SHOP BY CATEGORY SECTION (Horizontal scroll cards: Women, Men, Girls, Boys, Dresses, Hoodies)
            ================================================================== */}
        <section id="shop-categories" className="px-4 sm:px-10 py-10 sm:py-12 border-t border-[#F2EEFA]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold text-[#8A6FD6] uppercase tracking-wider block mb-1">
                Curated Drops
              </span>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#12111A]">
                Shop by Category
              </h3>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('All');
                scrollTo('new-arrivals');
              }}
              className="text-xs font-bold text-[#8A6FD6] hover:underline flex items-center space-x-1 cursor-pointer"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="flex space-x-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {CATEGORIES_DATA.map((cat) => (
              <div
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.filterKey);
                  scrollTo('new-arrivals');
                  showToast(`Viewing ${cat.name} Collection`);
                }}
                className="min-w-[160px] sm:min-w-[200px] h-60 rounded-3xl bg-[#F8F6FD] hover:bg-[#ECE6FA] p-4 flex flex-col justify-between cursor-pointer border border-[#EDE8F7] hover:border-[#8A6FD6]/50 shadow-2xs hover:shadow-md transition-all duration-300 group shrink-0"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-gray-500">{cat.itemCount}</span>
                  {cat.badge && (
                    <span className="text-[9px] font-extrabold bg-[#8A6FD6] text-white px-2 py-0.5 rounded-full shadow-2xs">
                      {cat.badge}
                    </span>
                  )}
                </div>

                <div className="h-32 w-full flex items-center justify-center overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="max-h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-2xs"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <h4 className="font-bold text-xs sm:text-sm text-[#12111A] group-hover:text-[#8A6FD6] transition-colors">
                    {cat.name}
                  </h4>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#8A6FD6] shadow-2xs group-hover:bg-[#8A6FD6] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================================
            2. NEW ARRIVALS PRODUCT GRID (2 columns on mobile, wishlist, badge, ₹ price, swatches, Add to Cart)
            ================================================================== */}
        <section id="new-arrivals" className="px-4 sm:px-10 py-10 sm:py-12 border-t border-[#F2EEFA]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#8A6FD6] uppercase tracking-wider block mb-1">
                Seasonal Releases
              </span>
              <h3 className="font-extrabold text-2xl sm:text-3xl text-[#12111A]">
                New Arrivals
              </h3>
            </div>

            {/* Filter Tabs & Size Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Women', 'Men', 'Girls', 'Boys', 'Dresses', 'Hoodies'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#8A6FD6] text-white shadow-xs'
                      : 'bg-[#F4F1FA] text-[#12111A] hover:bg-[#EBE5F7]'
                  }`}
                >
                  {cat}
                </button>
              ))}

              {/* Size Filter Dropdown */}
              <select
                value={selectedSizeFilter}
                onChange={(e) => setSelectedSizeFilter(e.target.value)}
                className="bg-[#F4F1FA] text-xs font-bold text-[#12111A] px-3 py-1.5 rounded-full border border-transparent focus:outline-none focus:border-[#8A6FD6] cursor-pointer"
              >
                <option value="All">All Sizes</option>
                <option value="XS">Size XS</option>
                <option value="S">Size S</option>
                <option value="M">Size M</option>
                <option value="L">Size L</option>
                <option value="XL">Size XL</option>
                <option value="XXL">Size XXL</option>
              </select>
            </div>
          </div>

          {/* Inline Live Search Box */}
          <div className="relative mb-6 max-w-md">
            <input
              id="search-input-field"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hoodies, tees, parachute pants, dresses..."
              className="w-full text-xs pl-9 pr-8 py-2.5 bg-[#F8F6FD] border border-[#EDE8F7] rounded-full focus:outline-none focus:border-[#8A6FD6]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3 pointer-events-none" />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 text-gray-400 hover:text-black">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Product Grid: 2 columns on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-[#F8F6FD] rounded-[22px] sm:rounded-[26px] p-2.5 sm:p-4 border border-[#EDE8F7] hover:border-[#8A6FD6] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Image Container with Badges */}
                  <div
                    onClick={() => setQuickViewProduct(product)}
                    className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-white mb-2.5 cursor-pointer"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Tag badge */}
                    {product.tag && (
                      <span className={`absolute top-2 left-2 text-[8px] sm:text-[10px] font-extrabold uppercase px-2 sm:px-2.5 py-0.5 rounded-full shadow-xs z-10 ${
                        product.tag === 'Hot'
                          ? 'bg-[#8A6FD6] text-white'
                          : product.tag === 'New'
                          ? 'bg-black text-white'
                          : 'bg-[#FF6B6B] text-white'
                      }`}>
                        {product.tag}
                      </span>
                    )}

                    {/* Wishlist Heart */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }}
                      aria-label="Wishlist"
                      className="absolute top-2 right-2 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white text-gray-700 hover:text-[#8A6FD6] shadow-sm transition-transform active:scale-90 z-10 cursor-pointer"
                    >
                      <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-[#8A6FD6] text-[#8A6FD6]' : ''}`} />
                    </button>

                    {/* Quick View Overlay on hover (desktop) */}
                    <div className="absolute inset-x-2 bottom-2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQuickViewProduct(product);
                        }}
                        className="w-full py-2 bg-white/95 hover:bg-white text-[#12111A] text-xs font-bold rounded-xl shadow-md flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-0.5 sm:p-1 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center text-[9px] sm:text-[10px] text-gray-500 mb-1">
                        <span className="font-bold text-[#8A6FD6]">{product.category}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-[#8A6FD6] text-[#8A6FD6]" />
                          <span>{product.rating}</span>
                        </div>
                      </div>

                      <h4
                        onClick={() => setQuickViewProduct(product)}
                        className="font-bold text-xs sm:text-sm text-[#12111A] hover:text-[#8A6FD6] transition-colors cursor-pointer line-clamp-1 mb-1"
                      >
                        {product.name}
                      </h4>

                      {/* Price in ₹ */}
                      <div className="flex items-baseline space-x-1.5 mb-2">
                        <span className="font-extrabold text-xs sm:text-base text-[#12111A]">
                          {BRAND_CONFIG.currency}{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-[10px] sm:text-xs text-gray-400 line-through">
                            {BRAND_CONFIG.currency}{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      {/* Color Swatches */}
                      <div className="flex items-center space-x-1 sm:space-x-1.5 mb-2.5">
                        {product.colors.map((c, i) => (
                          <span
                            key={i}
                            title={c.name}
                            className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-gray-300"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Full-width Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-2 sm:py-2.5 bg-[#8A6FD6] hover:bg-[#7252C7] text-white rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1 sm:space-x-1.5 shadow-xs transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
            3. OFFER BANNER WITH COUNTDOWN TIMER (Purple gradient + rounded style)
            ================================================================== */}
        <section id="offer-banner" className="px-4 sm:px-10 py-10 border-t border-[#F2EEFA]">
          <div className="rounded-[28px] sm:rounded-3xl bg-gradient-to-r from-[#8A6FD6] via-[#7B5FD0] to-[#5F40C0] text-white p-7 sm:p-12 text-center relative overflow-hidden shadow-lg">
            
            {/* Soft decorative background circles */}
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-black/20 blur-2xl pointer-events-none" />

            <span className="text-[11px] font-extrabold uppercase tracking-widest bg-white/20 px-3.5 py-1 rounded-full inline-block mb-3 border border-white/20">
              ⚡ Limited Time Offer
            </span>

            <h3 className="font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-2">
              Up To 30% OFF
            </h3>

            <p className="text-xs sm:text-sm text-white/90 max-w-md mx-auto mb-6">
              Use promo code <span className="font-bold text-[#FFD700] bg-black/30 px-2 py-0.5 rounded-md">STREET30</span> at checkout for instant savings.
            </p>

            {/* Live Ticking Countdown */}
            <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-6">
              <div className="bg-black/35 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-center min-w-[56px]">
                <span className="font-black text-xl sm:text-2xl">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] block text-white/70 uppercase font-medium">Hours</span>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-black/35 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-center min-w-[56px]">
                <span className="font-black text-xl sm:text-2xl">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] block text-white/70 uppercase font-medium">Mins</span>
              </div>
              <span className="text-xl font-bold">:</span>
              <div className="bg-black/35 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-center min-w-[56px]">
                <span className="font-black text-xl sm:text-2xl">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] block text-white/70 uppercase font-medium">Secs</span>
              </div>
            </div>

            <button
              onClick={() => {
                showToast("Promo code STREET30 copied & applied!");
                scrollTo('new-arrivals');
              }}
              className="px-8 py-3 bg-white text-[#8A6FD6] hover:bg-gray-100 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg transition-transform hover:scale-105 cursor-pointer"
            >
              Grab 30% Deal
            </button>
          </div>
        </section>

        {/* ==================================================================
            4. CUSTOMER REVIEWS CAROUSEL (Purple & white rounded style)
            ================================================================== */}
        <section id="customer-reviews" className="px-4 sm:px-10 py-10 sm:py-12 border-t border-[#F2EEFA]">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold text-[#8A6FD6] uppercase tracking-wider block mb-1">
              Community Voices
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-[#12111A]">
              Loved by 20K+ Trendsetters
            </h3>
          </div>

          {/* Testimonial Interactive Carousel */}
          <div className="bg-[#F8F6FD] rounded-[28px] sm:rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto border border-[#EDE8F7] text-center relative shadow-xs">
            
            {/* Carousel Previous Button */}
            <button
              onClick={() => setReviewIdx((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1))}
              aria-label="Previous Review"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#12111A] hover:text-[#8A6FD6] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer z-10"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Carousel Next Button */}
            <button
              onClick={() => setReviewIdx((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1))}
              aria-label="Next Review"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#12111A] hover:text-[#8A6FD6] shadow-md flex items-center justify-center transition-transform hover:scale-110 cursor-pointer z-10"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Active Review Slide */}
            <div className="px-6 sm:px-10">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[#8A6FD6] shadow-sm">
                <img
                  src={REVIEWS[reviewIdx].avatar}
                  alt={REVIEWS[reviewIdx].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 5 Purple Stars */}
              <div className="flex justify-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#8A6FD6] text-[#8A6FD6]" />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed mb-4 max-w-lg mx-auto">
                "{REVIEWS[reviewIdx].comment}"
              </p>

              <h4 className="font-extrabold text-xs sm:text-sm text-[#12111A]">{REVIEWS[reviewIdx].name}</h4>
              <div className="inline-flex items-center space-x-1.5 text-[10px] text-gray-500 mt-0.5">
                <span className="font-semibold text-[#8A6FD6]">{REVIEWS[reviewIdx].role}</span>
                <span>•</span>
                <span>{REVIEWS[reviewIdx].item}</span>
              </div>
            </div>

            {/* Slider Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIdx(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    reviewIdx === i ? 'w-6 bg-[#8A6FD6]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================================
            5. NEWSLETTER SIGNUP (Purple & white rounded style)
            ================================================================== */}
        <section id="newsletter-signup" className="px-4 sm:px-10 py-10 sm:py-12 border-t border-[#F2EEFA]">
          <div className="rounded-[28px] sm:rounded-3xl bg-[#F8F6FD] border border-[#EDE8F7] p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xs">
            <span className="text-xs font-bold text-[#8A6FD6] uppercase tracking-wider block mb-1">
              Join The Movement
            </span>
            <h3 className="font-extrabold text-2xl sm:text-3xl text-[#12111A] mb-2">
              Get 10% Off Your First Order
            </h3>
            <p className="text-xs text-gray-500 mb-6 max-w-md mx-auto">
              Subscribe for VIP limited drop notifications and exclusive street styling previews.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-[#8A6FD6]/10 text-[#8A6FD6] p-3 rounded-2xl text-xs font-bold border border-[#8A6FD6]/30 max-w-md mx-auto">
                ✓ You're in! Use coupon code <strong className="font-extrabold">TRENDSETTER10</strong> for 10% off.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!newsletterEmail) return;
                  setNewsletterSubscribed(true);
                  showToast("Subscribed! Coupon TRENDSETTER10 unlocked 🎉");
                }}
                className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 px-4 py-3 rounded-full bg-white border border-[#EDE8F7] text-xs focus:outline-none focus:border-[#8A6FD6] shadow-2xs"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#8A6FD6] hover:bg-[#7252C7] text-white text-xs font-bold uppercase rounded-full shadow-sm cursor-pointer transition-colors shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ==================================================================
            6. FOOTER WITH SOCIAL ICONS
            ================================================================== */}
        <footer id="footer-section" className="px-4 sm:px-10 py-10 sm:py-12 border-t border-[#F2EEFA] text-xs text-gray-500 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-100">
            
            {/* Col 1: Brand & Social Icons */}
            <div>
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-2.5 mb-3 cursor-pointer group w-fit"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7252C7] to-[#8A6FD6] text-white flex items-center justify-center font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
                  Z
                </div>
                <div className="leading-none">
                  <div className="font-black text-lg text-[#12111A] tracking-tight group-hover:text-[#8A6FD6] transition-colors flex items-center space-x-1">
                    <span>ZIRA</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A6FD6]" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-[0.25em] text-[#8A6FD6]">
                    FASHION
                  </div>
                </div>
              </div>
              <p className="leading-relaxed text-gray-500 mb-4">
                Define your style, own your world. Modern streetwear essentials handcrafted with heavyweight organic fabrics by Zira Fashion.
              </p>
              
              {/* Social Icons with purple rounded badges */}
              <div className="flex space-x-3 text-gray-600">
                <a
                  href={BRAND_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-[#F4F1FA] hover:bg-[#8A6FD6] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BRAND_CONFIG.socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-[#F4F1FA] hover:bg-[#8A6FD6] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#F4F1FA] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h5 className="font-bold text-[#12111A] uppercase text-xs mb-3">Quick Links</h5>
              <ul className="space-y-2">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#8A6FD6] cursor-pointer">Home</button></li>
                <li><button onClick={() => scrollTo('shop-categories')} className="hover:text-[#8A6FD6] cursor-pointer">Shop Categories</button></li>
                <li><button onClick={() => scrollTo('new-arrivals')} className="hover:text-[#8A6FD6] cursor-pointer">New Arrivals</button></li>
                <li><button onClick={() => scrollTo('offer-banner')} className="hover:text-[#8A6FD6] cursor-pointer">Special Offers</button></li>
                <li><button onClick={() => scrollTo('customer-reviews')} className="hover:text-[#8A6FD6] cursor-pointer">Customer Reviews</button></li>
              </ul>
            </div>

            {/* Col 3: Customer Care */}
            <div>
              <h5 className="font-bold text-[#12111A] uppercase text-xs mb-3">Customer Care</h5>
              <ul className="space-y-2">
                <li><span className="hover:text-[#8A6FD6] cursor-pointer" onClick={() => showToast("Free delivery on all orders above ₹1,499")}>Shipping &amp; Delivery</span></li>
                <li><span className="hover:text-[#8A6FD6] cursor-pointer" onClick={() => showToast("Easy 7-day exchanges via WhatsApp")}>7-Day Returns</span></li>
                <li><span className="hover:text-[#8A6FD6] cursor-pointer" onClick={() => showToast("Oversized streetwear boxy fit charts available")}>Size Guide</span></li>
                <li><a href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}`} target="_blank" rel="noreferrer" className="hover:text-[#8A6FD6]">WhatsApp Support</a></li>
              </ul>
            </div>

            {/* Col 4: Payment Methods */}
            <div>
              <h5 className="font-bold text-[#12111A] uppercase text-xs mb-3">Payment Methods</h5>
              <div className="flex flex-wrap gap-1.5 text-[10px] font-bold text-gray-600 mb-3">
                <span className="px-2 py-1 bg-[#F4F1FA] rounded">UPI / GPay</span>
                <span className="px-2 py-1 bg-[#F4F1FA] rounded">Visa</span>
                <span className="px-2 py-1 bg-[#F4F1FA] rounded">Mastercard</span>
                <span className="px-2 py-1 bg-[#F4F1FA] rounded">RuPay</span>
                <span className="px-2 py-1 bg-[#8A6FD6]/10 text-[#8A6FD6] rounded">COD Available</span>
              </div>
              <p className="text-[11px] text-gray-400">All transactions are encrypted with 256-bit SSL.</p>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-3">
            <p>© {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/zira-fashion-source-code.zip"
                download="zira-fashion-source-code.zip"
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#8A6FD6] text-white hover:bg-[#7252C7] font-bold text-[11px] transition-transform hover:scale-105 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Source Code (.ZIP)</span>
              </a>
              <span className="hover:text-[#8A6FD6] cursor-pointer" onClick={() => showToast("Privacy Policy")}>Privacy Policy</span>
              <span className="hover:text-[#8A6FD6] cursor-pointer" onClick={() => showToast("Terms of Service")}>Terms of Service</span>
            </div>
          </div>
        </footer>

      </div>

      {/* ====================================================================
          FLOATING WHATSAPP CHAT BUTTON (Bottom Right)
          ==================================================================== */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center group">
        <div className="hidden sm:block mr-3 bg-white text-[#12111A] px-3.5 py-1.5 rounded-full shadow-lg border border-[#EDE8F7] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Need sizing advice? Chat on WhatsApp 💬
        </div>
        <a
          href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=Hi%20${BRAND_CONFIG.name}!%20I%20have%20an%20inquiry%20regarding%20your%20streetwear%20collection.`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Stylist"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20BE5B] text-white flex items-center justify-center shadow-2xl transition-transform duration-150 ease-out sm:hover:scale-110 active:scale-95 relative"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#8A6FD6] border-2 border-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#8A6FD6] border-2 border-white" />
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* ====================================================================
          QUICK-VIEW POPUP MODAL (Sizes XS-XXL, Colors, Quantity, WhatsApp)
          ==================================================================== */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setQuickViewProduct(null)} />
          <div className="relative bg-white text-[#12111A] rounded-3xl max-w-2xl w-full p-6 sm:p-8 z-10 shadow-2xl border border-[#EDE8F7] max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              
              {/* Product Image */}
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#F8F6FD] border border-[#EDE8F7]">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Product Details */}
              <div>
                <span className="text-xs font-bold text-[#8A6FD6] uppercase tracking-wider block mb-1">
                  {quickViewProduct.category}
                </span>

                <h3 className="font-extrabold text-xl sm:text-2xl text-[#12111A] mb-2">
                  {quickViewProduct.name}
                </h3>

                {/* Price */}
                <div className="flex items-center space-x-3 mb-3">
                  <span className="font-extrabold text-2xl text-[#12111A]">
                    {BRAND_CONFIG.currency}{quickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                  {quickViewProduct.originalPrice > quickViewProduct.price && (
                    <span className="text-sm text-gray-400 line-through">
                      {BRAND_CONFIG.currency}{quickViewProduct.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  <span className="text-xs font-bold bg-[#8A6FD6]/15 text-[#8A6FD6] px-2 py-0.5 rounded-full">
                    Save {Math.round(((quickViewProduct.originalPrice - quickViewProduct.price) / quickViewProduct.originalPrice) * 100)}%
                  </span>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {quickViewProduct.description}
                </p>

                {/* Color Selector */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-[#12111A] block mb-1.5">
                    Color: <strong className="text-[#8A6FD6]">{quickViewColor}</strong>
                  </span>
                  <div className="flex space-x-2">
                    {quickViewProduct.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setQuickViewColor(c.name)}
                        className={`px-3 py-1 rounded-full border text-xs font-semibold flex items-center space-x-1.5 ${
                          quickViewColor === c.name
                            ? 'border-[#8A6FD6] bg-[#8A6FD6]/10 text-[#8A6FD6]'
                            : 'border-gray-200 text-gray-600'
                        }`}
                      >
                        <span className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c.hex }} />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-[#12111A] block mb-1.5">
                    Size: <strong className="text-[#8A6FD6]">{quickViewSize}</strong>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuickViewSize(s)}
                        className={`px-3 py-1 rounded-xl border text-xs font-bold transition-all ${
                          quickViewSize === s
                            ? 'bg-[#8A6FD6] text-white border-[#8A6FD6]'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-[#8A6FD6]'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center space-x-3 mb-5">
                  <span className="text-xs font-bold text-[#12111A]">Quantity:</span>
                  <div className="flex items-center border border-gray-200 rounded-full bg-[#F4F1FA]">
                    <button
                      onClick={() => setQuickViewQty((q) => Math.max(1, q - 1))}
                      className="px-3 py-1 text-xs font-bold text-gray-600 hover:text-black"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-bold text-[#12111A]">{quickViewQty}</span>
                    <button
                      onClick={() => setQuickViewQty((q) => q + 1)}
                      className="px-3 py-1 text-xs font-bold text-gray-600 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct, quickViewSize, quickViewColor, quickViewQty);
                      setQuickViewProduct(null);
                    }}
                    className="w-full py-3 bg-[#8A6FD6] hover:bg-[#7252C7] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart • {BRAND_CONFIG.currency}{(quickViewProduct.price * quickViewQty).toLocaleString('en-IN')}</span>
                  </button>

                  <a
                    href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=Hi%20${BRAND_CONFIG.name}!%20I%20would%20like%20to%20order%20${encodeURIComponent(quickViewProduct.name)}%20(Size:%20${quickViewSize},%20Color:%20${quickViewColor},%20Qty:%20${quickViewQty})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center space-x-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          CART DRAWER (Sliding from Right, Header pill updates)
          ==================================================================== */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setCartOpen(false)} />
          <div className="relative w-full max-w-md bg-white text-[#12111A] h-full shadow-2xl z-10 flex flex-col justify-between border-l border-[#EDE8F7]">
            
            {/* Header */}
            <div className="p-5 bg-white border-b border-[#F2EEFA] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-[#8A6FD6]" />
                <h3 className="font-extrabold text-base text-[#12111A]">
                  Shopping Bag ({totalCartCount})
                </h3>
              </div>
              <button onClick={() => setCartOpen(false)} className="p-1 rounded-full text-gray-400 hover:text-black">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Free shipping bar */}
            <div className="bg-[#F8F6FD] px-5 py-2.5 text-xs text-[#8A6FD6] font-bold text-center border-b border-[#EDE8F7]">
              {isFreeDelivery ? (
                <span>🎉 You unlocked FREE Express Street Delivery!</span>
              ) : (
                <span>
                  Add {BRAND_CONFIG.currency}{(BRAND_CONFIG.freeShippingThreshold - cartSubtotal).toLocaleString('en-IN')} more for <strong>FREE Delivery</strong>
                </span>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5 space-y-3.5">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <h4 className="font-bold text-base text-[#12111A]">Your bag is empty</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-6">Discover the new oversized drops and urban essentials.</p>
                  <button
                    onClick={() => {
                      setCartOpen(false);
                      scrollTo('new-arrivals');
                    }}
                    className="px-6 py-2.5 bg-[#8A6FD6] text-white text-xs font-bold rounded-full uppercase"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-3.5 bg-[#F8F6FD] p-3.5 rounded-2xl border border-[#EDE8F7]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover object-top rounded-xl border border-white"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-xs sm:text-sm text-[#12111A] line-clamp-1">{item.name}</h4>
                          <button onClick={() => removeCartItem(item.id)} className="text-gray-400 hover:text-red-500">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {item.size} • {item.color}
                        </p>
                        <p className="text-xs font-extrabold text-[#8A6FD6] mt-1">
                          {BRAND_CONFIG.currency}{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>

                      {/* Stepper */}
                      <div className="flex items-center space-x-2 mt-2">
                        <div className="flex items-center border border-gray-200 rounded-full bg-white">
                          <button
                            onClick={() => updateCartQty(item.id, -1)}
                            className="px-2 py-0.5 text-xs text-gray-500 hover:text-black font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-bold text-[#12111A]">{item.quantity}</span>
                          <button
                            onClick={() => updateCartQty(item.id, 1)}
                            className="px-2 py-0.5 text-xs text-gray-500 hover:text-black font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-5 bg-white border-t border-[#F2EEFA] space-y-3">
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-bold text-[#12111A]">{BRAND_CONFIG.currency}{cartSubtotal.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Express Delivery:</span>
                    <span>{isFreeDelivery ? <strong className="text-[#8A6FD6]">FREE</strong> : `${BRAND_CONFIG.currency}${shippingFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-extrabold text-[#12111A] pt-2 border-t border-gray-100">
                    <span>Total Amount:</span>
                    <span className="text-[#8A6FD6]">{BRAND_CONFIG.currency}{cartGrandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    setCheckoutModalOpen(true);
                  }}
                  className="w-full py-3.5 bg-[#8A6FD6] hover:bg-[#7252C7] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp • {BRAND_CONFIG.currency}{cartGrandTotal.toLocaleString('en-IN')}</span>
                </button>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ====================================================================
          CHECKOUT MODAL (WhatsApp Dispatch)
          ==================================================================== */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setCheckoutModalOpen(false)} />
          <div className="relative bg-white text-[#12111A] rounded-3xl max-w-md w-full p-6 sm:p-8 z-10 shadow-2xl border border-[#EDE8F7] max-h-[90vh] overflow-y-auto">
            <button onClick={() => setCheckoutModalOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-5">
              <span className="font-black text-xl text-[#8A6FD6] uppercase tracking-tight block">
                {BRAND_CONFIG.name}
              </span>
              <h3 className="font-extrabold text-xl text-[#12111A] mt-1">Streetwear WhatsApp Checkout</h3>
              <p className="text-xs text-gray-500 mt-1">
                Enter your details to generate your confirmed order on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSendWhatsAppOrder} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-[#12111A] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  value={checkoutForm.name}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                  placeholder="e.g. Samaira Roy"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#F8F6FD] border border-[#EDE8F7] focus:outline-none focus:border-[#8A6FD6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12111A] mb-1">WhatsApp Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={checkoutForm.phone}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#F8F6FD] border border-[#EDE8F7] focus:outline-none focus:border-[#8A6FD6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#12111A] mb-1">Delivery Address *</label>
                <textarea
                  rows={2}
                  required
                  value={checkoutForm.address}
                  onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                  placeholder="Apartment, Street, Landmark"
                  className="w-full text-xs px-3.5 py-2 rounded-xl bg-[#F8F6FD] border border-[#EDE8F7] focus:outline-none focus:border-[#8A6FD6]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#12111A] mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.city}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                    placeholder="e.g. Bangalore"
                    className="w-full text-xs px-3.5 py-2 rounded-xl bg-[#F8F6FD] border border-[#EDE8F7] focus:outline-none focus:border-[#8A6FD6]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#12111A] mb-1">Pincode *</label>
                  <input
                    type="text"
                    required
                    value={checkoutForm.pincode}
                    onChange={(e) => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                    placeholder="560001"
                    className="w-full text-xs px-3.5 py-2 rounded-xl bg-[#F8F6FD] border border-[#EDE8F7] focus:outline-none focus:border-[#8A6FD6]"
                  />
                </div>
              </div>

              <div className="bg-[#F8F6FD] p-3 rounded-xl border border-[#EDE8F7] flex justify-between items-center text-xs">
                <span className="text-gray-500">Total to Pay:</span>
                <span className="font-black text-sm text-[#8A6FD6]">
                  {BRAND_CONFIG.currency}{cartGrandTotal.toLocaleString('en-IN')}
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#25D366] hover:bg-[#20BE5B] text-white rounded-full font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit &amp; Open WhatsApp Order</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ====================================================================
          ORDER SUCCESS MODAL
          ==================================================================== */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setOrderConfirmed(null)} />
          <div className="relative bg-white text-[#12111A] rounded-3xl max-w-sm w-full p-6 text-center z-10 shadow-2xl border border-[#8A6FD6]">
            <div className="w-14 h-14 rounded-full bg-[#8A6FD6]/15 text-[#8A6FD6] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-xl text-[#12111A] mb-1">
              Thank You, {orderConfirmed.name}!
            </h3>
            <p className="text-xs text-gray-600 mb-5 leading-relaxed">
              Order <strong>{orderConfirmed.id}</strong> has been forwarded to our WhatsApp concierge. Our styling team will dispatch your streetwear pieces shortly!
            </p>
            <button
              onClick={() => setOrderConfirmed(null)}
              className="w-full py-2.5 bg-[#8A6FD6] text-white text-xs font-bold rounded-full uppercase"
            >
              Back to Streetwear
            </button>
          </div>
        </div>
      )}

      {/* ====================================================================
          WISHLIST DRAWER
          ==================================================================== */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setWishlistOpen(false)} />
          <div className="relative w-full max-w-md bg-white text-[#12111A] h-full shadow-2xl z-10 flex flex-col justify-between border-l border-[#EDE8F7]">
            
            <div className="p-5 bg-white border-b border-[#F2EEFA] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-[#8A6FD6] fill-[#8A6FD6]" />
                <h3 className="font-extrabold text-base text-[#12111A]">
                  Your Wishlist ({wishlist.length})
                </h3>
              </div>
              <button onClick={() => setWishlistOpen(false)} className="p-1 text-gray-400 hover:text-black">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {wishlist.length === 0 ? (
                <div className="text-center py-20 text-gray-400">
                  <Heart className="w-12 h-12 mx-auto mb-2 opacity-30 text-[#8A6FD6]" />
                  <p className="text-xs">No street favorites saved yet.</p>
                </div>
              ) : (
                PRODUCTS_DATA.filter((p) => wishlist.includes(p.id)).map((p) => (
                  <div key={p.id} className="flex space-x-3 bg-[#F8F6FD] p-3 rounded-2xl border border-[#EDE8F7] items-center">
                    <img src={p.image} alt={p.name} className="w-14 h-18 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-xs text-[#12111A]">{p.name}</h4>
                      <p className="text-xs font-extrabold text-[#8A6FD6]">{BRAND_CONFIG.currency}{p.price.toLocaleString('en-IN')}</p>
                      <button
                        onClick={() => {
                          handleAddToCart(p);
                          toggleWishlist(p.id);
                        }}
                        className="text-[11px] font-bold text-[#8A6FD6] hover:underline mt-1"
                      >
                        + Move to Cart
                      </button>
                    </div>
                    <button onClick={() => toggleWishlist(p.id)} className="text-gray-400 hover:text-red-500 p-1">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 bg-white border-t border-[#F2EEFA]">
              <button
                onClick={() => setWishlistOpen(false)}
                className="w-full py-2.5 bg-[#F4F1FA] text-[#12111A] text-xs font-bold rounded-full uppercase"
              >
                Close Wishlist
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
