import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from 'redux/rootReducer';
import { initialState as gameInitialState } from 'redux/game/reducers';
import GameContainer from './GameContainer';

// const gameInitialState = { game: gameInitialState };

function renderWithRedux(
  ui,
  {
    initialState = {},
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

test('should render', () => {
  const { debug } = renderWithRedux(<GameContainer />);
  const [firstSquare, secondSquare] = screen.getAllByRole('button');
  expect(firstSquare).toHaveTextContent('');
  const status = screen.getByText('Next player: X');
  expect(status).toBeTruthy();
  fireEvent.click(firstSquare);
  expect(firstSquare).toHaveTextContent('X');
  fireEvent.click(secondSquare);
  // debug();
  expect(secondSquare).toHaveTextContent('O');

  const reverser = screen.getByText('Reverse sort order');
  // const list = screen.getByRole('list');
  // console.log('list', list.className);
  fireEvent.click(reverser);
  // console.log('list', list.className);

  // status = screen.getByText('Next player: O');
  // expect(status).toBeTruthy();
});

test('should click through history', () => {
  renderWithRedux(<GameContainer />);
  const [firstSquare] = screen.getAllByRole('button');
  expect(firstSquare).toHaveTextContent('');
  fireEvent.click(firstSquare);
  expect(firstSquare).toHaveTextContent('X');
  let order = screen.getByText('Go to game start');
  fireEvent.click(order);
  expect(firstSquare).toHaveTextContent('');
});

test('winning state', () => {
  // const testStore = createStore(reducer, {});

  const history = [
    {
      squares: ['X', 'X', 'X', null, null, null, null, null, null],
      lastSquare: [],
    },
  ];
  // const store = testStore.getState();
  // console.log('STORE', store);

  const initialState = { game: { ...gameInitialState, history } };
  // const initialState = { game: { ...store.game, history } };
  renderWithRedux(<GameContainer />, { initialState });
  const [firstSquare] = screen.getAllByRole('button');
  expect(firstSquare).toHaveTextContent('X');
  fireEvent.click(firstSquare);
  expect(firstSquare).toHaveTextContent('X');
});

test('should have a draw state', () => {
  const history = [
    {
      squares: ['X', 'O', 'O', 'O', 'X', 'X', 'X', 'X', 'O'],
      lastSquare: [],
    },
  ];
  const initialState = { game: { ...gameInitialState, history } };
  renderWithRedux(<GameContainer />, { initialState });
  const draw = screen.getByText(
    'DRAW. There is no winner. You may as well stop playing.'
  );
  expect(draw).toBeTruthy();
  // const [firstSquare] = screen.getAllByRole('button');
  // expect(firstSquare).toHaveTextContent('X');
  // fireEvent.click(firstSquare);
  // expect(firstSquare).toHaveTextContent('X');
});
