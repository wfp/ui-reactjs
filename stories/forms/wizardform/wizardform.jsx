import React, {Component, PropTypes} from 'react';
import {
    Field, formValueSelector, reduxForm,
    SubmissionError
} from 'redux-form';
import {connect, dispatch} from 'react-redux';

import { Values } from 'redux-form-website-template';

import {
    FormGroup,
    FormGroupTitle,
    FormHint
} from '../../../src/components/forms/inputs';

import Page1 from './page1';
import Page2 from './page2';


const numberOfPages = 2;

class WizardNavigationForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            page: 1
        }
    }

    nextPage = () => {
        if (this.state.page < numberOfPages)
            this.setState({ page: this.state.page + 1 })
    }


    previousPage = () => {
        if (this.state.page > 1)
            this.setState({ page: this.state.page - 1 })
    }

    render() {
        const {handleSubmit, pristine, reset, submitting, onSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="wfp-form--stacked">
            <div>
            <Values form="wizard" />
            <FormGroup type="seperate">
            <FormGroupTitle>Wizard Navigation Form</FormGroupTitle>
            <FormHint>Form on multiple pages</FormHint>
            {this.state.page  === 1 &&
             <Page1
                previousPage={this.previousPage}
                             onSubmit={this.nextPage}
                         />
                        }
                        {this.state.page === 2 &&
                         <Page2
                             previousPage={this.previousPage}
                             onSubmit={() => {}}
                          />
                        }
                    </FormGroup>
                </div>
            </form>
        )
    }
}

WizardNavigationForm = reduxForm({
    form: 'wizard',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(WizardNavigationForm);

export default WizardNavigationForm;
