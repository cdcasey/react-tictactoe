import React from 'react';
import userEvent from '@testing-library/user-event';

import { render, screen } from '../test-utils';
import Game from './Game';

describe('the game app', () => {
  it('should render', () => {
    render(<Game />);
  });

  it('should have a clickable grid', () => {
    render(<Game />);
    const allButtons = screen.getAllByRole('button');
    userEvent.click(allButtons[0]);
    userEvent.click(allButtons[1]);
    expect(allButtons[0].textContent).toBe('X');
    expect(allButtons[1].textContent).toBe('O');

    // can't change a square that's already been clicked
    userEvent.click(allButtons[0]);
    expect(allButtons[0].textContent).toBe('X');
    expect(allButtons[1].textContent).toBe('O');

    // can sort the history
    const historyList = screen.getByRole('list');
    expect(historyList.className).toBe('descending');
    const sortButton = screen.getByText(/reverse/i);
    userEvent.click(sortButton);
    expect(historyList.className).toBe('ascending');

    // can time travel
    const historyButton = screen.getByText(/go to move #1/i);
    userEvent.click(historyButton);
    expect(allButtons[1].textContent).toBe('');
  });

  it('should be winnable', () => {
    render(<Game />);
    const allButtons = screen.getAllByRole('button');
    userEvent.click(allButtons[0]);
    userEvent.click(allButtons[1]);
    userEvent.click(allButtons[4]);
    userEvent.click(allButtons[5]);
    userEvent.click(allButtons[8]);
    screen.getByText(/winner: x/i);
  });

  it('should be possible to have a draw', () => {
    render(<Game />);
    const allButtons = screen.getAllByRole('button');
    userEvent.click(allButtons[0]);
    userEvent.click(allButtons[1]);
    userEvent.click(allButtons[2]);
    userEvent.click(allButtons[4]);
    userEvent.click(allButtons[3]);
    userEvent.click(allButtons[5]);
    userEvent.click(allButtons[7]);
    userEvent.click(allButtons[6]);
    userEvent.click(allButtons[8]);
    screen.getByText(/draw/i);
  });
});
