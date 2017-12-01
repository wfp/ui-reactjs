import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const MainError = ({error}) => {
  if (error)
    return (
      <div className='main-error'>
        <h4 className='main-error__title'>{error.title}</h4>
        {error.fields && (
          <ul className="main-error__list">
            { error.fields.map((field, i) => <li key={i}>{field.message}</li>) }
          </ul>
        )}
      </div>)
  else return (null)
}

MainError.propTypes = {
    error: PropTypes.object
};

export default MainError