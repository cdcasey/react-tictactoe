import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'redux/rootReducer';
import { initialState as reducerInitialState } from 'redux/game/reducers';
import GameContainer from './GameContainer';

// function renderWithRedux(
//   ui,
//   {
//     initialState = reducerInitialState,
//     store = createStore(reducer, initialState),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }
//   console.log(initialState);

//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// }

const initialGameState = { game: reducerInitialState };

function renderWithRedux(
  ui,
  {
    initialState = initialGameState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  console.log(store.getState());

  return render(<Provider store={store}>{ui}</Provider>);
}

const defaultProps = {
  winningCells: [],
  squares: [],
  onClick: jest.fn(),
};

describe('the board', () => {
  it('should render', () => {
    const { debug } = renderWithRedux(<GameContainer />);
    // debug();
    const [firstSquare] = screen.getAllByRole('button');
    expect(firstSquare).toHaveTextContent('');
    fireEvent.click(firstSquare);
  });
});
