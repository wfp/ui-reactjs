import React from "react";
import {shallow, mount} from 'enzyme';
import ReactDOM from 'react-dom';
import MonthPicker from "../../src/components/forms/monthPicker/MonthPicker";
import {SimpleForm} from "../helpers";
import {Field, reduxForm} from 'redux-form';
import Picker from "react-month-picker";


describe("<MonthPicker />", () => {
  it('renders without crashing and contains input', () => {
    const wrapper = mount(
      <SimpleForm>
        <Field
          name="name"
          component={MonthPicker}
          label="Select input"
        />
      </SimpleForm>)
    expect(wrapper.find('input').length).toBe(1);
  })

  it('readonly', () => {
    const wrapper = mount(
      <SimpleForm>
        <Field
          name="month"
          component={MonthPicker}
          label="Select input"
          readOnly={true}
        />
      </SimpleForm>)
    expect(wrapper.find('input').length).toBe(0);
  })

  it('get value from form', () => {
    const wrapper = mount(
      <SimpleForm initialValues={{month: "01/12/2018"}}>
        <Field
          name="month"
          component={MonthPicker}
          label="Select input"
        />
      </SimpleForm>)
    expect(wrapper.find('input').props().value).toBe('Jan. 2018')
  })

  it('get empty value from form', () => {
    const wrapper = mount(
      <SimpleForm initialValues={{month: ""}}>
        <Field
          name="month"
          component={MonthPicker}
          label="Select input"
        />
      </SimpleForm>)
    expect(wrapper.find('input').props().value).toBe('')
  })

  it('get empty value from form', () => {
    const wrapper = mount(
      <SimpleForm initialValues={{month: "01/12/2018"}}>
        <Field
          name="month"
          component={MonthPicker}
          label="Select input"
        />
      </SimpleForm>)
    expect(wrapper.find(Picker).props().value).toEqual({ month: 1, year: 2018 })
  })
})
