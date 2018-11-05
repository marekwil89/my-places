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
    return register(values).then(errors => displayServerErrors(errors));
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <p>Register</p>
        <div>
          <Field name="login" component={renderField} type="text" />
        </div>
        <hr/>
        <div>
          <Field name="password" component={renderField} type="password" />
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
