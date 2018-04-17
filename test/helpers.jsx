import React, { Component, PropTypes } from 'react';
import store from "./configureStore";
import { Provider } from 'react-redux';
import FormWrapper from './formWrapper';

export const ProviderWrapper = story => <Provider store={store}>{children}</Provider>;
export const SimpleForm = ({children, initialValues, onSubmit = () => {}}) =>
  <Provider store={store}>
    <FormWrapper onSubmit={onSubmit} initialValues={initialValues}>{children}</FormWrapper>
  </Provider>;

