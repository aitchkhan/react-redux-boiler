const AUTH_TOKEN = "auth_token";
const REFRESH_TOKEN = "refresh_token";

const storageService = {
  set: (key, value) => {
    if (!key || !value) {
      return false;
    }
    try {
      if (typeof value === "object") {
        localStorage.setItem(key, JSON.stringify(value));
      } else {
        localStorage.setItem(key, value);
      }
      return true;
    } catch (error) {
      return false;
    }
  },
  get: key => {
    let value = localStorage.getItem(key);
    if (!value) {
      return undefined;
    }
    // assume it is an object or it is an array that has been stringified
    if (value[0] === "{" || value[0] === "[") {
      value = JSON.parse(value);
    }
    return value;
  },
  clear: () => {
    localStorage.clear();
  }
};

// get services
export const getAuthToken = () => storageService.get(AUTH_TOKEN);
export const getRefreshToken = () => storageService.get(REFRESH_TOKEN);

// set services
export const setAuthToken = payload => {
  storageService.set(AUTH_TOKEN, payload.token);
};

export const setRefreshToken = refreshToken => {
  storageService.set(REFRESH_TOKEN, refreshToken);
};

// clear storage
export const clearStorage = () => storageService.clear();
