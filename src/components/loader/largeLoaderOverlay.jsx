import React from 'react';
import PropTypes from 'prop-types';
import ReactPlaceholder from 'react-placeholder';

import LargeLoader from './largeLoader';

const LargeLoaderOverlay = props => {
  const { children, empty, label } = props;
  return (
      <div className="wfp-spinner__wrapper">
        {children}
         <ReactPlaceholder
          rows={5}
          customPlaceholder = { <LargeLoader>{label}</LargeLoader> }
          ready={!empty}
        >
          <div></div>
        </ReactPlaceholder>
      </div>
  );
};

LargeLoaderOverlay.propTypes = {
  empty: PropTypes.bool,
  children: PropTypes.string
};

export default LargeLoaderOverlay;
