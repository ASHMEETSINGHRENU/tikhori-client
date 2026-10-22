import React, { useState, useEffect } from 'react';
import { MapPin, Search, Phone, Navigation, Store, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const StockistsPage = () => {
  const [stockists, setStockists] = useState([]);
  const [citySearch, setCitySearch] = useState('');
  const [pinSearch, setPinSearch] = useState('');
  const [filteredStockists, setFilteredStockists] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getStockists().then((data) => {
      setStockists(data);
      setFilteredStockists(data);
    });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const city = citySearch.toLowerCase().trim();
    const pin = pinSearch.trim();

    const results = stockists.filter((s) => {
      const matchCity = !city || s.city.toLowerCase().includes(city) || s.address.toLowerCase().includes(city);
      const matchPin = !pin || s.pincode.includes(pin);
      return matchCity && matchPin;
    });

    setFilteredStockists(results);
  };

  const handleReset = () => {
    setCitySearch('');
    setPinSearch('');
    setFilteredStockists(stockists);
  };

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Store className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>AUTHENTIC RETAIL PARTNERS</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#8C2F16] tracking-tight">
            Find Your Nearest Tikhori Stockist
          </h1>

          <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
            Discover where to find Tikhori spices near you. Search by city or PIN code to explore available stockists.
          </p>
        </div>

        {/* Dual Search Form: City | PIN Code */}
        <div className="max-w-3xl mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border-2 border-[#D9A441]/40 shadow-md">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            
            <div className="sm:col-span-5 relative">
              <label className="block text-xs font-bold text-[#4A3528] mb-1">
                City / Region
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-[#D9A441] absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={citySearch}
                  onChange={(e) => setCitySearch(e.target.value)}
                  placeholder="e.g. Mumbai, Delhi, Pune..."
                  className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] text-[#4A3528] outline-none focus:border-[#8C2F16]"
                />
              </div>
            </div>

            <div className="sm:col-span-4 relative">
              <label className="block text-xs font-bold text-[#4A3528] mb-1">
                PIN Code
              </label>
              <input
                type="text"
                value={pinSearch}
                onChange={(e) => setPinSearch(e.target.value)}
                placeholder="e.g. 400050"
                className="w-full px-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] text-[#4A3528] outline-none focus:border-[#8C2F16]"
              />
            </div>

            <div className="sm:col-span-3 sm:pt-5">
              <button
                type="submit"
                className="w-full btn-pill-primary py-2.5 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search Locations</span>
              </button>
            </div>
          </form>

          {(citySearch || pinSearch) && (
            <div className="pt-4 flex items-center justify-between text-xs text-[#4A3528] border-t border-[#EDE3D1] mt-4">
              <span>Filtering for: <strong>{citySearch || 'All Cities'}</strong> {pinSearch ? `(PIN: ${pinSearch})` : ''}</span>
              <button onClick={handleReset} className="text-[#8C2F16] font-bold hover:underline">
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Grid */}
        <div>
          {filteredStockists.length === 0 ? (
            <div className="text-center py-16 bg-[#FFFDF9] rounded-2xl border border-[#EDE3D1] p-8 space-y-3 max-w-xl mx-auto">
              <Store className="w-10 h-10 text-[#8C2F16]/50 mx-auto" />
              <p className="font-display font-bold text-lg text-[#8C2F16]">
                No stockists found
              </p>
              <p className="text-xs text-[#4A3528]/80 leading-relaxed">
                We couldn't find a stockist matching your search. Try another city or PIN code.
              </p>
              <button onClick={handleReset} className="btn-pill-primary text-xs py-2 px-6">
                Show All Stockists
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStockists.map((st) => (
                <div
                  key={st.id}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D9A441]/30 hover:border-[#8C2F16] transition-all shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#8C2F16] bg-[#8C2F16]/10 px-2.5 py-0.5 rounded-full border border-[#8C2F16]/20">
                        {st.city}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700">
                        ● Open Now
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                      {st.name}
                    </h3>

                    <div className="space-y-1.5 text-xs text-[#4A3528]/85">
                      <p className="leading-relaxed">
                        <strong className="text-[#4A3528]">Address:</strong> {st.address}
                      </p>
                      <p>
                        <strong className="text-[#4A3528]">City:</strong> {st.city} | PIN Code: {st.pincode}
                      </p>
                      <p className="flex items-center gap-1.5 pt-1">
                        <Phone className="w-3.5 h-3.5 text-[#D9A441]" />
                        <span>{st.phone}</span>
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#EDE3D1] mt-5 flex items-center justify-between">
                    <span className="text-[11px] text-[#4A3528]/70">{st.timings}</span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(st.name + ' ' + st.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill-outline py-1.5 px-4 text-xs font-bold flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <Navigation className="w-3 h-3 text-[#D9A441]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default StockistsPage;
