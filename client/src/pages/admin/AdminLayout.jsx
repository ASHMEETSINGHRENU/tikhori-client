import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Store,
  MessageSquare,
  Users,
  Shield,
  ArrowLeft,
  LogOut,
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const NAV_ITEMS = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Products', path: '/admin/products', icon: Package },
  { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
  { name: 'Stockists', path: '/admin/stockists', icon: Store },
  { name: 'Inquiries', path: '/admin/enquiries', icon: MessageSquare },
  { name: 'Subscribers', path: '/admin/subscribers', icon: Users }
];

const AdminLayout = () => {
  const { user, isAdmin, login, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If not logged in as Admin, show luxury Admin Login Gateway
  if (!isAdmin) {
    const handleAdminLogin = async (e) => {
      e.preventDefault();
      setAuthError('');
      const res = await login(adminEmail, adminPassword);
      if (!res.success) {
        setAuthError('Invalid administrator credentials.');
      }
    };

    const handleOneClickDemo = async () => {
      await login('admin@tikhorifoods.com', 'Tikhori@Admin2026');
    };

    return (
      <div className="min-h-screen bg-[#281006] text-[#F8F1E5] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#402011] p-8 rounded-3xl border-2 border-[#D9A441]/50 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-[#281006] border border-[#D9A441] p-2 mx-auto flex items-center justify-center">
              <img src="/assets/logo/logo.png" alt="Tikhori" className="w-full h-full object-contain" />
            </div>
            <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
              MANAGEMENT SUITE
            </span>
            <h2 className="font-display font-black text-2xl text-[#F8F1E5]">
              Tikhori Admin Portal
            </h2>
            <p className="text-xs text-[#F8F1E5]/70">
              Sign in with your verified administrator credentials to manage products, orders, stockists, and customer inquiries.
            </p>
          </div>

          {authError && (
            <div className="p-3 rounded-xl bg-red-900/50 border border-red-500/50 text-xs text-red-200">
              {authError}
            </div>
          )}

          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="admin@tikhorifoods.com"
                className="w-full px-4 py-2.5 rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] text-xs outline-none focus:border-[#D9A441]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] text-xs outline-none focus:border-[#D9A441]"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-pill-gold py-3 text-xs font-bold"
            >
              Enter Admin Portal
            </button>
          </form>

          {/* Quick Demo Login */}
          <div className="pt-4 border-t border-[#D9A441]/20 space-y-3">
            <button
              onClick={handleOneClickDemo}
              className="w-full py-2.5 rounded-full bg-[#8C2F16] hover:bg-[#A63B1E] text-[#F8F1E5] text-xs font-semibold flex items-center justify-center gap-2 border border-[#D9A441]/40 transition-colors"
            >
              <Shield className="w-4 h-4 text-[#D9A441]" />
              <span>One-Click Demo Admin Login</span>
            </button>

            <div className="text-center">
              <Link
                to="/"
                className="text-xs text-[#F8F1E5]/60 hover:text-[#D9A441] inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Storefront</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const isActive = (path) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#281006] text-[#F8F1E5] flex flex-col lg:flex-row">
      
      {/* Mobile Topbar */}
      <div className="lg:hidden bg-[#402011] p-4 border-b border-[#D9A441]/30 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src="/assets/logo/logo.png" alt="Tikhori" className="w-8 h-8 object-contain" />
          <span className="font-display font-black text-lg text-[#D9A441]">TIKHORI ADMIN</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-[#281006] text-[#D9A441] border border-[#D9A441]/40"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:sticky top-0 left-0 bottom-0 z-40 w-64 bg-[#402011] border-r border-[#D9A441]/30 flex flex-col justify-between p-6 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-6">
          {/* Brand Mark */}
          <div className="flex items-center gap-3 pb-6 border-b border-[#D9A441]/20">
            <div className="w-10 h-10 rounded-full bg-[#281006] border border-[#D9A441] p-1 flex items-center justify-center">
              <img src="/assets/logo/logo.png" alt="Tikhori" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-display font-black text-base text-[#D9A441] block">
                TIKHORI
              </span>
              <span className="text-[10px] tracking-widest text-[#F8F1E5]/70 uppercase block">
                Administrator
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const IconComp = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                    active
                      ? 'bg-[#8C2F16] text-[#F8F1E5] shadow-md border border-[#D9A441]/40'
                      : 'text-[#F8F1E5]/75 hover:bg-[#281006] hover:text-[#D9A441]'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${active ? 'text-[#D9A441]' : 'text-[#D9A441]/80'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-[#D9A441]/20 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold text-[#D9A441] bg-[#281006] hover:bg-[#8C2F16] border border-[#D9A441]/40 transition-colors w-full"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>View Live Store</span>
          </Link>

          <button
            onClick={() => { logout(); navigate('/'); }}
            className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-[#F8F1E5]/60 hover:text-red-400 transition-colors w-full"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Canvas */}
      <main className="flex-1 min-w-0 p-6 sm:p-8 lg:p-10 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;
