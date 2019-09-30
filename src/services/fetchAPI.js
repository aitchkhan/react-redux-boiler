// import TokenService from "./token";
import store from "../store";
import * as loaderActions from "../actions/loader";
import { getAuthToken } from './storage'
import { logout } from "../actions/auth";

// const tokenService = TokenService.getInstance();
let pendingRequests = 0;
const BASE_URL = "https://reqres.in/api/"; // make env variable

const showLoader = (isLoaderVisible, requestCount) => {
  if (isLoaderVisible) {
    if (requestCount === 0) {
      store.dispatch(loaderActions.showLoader());
    }
    return requestCount + 1;
  }
  return requestCount;
};

const hideLoader = (isLoaderVisible, requestCount) => {
  if (isLoaderVisible) {
    if (requestCount === 1) {
      store.dispatch(loaderActions.hideLoader());
    }
    return requestCount - 1;
  }
  return requestCount;
};

export const fetchAPI = async (
  url,
  type,
  data = null,
  isPublic = false,
  isLoaderVisible = true
) => {
  const headers = {
    "content-type": "application/json"
  };
  if (!isPublic) {
    try {
      const authToken = getAuthToken();
      if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
      }
    } catch (error) {
      store.dispatch(logout()); // TODO: create logout
      throw error;
    }
  }
  pendingRequests = showLoader(isLoaderVisible, pendingRequests);
  return fetch(`${BASE_URL}${url}`, {
    body: data ? JSON.stringify(data) : null,
    cache: "no-cache",
    headers,
    method: type // *GET, POST, PUT, DELETE, etc.
  })
    .then(response => {
      if (!response.ok) {
        throw response;
      }
      pendingRequests = hideLoader(isLoaderVisible, pendingRequests);
      return response.json();
    })
    .catch(error => {
      pendingRequests = hideLoader(isLoaderVisible, pendingRequests);
      throw error;
    });
};
