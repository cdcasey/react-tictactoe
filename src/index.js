import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Game from './components/Game';

import store from './store';
import './index.css';

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
