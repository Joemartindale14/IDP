import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://idp-3e1w.vercel.app',
});

export default instance;