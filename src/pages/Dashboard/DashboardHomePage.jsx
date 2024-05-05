// DashboardHomePage.js
import React from 'react';
import Layout from '../../Layouts/DashboardLayout/DashboardLayout';
import { useAuth } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom'; 

const DashboardHomePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <Layout>
      <h3>Hello, <span className="text-2xl font-bold mb-4">{user['user'].name}</span> Welcome To <span className="text-2xl font-bold mb-4">Dashboard</span></h3>
      <p>Welcome to the Dashboard Page. This is where you can view your dashboard content.</p>
    </Layout>
  );
};

export default DashboardHomePage;
