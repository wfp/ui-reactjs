import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Info from './info';

const Label = ({ children, htmlFor, input, label, info, isOptional, isRequired }) => {
  if (children !== false && label !== false) {
    const labelClass = classNames({
      'label--required': isRequired,
      'label--optional': isOptional
    }); 
    return (
  		<label
	    	className={labelClass}
	    	htmlFor={input ? input.name : ''}
	    >
	    		{children ? children : label} <Info>{info}</Info>
	    </label>
	  );
  }
  else {
  	return null;
  }
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool
};

export default Label;
