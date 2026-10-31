import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeFromCart,
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
  } = useCart();

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-[#281006]/70 backdrop-blur-sm"
          />

          {/* Slide-over Panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-[#FFFDF9] shadow-2xl flex flex-col justify-between border-l border-[#D9A441]/30"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-[#EDE3D1] bg-[#F8F1E5] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/assets/logo/logo.png" alt="Tikhori" className="w-10 h-10 object-contain drop-shadow-xs" />
                  <div>
                    <h3 className="font-display font-black text-xl text-[#8C2F16] tracking-wide">
                      Your Spice Basket
                    </h3>
                    <p className="text-xs text-[#4A3528]/80 mt-0.5">
                      Your favourite flavours are just a few steps away.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-8 h-8 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#4A3528] hover:text-[#8C2F16] hover:bg-[#8C2F16]/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Free Shipping Progress Indicator */}
              <div className="px-6 py-3 bg-[#402011] text-[#F8F1E5] text-xs">
                <div className="flex items-center justify-between mb-1.5 font-medium">
                  {amountNeededForFreeShipping > 0 ? (
                    <span className="flex items-center gap-1.5 text-[#F8F1E5]">
                      <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                      Add <strong className="text-[#D9A441]">₹{amountNeededForFreeShipping}</strong> more for Free Shipping!
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[#D9A441] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      Congratulations! You unlocked Free Shipping!
                    </span>
                  )}
                  <span className="text-[11px] text-[#D9A441]">{progressPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#281006] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#D9A441] to-[#F3C065] transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Cart Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#EDE3D1]">
                {cartItems.length === 0 ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#F8F1E5] border border-[#D9A441]/40 flex items-center justify-center text-[#8C2F16]">
                      <ShoppingBag className="w-8 h-8 text-[#8C2F16]" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-lg text-[#8C2F16]">
                        Your basket is empty
                      </h4>
                      <p className="text-xs text-[#4A3528]/80 max-w-xs mx-auto leading-relaxed">
                        Your basket is waiting for something flavourful. Explore our collection and find your favourites.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="btn-pill-primary text-xs"
                    >
                      Explore Spices
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div key={item.itemKey} className="py-4 flex gap-4 items-center">
                      <div className="w-16 h-16 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] p-1 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-display font-bold text-sm text-[#8C2F16] truncate">
                              {item.name}
                            </h4>
                            <span className="inline-block text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#D9A441]/15 text-[#8C2F16] border border-[#D9A441]/30 mt-0.5">
                              {item.weight}
                            </span>
                          </div>
                          <span className="font-bold text-sm text-[#4A3528]">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-[#EDE3D1] rounded-full bg-[#FFFDF9] overflow-hidden">
                            <button
                              onClick={() => updateQuantity(item.itemKey, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#4A3528] hover:bg-[#F8F1E5] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#4A3528]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.itemKey, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-[#4A3528] hover:bg-[#F8F1E5] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Delete Item */}
                          <button
                            onClick={() => removeFromCart(item.itemKey)}
                            className="text-[#4A3528]/50 hover:text-[#D1255C] transition-colors p-1"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Summary & Checkout */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-[#EDE3D1] bg-[#F8F1E5] space-y-3">
                  {/* Promo Code Input */}
                  <div>
                    {appliedCoupon ? (
                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#D9A441]/15 border border-[#D9A441] text-xs">
                        <span className="flex items-center gap-1.5 font-bold text-[#8C2F16]">
                          <Tag className="w-3.5 h-3.5 text-[#D9A441]" />
                          {appliedCoupon.code} ({appliedCoupon.discountPercent}% OFF)
                        </span>
                        <button
                          onClick={removeCoupon}
                          className="text-[#D1255C] font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Promo code (e.g. TIKHORI10)"
                          className="flex-1 py-1.5 px-3 text-xs rounded-full border border-[#EDE3D1] bg-white text-[#4A3528] uppercase outline-none focus:border-[#8C2F16]"
                        />
                        <button
                          onClick={() => applyCoupon(couponCode)}
                          className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#402011] text-[#D9A441] hover:bg-[#281006]"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                    {couponError && <p className="text-[11px] text-[#D1255C] mt-1">{couponError}</p>}
                  </div>

                  {/* Pricing Tally */}
                  <div className="space-y-1.5 text-xs text-[#4A3528] pt-1">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹{subtotal}</span>
                    </div>
                    {discountAmount > 0 && (
                      <div className="flex justify-between text-[#8C2F16] font-semibold">
                        <span>Discount ({appliedCoupon?.code})</span>
                        <span>- ₹{discountAmount}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Estimated Shipping</span>
                      <span>{shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shippingFee}`}</span>
                    </div>
                    <div className="flex justify-between text-base font-black text-[#8C2F16] pt-2 border-t border-[#EDE3D1]">
                      <span>Total Amount</span>
                      <span>₹{total}</span>
                    </div>
                  </div>

                  {/* Proceed to Checkout CTA */}
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full btn-pill-primary py-3 text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-full text-center text-xs text-[#4A3528]/80 hover:text-[#8C2F16] pt-1"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
