import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
    console.log('Facebook login clicked');
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-4 w-full max-w-md mt-6">
      <button
        onClick={handleGoogleLogin}
        className="flex items-center justify-center py-2 px-4 bg-gray-800 text-white font-semibold rounded-lg shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 space-x-2"
      >
        <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
        <span>Log in with Google</span>
      </button>
      <button
        onClick={handleFacebookLogin}
        className="flex items-center justify-center py-2 px-4 bg-blue-700 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 space-x-2"
      >
        <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
        <span>Log in with Facebook</span>
      </button>
    </div>
  );
};

export default SocialLogin;
