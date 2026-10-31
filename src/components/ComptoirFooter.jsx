import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, ShieldCheck } from 'lucide-react';

const ComptoirFooter = () => {
  return (
    <footer className="bg-[#FBF6ED] text-[#4A121A] pt-14 pb-8 border-t border-[#4A121A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4A121A]/10">
          
          {/* Column 1: Brandmark (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group inline-flex">
              <img
                src="/assets/logo/logo.png"
                alt="Tikhori Heritage Foods Logo"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
              />
              <div>
                <span className="font-fatface text-3xl sm:text-4xl tracking-wide text-[#E85A18] block leading-none group-hover:text-[#C9460C] transition-colors">
                  TIKHORI
                </span>
                <span className="text-[10px] tracking-[0.28em] font-bold text-[#4A121A] uppercase block mt-1">
                  HERITAGE FOODS
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#4A121A]/80 font-light leading-relaxed max-w-sm pt-1">
              Food shared is a memory made. Celebrating the deep culinary traditions of India with pure natural spices crafted for every kitchen.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-bold text-[#E85A18]">
              <ShieldCheck className="w-4 h-4 text-[#009E96]" />
              <span> Stemless Chillies </span>
            </div>
          </div>

          {/* Column 2: Quick Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E85A18]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-[#4A121A]/85">
              <li>
                <Link to="/collection" className="hover:text-[#E85A18] transition-colors">
                  Spice Collection & Pantry
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#E85A18] transition-colors">
                  Tales of Tikhori (Our Story)
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#E85A18] transition-colors">
                  Quality & 5-Step Process
                </Link>
              </li>
              <li>
                <Link to="/empowerment" className="hover:text-[#E85A18] transition-colors">
                  Women's Empowerment Journey
                </Link>
              </li>
              <li>
                <Link to="/stockists" className="hover:text-[#E85A18] transition-colors">
                  Stockist & Supermarket Locator
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E85A18] transition-colors">
                  Contact Us & Wholesale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#E85A18]">
              FOLLOW US
            </h4>
            <div className="space-y-2.5 text-xs font-semibold text-[#4A121A]">
              <a
                href="https://www.instagram.com/tikhorifoods/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#E85A18] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E85A18]" />
                <span>Instagram</span>
              </a>

            </div>

            <div className="pt-4">
              <Link
                to="/admin"
                className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-[#4A121A] bg-[#FCE74C] hover:bg-[#FFF066] transition-colors uppercase tracking-wider shadow-xs"
              >
                Admin Management Portal
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Footer Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#4A121A]/60 gap-4">
          <p>© 2026 Tikhori. All rights reserved.</p>
          <div className="flex items-center gap-4 flex-wrap">
            <Link to="/contact" className="hover:text-[#E85A18]">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#E85A18]">Cookies</Link>
            <span>•</span>
            <Link to="/quality" className="hover:text-[#E85A18]">Sustainability</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#E85A18]">FSSAI Lic. Certified</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ComptoirFooter;
