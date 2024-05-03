// In your App.js or index.js file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardHomePage from './pages/Dashboard/DashboardHomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <AuthProvider> {/* Wrap your Routes with AuthProvider */}
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardHomePage />} /> {/* Corrected the path */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
