import { connect } from 'react-redux';

import { actionCreators, selectors } from '../redux/game';
import Game from './Game';

function mapStateToProps(state) {
  const game = selectors.getGameState(state);
  return { ...game };
}

const mapDispatchToProps = {
  setSort: actionCreators.setSort,
  selectHistory: actionCreators.selectHistory,
  selectSquare: actionCreators.selectSquare,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
