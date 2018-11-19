import axios from 'axios';
const API_URL = 'https://api.wuyers.com/v1';

export const login = (email, password) =>
  axios.post(`${API_URL}/login`, {
    email,
    password,
  });

export const signup = (email, password) => {
  return axios.post(`${API_URL}/users`, {
    email,
    password,
  });
};

export const getUserInfo = (userId, token) =>
  axios.get(`${API_URL}/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
      'x-user-id': userId,
    },
  });
