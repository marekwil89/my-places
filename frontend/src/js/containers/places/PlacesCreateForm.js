import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import renderField from '../../components/renderField';
import displayServerErrors from '../../helpers/displayServerErrors';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const categories = ['naprawa', 'sprzedaż']

class PlacesCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = { address: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  handleSubmit(values) {
    console.log(values);
    // const { register } = this.props;
    // return register(values).then(errors => displayServerErrors(errors));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <p>Create place</p>
        <div>
          <Field name="name" component={renderField} type="text" />
        </div>
        <hr/>
        <div>
          <Field name="description" component={renderField} type="description" />
        </div>
        <div>
          {categories.map((category, index) => (
            <Field name={`categories[${category}]`} key={index} component="input" type="checkbox" />
          ))}
        </div>

        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <>
              <input {...getInputProps({ placeholder: 'Znajdź miejsce'})}/>
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

        <button type="submit">Submit</button>
      </form>
    )
  }
}

// name: {
//   type: Sequelize.STRING,
//   },
// description: {
//   type: Sequelize.STRING,
//   },
// category: {
//   type: Sequelize.STRING,
//   },
// logo: {
//   type: Sequelize.STRING,
//   },
// address: {
//   type: Sequelize.STRING,
//   },
// coordinates: {
//   type: Sequelize.STRING,
//   },

const mapDispatchToProps = dispatch => ({
  register: values => dispatch(authActions.register(values)),
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'placesCreate',
})(PlacesCreateForm));
