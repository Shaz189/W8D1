import * as BenchApiUtil from '../util/bench_api_util.js';
export const RECEIVE_ALL_BENCHES = 'RECEIVE_ALL_BENCHES';
export const RECEIVE_BENCH_ERRORS = 'RECEIVE_BENCH_ERRORS';

export const receiveAllBenches = (benches) => {
  return {
    type: RECEIVE_ALL_BENCHES,
    benches
  };
};

export const receiveBenchErrors = (err) => {
  return {
    type: RECEIVE_BENCH_ERRORS,
    err
  };
};

export const fetchBenches = () => {
  return dispatch => {
    return BenchApiUtil.fetchBenches().then(
      (benches) => dispatch(receiveAllBenches(benches))
    );
  };
};
