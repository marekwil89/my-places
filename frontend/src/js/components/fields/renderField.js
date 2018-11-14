import React from 'react';
import TextField from '@material-ui/core/TextField';

const renderField = ({ input, placeholder, type, required, meta: { touched, error } }) => (
  <>
    <TextField
      required={required}
      label={placeholder}
      fullWidth
      type={type}
      {...input}
    />
    {touched && error && <span>{error}</span>}
  </>
)

export default renderField;
