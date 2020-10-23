import { configApi } from '../config';

export const api = {
  async login({ credentials, principal }) {
    try {
      const res = await configApi.post('/api/user/auth', { credentials, principal });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
