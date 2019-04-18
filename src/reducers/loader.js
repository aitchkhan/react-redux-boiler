import { SHOW_LOADER, HIDE_LOADER } from "../actions/loader";

export const initialState = false;

export const loader = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
};
