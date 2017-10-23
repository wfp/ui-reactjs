import React from 'react'
import PropTypes from 'prop-types'

const UniversalModalTitle = ({ children }) => (
  <h4 className="wfp-modal__title">
    { children }
  </h4>
);

UniversalModalTitle.propTypes = {
  title: PropTypes.string
};

export default UniversalModalTitle;
