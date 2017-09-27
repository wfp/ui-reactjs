import React from 'react';
import PropTypes from 'prop-types';


const LogoItem = props => {
  return (
    <div className="wfp-u-1-2 wfp-u-sm-4-8 wfp-u-md-1-8 header--container">
      <h1 className="header--title ">
        <a href="/" className="header--logo">{props.title}</a>
      </h1>
    </div>
  );
};

LogoItem.propTypes = {
  title: PropTypes.string
};

export default LogoItem;
