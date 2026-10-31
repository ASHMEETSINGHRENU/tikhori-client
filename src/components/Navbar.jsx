import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Shield, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { totalItemCount, setIsCartOpen } = useCart();
  const { user, isAdmin } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBF6ED]/98 backdrop-blur-md shadow-md border-b border-[#4A121A]/10 py-3'
          : 'bg-[#FBF6ED] border-b border-[#4A121A]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Navigation Links (Comptoir style) */}
          <nav className="hidden lg:flex items-center gap-7 text-[11px] font-bold tracking-[0.16em] uppercase text-[#4A121A]">
            <Link
              to="/stockists"
              className={`hover:text-[#E85A18] transition-colors ${isActive('/stockists') ? 'text-[#E85A18]' : ''}`}
            >
              LOCATIONS
            </Link>
            <Link
              to="/collection"
              className={`hover:text-[#E85A18] transition-colors ${isActive('/collection') ? 'text-[#E85A18]' : ''}`}
            >
              SPICES
            </Link>
            <Link
              to="/story"
              className={`hover:text-[#E85A18] transition-colors ${isActive('/story') ? 'text-[#E85A18]' : ''}`}
            >
              OUR STORY
            </Link>
            <Link
              to="/quality"
              className={`hover:text-[#E85A18] transition-colors ${isActive('/quality') ? 'text-[#E85A18]' : ''}`}
            >
              QUALITY
            </Link>
          </nav>

          {/* Center Brandmark Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
            <img
              src="/assets/logo/logo.png"
              alt="Tikhori Heritage Foods Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
            />
            <div className="flex flex-col items-start leading-none">
              <span className="font-fatface text-2xl sm:text-3xl tracking-wide text-[#E85A18] group-hover:text-[#C9460C] transition-colors leading-none">
                TIKHORI
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] font-bold text-[#4A121A] uppercase mt-1">
                HERITAGE FOODS
              </span>
            </div>
          </Link>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Admin Portal Pill */}
            <Link
              to="/admin"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-[#4A121A] bg-[#FCE74C] hover:bg-[#FFF066] transition-colors shadow-sm"
              title="Admin Portal"
            >
              <Shield className="w-3 h-3 text-[#4A121A]" />
              <span>ADMIN</span>
            </Link>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#4A121A] hover:text-[#E85A18] transition-colors"
              aria-label="View basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#E85A18] rounded-full ring-2 ring-[#FBF6ED]">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Cyan/Teal Pill Button: SHOP NOW (matching BOOK NOW) */}
            <Link
              to="/collection"
              className="btn-teal-pill hidden sm:inline-flex"
            >
              <span>SHOP NOW</span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#4A121A] hover:text-[#E85A18] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FBF6ED] border-b-2 border-[#4A121A]/10 px-6 py-6 space-y-3"
          >
            {/* Mobile Drawer Brand Header */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#4A121A]/10">
              <img
                src="/assets/logo/logo.png"
                alt="Tikhori"
                className="w-10 h-10 object-contain drop-shadow-xs"
              />
              <div>
                <span className="font-fatface text-xl tracking-wide text-[#E85A18] block leading-none">
                  TIKHORI
                </span>
                <span className="text-[8px] tracking-[0.28em] font-bold text-[#4A121A] uppercase">
                  HERITAGE FOODS
                </span>
              </div>
            </div>
            {[
              { name: 'LOCATIONS', path: '/stockists' },
              { name: 'SPICES & COLLECTION', path: '/collection' },
              { name: 'OUR STORY', path: '/story' },
              { name: 'QUALITY & PROCESS', path: '/quality' },
              { name: "WOMEN'S JOURNEY", path: '/empowerment' },
              { name: 'SPICE CLUB', path: '/spice-club' },
              { name: 'CONTACT US', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-1.5 text-xs font-bold tracking-widest uppercase transition-colors ${
                  isActive(link.path) ? 'text-[#E85A18] font-black' : 'text-[#4A121A] hover:text-[#E85A18]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#4A121A]/10 flex flex-col gap-2">
              <Link
                to="/collection"
                className="btn-teal-pill w-full text-center py-2.5"
              >
                SHOP NOW
              </Link>
              <Link
                to="/admin"
                className="w-full text-center py-2 text-xs font-bold uppercase text-[#4A121A] bg-[#FCE74C] rounded-full"
              >
                ADMIN MANAGEMENT PORTAL
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
