// DashboardHomePage.js
import React from 'react';
import Layout from '../../Layouts/DashboardLayout/DashboardLayout';
import { useAuth } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom'; 

const CategoyIndex = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <Layout>
      {/* Add your main content for the dashboard page here */}
      {/* For example: */}
      <h1 className="text-2xl font-bold mb-4">Category</h1>
      <p>Welcome to the Dashboard Page. This is where you can view your dashboard content.</p>
    </Layout>
  );
};

export default CategoyIndex;
