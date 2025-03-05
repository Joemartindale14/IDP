import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000', // Set the base URL to the backend server
});

export default instance;