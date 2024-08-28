import { useState } from 'react';
import axios from 'axios'; // Import axios

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // User Login Function
  const LoginUser = async (email, password) => {
    try {
      const response = await axios.post('/api/user/login', { email, password });
      setUser(response.data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Invalid email or password');
      throw err;
    }
  };

  // User Registration Function
  const RegisterUser = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post('/api/user/register', { firstName, lastName, email, password });
      setUser(response.data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Registration failed. Please try again.');
      throw err;
    }
  };

  // Instructor Login Function
  const LoginInstructor = async (email, password) => {
    try {
      const response = await axios.post('/api/instructor/login', { email, password });
      setUser(response.data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Invalid email or password');
      throw err;
    }
  };

  // Instructor Registration Function
  const RegisterInstructor = async (firstName, lastName, email, password, specialization) => {
    try {
      const response = await axios.post('/api/instructor/register', { firstName, lastName, email, password, specialization });
      setUser(response.data.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      setError('Registration failed. Please try again.');
      throw err;
    }
  };

  // Logout Function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  return {
    user,
    isAuthenticated,
    error,
    LoginUser,
    RegisterUser,
    LoginInstructor,
    RegisterInstructor,
    logout,
  };
};

export default useAuth;
