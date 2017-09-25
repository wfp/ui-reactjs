import React from 'react';
import PropTypes from 'prop-types';


const LinkMenuItem = props => {
  let basicStyle = props.linkStyle?"menu--link":"";
  let style = props.isButton?basicStyle+" menu--link wfp-btn wfp-btn--primary":basicStyle;
  return (
    <li className="menu--item">
      <a href={props.url} className={style}>
        {props.text}
      </a>
    </li>
  );
};

LinkMenuItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  isButton : PropTypes.bool,
  linkStyle : PropTypes.bool
};

LinkMenuItem.defaultProps = {
  isButton: false,
  linkStyle : true
};

export default LinkMenuItem;
