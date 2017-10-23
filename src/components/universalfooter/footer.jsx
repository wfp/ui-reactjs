import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
  return (
  <footer className="wfp-footer--std">
    <div className="footer--top">
      <div className="wfp-grid wfp-wrapper pv2">
        <div className="wfp-u-1 wfp-u-md-3-5 tc tl-md">
        {props.children}
        </div>
        <div className="wfp-u-1 wfp-u-md-2-5 tc tr-md">
          <div className="pa1">
          <img
            src="http://cdn.wfp.org/libraries/wfpui/v0.8.0/assets/logos/dark/png/1x/en-standard.png"
            srcSet="http://cdn.wfp.org/libraries/wfpui/v0.8.0/assets/logos/dark/png/1x/en-standard.png 1x, http://cdn.wfp.org/libraries/wfpui/v0.8.0/assets/logos/dark/png/2x/en-standard.png 2x"
            className="footer--logo" alt="WFP Logo" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer--bottom fs6">
      <div className="wfp-grid wfp-wrapper">
        <div className="wfp-u-1 wfp-u-md-1-3 tc tl-md">
          <p>{props.version}</p>
        </div>
        <div className="wfp-u-1 wfp-u-md-2-3 tc tr-md">
          <p>{props.powered}</p>
        </div>
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
