import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as placesActions from '../../actions/places';
// import displayServerErrors from '../../helpers/displayServerErrors';
import GoogleMapCreate from '../../components/GoogleMapCreate';

import renderField from '../../components/fields/renderField';
import GoogleAutocompleteField from '../../components/fields/GoogleAutocompleteField';

const categories = ['naprawa', 'sprzedaż']

class PlacesCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = { address: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { create } = this.props;

    return create(values)
  }

  render() {
    const { handleSubmit, address } = this.props;

    let data = [];

    if(address){
      data = [address];
    }

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <p>Create place</p>

        {JSON.stringify(this.state.address)}

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
        <div>
          <Field
            name="address"
            component={GoogleAutocompleteField}
            placeholder="search"
            type="text"
          />
        </div>

        <GoogleMapCreate data={data} />

        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  const selector = formValueSelector('placesCreate');

  return {
    address: selector(state, 'address'),
  }
}

const mapDispatchToProps = dispatch => ({
  create: values => dispatch(placesActions.createPlaces(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'placesCreate',
})(PlacesCreateForm));
