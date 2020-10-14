export const getLocalStorageData = (ID) => {
  try {
    return localStorage.getItem(ID) ? JSON.parse(localStorage.getItem(ID)) : [];
  } catch (err) {
    console.log(`Cannot find data from LocalStorage..${err}`);
  }
};

export const setLocalStorageData = (ID, data) => {
  localStorage.setItem(ID, JSON.stringify(data));
};
