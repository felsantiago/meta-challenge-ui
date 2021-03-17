import { useContext } from 'react';
import axios from 'axios';
import AppContext from '../store/appContext';

const api = axios.create({
  baseURL: 'http://localhost:3386/v1'
});

axios.interceptors.request.use((config) => {
  const { state } = useContext(AppContext);
  const { token, isAuthenticated } = state.token;

  if (isAuthenticated) {
    config.headers.Authorization = token;
  }

  return config;
});

export default api;
