import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import googleMapsConfig from '../config/googleMapsConfig';
import Marker from '../components/Marker';
import { defaultLogo } from '../helpers/base';

class GoogleMap extends Component {
  render() {
    const { data } = this.props;

    return (
      <div style={{ width: '100%', height: '800px' }}>
        {data && (
          <GoogleMapReact {...googleMapsConfig}>
            {data.map((place, index) => {
              const address = !place.coordinates ? JSON.parse(place.address).coordinates : place.coordinates;

              return (<Marker key={place.id || index} id={place.id} logo={place.logo || defaultLogo} {...address} text="AAAA" />)})
            }
          </GoogleMapReact>
        )}
      </div>
    )
  }
}

export default GoogleMap;
