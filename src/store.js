import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import allReducers from "./reducers";

const initialState = {};
const enhancers = [];
const middleware = [thunk];
if (process.env.REACT_APP_ENVIRONMENT === "development") {
  middleware.push(logger);
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const appReducer = combineReducers({
  ...allReducers,
  router: routerReducer
});

const store = createStore(appReducer, initialState, composedEnhancers);

export default store;
