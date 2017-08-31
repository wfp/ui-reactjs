import React from 'react';
import PropTypes from 'prop-types';


const LinkMenuItem = props => {
  return (
    <li className="menu--item">
      <a href={props.url} className="menu--link" target="_blank">
        {props.text}
      </a>
    </li>
  );
};

LinkMenuItem.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string
};

export default LinkMenuItem;
