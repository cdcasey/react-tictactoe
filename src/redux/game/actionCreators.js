import { SELECT_SQUARE, SELECT_HISTORY, SET_SORT } from '../actions';


export const selectSquare = (squares, lastSquare, currentHistory) => ({
  type: SELECT_SQUARE,
  payload: { squares, lastSquare, currentHistory },
});

// export const selectSquare = (squares, lastSquare) => dispatch => (
//   dispatch(selectSquareActionSet(squares, lastSquare))
// );

export const selectHistory = (step) => {
  const xIsNext = step % 2 === 0;
  return {
    type: SELECT_HISTORY,
    payload: { step, xIsNext },
  };
};

// export const selectHistory = step => dispatch => (
//   dispatch(selectHistoryActionSet(step))
// );

export const setSort = () => ({
  type: SET_SORT,
});

// export const setSort = () => dispatch => (
//   dispatch(setSortActionSet())
// );
