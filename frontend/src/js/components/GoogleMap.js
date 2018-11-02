import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapsConfig from '../config/googleMapsConfig';
import Marker from '../components/Marker';

class GoogleMap extends Component {
  render() {
    const { data } = this.props;

    const defaultLogo = "http://www.glengarry-callander.com/wp-content/uploads/2017/03/your-logo-here-27-e1489435408249.png";

    return (
      <div style={{ width: '100%', height: '800px' }}>
        <GoogleMapReact
          {...googleMapsConfig}
        >
          {data && data.map((place, index) => <Marker key={place.id || index} id={place.id} logo={place.logo || defaultLogo} {...place.coordinates} text="AAAA" />)}
        </GoogleMapReact>
      </div>
    )
  }
}

export default GoogleMap;
