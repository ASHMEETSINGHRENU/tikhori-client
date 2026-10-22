import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ComptoirFreshKitchen = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-b-2 border-[#4A121A]">
      
      {/* LEFT COLUMN: Vibrant Authentic Culinary Feast Image */}
      <div className="relative min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] bg-[#4A121A] overflow-hidden">
        <img
          src="/assets/banners/Gemini_Generated_Image_h4jzeh4jzeh4jzeh.png"
          alt="Fresh out of the kitchen spices and curries"
          className="w-full h-full object-cover object-center filter saturate-125 brightness-105 hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Small floating caption pill */}
        <div className="absolute bottom-6 left-6 z-10 px-4 py-1.5 rounded-full bg-[#FBF6ED]/90 backdrop-blur-md border border-[#4A121A]/20 text-[11px] font-bold text-[#4A121A] uppercase tracking-wider shadow-md">
          AUTHENTIC AROMAS • SLOW ROASTED
        </div>
      </div>

      {/* RIGHT COLUMN: Warm Sunlit Parchment Canvas with Chunky Typography */}
      <div className="bg-[#FBF6ED] p-8 sm:p-14 lg:p-20 flex flex-col items-center justify-center text-center relative">
        
        {/* Peeking Botanical Pomegranate Watercolor Accent on Top */}
        <div className="absolute -top-6 right-8 w-24 h-24 sm:w-32 sm:h-32 opacity-85 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="50" cy="50" r="35" fill="#C21838" />
            <circle cx="45" cy="45" r="28" fill="#E89B27" opacity="0.6" />
          </svg>
        </div>

        {/* Peeking Botanical Rose Watercolor Accent on Bottom */}
        <div className="absolute -bottom-6 left-8 w-24 h-24 sm:w-32 sm:h-32 opacity-85 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
            <circle cx="50" cy="50" r="35" fill="#E62E6B" />
            <circle cx="50" cy="50" r="20" fill="#FF5C93" />
          </svg>
        </div>

        <div className="max-w-md space-y-6 relative z-10">
          
          {/* Subtitle matching "OUR FOOD" */}
          <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#E85A18] uppercase block">
            OUR SPICES
          </span>

          {/* Chunky Condensed Slab Headline */}
          <h2 className="font-fraunces font-black text-4xl sm:text-5xl lg:text-6xl text-[#E85A18] tracking-tight leading-[0.92] uppercase">
            FRESH <br />
            OUT <span className="font-serif italic font-normal text-3xl sm:text-4xl text-[#4A121A] lowercase tracking-normal">of the</span> <br />
            KITCHEN
          </h2>

          <p className="text-xs sm:text-sm text-[#4A121A]/85 font-light leading-relaxed max-w-sm mx-auto">
            From fiery Kolhapuri curries to comforting golden dals, discover single-origin spices that bring depth and warmth to every meal.
          </p>

          {/* Hot-Pink Pill Button matching "VIEW MENU" */}
          <div className="pt-2">
            <Link
              to="/collection"
              className="btn-pink-pill py-3 px-8 text-xs font-black shadow-lg inline-flex items-center gap-2"
            >
              <span>VIEW SPICE COLLECTION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ComptoirFreshKitchen;
