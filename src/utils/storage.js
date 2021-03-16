export const setSessionValue = (name, value) => {
  if (typeof window !== 'undefined') {
    window.sessionStorage.setItem(name, value);
  }
  return undefined;
};

export const setSessionObjectValue = (name, value) => {
  if (typeof window !== 'undefined' && typeof value === 'object') {
    const objectStringfied = JSON.stringify(value);
    window.sessionStorage.setItem(name, objectStringfied);
  }
  return undefined;
};

export const getSessionValue = (name) => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.getItem(name);
  }
  return undefined;
};

export const getSessionObjectValue = (name) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(window.sessionStorage.getItem(name));
  }

  return undefined;
};

export const clearSession = () => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.clear();
  }
  return undefined;
};
