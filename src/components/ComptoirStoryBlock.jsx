import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ComptoirStoryBlock = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-b-2 border-[#4A121A]">
      
      {/* LEFT COLUMN: Saturated Spice Orange Canvas (#E85A18) */}
      <div className="bg-[#E85A18] text-[#FBF6ED] p-6 sm:p-12 lg:p-20 flex flex-col justify-between space-y-6 sm:space-y-8 relative">
        <div className="space-y-5 sm:space-y-6 max-w-xl">
          
          {/* Slanted Subtitle & Massive Chunky Yellow Headline */}
          <div>
            <span className="font-serif italic font-bold text-2xl sm:text-3xl lg:text-4xl text-[#FCE74C] block mb-1">
              FLAVOURS
            </span>
            <h2 className="font-fraunces font-black text-3xl sm:text-5xl lg:text-6xl text-[#FCE74C] tracking-tight leading-[0.95] uppercase">
              OF TRADITIONAL <br />
              INDIAN <br />
              HERITAGE
            </h2>
          </div>

          {/* Hashtag Tagline Pill */}
          <div className="inline-block text-[10px] sm:text-[11px] font-mono tracking-widest text-[#FCE74C] uppercase border border-[#FCE74C]/40 px-3 py-1 rounded-full bg-black/10">
            #WHERE IT ALL STARTED
          </div>

          {/* Narrative Body Copy */}
          <p className="text-xs sm:text-sm text-[#FBF6ED]/95 font-light leading-relaxed">
            Food has a way of taking you places. For Tikhori, that place was the fragrant spice groves of Maharashtra and southern India. What began as a generational kitchen tradition became a living mission: bringing pure stemless chillies, sun-cured turmeric, and cold-milled aromas to inspire the next generation of home cooks.
          </p>

          {/* Yellow Pill CTA Button */}
          <div className="pt-2">
            <Link
              to="/story"
              className="btn-yellow-pill py-3 px-7 sm:px-8 text-xs font-black shadow-md inline-flex items-center gap-2"
            >
              <span>DISCOVER OUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom subtle brand tag */}
        <div className="pt-4 sm:pt-6 border-t border-[#FBF6ED]/20 text-[9px] sm:text-[10px] tracking-widest text-[#FCE74C] uppercase font-bold">
          TIKHORI FOODS • CRAFTED WITH PRIDE
        </div>
      </div>

      {/* RIGHT COLUMN: Authentic Geometric Floral Tile Pattern with Tilted Retro B&W Photos */}
      <div className="comptoir-tiles p-6 sm:p-12 lg:p-16 flex items-center justify-center relative min-h-[420px] sm:min-h-[480px] lg:min-h-[580px] overflow-hidden">
        
        {/* Vintage Maroon Oval Postmark Badge */}
        <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-20">
          <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#4A121A] border-2 border-[#FCE74C] text-[#FCE74C] text-center transform rotate-6 shadow-xl">
            <span className="block text-[7px] sm:text-[8px] font-mono tracking-widest uppercase">EST. 1976</span>
            <span className="block text-[9px] sm:text-[10px] font-black uppercase tracking-wider">MAHARASHTRA</span>
            <span className="block text-[6px] sm:text-[7px] text-white/80">AUTHENTIC TRADITION</span>
          </div>
        </div>

        {/* Vintage Polaroid Photo Collages */}
        <div className="relative w-full max-w-sm sm:max-w-md pt-4 sm:pt-0">
          
          {/* Polaroid 1 (Top-Right: Mother & Child in vintage 1970s print) */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="polaroid-frame absolute top-2 sm:-top-8 lg:-top-10 right-1 sm:right-6 w-36 sm:w-48 lg:w-56 z-10 transform rotate-3"
          >
            <div className="relative overflow-hidden bg-stone-900 border border-stone-300">
              <img
                src="/assets/banners/Gemini_Generated_Image_6vejnf6vejnf6vej.png"
                alt="Heritage Village Women"
                className="w-full h-36 sm:h-48 lg:h-56 object-cover filter grayscale contrast-125"
              />
            </div>
            <div className="pt-1.5 sm:pt-2 text-center">
              <span className="font-serif italic text-[9px] sm:text-[11px] text-[#4A121A] font-bold">
                Sun-drying whole chillies, 1976
              </span>
            </div>
          </motion.div>

          {/* Polaroid 2 (Bottom-Left: Heritage Spice Storefront / Mill) */}
          <motion.div
            whileHover={{ scale: 1.04, rotate: -2 }}
            className="polaroid-frame relative mt-20 sm:mt-24 lg:mt-28 left-0 sm:left-4 w-44 sm:w-56 lg:w-64 z-15 transform -rotate-4"
          >
            <div className="relative overflow-hidden bg-stone-900 border border-stone-300">
              <img
                src="/assets/banners/Gemini_Generated_Image_jjeurnjjeurnjjeu.png"
                alt="Heritage Spice Merchant"
                className="w-full h-32 sm:h-40 lg:h-44 object-cover filter grayscale contrast-125 brightness-95"
              />
            </div>
            <div className="pt-1.5 sm:pt-2 text-center">
              <span className="font-serif italic text-[9px] sm:text-[11px] text-[#4A121A] font-bold">
                The First Tikhori Spice Depot
              </span>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default ComptoirStoryBlock;
