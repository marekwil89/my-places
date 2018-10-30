import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesList from '../../containers/places/list';
import GoogleMap from '../../containers/googleMaps/map';
import * as placesActions from '../../actions/places';

class PlacesListPage extends Component {
  componentDidMount() {
    const { getPlaces } = this.props;

    getPlaces();
  }

  render() {
    return (
      <section id="places-list-section">
        <article>
          <PlacesList />
        </article>
        <aside>
          <GoogleMap />
        </aside>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPlaces: () => dispatch(placesActions.getPlaces()),
});

export default connect(null, mapDispatchToProps)(PlacesListPage);
