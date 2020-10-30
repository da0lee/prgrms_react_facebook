import axios from 'axios';

export const defaultApi = axios.create({
  baseURL: 'http://15.164.170.69:8080',
});
