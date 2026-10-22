import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, Users, Compass, BookOpen, Sun } from 'lucide-react';

const EmpowermentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Heart className="w-3.5 h-3.5 text-[#D1255C]" />
            <span>GRASSROOTS RESPECT & DIGNITY</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#8C2F16] tracking-tight">
            Celebrating Women, <br />
            <span className="text-[#D9A441] italic font-serif">Honouring Every Journey</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A3528]/85 font-light leading-relaxed">
            Women have long played an important role in preserving culinary traditions, sharing knowledge, and bringing families together through food. At Tikhori, we believe their stories deserve to be recognised and celebrated.
          </p>
        </div>

        {/* Feature Hero Banner Image */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#D9A441]/40 shadow-2xl relative min-h-[380px] lg:min-h-[480px] flex items-end p-8 bg-[#281006]">
          <img
            src="/assets/banners/Gemini_Generated_Image_jjeurnjjeurnjjeu.png"
            alt="Women in Spice Harvesting"
            className="absolute inset-0 w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#281006] via-[#281006]/50 to-transparent" />
          
          <div className="relative z-10 max-w-xl text-[#F8F1E5] space-y-2">
            <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase">
              HONOURING OUR ROOTS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              Nurturing Traditions, Inspiring the Next Generation
            </h2>
          </div>
        </div>

        {/* Four Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pillar 1: Strength in Every Story */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <Sun className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Strength in Every Story
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              Every woman's journey is different. Each reflects courage, dedication, creativity, and the desire to create a better future.
            </p>
          </div>

          {/* Pillar 2: Preserving Traditions */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <BookOpen className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Preserving Traditions
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              From treasured family recipes to regional cooking practices, women help carry culinary knowledge from one generation to the next.
            </p>
          </div>

          {/* Pillar 3: Creating Opportunities */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <Users className="w-5 h-5 text-[#8C2F16]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Creating Opportunities
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              Empowerment begins with respect, access to opportunities, and recognition of women's contributions. We believe in celebrating initiatives that support women's growth and participation.
            </p>
          </div>

          {/* Pillar 4: Looking Ahead */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <Compass className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Looking Ahead
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              We hope to continue sharing stories that inspire confidence, encourage meaningful opportunities, and recognise the women who enrich our communities.
            </p>
          </div>
        </div>

        {/* Closing Callout CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#281006] text-[#F8F1E5] text-center border-2 border-[#D9A441]/50 shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D9A441] tracking-[0.25em] uppercase">
              COMMUNITY IMPACT
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F8F1E5]">
              When Women Grow, Communities Grow.
            </h2>
          </div>

          <div className="pt-2">
            <Link
              to="/collection"
              className="btn-pill-gold py-4 px-9 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Support Our Artisans — Shop Collection</span>
              <ArrowRight className="w-4 h-4 text-[#281006]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmpowermentPage;
