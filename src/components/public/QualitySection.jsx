import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Sparkles, ArrowRight, Award, Eye, HeartHandshake } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'Carefully Selected Spices',
    description: 'We source single-origin harvests from traditional spice belts where soil, sun, and climate nurture the most potent botanical aromas.',
    icon: Sparkles
  },
  {
    title: 'Attention to Quality',
    description: 'Every harvest undergoes multi-stage manual destemming, meticulous optical sorting, and lab testing to ensure zero adulteration.',
    icon: Eye
  },
  {
    title: 'Consistent Flavour',
    description: 'Our proprietary temperature-regulated grinding guarantees that the warmth and potency in your first spoon is identical to your hundredth.',
    icon: Award
  },
  {
    title: 'Made for Everyday Cooking',
    description: 'Finely balanced profiles designed to harmonize seamlessly with comforting daily dals, aromatic vegetable sabzis, and festive curries.',
    icon: HeartHandshake
  }
];

const QualitySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F1E5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>UNCOMPROMISED STANDARDS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#8C2F16] tracking-tight">
            Quality You Can Appreciate
          </h2>

          <p className="text-sm sm:text-base text-[#4A3528]/85 leading-relaxed font-light max-w-2xl mx-auto">
            Great food begins with the right ingredients. At Tikhori, we believe in thoughtful selection, careful preparation, and consistency in every pack, bringing you spices made for the heart of your kitchen.
          </p>
        </div>

        {/* 4 Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D9A441]/30 hover:border-[#8C2F16] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 flex items-center justify-center text-[#8C2F16]">
                    <IconComponent className="w-5 h-5 text-[#8C2F16]" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4A3528]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 flex items-center gap-1.5 text-[11px] font-bold text-[#D9A441] uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>Tikhori Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <Link
            to="/quality"
            className="btn-pill-primary py-3.5 px-8 text-xs font-bold inline-flex items-center gap-2"
          >
            <span>Explore Our Quality Promise</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D9A441]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
