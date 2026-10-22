import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { api } from '../../services/api';

const ComptoirNewsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setLoading(true);
    try {
      await api.subscribeEmail(email, '', 'Comptoir Scoop Newsletter');
      setSubmitted(true);
      setEmail('');
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#E85A18] text-white py-10 sm:py-14 border-b-2 border-[#4A121A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: Heading & Narrative (7 cols) */}
          <div className="md:col-span-7 space-y-1 text-center md:text-left">
            <h3 className="font-fraunces font-bold text-2xl sm:text-3xl text-white tracking-tight">
              Get the scoop
            </h3>
            <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              Join our newsletter and be the first to hear on all things new in the world of Tikhori.
            </p>
          </div>

          {/* Right Column: Inline Input + Submit Arrow (5 cols) */}
          <div className="md:col-span-5">
            {submitted ? (
              <div className="p-3 rounded-full bg-[#FCE74C] text-[#4A121A] text-xs font-bold text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E85A18]" />
                <span>You're in! Welcome to the spice family.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address here..."
                  className="w-full py-3 pl-5 pr-14 text-xs font-medium rounded-full bg-[#C9460C] text-white placeholder-white/60 border border-white/25 outline-none focus:border-[#FCE74C]"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-9 h-9 rounded-full bg-[#FCE74C] hover:bg-[#FFF066] text-[#4A121A] flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-4 h-4 text-[#4A121A]" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ComptoirNewsletter;
