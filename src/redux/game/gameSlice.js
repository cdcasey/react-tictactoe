import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    history: [
      {
        squares: Array(9).fill(null),
        lastSquare: []
      }
    ],
    stepNumber: 0,
    xIsNext: true,
    ascending: false
  },
  reducers: {
    selectSquare: {
      reducer(state, action) {
        const { squares, lastSquare, currentHistory } = action.payload;
        state.history.push({ squares, lastSquare });
        state.stepNumber = currentHistory.length;
        state.xIsNext = !state.xIsNext;
      },
      prepare(squares, lastSquare, currentHistory) {
        return { payload: { squares, lastSquare, currentHistory } };
      }
    },
    selectHistory: {
      reducer(state, action) {
        const { step, xIsNext } = action.payload;
        state.stepNumber = step;
        state.xIsNext = xIsNext;
      },
      prepare(step) {
        const xIsNext = step % 2 === 0;
        return { payload: { step, xIsNext } };
      }
    },
    setSort(state, action) {
      state.ascending = !state.ascending;
    }
  }
});

export const { selectSquare, selectHistory, setSort } = gameSlice.actions;

export default gameSlice.reducer;
