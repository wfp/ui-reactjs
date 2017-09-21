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


class WSSMyRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      myRequests: []
    };
  }

  componentDidMount() {
    $.getJSON(this.props.src, data => {
      this.setState({
        myRequests: data['my_requests'],
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
    let myRequestsItems = this.state.myRequests.map((el, index) => {
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

        <Breadcrumbs
          home={labels.home}
          nextLabels={[labels.my_requests]}
          nextLinks={[this.props.urls.my]}/>

        <section>
          <h2><span>{labels.my_requests}</span></h2>

          <FilterPanel/>

          <Table>
            <TableHeader>
              {headersItems}
            </TableHeader>
            <tbody>
            {myRequestsItems}
            </tbody>
          </Table>
          <Pages/>
        </section>

      </div>
    );
  }
}


WSSMyRequests.propTypes = {
  className: PropTypes.string
};

export default WSSMyRequests;
