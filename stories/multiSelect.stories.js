import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from './configureStore';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FormWrapper from './formWrapper';

import MultiSelect from '../src/components/forms/multiSelect';




/* Sample data */

const output = [
  {
    display_name: "MUSTERMANN, Max",
    email: "max.mustermann@wfp.org",
    enabled: "true",
    extension: "2951",
    first_name: "max",
    id: "i08700503",
    indexno: "08700503",
    last_name: "MUSTERMANN",
    org_unit_name: "RMTD Digital Solutions Delivery",
    position_title: "Business Transformation Officer",
    text: "MUSTERMANN Max (Mr.)",
    username:"max.mustermann"
  }
];

const info = `
MultiSelect Input
`;

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .add('Multi Select',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false);
      const multi = boolean('multi', true);
      const valueKey = text('valueKey', 'email');
      const labelKey = text('labelKey', 'last_name');
      const options = object('options', output);
      return (
        
        <Field
              name="name"
              component={MultiSelect}
              label="Staff Member"
              options={options}
              readOnly={readOnly}
              valueKey={valueKey}
              labelKey={labelKey}
              multi={multi}
          />
        
      )
    })
  );
