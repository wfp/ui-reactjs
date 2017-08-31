import React from 'react';
import PropTypes from 'prop-types';

import LogoItem from './logoitem';


const Header = props => {
  return (
    <header className="wfp-header-int">
      <div className="wfp-grid wfp-wrapper">

        <LogoItem title={props.title} />

        <div className="wfp-u-3-5 wfp-u-md-3-4 header--nav">
          <nav className="header--menu">
            <ul className="menu--group">
              {props.children}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};


Header.propTypes = {
  title: PropTypes.string
};

export default Header;
