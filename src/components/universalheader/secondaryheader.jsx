import React from 'react';
import PropTypes from 'prop-types';


const UniversalSecondaryHeader = props => {
  return (
       <div className={`wfp-secondaryheader ${props.className}`}>
          <div className="wfp-wrapper--tight" id="headers">
            {props.children}
            <h1 className="secondaryheader__title">{props.title}</h1>
          </div>
        </div>
  );
};

UniversalSecondaryHeader.propTypes = {
  title: PropTypes.string
};

export default UniversalSecondaryHeader;
