import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, CheckCircle, Truck, Clock, RefreshCw, Eye, X } from 'lucide-react';
import { api } from '../../services/api';

const STATUS_OPTIONS = ['Pending', 'Processing', 'Shipped', 'Delivered'];

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const loadOrders = async () => {
    const list = await api.getOrders();
    setOrders(list);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleStatusChange = async (orderId, newStatus) => {
    await api.updateOrderStatus(orderId, newStatus);
    loadOrders();
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const filtered = orders.filter((o) => {
    const matchStatus = selectedStatus === 'All' || o.status === selectedStatus;
    const term = searchTerm.toLowerCase();
    const matchSearch =
      !term ||
      o.id.toLowerCase().includes(term) ||
      o.customer.name.toLowerCase().includes(term) ||
      o.customer.city.toLowerCase().includes(term);
    return matchStatus && matchSearch;
  });

  return (
    <div className="space-y-6 max-w-6xl">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#D9A441]/20">
        <div>
          <span className="text-[10px] tracking-[0.25em] font-bold text-[#D9A441] uppercase block">
            FULFILLMENT CENTER
          </span>
          <h1 className="font-display font-black text-3xl text-[#F8F1E5]">
            Customer Orders ({orders.length})
          </h1>
        </div>

        {/* Status Filters */}
        <div className="flex flex-wrap gap-2">
          {['All', ...STATUS_OPTIONS].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedStatus === status
                  ? 'bg-[#D9A441] text-[#281006]'
                  : 'bg-[#402011] text-[#F8F1E5] hover:bg-[#281006] border border-[#D9A441]/30'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-[#402011] rounded-3xl border border-[#D9A441]/30 overflow-hidden shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#281006] text-[10px] uppercase tracking-wider text-[#D9A441] border-b border-[#D9A441]/20">
              <tr>
                <th className="py-4 px-4">Order Ref</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4">Customer Details</th>
                <th className="py-4 px-4">Items Summary</th>
                <th className="py-4 px-4">Amount</th>
                <th className="py-4 px-4">Fulfillment Status</th>
                <th className="py-4 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#D9A441]/10 text-[#F8F1E5]">
              {filtered.map((ord) => (
                <tr key={ord.id} className="hover:bg-[#281006]/40 transition-colors">
                  <td className="py-4 px-4 font-mono font-bold text-[#D9A441]">
                    {ord.id}
                  </td>
                  <td className="py-4 px-4 text-[11px] text-[#F8F1E5]/70">
                    {ord.date}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold block text-[#F8F1E5]">{ord.customer.name}</span>
                    <span className="text-[10px] text-[#F8F1E5]/60 block">{ord.customer.phone}</span>
                    <span className="text-[10px] text-[#D9A441] block">{ord.customer.city}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-semibold block">{ord.items.length} items</span>
                    <span className="text-[10px] text-[#F8F1E5]/70 truncate max-w-xs block">
                      {ord.items.map((i) => i.name).join(', ')}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-black text-sm text-[#F8F1E5]">
                    ₹{ord.total}
                    <span className="text-[10px] text-[#D9A441] block font-normal">{ord.paymentMethod}</span>
                  </td>
                  <td className="py-4 px-4">
                    <select
                      value={ord.status}
                      onChange={(e) => handleStatusChange(ord.id, e.target.value)}
                      className={`text-[11px] font-bold px-3 py-1 rounded-full outline-none border cursor-pointer ${
                        ord.status === 'Delivered'
                          ? 'bg-emerald-950 text-emerald-300 border-emerald-600'
                          : ord.status === 'Processing'
                          ? 'bg-amber-950 text-amber-300 border-amber-600'
                          : ord.status === 'Shipped'
                          ? 'bg-purple-950 text-purple-300 border-purple-600'
                          : 'bg-blue-950 text-blue-300 border-blue-600'
                      }`}
                    >
                      {STATUS_OPTIONS.map((st) => (
                        <option key={st} value={st} className="bg-[#281006] text-[#F8F1E5]">
                          {st}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={() => setSelectedOrder(ord)}
                      className="p-1.5 rounded-lg bg-[#281006] hover:bg-[#8C2F16] text-[#D9A441] transition-colors"
                      title="Inspect Order Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-[#402011] rounded-3xl border-2 border-[#D9A441]/50 shadow-2xl p-6 sm:p-8 space-y-4 text-[#F8F1E5]">
            <div className="flex items-center justify-between pb-3 border-b border-[#D9A441]/30">
              <div>
                <span className="text-[10px] font-mono text-[#D9A441] uppercase">ORDER DOSSIER</span>
                <h3 className="font-display font-black text-xl text-[#F8F1E5]">
                  Invoice #{selectedOrder.id}
                </h3>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="w-8 h-8 rounded-full border border-[#D9A441]/40 flex items-center justify-center text-[#D9A441]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#281006] border border-[#D9A441]/20 space-y-1">
                <strong className="text-[#D9A441] block">Customer Delivery Details:</strong>
                <p><strong>Name:</strong> {selectedOrder.customer.name}</p>
                <p><strong>Email:</strong> {selectedOrder.customer.email}</p>
                <p><strong>Phone:</strong> {selectedOrder.customer.phone}</p>
                <p><strong>Address:</strong> {selectedOrder.customer.address}, {selectedOrder.customer.city} ({selectedOrder.customer.pincode})</p>
              </div>

              <div>
                <strong className="text-[#D9A441] block mb-2">Spices Ordered:</strong>
                <div className="space-y-1.5 divide-y divide-[#D9A441]/10">
                  {selectedOrder.items.map((item, idx) => (
                    <div key={idx} className="pt-1.5 flex justify-between">
                      <span>{item.name} ({item.weight}) x {item.quantity}</span>
                      <span className="font-bold text-[#D9A441]">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#281006] border border-[#D9A441]/20 flex justify-between font-bold text-sm text-[#F8F1E5]">
                <span>Total Received ({selectedOrder.paymentMethod}):</span>
                <span className="text-[#D9A441]">₹{selectedOrder.total}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedOrder(null)}
                className="btn-pill-gold py-2 px-6 text-xs font-bold"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminOrders;
