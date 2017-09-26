import React from 'react';
import PropTypes from 'prop-types';

import {
  CommonLinksHeader,
  Header,
  LinkMenuItem,
  SearchWidget,
  UserMenuWidget
} from "wfp-ui-reactjs";

import uuid from 'uuid';

const fakeUrls = [
 {
    id: uuid.v4(),
    url: '/profile',
    label: 'link 1'
 },
 {
    id: uuid.v4(),
    url: '/profile',
    label: 'link 2'
 },
 {
    id: uuid.v4(),
    url: '/profile',
    label: 'link 3'
 },
 {
    id: uuid.v4(),
    url: '/profile',
    label: 'link 4'
 },
];

const WSSHeader = props => {
    const userprofileUrls = fakeUrls;
  return (
    <div className="navbar">
      <CommonLinksHeader>
        <LinkMenuItem url="http://communities.wfp.org" text="WFP Communities" />
        <LinkMenuItem url="http://opweb.wfp.org" text="OPweb" />
        <LinkMenuItem url="http://docustore.wfp.org" text="Docustore" />
        <LinkMenuItem url="http://manuals.wfp.org/" text="WFP Manuals" />
        <LinkMenuItem url="http://newgo.wfp.org/" text="WFPgo" />
      </CommonLinksHeader>

      <Header title="WFP Self-Service">
        <LinkMenuItem url={props.urls.my} text="My requests" />
        <LinkMenuItem url={props.urls.incoming} text="Incoming requests" />

        <LinkMenuItem url={props.urls.create} text="Create a request" isButton={ false } />

        <SearchWidget />

        <UserMenuWidget urls={userprofileUrls} />
      </Header>
    </div>
  );
};


WSSHeader.propTypes = {
  className: PropTypes.string
};

export default WSSHeader;
