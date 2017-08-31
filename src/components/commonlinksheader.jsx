import React from 'react';
import PropTypes from 'prop-types';


const CommonLinksHeader = props => {
  return (
    <div
      className={props.className}
    >
      <div className="navbar">
        <header className="wfp-header-super">
          <div className="wfp-grid wfp-wrapper wfp-overbar">
            <div className="wfp-u-1-1">
              <nav className="wfp-header--menu">
                <ul className="menu--group">
                  {props.children}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};


CommonLinksHeader.propTypes = {
  className: PropTypes.string
};

export default CommonLinksHeader;
