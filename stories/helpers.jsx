import React, { Component, PropTypes } from 'react';
import store from "./configureStore";
import { Provider } from 'react-redux';
import FormWrapper from './formWrapper';

// decorators

export const ProviderDecorator = story => <Provider store={store}>{story()}</Provider>;
export const withSimpleForm = story =>  <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>;


// helpers

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
