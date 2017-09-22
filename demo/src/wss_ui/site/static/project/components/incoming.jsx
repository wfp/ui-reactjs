import React from 'react';
import PropTypes from 'prop-types';

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


class WSSIncomingRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      incomingRequests: [],
      filterString: ''
    };
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
  }

  dataSource(source) {
    $.getJSON(source, data => {
      this.setState({
        incomingRequests: data['incoming_requests'],
      });
    });
  }

  componentDidMount() {
    this.dataSource(this.props.src);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.filterString !== this.state.filterString) {
      this.dataSource(this.props.src + nextState.filterString);
    }
  }

  handleFilterSubmit(filters) {
    this.setState({filterString: filters});
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
    let incomingRequestsItems = this.state.incomingRequests.map((el, index) => {
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
          nextLabels={[labels.incoming_requests]}
          nextLinks={[this.props.urls.incoming]}/>

        <section>
          <h2><span>{labels.incoming_requests}</span></h2>

          <FilterPanel src={this.props.urls.request_filters} handleFilterSubmit={this.handleFilterSubmit}/>

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
  }
}


WSSIncomingRequests.propTypes = {
  className: PropTypes.string
};

export default WSSIncomingRequests;
