import { SELECT_SQUARE, SELECT_HISTORY, SET_SORT } from '../actions';


export const initialState = {
  history: [{
    squares: Array(9).fill(null),
    lastSquare: [],
  }],
  stepNumber: 0,
  xIsNext: true,
  ascending: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_SQUARE:
      return {
        ...state,
        history: [
          ...action.payload.currentHistory,
          { squares: action.payload.squares, lastSquare: action.payload.lastSquare },
        ],
        stepNumber: action.payload.currentHistory.length,
        xIsNext: !state.xIsNext,
      };
    case SELECT_HISTORY:
      return {
        ...state,
        stepNumber: action.payload.step,
        xIsNext: action.payload.xIsNext,
        // history: state.history.slice(0, state.stepNumber + 1),
      };
    case SET_SORT:
      return { ...state, ascending: !state.ascending };

    default:
      // throw new Error(`Unhandled action: ${action.type}`);
      return state;
  }
}
