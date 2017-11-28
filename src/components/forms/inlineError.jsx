import React from 'react'
import classNames from 'classnames'

const InlineError = ({ touched, error, isRequired, children }) => {

	const inputClasses = classNames({
      'required': isRequired
    }); 

  if (touched && error)
    return (
      <div className={inputClasses}>
        {children}
        <div className="error">
          {error}
        </div>
      </div>)
  else return (<div className={inputClasses}>{children}</div>)
}

export default InlineError