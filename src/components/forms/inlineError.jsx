import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const InlineError = (props) => {

	const inputClasses = classNames({
      'required': props.isRequired,
      'wfp-form--group' : props.wrapper === true,
      'invalid' : props.meta && props.meta.touched && props.meta.error,
      [`${props.className}`]: props.className,
    }); 

  if ((props.meta && props.meta.touched && props.meta.error))
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
    require: PropTypes.bool
};

export default InlineError