import React from 'react';
import PropTypes from 'prop-types';

import {CommonLinksHeader, LinkMenuItem} from "wfp-wss-ui-react";


const WSSHeader = () => {
  return (
    <CommonLinksHeader>
        <LinkMenuItem url="http://communities.wfp.org" text="WFP Communities" />
        <LinkMenuItem url="http://opweb.wfp.org" text="OPweb" />
        <LinkMenuItem url="http://docustore.wfp.org" text="Docustore" />
        <LinkMenuItem url="http://manuals.wfp.org/" text="WFP Manuals" />
        <LinkMenuItem url="http://newgo.wfp.org/" text="WFPgo" />
    </CommonLinksHeader>
  );
};


WSSHeader.propTypes = {
  className: PropTypes.string
};

export default WSSHeader;
