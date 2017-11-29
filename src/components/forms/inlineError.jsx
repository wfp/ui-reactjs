import React from 'react'
import classNames from 'classnames'

const InlineError = (props) => {

	const inputClasses = classNames({
      'required': props.isRequired,
      'wfp-form--group' : props.wrapper !== false,
      [`${props.className}`]: props.className,
    }); 

  if (props.meta && props.meta.touched && props.meta.error)
    return (
      <div className={inputClasses}>
        {props.children}
        <div className="error">
          {props.meta.error}
        </div>
      </div>)
  else return (<div className={inputClasses}>{props.children}</div>)
}

export default InlineError