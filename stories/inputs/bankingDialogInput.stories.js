import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../configureStore';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

import FormWrapper from '../formWrapper';

import BankingDialogInput from '../../src/components/forms/bankingDialog/bankingDialogInput';

/* Sample data */

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

const info = `
The Banking Dialog Input is a redux-form Field component.
`;

storiesOf('Inputs', module)
  .addDecorator(withKnobs)
  .addDecorator(story => <Provider store={store}><FormWrapper>{story()}</FormWrapper></Provider>)
  .add('Banking Dialog Input',

    withInfo(info)(() => {
      const readOnly = boolean('readOnly', false);

      const clear = () => {
        console.log(clear);
        alert("Cleared Input")
      };

      return (
        <div>
        <Field
              data={data}
              name="name"
              component={BankingDialogInput}
              label="Select from WINGS Banks"
              readOnly={readOnly}
              onClear={clear}
          />

          <BankingDialogInput 
            value={{bank_name: "Test Bank", bank_key: "1233"}}/>

        </div>
        
      )
    })
  );
