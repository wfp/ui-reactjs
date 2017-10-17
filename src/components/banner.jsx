import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
  return (

    <div id="banner">
      <div className="wfp-wrapper">
        <div className="wfp-hidden-lg wfp-hidden-xl">
          {props.children}
        </div>
        <div className="wfp-hidden-md wfp-hidden-xs">
          {props.children}
        </div>
      </div>
    </div>
  );
};


Banner.propTypes = {
  className: PropTypes.string
};


export default Banner;
