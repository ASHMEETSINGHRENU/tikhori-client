import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Mail, User, Phone, Shield, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, authModalTab, setAuthModalTab, login, register } = useAuth();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(loginEmail, loginPassword);
      closeAuthModal();
    } catch (err) {
      setError('Invalid credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      await register(registerData);
      closeAuthModal();
    } catch (err) {
      setError('Registration failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickAdminDemo = async () => {
    setLoading(true);
    await login('admin@tikhorifoods.com', 'Tikhori@Admin2026');
    setLoading(false);
    closeAuthModal();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#281006]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-md bg-[#FFFDF9] rounded-2xl shadow-2xl border border-[#D9A441]/40 overflow-hidden"
      >
        {/* Header Tabs */}
        <div className="bg-[#F8F1E5] px-6 pt-5 pb-3 border-b border-[#EDE3D1] flex items-center justify-between">
          <div className="flex gap-4">
            <button
              onClick={() => { setAuthModalTab('login'); setError(''); }}
              className={`text-sm font-display font-bold pb-1 transition-all ${
                authModalTab === 'login'
                  ? 'text-[#8C2F16] border-b-2 border-[#8C2F16]'
                  : 'text-[#4A3528]/60 hover:text-[#4A3528]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => { setAuthModalTab('register'); setError(''); }}
              className={`text-sm font-display font-bold pb-1 transition-all ${
                authModalTab === 'register'
                  ? 'text-[#8C2F16] border-b-2 border-[#8C2F16]'
                  : 'text-[#4A3528]/60 hover:text-[#4A3528]'
              }`}
            >
              Join Family
            </button>
          </div>
          <button
            onClick={closeAuthModal}
            className="w-7 h-7 rounded-full border border-[#D9A441]/30 flex items-center justify-center text-[#4A3528] hover:text-[#8C2F16]"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-center mb-3">
            <img src="/assets/logo/logo.png" alt="Tikhori Heritage Foods" className="w-12 h-12 object-contain drop-shadow-xs" />
          </div>
          {error && (
            <div className="mb-4 p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
              {error}
            </div>
          )}

          {authModalTab === 'login' ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-black text-xl text-[#8C2F16]">
                  Welcome Back to Tikhori
                </h3>
                <p className="text-xs text-[#4A3528]/80 mt-1 leading-relaxed">
                  Sign in to manage your account, revisit your orders, and continue exploring your favourite flavours.
                </p>
              </div>

              <form onSubmit={handleLoginSubmit} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#D9A441] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="e.g. foodlover@gmail.com"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-[#D9A441] absolute left-3.5 top-3" />
                    <input
                      type="password"
                      required
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#4A3528] pt-1">
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset instructions have been sent to your email.'); }} className="hover:text-[#8C2F16] hover:underline">
                    Forgot Password?
                  </a>
                  <button
                    type="button"
                    onClick={() => setAuthModalTab('register')}
                    className="text-[#8C2F16] font-bold hover:underline"
                  >
                    Create an Account
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-pill-primary text-xs py-2.5 mt-2"
                >
                  {loading ? 'Authenticating...' : 'Sign In'}
                </button>
              </form>

              {/* Quick Admin Demo Login Button */}
              <div className="pt-4 border-t border-[#EDE3D1]">
                <button
                  type="button"
                  onClick={handleQuickAdminDemo}
                  className="w-full py-2 px-3 rounded-full bg-[#281006] text-[#D9A441] hover:bg-[#8C2F16] text-[11px] font-semibold flex items-center justify-center gap-1.5 transition-colors border border-[#D9A441]/40"
                >
                  <Shield className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>One-Click Admin Demo Login</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-black text-xl text-[#8C2F16]">
                  Join the Tikhori Family
                </h3>
                <p className="text-xs text-[#4A3528]/80 mt-1 leading-relaxed">
                  Create an account for a convenient shopping experience and easy access to your orders.
                </p>
              </div>

              <form onSubmit={handleRegisterSubmit} className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={registerData.fullName}
                    onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                    placeholder="Pooja Sharma"
                    className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      placeholder="pooja@gmail.com"
                      className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      placeholder="+91 98..."
                      className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                      Confirm Password *
                    </label>
                    <input
                      type="password"
                      required
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-pill-primary text-xs py-2.5 mt-2"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthModal;
