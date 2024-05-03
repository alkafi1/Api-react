// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../constants/Constant';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64">
      {/* Logo */}
      <div className="flex items-center justify-center py-4">
        <img src={logo} alt="Logo" className="h-8 w-8" />
      </div>
      
      {/* Navigation Links */}
      <nav className="mt-10">
        <NavLink exact to="/dashboard" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
          Dashboard
        </NavLink>
        <NavLink to="/dashboard/products" className="block py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white">
          Products
        </NavLink>
        {/* Add more navigation links */}
      </nav>
    </div>
  );
};

export default Sidebar;
