import React, { useState, useEffect } from 'react';
import { Sparkles, BookOpen, Gift, Video, CheckCircle2, ArrowRight, Flame, Utensils } from 'lucide-react';
import { api } from '../services/api';

const WHAT_TO_EXPECT = [
  {
    title: 'Recipe Inspiration',
    desc: 'Bespoke regional recipes tested and written by master Indian home cooks and culinary historians.',
    icon: Utensils
  },
  {
    title: 'Tips for Using Spices',
    desc: 'The science behind tempering (tadka), spice layering, cold blooming, and avoiding burnt bitterness.',
    icon: Flame
  },
  {
    title: 'Product Announcements',
    desc: 'First notice on single-origin small-batch winter releases, such as Salem Turmeric and Byadgi Chilli.',
    icon: Sparkles
  },
  {
    title: 'Seasonal Cooking Ideas',
    desc: 'Monsoon comfort khichdis, Diwali royal sweets, and refreshing summer chaat spice blends.',
    icon: BookOpen
  },
  {
    title: 'News from Tikhori',
    desc: 'Stories and direct updates from our grassroots women farming collectives across Maharashtra and India.',
    icon: Gift
  }
];

const SAMPLE_RECIPES = [
  {
    title: 'Smoky Kolhapuri Veg Usal',
    spiceUsed: 'Heritage Kaala Masala',
    time: '30 mins',
    desc: 'A fiery Maharashtrian sprouted bean delicacy enriched with stone flower, roasted dry coconut, and slow-fried onions.'
  },
  {
    title: 'Golden Amritsari Dal Tadka',
    spiceUsed: 'Salem Haldi & Slow-Roasted Jeera',
    time: '25 mins',
    desc: 'Velvety yellow lentils tempered in cow ghee, crushed garlic, and aromatic whole cumin seeds.'
  },
  {
    title: 'Royal Paneer Tikka Marinade',
    spiceUsed: 'Lal Mirch Masala & Cold-Milled Dhaniya',
    time: '20 mins',
    desc: 'Thick hung curd whisked with stemless scarlet chilli, crushed coriander, and roasted kasuri methi.'
  }
];

const SpiceClubPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [joined, setJoined] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleJoin = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await api.subscribeEmail(email, name, 'Spice Club VIP Page');
      setJoined(true);
      setEmail('');
      setName('');
    } catch (e) {
      setJoined(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>VIP CULINARY CIRCLE</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#8C2F16] tracking-tight">
            A Community That Loves Flavour
          </h1>

          <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
            Welcome to the Tikhori Spice Club, where food lovers can discover fresh inspiration, explore recipes, and celebrate the flavours that make every meal special.
          </p>
        </div>

        {/* Join Club Hero Banner Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#281006] text-[#F8F1E5] border-2 border-[#D9A441]/50 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase">
                FREE LIFETIME MEMBERSHIP
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl">
                Elevate Your Everyday Kitchen Craft
              </h2>
              <p className="text-sm text-[#F8F1E5]/80 font-light leading-relaxed">
                Join thousands of food enthusiasts across India. Receive secret discount codes, monthly spice pairings, and seasonal recipe collections straight to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#402011] p-6 rounded-2xl border border-[#D9A441]/40">
              {joined ? (
                <div className="text-center py-4 space-y-2 text-[#D9A441]">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-[#D9A441]" />
                  <h3 className="font-display font-bold text-lg text-[#F8F1E5]">
                    Welcome to the Spice Club!
                  </h3>
                  <p className="text-xs text-[#F8F1E5]/80">
                    Use code <strong className="text-[#D9A441]">SPICECLUB15</strong> on your next order for 15% off.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleJoin} className="space-y-3">
                  <h3 className="font-display font-bold text-sm text-[#D9A441] uppercase tracking-wider">
                    Sign Up for Free Membership
                  </h3>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] placeholder-[#F8F1E5]/50 outline-none focus:border-[#D9A441]"
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address"
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] placeholder-[#F8F1E5]/50 outline-none focus:border-[#D9A441]"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-pill-gold py-3 text-xs font-bold"
                  >
                    {loading ? 'Joining Circle...' : 'Join the Spice Club'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* What to Expect Section */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase">
              MEMBER PRIVILEGES
            </span>
            <h2 className="font-display font-black text-3xl text-[#8C2F16]">
              What to Expect
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHAT_TO_EXPECT.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#D9A441]/30 hover:border-[#8C2F16] shadow-sm transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#8C2F16]/10 text-[#8C2F16] flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#8C2F16]" />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#8C2F16]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A3528]/80 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exclusive Recipe Inspiration Preview */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#D9A441] tracking-widest uppercase">
              COMMUNITY RECIPES
            </span>
            <h2 className="font-display font-black text-3xl text-[#8C2F16]">
              Flavour Stories from Our Kitchens
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_RECIPES.map((recipe, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#FFFDF9] border border-[#EDE3D1] space-y-3 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-[#D9A441] uppercase">
                  <span>{recipe.time}</span>
                  <span className="text-[#8C2F16] bg-[#8C2F16]/10 px-2 py-0.5 rounded-full">
                    {recipe.spiceUsed}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-[#8C2F16]">
                  {recipe.title}
                </h3>
                <p className="text-xs text-[#4A3528]/80 leading-relaxed font-light">
                  {recipe.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SpiceClubPage;
