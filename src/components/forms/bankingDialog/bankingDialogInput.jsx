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
                <div className="banking-dialog-input">
                    {input.value ? (
                        <div className="banking-dialog-input__selected">
                            <b>{input.value.bank_name}</b>
                            <span>Bank Key: {input.value.bank_key}</span>
                        </div>
                    ):(
                        <div className="banking-dialog-input__selected banking-dialog-input__selected--no-bank">
                            No Bank selected
                        </div>
                    )}
                <BankingDialog data={data} updateBankingData={updateBankingData} />
            </div>
        </InlineError>
    )
};

export default BankingDialogInput;