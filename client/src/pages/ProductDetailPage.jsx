import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ShoppingBag, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, ChevronRight, Truck, RefreshCw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { api } from '../services/api';
import ProductCard from '../components/common/ProductCard';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart, setIsCheckoutOpen } = useCart();

  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'ingredients' | 'howToUse' | 'storage' | 'reviews'
  const [newReview, setNewReview] = useState({ name: '', comment: '', rating: 5 });
  const [reviewsList, setReviewsList] = useState([]);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getProducts().then((list) => {
      setAllProducts(list);
      const found = list.find((p) => p.slug === slug);
      if (found) {
        setProduct(found);
        setSelectedWeight(found.weights ? found.weights[0] : { weight: '250g', price: found.price });
        setReviewsList([
          { name: 'Kavita Sundaram', rating: 5, date: 'October 15, 2026', comment: 'The aroma when you open the jar is pure nostalgia. Authentic, stemless, and has the deepest natural colour!' },
          { name: 'Rajesh Patil', rating: 5, date: 'October 10, 2026', comment: 'We replaced our commercial market spices with Tikhori and our daily gravies have reached a completely different level.' }
        ]);
      }
    });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F8F1E5] flex items-center justify-center py-20">
        <div className="text-center space-y-4">
          <p className="font-display font-bold text-xl text-[#8C2F16]">Locating spice details...</p>
          <Link to="/collection" className="btn-pill-primary text-xs">
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedWeight, quantity);
    setIsCheckoutOpen(true);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    setReviewsList([
      { ...newReview, date: 'Just now' },
      ...reviewsList
    ]);
    setReviewSubmitted(true);
    setNewReview({ name: '', comment: '', rating: 5 });
  };

  // Related Spices (exclude current)
  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#4A3528]/70 mb-8">
          <Link to="/" className="hover:text-[#8C2F16]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/collection" className="hover:text-[#8C2F16]">Spice Collection</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#8C2F16] font-semibold">{product.name}</span>
        </nav>

        {/* Product Hero Section (Image + Buying Specs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#D9A441]/30 shadow-sm mb-16">
          
          {/* Left Column: Raw Product Packaging Canvas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative bg-[#F8F1E5] rounded-2xl p-8 border border-[#EDE3D1]">
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#8C2F16]/10 text-[#8C2F16] border border-[#8C2F16]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
                {product.badge || product.category}
              </span>
            </div>

            {/* Ambient Warm Rim */}
            <div className="w-64 h-64 rounded-full bg-[#D9A441]/25 blur-3xl absolute pointer-events-none" />

            <img
              src={product.image}
              alt={product.name}
              className="max-h-96 w-auto object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />

            <div className="mt-6 flex items-center gap-4 text-xs text-[#4A3528]/80">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                100% Stemless & Pure
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#D9A441]" />
                Fresh Farm Packaged
              </span>
            </div>
          </div>

          {/* Right Column: Buying Information (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex text-[#D9A441]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D9A441]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#4A3528]">
                  {product.rating} ({product.reviewsCount} customer reviews)
                </span>
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-[#8C2F16] tracking-tight">
                {product.name}
              </h1>

              {product.hindiName && (
                <span className="text-base font-serif text-[#D9A441] block -mt-1 font-semibold">
                  {product.hindiName}
                </span>
              )}

              <p className="text-sm text-[#4A3528]/85 font-light leading-relaxed pt-1">
                {product.shortDescription}
              </p>
            </div>

            {/* Available Weights Selector */}
            <div className="space-y-2 pt-2 border-t border-[#EDE3D1]">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3528]">
                Available Weights
              </label>
              <div className="flex flex-wrap gap-2.5">
                {product.weights?.map((w) => (
                  <button
                    key={w.weight}
                    onClick={() => setSelectedWeight(w)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                      selectedWeight?.weight === w.weight
                        ? 'bg-[#8C2F16] text-[#F8F1E5] ring-2 ring-[#8C2F16]/30 shadow-md'
                        : 'bg-[#F8F1E5] text-[#4A3528] hover:bg-[#D9A441]/20 border border-[#EDE3D1]'
                    }`}
                  >
                    {w.weight} — ₹{w.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Quantity Counter */}
            <div className="flex items-baseline justify-between pt-3 border-t border-[#EDE3D1]">
              <div>
                <span className="text-[10px] text-[#4A3528]/60 uppercase tracking-wider block">Total Payable</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display font-black text-3xl text-[#8C2F16]">
                    ₹{(selectedWeight?.price || product.price) * quantity}
                  </span>
                  <span className="text-xs text-[#4A3528]/70">
                    ({selectedWeight?.weight})
                  </span>
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center border border-[#EDE3D1] rounded-full bg-[#FFFDF9] overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center text-[#4A3528] hover:bg-[#F8F1E5] text-sm font-bold"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-[#4A3528]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center text-[#4A3528] hover:bg-[#F8F1E5] text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Cart & Buy Now */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                onClick={handleAddToCart}
                className="btn-pill-primary py-3.5 text-xs font-bold flex items-center justify-center gap-2 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 text-[#D9A441]" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="btn-pill-gold py-3.5 text-xs font-bold flex items-center justify-center gap-2 shadow-md"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4 text-[#281006]" />
              </button>
            </div>

            {/* Free Shipping Callout */}
            <p className="text-[11px] text-[#4A3528]/70 text-center">
              Free Express Delivery on orders over ₹499. Dispatched within 24 hours.
            </p>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-[#D9A441]/30 shadow-sm mb-16">
          <div className="flex items-center gap-2 sm:gap-4 border-b border-[#EDE3D1] pb-3 overflow-x-auto no-scrollbar">
            {[
              { id: 'about', label: 'About This Product' },
              { id: 'ingredients', label: 'Ingredients' },
              { id: 'howToUse', label: 'How to Use' },
              { id: 'storage', label: 'Storage Instructions' },
              { id: 'reviews', label: `Customer Reviews (${reviewsList.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-full transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#8C2F16] text-[#F8F1E5] shadow-sm'
                    : 'text-[#4A3528] hover:bg-[#F8F1E5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="pt-6">
            {/* TAB: ABOUT */}
            {activeTab === 'about' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                  The Craft & Origin
                </h3>
                <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
                  {product.about}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] text-xs space-y-1">
                    <strong className="text-[#8C2F16] block">Cold Grinding Technology</strong>
                    <p className="text-[#4A3528]/80">Processed below 40°C to lock in delicate aromatic volatile oils.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] text-xs space-y-1">
                    <strong className="text-[#8C2F16] block">Single-Origin Handpicked</strong>
                    <p className="text-[#4A3528]/80">Directly sourced from trusted partner farming families.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: INGREDIENTS */}
            {activeTab === 'ingredients' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                  Pure Ingredients
                </h3>
                <ul className="space-y-2">
                  {product.ingredients?.map((ing, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#4A3528]">
                      <CheckCircle2 className="w-4 h-4 text-[#D9A441] flex-shrink-0" />
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-[#4A3528]/70 pt-2 italic">
                  * All ingredient lists are certified 100% natural, pesticide tested, with zero added food dyes or stabilizers.
                </p>
              </div>
            )}

            {/* TAB: HOW TO USE */}
            {activeTab === 'howToUse' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                  Culinary Recommendations
                </h3>
                <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
                  {product.howToUse}
                </p>
              </div>
            )}

            {/* TAB: STORAGE */}
            {activeTab === 'storage' && (
              <div className="space-y-4 max-w-3xl">
                <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                  Storage Instructions
                </h3>
                <p className="text-sm text-[#4A3528]/85 leading-relaxed font-light">
                  {product.storage}
                </p>
              </div>
            )}

            {/* TAB: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="space-y-8 max-w-3xl">
                <div className="flex items-center justify-between pb-4 border-b border-[#EDE3D1]">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#8C2F16]">
                      Customer Reviews
                    </h3>
                    <p className="text-xs text-[#4A3528]/80">Read what home chefs are saying about this spice.</p>
                  </div>
                  <div className="flex items-center gap-1 font-bold text-[#8C2F16] text-lg">
                    <Star className="w-5 h-5 fill-[#D9A441] text-[#D9A441]" />
                    <span>{product.rating} / 5.0</span>
                  </div>
                </div>

                {/* Review Submission Form */}
                <form onSubmit={handleReviewSubmit} className="p-4 rounded-2xl bg-[#F8F1E5] border border-[#EDE3D1] space-y-3">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#8C2F16]">
                    Write a Review
                  </h4>
                  {reviewSubmitted && (
                    <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-800 text-xs">
                      Thank you! Your verified review has been posted.
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="Your Name"
                      className="px-3.5 py-2 text-xs rounded-full border border-[#EDE3D1] bg-white outline-none focus:border-[#8C2F16]"
                    />
                    <select
                      value={newReview.rating}
                      onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                      className="px-3.5 py-2 text-xs rounded-full border border-[#EDE3D1] bg-white outline-none focus:border-[#8C2F16]"
                    >
                      <option value={5}>5 Stars - Exceptional Aroma</option>
                      <option value={4}>4 Stars - Great Quality</option>
                      <option value={3}>3 Stars - Good</option>
                    </select>
                  </div>
                  <textarea
                    rows={2}
                    required
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share how this spice worked in your dishes..."
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#EDE3D1] bg-white outline-none focus:border-[#8C2F16]"
                  />
                  <button type="submit" className="btn-pill-primary text-xs py-2 px-6">
                    Submit Review
                  </button>
                </form>

                {/* Reviews List */}
                <div className="space-y-4">
                  {reviewsList.map((rev, i) => (
                    <div key={i} className="p-4 rounded-xl border border-[#EDE3D1] bg-[#FFFDF9] space-y-1.5">
                      <div className="flex items-center justify-between">
                        <strong className="text-xs font-bold text-[#4A3528]">{rev.name}</strong>
                        <span className="text-[10px] text-[#4A3528]/60">{rev.date}</span>
                      </div>
                      <div className="flex text-[#D9A441]">
                        {[...Array(rev.rating)].map((_, idx) => (
                          <Star key={idx} className="w-3.5 h-3.5 fill-[#D9A441]" />
                        ))}
                      </div>
                      <p className="text-xs text-[#4A3528]/85 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* You May Also Like Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#8C2F16]">
              You May Also Like
            </h2>
            <p className="text-xs text-[#4A3528]/80">
              Complimentary pure spices to complete your kitchen masala dabba.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
