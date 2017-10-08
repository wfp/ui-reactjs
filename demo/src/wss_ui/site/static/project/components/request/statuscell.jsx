import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { StatusDot, StatusEdge } from 'wfp-ui-reactjs';

const RequestStatus = props => {
  let children = [];

  for (let currentStep = 1; currentStep <= props.status.steps; currentStep++) {
    let dotClasses = classnames('dot', {
      [`${props.status.state}`]: currentStep <= props.status.current,
      'action': currentStep === props.status.current
    });
    let edgeClasses = classnames('edge', {
      [`${props.status.state}`]: currentStep < props.status.current
    });

    let dotKey = [currentStep, dotClasses.split(' ').join('-')].join('-');
    let edgeKey = [currentStep, edgeClasses.split(' ').join('-')].join('-');
    let tooltipEnabled = (currentStep === props.status.current) ? true : false;

    children.push(<StatusDot
      key={dotKey}
      statusClass={dotClasses}
      tooltipEnabled={tooltipEnabled}
    />);
    if (currentStep < props.status.steps) {
      children.push(<StatusEdge
        key={edgeKey}
        statusClass={edgeClasses}
      />);
    }
  }

  return (

    <div className="status-widget">
      {children}
    </div>

  );
};

RequestStatus.propTypes = {};

export default RequestStatus;
