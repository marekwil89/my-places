import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import googleMapsConfig from '../config/googleMapsConfig';
import Marker from '../components/marker';

class GoogleMap extends Component {
  render() {
    const { places } = this.props;

    return (
      <div style={{ width: '100%', height: '800px' }}>
        <GoogleMapReact
          {...googleMapsConfig}
        >
          {places && places.map(place => <Marker key={place.id} id={place.id} logo={place.logo} {...place.coordinates} text="AAAA" />)}
        </GoogleMapReact>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.data,
});

export default connect(mapStateToProps, null)(GoogleMap);
