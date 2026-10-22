import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, BookOpen, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { api } from '../../services/api';

const PERKS = [
  { icon: BookOpen, title: 'Secret Family Recipes', desc: 'Step-by-step masterclasses on regional curries & artisanal tadkas.' },
  { icon: Gift, title: 'Complimentary Jar Gifts', desc: 'Sample upcoming harvest blends before they are released.' },
  { icon: Sparkles, title: '15% Off VIP Orders', desc: 'Special member-only promotional codes applied automatically.' }
];

const SpiceClubSection = () => {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleJoin = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    try {
      await api.subscribeEmail(email, '', 'Spice Club');
      setJoined(true);
    } catch (e) {
      setJoined(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#402011] text-[#F8F1E5] relative overflow-hidden border-b border-[#D9A441]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Description (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D9A441]/20 border border-[#D9A441]/40 text-[#D9A441] text-xs font-bold tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
              <span>COMMUNITY OF FLAVOUR LOVERS</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#F8F1E5] tracking-tight leading-[1.12]">
              Welcome to the <br />
              <span className="text-[#D9A441] italic font-serif">Tikhori Spice Club</span>
            </h2>

            <p className="text-sm sm:text-base text-[#F8F1E5]/85 font-light leading-relaxed">
              Stay connected with the flavours you love. Discover recipes, cooking inspiration, new products, and ideas to make every meal more memorable.
            </p>

            {/* Quick Membership Form */}
            {joined ? (
              <div className="p-4 rounded-2xl bg-[#281006] border border-[#D9A441] flex items-center gap-3 text-sm text-[#D9A441]">
                <CheckCircle2 className="w-6 h-6 text-[#D9A441] flex-shrink-0" />
                <div>
                  <strong className="block font-bold">Welcome to the Spice Club!</strong>
                  <span className="text-xs text-[#F8F1E5]/80">Check your inbox for your secret 15% welcome code: SPICECLUB15.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleJoin} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join free"
                  className="px-5 py-3 rounded-full text-xs bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] placeholder-[#F8F1E5]/50 outline-none focus:border-[#D9A441] flex-1"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill-gold py-3 px-7 text-xs font-bold whitespace-nowrap"
                >
                  {loading ? 'Joining...' : 'Join the Spice Club'}
                </button>
              </form>
            )}

            <div className="pt-2">
              <Link
                to="/spice-club"
                className="text-xs text-[#D9A441] font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>Explore all member benefits & community stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Perks Visual (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {PERKS.map((perk, i) => {
              const IconComp = perk.icon;
              return (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#281006] border border-[#D9A441]/30 hover:border-[#D9A441] flex items-center gap-4 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#D9A441]/10 border border-[#D9A441]/30 flex items-center justify-center text-[#D9A441] flex-shrink-0">
                    <IconComp className="w-5 h-5 text-[#D9A441]" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#D9A441]">
                      {perk.title}
                    </h4>
                    <p className="text-xs text-[#F8F1E5]/75 mt-0.5 leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpiceClubSection;
