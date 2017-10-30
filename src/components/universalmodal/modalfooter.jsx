import React from 'react'
import PropTypes from 'prop-types'

const UniversalModalFooter = ({ children }) => (
  <div className="wfp-modal__footer">
    { children }
  </div>
);

UniversalModalFooter.propTypes = {
  children: PropTypes.node
};

export default UniversalModalFooter;
