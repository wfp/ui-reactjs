import React from 'react';
import PropTypes from 'prop-types';

import {
  Banner,
  CorporateStrip,
  Header,
  LinkMenuItem,
  SearchWidget,
  UserMenuWidget
} from "wfp-ui-reactjs";


const WSSHeader = props => {
  return (
    <div className="navbar">
      <Banner oldSiteUrl="/" findOutMoreUrl="/" />
      <CorporateStrip>
        <LinkMenuItem url="http://communities.wfp.org" text="WFP Communities" />
        <LinkMenuItem url="http://opweb.wfp.org" text="OPweb" />
        <LinkMenuItem url="http://docustore.wfp.org" text="Docustore" />
        <LinkMenuItem url="http://manuals.wfp.org/" text="WFP Manuals" />
        <LinkMenuItem url="http://newgo.wfp.org/" text="WFPgo" />
      </CorporateStrip>

      <Header title="WFP Self-Service">
        <LinkMenuItem url={props.urls.my} text="My requests" />
        <LinkMenuItem url={props.urls.incoming} text="Incoming" />
        <LinkMenuItem url={"/admin"} text="Manage" />
        <LinkMenuItem url={props.urls.create} text="Create a request" isButton={true} />

        <SearchWidget />

        <UserMenuWidget imagesrc={props.urls.user_image} username="Maurizio Blasilli">
          <LinkMenuItem url={props.urls.logout} text="Logout" linkStyle={false} />
        </UserMenuWidget>
      </Header>
    </div>
  );
};


WSSHeader.propTypes = {
  className: PropTypes.string
};

export default WSSHeader;
