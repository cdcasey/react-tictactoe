import { createSlice, createAction } from '@reduxjs/toolkit';
import { RSAA } from 'redux-api-middleware';

export const GET_SW_SUCCESS = 'GET_SW_SUCCESS';
// export const GET_SW_REQUESTED = 'GET_SW_REQUESTED';
export const GET_SW_FAILURE = 'GET_SW_FAILURE';
// export const GET_SW_SUCCESS = createAction('GET_SW_SUCCESS');
export const GET_SW_REQUESTED = createAction('sw/GET_SW_REQUESTED');
// export const GET_SW_FAILURE = createAction('GET_SW_FAILURE');

// export const getSW = createAction('SW',
// prepare({
//   [RSAA]:
// }))

export const getSW = characterId => ({
  [RSAA]: {
    types: [GET_SW_REQUESTED.type, GET_SW_SUCCESS, GET_SW_FAILURE],
    method: 'GET',
    endpoint: `https://swapi.co/api/people/${characterId}/`
  }
});

// export const getSW = () => dispatch => {
//   console.log('DSIP', dispatch);

//   return dispatch(getSWSet());
// };

const swSlice = createSlice({
  name: 'sw',
  initialState: {
    character: {},
    loading: false,
    error: null
  },
  extraReducers: {
    [GET_SW_SUCCESS]: (state, action) => {
      console.log('SUCCESS', state, action);

      state.character = { ...action.payload };
      state.loading = false;
      state.error = null;
    },
    [GET_SW_REQUESTED]: (state, action) => {
      console.log('REQUEST', state, action);
      state.loading = true;
      state.error = null;
    },
    [GET_SW_FAILURE]: (state, action) => {
      console.log('FAIL', state, action);
      state.loading = false;
      state.error = action.payload;
    }
  }
});

// export const { get } = swSlice.actions;

export default swSlice.reducer;