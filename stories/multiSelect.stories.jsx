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
    text: "MUSTERMANN Max (Mr.)",
    username:"max.mustermann"
  },
  {
    display_name: "MUSTERANTON, Max",
    email: "max.smith@wfp.org",
    text: "SMITH Max (Mr.)",
    username:"max.smith"
  }
];

const info = `
The MultiSelect Input is a redux-form Field component, but can be also used as a view only component outside of redux-form.
`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .add('Multi Select',

    withInfo(info)(() => {
        const readOnly = boolean('readOnly', false);
        const multi = boolean('multi', true);
        const simpleValue = boolean('simpleValue', true);
        const valueKey = text('valueKey', 'email');
        const labelKey = text('labelKey', 'display_name');
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
                simpleValue={simpleValue}
                multi={multi}
            />

        )
    })
  );
