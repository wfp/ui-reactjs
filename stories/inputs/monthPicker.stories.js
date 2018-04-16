import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import MonthPicker from '../../src/components/forms/monthPicker/MonthPicker';
import {ProviderDecorator, withSimpleForm} from "../helpers";


const info = `Simple month picker`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(withSimpleForm)
  .add('MonthPicker',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false);
      const disabled = boolean('disabled', false);
      return (
        <Field
              name="name"
              component={MonthPicker}
              label="Select input"
              readOnly={readOnly}
              disabled={disabled}
          />
      )
    })
  );

