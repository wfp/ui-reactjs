import React from 'react';
import PropTypes from 'prop-types';


const StatusEdge = (props) => {
  let { statusClass } = props;

  return <div className={statusClass} />;
};

StatusEdge.propTypes = {
  statusClass: PropTypes.string
};

export default StatusEdge;
