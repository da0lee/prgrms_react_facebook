export const getLocalStorageData = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));

    if (typeof value !== 'object') return;
    return value ? value : [];
  } catch (err) {
    console.log(`Cannot find data from LocalStorage..${err}`);
  }
};

export const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
