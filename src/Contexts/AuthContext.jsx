// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Check if user is already logged in (e.g., token exists in local storage)
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Set the user state
      return { token: storedToken };
    }
    return null;
  });

  const login = (token) => {
    // Store the token in local storage
    localStorage.setItem('token', token);
    // Set the user state
    setUser({ token });
  };

  const logout = () => {
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Clear the user state
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
