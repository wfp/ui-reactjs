import React from 'react';
import {
    Field,
    reduxForm
} from 'redux-form';

import {
    FormGroup,
    RenderInput
} from '../../../src/components/forms/inputs';

import WizardNav from '../../../src/components/forms/wizardNav';

const isRequired = field => {
    if (!field){
        return 'Required';
    }
    else{
        return null;
    }
}

const isNumber= field => {
    if (field && isNaN(Number(field))) {
        return 'Must be a number';
    }
    else {
        return null;
    }
}


class Page2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {
            handleSubmit, previousPage,
            error, submitFailed, dispatch
        } = this.props;

        return <form onSubmit={handleSubmit} className="wfp-form--stacked">
            <FormGroup type="seperate">

                <div className="col-xs-6">
                    <Field
                        name={`phone_number`}
                        label="Phone number"
                        component={RenderInput}
                        type="text"
                        placeholder=""
                        wrapper
                        isRequired
                        validate={[isRequired]}

                    />
                </div>

                <div className="col-xs-6">
                    <Field
                        name={`amount2`}
                        label="Amount Field"
                        component={RenderInput}
                        type="text"
                        placeholder=""
                        wrapper
                        isRequired
                        validate={[isRequired, isNumber]}

                    />

                </div>

            </FormGroup>

            <WizardNav
                formName="wizard"
                previousPage={() => {
                        this.props.previousPage()
                    }}
                nextText='Proceed'
                nextPage={
                    this.props.handleSubmit
                         }
            />

        </form>
    }
}

Page2 = reduxForm({
    form: 'wizard',  //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(Page2)

export default Page2;
