import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';

const FeaturedProductsSection = ({ products = [], onQuickView }) => {
  // Filter 4 core flagship products
  const featured = products
    .filter((p) => ['lal-mirch-masala', 'haldi-powder', 'dhaniya-powder', 'jeera-powder'].includes(p.slug))
    .slice(0, 4);

  const displayList = featured.length >= 4 ? featured : products.slice(0, 4);

  return (
    <section className="py-20 lg:py-24 bg-[#FBF6ED] relative overflow-hidden border-b-2 border-[#4A121A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#E85A18] uppercase block">
            FLAGSHIP HARVEST SELECTION
          </span>

          <h2 className="font-fraunces font-black text-3xl sm:text-5xl lg:text-6xl text-[#4A121A] tracking-tight leading-[0.95] uppercase">
            A World of Flavour <br />
            <span className="text-[#E85A18] italic font-serif lowercase text-2xl sm:text-4xl">in every spoon</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#4A121A]/85 font-light leading-relaxed max-w-xl mx-auto pt-1">
            From everyday comforting meals to festive royal thalis, discover single-origin spices that bring authentic warmth, depth, and aroma to your kitchen.
          </p>
        </div>

        {/* 4 Flagship Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>

        {/* Action Buttons Row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/collection"
            className="btn-yellow-pill py-3 px-8 text-xs font-black shadow-md flex items-center gap-2"
          >
            <span>SHOP ALL SPICES</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#4A121A]" />
          </Link>

          <Link
            to="/story"
            className="btn-pink-pill py-3 px-8 text-xs font-black shadow-md"
          >
            <span>OUR QUALITY PROMISE</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
