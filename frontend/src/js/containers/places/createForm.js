import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import renderField from '../../components/renderField';
import displayServerErrors from '../../helpers/displayServerErrors';

const categories = ['naprawa', 'sprzedaż']

class PlacesCreateForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
