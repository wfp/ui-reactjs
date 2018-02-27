import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

class SimpleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, ...other } = this.props;
    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
          {this.props.children}
      </form>
    )
  }
}

SimpleForm = reduxForm({
    form: 'SimpleForm',  //Form name is same
    enableReinitialize: true
})(SimpleForm)

export default SimpleForm;