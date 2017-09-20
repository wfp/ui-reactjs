import React from 'react';
import PropTypes from 'prop-types';


const HeaderMenuGroup = props => {
  return (
    <nav className="header--menu" id="js-menu-int">
      <ul className="menu--group">
        {props.children}
      </ul>
    </nav>
  );
};

HeaderMenuGroup.propTypes = {

};


export default HeaderMenuGroup;
