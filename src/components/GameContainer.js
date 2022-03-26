import { connect } from 'react-redux';

import { actionCreators } from '../redux/game';
import Game from './Game';

const { setSort, selectHistory, selectSquare } = actionCreators;
const mapDispatchToProps = {
  setSort,
  selectHistory,
  selectSquare,
};

export default connect(null, mapDispatchToProps)(Game);
