import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import renderField from '../../components/renderField';
import displayServerErrors from '../../helpers/displayServerErrors';
import GoogleMap from '../../components/GoogleMap';

import GoogleAutocompleteField from '../../components/GoogleAutocompleteField';

const categories = ['naprawa', 'sprzedaż']

class PlacesCreateForm extends Component {
  constructor(props) {
    super(props);

    this.state = { address: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log(values);
    // const { register } = this.props;
    // return register(values).then(errors => displayServerErrors(errors));
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
          />
        </div>

        <GoogleMap data={data} />

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
  register: values => dispatch(authActions.register(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'placesCreate',
})(PlacesCreateForm));
