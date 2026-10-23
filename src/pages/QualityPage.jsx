import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Award, Sparkles, ArrowRight, Layers, PackageCheck, Truck, Eye } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Selection',
    title: 'Choosing Suitable Ingredients',
    desc: 'Choosing ingredients suited to the intended flavour and product. Sourced directly from certified single-origin spice belts known for high natural essential oil content.',
    icon: Sparkles
  },
  {
    step: '02',
    name: 'Preparation',
    title: 'Artisanal Preparation Practices',
    desc: 'Following appropriate preparation and processing practices. Manual stem removal, natural solar drying, and regulated low-temperature milling.',
    icon: Layers
  },
  {
    step: '03',
    name: 'Quality Checks',
    title: 'Consistency & Product Standards',
    desc: 'Paying attention to consistency and product standards. Multi-point testing for purity, colour vibrancy, aroma integrity, and moisture control.',
    icon: Eye
  },
  {
    step: '04',
    name: 'Packaging',
    title: 'Aroma-Sealed Packaging',
    desc: 'Preparing products for storage, handling, and delivery. Multi-layer food-grade barrier pouches that lock volatile spice aromatics inside.',
    icon: PackageCheck
  },
  {
    step: '05',
    name: 'Ready for Your Kitchen',
    title: 'Direct to Homes Across India',
    desc: 'Bringing our spice collection to customers across India. Fast dispatch ensuring maximum freshness from harvest to home.',
    icon: Truck
  }
];

const QualityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>PURITY ASSURANCE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#8C2F16] tracking-tight">
            Thoughtfully Selected. <br />
            <span className="text-[#D9A441] italic font-serif">Carefully Prepared.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
            At Tikhori, quality is an important part of the spice experience. We value care and consistency throughout the journey from ingredient selection to the finished product.
          </p>
        </div>

        {/* 5-Step Process Visualizer */}
        <div className="space-y-10">
          <div className="text-center">
            <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase block">
              FROM HARVEST TO DISH
            </span>
            <h2 className="font-display font-black text-3xl text-[#8C2F16] mt-1">
              Our 5-Stage Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D9A441]/30 hover:border-[#8C2F16] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-display font-black text-2xl text-[#D9A441]">
                        {step.step}
                      </span>
                      <div className="w-9 h-9 rounded-full bg-[#8C2F16]/10 text-[#8C2F16] flex items-center justify-center">
                        <IconComp className="w-4 h-4 text-[#8C2F16]" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base text-[#8C2F16]">
                      {step.name}
                    </h3>

                    <p className="text-xs text-[#4A3528]/80 leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EDE3D1] flex items-center gap-1.5 text-[11px] font-bold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Step</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Commitment Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border-2 border-[#D9A441]/40 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase block">
                OUR PROMISE TO YOU
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#8C2F16]">
                Our Commitment
              </h2>
              <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
                We strive to offer products with clear information, consistent presentation, and flavours suited to Indian cooking traditions.
              </p>
              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-[#F8F1E5] text-[#8C2F16] border border-[#EDE3D1] font-semibold">
                  ✓ Zero Artificial Colorants
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F8F1E5] text-[#8C2F16] border border-[#EDE3D1] font-semibold">
                  ✓ Stemless Red Chillies
                </span>
                <span className="px-3 py-1 rounded-full bg-[#F8F1E5] text-[#8C2F16] border border-[#EDE3D1] font-semibold">
                  ✓ High Curcumin Turmeric
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-40 h-40 rounded-full bg-[#8C2F16] text-[#D9A441] flex flex-col items-center justify-center p-4 text-center border-4 border-[#D9A441] shadow-xl">
                <Award className="w-10 h-10 mb-1" />
                <span className="font-display font-bold text-xs leading-tight">
                  PURITY GUARANTEED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Callout CTA */}
        <div className="p-10 sm:p-14 rounded-3xl bg-[#281006] text-[#F8F1E5] text-center border-2 border-[#D9A441]/50 shadow-2xl space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#D9A441] tracking-[0.25em] uppercase">
              EXPERIENCE THE PURITY
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F8F1E5]">
              Good Cooking Begins with Thoughtful Choices.
            </h2>
          </div>

          <div className="pt-2">
            <Link
              to="/collection"
              className="btn-pill-gold py-4 px-9 text-xs font-bold inline-flex items-center gap-2"
            >
              <span>Explore Our Spices</span>
              <ArrowRight className="w-4 h-4 text-[#281006]" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QualityPage;
