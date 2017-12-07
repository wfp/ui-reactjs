import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const InlineError = (props) => {
	const showInvalid = props.meta && (props.meta.touched && props.meta.error || props.meta.submitFailed === true && props.meta.error);

	const inputClasses = classNames({
			'required': props.isRequired,
			'wfp-form--group' : props.wrapper === true,
		 	'invalid' : showInvalid,
			[`${props.className}`]: props.className,
		}); 

	if (showInvalid)
		return (
			<div className={inputClasses}>
				{props.children}
				<div className="error">
					{props.meta.error}
				</div>
			</div>)
	else return (<div className={inputClasses}>{props.children}</div>)
}

InlineError.propTypes = {
		meta: PropTypes.object,
		children: PropTypes.node,
		className: PropTypes.string,
		required: PropTypes.bool
};

export default InlineError