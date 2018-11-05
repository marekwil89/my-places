import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../../components/GoogleMap';
import * as placesActions from '../../actions/places';
import PlacesList from '../../containers/places/PlacesList';
import PlacesSearchForm from '../../containers/places/PlacesSearchForm';

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
        <header>
          <PlacesSearchForm />
        </header>
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
