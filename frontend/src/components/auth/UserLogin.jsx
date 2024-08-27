import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // Custom hook for authentication
import "../../styles/UserLoginStyle.css"
const UserLogin = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password, 'user');
      // Redirect or show success message
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <h2 className="text-2xl font-semibold text-center mb-4">User Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="emailinput w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
       <a href="/forgot-password" className=" px-4 text-blue-500 hover:underline">
            Forgot Password?
          </a>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
      {error && <p className="text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default UserLogin;
