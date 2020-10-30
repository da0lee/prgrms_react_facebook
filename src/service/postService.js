import { setLocalStorageData, getLocalStorageData } from './storage';

const KEY = 'Auth';

export const getPostList = () => {
  const posts = getLocalStorageData(KEY);
  return posts;
};

export const setPostList = (posts) => {
  const newPosts = setLocalStorageData(KEY, posts);
  return newPosts;
};
