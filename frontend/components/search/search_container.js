import Search from './search';
import { connect } from 'react-redux';
import { fetchBenches } from '../../actions/bench_actions';
import { updateBounds } from '../../actions/filter_actions';

const msp = (state) => {
  return {
    benches: Object.values(state.entities.benches),
    bounds: state.ui.filters.bounds
  };
};

const mdp = (dispatch) => {
  return {
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds))
  };
};

export default connect(msp, mdp)(Search);
