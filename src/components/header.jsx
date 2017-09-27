import React from 'react';
import PropTypes from 'prop-types';

import LogoItem from './logoitem';
import HeaderMenuGroup from './headermenugroup';


const Header = props => {
  return (
    <header className="wfp-header-int">
      <div className="wfp-grid wfp-wrapper">

        <LogoItem title={props.title} />

        <div className="wfp-u-1-2 wfp-u-sm-4-8 wfp-u-md-7-8 header--nav">
            <button className="header--toggle" id="js-menu-int-trigger">Menu</button>
            <HeaderMenuGroup>{props.children}</HeaderMenuGroup>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  title: PropTypes.string
};

export default Header;
