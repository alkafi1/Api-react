// LoginPage.js - Page component

import React from 'react';
import LoginForm from '../../components/LoginForm';
import { logo } from '../../constants/Constant';
import { Navigate } from 'react-router-dom'; // Import the Navigate component
import { useAuth } from '../../Contexts/AuthContext'; 

const LoginPage = () => {
  const { user } = useAuth(); // Get the user from the AuthContext

  // If the user is already logged in, redirect to the dashboard
  if (user) {
    return <Navigate to="/"/>;
  }
  return (
    <div>
      {/* You can add any additional components or layout here */}
      <LoginForm logo={logo} /> {/* Pass the logo constant as a prop */}
    </div>
  );
};

export default LoginPage;
