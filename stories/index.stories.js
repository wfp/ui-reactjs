import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

storiesOf('Welcome', module).add('to Storybook', () => (
	<div>
		<h1>Welcome to WFP UI React</h1>
		<p>This is the library of common components</p>

		<h3>Current Applications using WFP UI and WFP UI React</h3>
		<ul>
			<li>WFP INFO</li>
			<li>WFP Selfservice</li>
		</ul>
	</div>
));

