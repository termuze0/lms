import React from 'react';
import AdminLogin from '../components/auth/AdminLogin';
import logo from '../assets/images/logo.svg'; // Path to your logo image
// import '../styles/AdminLoginPage.css'; // Import the custom CSS

const AdminLoginPage = () => {
  return ( <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col items-center">
      {/* Logo and Company Name */}
      <div className="flex flex-col items-center mb-8">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1 className="company-name">Company Name</h1>
      </div>
      {/* Admin Login Form */}
      <div className="w-full login-form">
        <AdminLogin />
      </div>
    </div>
  </div>
);}
export default AdminLoginPage;
