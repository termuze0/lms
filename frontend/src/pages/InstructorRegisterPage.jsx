import React from 'react';
import InstructorRegistration from '../components/auth/InstructorRegister';
import logo from '../assets/images/logo.svg'
const InstructorRegistrationPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg flex flex-col items-center">
      <div className="flex flex-col items-center mb-2">
          <img src={logo} alt="Company Logo" className="logo" /> 
          <h1 className="company-name">Company Name</h1> 
        </div>
        
        <div className="w-full">
          <InstructorRegistration />
        </div>
      </div>
    </div>
  );
};

export default InstructorRegistrationPage;
