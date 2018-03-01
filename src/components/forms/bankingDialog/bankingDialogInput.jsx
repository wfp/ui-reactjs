import React from 'react';
import classNames from 'classnames';
import InlineError from '../inlineError';
import Label from '../label';
import PropTypes from 'prop-types';

import BankingDialog from './bankingDialog';


const BankingDialogInput = (props) => {
    const { component, data, input, id, label, disabled, wrapper, type } = props;

    const updateBankingData = (data) => {
      console.log("Update data", data);
      input.onChange(data);
    }

    const value = props.value ? props.value : input ? input.value : undefined;

    let readOnly = false;

    console.log(props, component);
    if (props.readOnly === true || !props.meta) {
        readOnly = true;
    }

    return (
        <InlineError {...props}>
            <Label {...props} />
                <div className="banking-dialog-input">
                    {value ? (
                        <div className="banking-dialog-input__selected">
                            <b>{value.bank_name}</b>
                            <span>Bank Key: {value.bank_key}</span>
                        </div>
                    ):(
                        <div className="banking-dialog-input__selected banking-dialog-input__selected--no-bank">
                            No Bank selected
                        </div>
                    )}
                {readOnly !== true &&
                    <BankingDialog data={data} updateBankingData={updateBankingData} />
                }
            </div>
        </InlineError>
    )
};

export default BankingDialogInput;