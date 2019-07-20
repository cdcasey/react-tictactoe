import React from 'react';


export default function Square({ winningCell, value, onClick }) {
  return (
    <button type="button" className={`square ${winningCell}`} onClick={onClick}>
      {value}
    </button>
  );
}
