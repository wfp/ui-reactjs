import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, array, number } from '@storybook/addon-knobs/react';

import Summary from '../src/components/forms/summary';

import ReactPlaceholder from 'react-placeholder'


const defaultData = [
  {label: 'Lorem Ipsum', value: 'Stet clita kasd'},
  {label: 'Dolor sit amet', value: 'Magna aliquyam'},
  {label: 'Et jomen', value: 'At vero eos et'},
  {label: 'Bin Sulamen', value: 'Eirmod tempor invidunt diam nonumy eirmod tempor invidunt ut.'},
  {label: 'Justo duo dolores ', value: 'Justo duo dolores'}
];

storiesOf('Forms')
  .addDecorator(withKnobs)
  	.add('Summary',
    	withInfo({
        data: 'Overlay Loader for hiding the underlying content'
    })(() => {
		const data = array("data", defaultData);
    const columnCount = array("columnCount", 3);
	    return (
      <Summary data={data} columnCount={columnCount} />
		)
	}
    )
  )