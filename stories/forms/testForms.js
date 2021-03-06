import React, {Component, PropTypes} from 'react';
import {
  Field, formValueSelector, reduxForm,
  SubmissionError
} from 'redux-form';


import {
  FormGroup,
  FormGroupTitle,
  FormHint,
  RenderInput
} from '../../src/components/forms/inputs';
import {validateEmail} from "../../src/utils/validation";


export class EmailValidationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {handleSubmit, pristine, reset, submitting, onSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="wfp-form--stacked">
        <div>
          <FormGroup type="separate">
            <FormGroupTitle>Email validation form</FormGroupTitle>
            <FormHint>Nice email success@mail.com</FormHint>
            <Field
              name="testErrorEmail"
              type="text"
              component={RenderInput}
              label="Input with email validation"
              validate={validateEmail}
              wrapper
            />
          </FormGroup>
        </div>
      </form>
    )
  }
}

EmailValidationForm = reduxForm({
  form: 'validateEmail'
})(EmailValidationForm);
