import React, { useState, useEffect } from 'react';
import { Filter, SlidersHorizontal, Sparkles, Check, ChevronDown } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import ProductQuickViewModal from '../components/common/ProductQuickViewModal';
import { api } from '../services/api';

const CATEGORIES = [
  'All Spices',
  'Everyday Spices',
  'Blended Masalas',
  'Regional Flavours',
  'Signature Blends',
  'Combo Packs'
];

const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'New Arrivals', value: 'newest' }
];

const CollectionPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Spices');
  const [selectedSort, setSelectedSort] = useState('featured');
  const [priceRange, setPriceRange] = useState(600);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getProducts().then(setProducts);
  }, []);

  // Filter & Sort Logic
  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'All Spices' && p.category !== selectedCategory) {
      return false;
    }
    if (p.price > priceRange) {
      return false;
    }
    if (onlyInStock && !p.inStock) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (selectedSort === 'price-asc') return a.price - b.price;
    if (selectedSort === 'price-desc') return b.price - a.price;
    if (selectedSort === 'newest') return b.id.localeCompare(a.id);
    return b.rating - a.rating; // default featured
  });

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>ARTISANAL PANTRY</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#8C2F16] tracking-tight">
            Explore Our Spice Collection
          </h1>

          <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
            Every kitchen has its own story, and every dish deserves the right flavour. Explore the Tikhori collection and find the spices that bring your favourite recipes to life.
          </p>
        </div>

        {/* Categories Bar (Scrollable on mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#8C2F16] text-[#F8F1E5] shadow-md border border-[#8C2F16]'
                  : 'bg-[#FFFDF9] text-[#4A3528] hover:bg-[#D9A441]/15 border border-[#EDE3D1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toolbar: Count, Mobile Filter Toggle & Sorting */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 mb-8 border-y border-[#EDE3D1] bg-[#FFFDF9]/60 px-4 rounded-xl">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#4A3528] font-semibold">
              Showing <strong className="text-[#8C2F16]">{filteredProducts.length}</strong> crafted spices
            </span>
            <button
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="lg:hidden flex items-center gap-1.5 text-xs font-bold text-[#8C2F16] px-3 py-1.5 rounded-full border border-[#8C2F16]/30 bg-[#8C2F16]/5"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <span className="text-xs text-[#4A3528]/70">Sort by:</span>
            <div className="relative">
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="appearance-none bg-[#FFFDF9] border border-[#EDE3D1] rounded-full px-4 py-1.5 pr-8 text-xs font-semibold text-[#4A3528] outline-none focus:border-[#8C2F16] cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#4A3528]/60 absolute right-3 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Content Layout (Sidebar Filters + Products Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Filter Sidebar (3 cols) */}
          <aside className={`lg:col-span-3 space-y-6 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#EDE3D1]">
                <h3 className="font-display font-bold text-sm text-[#8C2F16] uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#D9A441]" />
                  Refine Collection
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('All Spices');
                    setPriceRange(600);
                    setOnlyInStock(false);
                  }}
                  className="text-[11px] text-[#8C2F16] hover:underline font-semibold"
                >
                  Reset All
                </button>
              </div>

              {/* Price Filter Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-[#4A3528]">
                  <span>Maximum Price</span>
                  <span className="text-[#8C2F16]">₹{priceRange}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-[#8C2F16] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#4A3528]/60">
                  <span>₹50</span>
                  <span>₹600</span>
                </div>
              </div>

              {/* Availability Filter */}
              <div className="pt-3 border-t border-[#EDE3D1]">
                <label className="flex items-center gap-2.5 text-xs text-[#4A3528] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="w-4 h-4 rounded text-[#8C2F16] accent-[#8C2F16] cursor-pointer"
                  />
                  <span>Show only In-Stock items</span>
                </label>
              </div>

              {/* Purity Guarantee Box */}
              <div className="p-3.5 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] space-y-1.5 text-xs">
                <span className="font-display font-bold text-[#8C2F16] block">
                  The Tikhori Assurance
                </span>
                <p className="text-[11px] text-[#4A3528]/80 leading-relaxed">
                  Every jar is packed within 48 hours of slow-milling. Multi-layer foil lined to protect delicate aroma notes.
                </p>
              </div>
            </div>
          </aside>

          {/* Product Grid (9 cols) */}
          <main className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-[#FFFDF9] rounded-2xl border border-[#EDE3D1] p-8 space-y-3">
                <p className="font-display font-bold text-lg text-[#8C2F16]">
                  No spices found matching your filters.
                </p>
                <p className="text-xs text-[#4A3528]/80 max-w-sm mx-auto">
                  Try adjusting the maximum price or selecting another spice category to see more flavours.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All Spices');
                    setPriceRange(600);
                    setOnlyInStock(false);
                  }}
                  className="btn-pill-primary text-xs"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onQuickView={(p) => setQuickViewProduct(p)}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

export default CollectionPage;
