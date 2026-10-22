import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { api } from '../../services/api';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    try {
      await api.subscribeEmail(email, '', 'Footer Newsletter');
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#281006] text-[#F8F1E5] border-t-2 border-[#D9A441]/40 relative overflow-hidden">
      {/* Subtle Botanical / Dotted Header Rule */}
      <div className="dotted-divider-dark w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#D9A441]/20">
          
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#FFFDF9] p-1 border border-[#D9A441]">
                <img src="/assets/logo/logo.png" alt="Tikhori" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="font-display font-black text-2xl tracking-widest text-[#D9A441] block">
                  TIKHORI
                </span>
                <span className="text-[11px] tracking-[0.25em] text-[#F8F1E5]/70 uppercase block">
                  Bringing Tradition to Every Table.
                </span>
              </div>
            </Link>

            <p className="text-sm text-[#F8F1E5]/80 leading-relaxed max-w-md pt-2">
              Tikhori celebrates the flavours of Indian cooking with a collection of spices designed to inspire everyday meals and special occasions.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#402011] text-[#D9A441] border border-[#D9A441]/30">
                <Sparkles className="w-3 h-3 text-[#D9A441]" />
                100% Stemless Chillies
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#402011] text-[#D9A441] border border-[#D9A441]/30">
                <ShieldCheck className="w-3 h-3 text-[#D9A441]" />
                Lab Tested & Purity Guaranteed
              </span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#D9A441]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F1E5]/80">
              <li>
                <Link to="/" className="hover:text-[#D9A441] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-[#D9A441] transition-colors">
                  Shop Spices
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-[#D9A441] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#D9A441] transition-colors">
                  Quality
                </Link>
              </li>
              <li>
                <Link to="/empowerment" className="hover:text-[#D9A441] transition-colors">
                  Women's Journey
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#D9A441]">
              Customer Support
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F1E5]/80">
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
                  My Orders
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-[#D9A441] transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#D9A441]">
              Stay Connected with Tikhori
            </h4>
            <p className="text-xs text-[#F8F1E5]/75 leading-relaxed">
              Subscribe to receive recipes, kitchen inspiration, product updates, and the latest from Tikhori.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#402011] border border-[#D9A441]/40 flex items-center gap-2 text-xs text-[#D9A441]">
                <CheckCircle2 className="w-4 h-4 text-[#D9A441]" />
                <span>Thank you! You're now on our flavour list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full py-2.5 pl-4 pr-10 text-xs bg-[#402011] border border-[#D9A441]/40 rounded-full text-[#F8F1E5] placeholder-[#F8F1E5]/40 outline-none focus:border-[#D9A441]"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#D9A441] hover:bg-[#F3C065] text-[#281006] rounded-full flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#F8F1E5]/60 flex items-center gap-1.5">
              <Heart className="w-3 h-3 text-[#D1255C]" />
              <span>Crafted with pride by women grassroots artisans</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F1E5]/60 gap-4">
          <p>© 2026 Tikhori. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#D9A441] transition-colors">
              FSSAI Lic. Certified
            </Link>
            <span className="text-[#D9A441]/40">•</span>
            <Link to="/admin" className="hover:text-[#D9A441] text-[#D9A441] font-semibold transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
