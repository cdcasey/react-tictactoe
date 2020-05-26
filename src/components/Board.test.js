import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Board from './Board';

const defaultProps = {
  winningCells: [],
  squares: [],
  onClick: jest.fn(),
};

describe('the board', () => {
  it('should render', () => {
    render(<Board {...defaultProps} />);
    const [firstSquare] = screen.getAllByRole('button');
    expect(firstSquare).toHaveTextContent('');
    fireEvent.click(firstSquare);
  });
});
