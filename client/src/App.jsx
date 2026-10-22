import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AnnouncementBar from './components/common/AnnouncementBar';
import Navbar from './components/common/Navbar';
import ComptoirFooter from './components/common/ComptoirFooter';
import CartDrawer from './components/common/CartDrawer';
import CheckoutModal from './components/common/CheckoutModal';
import AuthModal from './components/common/AuthModal';

// Public Pages
import HomePage from './pages/HomePage';
import CollectionPage from './pages/CollectionPage';
import ProductDetailPage from './pages/ProductDetailPage';
import StoryPage from './pages/StoryPage';
import QualityPage from './pages/QualityPage';
import EmpowermentPage from './pages/EmpowermentPage';
import ContactPage from './pages/ContactPage';
import StockistsPage from './pages/StockistsPage';
import SpiceClubPage from './pages/SpiceClubPage';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';
import AdminOrders from './pages/admin/AdminOrders';
import AdminStockists from './pages/admin/AdminStockists';
import AdminEnquiries from './pages/admin/AdminEnquiries';
import AdminSubscribers from './pages/admin/AdminSubscribers';

// App Layout Handler (conditionally renders public nav/footer)
const LayoutWrapper = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#FBF6ED]">
      {!isAdminRoute && <AnnouncementBar />}
      {!isAdminRoute && <Navbar />}

      <div className="flex-1">
        <Routes>
          {/* Public Storefront Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/shop" element={<CollectionPage />} />
          <Route path="/product/:slug" element={<ProductDetailPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/about" element={<StoryPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/empowerment" element={<EmpowermentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/stockists" element={<StockistsPage />} />
          <Route path="/spice-club" element={<SpiceClubPage />} />

          {/* Admin Management Suite Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="stockists" element={<AdminStockists />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="subscribers" element={<AdminSubscribers />} />
          </Route>
        </Routes>
      </div>

      {!isAdminRoute && <ComptoirFooter />}

      {/* Global Interactive Drawers & Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <AuthModal />
    </div>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
