import React from 'react';
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


const FormActions = ({ error, submitFailed }) => {
	return (
		<div className="wfp-wizard wfp-wizard-actions">
			    <WfpActionButton label="Save Form" type="secondary"/>

			    <UniversalModal
			        className="wfp-modal--small"
			        trigger={<WfpActionButton label="Submit Form"/>}
			        >
			        	<DefaultDialogContent
			        		submitButton={ 
				            	<WfpActionButton
					                label="Submit Form"
				            	/>
				            }/>
			        </UniversalModal>
		</div>
    );
};

FormActions.propTypes = {
	error: PropTypes.object,
	submitFailed: PropTypes.bool
};

export default FormActions;
