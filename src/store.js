import { configureStore } from '@reduxjs/toolkit';
import { apiMiddleware } from 'redux-api-middleware';

import rootReducer from './redux/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [apiMiddleware],
  devTools: true
});

export default store;
