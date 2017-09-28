import React from 'react';
import PropTypes from 'prop-types';


const HeaderMenuGroup = props => {
  const menuClasses = `header--menu ${!!props.openTrigger ? 'opened':'closed'}`;
  return (
    <nav className={menuClasses}>
      <ul className="menu--group">
        {props.children}
      </ul>
    </nav>
  );
};

HeaderMenuGroup.propTypes = {
  children: PropTypes.node,
  openTrigger: PropTypes.bool,
};


export default HeaderMenuGroup;
