import React from 'react';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {

  componentDidMount() {

  // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.props.fetchBenches(this.props.bounds);
    this.mountEventListener();
  }

  componentWillReceiveProps(newProps) {
    const newMarkers = newProps.benches.map((bench) => {
      let myLatLng = {lat: bench.lat, lng: bench.lng};
      return  {
        position: myLatLng,
        map: this.MarkerManager.map,
        title: bench.description,
        id: bench.id
      };
    });
    this.MarkerManager.updateMarkers(newMarkers);
  }

  mountEventListener() {
    google.maps.event.addListener(this.map, 'idle', () => {
    const { north, south, east, west } = this.map.getBounds().toJSON();
    const bounds = {
      northEast: { lat:north, lng: east },
      southWest: { lat: south, lng: west } };
    this.props.updateBounds(bounds);
    this.props.fetchBenches(bounds);
  });
  }

  render () {
    return (
      <div id="map-container" ref='map'>
        <div id="map-component" ref={ map => this.mapNode = map }> </div>
      </div>
    );
  }
}

export default BenchMap;
