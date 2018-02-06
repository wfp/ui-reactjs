import React, { Component, PropTypes } from 'react';
import { Fields, Field, reduxForm } from 'redux-form';
import { RenderCurrencyInput, RenderInput } from '../src/components/forms/inputs';

import StaffSelect from '../src/components/forms/staffSelect';

import normalizeDecimalSeperator from '../src/utils/normalizers/normalizeDecimalSeperator';



import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import store from './configureStore';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';


/* Currency fetch */

function loadStaffmembers (input) {

  const output = [
    {
      display_name: "MUSTERMANN, Max",
      email: "max.mustermann@wfp.org",
      enabled: "true",
      extension: "2951",
      first_name: "max",
      id: "i08700503",
      indexno: "08700503",
      last_name: "MUSTERMANN",
      org_unit_name: "RMTD Digital Solutions Delivery",
      position_title: "Business Transformation Officer",
      text: "MUSTERMANN Max (Mr.)",
      username:"max.mustermann"
    }
  ]

  return Promise.resolve({ options: output });
}

class SimpleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        <div>
          <Field
              name="name"
              component={StaffSelect}
              label="Staff Member"
              readOnly={this.props.readOnly}
              loadOptions={loadStaffmembers}
              required
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
  .add('StaffSelect',

    withInfo(info)(() => {
    
    const readOnly = boolean('readOnly', false)

      return (
        <SimpleForm handleSubmit={handleSubmit} readOnly={readOnly} />
      )
    })
  );
