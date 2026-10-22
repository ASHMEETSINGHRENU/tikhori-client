import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('tikhori_user');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState('login'); // 'login' | 'register'

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('tikhori_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('tikhori_user');
      }
    } catch (e) {
      console.error('Failed to sync auth state:', e);
    }
  }, [user]);

  const login = async (email, password) => {
    // Check for default admin credentials
    if (email.toLowerCase() === 'admin@tikhorifoods.com' || email.toLowerCase() === 'admin@tikhori.com') {
      const adminUser = {
        id: 'admin-1',
        name: 'Tikhori Administrator',
        email: email,
        role: 'admin',
        token: 'mock-admin-jwt-token-2026'
      };
      setUser(adminUser);
      return { success: true, user: adminUser };
    }

    // Customer login
    const customerUser = {
      id: 'cust-' + Date.now(),
      name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ') || 'Spice Enthusiast',
      email: email,
      role: 'customer',
      token: 'mock-user-jwt-token-' + Date.now()
    };
    setUser(customerUser);
    return { success: true, user: customerUser };
  };

  const register = async (userData) => {
    const newUser = {
      id: 'cust-' + Date.now(),
      name: userData.name || userData.fullName,
      email: userData.email,
      phone: userData.phone,
      role: 'customer',
      token: 'mock-user-jwt-token-' + Date.now()
    };
    setUser(newUser);
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
  };

  const openAuthModal = (tab = 'login') => {
    setAuthModalTab(tab);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        login,
        register,
        logout,
        isAuthModalOpen,
        authModalTab,
        setAuthModalTab,
        openAuthModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
