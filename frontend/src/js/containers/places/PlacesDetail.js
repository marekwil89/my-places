import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardMedia, CardContent, IconButton, CardActions } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIosRounded';


class PlacesDetail extends Component {
  render() {
    const { place, history } = this.props;
    return (
      <>
        <Card className="card-box">
          <CardActions>
            <IconButton aria-label="Add to favorites">
              <ArrowBackIcon
                onClick={() => history.push(`/places`)}
              />
            </IconButton>
          </CardActions>
          <CardMedia
            className="media-box"
            image={place && place.logo}
            title="Contemplative Reptile"
          />
          <hr />
          <CardContent>
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
          </CardContent>
        </Card>
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
