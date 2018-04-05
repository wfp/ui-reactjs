import React, { Component, PropTypes } from 'react';
import store from "./configureStore";
import { Provider } from 'react-redux';


// decorators

export const ProviderDecorator = story => <Provider store={store}>{story()}</Provider>;


// helpers

export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
