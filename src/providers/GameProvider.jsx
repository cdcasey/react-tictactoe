import React from 'react';

export const GameContext = React.createContext();

export function GameProvider(props) {
  const [history, setHistory] = React.useState([{
    squares: Array(9).fill(null),
  }]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [xIsNext, setXIsNext] = React.useState(true);
  const [ascending, setAscending] = React.useState(false);

  const value = {
    history, setHistory, stepNumber, setStepNumber, xIsNext, setXIsNext, ascending, setAscending,
  };

  return <GameContext.Provider value={value} {...props} />;
}
