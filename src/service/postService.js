import { setLocalStorageData, getLocalStorageData } from './storage';

const KEY = 'Auth';

export const get = () => {
  const posts = getLocalStorageData(KEY);
  return posts;
};

export const set = (posts) => {
  const newPosts = setLocalStorageData(KEY, posts);
  return newPosts;
};
