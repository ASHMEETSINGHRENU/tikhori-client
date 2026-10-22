import React, { useState, useEffect } from 'react';
import HeroComptoirSection from '../components/HeroComptoirSection';
import ComptoirStoryBlock from '../components/ComptoirStoryBlock';
import ComptoirFreshKitchen from '../components/ComptoirFreshKitchen';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import ComptoirStockistFinder from '../components/ComptoirStockistFinder';
import ComptoirClubSection from '../components/ComptoirClubSection';
import ComptoirTileRibbon from '../components/ComptoirTileRibbon';
import ComptoirNewsletter from '../components/ComptoirNewsletter';
import ProductQuickViewModal from '../components/ProductQuickViewModal';
import { api } from '../services/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    api.getProducts().then(setProducts);
  }, []);

  return (
    <div className="relative bg-[#FBF6ED] text-[#4A121A] overflow-hidden">
      
      {/* 1. Comptoir Libanais Iconic Hero Section with Infinite Movable Showcase */}
      <HeroComptoirSection />

      {/* 2. Saffron Orange & Moroccan/Indian Geometric Tile Story Block with Vintage B&W Photos */}
      <ComptoirStoryBlock />

      {/* 3. Fresh Out of the Kitchen Split Feast */}
      <ComptoirFreshKitchen />

      {/* 4. Core Featured Spices Carousel / Grid */}
      <FeaturedProductsSection
        products={products}
        onQuickView={(p) => setQuickViewProduct(p)}
      />

      {/* 5. Locations / Postcode Finder with Tilted Green Framed Photo & Scalloped Sticker */}
      <ComptoirStockistFinder />

      {/* 6. Club Comptoir / Club Tikhori Arched Keyhole Loyalty Section */}
      <ComptoirClubSection />

      {/* 7. Geometric Tile Ribbon Divider */}
      <ComptoirTileRibbon />

      {/* 8. Saturated Orange Newsletter Bar "Get the scoop" */}
      <ComptoirNewsletter />

      {/* Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </div>
  );
};

export default HomePage;
