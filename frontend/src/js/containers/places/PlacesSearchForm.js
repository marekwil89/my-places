import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as placesActions from '../../actions/places';
import Button from '@material-ui/core/Button';
import GoogleAutocompleteField from '../../components/fields/GoogleAutocompleteField';

class PlacesSearchForm extends Component {
  constructor(props) {
    super(props);

    // this.state = { address: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { setSearchPlace } = this.props;

    const { place } = values;

    return setSearchPlace(place)
    // return register(values).then(errors => displayServerErrors(errors));
  }

  render() {
    const { handleSubmit } = this.props;


    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>

        <div>
          <Field
            name="place"
            component={GoogleAutocompleteField}
            placeholder="search"
            type="text"
          />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Primary
        </Button>
        {/* <button >Submit</button> */}
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
  setSearchPlace: place => dispatch(placesActions.setSearchPlace(place)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'placesSearchForm',
})(PlacesSearchForm));