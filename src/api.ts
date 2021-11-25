import axios from 'axios';

const API = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default API;
