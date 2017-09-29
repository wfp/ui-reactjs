import React from 'react';
import PropTypes from 'prop-types';

import {
  Breadcrumbs,
  Pages,
  FilterPanel
} from "wfp-ui-reactjs";

import RequestTable from './request/requesttable';

class WSSMyRequests extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      myRequests: [],
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
          nextLabels={[labels.my_requests]}
          nextLinks={[this.props.urls.my]}/>

        <section>
          <h2><span>{labels.my_requests}</span></h2>

          <FilterPanel src={this.props.urls.request_filters} handleFilterSubmit={this.handleFilterSubmit}/>
          <RequestTable src={this.props.src} filterString={this.state.filterString} data_key="my_requests"/>
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
