import React from 'react';
import ReactDOM from 'react-dom';

import { GameProvider } from './providers/GameProvider';
import Game from './components/Game';

import './index.css';

// ========================================

ReactDOM.render(
  <GameProvider>
    <Game />
  </GameProvider>,
  document.getElementById('root'),
);
