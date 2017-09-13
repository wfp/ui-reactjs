import React from 'react';
import PropTypes from 'prop-types';


const LinkMenuItem = props => {
  return (
    <li className="menu--item">
      <a href={props.url} className={props.isButton ?
        "wfp-btn wfp-btn--primary" : "menu--link"}>
        {props.text}
      </a>
    </li>
  );
};

LinkMenuItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  isButton : PropTypes.bool
};

LinkMenuItem.defaultProps = {
  isButton: false
};

export default LinkMenuItem;
