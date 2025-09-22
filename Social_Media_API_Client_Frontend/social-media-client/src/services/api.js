import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your real API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests if exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const getItems = () => api.get('/posts');
export const createItem = data => api.post('/posts', data);
export const updateItem = (id, data) => api.put(`/posts/${id}`, data);
export const deleteItem = id => api.delete(`/posts/${id}`);
