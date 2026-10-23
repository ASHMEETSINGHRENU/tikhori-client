import React from 'react';
import { Sparkles, ShieldCheck, Truck, HeartHandshake } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="bg-[#E85A18] text-[#FCE74C] border-b-2 border-[#4A121A] py-2 px-4 text-xs tracking-wider uppercase overflow-hidden relative z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Desktop Ticker / Highlights */}
        <div className="hidden md:flex items-center justify-center w-full gap-8 text-[11px] font-black tracking-[0.16em]">
          <span className="flex items-center gap-1.5 text-white">
            <Sparkles className="w-3.5 h-3.5 text-[#FCE74C]" />
            FOOD SHARED IS A MEMORY MADE
          </span>
          <span className="text-[#FCE74C]/50">•</span>
          <span className="flex items-center gap-1.5 text-white">
            <Truck className="w-3.5 h-3.5 text-[#FCE74C]" />
            FREE SHIPPING ON ORDERS OVER ₹499
          </span>
     
          <span className="text-[#FCE74C]/50">•</span>
          <span className="flex items-center gap-1.5 text-white">
            <HeartHandshake className="w-3.5 h-3.5 text-[#FCE74C]" />
            WOMEN-LED ARTISANAL HARVESTS
          </span>
        </div>

        {/* Mobile Simple Marquee */}
        <div className="md:hidden flex items-center justify-center w-full text-center text-[10px] font-black text-white tracking-widest">
          <Sparkles className="w-3 h-3 text-[#FCE74C] mr-1.5 inline" />
          <span>FOOD SHARED IS A MEMORY MADE</span>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;
