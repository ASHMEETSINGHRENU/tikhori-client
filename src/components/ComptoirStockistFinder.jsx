import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const ComptoirStockistFinder = () => {
  const [postcode, setPostcode] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (postcode.trim()) {
      navigate(`/stockists?search=${encodeURIComponent(postcode.trim())}`);
    } else {
      navigate('/stockists');
    }
  };

  return (
    <section className="bg-[#FBF6ED] py-16 sm:py-20 lg:py-24 border-b-2 border-[#4A121A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Locator Form (7 cols) */}
          <div className="lg:col-span-7 space-y-6 max-w-xl">
            
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#E85A18] uppercase block">
              LOCATIONS
            </span>

            <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-[#4A121A] tracking-tight">
              Find your Tikhori
            </h2>

            <p className="text-xs sm:text-sm text-[#4A121A]/85 font-light leading-relaxed">
              Whether you're in the city, preparing for a weekend feast or cooking in your local town, the authentic taste of Tikhori spices is never far from home.
            </p>

            {/* Input Box with Arrow (Matching Comptoir Libanais) */}
            <form onSubmit={handleSearch} className="pt-2">
              <div className="relative flex items-center max-w-md">
                <input
                  type="text"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Enter your postcode or city here"
                  className="w-full py-3.5 pl-5 pr-14 text-xs font-medium rounded-full bg-[#FFFDF9] border-2 border-[#4A121A]/25 text-[#4A121A] placeholder-[#4A121A]/50 outline-none focus:border-[#E85A18] shadow-sm transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-10 h-10 rounded-full bg-[#E85A18] hover:bg-[#C9460C] text-white flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Submit search"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Action Links */}
            <div className="flex items-center gap-6 pt-2 text-xs font-bold text-[#4A121A]">
              <button
                type="button"
                onClick={() => navigate('/stockists')}
                className="hover:text-[#E85A18] flex items-center gap-1.5 transition-colors uppercase tracking-wider"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E85A18]" />
                <span>USE YOUR LOCATION</span>
              </button>

              <span className="text-[#4A121A]/30">•</span>

              <Link
                to="/stockists"
                className="hover:text-[#E85A18] transition-colors uppercase tracking-wider underline underline-offset-4"
              >
                VIEW ALL 150+ STORES
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: Green-Framed Photo with Overlaid Scalloped Starburst Badge (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative p-3.5 sm:p-5 rounded-2xl bg-[#009E96] shadow-2xl border-2 border-[#4A121A] transform rotate-2 max-w-sm"
            >
              <div className="relative rounded-xl overflow-hidden bg-stone-900 border border-white/40">
                <img
                  src="/assets/banners/Gemini_Generated_Image_db0q5tdb0q5tdb0q.png"
                  alt="Tikhori Spices and Bowls"
                  className="w-full h-64 sm:h-72 object-cover filter brightness-105"
                />
              </div>

              {/* Overlaid Orange Starburst Scalloped Sticker Badge */}
              <div className="absolute -bottom-5 -left-5 z-20">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#E85A18] border-2 border-dashed border-[#FCE74C] flex flex-col items-center justify-center text-center p-3 text-white shadow-xl transform -rotate-12">
                  <span className="text-[10px] font-black uppercase tracking-wider leading-tight">
                    STEMLESS & PURE
                  </span>
                  <span className="text-[8px] text-[#FCE74C] uppercase font-bold mt-0.5">
                    ZERO CHEMICALS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComptoirStockistFinder;
