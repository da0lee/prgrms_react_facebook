import { getLocalStorageData } from './Storage';

export const USER_POSTS_KEY = 'Auth';

export default class DummyPost {
  constructor() {
    this.posts = [];
  }
  set setPosts(newPosts) {
    try {
      if (!Array.isArray(newPosts)) {
        throw new Error(`invalid Value`);
      }
      this.posts = newPosts;
    } catch (err) {
      console.log(`Cannot set posts value..${err}`);
    }
  }
  getPost = () => {
    this.posts = getLocalStorageData(USER_POSTS_KEY);
    return this.posts;
  };
}
