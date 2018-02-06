import React from 'react';
import PropTypes from 'prop-types';
import { Field, Fields, FieldArray, reduxForm, submit } from 'redux-form';

import { RenderInput, RenderCurrencyInput } from './inputs.jsx';
import InlineError from './inlineError.jsx';
import Label from './label.jsx';
import normalizeDecimalSeperator from '../../utils/normalizers/normalizeDecimalSeperator';

const CurrencyValue = (props) => {
    const { disabled, id, loadOptions} = props;
    return (
        <InlineError {...props}>
        <Label {...props} />
        <div className="currencyinput__wrapper">
            <Field
                name="comp_currency"
                type="text"
                disabled={disabled}
                component={RenderCurrencyInput}
                label={false}
                loadOptions={loadOptions}
            />
            <Field
                name="comp"
                type="text"
                disabled={disabled}
                id={id}
                component={RenderInput}
                normalize={normalizeDecimalSeperator}
                label={false}
                wrapper={false}
            />
        </div>
        </InlineError>
    );
};

CurrencyValue.propTypes = {
    loadOptions: PropTypes.func
};

export default CurrencyValue;
