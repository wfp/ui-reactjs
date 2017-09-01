import React from 'react';
import PropTypes from 'prop-types';


const HeaderMenuGroup = props => {
  return (
    <nav className="header--menu">
      <ul className="menu--group">
        {props.children}
      </ul>
    </nav>
  );
};

HeaderMenuGroup.propTypes = {

};


export default HeaderMenuGroup;
