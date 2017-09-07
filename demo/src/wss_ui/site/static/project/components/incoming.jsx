import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumbs,
  Pages,
  FilterPanel,
  Table, TableHeader,
  TableHeaderItem, TableRow, TableRowItem
} from "wfp-wss-ui-react";

import RequestHistory from './request/historycell';
import RequestStatus from './request/statuscell';
import RequestDetails from './request/detailscell';
import RequestAvailableActions from './request/actionscell';

import {incomingRequests} from './mdata';


const WSSIncomingRequests = props => {
  let headersItems = [
    {label: "REQUESTOR"},
    {label: "REQUEST"},
    {label: "HISTORY"},
    {label: "STATUS"},
    {label: "DETAILS"},
    {label: "ACTIONS"}
  ].map((el, index) => {
    return <TableHeaderItem label={el.label} ref={index} />;
  });

  let incomingRequestsItems = incomingRequests.map((el, index) => {
    return (
      <tr>
        <td>
          {el.requestor}
        </td>
        <td>
          <a href="#">
            <div>{el.request.type}</div>
            <div>{el.request.id}</div>
          </a>
        </td>
        <RequestHistory history={el.history} />
        <RequestStatus status={el.status} />
        <RequestDetails details={el.details} />
        <RequestAvailableActions actions={el.actions} />
      </tr>
    );
  });


  return (
    <div className="content">

      <Breadcrumbs
        home="labels.home"
        nextLabels={["labels.incoming_requests"]}
        nextLinks={[props.urls.incoming]}/>

      <section>
        <h2><span className="fill-data" data-content="labels.incoming_requests"></span></h2>

        <FilterPanel />

        <Table>
          <TableHeader>
            {headersItems}
          </TableHeader>
          <tbody>
            {incomingRequestsItems}
          </tbody>
        </Table>
        <Pages/>
      </section>

    </div>
  );
};


WSSIncomingRequests.propTypes = {
  className: PropTypes.string
};

export default WSSIncomingRequests;
