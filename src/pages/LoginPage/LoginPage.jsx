// LoginPage.js - Page component

import React from 'react';
import LoginForm from '../../components/LoginForm';
import { logo } from '../../constants/Constant'; // Importing the logo constant

const LoginPage = () => {
  return (
    <div>
      {/* You can add any additional components or layout here */}
      <LoginForm logo={logo} /> {/* Pass the logo constant as a prop */}
    </div>
  );
};

export default LoginPage;
