import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { toursReducer } from './reducers/toursReducer';

const rootReducer = 
  combineReducers({
    tours: toursReducer, 
  });

const middleware = applyMiddleware(logger(), promise(), thunk);
export default createStore(rootReducer, middleware);
