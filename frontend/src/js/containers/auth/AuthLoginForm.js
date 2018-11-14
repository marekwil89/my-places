import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import renderField from '../../components/fields/renderField';
import displayServerErrors from '../../helpers/displayServerErrors';

class AuthLoginForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const { login } = this.props;
    return login(values).then(errors => displayServerErrors(errors));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <p>Login</p>
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
        <button type="submit">Submit</button>
      </form>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  login: values => dispatch(authActions.login(values)),
});

export default connect(null, mapDispatchToProps)(reduxForm({
  form: 'login'
})(AuthLoginForm));
