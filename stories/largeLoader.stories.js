import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import LargeLoaderOverlay from '../src/components/loader/largeLoaderOverlay';

import ReactPlaceholder from 'react-placeholder'

storiesOf('Loader')
  .addDecorator(withKnobs)
  	.add('Large Preloader',
    	withInfo({
        text: 'Overlay Loader for hiding the underlying content'
    })(() => {
		const empty = boolean('Empty', true);
	    return (
      <LargeLoaderOverlay empty={empty}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
  	  </LargeLoaderOverlay>
		)
	}
    )
  )