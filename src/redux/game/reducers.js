import { SELECT_SQUARE, SELECT_HISTORY } from '../actions';


export const initialState = {
  index: 0,
  history: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SELECT_SQUARE:
      return { ...state, square: action.payload };
    case SELECT_HISTORY:
      return { ...state, history: action.payload };

    default:
      // throw new Error(`Unhandled action: ${action.type}`);
      return state;
  }
}
