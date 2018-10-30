import React, { Component } from 'react';
import { connect } from 'react-redux';
// import GoogleMap from '../../containers/googleMaps/map';
import * as placesActions from '../../actions/places';
import PlacesCreateForm from '../../containers/places/createForm';

class PlacesCreatePage extends Component {
  componentDidMount() {
    // const { getPlaces, match } = this.props;

    // getPlaces(match.params.id);
  }

  render() {
    return (
      <section id="places-create-section">
        <PlacesCreateForm />
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createPlaces: id => dispatch(placesActions.createPlaces(id)),
});

export default connect(null, mapDispatchToProps)(PlacesCreatePage);