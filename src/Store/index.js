import combineReducers from './reducers/index';
import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const middlewares = [logger];
const store = createStore(
  combinedReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
