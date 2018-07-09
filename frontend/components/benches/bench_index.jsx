import React from 'react';

class BenchIndex extends React.Component {

  // constructor(props) {
    // super(props);
    // 
    //   // this.state = {
    //   //   benches: props.benches
    //   // };
    // }


  componentDidMount() {
    this.props.fetchBenches();
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     benches: newProps.benches
  //   });
  // }

  render(){
    let indexContent;
    if (this.props.benches.length === 0) {
      indexContent = (<li>No benches</li>);
    } else {
      indexContent = this.props.benches.map( bench => {
        return (
          <li key={bench.id}>{bench.description}</li>
        );
      });
    }
    return (
      <ul>
        {indexContent}
      </ul>
    );
  }
}

export default BenchIndex;
