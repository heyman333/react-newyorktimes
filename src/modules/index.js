import { createStore, applyMiddleware, combineReducers } from "redux";
import penderMiddleware, { penderReducer } from "redux-pender";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import article from "./article";

const reducers = combineReducers({
  article,
  pender: penderReducer,
});

const configureStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, penderMiddleware()))
  );
  return store;
};

export default configureStore;
