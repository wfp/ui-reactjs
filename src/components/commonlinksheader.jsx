import React from 'react';
import PropTypes from 'prop-types';

import HeaderMenuGroup from './headermenugroup';


const CommonLinksHeader = props => {
  return (

    <header className="wfp-header-super">
      <div className="wfp-grid wfp-wrapper wfp-overbar">
        <div className="wfp-u-1-1">
          <button className="header--toggle header--btn wfp-visible-xs dropdown-trigger closed">WFP Websites</button>
            
              <HeaderMenuGroup className="wfp-header--menu wfp-hidden-xs dropdown">{props.children}</HeaderMenuGroup>
            
              <HeaderMenuGroup className ="wfp-header--menu wfp-hidden-xs">{props.children}</HeaderMenuGroup>

        </div>
      </div>
    </header>

  );
};


CommonLinksHeader.propTypes = {
  className: PropTypes.string
};

export default CommonLinksHeader;
