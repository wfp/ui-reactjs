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



const WSSIncomingRequests = props => {
  return (
    <div className="content">

      <Breadcrumbs home={labels.home} nextLabels={[labels.incoming_requests]} nextLinks={[props.urls.incoming]}/>

      <section>
        <h2><span className="fill-data" data-content="labels.incoming_requests"></span></h2>

        <FilterPanel />

        <Table>
          <TableHeader>
            <TableHeaderItem className="fill-data" label="labels.requestor" />
            <TableHeaderItem className="fill-data" label="labels.request" />
            <TableHeaderItem className="fill-data" label="labels.history" />
            <TableHeaderItem className="fill-data" label="labels.status" />
            <TableHeaderItem className="fill-data" label="labels.details" />
            <TableHeaderItem className="table_cols_actions" label="labels.action" />
          </TableHeader>
          <tbody className="fill-data-list" data-content="requests_awaiting">
            <tr className="template">
              <td className="fill-data-list-item" data-content="requestor"></td>
              <td>
                <a href="#">
                  <div className="fill-data-list-item" data-content="request.type"></div>
                  <div className="fill-data-list-item" data-content="request.id"></div>
                </a>
              </td>
              <td>
                <ul className="fill-data-list-item" data-fill-mode="list" data-content="history">
                  <li className="template wfp-grid">
                    <div className="wfp-u-5-6">
                      <span className="fill-data-list-item faint" data-content="date"></span>
                      <span className="fill-data-list-item" data-content="author"></span>
                    </div>
                    <div className="wfp-u-1-6 fill-data-list-item message-box" data-fill-attribute="className"
                         data-content="message"><a href="#"><i className="fa fa-fw fa-envelope"></i></a></div>

                  </li>
                </ul>
              </td>
              <td>
                <div className="fill-data-list-item status-widget"
                     data-fill-attribute="data-steps|data-done|data-state|data-require_action|data-require_action_msg"
                     data-content="status.steps|status.current|status.state|status.require_action|status.require_action_msg"></div>
              </td>
              <td>
                <ul className="fill-data-list-item" data-fill-mode="list" data-content="details">
                  <li className="template">
                    <div className="fill-data-list-item" data-content="name"></div>
                    <div className="fill-data-list-item" data-content="value"></div>
                  </li>
                </ul>
              </td>
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
            </tr>
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
