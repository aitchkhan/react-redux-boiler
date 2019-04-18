import { SET_LOGIN_DATA } from "../actions/auth";

export const initialState = {
  loginData: null
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return {
        ...state,
        loginData: action.payload
      };
    default:
      return state;
  }
};
