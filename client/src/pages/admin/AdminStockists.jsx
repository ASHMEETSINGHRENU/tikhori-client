import React, { useState, useEffect } from 'react';
import { Store, Plus, Trash2, MapPin, Phone, X } from 'lucide-react';
import { api } from '../../services/api';

const AdminStockists = () => {
  const [stockists, setStockists] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    timings: '9:30 AM - 9:00 PM'
  });

  const loadStockists = async () => {
    const list = await api.getStockists();
    setStockists(list);
  };

  useEffect(() => {
    loadStockists();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.city) return;
    await api.createStockist(formData);
    setIsModalOpen(false);
    setFormData({
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      timings: '9:30 AM - 9:00 PM'
    });
    loadStockists();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this stockist location?')) {
      await api.deleteStockist(id);
      loadStockists();
    }
  };

  return (
    <div className="space-y-6 max-w-6xl">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9A441]/20">
        <div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
            RETAIL DISTRIBUTION
          </span>
          <h1 className="font-display font-black text-3xl text-[#F8F1E5]">
            Stockists & Supermarkets ({stockists.length})
          </h1>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="btn-pill-gold py-2.5 px-6 text-xs font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-[#281006]" />
          <span>Add New Stockist</span>
        </button>
      </div>

      {/* Stockists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stockists.map((st) => (
          <div
            key={st.id}
            className="p-5 rounded-2xl bg-[#402011] border border-[#D9A441]/30 flex flex-col justify-between space-y-4 shadow-md"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#281006] bg-[#D9A441] px-2.5 py-0.5 rounded-full">
                  {st.city}
                </span>
                <button
                  onClick={() => handleDelete(st.id)}
                  className="text-red-400 hover:text-red-300 p-1"
                  title="Remove Stockist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <h3 className="font-display font-bold text-base text-[#F8F1E5]">
                {st.name}
              </h3>

              <p className="text-xs text-[#F8F1E5]/80 leading-relaxed font-light">
                {st.address}, PIN: {st.pincode}
              </p>

              <div className="pt-2 text-xs text-[#D9A441] flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>{st.phone}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-[#D9A441]/20 flex items-center justify-between text-[11px] text-[#F8F1E5]/60">
              <span>Timings: {st.timings}</span>
              <span className="text-emerald-400 font-bold">● Active Partner</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Stockist Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#402011] rounded-3xl border-2 border-[#D9A441]/50 shadow-2xl p-6 sm:p-8 space-y-4 text-[#F8F1E5]">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9A441]/30">
              <h3 className="font-display font-black text-xl text-[#D9A441]">
                Register New Stockist
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#D9A441] mb-1">Store Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Modern Bazaar Heritage"
                  className="w-full px-4 py-2 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D9A441] mb-1">Street Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Shop 12, Main Market Road"
                  className="w-full px-4 py-2 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Pune"
                    className="w-full px-4 py-2 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">PIN Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="411004"
                    className="w-full px-4 py-2 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">Contact Phone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98..."
                    className="w-full px-4 py-2 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">Store Timings</label>
                  <input
                    type="text"
                    value={formData.timings}
                    onChange={(e) => setFormData({ ...formData, timings: e.target.value })}
                    placeholder="9:30 AM - 9:00 PM"
                    className="w-full px-4 py-2 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end gap-3 border-t border-[#D9A441]/20">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs text-[#F8F1E5]/70"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-pill-gold py-2 px-6 text-xs font-bold"
                >
                  Save Partner Store
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminStockists;
