/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { selectCharacter } from 'redux/sw/swSlice';
import { useSelector } from 'react-redux';

export default function Board(props) {
  const characters = useSelector((state) => selectCharacter(state));
  console.log(characters);
  const renderSquare = (i) => (
    <button
      type="button"
      className={props.winningCells.includes(i) ? 'square winner' : 'square'}
      onClick={() => props.onClick(i)}
    >
      {props.squares[i]}
    </button>
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
