// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // URL de votre API Laravel
});

export const register = (data) => {
  return api.post('/register', data);
};