import React from 'react';
import PropTypes from 'prop-types';


const HeaderMenuGroup = props => {
    const menuClasses = `header--menu ${!!props.openTrigger ? 'opened':'closed'}`;
  return (
    <nav className={menuClasses} id="js-menu-int">
      <ul className="menu--group">
        {props.children}
      </ul>
    </nav>
  );
};

HeaderMenuGroup.propTypes = {

};


export default HeaderMenuGroup;
