import React from 'react'
import PropTypes from 'prop-types'

const UniversalModalSubTitle = ({ children }) => (
  <div className="wfp-modal__sub-title">
    { children }
  </div>
);

UniversalModalSubTitle.propTypes = {
  children: PropTypes.node
};

export default UniversalModalSubTitle;
