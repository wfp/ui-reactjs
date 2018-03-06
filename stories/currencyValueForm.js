import React, { Component, PropTypes } from 'react';
import { Fields, Field, reduxForm } from 'redux-form';
import { RenderCurrencyInput, RenderInput } from '../src/components/forms/inputs';

import CurrencyValue from '../src/components/forms/currencyValue';
import normalizeDecimalSeperator from '../src/utils/normalizers/normalizeDecimalSeperator';
import { withKnobs, object, boolean } from '@storybook/addon-knobs/react';

import { Values } from 'redux-form-website-template'

/* Currency fetch */

function loadCurrencies (input) {

  const output = [
    {text: "UAE Dirham", id: 147},
    {text: "Lek", id: 3},
    {text: "Armenian Dram", id: 9},
    {text: "Netherlands Antillean Guilder", id: 45}
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
        <Values form="SimpleForm" />
        <div>
            {/*<div className="currencyinput__wrapper">
            <Field
                name="currency"
                type="text"
                component={RenderCurrencyInput}
                label={false}
                loadOptions={loadCurrencies}
            />
            <Field
                name="value"
                type="text"
                component={RenderInput}
                normalize={normalizeDecimalSeperator}
                label={false}
                wrapper={false}
            />
          </div>*/}
          <Fields names={this.props.names} loadOptions={loadCurrencies} component={CurrencyValue}/>
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


export default SimpleForm = reduxForm({
    form: 'SimpleForm',  //Form name is same
    enableReinitialize: true,
    /*validate*/
})(SimpleForm)