import React from 'react';
import BenchMap from '../benches/bench_map';
import BenchIndex from '../benches/bench_index';

class Search extends React.Component {
  componentDidMount() {
    this.props.fetchBenches(this.props.bounds);
  }
  render () {
    return (
      <div>
        <BenchMap
          updateBounds={this.props.updateBounds}
          benches={this.props.benches}
          fetchBenches={this.props.fetchBenches}
          bounds={this.props.bounds}
          />

        <BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches}/>
      </div>
    );
  }
}

export default Search;
