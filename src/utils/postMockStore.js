import { getLocalStorageData } from './util';
import { USER_POSTS_KEY } from './userPostsKey';

export default class PostMockStore {
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
  getPostFromLS = () => {
    this.posts = getLocalStorageData(USER_POSTS_KEY);
    return this.posts;
  };
}
