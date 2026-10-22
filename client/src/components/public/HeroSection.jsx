import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, Award } from 'lucide-react';
import { HERO_BANNERS } from '../../data/initialData';
import MovableProductStage from './MovableProductStage';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide banner background every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_BANNERS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_BANNERS.length) % HERO_BANNERS.length);
  };

  const currentBanner = HERO_BANNERS[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#281006] text-[#F8F1E5] min-h-[660px] lg:min-h-[740px] flex items-center border-b border-[#D9A441]/30">
      
      {/* Background Banner Crossfade Carousel */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentBanner.image}
              alt="Tikhori Indian Spices Background"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Multi-layer Luxury Gradient Overlays */}
        {/* Left deep dark/terracotta backdrop for ultra-sharp typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#281006] via-[#281006]/92 to-transparent w-full lg:w-[60%] pointer-events-none" />
        {/* Soft right parchment wash for consistent contrast */}
        <div className="absolute inset-0 bg-[#281006]/20 pointer-events-none" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#281006] via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Hero Content Container (Split Grid: Left Typography + Right Movable All-Products Stage) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-20 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Poster Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Tag */}
            <motion.div
              key={`eyebrow-${currentIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/50 text-[#D9A441] text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>{currentBanner.eyebrow}</span>
            </motion.div>

            {/* Main Poster Headline */}
            <motion.div
              key={`headline-${currentIndex}`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#F8F1E5] tracking-tight leading-[1.08] drop-shadow-md">
                Bring Home the <br className="hidden sm:inline" />
                <span className="text-[#D9A441] italic font-serif">Taste of Tradition</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${currentIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#F8F1E5]/90 font-light leading-relaxed max-w-xl"
            >
              Discover the rich flavours and aromas of Indian spices, thoughtfully crafted to bring every meal to life.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/collection"
                className="btn-pill-primary py-3.5 px-8 text-sm font-bold flex items-center gap-2 bg-[#8C2F16] hover:bg-[#A63B1E] border border-[#D9A441]/40 shadow-xl"
              >
                <span>Explore Our Spices</span>
                <ArrowRight className="w-4 h-4 text-[#D9A441]" />
              </Link>

              <Link
                to="/story"
                className="btn-pill-outline-gold py-3.5 px-7 text-sm font-bold backdrop-blur-sm bg-black/20"
              >
                <span>Our Story</span>
              </Link>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 flex flex-wrap items-center gap-6 text-xs text-[#F8F1E5]/80 border-t border-[#D9A441]/20"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D9A441]" />
                <span>Stemless Chillies</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D9A441]" />
                <span>Sun-Dried Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D9A441]" />
                <span>Zero Artificial Additives</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Movable All-Products Interactive 3D Stage (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <MovableProductStage />
          </div>

        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 bg-[#281006]/85 p-2 rounded-full border border-[#D9A441]/30 backdrop-blur-md">
        <button
          onClick={prevSlide}
          className="w-8 h-8 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441] hover:bg-[#D9A441] hover:text-[#281006] transition-colors"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="flex items-center gap-1.5 px-1">
          {HERO_BANNERS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-[#D9A441]' : 'w-1.5 bg-[#F8F1E5]/40 hover:bg-[#F8F1E5]/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-8 h-8 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441] hover:bg-[#D9A441] hover:text-[#281006] transition-colors"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};

export default HeroSection;
