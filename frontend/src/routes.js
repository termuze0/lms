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
    <Route path="/i/login" element={<InstructorLoginPage />} />
    <Route path="/i/register" element={<InstructorRegisterPage />} />
    <Route path="/u/login" element={<UserLoginPage />} />
    <Route path="/u/register" element={<UserRegisterPage />} />
    {/* Add other routes as needed */}
  </Routes>
);

export default AppRoutes;
