import React, { Component, PropTypes } from 'react';
import { Fields, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from './configureStore';
import { withKnobs, object, boolean, text } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import DateRangePicker from '../src/components/forms/dateRangePicker';

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
           <Fields
                names={['access_from', 'access_to']}
                component={DateRangePicker}
                label="A DateRangePicker"
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

storiesOf('Forms', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('Date Range Picker',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false)
      const disabled = boolean('disabled', false)
      const dateFrom = text('Date From', '2018-04-07')
      const dateTo = text('Date To', '2018-04-09')
      return (
        <SimpleForm handleSubmit={handleSubmit} readOnly={readOnly} disabled={disabled}  initialValues={{ access_from: dateFrom, access_to: dateTo }}/>
      )
    })
  );
