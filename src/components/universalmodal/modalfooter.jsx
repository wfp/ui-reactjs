import React from 'react'
import PropTypes from 'prop-types'

const UniversalModalContent = ({ children }) => (
  <div className="wfp-modal__footer">
    { children }
  </div>
);

UniversalModalContent.propTypes = {
  children: PropTypes.node
};

export default UniversalModalContent;
