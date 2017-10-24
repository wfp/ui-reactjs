import PropTypes from 'prop-types';
import React from 'react';
import { Tooltip } from 'react-tippy';

import 'react-tippy/dist/tippy.css';

const StatusDot = (props) => {
  const { statusClass, tooltipEnabled, tooltip } = props;

  return (
    <Tooltip
      disabled={!tooltipEnabled}
      position={'right'}
      title={(tooltipEnabled && tooltip!=='') ? tooltip : ''}
    ><div className={statusClass} /></Tooltip>
  );
};


StatusDot.propTypes = {
  statusClass: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipEnabled: PropTypes.bool,
};

export default StatusDot;
