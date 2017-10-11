import React from 'react';
import PropTypes from 'prop-types';

import HeaderMenuGroup from './headermenugroup';


const CorporateStrip = props => {
  return (

    <header className="wfp-header-super">
      <div className="wfp-grid wfp-wrapper wfp-overbar">
        <div className="wfp-u-1-1">
          <HeaderMenuGroup>
            {props.children}
          </HeaderMenuGroup>
        </div>
      </div>
    </header>
    

  );
};


CorporateStrip.propTypes = {
  className: PropTypes.string
};

export default CorporateStrip;


  /*

  <div className="wfp-corporatestrip">
      <div className="wfp-grid wfp-wrapper">
        <div className="wfp-u-1">
          <nav>
            <ul className="wfp-corporatestrip__wrapper">
              <li className="wfp-corporatestrip__item"><a href="http://newgo.wfp.org" rel="noopener noreferrer" target="_blank">WFP Go</a></li>
              <li className="wfp-corporatestrip__item"><a href="http://communities.wfp.org" rel="noopener noreferrer" target="_blank">WFP Communities</a></li>
              <li className="wfp-corporatestrip__item"><a href="http://opweb.wfp.org" rel="noopener noreferrer" target="_blank">OPweb</a></li>
              <li className="wfp-corporatestrip__item"><a href="http://docustore.wfp.org" rel="noopener noreferrer" target="_blank">Docustore</a></li>
              <li className="wfp-corporatestrip__item"><a href="http://manuals.wfp.org/" rel="noopener noreferrer" target="_blank">WFP Manuals</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    */
