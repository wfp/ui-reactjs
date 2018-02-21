import React from 'react';
import classNames from 'classnames';
import InlineError from '../inlineError';
import Label from '../label';
import PropTypes from 'prop-types';

import BankingDialog from './bankingDialog';


const BankingDialogInput = (props) => {
    const { data, input, id, label, disabled, wrapper, type, meta: { touched, error } } = props;

    const updateBankingData = (data) => {
      console.log("Update data", data);
      input.onChange(data);
    }

    return (
        <InlineError {...props}>
            <Label {...props} />
            {input.value &&
                <div>{input.value.bank_name} {input.value.bank_number}</div>
            }
            <BankingDialog data={data} updateBankingData={updateBankingData} />
        </InlineError>
    )
};

export default BankingDialogInput;