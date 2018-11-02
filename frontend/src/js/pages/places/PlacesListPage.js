import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesList from '../../containers/places/PlacesList';
import GoogleMap from '../../components/GoogleMap';
import * as placesActions from '../../actions/places';

class PlacesListPage extends Component {
  componentDidMount() {
    const { getPlaces } = this.props;

    getPlaces();
  }

  render() {
    const { places } = this.props;

    console.log(places)

    return (
      <section id="places-list-section">
        <article>
          <PlacesList />
        </article>
        <aside>
          <GoogleMap {...places} />
        </aside>
      </section>
    )
  }
}

const mapStateToProps = ({ places }) => ({
  places,
});

const mapDispatchToProps = dispatch => ({
  getPlaces: () => dispatch(placesActions.getPlaces()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesListPage);
