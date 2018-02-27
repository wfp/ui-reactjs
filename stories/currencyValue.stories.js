import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import store from './configureStore';
import CurrencyValueForm from './currencyValueForm';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';


const handleSubmit = (event) => {
	event.preventDefault();
	console.log('Submitted!');
}

const info = `
Currency Input with Value Input

##### Usage:

~~~js
<Fields
	names={this.props.names}
	loadOptions={loadCurrencies}
	component={CurrencyValue}/>
~~~
`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
	.addDecorator(story => <Provider store={store}>{story()}</Provider>)
	.add('Currency & Value',

	  withInfo(info)(() => {
		
		const names = object(
      'Input Names', ['currency', 'value']);

			return (
				<CurrencyValueForm handleSubmit={handleSubmit} names={names} />
			)
		})
  );
