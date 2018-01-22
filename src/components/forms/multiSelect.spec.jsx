import React from 'react';
import renderer from 'react-test-renderer';

import { Field, Fields, reduxForm } from 'redux-form'

import MultiSelect from './multiSelect';

test('Multi Select Field', () => {
    const error = {};
    const tree = renderer.create(
        <Field
            name="business_functions"
            label="Select a business function if needed."
            component={MultiSelect}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
