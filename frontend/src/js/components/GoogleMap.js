import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import googleMapsConfig from '../config/googleMapsConfig';
import Marker from '../components/Marker';
import { defaultLogo } from '../helpers/base';

const mapConfig = {
  // apiKey: 'AIzaSyCPImQDBkArEQJj7aAnSkTRZ8AUGbK5_pY',
  center: {
    lat: 52.000014,
    lng: 20.280431,
  },
  // bounds: { nw, se, sw, ne },
  zoom: 6
}

class GoogleMap extends Component {
  render() {
    const { data } = this.props;

    return (
      <div style={{ width: '100%', height: '800px' }}>
        {data && (
          <GoogleMapReact onChange={(data) => console.log(data)} {...mapConfig}>
            {/* {data.map((place, index) => {
              const address = !place.coordinates ? JSON.parse(place.address).coordinates : place.coordinates;

              return (<Marker key={place.id || index} id={place.id} logo={place.logo || defaultLogo} {...address} text="AAAA" />)})
            } */}
          </GoogleMapReact>
        )}
      </div>
    )
  }
}

export default GoogleMap;
