// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './Contexts/AuthContext';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardHomePage from './pages/Dashboard/DashboardHomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import CategoryIndex from './pages/Category/CategoyIndex';
import ProfilePage from './pages/Profile/ProfilePage';

function PrivateRoute({ element, ...rest }) {
  const { user } = useAuth();
  return user ? element : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoute element={<DashboardHomePage />} />} />
          <Route path="/category" element={<PrivateRoute element={<CategoryIndex />} />} />
          <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
