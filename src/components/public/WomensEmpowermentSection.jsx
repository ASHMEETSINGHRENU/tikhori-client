import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Sparkles, Users, Award } from 'lucide-react';

const WomensEmpowermentSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#281006] text-[#F8F1E5] relative overflow-hidden border-y border-[#D9A441]/30">
      {/* Background Graphic Watermark */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-15 pointer-events-none">
        <img
          src="/assets/banners/Gemini_Generated_Image_jjeurnjjeurnjjeu.png"
          alt="Artisanal Spices"
          className="w-full h-full object-cover mix-blend-screen"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/40 text-[#D9A441] text-xs font-bold tracking-[0.2em] uppercase">
              <Heart className="w-3.5 h-3.5 text-[#D1255C]" />
              <span>GRASSROOTS INITIATIVE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F8F1E5] tracking-tight leading-[1.12]">
              Every Spice Has a Story. <br />
              <span className="text-[#D9A441] italic font-serif">Every Woman Has a Journey.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F8F1E5]/85 font-light leading-relaxed">
              Behind every tradition is a story of strength, creativity, and resilience. We celebrate the women who bring flavour to our kitchens, nurture traditions, and inspire the next generation. Our women's empowerment journey reflects the importance of opportunity, dignity, and recognising the contributions women make every day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#402011] border border-[#D9A441]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#D9A441]">
                  <Users className="w-4 h-4" />
                  <h4 className="font-display font-bold text-sm">Dignity of Work</h4>
                </div>
                <p className="text-xs text-[#F8F1E5]/75 leading-relaxed">
                  Fair wages, skill-building workshops, and leadership roles across cleaning, destemming, and packaging.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#402011] border border-[#D9A441]/30 space-y-1">
                <div className="flex items-center gap-2 text-[#D9A441]">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="font-display font-bold text-sm">Preserving Wisdom</h4>
                </div>
                <p className="text-xs text-[#F8F1E5]/75 leading-relaxed">
                  Honouring indigenous spice selection methods passed down across generations of home matriarchs.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/empowerment"
                className="btn-pill-gold py-3.5 px-8 text-xs font-bold inline-flex items-center gap-2"
              >
                <span>Read Their Journey</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#281006]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Feature Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A441]/50 shadow-2xl bg-[#402011]">
              <img
                src="/assets/banners/Gemini_Generated_Image_6vejnf6vejnf6vej.png"
                alt="Women Spice Artisans"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281006] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#281006]/95 border border-[#D9A441]/60 text-xs text-[#F8F1E5]">
                <p className="italic text-[#D9A441] font-serif text-sm">
                  "When women grow, communities grow. Every pack of Tikhori carries the pride of our hands."
                </p>
                <span className="block mt-2 font-bold text-[11px] text-[#F8F1E5]/80 uppercase tracking-wider">
                  — Sunita & Anita, Master Spice Cleaners, Maharashtra
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WomensEmpowermentSection;
