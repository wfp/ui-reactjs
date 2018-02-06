import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import MainError from '../src/components/forms/mainError';

storiesOf('Forms')
  .addDecorator(withKnobs)
  	.add('Main Error Message',
    	 withInfo({
      styles: {
      },
      text: 'The Error message present on top of the forms if activated'
    })(() => {
		const error = object(
      'Error Object', {
        fields: ['Field error'],
        generic:['Connection to Wings not enabled','Another global error']
    });

    const submitFailed = boolean('Submit Failed', true);

    return (
    	<MainError error={error} submitFailed={submitFailed} />
		)
	}
    )
  )

