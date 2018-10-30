import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Card, CardHeader, IconButton   } from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

class PlacesList extends Component {

  render() {
    const { places, history } = this.props;
  
    return (
      <>
        {places && places.map(place => (
          <Card className="card-box" key={place.id}>
            <CardHeader
              avatar={
                <figure className="logo-box">
                  <img src={place.logo}/>
                </figure>
              }
              action={
                < IconButton style={{ marginTop: '20px' }}>
                  <SendRoundedIcon
                    onClick={() => history.push(`/place/${place.id}`)}
                  />
                </IconButton >
              }
              title={place.name}
              subheader={`kategoria: ${place.category}`}
            />
          </Card>
        ))}
      </>
    )
  }
}

const mapStateToProps = state => ({
  places: state.places.data,
});

export default withRouter(connect(mapStateToProps, null)(PlacesList));
