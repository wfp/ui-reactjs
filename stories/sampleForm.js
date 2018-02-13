import React, { Component, PropTypes } from 'react';
import { Fields, Field, reduxForm } from 'redux-form';

import { RenderInput, RenderSelect, FormGroup, FormGroupTitle, FormHint } from '../src/components/forms/inputs';
import DateRangePicker from '../src/components/forms/dateRangePicker';
import DatePicker from '../src/components/forms/datePicker';
import { normalizeDecimalSeperator } from '../src/utils/normalizers/normalizeDecimalSeperator';


class SimpleForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    console.log(this);
    return (
      <form onSubmit={handleSubmit} className="wfp-form--stacked">
        <div>

          <p>This is a form. There can be blocks which are defined by FormGroups. A semantic unit has the prop type="seperate".</p>

          <FormGroup type="seperate">
            <FormGroupTitle>Optional &#60;FormGroupTitle/&#62; can introduce a FormGroup</FormGroupTitle>
              <FormHint> &#60;FormHint /&#62; define use cases, i.e. only if associated with input fields, not as introductory instructions under section title</FormHint>
              <Field
                name="cfm_comp"
                type="text"
                component={RenderInput}
                label="Every Input needs a label above the input"
                format={normalizeDecimalSeperator}
                normalize={normalizeDecimalSeperator}
                wrapper
              />
              {/*<Field
                name="cfm_comp"
                type="text"
                disabled
                component={RenderInput}
                label="A <RenderInput /> Element with an Info Tooltip"
                format={normalizeDecimalSeperator}
                info="Hello World!"
                normalize={normalizeDecimalSeperator}
                wrapper
              />
            <Field
                name="cfm_comp"
                type="text"
                component={RenderSelect}
                label="A <RenderSelect /> Element which is required"
                isRequired
                selectList={['First Element', 'Second Elemend']}
                wrapper
            />
           <Fields
                names={['access_from', 'access_to']}
                component={DateRangePicker}
                label="A DateRangePicker"
                wrapper
            />
            <Fields
                disabled
                names={['access_from', 'access_to']}
                component={DateRangePicker}
                label="A DateRangePicker"
                wrapper
            />*/}
          </FormGroup>

          <FormGroup type="seperate">
            <FormGroupTitle>A FormGroupTitle</FormGroupTitle>
            <FormHint innerHtml="First &middot; Second" />
              <Field
                name="date"
                type="text"
                component={DatePicker}
                label="A <RenderInput /> Element with an Info Tooltip"
                wrapper
              />
              {/*<Field
                name="cfm_comp"
                type="text"
                disabled
                component={DatePicker}
                label="A <RenderInput /> Element with an Info Tooltip"
                wrapper
              />*/}
            </FormGroup>
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
    //enableReinitialize: true,
    /*validate*/
})(SimpleForm)