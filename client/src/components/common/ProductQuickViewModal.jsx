import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, ShieldCheck, Sparkles, ArrowRight, Flame } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ProductQuickViewModal = ({ product, onClose }) => {
  const { addToCart, setIsCheckoutOpen } = useCart();
  const weights = product?.weights || [{ weight: '250g', price: product?.price || 145 }];
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
    onClose();
  };

  const handleBuyNow = () => {
    addToCart(product, selectedWeight, quantity);
    onClose();
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#281006]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-[#D9A441]/40 overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 w-8 h-8 rounded-full bg-[#F8F1E5] border border-[#D9A441]/40 flex items-center justify-center text-[#4A3528] hover:text-[#8C2F16] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Visual */}
          <div className="p-8 bg-[#F8F1E5] border-b md:border-b-0 md:border-r border-[#EDE3D1] flex flex-col items-center justify-center relative">
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#8C2F16]/10 text-[#8C2F16] border border-[#8C2F16]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                {product.badge || product.category}
              </span>
            </div>

            <div className="w-52 h-52 rounded-full bg-[#D9A441]/20 blur-2xl absolute pointer-events-none" />
            <img
              src={product.image}
              alt={product.name}
              className="max-h-72 w-auto object-contain relative z-10 drop-shadow-xl"
            />

            {product.heatLevel && (
              <div className="mt-4 flex items-center gap-1.5 text-xs text-[#8C2F16] font-semibold bg-white/80 px-3 py-1 rounded-full border border-[#EDE3D1]">
                <Flame className="w-3.5 h-3.5 text-[#D1255C]" />
                <span>Heat Level: {product.heatLevel}</span>
              </div>
            )}
          </div>

          {/* Right: Details & Purchase */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1 text-xs font-bold text-[#D9A441]">
                <div className="flex text-[#D9A441]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D9A441]" />
                  ))}
                </div>
                <span className="text-[#4A3528] ml-1">({product.reviewsCount} verified reviews)</span>
              </div>

              <h3 className="font-display font-black text-2xl text-[#8C2F16] mt-1">
                {product.name}
              </h3>
              {product.hindiName && (
                <span className="text-sm font-serif text-[#D9A441] block">
                  {product.hindiName}
                </span>
              )}

              <p className="text-xs text-[#4A3528]/80 mt-2 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Weights Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3528] mb-1.5">
                Available Weights
              </label>
              <div className="flex flex-wrap gap-2">
                {weights.map((w) => (
                  <button
                    key={w.weight}
                    type="button"
                    onClick={() => setSelectedWeight(w)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedWeight.weight === w.weight
                        ? 'bg-[#8C2F16] text-[#F8F1E5] shadow-sm ring-2 ring-[#8C2F16]/30'
                        : 'bg-[#F8F1E5] text-[#4A3528] hover:bg-[#D9A441]/20 border border-[#EDE3D1]'
                    }`}
                  >
                    {w.weight} — ₹{w.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Quantity */}
            <div className="pt-2 border-t border-[#EDE3D1] flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#4A3528]/60 uppercase tracking-wider block">Total Price</span>
                <span className="font-display font-black text-2xl text-[#8C2F16]">
                  ₹{selectedWeight.price * quantity}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center border border-[#EDE3D1] rounded-full bg-[#FFFDF9] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 flex items-center justify-center text-[#4A3528] hover:bg-[#F8F1E5]"
                >
                  -
                </button>
                <span className="px-3 text-xs font-bold text-[#4A3528]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center text-[#4A3528] hover:bg-[#F8F1E5]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="btn-pill-primary text-xs py-3 flex items-center justify-center gap-1.5"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="btn-pill-gold text-xs py-3 flex items-center justify-center gap-1.5"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Link to Full Page */}
            <div className="text-center pt-1">
              <Link
                to={`/product/${product.slug}`}
                onClick={onClose}
                className="text-xs text-[#8C2F16] font-semibold hover:underline"
              >
                View Full Specifications & Recipes →
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductQuickViewModal;
