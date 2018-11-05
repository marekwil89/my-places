import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
// import * as placesActions from '../../actions/places';
// import GoogleMapCreate from '../../components/GoogleMapCreate';

import PlacesAutocompleteField from '../../components/fields/PlacesAutocompleteField';

const suggestions = [
  { label: 'Apple', value: 1 },
  { label: 'Aqua', value: 2 },
  { label: 'Banana', value: 3 },
  { label: 'Bean', value: 4 },
  { label: 'Date', value: 5 },
];

class PlacesSearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = { address: null, suggestions: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(values) {
    const { search } = this.props;

    return search(values)
    // return register(values).then(errors => displayServerErrors(errors));
  }

  handleChange(value) {
    const { getSuggestions } = this.props;
    getSuggestions(value);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <p>Search form places</p>

        <div>
          <Field
            onChange={(event) => this.handleChange(event.target.value)}
            name="place"
            component={PlacesAutocompleteField}
            suggestions={suggestions}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('placesSearchForm');

  return {
    address: selector(state, 'place'),
  }
}

const mapDispatchToProps = dispatch => ({
  search: values => console.log(values),
  getSuggestions: value => console.log(value),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'placesSearchForm',
})(PlacesSearchForm));