import React from 'react';
import PropTypes from 'prop-types';
// import getJSON from 'jquery';

import {
  Breadcrumbs,
  Pages,
  FilterPanel,
  Table, TableHeader,
  TableHeaderItem, TableRow, TableRowItem
} from "wfp-ui-reactjs";

import RequestHistory from './request/historycell';
import RequestStatus from './request/statuscell';
import RequestDetails from './request/detailscell';
import RequestAvailableActions from './request/actionscell';


class WSSAwaitingActionRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      awaitingActionRequests: []
    };
  }

  componentDidMount() {
    $.getJSON(this.props.src, data => {
      this.setState({
        awaitingActionRequests: data['awaiting_action_requests'],
      });
    })
  }


  render() {
    let headersItems = [
      {label: "REQUESTOR"},
      {label: "REQUEST"},
      {label: "HISTORY"},
      {label: "STATUS"},
      {label: "DETAILS"},
      {label: "ACTIONS"}
    ].map((el, index) => {
      return <TableHeaderItem key={index} label={el.label}/>;
    });
    let awaitingActionRequestsItems = this.state.awaitingActionRequests.map((el, index) => {
      return (
        <tr key={index}>
          <td>
            {el.requestor}
          </td>
          <td>
            <a href="#">
              <div>{el.request.type}</div>
              <div>{el.request.id}</div>
            </a>
          </td>
          <RequestHistory history={el.history}/>
          <RequestStatus status={el.status}/>
          <RequestDetails details={el.details}/>
          <RequestAvailableActions
            actions={el.actions} defaultAction={el.defaultAction}/>
        </tr>
      );
    });

    return (
      <div className="content">
        <section>
          <h2><span>{labels.awaiting_your_action}</span></h2>

          <Table>
            <TableHeader>
              {headersItems}
            </TableHeader>
            <tbody>
            {awaitingActionRequestsItems}
            </tbody>
          </Table>
        </section>
        <button className="wfp-btn btn-small xsmall"><span>{labels.view_all}</span></button>
      </div>
    );
  }
}

WSSAwaitingActionRequests.propTypes = {
  className: PropTypes.string
};

class WSSMyLatestRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      myLatestRequests: []
    };
  }

  componentDidMount() {
    $.getJSON(this.props.src, data => {
      this.setState({
        myLatestRequests: data['my_latest_requests'],
      });
    })
  }


  render() {
    let headersItems = [
      {label: "REQUESTOR"},
      {label: "REQUEST"},
      {label: "HISTORY"},
      {label: "STATUS"},
      {label: "DETAILS"},
      {label: "ACTIONS"}
    ].map((el, index) => {
      return <TableHeaderItem key={index} label={el.label}/>;
    });
    let myLatestRequestsItems = this.state.myLatestRequests.map((el, index) => {
      return (
        <tr key={index}>
          <td>
            {el.requestor}
          </td>
          <td>
            <a href="#">
              <div>{el.request.type}</div>
              <div>{el.request.id}</div>
            </a>
          </td>
          <RequestHistory history={el.history}/>
          <RequestStatus status={el.status}/>
          <RequestDetails details={el.details}/>
          <RequestAvailableActions
            actions={el.actions} defaultAction={el.defaultAction}/>
        </tr>
      );
    });

    return (
      <div className="content">
        <section>
          <h2><span>{labels.your_latest_requests}</span></h2>

          <Table>
            <TableHeader>
              {headersItems}
            </TableHeader>
            <tbody>
            {myLatestRequestsItems}
            </tbody>
          </Table>

        <button className="wfp-btn btn-small xsmall"><span>{labels.view_all}</span></button>

        </section>

      </div>
    );
  }
}

WSSMyLatestRequests.propTypes = {
  className: PropTypes.string
};


class Home extends React.Component {
  render(){
    return(
      <div className="wfp-wrapper">
          <WSSAwaitingActionRequests src={this.props.urls.awaiting_action_requests}/>
          <WSSMyLatestRequests src={this.props.urls.my_latest_requests}/>
      </div>
    )
  }

}
export default Home
