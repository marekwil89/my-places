import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesDetail from '../../containers/places/detail';
import GoogleMap from '../../containers/googleMaps/map';
import * as placesActions from '../../actions/places';

class PlacesDetailPage extends Component {
  componentDidMount() {
    const { getPlaces, match } = this.props;

    getPlaces(match.params.id);
  }

  render() {
    return (
      <section id="places-detail-section">
        <article>
          <PlacesDetail />
        </article>
        <aside>
          <GoogleMap />
        </aside>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getPlaces: id => dispatch(placesActions.getPlaces(id)),
});

export default connect(null, mapDispatchToProps)(PlacesDetailPage);
