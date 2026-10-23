import { INITIAL_PRODUCTS, INITIAL_STOCKISTS, INITIAL_ORDERS } from '../data/initialData';

// LocalStorage Keys for persistent client-side data
const STORAGE_KEYS = {
  PRODUCTS: 'tikhori_db_products',
  STOCKISTS: 'tikhori_db_stockists',
  ORDERS: 'tikhori_db_orders',
  ENQUIRIES: 'tikhori_db_enquiries',
  SUBSCRIBERS: 'tikhori_db_subscribers',
};

// Seed LocalStorage if empty
const getStorageData = (key, fallback) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(fallback));
      return fallback;
    }
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
};

const setStorageData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to set localStorage', e);
  }
};

const API_BASE = (
  import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? '' : 'https://tikhori-server.onrender.com')
).replace(/\/$/, '');

// Safe API caller with graceful local fallback
export const api = {
  // PRODUCTS
  async getProducts() {
    try {
      const res = await fetch(`${API_BASE}/api/products`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {
      // fallback
    }
    return getStorageData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
  },

  async getProductBySlug(slug) {
    try {
      const res = await fetch(`${API_BASE}/api/products/${slug}`);
      if (res.ok) return await res.json();
    } catch (e) {
      // fallback
    }
    const products = getStorageData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
    return products.find(p => p.slug === slug) || null;
  },

  async createProduct(productData) {
    try {
      const res = await fetch(`${API_BASE}/api/products`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      // fallback
    }
    const products = getStorageData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
    const newProduct = {
      ...productData,
      id: 'prod-' + Date.now(),
      slug: productData.slug || productData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      rating: 5.0,
      reviewsCount: 1,
      image: productData.image || '/assets/products/product-1.png'
    };
    const updated = [newProduct, ...products];
    setStorageData(STORAGE_KEYS.PRODUCTS, updated);
    return newProduct;
  },

  async updateProduct(id, updates) {
    try {
      const res = await fetch(`${API_BASE}/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      // fallback
    }
    const products = getStorageData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
    const updated = products.map(p => (p.id === id ? { ...p, ...updates } : p));
    setStorageData(STORAGE_KEYS.PRODUCTS, updated);
    return updated.find(p => p.id === id);
  },

  async deleteProduct(id) {
    try {
      const res = await fetch(`${API_BASE}/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) return true;
    } catch (e) {
      // fallback
    }
    const products = getStorageData(STORAGE_KEYS.PRODUCTS, INITIAL_PRODUCTS);
    const updated = products.filter(p => p.id !== id);
    setStorageData(STORAGE_KEYS.PRODUCTS, updated);
    return true;
  },

  // ORDERS
  async getOrders() {
    try {
      const res = await fetch(`${API_BASE}/api/orders`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {
      // fallback
    }
    return getStorageData(STORAGE_KEYS.ORDERS, INITIAL_ORDERS);
  },

  async createOrder(orderData) {
    const newOrder = {
      ...orderData,
      id: 'TK-' + Math.floor(10000 + Math.random() * 90000),
      date: new Date().toISOString().split('T')[0],
      status: 'Pending'
    };
    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      // fallback
    }
    const orders = getStorageData(STORAGE_KEYS.ORDERS, INITIAL_ORDERS);
    const updated = [newOrder, ...orders];
    setStorageData(STORAGE_KEYS.ORDERS, updated);
    return newOrder;
  },

  async updateOrderStatus(id, status) {
    try {
      const res = await fetch(`${API_BASE}/api/orders/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });
      if (res.ok) return await res.json();
    } catch (e) {
      // fallback
    }
    const orders = getStorageData(STORAGE_KEYS.ORDERS, INITIAL_ORDERS);
    const updated = orders.map(o => (o.id === id ? { ...o, status } : o));
    setStorageData(STORAGE_KEYS.ORDERS, updated);
    return updated.find(o => o.id === id);
  },

  // STOCKISTS
  async getStockists() {
    try {
      const res = await fetch(`${API_BASE}/api/stockists`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {
      // fallback
    }
    return getStorageData(STORAGE_KEYS.STOCKISTS, INITIAL_STOCKISTS);
  },

  async createStockist(data) {
    const newStockist = {
      ...data,
      id: 'st-' + Date.now(),
      status: 'Active'
    };
    try {
      const res = await fetch(`${API_BASE}/api/stockists`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStockist)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      // fallback
    }
    const stockists = getStorageData(STORAGE_KEYS.STOCKISTS, INITIAL_STOCKISTS);
    const updated = [newStockist, ...stockists];
    setStorageData(STORAGE_KEYS.STOCKISTS, updated);
    return newStockist;
  },

  async deleteStockist(id) {
    const stockists = getStorageData(STORAGE_KEYS.STOCKISTS, INITIAL_STOCKISTS);
    const updated = stockists.filter(s => s.id !== id);
    setStorageData(STORAGE_KEYS.STOCKISTS, updated);
    return true;
  },

  // CONTACT ENQUIRIES
  async submitEnquiry(enquiry) {
    const newEnquiry = {
      ...enquiry,
      id: 'enq-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      status: 'Unread'
    };
    try {
      await fetch(`${API_BASE}/api/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEnquiry)
      });
    } catch (e) {
      // fallback
    }
    const enquiries = getStorageData(STORAGE_KEYS.ENQUIRIES, []);
    setStorageData(STORAGE_KEYS.ENQUIRIES, [newEnquiry, ...enquiries]);
    return { success: true };
  },

  async getEnquiries() {
    try {
      const res = await fetch(`${API_BASE}/api/enquiries`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {
      // fallback
    }
    return getStorageData(STORAGE_KEYS.ENQUIRIES, [
      {
        id: 'enq-101',
        name: 'Vikram Joshi',
        email: 'vikram.joshi@culinarygroup.com',
        phone: '+91 98334 11223',
        subject: 'Wholesale & B2B Distribution Inquiry',
        message: 'We operate 14 boutique restaurants in Pune & Mumbai and are keen to switch to Tikhori pure stemless chilli and kaala masala. Kindly send wholesale tariff.',
        date: '2026-10-21',
        status: 'Unread'
      }
    ]);
  },

  // SUBSCRIBERS
  async subscribeEmail(email, name = '', source = 'Newsletter') {
    const sub = {
      id: 'sub-' + Date.now(),
      email,
      name,
      source,
      date: new Date().toISOString().split('T')[0]
    };
    try {
      await fetch(`${API_BASE}/api/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sub)
      });
    } catch (e) {
      // fallback
    }
    const subs = getStorageData(STORAGE_KEYS.SUBSCRIBERS, [
      { id: 'sub-1', email: 'meera.iyer@gmail.com', name: 'Meera Iyer', source: 'Spice Club', date: '2026-10-18' },
      { id: 'sub-2', email: 'rajiv.sen@yahoo.com', name: 'Rajiv Sen', source: 'Newsletter', date: '2026-10-19' }
    ]);
    if (!subs.some(s => s.email.toLowerCase() === email.toLowerCase())) {
      setStorageData(STORAGE_KEYS.SUBSCRIBERS, [sub, ...subs]);
    }
    return { success: true };
  },

  async getSubscribers() {
    try {
      const res = await fetch(`${API_BASE}/api/subscribers`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) return data;
      }
    } catch (e) {
      // fallback
    }
    return getStorageData(STORAGE_KEYS.SUBSCRIBERS, [
      { id: 'sub-1', email: 'meera.iyer@gmail.com', name: 'Meera Iyer', source: 'Spice Club', date: '2026-10-18' },
      { id: 'sub-2', email: 'rajiv.sen@yahoo.com', name: 'Rajiv Sen', source: 'Newsletter', date: '2026-10-19' }
    ]);
  }
};
