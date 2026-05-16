import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import productsData from '../data/products.js';

const ShopContext = createContext(null);

const STORAGE_KEYS = {
  cart: 'lunaCart',
  wishlist: 'lunaWishlist'
};

function safeParse(value, fallback) {
  try {
    return JSON.parse(value) ?? fallback;
  } catch {
    return fallback;
  }
}

function normalizeProduct(item) {
  return {
    id: item.id,
    name: item.title ?? item.name,
    description: item.description,
    category: item.category,
    image: item.thumbnail || item.image || item.img,
    price: item.price,
    oldPrice: Math.round((item.price || 0) * 1.18),
    discount: Math.round(item.discountPercentage ?? item.discount ?? 0),
    rating: item.rating ?? 0,
    reviews:
      typeof item.reviews === 'number'
        ? item.reviews
        : Math.floor((item.rating ?? 4.2) * 18),
    badge: item.discountPercentage || item.discount ? `${Math.round(item.discountPercentage ?? item.discount)}% OFF` : null
  };
}

export function ShopProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState(() => safeParse(localStorage.getItem(STORAGE_KEYS.cart), []));
  const [wishlist, setWishlist] = useState(() => safeParse(localStorage.getItem(STORAGE_KEYS.wishlist), []));

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    fetch('https://dummyjson.com/products?limit=24', { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => {
        const normalized = (data.products || []).map(normalizeProduct);
        if (normalized.length) {
          setProducts(normalized);
        } else {
          setProducts(productsData.map(normalizeProduct));
        }
      })
      .catch(() => {
        setError('Failed to load products. Showing curated collections instead.');
        setProducts(productsData.map(normalizeProduct));
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(wishlist));
  }, [wishlist]);

  const cartCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cart]
  );

  const addToCart = (product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      const next = existing
        ? current.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        : [...current, { ...product, quantity }];
      toast.success(`${product.name} added to cart`);
      return next;
    });
  };

  const removeFromCart = (id) => {
    setCart((current) => current.filter((item) => item.id !== id));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (id, quantity) => {
    setCart((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item))
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((current) => {
      const exists = current.some((item) => item.id === product.id);
      if (exists) {
        toast('Removed from wishlist');
        return current.filter((item) => item.id !== product.id);
      }
      toast.success('Added to wishlist');
      return [...current, product];
    });
  };

  const clearCart = () => {
    setCart([]);
    toast('Cart is now empty');
  };

  const value = {
    products,
    loading,
    error,
    cart,
    wishlist,
    cartCount,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    clearCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used inside ShopProvider');
  }
  return context;
}
