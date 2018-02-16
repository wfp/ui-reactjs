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
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "00041 ALBANO LAZIALE (RM), ITALY",
    "bank_number": "0100538860",
    "bank_branch": "",
    "street": "VIA DEL TORRIONE 1",
    "bank_key": "0100538860",
    "swift_code": "",
    "id": 10368
  },
  {
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "ANGUILLARA (RM), ITALY",
    "bank_number": "0100538880",
    "bank_branch": "",
    "street": "",
    "bank_key": "0100538880",
    "swift_code": "",
    "id": 10369
  },
  {
    "bank_name": "BANCA NAZIONALE DEL LAVORO",
    "address_number": "",
    "city": "CIVITAVECCHIA",
    "bank_number": "0100539040",
    "bank_branch": "",
    "street": "LARGO CAVOUR 13 - VIA DORIA 5",
    "bank_key": "0102539150",
    "swift_code": "",
    "id": 15630
  },
  {
    "bank_name": "ISTITUTO SAN PAOLO-IMI",
    "address_number": "",
    "city": "",
    "bank_number": "0102549840",
    "bank_branch": "",
    "street": "",
    "bank_key": "0102549840",
    "swift_code": "",
    "id": 15631
  },
  {
    "bank_name": "INTESA SANPAOLO SPA",
    "address_number": "",
    "city": "Saronno",
    "bank_number": "0102550521",
    "bank_branch": "Agenzia 1 Saronno",
    "street": "Via Varese, 192",
    "bank_key": "0102550521",
    "swift_code": "BCITITMMXXX",
    "id": 15632
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