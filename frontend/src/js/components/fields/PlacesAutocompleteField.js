import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

class PlacesAutocompleteField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredSuggestions: [],
    };
  }

  handleFetch = ({ value }) => {
    const { suggestions } = this.props;
    const filteredSuggestions = suggestions.filter(
      ({ label }) => label.toLowerCase().startsWith(value)
    );
    this.setState({ filteredSuggestions });
  }

  handleClear = () => {
    this.setState({ filteredSuggestions: [] });
  }

  handleGetSuggestion = (props) => {
    return props.label;
  }

  handleSuggestionHighlighted = ({ suggestion }) => {
    this.setState({ highlightedSuggestion: suggestion });
  }

  renderSuggestion = (props) => {
    return (
      <span>{props.label}</span>
    );
  }

  handleSuggestionSelected = (event, { suggestionValue, method }) => {
    const { input } = this.props;
    input.onChange(suggestionValue);
    if (method === 'enter') {
      event.preventDefault();
    }
  }

  render() {
    const { input } = this.props;
    const { filteredSuggestions } = this.state;
    return (
      <Autosuggest
        suggestions={filteredSuggestions}
        onSuggestionsFetchRequested={this.handleFetch}
        onSuggestionsClearRequested={this.handleClear}
        getSuggestionValue={this.handleGetSuggestion}
        renderSuggestion={this.renderSuggestion}
        onSuggestionHighlighted={this.handleSuggestionHighlighted}
        onSuggestionSelected={this.handleSuggestionSelected}
        inputProps={input}
      />
    );
  }
}

export default PlacesAutocompleteField;
