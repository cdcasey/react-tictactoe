// import { createStore } from 'redux';
import { configure, configureStore } from '@reduxjs/toolkit';

import rootReducer from './redux/rootReducer';

// const enhancers = [];

// if (process.env.NODE_ENV === 'development') {
//   const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

//   if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
//     enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
//   }
// }

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
// const store = createStore(rootReducer, {}, __REDUX_DEVTOOLS_EXTENSION__());
const store = configureStore({
  reducer: rootReducer
  // devTools: false
});

export default store;
