import { fetchAPI } from "../services/fetchAPI";

export const SET_LOGIN_DATA = "SET_LOGIN_DATA";

const setLoginData = payload => ({
  type: SET_LOGIN_DATA,
  payload
});

export const asyncLogin = credentials => dispatch => [
  fetchAPI("login", "POST", credentials, true).then(response =>
    dispatch(setLoginData(response))
  )
];
