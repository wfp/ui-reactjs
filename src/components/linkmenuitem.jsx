import React from 'react';
import PropTypes from 'prop-types';


const LinkMenuItem = props => {
  let basicStyle = props.linkStyle?"menu--link":"";
  let style = props.isButton?basicStyle+" menu--link wfp-btn wfp-btn--primary":basicStyle;
  return (
    <li className="menu--item">
      <a
        className={style}
        href={props.url}
      >
        {props.text}
      </a>
    </li>
  );
};

LinkMenuItem.propTypes = {
  isButton : PropTypes.bool,
  linkStyle : PropTypes.bool,
  text: PropTypes.string,
  url: PropTypes.string,
};

LinkMenuItem.defaultProps = {
  isButton: false,
  linkStyle : true
};

export default LinkMenuItem;
