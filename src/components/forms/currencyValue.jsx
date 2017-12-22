import React from 'react';
import PropTypes from 'prop-types';
import { Field, Fields, FieldArray, reduxForm, submit } from 'redux-form';

import { RenderInput, RenderCurrencyInput } from './inputs.jsx';
import InlineError from './inlineError.jsx';
import Label from './label.jsx';

const CurrencyValue = (props) => {
    return (
        <InlineError {...props}>
        <Label {...props} />
        <div className="currencyinput__wrapper">
            <Field
                name="comp_currency"
                type="text"
                disabled
                component={RenderCurrencyInput}
                label={false}
                loadOptions={props.loadOptions}
            />
            <Field
                name="comp"
                type="text"
                disabled
                component={RenderInput}
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
