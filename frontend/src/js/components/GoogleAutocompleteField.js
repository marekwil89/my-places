import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

class GoogleAutocompleteField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { place: '', coordinates: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(place){
    const { input } = this.props;
    const { onChange } = input;

    geocodeByAddress(place)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({ place, coordinates: latLng });
        onChange({ place, coordinates: latLng });
      })
      .catch(error => console.error('Error', error));
  }

  handleChange(place) {
    this.setState({ place });
  }

  render() {
    return (
      <span>
        <PlacesAutocomplete
          value={this.state.place}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <>
              <input {...getInputProps({ placeholder: 'find a place' })} />
              <div>
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => (
                  <div {...getSuggestionItemProps(suggestion)}>
                    {suggestion.description}
                  </div>
                ))}
              </div>
            </>
          )}
        </PlacesAutocomplete>
      </span>
    );
  }
}

export default GoogleAutocompleteField;