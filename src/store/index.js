import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';

// MODULES
import posts from './posts';
import post from './post';

const appReducer = combineReducers({
  posts,
  post,
});

const store = configureStore({
  reducer: appReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
