import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const weights = product.weights || [{ weight: '250g', price: product.price }];
  const [selectedWeight, setSelectedWeight] = useState(weights[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedWeight, 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between bg-[#FFFDF9] border-2 border-[#4A121A]/20 hover:border-[#E85A18] rounded-2xl p-5 transition-all duration-300 hover:shadow-xl"
    >
      {/* Top Meta: Badge & Rating */}
      <div className="flex items-center justify-between z-10">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase bg-[#FCE74C] text-[#4A121A] border border-[#4A121A]/20 shadow-xs">
          {product.badge || product.category}
        </span>

        <div className="flex items-center gap-1 text-xs font-bold text-[#4A121A]">
          <Star className="w-3.5 h-3.5 fill-[#E85A18] text-[#E85A18]" />
          <span>{product.rating}</span>
          <span className="text-[#4A121A]/50 text-[10px]">({product.reviewsCount})</span>
        </div>
      </div>

      {/* Raw Product Photography Canvas with Warm Ambient Highlight */}
      <div className="relative my-4 flex items-center justify-center min-h-[220px]">
        {/* Ambient Warm Halo Behind Product */}
        <div
          className={`absolute w-36 h-36 rounded-full bg-[#E85A18]/15 blur-2xl transition-all duration-500 pointer-events-none ${
            isHovered ? 'scale-125 opacity-70 bg-[#E62E6B]/20' : 'opacity-40'
          }`}
        />

        <Link to={`/product/${product.slug}`} className="block relative z-10">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-[200px] w-auto object-contain drop-shadow-md group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300"
            loading="lazy"
          />
        </Link>

        {/* Quick View Button on Hover */}
        <button
          onClick={(e) => {
            e.preventDefault();
            if (onQuickView) onQuickView(product);
          }}
          className={`absolute bottom-0 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#4A121A] text-[#FCE74C] border border-[#FCE74C]/40 flex items-center gap-1.5 transition-all duration-300 z-20 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-3 z-10 pt-3 border-t-2 border-[#4A121A]/10">
        <div>
          <Link to={`/product/${product.slug}`} className="block group-hover:text-[#E85A18] transition-colors">
            <h3 className="font-fraunces font-bold text-lg text-[#4A121A] tracking-tight">
              {product.name}
            </h3>
            {product.hindiName && (
              <span className="text-xs font-serif text-[#E85A18] block font-semibold">
                {product.hindiName}
              </span>
            )}
          </Link>

          <p className="text-xs text-[#4A121A]/80 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Weight Selector Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {weights.map((w) => (
            <button
              key={w.weight}
              type="button"
              onClick={() => setSelectedWeight(w)}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                selectedWeight.weight === w.weight
                  ? 'bg-[#E85A18] text-white shadow-sm'
                  : 'bg-[#FBF6ED] text-[#4A121A] hover:bg-[#FCE74C]/30 border border-[#4A121A]/20'
              }`}
            >
              {w.weight}
            </button>
          ))}
        </div>

        {/* Price & Action Row */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-[10px] text-[#4A121A]/60 uppercase tracking-wider block">Price</span>
            <div className="flex items-baseline gap-1">
              <span className="font-fraunces font-black text-xl text-[#4A121A]">
                ₹{selectedWeight.price}
              </span>
              <span className="text-[10px] text-[#4A121A]/60">/ {selectedWeight.weight}</span>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-4 py-2 rounded-full text-xs font-bold bg-[#E85A18] hover:bg-[#C9460C] text-white flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
            aria-label={`Add ${product.name} to basket`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
