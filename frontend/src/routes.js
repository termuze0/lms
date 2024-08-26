import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import pages
import AdminLoginPage from './pages/AdminLoginPage';
import AdminRegisterPage from './pages/AdminRegisterPage';
import InstructorLoginPage from './pages/InstructorLoginPage';
import InstructorRegisterPage from './pages/InstructorRegisterPage';
import UserLoginPage from './pages/UserLoginPage';
import UserRegisterPage from './pages/UserRegisterPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/admin/login" element={<AdminLoginPage />} />
    <Route path="/admin/register" element={<AdminRegisterPage />} />
    <Route path="/instructor/login" element={<InstructorLoginPage />} />
    <Route path="/instructor/register" element={<InstructorRegisterPage />} />
    <Route path="/user/login" element={<UserLoginPage />} />
    <Route path="/user/register" element={<UserRegisterPage />} />
    {/* Add other routes as needed */}
  </Routes>
);

export default AppRoutes;
