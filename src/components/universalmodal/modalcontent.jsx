import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

const UniversalModalContent = ({ children, className }) => {

	const modalClasses = classNames({
		'wfp-modal__content': true,
		[`${className}`]: className,
	}); 


	return (
	  <div className={modalClasses}>
	    { children }
	  </div>
	)
};

UniversalModalContent.propTypes = {
  children: PropTypes.node
};

export default UniversalModalContent;
