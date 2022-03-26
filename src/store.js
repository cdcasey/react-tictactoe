import { configureStore } from '@reduxjs/toolkit';

import { swApi } from 'redux/sw/swSlice';
import game from './redux/game/gameSlice';

const store = configureStore({
  reducer: {
    game,
    [swApi.reducerPath]: swApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(swApi.middleware),
  devTools: true,
});

export default store;
