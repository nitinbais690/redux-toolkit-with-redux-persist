import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: {
    'Content-type': 'application/json',
  },
});

const API = async (url: string) => await Axios.get(url);

export default API;
