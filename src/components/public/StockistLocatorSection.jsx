import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Phone, Navigation, ArrowRight, Store } from 'lucide-react';
import { INITIAL_STOCKISTS } from '../../data/initialData';

const StockistLocatorSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const filtered = INITIAL_STOCKISTS.filter((s) => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      s.city.toLowerCase().includes(term) ||
      s.pincode.includes(term) ||
      s.name.toLowerCase().includes(term) ||
      s.address.toLowerCase().includes(term)
    );
  }).slice(0, 3);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <MapPin className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>NEIGHBOURHOOD AVAILABILITY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#8C2F16] tracking-tight">
            Find Tikhori Near You
          </h2>

          <p className="text-sm sm:text-base text-[#4A3528]/85 leading-relaxed font-light max-w-2xl mx-auto">
            Looking for Tikhori spices in your neighbourhood? Discover stockists and explore convenient ways to bring your favourite flavours home.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="relative w-full">
              <MapPin className="w-5 h-5 text-[#8C2F16] absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setHasSearched(true);
                }}
                placeholder="Enter your city or PIN code"
                className="w-full pl-12 pr-36 py-3.5 text-sm rounded-full border-2 border-[#EDE3D1] bg-[#FFFDF9] text-[#4A3528] placeholder-[#4A3528]/50 outline-none focus:border-[#8C2F16] shadow-sm transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 btn-pill-primary py-2 px-5 text-xs font-bold"
              >
                <span>Find a Stockist</span>
              </button>
            </div>
          </form>
          <div className="mt-2.5 flex items-center justify-center gap-3 text-xs text-[#4A3528]/70">
            <span>Quick search:</span>
            {['Mumbai', 'Delhi', 'Bengaluru', 'Pune'].map((city) => (
              <button
                key={city}
                onClick={() => {
                  setSearchTerm(city);
                  setHasSearched(true);
                }}
                className="hover:text-[#8C2F16] underline underline-offset-2"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Stockist Result Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((stockist) => (
              <div
                key={stockist.id}
                className="p-6 rounded-2xl bg-[#F8F1E5] border border-[#D9A441]/30 hover:border-[#8C2F16] transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#8C2F16] px-2.5 py-0.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20">
                      <Store className="w-3 h-3 text-[#D9A441]" />
                      Verified Stockist
                    </span>
                    <span className="text-[11px] text-[#4A3528]/60 font-semibold">{stockist.city}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-[#8C2F16]">
                    {stockist.name}
                  </h3>

                  <p className="text-xs text-[#4A3528]/80 leading-relaxed">
                    {stockist.address}, PIN: {stockist.pincode}
                  </p>

                  <div className="pt-2 text-xs text-[#4A3528] flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                    <span>{stockist.phone}</span>
                  </div>
                </div>

                <div className="pt-5 border-t border-[#EDE3D1] mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-[#4A3528]/70">{stockist.timings}</span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(stockist.name + ' ' + stockist.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#8C2F16] hover:underline"
                  >
                    <span>Directions</span>
                    <Navigation className="w-3 h-3 text-[#D9A441]" />
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-12 bg-[#F8F1E5] rounded-2xl border border-[#EDE3D1]">
              <p className="text-sm text-[#4A3528]">
                We couldn't find a stockist matching your search. Try another city or PIN code.
              </p>
            </div>
          )}
        </div>

        {/* Link to full stockist directory */}
        <div className="mt-10 text-center">
          <Link
            to="/stockists"
            className="text-xs font-bold text-[#8C2F16] hover:text-[#D9A441] inline-flex items-center gap-1 transition-colors"
          >
            <span>View All Stockist Locations & Supermarkets Across India</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StockistLocatorSection;
