import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import TextField from '@material-ui/core/TextField';

import MenuItem from '@material-ui/core/MenuItem';



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
    const { placeholder, type } = this.props;

    return (
      <PlacesAutocomplete
        value={this.state.place}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <TextField
              label={placeholder}
              fullWidth
              type={type}
              {...getInputProps()}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => (
                <MenuItem
                  {...getSuggestionItemProps(suggestion)}
                >
                  {suggestion.description}
                </MenuItem>
              ))}
            </div>
          </>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default GoogleAutocompleteField;