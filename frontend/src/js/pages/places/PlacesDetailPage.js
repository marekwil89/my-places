import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlacesDetail from '../../containers/places/PlacesDetail';
import GoogleMapList from '../../components/GoogleMapList';
import * as placesActions from '../../actions/places';

class PlacesDetailPage extends Component {
  componentDidMount() {
    const { getPlaces, match } = this.props;

    getPlaces(match.params.id);
  }

  render() {
    const { places } = this.props;

    return (
      <section id="places-detail-section">
        <article>
          <PlacesDetail />
        </article>
        <aside>
          <GoogleMapList {...places} />
        </aside>
      </section>
    )
  }
}

const mapStateToProps = ({ places }) => ({
  places,
});

const mapDispatchToProps = dispatch => ({
  getPlaces: id => dispatch(placesActions.getPlaces(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlacesDetailPage);
