import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import { createTourReducer, toursReducer } from './reducers/toursReducer';
import { authFormInputReducer, userSigninReducer } from './reducers/userReducers';

const rootReducer = 
  combineReducers({
    tours: toursReducer, 
    inCreation: createTourReducer,
    authFormInput: authFormInputReducer, 
    user: userSigninReducer,
  });

const middleware = applyMiddleware(logger(), promise(), thunk);
export default createStore(rootReducer, middleware);
