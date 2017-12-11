import React from 'react';
import PropTypes from 'prop-types';

const FormActions = ({ error, submitFailed }) => {
	return (
		<div className="wfp-wizard wfp-wizard-actions">
			    <button type="submit" className="wfp-btn">Save Changes</button>
                <button type="submit" className="wfp-btn--primary">Submit</button>
		</div>
    );
};

FormActions.propTypes = {
	error: PropTypes.object,
	submitFailed: PropTypes.bool
};

export default FormActions;
