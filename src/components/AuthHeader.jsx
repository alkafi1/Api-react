import React from 'react';

const AuthHeader = ({ logo, title }) => (
  <div className="flex justify-center items-center mb-4">
    <img src={logo} alt="Logo" className="w-8 h-8 mr-2" />
    <h2 className="text-2xl font-semibold">{title}</h2>
  </div>
);

export default AuthHeader;