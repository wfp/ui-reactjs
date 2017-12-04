import React from 'react';
import PropTypes from 'prop-types';

const MainError = ({ error, submitFailed }) => {
  if (error && submitFailed === true) {
    return (
      <div className='main-error'>
        <h4 className='main-error__title'>{error.title}</h4>
        {error.fields && (
          <ul className="main-error__list">
            { Object.keys(error.fields).map((field, i) => <li key={i}>{error.fields[field]}</li>) }
          </ul>
        )}
      </div>);
  }
  else {
    return (null);
  }
};

MainError.propTypes = {
  error: PropTypes.object,
  submitFailed: PropTypes.bool
};

export default MainError;
