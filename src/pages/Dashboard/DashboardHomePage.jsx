// DashboardHomPage.js
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import { useAuth } from '../../Contexts/AuthContext';
import { Navigate } from 'react-router-dom'; 

const DashboardHomePage = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />; // Use Navigate instead of Redirect
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="p-6">
          {/* Add your main conhvtent components here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
