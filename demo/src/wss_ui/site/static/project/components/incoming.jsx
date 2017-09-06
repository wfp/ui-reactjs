import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumbs,
  Pages,
  FilterPanel
} from "wfp-wss-ui-react";


const Table = props => {
  return (
    <table className="wfp-table">
      {props.children}
    </table>
  );
};

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.children}
      </tr>
    </thead>
  );
};

const TableHeaderItem = props => {
  return (
    <th>
      <span className={props.className} data-content={props.label}>
      </span>
      <i className="fa fa-fw fa-sort"></i>
    </th>
  );
};


const TableRow = props => {
  return (
    <thead>
      <tr>
        {props.children}
      </tr>
    </thead>
  );
};

const TableRowItem = props => {
  return (
    <th>
      <span className={props.className} data-content={props.label}>
      </span>
      <i className="fa fa-fw fa-sort"></i>
    </th>
  );
};

const RequestHistory = props => {
  let historyItems = props.history.map((el, index) => {
    return (
      <li className="wfp-grid">
        <div className="wfp-u-5-6">
          <span className="hist_date" >{el.date}</span>
          <span>{el.author}</span>
        </div>
        <div className="wfp-u-1-6 message-box">
          <a href="#"><i className="fa fa-fw fa-envelope"></i></a>
        </div>
      </li>
    );
  });
  return (
    <td>
      <ul>
        {historyItems}
      </ul>
    </td>
  );
};

const RequestStatus = props => {
  let children = [];

  for (let currentStep = 1; currentStep <= props.status.steps; currentStep++)
  {
    let dotClass = currentStep <= props.status.current ? "dot " + props.status.state : "dot";
    let edgeClass = currentStep < props.status.current ? "edge " + props.status.state : "edge";

    if (currentStep == props.status.current) {
      dotClass = dotClass + " action";
    }

    children.push(<div className={dotClass} />);
    if (currentStep < props.status.steps) {
      children.push(<div className={edgeClass} />);
    }
  }

  return (
    <td>
      <div className="status-widget">
        {children}
      </div>
    </td>
  );
};

const RequestDetails = props => {
  let detailsItems = props.details.map((el, index) => {
    return (
      <li>
        <div>{el.name}</div>
        <div>{el.value}</div>
      </li>
    );
  });
  return (
    <td>
      <ul>
        {detailsItems}
      </ul>
    </td>
  );
};

const RequestAvailableActions = prpps => {
  return (
    <td>
      <div className="inline-actions">
        <span className="fill-data-list-item" data-fill-mode="list" data-content="actions">
          <span className="template">
            <button className="wfp-btn btn-small xsmall fill-data-list-item"
                    data-fill-attribute="className" data-content="mode"><span
              className=" fill-data-list-item" data-content="name"></span></button>
          </span>
        </span>
        <span className="fill-data-list-item" data-fill-mode="list" data-content="secondary_actions">
          <button className="wfp-btn xsmall other dropdown-trigger closed"><i
                  className="fa fa-fw fa-chevron-down"></i></button>
          <div className="dropdown">
            <ul className="menu--group">
              <div className="template">
                <li className="menu--item "><a className=""><span className="fill-data-list-item"
                                                                  data-content="name"></span></a></li>
              </div>
            </ul>
          </div>
        </span>
      </div>
    </td>
  );
};

const WSSIncomingRequests = props => {
  let headersItems = [
    {label: "labels.requestor", className: "fill-data"},
    {label: "labels.request", className: "fill-data"},
    {label: "labels.history", className: "fill-data"},
    {label: "labels.status", className: "fill-data"},
    {label: "labels.details", className: "fill-data"},
    {label: "labels.action", className: "fill-data table_cols_actions"}
  ].map((el, index) => {
    return <TableHeaderItem className={el.className} label={el.label} ref={index} />;
  });

  let incomingRequestsItems = [{
    requestor: "Raffaele FABOZZI",
    request: { type: "HR044 - Leave Application", id: "HR-015715" },
    history: [{ date: "Monday 26 June 2017", author: "Submit by Raffaele FABOZZI", message: 124 }],
    status: {
      steps: 4,
      current: 1,
      state: "working"
    },
    details: [{ name: "Leave date", value: "Friday 30 June 2017" }],
    actions: {}
  }, {
    requestor: "Michele MERCALDO",
    request: { type: "HR044 - Leave Application", id: "HR-015710" },
    history: [{ date: "Monday 26 June 2017", author: "Submit by Michele MERCALDO" }],
    status: {
      steps: 4,
      current: 1,
      state: "working"
    },
    details: [{ name: "Leave date", value: "Friday 30 June 2017" }],
    actions: {}
  }, {
    requestor: "Enrico GARAVINI",
    request: { type: "HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)", id: "HR-015703" },
    history: [{ date: "Monday 26 June 2017", author: "Submit by Enrico GARAVINI", message: 124 }],
    status: {
      steps: 4,
      current: 1,
      state: "working"
    },
    details: [{ name: "Leave date", value: "Friday 30 June 2017" }],
    actions: {}
  }, {
    requestor: "Enrico GARAVINI",
    request: { type: "HR045b - Attendance sheet for Consultants and HQ SSAs (WINGS integrated)", id: "HR-015703" },
    history: [{ date: "Sunday 25 June 2017", author: "Submit by Michele MERCALDO" }, { date: "Sunday 25 June 2017", author: "Approve by Maurizio BLASILLI" }, { date: "Monday 26 June 2017", author: "Approve by WINGS" }],
    status: {
      steps: 4,
      current: 4,
      state: "success"
    },
    details: [{ name: "Leave date", value: "Friday 16 June 2017" }],
    actions: {}
  }].map((el, index) => {
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
