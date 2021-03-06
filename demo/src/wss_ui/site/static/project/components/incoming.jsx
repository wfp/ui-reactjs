import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumbs,
  Paginator,
  FilterPanel
} from "wfp-ui-reactjs";

import RequestTable from './request/requesttable';

class WSSIncomingRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      incomingRequests: [],
      filterString: ''
    };
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
  }
  handleFilterSubmit(filters) {
    this.setState({filterString: filters});
  }
  render() {

    return (
      <div className="content wfp-wrapper">

        <Breadcrumbs
          home={labels.home}
          nextLabels={[labels.incoming_requests]}
          nextLinks={[this.props.urls.incoming]}/>

        <section>
          <h2><span>{labels.incoming_requests}</span></h2>

          <FilterPanel src={this.props.urls.request_filters} handleFilterSubmit={this.handleFilterSubmit}/>
          <RequestTable src={this.props.src} filterString={this.state.filterString} data_key="results"/>
          <Paginator/>
        </section>

      </div>
    );
  }
}


WSSIncomingRequests.propTypes = {
  className: PropTypes.string
};

export default WSSIncomingRequests;
