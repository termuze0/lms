import React from 'react';
import UserRegistration from '../components/auth/UserRegister';
import logo from '../assets/images/logo.svg'
const UserRegistrationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg flex flex-col items-center">
        {/* Logo and Company Name */}
        <div className="flex flex-col items-center mb-2">
          <img src={logo} alt="Company Logo" className="logo" /> 
          <h1 className="company-name">Company Name</h1> 
        </div>
        
        <div className="w-full">
          <UserRegistration />
        </div>
      </div>
    </div>
  );
};

export default UserRegistrationPage;
