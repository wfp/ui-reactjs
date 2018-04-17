import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from './configureStore';
import { withKnobs, object, boolean, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import {Values} from 'redux-form-website-template'

import DatePicker from '../src/components/forms/datePicker';
/* Currency fetch */

class SimpleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { disabled, readOnly, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        <div>
          <Field
                name="datepicker"
                type="text"
                disabled={disabled}
                component={DatePicker}
                label="Entry Date"
                readOnly={readOnly}
                wrapper
              />

          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}


SimpleForm = reduxForm({
    form: 'SimpleForm',  //Form name is same
    enableReinitialize: true
})(SimpleForm)


const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Submitted!');
}

const info = `
StaffSelect Input

##### Usage:

~~~js
<Field
    name="name"
    component={StaffSelect}
    label="Staff Member"
    readOnly={this.props.readOnly}
    loadOptions={loadStaffmembers}
/>
~~~
`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Date Picker',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false)
      const disabled = boolean('disabled', false)
      const date = text('date', '2018-04-07')
      return (
        <div>
          <Values form="SimpleForm"/>
          <SimpleForm handleSubmit={handleSubmit} readOnly={readOnly} disabled={disabled}  initialValues={{ datepicker: date }}/>
        </div>
      )
    })
  );
