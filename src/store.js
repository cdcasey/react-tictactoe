import { configureStore } from '@reduxjs/toolkit';

import { swApi } from 'redux/sw/swSlice';
import rootReducer from './redux/rootReducer';
import game from './redux/game';
import sw from './redux/sw';

const store = configureStore({
  reducer: { ...rootReducer, [swApi.reducerPath]: swApi.reducer, game, sw },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
  devTools: true,
});

export default store;
