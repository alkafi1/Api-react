// AuthProvider.js

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (e.g., token exists in local storage)
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      // Set the user state
      setUser(JSON.parse(storedUser));
      // Set the token state
      setToken(storedToken);
    }
  }, []);

  const login = (userData, authToken) => {
    // Store the user data in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    // Store the token in local storage
    localStorage.setItem('token', authToken);
    // Set the user state
    setUser(userData);
    // Set the token state
    setToken(authToken);
  };

  const logout = () => {
    // Clear the user data from local storage
    localStorage.removeItem('user');
    // Clear the token from local storage
    localStorage.removeItem('token');
    // Clear the user state
    setUser(null);
    // Clear the token state
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
