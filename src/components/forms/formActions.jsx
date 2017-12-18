import React from 'react';
import PropTypes from 'prop-types';

import UniversalModal from '../universalmodal/modal';
import UniversalModalTitle from '../universalmodal/modaltitle';
import UniversalModalContent from '../universalmodal/modalcontent';
import UniversalModalFooter from '../universalmodal/modalfooter';
import WfpActionButton from '../wfpActionButton';

const FormActions = ({ error, modal, submitFailed }) => {
	return (
		<div className="wfp-wizard wfp-wizard-actions">
			    <WfpActionButton label="Save Form" type="secondary"/>
			    {modal}
		</div>
    );
};

FormActions.propTypes = {
	error: PropTypes.object,
	submitFailed: PropTypes.bool
};

export default FormActions;
