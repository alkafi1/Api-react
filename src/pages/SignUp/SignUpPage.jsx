// SignUpPage.js - Page component

import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import { logo } from '../../constants/Constant'; // Importing the logo constant

const SignUpPage = () => {
  return (
    <div>
      {/* You can add any additional components or layout here */}
      <SignUpForm logo={logo} /> {/* Pass the logo constant as a prop */}
    </div>
  );
};

export default SignUpPage;
