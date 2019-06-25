import React from 'react';

import Square from './Square';


export default function Board(props) {
  function renderSquare(i) {
    return (
      <Square
        winningCell={props.winningCells.includes(i) ? 'winner' : ''}
        key={i}
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }


  // const width = 3;
  // const totalSquares = 9;
  // let squareNum = 0;
  // const board = [];
  // for (let i = 0; i < totalSquares; i += 3) {
  //   const row = [];
  //   for (let j = 0; j < 3; j++) {
  //     row.push(renderSquare(squareNum));
  //     squareNum++;
  //   }
  //   board.push(<div key={`row${i / width}`} className="board-row">{row}</div>);
  // }
  return (
    <div>
      {/* {board} */}
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
