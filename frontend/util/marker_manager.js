export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  componentDidMount() {
  }

  createMarker(marker){
    const googMarker = new google.maps.Marker(marker);
    this.markers[marker.id] = googMarker;
  }

  updateMarkers(newMarkers) {
    newMarkers.forEach( (marker) => {
      this.createMarker(marker);
    });
  }


}
