import React from 'react';
import PropTypes from 'prop-types';

import LogoItem from './logoitem';
import HeaderMenuGroup from './headermenugroup';


const Header = props => {
  return (
    <header className="wfp-header-int">
      <div className="wfp-grid wfp-wrapper">

        <LogoItem title={props.title} />

        <div className="wfp-u-3-5 wfp-u-md-3-4 header--nav">
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
