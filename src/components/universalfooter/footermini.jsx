import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
  <footer className="wfp-footer--mini">
    <div className="wfp-grid wfp-wrapper pv2">
      <div className="wfp-u-1 wfp-u-md-1-3 tc tl-md">
        <p className="bold">{props.powered}</p>
      </div>
      <div className="wfp-u-1 wfp-u-md-2-3 tc tr-md">
        {props.children}
      </div>
    </div>
  </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.node,
  version: PropTypes.string,
  powered: PropTypes.string
};

export default Footer;
