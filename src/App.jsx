import './App.css'
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
// import logo from './logo.png'; // Import your logo image

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-purple-700 to-blue-500 h-screen overflow-hidden">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-96">
          <div className="flex justify-center items-center mb-4">
            <img src='' alt="Logo" className="w-8 h-8 mr-2" />
            <h2 className="text-2xl font-semibold">Sign Up</h2>
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-semibold mb-2 text-left">Username</label>
              <input type="text" id="username" name="username" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your username" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-left">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 text-left">Password</label>
              <div className="relative">
                <input type={passwordVisible ? "text" : "password"} id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 pr-10" placeholder="Enter your password" />
                <button type="button" onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex items-center px-3 bg-transparent">
                  {passwordVisible ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
                </button>
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <button type="button" className="flex items-center justify-center w-1/3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 transition duration-200">
                <FaFacebook />
              </button>
              <button type="button" className="flex items-center justify-center w-1/3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-gray-900 hover:to-black transition duration-200">
                <FaGithub />
              </button>
              <button type="button" className="flex items-center justify-center w-1/3 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 transition duration-200">
                <FaGoogle />
              </button>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
