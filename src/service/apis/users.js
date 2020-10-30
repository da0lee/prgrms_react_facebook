import { defaultApi } from './default';

export const api = {
  async getMyFreinds() {
    try {
      const res = await defaultApi.get('/api/user/commections');
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async checkEmailExistence({ address }) {
    try {
      const res = await defaultApi.post('/api/user/exists', {
        address,
      });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async signUp({ principal, credentials, name, profileImage }) {
    const formdata = new FormData();
    formdata.append('credentials', credentials);
    formdata.append('principal', principal);
    formdata.append('file', profileImage);
    formdata.append('name', name);

    try {
      const res = await defaultApi.post('/api/user/join', formdata);
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getMyInfo() {
    const apiKey = localStorage.getItem('apiKey');
    try {
      const res = await defaultApi.get('/api/user/me', {
        headers: {
          api_key: apiKey,
        },
      });
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
