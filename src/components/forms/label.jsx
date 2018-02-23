import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Info from './info';

const Label = ({ children, htmlFor, input, label, id, info, isRequired }) => {
  if (children !== false && label !== false) {
    const labelClass = classNames({
      'label--required': isRequired
    }); 
    return (
  		<label
	    	className={labelClass}
	    	htmlFor={id ? id : input ? input.name : ''}
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
