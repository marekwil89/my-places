import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as placesActions from '../../actions/places';
import PlacesCreateForm from '../../containers/places/PlacesCreateForm';

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