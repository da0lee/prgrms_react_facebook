import { defaultApi } from './default';

export const api = {
  async signIn({ principal, credentials }) {
    try {
      const res = await defaultApi.post('/api/auth', { principal, credentials });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
