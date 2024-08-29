import { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8000/api"; // Constant URL for the API

const useAuth = () => {
  const [auth, setAuth] = useState(null); // Store authentication state

  const loginUser = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
        role: "user",
      });
      setAuth(response.data);
      // Store token or handle login success
    } catch (error) {
      throw new Error("Failed to login user");
    }
  };

  const registerUser = async (firstName, lastName, email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        role: "user",
      });
      setAuth(response.data);
      // Handle registration success
    } catch (error) {
      throw new Error("Failed to register user");
    }
  };

  const loginInstructor = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
        role: "instructor",
      });
      setAuth(response.data);
      // Store token or handle login success
    } catch (error) {
      throw new Error("Failed to login instructor");
    }
  };

  const registerInstructor = async (
    firstName,
    lastName,
    email,
    password,
    specialization
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        specialization,
        role: "instructor",
      });
      setAuth(response.data);
      // Handle registration success
    } catch (error) {
      throw new Error("Failed to register instructor");
    }
  };

  const loginAdmin = async (email, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
        role: "admin",
      });
      setAuth(response.data);
      // Store token or handle login success
    } catch (error) {
      throw new Error("Failed to login admin");
    }
  };

  return {
    auth,
    loginUser,
    registerUser,
    loginInstructor,
    registerInstructor,
    loginAdmin,
  };
};

export default useAuth;
