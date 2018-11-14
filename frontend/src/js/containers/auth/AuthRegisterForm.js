import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import renderField from '../../components/fields/renderField';
import displayServerErrors from '../../helpers/displayServerErrors';

class AuthRegisterForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { register } = this.props;
    return register(values)
    // .then(errors => displayServerErrors(errors));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <Field
            name="email"
            component={renderField}
            placeholder="email"
            type="text" 
            required
          />
        </div>
        <div>
          <Field
            name="password"
            component={renderField}
            placeholder="password"
            type="text"
            required
          />
        </div>
        <div>
          <Field
            name="first_name"
            component={renderField}
            placeholder="first_name"
            type="text"
            required
          />
        </div>
        <div>
          <Field
            name="last_name"
            component={renderField}
            placeholder="last_name"
            type="text"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  register: values => dispatch(authActions.register(values)),
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'register',
})(AuthRegisterForm));
