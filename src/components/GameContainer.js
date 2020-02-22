import { connect } from 'react-redux';

import { actionCreators, selectors } from '../redux/game';
import Game from './Game';

function mapStateToProps(state) {
  const game = selectors.getGameState(state);
  return { ...game };
}

const { setSort, selectHistory, selectSquare } = actionCreators;
const mapDispatchToProps = {
  setSort,
  selectHistory,
  selectSquare
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
