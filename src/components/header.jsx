import React from 'react';
import PropTypes from 'prop-types';


const Header = props => {
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
                  <li className="menu--item"><a href="http://communities.wfp.org" className="menu--link" target="_blank">WFP Communities</a></li>
                  <li className="menu--item"><a href="http://opweb.wfp.org" className="menu--link" target="_blank">OPweb</a></li>
                  <li className="menu--item"><a href="http://docustore.wfp.org" className="menu--link" target="_blank">Docustore</a></li>
                  <li className="menu--item"><a href="http://manuals.wfp.org/" className="menu--link" target="_blank">WFP Manuals</a></li>
                  <li className="menu--item"><a href="http://newgo.wfp.org/" className="menu--link" target="_blank">WFPgo</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </div>
      {props.children}
    </div>
  );
};


Header.propTypes = {
  className: PropTypes.string
};

export default Header;
