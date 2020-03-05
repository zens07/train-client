//connector reducer to action
import { createStore, combineReducers, applyMiddleware } from "redux";

// import { createStore, combineReducers, applyMiddleware } from "redux";
import { logger, promise } from "./middleware";

import trains from "../_reducers/trainR";

const reducers = combineReducers({
  trains
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
