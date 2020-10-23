import { configApi } from '../config';

export const api = {
  async getMyFreinds() {
    try {
      const res = await configApi.get('/api/user/commections');
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async checkEmailExistence({ address }) {
    try {
      const res = await configApi.post('/api/user/exists', {
        address,
      });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async signUp({ email, password, profileImage, name }) {
    try {
      const res = await configApi.post('/api/user/join', { email, password, profileImage, name });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getMyInfo() {
    try {
      const res = await configApi.get('/api/user/me');
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
