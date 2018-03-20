import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';

import {ProviderDecorator, sleep} from "../helpers";

import { createStore, combineReducers  } from 'redux';
import { reducer as formReducer } from 'redux-form';

import WizardNavigationForm from './wizardform/wizardform';


const emptyRequest = {
};

export const requestReducer = (state = emptyRequest, action) => {
    switch (action.type) {
    default:
        return state
    }
};

const rootReducer = combineReducers({
    data: requestReducer,
    form: formReducer
});


// Add Redux develop tools
const store = createStore(
    rootReducer
);

storiesOf('Forms', module)
    .addDecorator(ProviderDecorator)
    .add('Wizard Form', () => (
	    <div>
                <Provider store={store}>
	            <WizardNavigationForm handleSubmit={() => {}} />
                </Provider>
	    </div>));
