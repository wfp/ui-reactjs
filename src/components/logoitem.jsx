import React from 'react';
import PropTypes from 'prop-types';


const LogoItem = props => {
  return (
    <div className="wfp-u-1-6 header--container">
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
