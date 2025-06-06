import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: 'https://recipe-share-platform.onrender.com',
});

// Add request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { token } = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;