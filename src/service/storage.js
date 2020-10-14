export const getLocalStorageData = (key) => {
  try {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  } catch (err) {
    console.log(`Cannot find data from LocalStorage..${err}`);
  }
};

export const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
