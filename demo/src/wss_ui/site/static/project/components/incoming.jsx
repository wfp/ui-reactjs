import React from 'react';
import PropTypes from 'prop-types';

// import {
//   CommonLinksHeader,
//   Header,
//   LinkMenuItem,
//   SearchWidget,
//   UserMenuWidget
// } from "wfp-wss-ui-react";


const WSSIncomingRequests = props => {
  return (
    <div className="content">

      <ul className="wfp--breadcrumbs">
        <li className="wfp--breadcrumbs--home wfp--breadcrumbs--step">
          <a href="/">
            <i className="fa fa-fw fa-home"></i>
            <span className="fill-data" data-content="labels.home">

            </span>
          </a>
        </li>
        <li className="wfp--breadcrumbs--step">
          <span className="fill-data" data-content="labels.incoming_requests"></span>
        </li>
      </ul>


      <section>
        <h2><span className="fill-data" data-content="labels.incoming_requests"></span></h2>

        <div className="wfp-filter closed">
          <div className="wfp-filter--closed">
            <div className="accordion-head">
              <a>
                <span className="title fill-data" data-content="labels.show_filters"></span>
                <span className="pull-right">
                  <i className="fa fa-fw fa-chevron-down"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="wfp-filter--open">
            <div className="accordion-head">
              <a>
                <span className="title fill-data" data-content="labels.hide_filters"></span>
                <span className="pull-right">
                    <i className="fa fa-fw fa-chevron-up"></i>
                </span>
              </a>
            </div>

            <div className="wfp-form--stacked filter_container">
              <form className="font-medium">
                <div className="wfp-grid">
                  <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                    <label className="fill-data" for="form-name" data-content="labels.form"></label>
                    <select id="form-name">
                      <option value="0" selected>All form types</option>
                      <option disabled>──────────</option>
                      <optgroup label="Filter by form type">
                        <option value="1">[HR044] Certificate of attendance and statement of school expenditures
                        </option>
                        <option value="2">[HR044] Leave Application</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                    <label className="fill-data" for="status" data-content="labels.status"></label>
                    <select id="status">
                      <option value="0" selected="">All status</option>
                      <option disabled>──────────</option>
                      <optgroup label="Filter by status">
                        <option value="1">Saved draft</option>
                        <option value="2">Submitted</option>
                        <option value="3">Supervisor acknowledge</option>
                        <option value="4">Approved</option>
                        <option value="5">Sent back</option>
                        <option value="6">Rejected</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="wfp-grid">
                  <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                    <div className="wfp-grid">
                      <div className="wfp-u-1-3 wfp-box--flat">
                        <label className="fill-data" data-content="labels.creation_date"></label>
                      </div>
                      <div className="wfp-u-1-3 wfp-box--flat pl0">
                        <label><span className="fill-data" for="from-date" data-content="labels.from"></span><span
                          className="required-symbol">*</span></label>
                        <input type="date" name="from-date"/>
                      </div>
                      <div className="wfp-u-1-3 wfp-box--flat">
                        <label><span className="fill-data" for="to-date" data-content="labels.to"></span><span
                          className="required-symbol">*</span></label>
                        <input type="date" name="to-date"/>
                      </div>
                    </div>
                  </div>
                  <div className="wfp-u-1 wfp-u-md-1-2 wfp-box--flat">
                    <label className="fill-data" for="officer-name" data-content="labels.officer"></label>
                    <select id="officer-name">
                      <optgroup label="Filter by officer name">
                        <option value="0" selected="">From everyone</option>
                        <option disabled>──────────</option>
                        <option value="1">Mario ROSSI</option>
                        <option value="2">John SMITH</option>
                      </optgroup>
                    </select>
                  </div>
                </div>
                <div className="wfp-form--actions">
                  <button className="wfp-btn wfp-btn--ghost btn-small">Clear</button>
                  <button className="wfp-btn wfp-btn--primary btn-medium">Filter</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <table rules="group" className="wfp-table">
          <thead>
            <tr>
              <th><span className="fill-data" data-content="labels.requestor"></span> <i className="fa fa-fw fa-sort"></i>
              </th>
              <th><span className="fill-data" data-content="labels.request"></span> <i className="fa fa-fw fa-sort"></i>
              </th>
              <th><span className="fill-data" data-content="labels.history"></span></th>
              <th><span className="fill-data" data-content="labels.status"></span> <i className="fa fa-fw fa-sort"></i>
              </th>
              <th><span className="fill-data" data-content="labels.details"></span></th>
              <th className="table_cols_actions"><span className="fill-data" data-content="labels.action"></span></th>
            </tr>
          </thead>
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
        </table>
        <div className="wfp-pagination">
          <ol className="pagination--wrapper">
            <li className="pagination--item">
              <a href="#" className="pagination--btn">Previous</a>
            </li>
            <li className="pagination--item active">
              <span className="pagination--btn">1</span>
            </li>
            <li className="pagination--item">
              <a href="#" className="pagination--btn">2</a>
            </li>
            <li className="pagination--item">
              <a href="#" className="pagination--btn">3</a>
            </li>
            <li className="pagination--item ellipsis">
              <span className="pagination--btn ">&hellip;</span>
            </li>
            <li className="pagination--item">
              <a href="#" className="pagination--btn">Next</a>
            </li>
          </ol>
        </div>

      </section>

    </div>
  );
};


WSSIncomingRequests.propTypes = {
  className: PropTypes.string
};

export default WSSIncomingRequests;
