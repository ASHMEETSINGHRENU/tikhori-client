import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Key } from 'lucide-react';
import { motion } from 'framer-motion';

const ComptoirClubSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 overflow-hidden border-b-2 border-[#4A121A]">
      
      {/* LEFT BLOCK: Arched Keyhole Silhouette "WELCOME TO CLUB TIKHORI" */}
      <div className="bg-[#E85A18] p-8 sm:p-14 flex items-end justify-center relative min-h-[380px] sm:min-h-[460px]">
        
        {/* Subtle decorative fruit/leaf top left */}
        <div className="absolute top-4 left-4 text-xs font-mono font-bold tracking-widest text-[#FCE74C] uppercase opacity-80">
          ✦ VIP CULINARY REWARDS
        </div>

        {/* The Iconic Arched Keyhole Doorway Graphic */}
        <div className="relative w-full max-w-xs bg-[#FBF6ED] arch-doorway pt-14 pb-10 px-6 text-center border-t-4 border-x-4 border-[#4A121A] shadow-2xl space-y-4">
          
          {/* Top Keyhole Notch / Brand Seal */}
          <div className="w-14 h-14 rounded-full bg-[#FFFDF9] mx-auto border-2 border-[#4A121A] flex items-center justify-center -mt-10 shadow-md p-1.5 overflow-hidden">
            <img
              src="/assets/logo/logo.png"
              alt="Club Tikhori Seal"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-1">
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#E85A18] uppercase block">
              WELCOME TO
            </span>
            <h2 className="font-fraunces font-black text-3xl sm:text-4xl text-[#E85A18] tracking-tight leading-none uppercase">
              CLUB <br />
              TIKHORI
            </h2>
          </div>

          <p className="text-[11px] text-[#4A121A]/80 font-medium">
            Where food lovers celebrate authentic Indian culinary craft.
          </p>
        </div>

      </div>

      {/* RIGHT BLOCK: Warm Mustard/Olive Textured Card "UNLOCK THE DOOR TO DELICIOUS PERKS" */}
      <div className="bg-[#B89C35] text-[#FBF6ED] p-8 sm:p-14 lg:p-16 flex flex-col justify-center items-start space-y-6 relative">
        
        {/* Slanted Italic Bold Headline */}
        <div className="space-y-2 max-w-md">
          <h2 className="font-fraunces italic font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight uppercase">
            UNLOCK THE DOOR TO DELICIOUS PERKS
          </h2>

          <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed pt-2">
            Enjoy member-exclusive seasonal recipe cards, secret 15% VIP harvest discounts, first taste of limited winter single-origin releases, and culinary masterclasses.
          </p>
        </div>

        {/* Orange Pill Button matching "FIND OUT MORE" */}
        <div className="pt-2">
          <Link
            to="/spice-club"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#E85A18] hover:bg-[#C9460C] text-white font-sans text-xs font-black tracking-wider uppercase transition-all shadow-md active:scale-95"
          >
            <span>JOIN THE SPICE CLUB</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </section>
  );
};

export default ComptoirClubSection;
