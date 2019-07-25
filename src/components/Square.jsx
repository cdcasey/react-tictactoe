import React from 'react';


export default function Square(props) {
  return (
    <button type="button" className={`square ${props.winningCell}`} onClick={props.onClick} data-testid={props.testid}>
      {props.value}
    </button>
  );
}
