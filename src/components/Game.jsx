import React from 'react';

import Board from './Board';


export default function Game(props) {
  const [history, setHistory] = React.useState([{
    squares: Array(9).fill(null),
  }])
  const [stepNumber, setStepNumber] = React.useState(0)
  const [xIsNext, setXIsNext] = React.useState(true)
  const [ascending, setAscending] = React.useState(false)

  function handleClick(i) {
    const theHistory = history.slice(0, stepNumber + 1);
    const current = theHistory[theHistory.length - 1];
    const squares = current.squares.slice();
    // If there's a winner or if there's an X or O in the square, do nothing
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const col = i % 3;
    const row = Math.floor(i / 3);
    const lastSquare = [col, row];

    setHistory([...theHistory, { squares, lastSquare }])
    setStepNumber(theHistory.length)
    setXIsNext(!xIsNext)

  }

  function jumpTo(step) {
    setStepNumber(step)
    setXIsNext((step % 2) === 0)
  }

  function setSort() {
    setAscending(!ascending)
  }

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const currentStep = move === stepNumber ? 'current' : '';
    const desc = move
      ? `Go to move #${move} ${step.lastSquare}`
      : 'Go to game start';
    return (
      <li className={currentStep} key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner.letter}`;
  } else if (stepNumber === 9) {
    status = 'DRAW. There is no winner. You may as well stop playing.';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          winningCells={winner ? winner.cells : []}
          squares={current.squares}
          onClick={i => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={() => setSort()}>Reverse sort order</button>
        <ol className={ascending ? 'ascending' : 'descending'}>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        letter: squares[a], cells: [a, b, c],
      };
    }
  }
  return null;
}
