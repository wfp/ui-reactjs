import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import PropTypes from 'prop-types';

import UniversalModal from '../universalmodal/modal';
import UniversalModalTitle from '../universalmodal/modaltitle';
import UniversalModalContent from '../universalmodal/modalcontent';
import UniversalModalFooter from '../universalmodal/modalfooter';
import WfpActionButton from '../wfpActionButton';


const DefaultDialogContent = (props) => {
  return (
    <div>
      <UniversalModalTitle>
        {props.dialogTitle ? props.dialogTitle : 'Submit Form'}
      </UniversalModalTitle>
      <UniversalModalContent>
        <p>{props.dialogText ? props.dialogText : 'Are you sure you wish to confirm this action?'}</p>
        <UniversalModalFooter>
          <a
            href="#"
            onClick={props.closeModal}
          >
            Cancel
          </a>
          {props.submitButton}
        </UniversalModalFooter>
      </UniversalModalContent>
    </div>
  );
};

DefaultDialogContent.propTypes = {
  submitButton: PropTypes.node
};

const WizardNav = ({ formName, previousPage, prevText, prevAction, nextText, nextPage, nextDisabled, prevHide, nextHide, saveShow, saveDisabled, savePage, saveText, dispatch }) => {
  const formNameEl = formName ? formName : "wizard";
  return (
      <div className="wfp-wizard">
          <div>
              {prevHide !== true && prevHide !== 'confirm' &&
               <button
                   className="wfp-btn--primary wfp-wizard__prev"
                   id="wizard-back"
                   onClick={previousPage}
                   type="button"
               >
                   {prevText ? prevText : 'Back'}
               </button>
              }
              {prevHide === 'confirm' &&
               <UniversalModal
                   className="wfp-modal--small"
                   trigger={<WfpActionButton
                                id="wizard-confirm-back"
                                label={prevText ? prevText : 'Back'}
                                />
                           }
               >
                   <DefaultDialogContent
                       dialogTitle="Leave form"
                       dialogText="Do you want to go back? All data will be lost"
                       submitButton={
                           <WfpActionButton
                               id="wizard-confirm-next"
                               label={nextText ? nextText : 'Proceed'}
                  onClick={previousPage}
                />
                                    }
                   />
               </UniversalModal>
              }
          </div>

          <div>


              {(saveShow === true) &&
               <button
                   className="wfp-btn wfp-wizard__save"
                   id="wizard-save"
                   disabled={saveDisabled}
                   onClick={savePage ?  savePage : () => dispatch(submit(formNameEl))}
                   type="button"
               >
                   {saveText ? saveText : 'Save'}
               </button>
              }

              {nextHide === 'confirm' &&
               <UniversalModal
                   className="wfp-modal--small"
                   trigger={<WfpActionButton
                                label={nextText ? nextText : 'Next'}
                                />
                           }
               >
                   <DefaultDialogContent
                       submitButton={
                           <WfpActionButton
                               id="wizard-submit"
                               label={nextText ? nextText : 'Next'}
                      onClick={nextPage ?  nextPage : () => dispatch(submit(formNameEl))}
                  />
                                    }
                   />
               </UniversalModal>
              }

              {(nextHide !== 'confirm' && nextHide !== true)&&
               <button
                   className="wfp-btn--primary wfp-wizard__next"
                   id="wizard-next"
                   disabled={nextDisabled}
                   onClick={nextPage ?  nextPage : () => dispatch(submit(formNameEl))}
                   type="button"
               >
                   {nextText ? nextText : 'Next'}
               </button>
              }
          </div>
      </div>
  )
};


WizardNav.propTypes = {
  dispatch: PropTypes.func,
  nextDisabled: PropTypes.bool,
  nextHide: PropTypes.bool,
  nextText: PropTypes.string,
  previousPage: PropTypes.func,
  prevHide: PropTypes.bool,
  prevText: PropTypes.string,
};

export default connect()(WizardNav);
