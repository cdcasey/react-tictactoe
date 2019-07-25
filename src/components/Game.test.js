import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import Game from './Game';


afterEach(cleanup);

describe('<Game/> component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have clickable squares', () => {
    const { getByTestId, debug } = render(<Game />);
    const square0 = getByTestId('square0');
    expect(square0.textContent).toBe('');
    fireEvent.click(square0);
    expect(square0.textContent).toBe('X');
    fireEvent.click(square0);
    expect(square0.textContent).toBe('X');
  });

  it('should have a sorting button', () => {
    const { getByTestId, debug } = render(<Game />);
    const square0 = getByTestId('square0');
    fireEvent.click(square0);

    const sortButton = getByTestId('sort-button');
    expect(sortButton).toBeTruthy();

    const sortList = getByTestId('sort-list');
    expect(sortList.className).toBe('descending');
    fireEvent.click(sortButton);
    expect(sortList.className).toBe('ascending');
  });

  it('should reset squares on go to game start', () => {
    const { getByTestId, getByText } = render(<Game />);

    const square0 = getByTestId('square0');
    fireEvent.click(square0);
    const square1 = getByTestId('square1');
    fireEvent.click(square1);

    const gameStart = getByText('Go to game start');
    fireEvent.click(gameStart);

    expect(square0.textContent).toBe('');
    expect(square1.textContent).toBe('');
  });

  it('should display a winner when appropriate', () => {
    const { getByTestId, getByText } = render(<Game />);
    const winnerDisplay = getByText('Next player: X');
    expect(winnerDisplay).toBeTruthy();

    const square0 = getByTestId('square0');
    fireEvent.click(square0);
    const square1 = getByTestId('square1');
    fireEvent.click(square1);

    const square4 = getByTestId('square4');
    fireEvent.click(square4);
    const square5 = getByTestId('square5');
    fireEvent.click(square5);

    const square8 = getByTestId('square8');
    fireEvent.click(square8);

    expect(winnerDisplay.textContent).toBe('Winner: X');
    fireEvent.click(square0);
    expect(square0.textContent).toBe('X');
  });
});
