import { RECEIVE_ALL_BENCHES } from '../actions/bench_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_ALL_BENCHES:
      return merge(newState, action.benches);
    default:
      return state;
  }
};
