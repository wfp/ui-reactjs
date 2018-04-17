import React, {Component, PropTypes} from 'react';
import {Field, reduxForm} from 'redux-form';

import {storiesOf} from '@storybook/react';
import {withKnobs, object, text, boolean} from '@storybook/addon-knobs/react';
import {withInfo} from '@storybook/addon-info';

import MonthPicker from '../../src/components/forms/monthPicker/MonthPicker';
import {ProviderDecorator, withSimpleForm} from "../helpers";
import {Values} from 'redux-form-website-template'
import FormWrapper from '../formWrapper';

const info = `Simple month picker`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(ProviderDecorator)
  .add('MonthPicker',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false);
      const disabled = boolean('disabled', false);
      const date = text('date', '2018-04-07')
      return (
        <FormWrapper initialValues={{month: date}}>
          <Values form="SimpleForm"/>
          <Field
            name="month"
            component={MonthPicker}
            label="Select input"
            readOnly={readOnly}
            disabled={disabled}
          />
          <button type="submit">
            Submit
          </button>
        </FormWrapper>
      )
    })
  );

