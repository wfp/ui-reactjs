import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Blockquote = (props) => {

    const { className, children, type } = props;
    const blockquoteClass = classNames({
      'blockquote' : true,
      'blockquote--light': type === "light",
      'blockquote--warning': type === "warning",
      'blockquote--info': type === "info",
      [`${className}`]: className
    }); 
    return (
  		<div
        {...props}
        className={blockquoteClass}
	    >{ children }
	    </div>
	  );
};

Blockquote.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string
};


export default Blockquote;
