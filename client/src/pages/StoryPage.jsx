import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Heart, Award, ShieldCheck, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

const StoryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Compass className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>ORIGIN & PURPOSE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#8C2F16] tracking-tight leading-[1.08]">
            The Story Behind <br />
            <span className="text-[#D9A441] italic font-serif">Every Flavour</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A3528]/85 font-light leading-relaxed">
            Spices are more than ingredients. They carry memories, traditions, and the unique character of Indian cooking. Tikhori celebrates this connection through a collection inspired by the flavours that make every kitchen special.
          </p>
        </div>

        {/* Feature Hero Banner Image */}
        <div className="rounded-3xl overflow-hidden border-2 border-[#D9A441]/40 shadow-2xl relative min-h-[360px] lg:min-h-[460px] flex items-end p-8 bg-[#281006]">
          <img
            src="/assets/banners/Gemini_Generated_Image_f7xarsf7xarsf7xa.png"
            alt="Tikhori Culinary Heritage"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#281006] via-[#281006]/40 to-transparent" />
          
          <div className="relative z-10 max-w-xl text-[#F8F1E5] space-y-2">
            <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase">
              TRADITION REIMAGINED
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl">
              Bringing Culinary Soul Back to Everyday Meals
            </h2>
          </div>
        </div>

        {/* Four Story Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Chapter 1: Our Beginning */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <Sparkles className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Our Beginning
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              Tikhori was created around a simple idea: every meal deserves flavour, care, and a connection to tradition. We aim to make choosing spices a delightful part of the cooking journey.
            </p>
          </div>

          {/* Chapter 2: Our Philosophy */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <Heart className="w-5 h-5 text-[#D1255C]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Our Philosophy
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              We believe that good food brings people together. Our philosophy centres on flavour, thoughtful product selection, and making spices an essential part of everyday culinary experiences.
            </p>
          </div>

          {/* Chapter 3: Our Spice Journey */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <Award className="w-5 h-5 text-[#D9A441]" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              Our Spice Journey
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              From selecting the right spices to preparing them for your kitchen, each stage matters. We value attention to detail and consistency in the products we offer.
            </p>
          </div>

          {/* Chapter 4: From Our Kitchen to Yours */}
          <div className="p-8 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-4 hover:border-[#8C2F16] transition-all">
            <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-display font-bold text-2xl text-[#8C2F16]">
              From Our Kitchen to Yours
            </h3>
            <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
              Whether you are preparing a quick weekday meal or a family feast, Tikhori is here to inspire your culinary creativity, one dish at a time.
            </p>
          </div>
        </div>

        {/* Closing Callout CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#281006] text-[#F8F1E5] text-center border-2 border-[#D9A441]/50 shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D9A441] tracking-[0.25em] uppercase">
              TASTE THE TRADITION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F8F1E5]">
              Every Meal Tells a Story. Make Yours Flavourful.
            </h2>
          </div>

          <div className="pt-2">
            <Link
              to="/collection"
              className="btn-pill-gold py-4 px-9 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4 text-[#281006]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StoryPage;
