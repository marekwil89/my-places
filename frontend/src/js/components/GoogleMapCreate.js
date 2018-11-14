import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// import googleMapsConfig from '../config/googleMapsConfig';
import Marker from '../components/Marker';
import { defaultLogo } from '../helpers/base';

class GoogleMapCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapConfig: {
        center: {
          lat: 52.000014,
          lng: 20.280431,
        },
        zoom: 7
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data[0]){
      this.setState({
        mapConfig: {
          zoom: 14,
          center: nextProps.data[0].coordinates,
        },
      });
    }
  }

  render() {
    const { data } = this.props;
    const { mapConfig } = this.state;

    console.log(data);

    return (
      <div style={{ width: '100%', height: '800px' }}>
        {data && (
          <GoogleMapReact {...mapConfig}>
            {data.map((place, index) => <Marker key={index} logo={defaultLogo} {...place.coordinates} text="AAAA" />)}
          </GoogleMapReact>
        )}
      </div>
    )
  }
}

export default GoogleMapCreate;
