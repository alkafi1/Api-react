// Layout.js
import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

const Layout = ({ children }) => {
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
        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
