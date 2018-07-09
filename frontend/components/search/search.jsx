import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }
  render () {
    debugger
    return (
      <div>
        <BenchMap />
        <BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches}/>
      </div>
    );
  }
}

export default Search;
