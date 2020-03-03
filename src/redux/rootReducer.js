import { combineReducers } from 'redux';

import game from './game';
import sw from './sw';

export default combineReducers({ game, sw });
