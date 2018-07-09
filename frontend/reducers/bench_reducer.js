import { RECEIVE_ALL_BENCHES } from '../actions/bench_actions';
import { UPDATE_BOUNDS } from '../actions/filter_actions';
import { merge } from 'lodash';

const defaultState = {};

export default (state = defaultState, action) => {

  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_BENCHES:
      return action.benches;

    default:
      return defaultState;
  }
};
