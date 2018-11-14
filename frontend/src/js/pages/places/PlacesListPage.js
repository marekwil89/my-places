import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapList from '../../components/GoogleMapList';
import * as placesActions from '../../actions/places';
import PlacesList from '../../containers/places/PlacesList';
import PlacesSearchForm from '../../containers/places/PlacesSearchForm';
import CircularProgress from '@material-ui/core/CircularProgress';

class PlacesListPage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  componentDidMount() {
    // const { getPlaces } = this.props;

    // // getPlaces();
  }

  componentDidUpdate(prevProps) {
    const { places, getPlaces } = this.props;

    if (prevProps.places && places ? prevProps.places.searchPlace !== places.searchPlace : false) {

      this.setState({
        isLoading: true,
      })

      getPlaces().then(response => {
        if(response) {
          setTimeout(() => {
            this.setState({
              isLoading: false,
            })
          }, 500)
        }
      });
    }
  }

  render() {
    const { places } = this.props;
    const { isLoading } = this.state;

    return (
      <section id="places-list-section">
        <header>
          <PlacesSearchForm />
        </header>
        <div className="places-wrapper">
          {!isLoading ? (
            <>
              <article>
                <PlacesList />
              </article>
              <aside>
                <GoogleMapList {...places} />
              </aside>
            </>
          ) : <CircularProgress />}
        </div>
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
