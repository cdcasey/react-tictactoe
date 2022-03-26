import { configureStore } from '@reduxjs/toolkit';

import { swApi } from 'redux/sw/swSlice';
import game from './redux/game';

const store = configureStore({
  reducer: { [swApi.reducerPath]: swApi.reducer, game },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
  devTools: true,
});

export default store;
