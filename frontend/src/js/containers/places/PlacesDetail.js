import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { defaultLogo } from '../../helpers/base';

class PlacesDetail extends Component {
  render() {
    const { place, history } = this.props;

    return (
      <>
      {place && (
        <div className="card-box">
          <button onClick={() => history.push(`/places`)}>back</button> 

          <figure className="logo-box">
            <img src={place.logo || defaultLogo} />
          </figure>
          <hr />
          <h4>
            {place && place.name}
          </h4>
          <p>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </p>
          <p>
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </p>
        </div>
      )}
      </>
    )
  }
}

const mapStateToProps = state => {
  const placesArr = state.places.data;

  const data = Array.isArray(placesArr) && placesArr.length > 0 ? placesArr[0] : undefined;
  return {
    place: data,
  }
};

export default withRouter(connect(mapStateToProps, null)(PlacesDetail));
