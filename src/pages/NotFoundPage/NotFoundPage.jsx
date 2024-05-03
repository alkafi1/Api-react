import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-500 hover:underline">Go to Home Page</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
