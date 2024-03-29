import axios from 'axios';

const SERVER_URL = process.env.REACT_APP_API_URL || 'https://f-red-pr.onrender.com/api';

const registerUser = (data) => {
  return axios.post(`${SERVER_URL}/register`, data);
};

const loginUser = (data) => {
  return axios.post(`${SERVER_URL}/login`, data);
};

const AuthServices = {
  registerUser,
  loginUser,
};

export default AuthServices;
