import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from './configureStore';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import BankingDialogInput from '../src/components/forms/bankingDialog/bankingDialogInput';

/* Currency fetch */
const data = [
  {
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "20068 PESCHIERA BORROMEO (MI),ITALY",
    "bank_number": "0100533570",
    "bank_branch": "FILIALE DI MILANO SUD EST",
    "street": "VIA GRAMSCI 4",
    "bank_key": "0100533570",
    "swift_code": "BNLIITRRMCE",
    "id": 10366
  },
  {
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "Settimo Milanese",
    "bank_number": "0100533860",
    "bank_branch": "Agenzia Settimo Milanese",
    "street": "Via Della Liberta 67",
    "bank_key": "0100533860",
    "swift_code": "BNLIITR1D9Z",
    "id": 10367
  },
  {
    "bank_name": "BANCA MONTE DEI PASCHI DI SIENA",
    "address_number": "",
    "city": "Genova",
    "bank_number": "0103001412",
    "bank_branch": "",
    "street": "Corso Marconi 58",
    "bank_key": "0103001412",
    "swift_code": "PASCITM1G13",
    "id": 15633
  }
];
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
              component={BankingDialogInput}
              data={data}
              label="Staff Member"
              readOnly={this.props.readOnly}
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
  .add('Banking Dialog Input',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false)
      return (
        <SimpleForm handleSubmit={handleSubmit} readOnly={readOnly} />
      )
    })
  );
