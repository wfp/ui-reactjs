import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { FormHint } from '../../src/components/forms/inputs';
import Blockquote from '../../src/components/blockquote';


storiesOf('Elements')
  .addDecorator(withKnobs)
  	.add('Blockquote',
    	 withInfo({
      styles: {
       
      },
      text: 'The Blockquote Component'
    })(() => {
		const content = text('Content', 'This is the content');
		const type = text('type', 'warning');
		const innerHtml = text('innerHtml', undefined);
	    return (
	      	<div>
	      		<Blockquote type={type} innerHtml={innerHtml}>{content}</Blockquote>
	      	</div>
		)
	}
    )
  )