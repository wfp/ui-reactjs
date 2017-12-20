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
        Submit Form
      </UniversalModalTitle>
      <UniversalModalContent>
        <p>Are you sure you wish to confirm this action?</p>
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

const WizardNav = ({ previousPage, prevText, prevAction, nextText, nextPage, nextDisabled, prevHide, nextHide, saveShow, saveDisabled, savePage, saveText, dispatch }) => (
  <div className="wfp-wizard">
    <div>
      {prevHide !== true &&
        <button
          className="wfp-btn--primary wfp-wizard__prev"
          onClick={previousPage}
          type="button"
        >
          {prevText ? prevText : 'Previous'}
        </button>
      }
    </div>
    
    <div>
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
                label={nextText ? nextText : 'Next'}
                onClick={nextPage ?  nextPage : () => dispatch(submit('wizard'))}
              />
            }
          />
        </UniversalModal>
      }

       {(saveShow === true) &&
        <button
          className="wfp-btn--primary wfp-wizard__next"
          disabled={saveDisabled}
          onClick={savePage ?  savePage : () => dispatch(submit('wizard'))}
          type="button"
        >
          {saveText ? saveText : 'Save'}
        </button>
      }

      {(nextHide !== 'confirm' && nextHide !== true)&&
        <button
          className="wfp-btn--primary wfp-wizard__next"
          disabled={nextDisabled}
          onClick={nextPage ?  nextPage : () => dispatch(submit('wizard'))}
          type="button"
        >
          {nextText ? nextText : 'Next'}
        </button>
      }
    </div>
  </div>
);


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