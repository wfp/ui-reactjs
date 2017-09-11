import React from 'react';
import PropTypes from 'prop-types';
// import getJSON from 'jquery';

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


class WSSIncomingRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      incomingRequests: []
    };
  }

  componentDidMount() {
    $.getJSON(this.props.src, data => {
      this.setState({
        incomingRequests: data['incoming_requests'],
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

          <FilterPanel/>

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

// const WSSIncomingRequests = props => {
//   let headersItems = [
//     {label: "REQUESTOR"},
//     {label: "REQUEST"},
//     {label: "HISTORY"},
//     {label: "STATUS"},
//     {label: "DETAILS"},
//     {label: "ACTIONS"}
//   ].map((el, index) => {
//     return <TableHeaderItem label={el.label}/>;
//   });
//
//   let incomingRequestsItems = incomingRequests.map((el, index) => {
//     return (
//       <tr>
//         <td>
//           {el.requestor}
//         </td>
//         <td>
//           <a href="#">
//             <div>{el.request.type}</div>
//             <div>{el.request.id}</div>
//           </a>
//         </td>
//         <RequestHistory history={el.history}/>
//         <RequestStatus status={el.status}/>
//         <RequestDetails details={el.details}/>
//         <RequestAvailableActions
//           actions={el.actions} defaultAction={el.defaultAction}/>
//       </tr>
//     );
//   });
//
//
//   return (
//     <div className="content">
//
//       <Breadcrumbs
//         home={labels.home}
//         nextLabels={[labels.incoming_requests]}
//         nextLinks={[props.urls.incoming]}/>
//
//       <section>
//         <h2><span className="fill-data" data-content="labels.incoming_requests"></span></h2>
//
//         <FilterPanel/>
//
//         <Table>
//           <TableHeader>
//             {headersItems}
//           </TableHeader>
//           <tbody>
//           {incomingRequestsItems}
//           </tbody>
//         </Table>
//         <Pages/>
//       </section>
//
//     </div>
//   );
// };
//

WSSIncomingRequests.propTypes = {
  className: PropTypes.string
};

export default WSSIncomingRequests;
