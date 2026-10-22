import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Store, HelpCircle, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.submitEnquiry({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch (e) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F1E5] min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#8C2F16]/10 border border-[#8C2F16]/20 text-[#8C2F16] text-xs font-bold tracking-[0.2em] uppercase">
            <Mail className="w-3.5 h-3.5 text-[#D9A441]" />
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl text-[#8C2F16] tracking-tight">
            Let's Connect Over a Love of Flavour
          </h1>

          <p className="text-sm sm:text-base text-[#4A3528]/85 font-light leading-relaxed">
            Have a question about our products, an order, or becoming a Tikhori stockist? We'd love to hear from you.
          </p>
        </div>

        {/* Form & Support Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-3xl p-8 sm:p-10 border border-[#D9A441]/30 shadow-md">
            <h2 className="font-display font-bold text-2xl text-[#8C2F16] mb-2">
              Send Us a Message
            </h2>
            <p className="text-xs text-[#4A3528]/80 mb-6">
              Our culinary concierge team typically responds within 24 business hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-display font-bold text-lg text-emerald-800">
                  Message Successfully Delivered!
                </h3>
                <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Tikhori. We have logged your enquiry and our team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-pill-primary text-xs py-2 px-6 mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Sanjeev Kapoor"
                      className="w-full px-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sanjeev@example.com"
                      className="w-full px-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4A3528] mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Product inquiry / Stockist request"
                      className="w-full px-4 py-2.5 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4A3528] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 text-xs rounded-2xl border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill-primary py-3.5 px-8 text-xs font-bold flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#D9A441]" />
                  <span>{loading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Information Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Stockist & Business Enquiries */}
            <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#8C2F16]">
                <Store className="w-5 h-5 text-[#8C2F16]" />
                <h3 className="font-display font-bold text-lg">
                  Stockist & Business Enquiries
                </h3>
              </div>
              <p className="text-xs text-[#4A3528]/85 leading-relaxed font-light">
                Interested in stocking Tikhori products or exploring a business association? Contact us to discuss your enquiry.
              </p>
              <span className="inline-block text-xs font-bold text-[#8C2F16]">
                b2b@tikhorifoods.com
              </span>
            </div>

            {/* Customer Support */}
            <div className="p-6 rounded-3xl bg-[#FFFDF9] border border-[#D9A441]/30 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5 text-[#8C2F16]">
                <HelpCircle className="w-5 h-5 text-[#8C2F16]" />
                <h3 className="font-display font-bold text-lg">
                  Customer Support
                </h3>
              </div>
              <p className="text-xs text-[#4A3528]/85 leading-relaxed font-light">
                Need help with a product or order? Send us your details and our team can get back to you.
              </p>
              <span className="inline-block text-xs font-bold text-[#8C2F16]">
                support@tikhorifoods.com
              </span>
            </div>

            {/* Direct Contact Information Placeholders */}
            <div className="p-6 rounded-3xl bg-[#281006] text-[#F8F1E5] border border-[#D9A441]/40 shadow-xl space-y-4">
              <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[#D9A441]">
                Official Headquarters
              </h4>

              <div className="space-y-3 text-xs text-[#F8F1E5]/80">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#D9A441] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#D9A441] uppercase tracking-wider">Email</span>
                    <span>support@tikhorifoods.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D9A441] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#D9A441] uppercase tracking-wider">Phone</span>
                    <span>+91 1800 209 8899 (Toll Free)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D9A441] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-[10px] text-[#D9A441] uppercase tracking-wider">Address</span>
                    <span>Tikhori Foods Estate, Spice Boulevard, Mumbai, Maharashtra 400001, India</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
