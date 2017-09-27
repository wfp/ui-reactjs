import React from 'react';
import PropTypes from 'prop-types';
import RequestTable from './request/requesttable';

import {
  Breadcrumbs,
  Pages,
  FilterPanel,
  Table, TableHeader,
  TableHeaderItem, TableRow, TableRowItem
} from "wfp-ui-reactjs";

const WSSAwaitingActionRequests =(props) => {

  return (
    <div className="content">
      <section>
        <h2><span>{labels.awaiting_your_action}</span></h2>
        <RequestTable src={props.src} data_key="awaiting_action_requests"/>
      <button className="wfp-btn btn-small xsmall"><span>{labels.view_all}</span></button>
      </section>
    </div>
  );
}


const WSSMyLatestRequests= (props) => {

  return (
    <div className="content">
      <section>
        <h2><span>{labels.your_latest_requests}</span></h2>
        <RequestTable src={props.src} data_key="my_latest_requests"/>
        <button className="wfp-btn btn-small xsmall"><span>{labels.view_all}</span></button>
      </section>
    </div>
  );
}


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
