// src/services.js
import axios from 'axios';

const getToken = () => localStorage.getItem('token');

const api = axios.create({
  baseURL: 'http://localhost:1075/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Example of login API call
export const loginUser = async (credentials) => {
  const response = await api.post('/users/login', credentials);
  return response.data;
};

// Register API call
export const registerUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

// Add other API functions as needed
export const getMenuItems = async () => {
  const response = await api.get('/menu');
  return response.data;
};

// Fetch categories
export const getCategories = async () => {
  const response = await api.get('/menu/categories');
  return response.data;
};

export const getOrderHistory = async () => {
  try {
      const response = await api.get('/orders/history', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming token is stored in localStorage
          }
      });
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const getUserDetails = async () => {
  try {
      const response = await api.get('/users/me', {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
          }
      });
      return response.data;
  } catch (error) {
      throw error;
  }
};

export const isSignedIn = () => {
  return !!getToken();
};

export const signOut = () => {
  localStorage.removeItem('token');
  window.location.reload();
};

export const getUserProfile = async () => {
  try {
    const response = await api.get('/users/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error.response ? error.response.data : error.message);
    throw error;
  }
};


export const updateUserProfile = async (profileData) => {
  try {
    const response = await api.put('/users/profile', profileData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}` // Include token in the request headers
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};