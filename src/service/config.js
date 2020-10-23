import axios from 'axios';

export const configApi = axios.create({
  baseURL: 'http://15.164.170.69:8080',
});
