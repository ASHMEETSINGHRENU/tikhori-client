import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const OurStorySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative overflow-hidden border-y border-[#EDE3D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Artwork (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D9A441]/40 shadow-2xl bg-[#281006]">
              <img
                src="/assets/banners/Gemini_Generated_Image_cog7tmcog7tmcog7.png"
                alt="Tikhori Heritage Story"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#281006] via-transparent to-transparent opacity-80" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#D9A441] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#8C2F16] text-[#D9A441] flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display font-black text-sm text-[#8C2F16] block">
                      Heritage Handcrafted
                    </span>
                    <span className="text-[11px] text-[#4A3528]/80 block">
                      Pure spices from traditional family groves
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>THE TIKHORI HERITAGE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#8C2F16] tracking-tight leading-[1.12]">
              Rooted in Tradition, <br />
              <span className="text-[#D9A441] italic font-serif">Made for Every Kitchen</span>
            </h2>

            <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
              At Tikhori, we celebrate the timeless connection between spices, food, and family. Inspired by India's diverse culinary traditions, our mission is to bring flavour and warmth to everyday cooking, helping you create memorable meals with every sprinkle.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] space-y-1">
                <h4 className="font-display font-bold text-sm text-[#8C2F16]">
                  Slow Batch Milling
                </h4>
                <p className="text-xs text-[#4A3528]/80 leading-relaxed">
                  Cold-pressed and stone ground to retain pure volatile oils and aromas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] space-y-1">
                <h4 className="font-display font-bold text-sm text-[#8C2F16]">
                  100% Uncompromised Purity
                </h4>
                <p className="text-xs text-[#4A3528]/80 leading-relaxed">
                  No artificial colors, no anti-caking chemicals, zero preservatives.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/story"
                className="btn-pill-primary py-3.5 px-8 text-xs font-bold flex items-center gap-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D9A441]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
