import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Label = ({ children, htmlFor, isRequired }) => {
  if (children !== false) {
    const labelClass = classNames({
      'label--required': isRequired
    }); 
    return (<label className={labelClass} htmlFor={htmlFor}>{children}</label>)
  }
  else return null;
};

Label.propTypes = {
  children: PropTypes.node,
  htmFor: PropTypes.string,
  isRequired: PropTypes.bool
};

export default Label