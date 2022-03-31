import { configureStore } from '@reduxjs/toolkit';

import { swApi } from 'redux/sw/swSlice';
import { simpleDataApi } from './redux/simpledata/simpledataSlice';
import game from './redux/game/gameSlice';

const store = configureStore({
  reducer: {
    game,
    [swApi.reducerPath]: swApi.reducer,
    [simpleDataApi.reducerPath]: simpleDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    getDefaultMiddleware().concat(swApi.middleware, simpleDataApi.middleware),
  devTools: true,
});

export default store;
