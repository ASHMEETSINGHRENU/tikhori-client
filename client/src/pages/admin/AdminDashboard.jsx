import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  DollarSign,
  ShoppingBag,
  Package,
  Store,
  Users,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { api } from '../../services/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    revenue: 0,
    totalOrders: 0,
    productsCount: 0,
    stockistsCount: 0,
    subscribersCount: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getOrders(),
      api.getProducts(),
      api.getStockists(),
      api.getSubscribers()
    ]).then(([orders, prods, stockists, subs]) => {
      const revenue = orders.reduce((acc, o) => acc + (o.total || 0), 0);
      setStats({
        revenue,
        totalOrders: orders.length,
        productsCount: prods.length,
        stockistsCount: stockists.length,
        subscribersCount: subs.length
      });
      setRecentOrders(orders.slice(0, 5));
      setProducts(prods);
    });
  }, []);

  return (
    <div className="space-y-8 max-w-6xl">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9A441]/20">
        <div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
            EXECUTIVE DASHBOARD
          </span>
          <h1 className="font-display font-black text-3xl text-[#F8F1E5]">
            Tikhori Operations Overview
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/admin/products"
            className="btn-pill-gold py-2.5 px-5 text-xs font-bold flex items-center gap-1.5"
          >
            <Package className="w-3.5 h-3.5 text-[#281006]" />
            <span>Manage Products</span>
          </Link>
        </div>
      </div>

      {/* 5 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Card 1: Revenue */}
        <div className="p-5 rounded-2xl bg-[#402011] border border-[#D9A441]/30 space-y-2">
          <div className="flex items-center justify-between text-[#D9A441]">
            <span className="text-xs font-bold uppercase tracking-wider">Gross Sales</span>
            <DollarSign className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div className="font-display font-black text-2xl text-[#F8F1E5]">
            ₹{stats.revenue}
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold block">
            ↑ 18.4% this month
          </span>
        </div>

        {/* Card 2: Total Orders */}
        <div className="p-5 rounded-2xl bg-[#402011] border border-[#D9A441]/30 space-y-2">
          <div className="flex items-center justify-between text-[#D9A441]">
            <span className="text-xs font-bold uppercase tracking-wider">Orders</span>
            <ShoppingBag className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div className="font-display font-black text-2xl text-[#F8F1E5]">
            {stats.totalOrders}
          </div>
          <span className="text-[10px] text-[#F8F1E5]/70 block">
            Live orders captured
          </span>
        </div>

        {/* Card 3: Products */}
        <div className="p-5 rounded-2xl bg-[#402011] border border-[#D9A441]/30 space-y-2">
          <div className="flex items-center justify-between text-[#D9A441]">
            <span className="text-xs font-bold uppercase tracking-wider">Spices</span>
            <Package className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div className="font-display font-black text-2xl text-[#F8F1E5]">
            {stats.productsCount}
          </div>
          <span className="text-[10px] text-[#F8F1E5]/70 block">
            Catalog inventory
          </span>
        </div>

        {/* Card 4: Stockists */}
        <div className="p-5 rounded-2xl bg-[#402011] border border-[#D9A441]/30 space-y-2">
          <div className="flex items-center justify-between text-[#D9A441]">
            <span className="text-xs font-bold uppercase tracking-wider">Stockists</span>
            <Store className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div className="font-display font-black text-2xl text-[#F8F1E5]">
            {stats.stockistsCount}
          </div>
          <span className="text-[10px] text-[#F8F1E5]/70 block">
            Retail partners across India
          </span>
        </div>

        {/* Card 5: Subscribers */}
        <div className="p-5 rounded-2xl bg-[#402011] border border-[#D9A441]/30 space-y-2">
          <div className="flex items-center justify-between text-[#D9A441]">
            <span className="text-xs font-bold uppercase tracking-wider">Community</span>
            <Users className="w-4 h-4 text-[#D9A441]" />
          </div>
          <div className="font-display font-black text-2xl text-[#F8F1E5]">
            {stats.subscribersCount}
          </div>
          <span className="text-[10px] text-[#F8F1E5]/70 block">
            Spice Club subscribers
          </span>
        </div>

      </div>

      {/* Recent Orders Section */}
      <div className="p-6 rounded-3xl bg-[#402011] border border-[#D9A441]/30 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9A441]/20">
          <div>
            <h2 className="font-display font-bold text-lg text-[#F8F1E5]">
              Recent Customer Orders
            </h2>
            <p className="text-xs text-[#F8F1E5]/70">
              Live updates of customer spice orders from the storefront.
            </p>
          </div>
          <Link
            to="/admin/orders"
            className="text-xs font-bold text-[#D9A441] hover:underline flex items-center gap-1"
          >
            <span>View All Orders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-[10px] uppercase tracking-wider text-[#D9A441] border-b border-[#D9A441]/20">
              <tr>
                <th className="py-3 px-3">Order ID</th>
                <th className="py-3 px-3">Customer</th>
                <th className="py-3 px-3">Items</th>
                <th className="py-3 px-3">Total Amount</th>
                <th className="py-3 px-3">Payment</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9A441]/10 text-[#F8F1E5]/90">
              {recentOrders.map((ord) => (
                <tr key={ord.id} className="hover:bg-[#281006]/50 transition-colors">
                  <td className="py-3 px-3 font-mono font-bold text-[#D9A441]">{ord.id}</td>
                  <td className="py-3 px-3">
                    <span className="font-semibold block text-[#F8F1E5]">{ord.customer.name}</span>
                    <span className="text-[10px] text-[#F8F1E5]/60">{ord.customer.city}</span>
                  </td>
                  <td className="py-3 px-3">
                    {ord.items.map((i) => `${i.name} (${i.weight || ''}) x${i.quantity}`).join(', ')}
                  </td>
                  <td className="py-3 px-3 font-bold text-[#F8F1E5]">₹{ord.total}</td>
                  <td className="py-3 px-3 text-[#F8F1E5]/80">{ord.paymentMethod}</td>
                  <td className="py-3 px-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        ord.status === 'Delivered'
                          ? 'bg-emerald-900/50 text-emerald-300 border border-emerald-600/50'
                          : ord.status === 'Processing'
                          ? 'bg-amber-900/50 text-amber-300 border border-amber-600/50'
                          : 'bg-blue-900/50 text-blue-300 border border-blue-600/50'
                      }`}
                    >
                      {ord.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Catalog Preview Grid */}
      <div className="p-6 rounded-3xl bg-[#402011] border border-[#D9A441]/30 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#D9A441]/20">
          <div>
            <h2 className="font-display font-bold text-lg text-[#F8F1E5]">
              Active Spice Catalog
            </h2>
            <p className="text-xs text-[#F8F1E5]/70">
              Quick preview of all live seasonings and price tiers.
            </p>
          </div>
          <Link
            to="/admin/products"
            className="text-xs font-bold text-[#D9A441] hover:underline"
          >
            Add / Edit Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.slice(0, 4).map((p) => (
            <div key={p.id} className="p-4 rounded-xl bg-[#281006] border border-[#D9A441]/20 flex items-center gap-3">
              <img src={p.image} alt={p.name} className="w-12 h-12 object-contain" />
              <div className="min-w-0 flex-1">
                <h4 className="font-display font-bold text-xs text-[#F8F1E5] truncate">{p.name}</h4>
                <span className="text-[10px] text-[#D9A441] block">From ₹{p.price}</span>
                <span className="text-[9px] text-emerald-400 font-semibold block">● In Stock</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
