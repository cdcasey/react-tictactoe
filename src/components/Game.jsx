/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSort, selectHistory, selectSquare } from 'redux/game/gameSlice';
import { useAddDataMutation } from 'redux/simpledata/simpledataSlice';
import { useGetCharacterQuery } from 'redux/sw/swSlice';
import Board from './Board';
import SW from './SWComponent';
import SimpleData from './SimpleData';

export default function Game() {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game);
  // eslint-disable-next-line object-curly-newline
  const { history, stepNumber, xIsNext, ascending } = gameState;

  const currentHistory = history.slice(0, stepNumber + 1);

  const currentBoard = currentHistory[stepNumber];
  const squares = currentBoard.squares.slice();
  const winner = calculateWinner(currentBoard.squares);

  const { data } = useGetCharacterQuery(stepNumber);
  const [addData] = useAddDataMutation();

  console.log(stepNumber);
  const handleClick = (i) => {
    // If there's a winner or if there's an X or O in the square, do nothing
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    const col = i % 3;
    const row = Math.floor(i / 3);
    const lastSquare = [col, row];
    dispatch(selectSquare(squares, lastSquare, currentHistory));
    const id = stepNumber + 1;
    addData({ id, name: id === 1 ? 'SW CHARACTERS' : data.name });
  };

  // useEffect(() => {
  //   if (stepNumber !== 0 && data?.name) {
  //     addData({ id: stepNumber, name: data.name });
  //   }
  // }, [stepNumber, data, addData]);

  const moves = history.map((step, move) => {
    const currentStepClass = move === stepNumber ? 'current' : '';
    const desc = move ? `Go to move #${move} ${step.lastSquare}` : 'Go to game start';
    return (
      <li className={currentStepClass} key={step.lastSquare.toString()}>
        <button type="button" onClick={() => dispatch(selectHistory(move))}>
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = `Winner: ${winner.letter}`;
    // } else if (this.state.stepNumber === 9) {
  } else if (squares.every(Boolean)) {
    status = 'DRAW. There is no winner. You may as well stop playing.';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            winningCells={winner ? winner.cells : []}
            squares={currentBoard.squares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button type="button" onClick={() => dispatch(setSort())}>
            Reverse sort order
          </button>
          <ol className={ascending ? 'ascending' : 'descending'}>{moves}</ol>
          {/* <ol>{this.state.ascending ? moves.reverse() : moves}</ol> */}
        </div>
        <SW />
      </div>
      <SimpleData />
    </>
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
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        letter: squares[a],
        cells: [a, b, c],
      };
    }
  }
  return null;
}
