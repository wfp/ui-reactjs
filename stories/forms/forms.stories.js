import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import store from '../configureStore';
import {EmailValidationForm} from './testForms';
import { SubmissionError } from 'redux-form';

import { Values } from 'redux-form-website-template'
import {ProviderDecorator, sleep} from "../helpers";

const asyncValidation = values => {
  return sleep(1000).then(() => {
    if (values.testErrorEmail !== "success@mail.com") {
      throw new SubmissionError({
        testErrorEmail: 'Wrong email',
      });
    } else {
      console.log("Form values:", values);
	    console.log('Submitted!');
    }
  })
};

storiesOf('Forms', module)
	.addDecorator(ProviderDecorator)
	.add('Form Errors', () => (
		<div>
			<EmailValidationForm onSubmit={asyncValidation} />
		</div>));
