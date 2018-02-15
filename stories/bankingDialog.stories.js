import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';

import { Provider } from 'react-redux';
import store from './configureStore';

import BankingDialog from '../src/components/forms/bankingDialog';

const data = [
  {
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "20068 PESCHIERA BORROMEO (MI),ITALY",
    "bank_number": "0100533570",
    "bank_branch": "FILIALE DI MILANO SUD EST",
    "street": "VIA GRAMSCI 4",
    "bank_key": "0100533570",
    "swift_code": "BNLIITRRMCE",
    "id": 10366
  },
  {
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "Settimo Milanese",
    "bank_number": "0100533860",
    "bank_branch": "Agenzia Settimo Milanese",
    "street": "Via Della Liberta 67",
    "bank_key": "0100533860",
    "swift_code": "BNLIITR1D9Z",
    "id": 10367
  }
];


storiesOf('Modal Dialog')
  .addDecorator(withKnobs)
  	.add('Banking Modal Dialog',
    	 withInfo({
      styles: {
       
      },
      text: 'The Default Modal Dialog used for Confirmations or Yes/no Dialogs'
    })(() => {
		const label = text('Button label', 'Open Modal');

    const updateBankingData = (data) => {
      console.log("Update data", data);
    }

	    return (
        <BankingDialog data={data} updateBankingData={updateBankingData} />
		)
	}
    )
  )