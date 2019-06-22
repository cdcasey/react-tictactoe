import React from 'react';

console.log('HELLO');

export default function Square(props) {
  return (
    <button type="button" className={`square ${props.winningCell}`} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
