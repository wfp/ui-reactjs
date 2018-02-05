import React from 'react';
import PropTypes from 'prop-types';

const LargeLoader = props => {
  return (
    <div className="wfp-spinner">
      <div className="wfp-spinner__element">
        <div className="wfp-spinner__element__rotation"></div>
        <div className="wfp-spinner__text">{props.children}</div>
      </div>
    </div>
  );
};

LargeLoader.propTypes = {
  light: PropTypes.bool,
  children: PropTypes.string
};

export default LargeLoader;
