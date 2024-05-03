// AuthProvider.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (e.g., token exists in local storage)
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Verify token validity (you may need to send a request to the server to verify the token)
      // If valid, set the user state
      setUser({ token: storedToken });
    }

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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

  // Function to handle beforeunload event
  const handleBeforeUnload = () => {
    logout(); // Call logout function when page is reloaded or closed
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
