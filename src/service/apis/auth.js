import { configApi } from './config';

export const api = {
  async signIn({ principal, credentials }) {
    try {
      const res = await configApi.post('/api/auth', { principal, credentials });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
