import { SELECT_SQUARE, SELECT_HISTORY } from '../actions';


const selectSquareActionSet = index => ({
  type: SELECT_SQUARE,
  payload: index,
});

export const selectSquare = index => dispatch => (
  dispatch(selectSquareActionSet(index))
);

const selectHistoryActionSet = index => ({
  type: SELECT_HISTORY,
  payload: index,
});

export const selectHistory = index => dispatch => (
  dispatch(selectHistoryActionSet(index))
);
