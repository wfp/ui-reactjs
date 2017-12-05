import React from 'react';
import renderer from 'react-test-renderer';

import Label from './label';

test('Label Display', () => {
    const tree = renderer.create(
        <Label htmFor='element' isRequired={true} >Hallo Welt</Label>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
