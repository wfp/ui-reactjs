import PropTypes from 'prop-types';
import React from 'react';

const StatusDot = (props) => {
  const { statusClass, tooltipEnabled } = props;

  console.log(tooltipEnabled);
  return (
    <div
      className={statusClass}
    />
  );
};

StatusDot.propTypes = {
  statusClass: PropTypes.string,
  tooltipEnabled: PropTypes.bool
};

export default StatusDot;
