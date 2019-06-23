import { createStore } from 'redux';

import rootReducer from './redux/rootReducer';


// const enhancers = [];

// if (process.env.NODE_ENV === 'development') {
//   const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

//   if (typeof __REDUX_DEVTOOLS_EXTENSION__ === 'function') {
//     enhancers.push(__REDUX_DEVTOOLS_EXTENSION__());
//   }
// }

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;
const store = createStore(rootReducer, {}, __REDUX_DEVTOOLS_EXTENSION__());

export default store;
