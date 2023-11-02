export const getItem = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    console.warn('There was an issue with local storage!');
  }

  return null;
};

export const setItem = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    console.warn('There was an issue with local storage!');
  }
};
