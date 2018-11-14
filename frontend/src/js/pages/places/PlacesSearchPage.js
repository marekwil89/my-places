import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as placesActions from '../../actions/places';
import PlacesSearchForm from '../../containers/places/PlacesSearchForm';

class PlacesSearchPage extends Component {
  // componentDidMount() {
  //   const { getPlaces } = this.props;

  //   getPlaces();
  // }

  render() {

    return (
      <section id="places-search-section">
        <PlacesSearchForm />
      </section>
    )
  }
}

// const mapStateToProps = ({ places }) => ({
//   places,
// });

// const mapDispatchToProps = dispatch => ({
//   setPlace: place => dispatch(placesActions.setPlace(place)),
// });

export default PlacesSearchPage
