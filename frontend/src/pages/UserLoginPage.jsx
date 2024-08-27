import React from 'react';
import UserLogin from '../components/auth/UserLogin';
import SocialLogin from '../components/common/SocialLogin';
import logo from '../assets/images/logo.svg'; // Path to your logo image

const UserLoginPage = () => {
  return (
    <div className="user-login-page flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col items-center">
        {/* Logo and Company Name */}
        <div className="logo-container flex flex-col items-center">
          <img src={logo} alt="Company Logo" className="logo" />
          <h1 className="company-name text-3xl font-bold">Company Name</h1>
        </div>
        {/* User Login Form */}
        <UserLogin />
        {/* Social Login Buttons */}
        <SocialLogin />
        {/* Forgot Password and Create Account Links */}
        <div className="links mt-4 flex flex-col items-center space-y-2 w-full">
          
          <a href="/create-account" className="text-blue-500 hover:underline">
            Don't have account?signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
