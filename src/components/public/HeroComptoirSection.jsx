import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import MovableProductStage from './MovableProductStage';

const HeroComptoirSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FBF6ED] text-[#4A121A] pt-8 pb-16 lg:pt-12 lg:pb-20 border-b border-[#4A121A]/10">
      
      {/* VINTAGE ARTISANAL BOTANICAL & POSTMARK OVERLAYS (Matching Comptoir Libanais) */}
      
      {/* 1. Top-Left: Watercolor Pomegranate Illustration */}
      <div className="absolute -top-4 -left-6 sm:left-4 z-10 w-28 h-28 sm:w-44 sm:h-44 pointer-events-none opacity-95">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          {/* Outer golden-yellow skin */}
          <circle cx="95" cy="105" r="70" fill="#E89B27" />
          <path d="M95 35 C80 50, 75 75, 95 105 C115 75, 110 50, 95 35 Z" fill="#9C3B1B" />
          {/* Cracked juicy ruby-red seeds */}
          <path d="M110 65 C145 75, 160 115, 140 145 C120 170, 75 165, 60 140 Z" fill="#8C142A" />
          <circle cx="115" cy="95" r="9" fill="#C21838" />
          <circle cx="132" cy="110" r="8" fill="#D6284B" />
          <circle cx="118" cy="125" r="9" fill="#B31230" />
          <circle cx="98" cy="115" r="8" fill="#C21838" />
          <circle cx="102" cy="138" r="7" fill="#8C142A" />
          <circle cx="128" cy="138" r="8" fill="#D6284B" />
          {/* Green leaves */}
          <path d="M35 55 C20 40, 45 20, 65 35 C55 55, 45 60, 35 55 Z" fill="#3D5A38" />
          <path d="M55 75 C40 60, 60 45, 80 60 C70 75, 65 80, 55 75 Z" fill="#587A46" />
        </svg>
      </div>

      {/* 2. Top-Right: Vintage Circular Postmark Stamp (- 1976 - MAHARASHTRA BOMBAY) */}
      <div className="absolute top-4 right-4 sm:right-12 z-10 pointer-events-none">
        <div className="vintage-stamp text-[#C9460C] font-mono text-center p-2">
          <span className="text-[9px] tracking-widest font-bold block uppercase border-b border-[#C9460C]/40 pb-0.5">
            - 1976 -
          </span>
          <span className="text-[8px] font-black tracking-widest uppercase block pt-0.5">
            TIKHORI
          </span>
          <span className="text-[7px] tracking-wider block">
            PURE SPICE
          </span>
        </div>
      </div>

      {/* 3. Bottom-Left: Painted Vintage Woman Matriarch with Flower */}
      <div className="hidden md:block absolute bottom-0 left-2 lg:left-8 z-10 w-36 h-36 lg:w-48 lg:h-48 pointer-events-none opacity-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
          {/* Silhouette & Hair */}
          <path d="M50 190 C40 140, 60 90, 100 80 C140 90, 160 140, 150 190 Z" fill="#2E1B15" />
          {/* Face */}
          <ellipse cx="100" cy="120" rx="35" ry="42" fill="#D89D78" />
          {/* Eyes & brows */}
          <path d="M80 110 Q90 106 98 112" stroke="#2E1B15" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M104 112 Q112 106 122 110" stroke="#2E1B15" strokeWidth="2.5" strokeLinecap="round" />
          {/* Bindi & lips */}
          <circle cx="100" cy="104" r="3" fill="#C92A2A" />
          <path d="M92 138 Q100 145 108 138" stroke="#A62B38" strokeWidth="3" strokeLinecap="round" />
          {/* Pink Rose in Hair */}
          <circle cx="68" cy="85" r="16" fill="#E62E6B" />
          <circle cx="64" cy="82" r="10" fill="#FF5C93" />
          <circle cx="68" cy="85" r="5" fill="#FFE0EB" />
          <path d="M52 80 C40 70, 50 60, 60 70 Z" fill="#3D5A38" />
        </svg>
      </div>

      {/* 4. Bottom-Right: Painterly Blooming Rose Flower */}
      <div className="absolute -bottom-6 -right-6 sm:bottom-0 sm:right-4 z-10 w-36 h-36 sm:w-56 sm:h-56 pointer-events-none opacity-95">
        <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          {/* Leaves */}
          <path d="M70 160 C40 180, 50 210, 80 190 C100 170, 90 150, 70 160 Z" fill="#3B5838" />
          <path d="M150 170 C180 190, 170 220, 140 200 C120 180, 130 160, 150 170 Z" fill="#4E7048" />
          {/* Rose Petals (Pink with yellow/warm undertones) */}
          <circle cx="125" cy="105" r="58" fill="#E62E6B" />
          <path d="M75 90 C95 50, 155 50, 175 90 C155 130, 95 130, 75 90 Z" fill="#FF5C93" />
          <path d="M90 85 C105 60, 145 60, 160 85 C145 110, 105 110, 90 85 Z" fill="#F8DF32" opacity="0.8" />
          <circle cx="125" cy="92" r="22" fill="#E85A18" />
          <circle cx="125" cy="90" r="12" fill="#8C142A" />
        </svg>
      </div>

      {/* CENTER STAGE CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        
        {/* COMPTOIR LIBANAIS SIGNATURE HERO HEADLINE */}
        <div className="space-y-3 mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-fraunces font-black text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-[#4A121A] tracking-tight leading-[0.92] uppercase"
          >
            <span className="block">FOOD</span>
            <span className="block">
              SHARED <span className="font-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-[#E85A18] lowercase tracking-normal">is a</span>
            </span>
            <span className="block">MEMORY MADE</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#4A121A]/85 font-serif italic max-w-2xl mx-auto leading-relaxed pt-2"
          >
            "Bring Home the Taste of Tradition — pure, sun-cured spices crafted right for the heart of your home."
          </motion.p>
        </div>

        {/* CTA BUTTONS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-10"
        >
          <Link
            to="/collection"
            className="btn-yellow-pill py-3 px-8 text-xs font-black shadow-lg"
          >
            <span>EXPLORE OUR SPICES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <Link
            to="/story"
            className="btn-pink-pill py-3 px-8 text-xs font-black shadow-lg"
          >
            <span>DISCOVER OUR STORY</span>
          </Link>
        </motion.div>

        {/* INFINITE MOVABLE 3D PRODUCT SHOWCASE */}
        <div className="relative mt-4">
          <MovableProductStage />
        </div>

      </div>

    </section>
  );
};

export default HeroComptoirSection;
