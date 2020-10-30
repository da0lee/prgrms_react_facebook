import { defaultApi } from './default';

export const api = {
  async createPost(contents) {
    try {
      return await defaultApi.post('/api/post', { contents });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async createComment({ userId, postId, contents }) {
    try {
      return await defaultApi.post(`api/user/${userId}/post/${postId}/comment`, { contents });
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getCommentList({ userId, postId }) {
    try {
      const res = await defaultApi.get(`/api/user/${userId}/post/${postId}/comment/list`);
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },

  async likePost({ userId, postId }) {
    try {
      await defaultApi.patch(`/api/user/${userId}/post/${postId}/like`);
    } catch (e) {
      throw Error(e.message);
    }
  },

  async getUserPosts({ userId }) {
    try {
      const res = await defaultApi.get(`/api/user/${userId}/post/list`);
      return res.data.response;
    } catch (e) {
      throw Error(e.message);
    }
  },
};
