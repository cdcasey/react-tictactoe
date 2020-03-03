import { connect } from 'react-redux';

import { actionCreators, selectors as swSelectors } from '../redux/sw';
import { selectors as gameSelectors } from '../redux/game';
import SWComponent from './SWComponent';
import { stepNumberSelector } from 'redux/game/selectors';

function mapStateToProps(state) {
  return {
    name: swSelectors.swCharacterNameSelector(state),
    stepNumber: gameSelectors.stepNumberSelector(state)
  };
}

// const { getSW } = actionCreators;

const mapDispatchToProps = {
  getSW: actionCreators.getSW
};

export default connect(mapStateToProps, mapDispatchToProps)(SWComponent);
