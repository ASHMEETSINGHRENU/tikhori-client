import React, { useState } from 'react';
import { Mail, User, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { api } from '../../services/api';

const NewsletterSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ submitted: false, loading: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus({ submitted: false, loading: true });
    try {
      await api.subscribeEmail(email, name, 'Homepage Newsletter');
      setStatus({ submitted: true, loading: false });
      setName('');
      setEmail('');
    } catch (e) {
      setStatus({ submitted: true, loading: false });
    }
  };

  return (
    <section className="py-20 bg-[#F8F1E5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FFFDF9] border-2 border-[#D9A441]/40 shadow-xl text-center space-y-6 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>KITCHEN INSPIRATION & UPDATES</span>
          </div>

          <div className="space-y-2">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#8C2F16] tracking-tight">
              A Little More Flavour in Your Inbox
            </h2>
            <p className="text-sm text-[#4A3528]/85 font-light max-w-xl mx-auto leading-relaxed">
              Subscribe to receive recipes, kitchen inspiration, product updates, and the latest from Tikhori.
            </p>
          </div>

          {status.submitted ? (
            <div className="max-w-md mx-auto p-4 rounded-full bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>You're subscribed! Warm flavours will be arriving in your inbox soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-3">
              <div className="relative flex-1">
                <User className="w-4 h-4 text-[#D9A441] absolute left-4 top-3.5" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full pl-11 pr-4 py-3 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] text-[#4A3528] placeholder-[#4A3528]/50 outline-none focus:border-[#8C2F16]"
                />
              </div>

              <div className="relative flex-1">
                <Mail className="w-4 h-4 text-[#D9A441] absolute left-4 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full pl-11 pr-4 py-3 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] text-[#4A3528] placeholder-[#4A3528]/50 outline-none focus:border-[#8C2F16]"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full sm:w-auto btn-pill-primary py-3 px-7 text-xs font-bold"
              >
                {status.loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#4A3528]/60">
            No spam, ever. Only authentic culinary secrets and seasonal releases. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
