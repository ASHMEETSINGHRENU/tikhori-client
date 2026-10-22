import React, { useState, useEffect } from 'react';
import { Package, Plus, Edit2, Trash2, CheckCircle, X, Sparkles, Image as ImageIcon } from 'lucide-react';
import { api } from '../../services/api';

const PRODUCT_IMAGES = [
  { label: 'Lal Mirch (Red)', path: '/assets/products/product-1.png' },
  { label: 'Haldi (Golden)', path: '/assets/products/product-2.png' },
  { label: 'Dhaniya (Green)', path: '/assets/products/product-3.png' },
  { label: 'Jeera / Kaala Masala (Roasted)', path: '/assets/products/product-4.png' }
];

const CATEGORIES = [
  'Everyday Spices',
  'Blended Masalas',
  'Regional Flavours',
  'Signature Blends',
  'Combo Packs'
];

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    hindiName: '',
    subtitle: '',
    category: 'Everyday Spices',
    price: 145,
    image: '/assets/products/product-1.png',
    badge: 'Artisanal Batch',
    heatLevel: 'Medium',
    shortDescription: '',
    about: '',
    inStock: true
  });

  const loadProducts = async () => {
    const list = await api.getProducts();
    setProducts(list);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleOpenCreate = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      hindiName: '',
      subtitle: '',
      category: 'Everyday Spices',
      price: 145,
      image: '/assets/products/product-1.png',
      badge: 'Artisanal Batch',
      heatLevel: 'Medium',
      shortDescription: '',
      about: '',
      inStock: true
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (p) => {
    setEditingProduct(p);
    setFormData({
      name: p.name,
      hindiName: p.hindiName || '',
      subtitle: p.subtitle || '',
      category: p.category,
      price: p.price,
      image: p.image,
      badge: p.badge || '',
      heatLevel: p.heatLevel || '',
      shortDescription: p.shortDescription || '',
      about: p.about || '',
      inStock: p.inStock
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this spice from the catalog?')) {
      await api.deleteProduct(id);
      loadProducts();
    }
  };

  const handleToggleStock = async (product) => {
    await api.updateProduct(product.id, { inStock: !product.inStock });
    loadProducts();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return;

    if (editingProduct) {
      await api.updateProduct(editingProduct.id, formData);
    } else {
      await api.createProduct({
        ...formData,
        weights: [
          { weight: '100g', price: Math.round(formData.price * 0.45), inStock: true },
          { weight: '250g', price: formData.price, inStock: true },
          { weight: '500g', price: Math.round(formData.price * 1.9), inStock: true },
          { weight: '1kg', price: Math.round(formData.price * 3.6), inStock: true }
        ],
        ingredients: ['100% Pure Sun-Dried Spice', 'Cold Milled', 'Zero Artificial Additives'],
        howToUse: 'Add as required to curries, gravies, and marinades.',
        storage: 'Store in an airtight container away from moisture.'
      });
    }

    setIsModalOpen(false);
    loadProducts();
  };

  return (
    <div className="space-y-6 max-w-6xl">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9A441]/20">
        <div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
            CATALOG MANAGEMENT
          </span>
          <h1 className="font-display font-black text-3xl text-[#F8F1E5]">
            Spices & Products ({products.length})
          </h1>
        </div>

        <button
          onClick={handleOpenCreate}
          className="btn-pill-gold py-2.5 px-6 text-xs font-bold flex items-center gap-2"
        >
          <Plus className="w-4 h-4 text-[#281006]" />
          <span>Add New Spice</span>
        </button>
      </div>

      {/* Products Table */}
      <div className="bg-[#402011] rounded-3xl border border-[#D9A441]/30 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#281006] text-[10px] uppercase tracking-wider text-[#D9A441] border-b border-[#D9A441]/20">
              <tr>
                <th className="py-4 px-4">Spice</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Base Price</th>
                <th className="py-4 px-4">Stock Status</th>
                <th className="py-4 px-4">Rating</th>
                <th className="py-4 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9A441]/10 text-[#F8F1E5]">
              {products.map((p) => (
                <tr key={p.id} className="hover:bg-[#281006]/40 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#281006] p-1 border border-[#D9A441]/30 flex items-center justify-center flex-shrink-0">
                        <img src={p.image} alt={p.name} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <span className="font-display font-bold text-sm text-[#F8F1E5] block">
                          {p.name}
                        </span>
                        {p.hindiName && (
                          <span className="text-[11px] font-serif text-[#D9A441] block">
                            {p.hindiName}
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] bg-[#281006] text-[#D9A441] border border-[#D9A441]/30">
                      {p.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-bold text-[#F8F1E5] text-sm">
                    ₹{p.price}
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleToggleStock(p)}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-colors ${
                        p.inStock
                          ? 'bg-emerald-900/40 text-emerald-300 border-emerald-500/50'
                          : 'bg-red-900/40 text-red-300 border-red-500/50'
                      }`}
                    >
                      {p.inStock ? '● In Stock' : '✕ Out of Stock'}
                    </button>
                  </td>
                  <td className="py-4 px-4 text-[#D9A441] font-semibold">
                    ★ {p.rating} ({p.reviewsCount})
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEdit(p)}
                        className="p-1.5 rounded-lg bg-[#281006] hover:bg-[#8C2F16] text-[#D9A441] transition-colors"
                        title="Edit Spice"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 rounded-lg bg-[#281006] hover:bg-red-900 text-red-300 transition-colors"
                        title="Delete Spice"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-[#402011] rounded-3xl border-2 border-[#D9A441]/50 shadow-2xl p-6 sm:p-8 space-y-4 text-[#F8F1E5]">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9A441]/30">
              <h3 className="font-display font-black text-xl text-[#D9A441]">
                {editingProduct ? 'Edit Spice Product' : 'Add New Handcrafted Spice'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                    Product Name (English) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Kashmiri Lal Mirch"
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                    Hindi Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.hindiName}
                    onChange={(e) => setFormData({ ...formData, hindiName: e.target.value })}
                    placeholder="e.g. कश्मीरी लाल मिर्च"
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                    Default Price (250g) *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                    Badge Tag
                  </label>
                  <input
                    type="text"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    placeholder="Flagship / Limited Harvest"
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                  />
                </div>
              </div>

              {/* Image Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#D9A441] mb-1.5">
                  Packaging Image
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRODUCT_IMAGES.map((img) => (
                    <div
                      key={img.path}
                      onClick={() => setFormData({ ...formData, image: img.path })}
                      className={`cursor-pointer p-2 rounded-xl border flex items-center gap-2 transition-all ${
                        formData.image === img.path
                          ? 'border-[#D9A441] bg-[#281006] ring-1 ring-[#D9A441]'
                          : 'border-[#D9A441]/20 bg-[#281006]/50 hover:border-[#D9A441]/60'
                      }`}
                    >
                      <img src={img.path} alt={img.label} className="w-8 h-8 object-contain" />
                      <span className="text-[10px] text-[#F8F1E5] leading-tight">{img.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                  Short Description *
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  placeholder="Catchy editorial description for cards and overview..."
                  className="w-full px-4 py-2 text-xs rounded-xl bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D9A441] mb-1">
                  Full Story & About
                </label>
                <textarea
                  rows={3}
                  value={formData.about}
                  onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                  placeholder="Heritage origin, farming collective, and artisanal milling details..."
                  className="w-full px-4 py-2 text-xs rounded-xl bg-[#281006] border border-[#D9A441]/40 text-[#F8F1E5] outline-none focus:border-[#D9A441]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#D9A441]/20">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs text-[#F8F1E5]/70 hover:text-[#D9A441]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-pill-gold py-2.5 px-7 text-xs font-bold"
                >
                  {editingProduct ? 'Save Updates' : 'Publish Spice to Catalog'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminProducts;
