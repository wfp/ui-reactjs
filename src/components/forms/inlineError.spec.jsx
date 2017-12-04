import React from 'react';
import renderer from 'react-test-renderer';

import InlineError from './inlineError';

test('Inline Error Display', () => {

	const props = {meta:
					{touched: true, error: true},
					required: true,
					className: 'className'
				  };
    const tree = renderer.create(
        <InlineError {...props}>
				The Content
        </InlineError>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
