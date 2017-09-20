import React from 'react';
import PropTypes from 'prop-types';


const LogoItem = props => {
  return (
    <div className="wfp-u-1 wfp-u-lg-1-5 wfp-u-md-1-4 header--container">
      <h1 className="header--title menuitem">
        <a href="/" className="header--logo">{props.title}</a>
      </h1>
    </div>

  );
};

LogoItem.propTypes = {
  title: PropTypes.string
};

export default LogoItem;
