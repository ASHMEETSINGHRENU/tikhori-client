import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('tikhori_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('tikhori_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  }, [cartItems]);

  const addToCart = (product, selectedWeightObj, quantity = 1) => {
    const weightLabel = selectedWeightObj?.weight || (product.weights && product.weights[0]?.weight) || '250g';
    const unitPrice = selectedWeightObj?.price || product.price || 145;
    const itemKey = `${product.id}-${weightLabel}`;

    setCartItems(prev => {
      const existingIndex = prev.findIndex(item => item.itemKey === itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            itemKey,
            productId: product.id,
            slug: product.slug,
            name: product.name,
            subtitle: product.subtitle,
            image: product.image,
            weight: weightLabel,
            price: unitPrice,
            quantity: quantity
          }
        ];
      }
    });

    setIsCartOpen(true);
  };

  const updateQuantity = (itemKey, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemKey);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.itemKey === itemKey ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeFromCart = (itemKey) => {
    setCartItems(prev => prev.filter(item => item.itemKey !== itemKey));
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'TIKHORI10' || clean === 'TRADITION10') {
      setAppliedCoupon({ code: clean, discountPercent: 10 });
      setCouponError('');
      return true;
    } else if (clean === 'SPICECLUB15') {
      setAppliedCoupon({ code: clean, discountPercent: 15 });
      setCouponError('');
      return true;
    } else {
      setCouponError('Invalid promo code. Try TIKHORI10 or SPICECLUB15');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    setCouponError('');
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedCoupon ? Math.round((subtotal * appliedCoupon.discountPercent) / 100) : 0;
  const freeShippingThreshold = 499;
  const shippingFee = subtotal === 0 || subtotal >= freeShippingThreshold ? 0 : 50;
  const total = Math.max(0, subtotal - discountAmount + shippingFee);
  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalItemCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        subtotal,
        discountAmount,
        shippingFee,
        total,
        freeShippingThreshold,
        couponCode,
        setCouponCode,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        couponError
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
