import React from 'react';
import renderer from 'react-test-renderer';

import MainError from './mainError';

test('Main Error Display', () => {
    const error = {};
    const tree = renderer.create(
        <MainError error={error} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
