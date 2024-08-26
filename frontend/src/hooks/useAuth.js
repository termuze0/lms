import { useState } from 'react';
import axios from 'axios'; // Assuming you are using axios for HTTP requests

const API_URL = 'http://localhost:8000/api'; // Replace with your actual API URL

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password, role) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password, role });
      // Assuming the response contains a token
      const { token } = response.data;
      localStorage.setItem('token', token); // Save the token in localStorage
      // Optionally, save user details in localStorage or context
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const register = async (email, password, name, role) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(`${API_URL}/register`, { email, password, name, role });
      // Optionally, handle post-registration logic, such as redirecting to login page
    } catch (err) {
      setError(err.response ? err.response.data.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    // Optionally, handle post-logout logic, such as redirecting to login page
  };

  return {
    login,
    register,
    logout,
    loading,
    error
  };
};
