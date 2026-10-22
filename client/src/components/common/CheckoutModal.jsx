import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ShieldCheck, CreditCard, Banknote, QrCode, ArrowRight, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { api } from '../../services/api';

const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cartItems, subtotal, discountAmount, shippingFee, total, clearCart } = useCart();
  const { user } = useAuth();

  const [step, setStep] = useState(1); // 1: Address & Details, 2: Payment & Review, 3: Confirmation
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'UPI' // 'UPI' | 'Card' | 'COD'
  });

  const [placedOrder, setPlacedOrder] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextToPayment = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.pincode) {
      alert('Please fill in all mandatory delivery fields.');
      return;
    }
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    const orderData = {
      customer: {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode
      },
      items: cartItems.map(item => ({
        id: item.productId,
        name: item.name,
        weight: item.weight,
        price: item.price,
        quantity: item.quantity
      })),
      subtotal,
      discount: discountAmount,
      shipping: shippingFee,
      total,
      paymentMethod: formData.paymentMethod
    };

    try {
      const order = await api.createOrder(orderData);
      setPlacedOrder(order);
      setStep(3);
      clearCart();

      // Trigger Luxury Celebration Confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D9A441', '#8C2F16', '#281006', '#F3C065']
      });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep(1);
  };

  if (!isCheckoutOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#281006]/75 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-[#D9A441]/40 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#F8F1E5] border-b border-[#EDE3D1] flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.2em] font-bold text-[#D9A441] uppercase block">
              SECURE CHECKOUT
            </span>
            <h3 className="font-display font-black text-xl text-[#8C2F16]">
              {step === 3 ? 'Order Confirmed!' : 'Almost Time to Cook Something Wonderful'}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full border border-[#D9A441]/30 flex items-center justify-center text-[#4A3528] hover:text-[#8C2F16]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* STEP 1: DELIVERY ADDRESS */}
          {step === 1 && (
            <form onSubmit={handleNextToPayment} className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-[#EDE3D1]">
                <Truck className="w-5 h-5 text-[#8C2F16]" />
                <h4 className="font-display font-bold text-sm text-[#4A3528] uppercase tracking-wider">
                  1. Delivery Address & Contact
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    placeholder="e.g. Radhika Verma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                  Email Address (For Tracking & Invoice) *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                  placeholder="radhika@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                  Street Address & House / Apartment *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                  placeholder="Flat 304, Greenview Apartments, MG Road"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    placeholder="Mumbai"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    placeholder="Maharashtra"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A3528] mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    value={formData.pincode}
                    onChange={handleChange}
                    className="w-full px-4 py-2 text-xs rounded-full border border-[#EDE3D1] bg-[#FFFDF9] focus:border-[#8C2F16] outline-none"
                    placeholder="400001"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs text-[#4A3528]">
                  Order Total: <strong className="text-sm text-[#8C2F16]">₹{total}</strong>
                </span>
                <button
                  type="submit"
                  className="btn-pill-primary text-xs flex items-center gap-2"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: ORDER SUMMARY & PAYMENT METHOD */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Order Summary Snapshot */}
              <div className="p-4 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#8C2F16]">
                  Order Summary ({cartItems.length} items)
                </h4>
                <div className="max-h-36 overflow-y-auto space-y-1.5 divide-y divide-[#EDE3D1]/60 pr-1 text-xs">
                  {cartItems.map(item => (
                    <div key={item.itemKey} className="flex justify-between items-center pt-1.5">
                      <span className="text-[#4A3528] truncate max-w-xs">
                        {item.name} ({item.weight}) x {item.quantity}
                      </span>
                      <span className="font-bold text-[#4A3528]">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-[#EDE3D1] flex justify-between font-bold text-sm text-[#8C2F16]">
                  <span>Total Payable</span>
                  <span>₹{total}</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#4A3528] mb-3">
                  Select Payment Method
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'UPI' })}
                    className={`cursor-pointer p-3.5 rounded-xl border text-center transition-all ${
                      formData.paymentMethod === 'UPI'
                        ? 'border-[#8C2F16] bg-[#8C2F16]/5 ring-1 ring-[#8C2F16]'
                        : 'border-[#EDE3D1] hover:border-[#D9A441]'
                    }`}
                  >
                    <QrCode className="w-5 h-5 mx-auto mb-1.5 text-[#8C2F16]" />
                    <span className="block text-xs font-bold text-[#4A3528]">Instant UPI / QR</span>
                    <span className="text-[10px] text-[#4A3528]/60">GPay, PhonePe, Paytm</span>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'Card' })}
                    className={`cursor-pointer p-3.5 rounded-xl border text-center transition-all ${
                      formData.paymentMethod === 'Card'
                        ? 'border-[#8C2F16] bg-[#8C2F16]/5 ring-1 ring-[#8C2F16]'
                        : 'border-[#EDE3D1] hover:border-[#D9A441]'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1.5 text-[#8C2F16]" />
                    <span className="block text-xs font-bold text-[#4A3528]">Cards / NetBanking</span>
                    <span className="text-[10px] text-[#4A3528]/60">Visa, Mastercard, RuPay</span>
                  </label>

                  <label
                    onClick={() => setFormData({ ...formData, paymentMethod: 'COD' })}
                    className={`cursor-pointer p-3.5 rounded-xl border text-center transition-all ${
                      formData.paymentMethod === 'COD'
                        ? 'border-[#8C2F16] bg-[#8C2F16]/5 ring-1 ring-[#8C2F16]'
                        : 'border-[#EDE3D1] hover:border-[#D9A441]'
                    }`}
                  >
                    <Banknote className="w-5 h-5 mx-auto mb-1.5 text-[#8C2F16]" />
                    <span className="block text-xs font-bold text-[#4A3528]">Cash on Delivery</span>
                    <span className="text-[10px] text-[#4A3528]/60">Pay at your doorstep</span>
                  </label>
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center gap-2 text-xs text-[#4A3528]/70 bg-[#F8F1E5] p-3 rounded-xl border border-[#EDE3D1]">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>256-bit encrypted checkout. Quality and aroma freshness guaranteed by Tikhori.</span>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#4A3528] hover:text-[#8C2F16]"
                >
                  ← Edit Address
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  disabled={loading}
                  className="btn-pill-primary text-xs py-3 px-8 flex items-center gap-2"
                >
                  {loading ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <span>Place Order (₹{total})</span>
                      <CheckCircle className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: ORDER CONFIRMATION */}
          {step === 3 && placedOrder && (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center border-2 border-emerald-500 shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <span className="text-xs tracking-[0.2em] font-bold text-[#D9A441] uppercase">
                  ORDER REFERENCE #{placedOrder.id}
                </span>
                <h3 className="font-display font-black text-2xl text-[#8C2F16]">
                  Thank You for Choosing Tikhori!
                </h3>
                <p className="text-xs text-[#4A3528]/80 max-w-md mx-auto leading-relaxed pt-1">
                  Your order has been received. You can check your order details and follow its progress from your account. An SMS and email confirmation have been sent to <strong>{formData.email}</strong>.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-[#F8F1E5] border border-[#EDE3D1] text-xs text-left space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#4A3528]/70">Delivery To:</span>
                  <span className="font-semibold text-[#4A3528]">{placedOrder.customer.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4A3528]/70">Address:</span>
                  <span className="font-semibold text-[#4A3528]">{placedOrder.customer.city}, {placedOrder.customer.pincode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#4A3528]/70">Payment Method:</span>
                  <span className="font-semibold text-[#8C2F16]">{placedOrder.paymentMethod}</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-[#EDE3D1] font-bold">
                  <span>Amount Paid:</span>
                  <span className="text-[#8C2F16]">₹{placedOrder.total}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleClose}
                  className="btn-pill-primary text-xs"
                >
                  Continue Exploring Spices
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CheckoutModal;
