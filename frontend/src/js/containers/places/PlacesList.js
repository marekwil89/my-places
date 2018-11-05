import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { defaultLogo } from '../../helpers/base';


class PlacesList extends Component {

  render() {
    const { places, history } = this.props;

    return (
      <>
        {places && places.map(place => (
          <div className="card-box" key={place.id}>
            <h4>
              {place.name}
            </h4>
            <figure className="logo-box">
              <img src={place.logo || defaultLogo} />
            </figure>
            <button onClick={() => history.push(`/place/${place.id}`)}>details</button> 
          </div>
        ))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.data,
});

export default withRouter(connect(mapStateToProps, null)(PlacesList));
