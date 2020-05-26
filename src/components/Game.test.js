import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'redux/rootReducer';
import { initialState as reducerInitialState } from 'redux/game/reducers';
import GameContainer from './GameContainer';

const gameInitialState = { game: reducerInitialState };

function renderWithRedux(
  ui,
  {
    initialState = gameInitialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) {
  function wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return render(ui, { wrapper, ...renderOptions });
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
