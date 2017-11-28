import React from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form'

const WizardNav = ({ previousPage, prevText, nextText, nextDisabled, prevHide, nextHide, dispatch }) => (
    <div className="wfp-wizard">

        <div>
            {prevHide !== true &&
                <button type="button" onClick={previousPage}
                  className="wfp-btn--primary wfp-wizard__prev">
                    {prevText ? prevText : 'Previous'}
                </button>
            }
        </div>
        
        <div>
            {nextHide !== true &&
                <button
                    className="wfp-btn--primary wfp-wizard__next"
                    type="button"
                    onClick={() => dispatch(submit('wizard'))}
                    disabled={nextDisabled} >
                        {nextText ? nextText : 'Next'}
                </button>
            }
        </div>

    </div>
)

export default connect()(WizardNav)